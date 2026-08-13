# Same-direction significance vote counting

## Summary

One replication-success indicator counts whether the replication effect is statistically significant in the same direction as the original effect.

## Canonical Form

- Unit of analysis: original effect, replication effect, p-value, direction, or binary success indicator.
- Typical representation: binary vote-counting indicator requiring same-direction statistical significance.
- Mechanism, measurement, or validation target: simple replication-success classification.
- Empirical signature: a replication is counted as successful only when its p-value crosses the threshold and its effect direction matches the original.

## Uses in Science of Science

- Connects replication success measurement to [replication success indicator suite](replication_success_indicator_suite.md) and [replication p value distribution diagnostic](../validations/replication_p_value_distribution_diagnostic.md).
- Provides a reusable motif for comparing [replication power expectation gap](../validations/replication_power_expectation_gap.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [original evidence reproducibility gradient](../mechanisms/original_evidence_reproducibility_gradient.md) in linked scholarly data.

## Operationalization

- Extract the original effect direction and the replication test statistic or p-value.
- Code success when the replication result is significant and has the same sign as the original effect.
- Report this indicator alongside effect-size, confidence-interval, subjective, and meta-analytic indicators.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) reports replication success using several criteria, including whether the replication achieved statistical significance in the same direction as the original.
- The paper shows this vote-counting indicator is only one member of a non-equivalent success suite.

## Caveats

- Vote counting discards effect-size magnitude and uncertainty.
- The indicator is sensitive to sample size and should not be treated as a complete truth status.

## Links

- [Replication success indicator suite](replication_success_indicator_suite.md)
- [Replication p-value distribution diagnostic](../validations/replication_p_value_distribution_diagnostic.md)
- [Replication power expectation gap](../validations/replication_power_expectation_gap.md)
- [Original-evidence reproducibility gradient](../mechanisms/original_evidence_reproducibility_gradient.md)
- [Study power and false-positive risk](study_power_false_positive_risk.md)
- [Replication effect-size shrinkage](replication_effect_size_shrinkage.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `same_direction_significance_vote_counting`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: same-direction significance criterion; replication vote-counting success; significant same-sign replication; binary replication success vote
