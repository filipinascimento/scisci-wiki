# Canonical result reproduction validation

## Summary

Canonical result reproduction validation is the practice of validating a data lake or derived metric layer by reproducing established science-of-science findings under documented processing rules.

## Canonical Form

- Unit of analysis: data release, derived metric, benchmark finding, figure, or replication script.
- Typical representation: reproduction notebook, benchmark panel, known-result figure, or metric-layer validation table.
- Validation target: show that a data product supports expected analyses before it is used for new claims.
- Empirical signature: known patterns reappear with comparable direction, scale, and sample restrictions.

## Uses in Science of Science

- Validates [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md).
- Connects data-lake construction to [replication and reproducibility](replication_reproducibility.md).
- Applies to benchmark findings around novelty, disruption, sleeping beauties, and team science.
- Helps distinguish data-product validation from substantive discovery.

## Operationalization

- Select canonical findings with clear published definitions.
- Reproduce them using the target data release and documented metric rules.
- Report any deviations from the original sample, source coverage, or time windows.
- Treat failure to reproduce as a diagnostic for data coverage, identifier linkage, metric definition, or code.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) uses SciSciNet to reproduce several known science-of-science findings.
- The paper frames these reproductions as support for data reliability and usability.
- This motif is distinct from individual metric pages because it is a validation protocol for a data product.
- It is especially useful when derived indicators are precomputed and users may not inspect every upstream table.

## Caveats

- Reproducing a canonical result does not validate all tables or all future analyses.
- Benchmark findings can themselves depend on old data, old field definitions, or contested measures.
- Historical SciSciNet reproduction does not prove current-paper coverage.

## Links

- [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md)
- [replication and reproducibility](replication_reproducibility.md)
- [novelty-atypicality distinction](novelty_atypicality_distinction.md)
- [sleeping beauty detection](../methods/sleeping_beauty_detection.md)
- [disruption index](../measures/disruption_index.md)
- [team size disruption](../mechanisms/team_size_disruption.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; SciSciNet: W4378980478; WoS: unknown]

## Metadata

- Concept ID: `canonical_result_reproduction_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: benchmark result reproduction validation; canonical finding reproduction; data-lake reproduction validation; known-result metric validation
