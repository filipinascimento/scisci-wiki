# Researcher degrees of freedom

## Summary

Researcher degrees of freedom are discretionary choices in study design, data collection, analysis, and reporting that can make false-positive findings more likely when they are not declared or constrained.

## Canonical Form

- Unit of analysis: study, analysis plan, dependent variable, stopping rule, covariate, exclusion rule, condition comparison, or reported model.
- Typical representation: checklist of choices, simulation grid, multiverse, specification curve, or disclosure audit.
- Mechanism or validation target: hidden analytic and reporting choices that change the effective false-positive rate.
- Empirical signature: many reasonable choices exist, but only the significant or narrative-friendly path is reported.

## Uses in Science of Science

- Splits the practical choice layer out of [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md).
- Provides concrete audit items for peer reviewers, replication teams, and open-science policy evaluations.
- Connects [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md) to paper-level behavior.
- Motivates preregistration, disclosure requirements, multiverse analysis, and registered reports.

## Operationalization

- List collected variables, experimental conditions, exclusion rules, stopping rules, covariates, transformations, and alternative model specifications.
- Estimate false-positive inflation through simulation or multiverse analysis.
- Audit manuscripts for disclosure of all variables, all conditions, exclusions, stopping rules, and covariate sensitivity.
- Compare reported findings with preregistered plans, raw code, and robustness checks.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) simulates four common degrees of freedom: choosing among dependent variables, choosing sample size, using covariates, and reporting subsets of experimental conditions.
- Their simulations show that single choices can raise false-positive rates above the nominal 5% threshold, and the combination of four common choices can raise the rate to 61%.
- Simmons et al. also propose disclosure requirements: report stopping rules, minimum sample-size justifications, all variables, all conditions, excluded observations, and covariate-free results.
- The same full text now anchors standalone motifs for [outcome-measure selection flexibility](../mechanisms/outcome_measure_selection_flexibility.md), [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md), [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md), [condition-subset reporting](../mechanisms/condition_subset_reporting.md), [exclusion-sensitivity reporting](exclusion_sensitivity_reporting.md), [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md), the [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md), [reviewer transparency enforcement](../methods/reviewer_transparency_enforcement.md), [exact-replication flexibility adjudication](../methods/exact_replication_flexibility_adjudication.md), [self-serving analytic ambiguity](../mechanisms/self_serving_analytic_ambiguity.md), [alpha-correction degrees-of-freedom limit](alpha_correction_degrees_of_freedom_limit.md), [conceptual replication flexibility leak](conceptual_replication_flexibility_leak.md), and the [exploratory-confirmatory disclosure boundary](exploratory_confirmatory_disclosure_boundary.md).
- Verified full-text evidence from Nosek et al. (2018) generalizes the problem as postdiction being mistaken for prediction after outcomes are known.

## Caveats

- Discretion is not automatically improper; exploratory work requires choices.
- The validation problem is hidden discretion plus confirmatory interpretation, not exploration itself; this is the role of the [exploratory-confirmatory disclosure boundary](exploratory_confirmatory_disclosure_boundary.md).
- Counting choices can miss more subtle dependencies among outcomes, models, and theory adjustments.

## Links

- [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md)
- [self-serving analytic ambiguity](../mechanisms/self_serving_analytic_ambiguity.md)
- [alpha-correction degrees-of-freedom limit](alpha_correction_degrees_of_freedom_limit.md)
- [conceptual replication flexibility leak](conceptual_replication_flexibility_leak.md)
- [outcome-measure selection flexibility](../mechanisms/outcome_measure_selection_flexibility.md)
- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md)
- [condition-subset reporting](../mechanisms/condition_subset_reporting.md)
- [exclusion-sensitivity reporting](exclusion_sensitivity_reporting.md)
- [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md)
- [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md)
- [reviewer transparency enforcement](../methods/reviewer_transparency_enforcement.md)
- [exact-replication flexibility adjudication](../methods/exact_replication_flexibility_adjudication.md)
- [exploratory-confirmatory disclosure boundary](exploratory_confirmatory_disclosure_boundary.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [prediction-postdiction boundary](prediction_postdiction_boundary.md)
- [preregistration and registered reports](preregistration_registered_reports.md)
- [registered-report in-principle acceptance](registered_report_in_principle_acceptance.md)
- [replication and reproducibility](replication_reproducibility.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]
- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]
- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]

## Metadata

- Concept ID: `researcher_degrees_of_freedom`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Aliases: undisclosed flexibility; analytic choice freedom; p-hacking paths; garden of forking paths
