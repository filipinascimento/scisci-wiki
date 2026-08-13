# Multi-field metric multiplicity

## Summary

Field-normalized metrics can be attached to paper-field rows rather than forced into one paper-level field assignment.

## Canonical Form

- Unit of analysis: paper-field row, field-normalized citation metric, or multilabel field assignment.
- Typical representation: paper-by-field metric table with one or more normalized rows per paper.
- Mechanism, measurement, or validation target: multilabel field context for normalized citation indicators.
- Empirical signature: one paper has multiple field-normalized values because it belongs to multiple fields..

## Uses in Science of Science

- Refines [paper-field linkages](paper_field_linkages.md) for metric computation.
- Prevents a single-field collapse in [field normalized citation impact](../measures/field_normalized_citation_impact.md).
- Connects SciSciNet metrics to [field classification sensitivity](../validations/field_classification_sensitivity.md).

## Operationalization

- Preserve Level-0 and Level-1 field rows.
- Compute normalized citation values and hit flags for each paper-field pair.
- Require downstream papers to choose aggregation rules when a paper-level value is needed.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) reports normalized citation indicators for each paper-field pair because papers may have multiple fields.

## Caveats

- Paper-level summaries require explicit aggregation over field rows.
- Field-label multiplicity can inflate row counts if treated as independent papers.

## Links

- [Paper-field linkages](paper_field_linkages.md)
- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Citation percentile indicators](../measures/citation_percentile_indicators.md)
- [Field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [Field classifications](../measures/field_classifications.md)
- [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `multi_field_metric_multiplicity`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: paper-field metric rows; multilabel field-normalized metrics; field-row metric multiplicity; paper-field normalized citation rows
