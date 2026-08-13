# Replication effect harmonization

## Summary

Replication effect harmonization converts heterogeneous original and replication statistics onto a common effect-size scale so that study pairs can be compared in aggregate.

## Canonical Form

- Unit of analysis: original-replication pair, test statistic, effect-size estimate, sample size, standard error, or harmonized effect metric.
- Typical representation: correlation-scale effect table, Fisher-transformed estimate, signed effect-size pair, conversion code, or harmonization exclusion log.
- Method target: make heterogeneous designs and statistical tests comparable without treating every original reporting format as a separate outcome.
- Empirical signature: t, F, z, chi-square, correlation, or other test statistics are transformed to a common scale with direction aligned to the original effect.

## Uses in Science of Science

- Supplies the measurement substrate for [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md).
- Enables [replication success indicator suites](../measures/replication_success_indicator_suite.md) to combine significance, effect-size difference, confidence-interval coverage, and meta-analytic evidence.
- Links [direct replication protocols](direct_replication_protocol.md) to transparent computational reproducibility through conversion formulas and code.
- Provides a reusable template for meta-research datasets that compare findings across heterogeneous study designs.

## Operationalization

- Extract original and replication test statistics, sample-size information, effect direction, and reported effect size where available.
- Convert each effect to a declared common scale, such as correlation `r`, and transform when needed for standard-error calculations.
- Align signs so original effects are positive and replications in the opposite direction are negative.
- Record exclusions when the necessary test statistic or standard error cannot be computed.
- Publish conversion formulas, code, and a harmonized effect table.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) states that effect sizes were transformed into correlation coefficients whenever possible.
- The paper explains that correlation coefficients are bounded, interpretable, and have standard errors that become a function of sample size after Fisher transformation.
- The authors provide formulas and code for converting z, F, t, and chi-square statistics into correlation coefficients and code replication effects as negative when they were opposite in direction from the original effect.
- The same harmonized effect table supports original-replication effect-size comparisons, confidence-interval coverage checks, and fixed-effect meta-analyses.

## Caveats

- Some reported statistics cannot be converted without additional assumptions or missing information.
- A common numeric scale can hide design-specific meaning, measurement quality, and construct heterogeneity.
- Direction alignment depends on correctly interpreting the original focal hypothesis.

## Links

- [direct replication protocol](direct_replication_protocol.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication meta-analytic recombination](replication_meta_analytic_recombination.md)
- [focal-effect replication selection](focal_effect_replication_selection.md)
- [open science interventions](../validations/open_science_interventions.md)
- [replication analysis reproduction audit](replication_analysis_reproduction_audit.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_effect_harmonization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: common effect-size conversion; correlation-scale replication effects; replication effect coding; Fisher-transformed replication effects
