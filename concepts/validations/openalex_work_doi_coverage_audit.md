# OpenAlex work DOI coverage audit

## Summary

OpenAlex work DOI coverage audit measures the share and profile of OpenAlex works that have DOI identifiers, so DOI-based joins do not silently redefine the scholarly denominator.

## Canonical Form

- Unit of analysis: OpenAlex work, DOI field, OpenAlex ID, publication year, source type, field, document type, language, or snapshot.
- Typical representation: DOI-present share, missing-DOI share, DOI coverage profile, and excluded-work denominator table.
- Validation target: determine whether DOI-anchored OpenAlex workflows generalize to all OpenAlex works or only DOI-bearing works.
- Empirical signature: DOI coverage is incomplete and uneven, so DOI joins can drop large or structured parts of the work graph.

## Uses in Science of Science

- Specializes [DOI denominator coverage bias](doi_denominator_coverage_bias.md) for OpenAlex-based paper matching and enrichment.
- Validates [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md) before using DOI as the primary work key.
- Supports DOI-based linking across [OpenAlex](../datasets/openalex.md), [Dimensions](../datasets/dimensions.md), Crossref, Web of Science, PubMed, and local paper manifests.
- Helps decide when to retain OpenAlex IDs as the main key and treat DOI as an optional crosswalk field.

## Operationalization

- Compute DOI coverage for the target OpenAlex work universe in a dated snapshot or API extract.
- Stratify coverage by publication year, work type, source, field or concept, language, venue type, and open-access or repository status when available.
- Preserve missing DOI records in denominator tables, and document when downstream analysis is DOI-bearing only.
- Apply [DOI recovery consistency checks](../methods/doi_recovery_consistency_checks.md) before adding inferred or recovered DOI matches.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that the canonical external ID for OpenAlex works is DOI.
- The same paper reports that OpenAlex indexed about 209 million works at the time and that about half of works had a DOI.
- Priem et al. state that all entities receive persistent OpenAlex IDs, which means non-DOI works can still be retained with source-native keys.
- This evidence motivates preserving OpenAlex IDs and DOI coverage flags separately in science-of-science joins.

## Caveats

- DOI coverage changes as OpenAlex ingests and normalizes additional records.
- DOI absence is not random; books, older works, repository records, local journals, and some non-English outputs may be affected differently.
- DOI recovery can introduce false matches if title, year, venue, and version checks are not enforced.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [DOI recovery consistency checks](../methods/doi_recovery_consistency_checks.md)
- [Dimensions](../datasets/dimensions.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_work_doi_coverage_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex DOI coverage; OpenAlex work identifier coverage; missing DOI audit; DOI-bearing OpenAlex denominator
