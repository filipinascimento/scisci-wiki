# SciSciNet-Dimensions grant-linkage validation

## Summary

SciSciNet-Dimensions grant-linkage validation compares paper-grant pairs in SciSciNet against Dimensions to assess coverage and agreement of funding-output links.

## Canonical Form

- Unit of analysis: paper-grant pair, DOI, NSF award number, NIH project number, database pair, or funder-specific linkage table.
- Typical representation: matched-pair overlap, confusion matrix, grant-level paper-count correlation, and source-specific coverage share.
- Validation target: whether open paper-grant linkage construction recovers links comparable to a commercial database.
- Empirical signature: large overlap between source-specific paper-grant pairs and high grant-level correlation in matched records.

## Uses in Science of Science

- Validates [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md) before using them for funding-impact or grant-review studies.
- Clarifies how much confidence to place in stale-but-useful SciSciNet grant links relative to fresh Dimensions grant metadata.
- Gives a reusable validation design for comparing source-specific relation tables.
- Helps distinguish link coverage problems from downstream causal-identification problems.

## Operationalization

- Align paper identifiers through DOI and grant identifiers through NSF award or NIH project numbers.
- Compare funders separately because link routes and reporting conventions differ.
- Report pair counts in both sources, overlap shares in each direction, and source-specific unmatched pairs.
- Compare the number of papers matched to each grant using rank correlations.
- Preserve snapshot dates and source extraction routes.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) validates SciSciNet paper-grant links against Dimensions over 2000-2020.
- For NSF, Lin et al. report similar pair coverage: 670,770 pairs in Dimensions and 632,568 in SciSciNet; 78.9% of Dimensions pairs and 83.7% of SciSciNet pairs are found in the other source.
- For NIH, they report that 95.3% of Dimensions pairs and 99.7% of SciSciNet pairs are shared across sources.
- At the grant level, the paper reports Spearman correlations of 0.973 for NIH grants and 0.714 for NSF grants in the number of matched papers per grant.

## Caveats

- Dimensions is a comparison source, not absolute ground truth.
- DOI and grant-number matching miss records without standardized identifiers or with inconsistent grant-number formats.
- Agreement in pair coverage does not establish the causal effect of funding.

## Links

- [grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [Dimensions](../datasets/dimensions.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)
- [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [funding acknowledgments and grant links](../datasets/funding_acknowledgments.md)
- [funding-threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_dimensions_grant_linkage_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: grant-linkage cross-validation; Dimensions grant-pair comparison; NSF NIH linkage validation; paper-grant overlap audit
