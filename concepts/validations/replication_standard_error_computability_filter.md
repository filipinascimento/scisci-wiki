# Replication standard-error computability filter

## Summary

Meta-analytic and confidence-interval replication indicators require enough reported information to compute comparable standard errors.

## Canonical Form

- Unit of analysis: effect estimate, standard error, confidence interval, sample size, replication result, or analytic inclusion flag.
- Typical representation: computability filter for standard-error-dependent replication indicators.
- Mechanism, measurement, or validation target: inclusion boundary for effect-size synthesis and interval comparisons.
- Empirical signature: some completed replications enter binary indicators but not standard-error-based synthesis because required variance information is unavailable.

## Uses in Science of Science

- Connects replication synthesis validation to [replication effect harmonization](../methods/replication_effect_harmonization.md) and [replication meta analytic recombination](../methods/replication_meta_analytic_recombination.md).
- Provides a reusable motif for comparing [replication ci coverage shortfall](replication_ci_coverage_shortfall.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [replication denominator scope limit](replication_denominator_scope_limit.md) in linked scholarly data.

## Operationalization

- For each original and replication effect, record whether effect size and standard error can be computed.
- Separate missing-standard-error exclusions from feasibility or article-sampling exclusions.
- Use the filter before meta-analytic recombination or confidence-interval coverage analysis.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) uses effect-size harmonization and standard errors for meta-analytic and interval-based replication indicators.
- Those analyses require computable variance information, making this a denominator validation motif.

## Caveats

- Computability filters can remove studies with weak reporting practices, not only studies with unusual designs.
- Dropping noncomputable effects can change the replication denominator and apparent success rate.

## Links

- [Replication effect harmonization](../methods/replication_effect_harmonization.md)
- [Replication meta-analytic recombination](../methods/replication_meta_analytic_recombination.md)
- [Replication CI coverage shortfall](replication_ci_coverage_shortfall.md)
- [Replication denominator scope limit](replication_denominator_scope_limit.md)
- [Replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [Replication archive checklist gate](../methods/replication_archive_checklist_gate.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_standard_error_computability_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: standard-error availability filter; replication variance computability; meta-analytic inclusion boundary; effect-size SE denominator
