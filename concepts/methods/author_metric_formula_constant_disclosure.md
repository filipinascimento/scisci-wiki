# Author-metric formula-constant disclosure

## Summary

Requires disclosure of formula constants and component maxima needed for exact recomputation of composite author metrics.

## Canonical Form

- Unit of analysis: composite author indicator formula and source snapshot.
- Typical representation: formula, log transforms, weights, component maxima, and self-citation variant.
- Method target: exact recomputability of author composite indicators.
- Empirical signature: independent users can reproduce composite scores from released components and constants.

## Uses in Science of Science

- Turns [author citation composite indicator](../measures/author_citation_composite_indicator.md) into an auditable formula artifact.
- Useful for avoiding black-box drift across annual metric releases.
- Connects indicator design to [transparent metric construction](transparent_metric_construction.md).

## Operationalization

- Version formula, component definitions, log transforms, component maxima, source window, and self-citation policy.
- Release test cases and regression checks for score recomputation.
- Document when constants are reused or recalibrated across snapshots.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) prints the composite formula and maximum values for all six components.
- Those constants are necessary to reproduce the composite indicator exactly.

## Caveats

- Constants are snapshot-specific; reusing them on a new source snapshot can distort scores.
- Formula transparency does not settle whether the composite has evaluative validity.

## Links

- [Author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [Composite component correlation caveat](../validations/composite_component_correlation_caveat.md)
- [Metric recomputability data access](../validations/metric_recomputability_data_access.md)
- [Transparent metric construction](transparent_metric_construction.md)
- [Scholarly snapshot versioning](scholarly_snapshot_versioning.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `author_metric_formula_constant_disclosure`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: composite metric constant disclosure; author indicator formula provenance; metric recomputation constants
