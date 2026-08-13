# SciSciNet-Dimensions publication validation

## Summary

SciSciNet-Dimensions publication validation compares publication coverage and citation counts in SciSciNet against Dimensions using DOI overlap.

## Canonical Form

- Unit of analysis: DOI-bearing publication, citation count, database pair, field, year, or matched paper set.
- Typical representation: overlap counts, source-specific denominators, citation-count correlation, concordance coefficient, and coverage comparison.
- Validation target: whether a curated open data lake is broadly consistent with an independent large-scale scholarly database.
- Empirical signature: high DOI overlap and high citation-count agreement across the shared publication set.

## Uses in Science of Science

- Provides a concrete form of [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) for data-lake validation.
- Helps decide whether SciSciNet is adequate for historical replication while still preferring current Dimensions/OpenAlex for recent work.
- Supplies a template for validating other curated datasets against independent sources.
- Separates publication/citation validation from grant-linkage validation.

## Operationalization

- Restrict both databases to DOI-bearing publication records if DOI is the matching key.
- Report database-specific denominators before and after DOI filtering.
- Compute overlap counts and shares relative to each source.
- Compare citation counts on matched records using rank and concordance statistics.
- Inspect source-specific unmatched records before interpreting coverage differences.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) compares SciSciNet publication coverage with Dimensions through DOI matching.
- They report 106,517,016 DOI-bearing papers in Dimensions and 98,795,857 in SciSciNet, with 84,936,278 common DOI records.
- The overlap accounts for 79.74% of Dimensions DOI-bearing papers and 85.97% of SciSciNet DOI-bearing papers.
- On the matched set, Lin et al. report high citation-count consistency: Spearman correlation 0.946 and concordance coefficient 0.940.

## Caveats

- DOI-only matching excludes publications without DOIs and may understate coverage in fields or periods with sparse DOI assignment.
- Agreement in citation counts does not prove agreement in author disambiguation, fields, affiliations, or external links.
- Dimensions and SciSciNet have different update cadences; this validation is tied to the compared snapshots.

## Links

- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [Dimensions](../datasets/dimensions.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_dimensions_publication_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: SciSciNet Dimensions coverage check; DOI overlap validation; publication database cross-validation; citation-count cross-source validation
