# Unassigned author field-classification boundary

## Summary

Treats unassigned author records as evidence about source and classification coverage rather than as a harmless residual bucket.

## Canonical Form

- Unit of analysis: author profile without a stable field or subfield assignment.
- Typical representation: unassigned-rate table by output count, venue type, document type, and field-adjacent categories.
- Validation target: denominator bias from excluding or pooling unclassified authors.
- Empirical signature: unassigned authors cluster in low-output, conference-heavy, or out-of-taxonomy areas.

## Uses in Science of Science

- Audits the boundary around [field classifications](../measures/field_classifications.md) in author-level metric tables.
- Useful when minimum-publication filters and field labels jointly define an author universe.
- Connects author databases to [conference proceedings coverage gap](conference_proceedings_coverage_gap.md).

## Operationalization

- Count unassigned authors by output count, document type, venue type, country/language where available, and adjacent field signals.
- Decide whether to exclude, retain, or separately model unassigned profiles and report denominator effects.
- Run sensitivity checks for fields with high conference or nonjournal output.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) notes that unassigned scientists often have few items, conference proceedings, or journals outside the Science-Metrix classification coverage.
- This motivates treating unassigned records as a coverage boundary in author metrics.

## Caveats

- Exclusion can bias denominators for conference-heavy or underclassified fields.
- Retaining a broad unassigned category can mix unrelated mechanisms.

## Links

- [Field classifications](../measures/field_classifications.md)
- [Author primary-field share annotation](../methods/author_primary_field_share_annotation.md)
- [Conference-proceedings coverage gap](conference_proceedings_coverage_gap.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Minimum-paper author universe](../methods/minimum_paper_author_universe.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `unassigned_author_field_classification_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: unclassified author boundary; unassigned-field author audit; author field-assignment residual
