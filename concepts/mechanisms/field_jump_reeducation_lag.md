# Field-jump reeducation lag

## Summary

Switching technological fields may require reeducation, creating longer lags between consecutive inventions.

## Canonical Form

- Unit of analysis: inventor, patent sequence, technology field, field switch, application lag, or retraining period.
- Typical representation: lag comparison for consecutive patent applications conditional on field switching.
- Mechanism, measurement, or validation target: training cost of cross-field movement under knowledge burden.
- Empirical signature: field switchers show longer intervals between applications than inventors staying in the same field.

## Uses in Science of Science

- Refines knowledge-burden specialization mechanism by linking it to [patent field jump specialization](../measures/patent_field_jump_specialization.md) and [inventor application time lag](../measures/inventor_application_time_lag.md).
- Useful as a reusable check when [fast innovator censoring correction](../validations/fast_innovator_censoring_correction.md) is used in science-of-science inference.
- Creates cross-links to [education specialization substitution](education_specialization_substitution.md) so the motif is not interpreted in isolation.

## Operationalization

- Measure time between consecutive patent applications for each inventor.
- Flag whether the next invention switches technological fields.
- Compare lag distributions for switchers and stayers while controlling for censoring and inventor pace.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) notes that field jumps are associated with larger application lags and interprets this as consistent with reeducation time when changing fields.
- The lag supplies a mechanism behind declining field-jump rates under deeper knowledge frontiers.

## Caveats

- Jones uses the observation partly to motivate and control truncation bias, not as a standalone causal estimate.
- Longer lags can also reflect project complexity or opportunity search rather than reeducation alone.

## Links

- [Patent field-jump specialization](../measures/patent_field_jump_specialization.md)
- [Inventor application time lag](../measures/inventor_application_time_lag.md)
- [Fast-innovator censoring correction](../validations/fast_innovator_censoring_correction.md)
- [Education-specialization substitution](education_specialization_substitution.md)
- [Human-capital transfer bottleneck](human_capital_transfer_bottleneck.md)
- [Burden of knowledge](burden_of_knowledge.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]

## Metadata

- Concept ID: `field_jump_reeducation_lag`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: reeducation delay; switching retraining lag; cross-field learning lag; field mobility training cost
