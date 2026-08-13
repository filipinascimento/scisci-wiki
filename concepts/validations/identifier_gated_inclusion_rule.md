# Identifier-gated inclusion rule

## Summary

Broad scholarly databases can claim low selectivity while still making practical inclusion depend on recognized persistent identifiers.

## Canonical Form

- Unit of analysis: research object, identifier, DOI, PMID, ORCID, grant ID, patent number, clinical-trial ID, ISSN, or organization ID.
- Typical representation: entity eligibility table keyed to recognized persistent identifiers.
- Mechanism, measurement, or validation target: coverage boundary created by identifier availability.
- Empirical signature: objects without recognized identifiers are less likely to enter the database even when they are scholarly.

## Uses in Science of Science

- Refines Dimensions coverage validation by linking it to [dimensions](../datasets/dimensions.md) and [scholarly identifier spine](../representations/scholarly_identifier_spine.md).
- Useful as a reusable check when [doi denominator coverage bias](doi_denominator_coverage_bias.md) is used in science-of-science inference.
- Creates cross-links to [crossref doi sampling frame](../datasets/crossref_doi_sampling_frame.md) so the motif is not interpreted in isolation.

## Operationalization

- Track entity eligibility by identifier presence for works, people, funders, patents, trials, venues, and institutions.
- Report coverage loss for records without DOI, PMID, ORCID, grant ID, patent number, trial ID, ISSN, GRID, ROR, or similar identifiers.
- Treat identifier absence as a possible coverage mechanism rather than true absence of activity.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) says Dimensions aims not to be selective but uses association with a recognized unique identifier as the inclusion bar.
- The rule makes identifier infrastructure part of the dataset's effective scope.

## Caveats

- Identifier availability creates blind spots for books, local outputs, older records, weakly standardized funder data, and regional sources.
- Identifier-gated coverage can look like field or country differences if not audited.

## Links

- [Dimensions](../datasets/dimensions.md)
- [Scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [Crossref DOI sampling frame](../datasets/crossref_doi_sampling_frame.md)
- [OpenAlex canonical external IDs](../representations/openalex_canonical_external_ids.md)
- [Citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `identifier_gated_inclusion_rule`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: identifier inclusion gate; PID coverage rule; recognized-ID editorial hurdle
