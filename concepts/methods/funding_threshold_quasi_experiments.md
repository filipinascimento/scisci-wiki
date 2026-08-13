# Funding threshold quasi-experiments

## Summary

Funding threshold quasi-experiments use discontinuities around grant paylines or score cutoffs to compare near-miss and narrow-win applicants whose proposals were evaluated similarly but received different funding outcomes.

## Canonical Form

- Unit of analysis: grant applicant, proposal, score threshold, funding decision, or career trajectory.
- Typical representation: regression discontinuity, fuzzy regression discontinuity, instrumental-variable design, near-miss versus narrow-win comparison.
- Mechanism or measurement target: local causal effect of funding, setback, or selection around an administrative cutoff.
- Empirical signature: treatment probability changes sharply at a score threshold while pre-treatment covariates vary smoothly.

## Uses in Science of Science

- Gives causal leverage for questions about [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md).
- Tests whether [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) changes careers, not only whether review scores predict outcomes.
- Provides a reusable policy-evaluation design for funding systems, prizes, fellowships, hiring thresholds, and institutional cutoffs.
- Acts as a concrete instance of [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md).

## Operationalization

- Identify score rules, paylines, or administrative cutoffs that sharply change funding probability.
- Restrict to applicants close enough to the cutoff that treated and control groups are comparable.
- Check balance in pre-treatment publication, career, demographic, institutional, and proposal variables.
- Use local regression, fuzzy regression discontinuity, or two-stage least squares with threshold side as an instrument.
- Track future outcomes such as attrition, publications, hit papers, citations, follow-on funding, patents, or translational outputs.
- Separate threshold grouping, data construction, and inference with [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md), [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md), and [fuzzy funding-threshold regression discontinuity](fuzzy_funding_threshold_regression_discontinuity.md).

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) compares junior NIH R01 applicants just above and below funding thresholds, using narrow wins and near misses.
- The paper reports pre-treatment checks around the threshold and uses the nonlinear score-to-funding relationship to support a fuzzy regression discontinuity design.
- Wang et al. describe the threshold side as an instrumental variable for funding outcome, allowing the model to control for the running score while estimating effects on later career outcomes.
- The same full text shows why attrition must be part of the estimand: near misses had higher subsequent disappearance from the NIH system, while surviving near misses later outperformed narrow wins.
- The Wang evidence now supports split-out motifs for [coarsened exact matching career comparison](coarsened_exact_matching_career_comparison.md), [setback screening-effect check](../validations/setback_screening_effect_check.md), and [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md).

## Caveats

- Regression discontinuity identifies a local effect near the cutoff, not necessarily the effect for clearly funded or clearly rejected proposals.
- Manipulation of scores, strategic resubmission, or hidden institutional support can violate design assumptions.
- Survival-conditioned outcome analysis can overstate resilience if attrition is not modeled as an outcome.

## Links

- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md)
- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [fuzzy funding-threshold regression discontinuity](fuzzy_funding_threshold_regression_discontinuity.md)
- [coarsened exact matching career comparison](coarsened_exact_matching_career_comparison.md)
- [setback screening-effect check](../validations/setback_screening_effect_check.md)
- [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [scientific discovery prediction](scientific_discovery_prediction.md)
- [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md)
- [matched career counterfactuals](matched_career_counterfactuals.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `funding_threshold_quasi_experiments`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: grant payline regression discontinuity; near-miss design; narrow-win comparison; funding cutoff instrument
