# Replication success indicator suite

## Summary

A replication success indicator suite evaluates replication outcomes with multiple non-equivalent measures rather than treating one p-value threshold as the definition of reproducibility.

## Canonical Form

- Unit of analysis: original-replication study pair, focal effect, effect-size estimate, p-value, confidence interval, meta-analytic estimate, or subjective replication judgment.
- Typical representation: replication outcome table, indicator correlation matrix, forest plot, p-value scatterplot, or effect-size comparison.
- Mechanism or measurement target: convergent but imperfect evidence about whether a finding is reliable.
- Empirical signature: different success rates under significance, confidence-interval coverage, effect-size comparison, combined evidence, and expert judgment.

## Uses in Science of Science

- Prevents [replication and reproducibility](../validations/replication_reproducibility.md) from being reduced to a single binary outcome.
- Makes [direct replication protocols](../methods/direct_replication_protocol.md) auditable across statistical and substantive definitions of success.
- Helps [responsible metrics](responsible_metrics.md) separate reliability evidence from visibility, prestige, or citation impact.
- Supplies lower-level features for models of [original-evidence reproducibility gradients](../mechanisms/original_evidence_reproducibility_gradient.md).

## Operationalization

- Classify whether the replication is significant in the original direction.
- Compare observed significance counts against the expected count using [replication power expectation gap](../validations/replication_power_expectation_gap.md).
- Inspect original and replication p-values through [replication p-value distribution diagnostic](../validations/replication_p_value_distribution_diagnostic.md).
- Check whether the original effect size lies inside the replication confidence interval.
- Treat this confidence-interval criterion explicitly through [replication CI coverage shortfall](../validations/replication_ci_coverage_shortfall.md).
- Compare original and replication effect-size magnitudes directly.
- Combine original and replication estimates meta-analytically when valid.
- Record subjective replication judgments, especially when complex designs make one statistic hard to interpret.
- Use [replication effect harmonization](../methods/replication_effect_harmonization.md) and [focal-effect replication selection](../methods/focal_effect_replication_selection.md) before aggregating indicators across study pairs.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) states that there is no single standard for evaluating replication success and reports five indicators: significance, p-values, effect sizes, subjective assessments, and meta-analyses.
- In the aggregate table, 36% of replications were significant in the original direction, 47% placed the original effect inside the replication 95% confidence interval, 39% received a subjective yes judgment, and 68% of computable combined estimates were significant.
- The indicators were positively correlated, but not identical, so a concept page should name the criterion rather than report a generic replication rate.
- The suite includes lower-level components now split into [subjective replication judgment](subjective_replication_judgment.md) and [replication meta-analytic recombination](../methods/replication_meta_analytic_recombination.md).

## Caveats

- Significance thresholds are sensitive to power and do not measure effect-size similarity directly.
- Confidence-interval coverage can count imprecise near-zero replications as successes if the interval is wide.
- Subjective judgments can incorporate design complexity but are not a substitute for reported quantitative criteria.

## Links

- [replication and reproducibility](../validations/replication_reproducibility.md)
- [direct replication protocol](../methods/direct_replication_protocol.md)
- [focal-effect replication selection](../methods/focal_effect_replication_selection.md)
- [replication effect harmonization](../methods/replication_effect_harmonization.md)
- [replication meta-analytic recombination](../methods/replication_meta_analytic_recombination.md)
- [subjective replication judgment](subjective_replication_judgment.md)
- [replication effect-size shrinkage](replication_effect_size_shrinkage.md)
- [replication power expectation gap](../validations/replication_power_expectation_gap.md)
- [replication p-value distribution diagnostic](../validations/replication_p_value_distribution_diagnostic.md)
- [replication CI coverage shortfall](../validations/replication_ci_coverage_shortfall.md)
- [original-evidence reproducibility gradient](../mechanisms/original_evidence_reproducibility_gradient.md)
- [study power and false-positive risk](study_power_false_positive_risk.md)
- [positive predictive value of findings](positive_predictive_value_findings.md)
- [responsible metrics](responsible_metrics.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_success_indicator_suite`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication success criteria; reproducibility indicators; replication outcome measures; replication-rate definitions
