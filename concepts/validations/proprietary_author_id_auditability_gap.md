# Proprietary author-ID auditability gap

## Summary

Proprietary author-ID auditability gap is the validation motif that source-provided author identifiers can be useful while remaining difficult to audit when the assignment logic is not publicly inspectable.

## Canonical Form

- Unit of analysis: author identifier, database profile, disambiguated author cluster, source database, or benchmark record.
- Typical representation: opaque source ID, proprietary clustering pipeline, transparent benchmark, or external identifier cross-check.
- Validation target: distinguish identifier availability from identifier auditability.
- Empirical signature: a database exposes author IDs but does not expose enough rules, training data, or error audits to evaluate assignment quality independently.

## Uses in Science of Science

- Adds a transparency caveat to [author name disambiguation](../methods/author_name_disambiguation.md).
- Complements [Scopus author-profile disambiguation audit](scopus_author_profile_disambiguation_audit.md) and [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md).
- Supports data-quality sections in author-level career, mobility, productivity, and inequality studies.

## Operationalization

- Classify author identifiers by source, maintenance model, and public auditability.
- Compare proprietary IDs with ResearcherID, ORCID, CVs, or sampled manual labels when available.
- Report whether errors can be decomposed into splits, merges, missing works, and false inclusions.
- Avoid treating source IDs as error-free simply because they are stable fields.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) notes that Scopus Author ID is produced automatically and that the method is not assessable publicly.
- The paper uses externally maintained ResearcherID annotations for evaluation rather than accepting opaque source IDs as a complete validation standard.
- The motif captures auditability, not whether any particular proprietary ID system performs well or poorly.

## Caveats

- Proprietary systems can still be empirically useful and may have internal quality controls.
- External identifiers are not perfect gold standards.
- Auditability varies over time as providers release documentation, APIs, or validation studies.

## Links

- [Scopus author-profile disambiguation audit](scopus_author_profile_disambiguation_audit.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [identifier-covered evaluation denominator](identifier_covered_evaluation_denominator.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `proprietary_author_id_auditability_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: opaque author-ID caveat; proprietary author cluster validation gap; source author identifier audit limit
