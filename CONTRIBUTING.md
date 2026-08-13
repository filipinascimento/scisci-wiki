# Contributing

SciSci Wiki is organized around small, consistently structured concept pages rather than long topic essays.

Before proposing a concept:

1. Check `index/concepts.csv`, titles, and aliases for an existing page.
2. Ground empirical claims in verified full text.
3. Follow `templates/concept_template.md` and the existing APA-like reference convention.
4. Link related concepts using relative Markdown links.
5. Do not guess DOI or database identifiers; use `unknown` until verified.

Run the complete validation sequence before opening a pull request:

```bash
npm ci
python scripts/validate_kb.py
npm run build
npm run check
```

Do not commit publisher PDFs, extracted subscription text, signed download URLs, local dataset paths, access tokens, or other private research artifacts.
