# Selective reporting and publication bias

## Summary

Selective reporting and publication bias describe how positive, novel, clean, or statistically significant results are more likely to be analyzed, submitted, accepted, and visible than null, ambiguous, or inconvenient results.

## Canonical Form

- Unit of analysis: study, hypothesis test, outcome variable, experiment, manuscript, journal decision, registry-publication pair, or literature.
- Typical representation: missing-results model, file-drawer estimate, outcome-switching audit, p-value distribution, funnel plot, or registry-publication comparison.
- Mechanism: incentives for publishable findings interact with analytic flexibility, outcome selection, and editorial preferences to make the visible literature more positive than the underlying evidence.
- Empirical signature: overrepresentation of positive findings, nonreporting of null outcomes, p-values clustered near thresholds, registered outcomes missing from publications, and effect-size shrinkage in replication.

## Uses in Science of Science

- Explains why citation or publication counts can reward literatures that are less reliable than they look.
- Provides a mechanism linking [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md), [preregistration and registered reports](../validations/preregistration_registered_reports.md), and [replication and reproducibility](../validations/replication_reproducibility.md).
- Supplies an audit target for [responsible metrics](../measures/responsible_metrics.md): evaluation systems should not treat publication volume or significant claims as direct measures of truth.
- Connects to [peer review and gatekeeping](peer_review_gatekeeping.md), because journals and reviewers can amplify or reduce selection on results.
- Splits the incentive mechanism into [novel-positive-clean result incentive](novel_positive_clean_result_incentive.md), and the preregistration-specific audit problems into [program-level preregistration multiplicity](../validations/program_level_preregistration_multiplicity.md) and [narrative inference after preregistration](../validations/narrative_inference_after_preregistration.md).

## Operationalization

- Compare preregistered outcomes, protocols, grant aims, or registry entries against published reports.
- Estimate whether positive, significant, or narratively clean findings are preferentially reported.
- Use p-curve, funnel plots, selection models, specification curves, and replication effect-size comparisons to detect publication and reporting bias.
- Use [replication meta-analytic recombination](../methods/replication_meta_analytic_recombination.md) cautiously because a biased original estimate can still influence combined evidence.
- Separate nonpublication of whole studies from selective outcome reporting within published studies.

## Evidence and Validations

- Verified full-text evidence from Ioannidis (2005) treats bias as a mechanism that can convert negative results into positive results and argues that selective outcome and analysis reporting are common even in stringent research designs.
- Ioannidis links the probability that a published claim is true to study power, prior odds, bias, and the number of competing teams testing related relationships.
- Lower-level motifs from the same verified full text separate [research bias parameter](../measures/research_bias_parameter.md), [field testing multiplicity](field_testing_multiplicity.md), [hot-field Proteus phenomenon](hot_field_proteus_phenomenon.md), and [null-field bias estimation](../validations/null_field_bias_estimation.md).
- Verified full-text evidence from Simmons et al. (2011) shows that undisclosed flexibility lets researchers search across [outcomes](outcome_measure_selection_flexibility.md), [sample-size decisions](optional_stopping_false_positives.md), [covariates](covariate_contingent_significance.md), and [condition subsets](condition_subset_reporting.md), then report the path that works.
- Verified full-text evidence from Nosek et al. (2018) describes selective reporting as a consequence of blurring prediction and postdiction: positive-looking tests can be selected and rationalized after outcomes are known.
- Nosek et al. also describe preregistration and registered reports as interventions that make selective reporting detectable or less attractive.
- The same full text supports [registry-publication reporting-bias audits](../methods/registry_publication_reporting_bias_audit.md), where planned outcomes and conditions are compared with published reports.
- Nosek et al. further identify the reward for novel, positive, and clean results as the incentive pattern that makes selective reporting attractive, and they warn that study-series and narrative selection can persist after individual preregistration.
- Verified full-text evidence from Open Science Collaboration (2015) supplies an aggregate outcome signature: original effects were much larger than replication effects, and the paper explicitly discusses publication, selection, and reporting bias as plausible explanations for [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md).

## Caveats

- Publication bias can arise without misconduct; incentives, ambiguity, and memory can be enough.
- Detection is strongest when preregistrations, protocols, or unpublished study registries exist.
- A null or mixed result is not automatically more credible than a positive result; the issue is selective visibility, not result direction alone.

## Links

- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [outcome-measure selection flexibility](outcome_measure_selection_flexibility.md)
- [optional stopping false positives](optional_stopping_false_positives.md)
- [covariate-contingent significance](covariate_contingent_significance.md)
- [condition-subset reporting](condition_subset_reporting.md)
- [exclusion-sensitivity reporting](../validations/exclusion_sensitivity_reporting.md)
- [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md)
- [research bias parameter](../measures/research_bias_parameter.md)
- [field testing multiplicity](field_testing_multiplicity.md)
- [single-team significance overemphasis](../validations/single_team_significance_overemphasis.md)
- [nominal-significance finding boundary](../representations/nominal_significance_finding_boundary.md)
- [unattainable truth gold standard](../validations/unattainable_truth_gold_standard.md)
- [field standardization reliability guardrail](../methods/field_standardization_reliability_guardrail.md)
- [interest and prejudice bias barrier](interest_prejudice_bias_barrier.md)
- [exploratory field registry network](../datasets/exploratory_field_registry_network.md)
- [reliability-factor interaction audit](../validations/reliability_factor_interaction_audit.md)
- [established-classic confirmation stress test](../validations/established_classic_confirmation_stress_test.md)
- [hot-field Proteus phenomenon](hot_field_proteus_phenomenon.md)
- [null-field bias estimation](../validations/null_field_bias_estimation.md)
- [registered-report in-principle acceptance](../validations/registered_report_in_principle_acceptance.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [negative findings evidence value](negative_findings_evidence_value.md)
- [novel-positive-clean result incentive](novel_positive_clean_result_incentive.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [registry-publication reporting-bias audit](../methods/registry_publication_reporting_bias_audit.md)
- [program-level preregistration multiplicity](../validations/program_level_preregistration_multiplicity.md)
- [narrative inference after preregistration](../validations/narrative_inference_after_preregistration.md)
- [preregistration registry ecosystem](../datasets/preregistration_registry_ecosystem.md)
- [HARKing and hindsight bias](harking_hindsight_bias.md)
- [replication and reproducibility](../validations/replication_reproducibility.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [replication meta-analytic recombination](../methods/replication_meta_analytic_recombination.md)
- [original-evidence reproducibility gradient](original_evidence_reproducibility_gradient.md)
- [open science interventions](../validations/open_science_interventions.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [research strategy risk-reward](research_strategy_risk_reward.md)

## References

- Ioannidis, J. P. A. (2005). Why most published research findings are false. *PLOS Medicine*, 2(8), e124. https://doi.org/10.1371/journal.pmed.0020124 [OpenAlex: W2144981148; Dimensions: pub.1012818229; WoS: unknown]
- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]
- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]
- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `publication_bias_selective_reporting`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Ioannidis (2005) (2005)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1371/journal.pmed.0020124`
- OpenAlex ID: `W2144981148`
- Dimensions ID: `pub.1012818229`
- SciSciNet ID: `W2144981148`
- Aliases: publication bias; file drawer problem; selective outcome reporting; positive results bias
