# SciSci quasi-experimental policy evaluation

## Summary

SciSci quasi-experimental policy evaluation uses natural experiments, administrative thresholds, matching, difference-in-differences, and related designs to test whether science policies cause changes in scientific behavior or outcomes.

## Canonical Form

- Unit of analysis: policy, funding program, institution, field, scientist, team, proposal, or publication outcome.
- Typical representation: quasi-experiment, matched counterfactual, regression discontinuity, event study, instrumental-variable design, or policy intervention audit.
- Mechanism or measurement target: causal effect of research policies on productivity, novelty, equity, collaboration, reliability, impact, or discovery.
- Empirical signature: policy-exposed and comparison units have a credible counterfactual relationship, with robustness checks for selection and pre-trends.

## Uses in Science of Science

- Converts descriptive science-of-science regularities into policy-relevant causal evidence.
- Generalizes [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md) and [matched career counterfactuals](../methods/matched_career_counterfactuals.md).
- Provides a validation layer for [scientific discovery prediction](../methods/scientific_discovery_prediction.md), [responsible metrics](../measures/responsible_metrics.md), and [peer review gatekeeping](../mechanisms/peer_review_gatekeeping.md).
- Helps evaluate interventions in funding, hiring, evaluation metrics, open science, team assembly, mobility, and field-specific strategy.
- Includes mobility-specific applications such as [mobility policy shock evaluation](mobility_policy_shock_evaluation.md).
- Provides the policy-validation layer for [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md), where offline model accuracy must be tested against real deployment outcomes.
- Connects to [active science-policy experimentation](active_science_policy_experimentation.md), which stores the stronger intervention-testing claim from Clauset et al. (2017).
- Specializes to promotion, tenure, and hiring through [research assessment implementation experiments](research_assessment_implementation_experiments.md).

## Operationalization

- Identify a policy change, threshold, shock, rollout, or institutional rule that creates treated and comparison units.
- Build a comparison design with matched controls, discontinuity windows, pre/post trends, instruments, or staggered treatment timing.
- Measure outcomes such as publication rate, hit papers, citations, disruption, novelty, retention, diversity, collaboration, replication, patent links, or societal attention.
- Test robustness to selection, attrition, field composition, database coverage, and strategic adaptation after policy adoption.
- For prediction tools, compare deployment arms or phased rollouts on portfolio diversity, novelty, subgroup equity, and feedback-loop effects.
- When randomized interventions are feasible, treat them as active science-policy experiments rather than only observational policy evaluations.

## Evidence and Validations

- Verified full-text evidence from Fortunato et al. (2018) states that assessing causality is one of the most needed future developments in science of science.
- The review argues that many descriptive studies reveal associations between structure and outcomes, but whether a specific structure causes an outcome often remains unexplored.
- Fortunato et al. identify randomized controlled trials on individuals or institutions of science as politically and ethically difficult, especially in tax-supported systems.
- The review therefore expects quasi-experimental approaches to prevail in near-term SciSci investigations and links causal estimation to econometric matching and counterfactual scenarios.
- Verified full-text evidence from Wang, Jones, and Wang (2019) provides a concrete funding-policy example: junior NIH R01 near misses and narrow wins around a funding threshold are compared with balance checks, Coarsened Exact Matching, fuzzy regression discontinuity, screening checks, and robustness grids.
- Verified full-text evidence from Moher et al. (2018) supplies a researcher-assessment application: new promotion-and-tenure criteria should be evaluated with experimental or quasi-experimental designs, including cluster-randomized trials, stepped-wedge designs, interrupted time series, and audit-and-feedback rollouts.

## Caveats

- Quasi-experiments can still fail if treatment assignment is manipulable, comparison groups are weak, or policy adoption changes measurement behavior.
- Local treatment effects may not generalize to all fields, institutions, career stages, or countries.
- Policy evaluation must track unintended consequences, including gaming, reduced novelty, inequity, and target substitution.

## Links

- [science of science framework](../methods/science_of_science_framework.md)
- [domain-specific SciSci studies](../methods/domain_specific_scisci_studies.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md)
- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md)
- [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md)
- [setback-effect robustness grid](setback_effect_robustness_grid.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md)
- [active science-policy experimentation](active_science_policy_experimentation.md)
- [lagging-indicator prediction limits](lagging_indicator_prediction_limits.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [peer review gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [open science interventions](open_science_interventions.md)
- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [mobility policy shock evaluation](mobility_policy_shock_evaluation.md)
- [research assessment implementation experiments](research_assessment_implementation_experiments.md)
- [responsible researcher assessment principles](../methods/responsible_researcher_assessment_principles.md)
- [responsible indicators for assessing scientists](../measures/responsible_indicators_for_assessing_scientists.md)

## References

- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]
- Moher, D., Naudet, F., Cristea, I. A., Miedema, F., Ioannidis, J. P. A., & Goodman, S. N. (2018). Assessing scientists for hiring, promotion, and tenure. *PLOS Biology*, 16(3), e2004089. https://doi.org/10.1371/journal.pbio.2004089 [OpenAlex: W2794944797; Dimensions: pub.1101831393; SciSciNet: W2794944797; WoS: unknown]

## Metadata

- Concept ID: `scisci_quasi_experimental_policy_evaluation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Fortunato et al. (2018) (2018)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1126/science.aao0185`
- OpenAlex ID: `W2793071066`
- Dimensions ID: `pub.1101303008`
- SciSciNet ID: `W2793071066`
- Aliases: science-policy quasi-experiments; SciSci causal policy evaluation; experimental science policy; counterfactual science-policy evaluation
