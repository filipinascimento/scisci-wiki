# OpenAlex missing funding and corresponding-author metadata

## Summary

OpenAlex missing funding and corresponding-author metadata is the validation caveat that some important evaluation and career-analysis fields were absent from early OpenAlex records and must be cross-checked or supplemented before use.

## Canonical Form

- Unit of analysis: OpenAlex work, funding-source field, corresponding-author field, authorship object, grant relation, or metadata completeness audit.
- Typical representation: missing-field indicator, source-comparison table, supplemented relation table, or exclusion warning.
- Validation target: prevent OpenAlex-derived analyses from silently treating missing funding or corresponding-author data as true absence.
- Empirical signature: analyses that need grants, funders, corresponding authors, or responsible-author roles require a supplemental source layer.

## Uses in Science of Science

- Splits a concrete field-level caveat out of [OpenAlex metadata validation gap](openalex_metadata_validation_gap.md).
- Helps decide when [Dimensions](../datasets/dimensions.md), Crossref, PubMed, publisher acknowledgments, or local full text should supplement [OpenAlex](../datasets/openalex.md).
- Supports grant-linkage workflows such as [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md) and [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md).
- Warns against using the [OpenAlex authorship object](../representations/openalex_authorship_object.md) as a complete corresponding-author or author-role record.

## Operationalization

- Before using OpenAlex for funding or corresponding-author questions, inspect whether the relevant fields exist in the target snapshot and how they are populated.
- Preserve missingness separately from negative evidence; missing funding metadata does not mean a work was unfunded.
- Supplement funding links from Dimensions, PubMed grant records, funder APIs, publisher acknowledgments, or full text when needed.
- Supplement corresponding-author roles from publisher metadata, contribution statements, full text, or curated journal datasets where the role matters.
- Report source-specific denominators and validation samples for any imputed or supplemented fields.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that OpenAlex lacked metadata about funding sources at the time of publication.
- The same limitations section states that OpenAlex lacked metadata about corresponding authors.
- Priem et al. connect these gaps to a broader need to validate completeness and accuracy, especially because metadata can be used in high-stakes evaluation contexts.
- This caveat is narrower than general OpenAlex validation: it marks field absence for two common science-of-science use cases, funding linkage and author-role analysis.

## Caveats

- OpenAlex evolves; a later snapshot may add or improve these fields, so the caveat must be tied to a snapshot date.
- Supplemental sources have their own missingness, matching error, and access restrictions.
- Corresponding author can be a journal-specific communication role, not a universal contribution or leadership measure.
- Funding acknowledgment presence is not the same as funding amount, funding mechanism, or causal funding effect.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex metadata validation gap](openalex_metadata_validation_gap.md)
- [OpenAlex authorship object](../representations/openalex_authorship_object.md)
- [Dimensions](../datasets/dimensions.md)
- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md)
- [funding acknowledgments](../datasets/funding_acknowledgments.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_missing_funding_corresponding_author_metadata`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex funding metadata gap; OpenAlex corresponding-author gap; missing funding fields; missing responsible-author metadata
