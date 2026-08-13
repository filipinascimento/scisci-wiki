# Replication effect-size shrinkage

## Summary

Replication effect-size shrinkage is the empirical pattern that replication estimates are systematically smaller than the original published estimates for the same focal effects.

## Canonical Form

- Unit of analysis: original-replication effect pair, focal statistical test, effect-size ratio, or effect-size difference.
- Typical representation: original-versus-replication scatterplot, density plot, paired difference table, or meta-analytic comparison.
- Mechanism or measurement target: inflation of original estimates and attenuation under confirmatory replication.
- Empirical signature: replication effects cluster below the equality line, original mean effect exceeds replication mean effect, or most paired comparisons favor the original estimate.

## Uses in Science of Science

- Connects [replication and reproducibility](../validations/replication_reproducibility.md) to [publication bias and selective reporting](../mechanisms/publication_bias_selective_reporting.md).
- Provides a quantitative signal for [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md) when original studies are selected for positive or publishable results.
- Helps evaluate [replication success indicator suites](replication_success_indicator_suite.md), because a replication can be significant yet still imply a much smaller effect.
- Pairs with [replication CI coverage shortfall](../validations/replication_ci_coverage_shortfall.md) when the question is whether original and replication estimates are statistically compatible.
- Gives [open science interventions](../validations/open_science_interventions.md) an outcome measure beyond compliance adoption.

## Operationalization

- Convert focal effects to a comparable metric where possible.
- Use [replication effect harmonization](../methods/replication_effect_harmonization.md) to document conversions and sign alignment before comparing magnitudes.
- Align effect direction so original effects are coded as positive and opposite-direction replications are negative.
- Compare paired original and replication estimates using mean difference, signed rank tests, ratio measures, or scatterplots against an equality line.
- Report shrinkage separately from significance-based replication success.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) reports that replication effects were about half the magnitude of original effects in the aggregate abstract.
- In the paper's effect-size comparison, original studies had mean effect size 0.403 while replications had mean effect size 0.197.
- The same full text reports that 82 of 99 comparable study pairs showed a stronger effect in the original study than in the replication.
- The discussion links this pattern to low power plus publication, selection, and reporting biases, while noting that moderation or implementation differences can also contribute.
- [Replication meta-analytic recombination](../methods/replication_meta_analytic_recombination.md) gives a separate combined-evidence criterion when original and replication estimates can be precision-weighted.

## Caveats

- Shrinkage does not prove every original estimate was false or biased.
- Replication designs can differ in unmeasured moderators, samples, settings, or procedures.
- Some true effects may be smaller in replication because the original estimate was noisy even without selective reporting.

## Links

- [replication and reproducibility](../validations/replication_reproducibility.md)
- [replication success indicator suite](replication_success_indicator_suite.md)
- [replication CI coverage shortfall](../validations/replication_ci_coverage_shortfall.md)
- [replication effect harmonization](../methods/replication_effect_harmonization.md)
- [replication meta-analytic recombination](../methods/replication_meta_analytic_recombination.md)
- [original-evidence reproducibility gradient](../mechanisms/original_evidence_reproducibility_gradient.md)
- [publication bias and selective reporting](../mechanisms/publication_bias_selective_reporting.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [study power and false-positive risk](study_power_false_positive_risk.md)
- [research bias parameter](research_bias_parameter.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_effect_size_shrinkage`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: effect-size decline in replication; replication attenuation; original-replication effect gap; effect-size shrinkage
