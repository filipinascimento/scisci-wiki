# Citation/reference count redistribution

## Summary

After paper-family canonicalization, citation and reference edges can be reassigned to primary papers and duplicate primary-pair edges removed.

## Canonical Form

- Unit of analysis: citation edge, reference edge, paper family, primary paper, or citation count.
- Typical representation: edge aggregation workflow from family-member IDs to primary-paper IDs.
- Mechanism, measurement, or validation target: citation and reference counts after publication-family deduplication.
- Empirical signature: recomputed citation and reference counts differ from raw source counts because family-member edges have been collapsed..

## Uses in Science of Science

- Turns [paper-family canonicalization](paper_family_canonicalization.md) into a count-recomputation step.
- Provides a source of [citation index snapshot dependence](../validations/citation_index_snapshot_dependence.md) for derived metrics.
- Useful before comparing SciSciNet counts against Dimensions or OpenAlex.

## Operationalization

- Restrict citation edges to the primary-paper subset.
- Aggregate family-member edges to primary IDs and remove duplicate citing-cited primary pairs.
- Recompute `Reference_Count` and `Citation_Count` and record the source snapshot.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes aggregating citation edges to primary papers, removing duplicate citation pairs, and validating redistributed counts against raw MAG counts.

## Caveats

- Recounting changes denominators and depends on the primary-paper snapshot.
- Collapsed pairs may hide meaningful version-specific citation behavior.

## Links

- [Paper-family canonicalization](paper_family_canonicalization.md)
- [Reference-citation balance](../representations/reference_citation_balance.md)
- [Citation impact indicators](../measures/citation_impact_indicators.md)
- [Citation data census dates](citation_data_census_dates.md)
- [SciSciNet-Dimensions publication validation](../validations/sciscinet_dimensions_publication_validation.md)
- [Citation-index snapshot dependence](../validations/citation_index_snapshot_dependence.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `citation_reference_count_redistribution`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: redistributed citation counts; primary-paper edge recounting; family-level citation aggregation; duplicate citation-pair removal
