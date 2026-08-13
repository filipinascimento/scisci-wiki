# Replication meta-analytic recombination

## Summary

Replication meta-analytic recombination combines the original estimate and the replication estimate to assess cumulative evidence while accounting for the precision of both studies.

## Canonical Form

- Unit of analysis: original-replication pair, harmonized effect size, standard error, fixed-effect estimate, confidence interval, or combined-evidence indicator.
- Typical representation: inverse-variance weighted effect, fixed-effect meta-analysis, combined confidence interval, or significant combined estimate flag.
- Method target: move beyond separate original and replication significance tests by estimating the cumulative evidence for the focal effect.
- Empirical signature: original and replication estimates are weighted by precision, and the combined interval is checked against a null value.

## Uses in Science of Science

- Extends [replication success indicator suites](../measures/replication_success_indicator_suite.md) with a cumulative-evidence criterion.
- Uses [replication effect harmonization](replication_effect_harmonization.md) so original and replication effects can be combined.
- Helps interpret [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md), because a smaller replication estimate can still leave nonzero cumulative evidence.
- Provides an evidence-accumulation bridge to [replication and reproducibility](../validations/replication_reproducibility.md) without treating one replication as definitive.

## Operationalization

- Harmonize original and replication effect sizes and compute standard errors where possible.
- Choose the meta-analytic model and justify whether fixed-effect assumptions are defensible for paired direct replications.
- Weight estimates by inverse variance or another declared precision rule.
- Report the combined estimate, confidence interval, and whether the interval excludes the null.
- State whether the original study may be biased by publication, selection, or reporting effects before interpreting combined evidence.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) uses fixed-effect meta-analyses on Fisher-transformed correlations for the subset where standard errors could be computed.
- The paper describes combining original and replication studies by inverse-variance weighting to estimate cumulative evidence and precision.
- In the aggregate results, 51 of 75 computable combined estimates, or 68%, had 95% confidence intervals that did not include zero.
- The authors caution that if original estimates are inflated by publication, selection, or reporting bias, replication estimates may be better estimates than combined original-plus-replication results.

## Caveats

- Recombining a biased original estimate can preserve some original-study inflation.
- Fixed-effect assumptions may be too strong when samples, settings, or procedures differ.
- The method applies only to pairs with enough information to compute comparable standard errors.

## Links

- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication effect harmonization](replication_effect_harmonization.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [direct replication protocol](direct_replication_protocol.md)
- [publication bias and selective reporting](../mechanisms/publication_bias_selective_reporting.md)
- [study power and false-positive risk](../measures/study_power_false_positive_risk.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_meta_analytic_recombination`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: original-replication meta-analysis; cumulative replication evidence; combined original replication estimate; fixed-effect replication recombination
