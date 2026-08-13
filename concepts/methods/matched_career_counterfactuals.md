# Matched career counterfactuals

## Summary

Matched career counterfactuals compare scientists with similar early-career profiles who differ in a focal exposure, such as coauthorship with a top scientist, to estimate how later outcomes diverge.

## Canonical Form

- Unit of analysis: scientist pair, early-career window, treatment exposure, field cohort, later career outcome, or matched comparison set.
- Typical representation: treated-control matched pairs, covariate balance table, outcome difference, regression with controls, or sensitivity analysis.
- Method target: construct a plausible comparison group when randomized career experiments are impossible.
- Empirical signature: treated and control scientists are similar on observed early-career variables, but differ later on impact, collaboration, retention, or mobility outcomes.

## Uses in Science of Science

- Supports evidence pages for [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md), [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md), and [scientific career impact](../mechanisms/scientific_career_impact.md).
- Complements quasi-experimental designs such as [funding-threshold quasi-experiments](funding_threshold_quasi_experiments.md) when no sharp assignment threshold exists.
- Provides a reusable design for studying career exposures, collaborations, mobility, and institutional access.

## Operationalization

- Define a treatment or exposure in an early-career window, such as at least one early paper with a top coauthor.
- Match treated and untreated scientists on field, cohort, institution prestige, early productivity, early citations, and other observed pre-exposure variables.
- Measure outcomes after the exposure window, excluding early papers when the question concerns downstream effects.
- Report robustness to alternative windows, prestige thresholds, matching variables, and outcome definitions, including [five-year early-career window sensitivity](../validations/five_year_early_career_window_sensitivity.md) and [unique-coauthor-count matching robustness](../validations/unique_coauthor_count_matching_robustness.md).
- Pair matched estimates with explicit residual-confounding pages such as [top scientist selection confound](../validations/top_scientist_selection_confound.md).

## Evidence and Validations

- Verified full-text evidence from Li et al. (2019) matches junior researchers with similar first-three-year profiles in institutional prestige, productivity, and citations, differing primarily in whether they coauthored with a top scientist.
- Li et al. then compare citations from career years 4-20, citations per paper, later top-coauthor access, and whether the junior scientist becomes a top-cited scientist in year 20.
- The paper reports higher later impact for the top-coauthor exposure group across the four disciplines studied.
- The design supports a strong predictive and matched-comparison claim, but the authors still discuss selection mechanisms and do not establish randomized causal assignment.
- Li et al. also report robustness to a [five-year early-career window](../validations/five_year_early_career_window_sensitivity.md) and to adding [unique coauthor counts](../validations/unique_coauthor_count_matching_robustness.md) as an additional matching covariate.
- The same verified full text supports [non-top-coauthored impact persistence](../validations/non_top_coauthored_impact_persistence.md), because later impact differences are checked after separating papers with and without top-scientist coauthors.

## Caveats

- Matching only controls observed variables; unobserved ability, topic choice, lab resources, and senior-scientist selection can remain confounded.
- Career histories require robust author disambiguation, field assignment, and consistent career-start definitions.
- Effects can depend on survivorship: long-lived careers are easier to study than careers that exit early.

## Links

- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md)
- [four-discipline long-lived career panel](../datasets/four_discipline_long_lived_career_panel.md)
- [Nature Index institutional prestige score](../measures/nature_index_institutional_prestige_score.md)
- [low-early-impact matching focus](low_early_impact_matching_focus.md)
- [distribution-sensitive matched-pair tests](../validations/distribution_sensitive_matched_pair_tests.md)
- [twentieth-career-year success endpoint](../measures/twentieth_career_year_success_endpoint.md)
- [field-granularity boundary for elite collaboration](../validations/field_granularity_boundary_for_elite_collaboration.md)
- [top scientist selection confound](../validations/top_scientist_selection_confound.md)
- [top-coauthor regression predictor](../validations/top_coauthor_regression_predictor.md)
- [five-year early-career window sensitivity](../validations/five_year_early_career_window_sensitivity.md)
- [unique-coauthor-count matching robustness](../validations/unique_coauthor_count_matching_robustness.md)
- [non-top-coauthored impact persistence](../validations/non_top_coauthored_impact_persistence.md)
- [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [funding-threshold quasi-experiments](funding_threshold_quasi_experiments.md)
- [author name disambiguation](author_name_disambiguation.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `matched_career_counterfactuals`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Aliases: matched pair career analysis; career matching design; matched comparison of scientists; observational career counterfactual
