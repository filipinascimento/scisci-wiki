#!/usr/bin/env python3
"""Validate the science-of-science motif wiki index and concept pages."""

from __future__ import annotations

import csv
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index" / "concepts.csv"
REQUIRED_COLUMNS = [
    "concept_id",
    "concept",
    "category",
    "status",
    "first_seen_paper",
    "first_seen_year",
    "latest_seen_paper",
    "latest_seen_year",
    "page_path",
    "primary_reference_doi",
    "openalex_id",
    "dimensions_id",
    "sciscinet_id",
    "aliases",
]
REQUIRED_HEADINGS = [
    "## Summary",
    "## Canonical Form",
    "## Uses in Science of Science",
    "## Operationalization",
    "## Evidence and Validations",
    "## Caveats",
    "## Links",
    "## References",
    "## Metadata",
]
LINK_RE = re.compile(r"\]\(([^)]+\.md)\)")


def fail(message: str) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(1)


def read_index() -> list[dict[str, str]]:
    if not INDEX.exists():
        fail(f"missing {INDEX.relative_to(ROOT)}")
    with INDEX.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if reader.fieldnames != REQUIRED_COLUMNS:
            fail(f"unexpected index columns: {reader.fieldnames}")
        rows = list(reader)
    if not rows:
        fail("index has no rows")
    return rows


def validate_index_rows(rows: list[dict[str, str]]) -> None:
    seen_ids: set[str] = set()
    seen_paths: set[str] = set()
    for row_number, row in enumerate(rows, start=2):
        concept_id = row["concept_id"].strip()
        page_path = row["page_path"].strip()
        if not concept_id:
            fail(f"row {row_number}: blank concept_id")
        if concept_id in seen_ids:
            fail(f"row {row_number}: duplicate concept_id {concept_id}")
        seen_ids.add(concept_id)
        if page_path in seen_paths:
            fail(f"row {row_number}: duplicate page_path {page_path}")
        seen_paths.add(page_path)
        if len(row["concept"]) > 80:
            fail(f"row {row_number}: concept name too long for compact index")
        for year_col in ("first_seen_year", "latest_seen_year"):
            value = row[year_col].strip()
            if value != "unknown" and not re.fullmatch(r"\d{4}", value):
                fail(f"row {row_number}: invalid {year_col}={value!r}")
        page = ROOT / page_path
        if not page.exists():
            fail(f"row {row_number}: page does not exist: {page_path}")


def validate_pages(rows: list[dict[str, str]]) -> None:
    indexed_pages = {row["page_path"] for row in rows}
    all_pages = {
        str(path.relative_to(ROOT))
        for path in (ROOT / "concepts").glob("**/*.md")
        if path.name != ".gitkeep"
    }
    missing_from_index = sorted(all_pages - indexed_pages)
    if missing_from_index:
        fail(f"concept pages missing from index: {missing_from_index}")

    for row in rows:
        rel_path = row["page_path"]
        page = ROOT / rel_path
        text = page.read_text(encoding="utf-8")
        for heading in REQUIRED_HEADINGS:
            if heading not in text:
                fail(f"{rel_path}: missing heading {heading}")
        if not text.startswith("# "):
            fail(f"{rel_path}: missing top-level title")
        if "[[" in text:
            fail(f"{rel_path}: wiki-style links found; use Markdown links")
        for link in LINK_RE.findall(text):
            target = (page.parent / link).resolve()
            try:
                target.relative_to(ROOT)
            except ValueError:
                fail(f"{rel_path}: link escapes repo: {link}")
            if not target.exists():
                fail(f"{rel_path}: broken link: {link}")


def main() -> None:
    rows = read_index()
    validate_index_rows(rows)
    validate_pages(rows)
    print(f"OK: {len(rows)} indexed concepts validated.")


if __name__ == "__main__":
    main()
