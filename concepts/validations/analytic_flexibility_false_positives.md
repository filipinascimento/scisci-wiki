# Analytic flexibility and false-positive risk

## Summary

Analytic flexibility and false-positive risk describe how undisclosed choices in data collection, exclusion, variable construction, model specification, stopping rules, and reporting can make nominal statistical error rates much lower than the actual chance of publishing a false positive.

## Canonical Form

- Unit of analysis: study, analysis plan, p-value, model specification, outcome variable, exclusion rule, sample-size rule, or published finding.
- Typical representation: researcher-degree-of-freedom checklist, multiverse/specification curve, simulation grid, or bias mechanism diagram.
- Mechanism or measurement target: selective analysis and reporting under ambiguity.
- Empirical signature: many justifiable analytic paths, p-values near thresholds, hidden interim testing, omitted conditions or measures, and results that change under reasonable alternative specifications.

## Uses in Science of Science

- Explains why a literature can accumulate significant findings faster than true effects.
- Provides a mechanism-level bridge between [replication and reproducibility](replication_reproducibility.md), [researcher degrees of freedom](researcher_degrees_of_freedom.md), [preregistration](preregistration_registered_reports.md), [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md), and publication incentives.
- Supplies practical audit targets for evaluating claims, journals, and fields: stopping rules, all variables, all conditions, exclusions, covariates, and robustness to arbitrary decisions.
- Organizes lower-level mechanisms such as [outcome-measure selection flexibility](../mechanisms/outcome_measure_selection_flexibility.md), [optional stopping](../mechanisms/optional_stopping_false_positives.md), [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md), and [condition-subset reporting](../mechanisms/condition_subset_reporting.md).

## Operationalization

- Inputs: manuscripts, protocols, raw data, code, preregistrations, reported p-values, omitted measures or conditions, and reviewer or journal disclosure policies.
- Measures: number of plausible analytic paths, false-positive rate under simulated flexibility, p-curve shape, specification-curve spread, disclosure completeness, and robustness of results to alternative exclusions or covariates.
- Common model forms: Monte Carlo simulation, multiverse analysis, specification curve, selective-reporting model, p-hacking detector, and registered replication.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) shows through simulations and demonstration experiments that common researcher degrees of freedom can inflate false-positive rates far above the nominal 5% standard.
- Simmons et al. identify practical disclosure requirements: ex ante stopping rules, minimum per-cell sample-size justification, reporting all variables and conditions, and showing results with excluded observations or covariates handled transparently.
- The same verified full text supports standalone mechanism and method motifs for outcome selection, optional stopping, covariate search, condition-subset reporting, [exclusion-sensitivity reporting](exclusion_sensitivity_reporting.md), [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md), and the [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md).
- A second Simmons-focused pass splits out the surrounding system limits: [self-serving analytic ambiguity](../mechanisms/self_serving_analytic_ambiguity.md), [false-positive literature persistence](../mechanisms/false_positive_literature_persistence.md), [alpha-correction degrees-of-freedom limit](alpha_correction_degrees_of_freedom_limit.md), [open data and materials insufficiency](open_data_materials_insufficiency.md), and [conceptual replication flexibility leak](conceptual_replication_flexibility_leak.md).
- Verified full-text evidence from Nosek et al. (2018) generalizes the mechanism as a failure to separate prediction from postdiction: once outcomes are known, analytic choices can become rationalized as if they had been planned.
- Verified full-text evidence from Ioannidis (2005) places analytic flexibility inside a broader [positive predictive value](../measures/positive_predictive_value_findings.md) model where power, pre-study odds, and bias jointly determine whether positive findings are likely to be true.
- Ioannidis' [research bias parameter](../measures/research_bias_parameter.md) formalizes the share of otherwise non-positive analyses that become positive findings through design, analysis, reporting, or presentation bias.
- The reform side of this motif connects to [open science interventions](open_science_interventions.md), including preregistration, disclosure requirements, registered reports, [reviewer transparency enforcement](../methods/reviewer_transparency_enforcement.md), [exact-replication flexibility adjudication](../methods/exact_replication_flexibility_adjudication.md), and transparency policies.
- This motif should be treated as a latent mechanism behind [retractions and scientific self-correction](retractions_self_correction.md), because many unreliable findings will never cross the threshold into formal retraction.

## Caveats

- Analytic flexibility is not the same as fraud; it can arise from ordinary ambiguity, incentives, and motivated reasoning.
- Exploratory analysis is valuable when clearly labeled as exploratory.
- False-positive risk depends on power, prior probability, field incentives, publication selection, and analytic flexibility together.

## Links

- [replication and reproducibility](replication_reproducibility.md)
- [researcher degrees of freedom](researcher_degrees_of_freedom.md)
- [field-standard ambiguity audit](field_standard_ambiguity_audit.md)
- [self-serving analytic ambiguity](../mechanisms/self_serving_analytic_ambiguity.md)
- [false-positive literature persistence](../mechanisms/false_positive_literature_persistence.md)
- [alpha-correction degrees-of-freedom limit](alpha_correction_degrees_of_freedom_limit.md)
- [open data and materials insufficiency](open_data_materials_insufficiency.md)
- [conceptual replication flexibility leak](conceptual_replication_flexibility_leak.md)
- [outcome-measure selection flexibility](../mechanisms/outcome_measure_selection_flexibility.md)
- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md)
- [condition-subset reporting](../mechanisms/condition_subset_reporting.md)
- [exclusion-sensitivity reporting](exclusion_sensitivity_reporting.md)
- [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md)
- [known-false hypothesis demonstration](../methods/known_false_hypothesis_demonstration.md)
- [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md)
- [minimum per-cell sample-size guardrail](../methods/minimum_per_cell_sample_size_guardrail.md)
- [sequential p-value path instability](../representations/sequential_p_value_path_instability.md)
- [reviewer transparency enforcement](../methods/reviewer_transparency_enforcement.md)
- [exact-replication flexibility adjudication](../methods/exact_replication_flexibility_adjudication.md)
- [exploratory-confirmatory disclosure boundary](exploratory_confirmatory_disclosure_boundary.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [research bias parameter](../measures/research_bias_parameter.md)
- [prediction-postdiction boundary](prediction_postdiction_boundary.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)
- [preregistration and registered reports](preregistration_registered_reports.md)
- [registered-report in-principle acceptance](registered_report_in_principle_acceptance.md)
- [open science interventions](open_science_interventions.md)
- [retractions and scientific self-correction](retractions_self_correction.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]
- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]
- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `analytic_flexibility_false_positives`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Aliases: researcher degrees of freedom; p-hacking; garden of forking paths; selective reporting
