# Coarsened exact matching career comparison

## Summary

Coarsened exact matching career comparison matches scientists on binned pre-treatment career, demographic, institutional, and performance covariates before comparing later outcomes.

## Canonical Form

- Unit of analysis: scientist, applicant, treatment group, control group, matched stratum, or follow-up outcome.
- Typical representation: coarsened covariate strata, matched treated-control subset, post-treatment outcome comparison, and balance checks.
- Method target: reduce observable covariate differences when randomized career assignment is unavailable.
- Empirical signature: treated and control scientists remain comparable after pruning unmatched strata.

## Uses in Science of Science

- Extends [matched career counterfactuals](matched_career_counterfactuals.md) with an explicit coarsened-exact matching procedure.
- Complements [fuzzy funding-threshold regression discontinuity](fuzzy_funding_threshold_regression_discontinuity.md) in funding-threshold studies.
- Provides a robustness design for [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md).
- Uses [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md) as treatment-like groups.
- Fits the broader [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md) toolkit.

## Operationalization

- Choose pre-treatment covariates such as prior applications, prior hit papers, gender, ethnicity, institution reputation, career age, and prior productivity.
- Coarsen each covariate into substantively meaningful bins.
- Sort observations into strata defined by the coarsened covariates.
- Keep only strata containing at least one treated and one control unit.
- Compare follow-up outcomes in the matched sample and report how many units were retained.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) uses Coarsened Exact Matching to match near misses and narrow wins on observable ex ante features.
- The paper describes the CEM algorithm as coarsening control variables, sorting observations into strata, and pruning strata without both treated and control units.
- Wang et al. match 475 near misses out of 623 and 453 narrow wins out of 561.
- In the matched sample, near misses have 16.4% hit-paper probability versus 14.0% for narrow wins.
- The matched comparison also finds higher average five-year citations for near misses, 30.8 versus 27.7, while publication counts do not differ significantly.

## Caveats

- CEM controls observed covariates only; unobserved ability, institutional support, topic choice, and motivation can remain confounded.
- Coarsening choices affect matched-sample size and estimand.
- Pruned observations can limit generalization.
- Matching does not solve survivor conditioning unless attrition is modeled separately.

## Links

- [matched career counterfactuals](matched_career_counterfactuals.md)
- [fuzzy funding-threshold regression discontinuity](fuzzy_funding_threshold_regression_discontinuity.md)
- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md)
- [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `coarsened_exact_matching_career_comparison`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: CEM career comparison; coarsened exact matching; matched setback comparison; grant-applicant CEM
