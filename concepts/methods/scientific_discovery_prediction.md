# Scientific discovery prediction

## Summary

Scientific discovery prediction is the motif of using science-of-science data and models to forecast features of future scientific activity, such as impact, citation trajectories, promising research areas, career outcomes, or evaluation decisions.

## Canonical Form

- Unit of analysis: paper, scientist, proposal, topic, field, team, institution, or portfolio.
- Typical representation: supervised prediction task, forecasting model, early-signal model, or decision-support system.
- Mechanism or measurement target: partial predictability of scientific outcomes under strong uncertainty and feedback.
- Empirical signature: some regularities are forecastable from prior data, while breakthrough content and future directions remain partly unpredictable.

## Uses in Science of Science

- Used to evaluate which aspects of science are predictable and which are inherently hard to forecast.
- Connects citation prediction, career-impact modeling, proposal evaluation, research-front detection, and policy design.
- Provides a bridge from descriptive motifs to decision systems, with explicit risk that prediction tools can reshape the system they measure.
- Fits inside the broader [science of science framework](science_of_science_framework.md), where predictions should be paired with causal validation and policy evaluation.
- Splits prediction practice into forecast formalization, proxy-target construction, target-aspect decomposition, residual diagnostics, latent-factor ceiling checks, and metric construct validation.

- The Clauset et al. residual pass adds [discovery-discoverer target entanglement](../representations/discovery_discoverer_target_entanglement.md), [institutional forecast decision contexts](../representations/institutional_forecast_decision_contexts.md), [predecision feature-admissibility boundary](../validations/predecision_feature_admissibility_boundary.md), [personal-best timing/magnitude decoupling](../validations/personal_best_timing_magnitude_decoupling.md), [faculty-placement incremental-feature ceiling](../validations/placement_incremental_feature_ceiling.md), [doctoral-elite agenda and demography transmission](../mechanisms/doctoral_elite_agenda_demography_transmission.md), [grant-prediction bias/target split](../validations/grant_prediction_bias_target_split.md), [pattern-to-policy causal gap](../validations/pattern_to_policy_causal_gap.md), [predictive-evaluation false-negative harm taxonomy](../validations/predictive_evaluation_false_negative_harm_taxonomy.md), [community-governed prediction tools](community_governed_prediction_tools.md), and [impact-horizon alignment grid](../validations/impact_horizon_alignment_grid.md).
## Operationalization

- Inputs: early citations, reference lists, authorship and career histories, venues, fields, grants, topics, text features, network features, and prior outcomes.
- Baseline data often come from [predictive bibliographic platform traces](../datasets/predictive_bibliographic_platform_traces.md), while hard forecasting tasks may require [context-specific SciSci prediction data](../datasets/context_specific_scisci_prediction_data.md).
- Measures: prediction accuracy, calibration, ranking quality, out-of-sample validity, subgroup performance, and policy impact.
- Common model forms: preferential-attachment baselines, citation trajectory models, career-impact models, topic emergence forecasts, and supervised decision-support models.
- Convert implicit expert or institutional judgments into explicit tasks with [informal science forecast formalization](informal_science_forecast_formalization.md), then make proxy choices explicit through [generic trace proxy target operationalization](generic_trace_proxy_target_operationalization.md).
- Map the prediction target explicitly with [SciSci prediction domain map](scisci_prediction_domain_map.md), because citation trajectories, hiring outcomes, career productivity, personal-best timing, and unexpected discoveries have different predictability limits.
- Decompose broad outcomes with [prediction target aspect decomposition](prediction_target_aspect_decomposition.md), because timing and magnitude can differ sharply in predictability.
- Before policy deployment, connect predictive claims to [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md) or another causal design.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) gives an early paper-level forecasting example: fitting cumulative citation histories estimates relative fitness, immediacy, and longevity, then predicts long-term impact from early trajectories.
- That paper-level example is now split into [long-term citation prediction](long_term_citation_prediction.md), [ultimate citation impact](../measures/ultimate_citation_impact.md), and the fitted immediacy/longevity parameters.
- Verified full-text evidence from Clauset, Larremore, and Sinatra (2017): the paper frames prediction as a central but limited ambition of science of science and distinguishes more predictable quantities, such as long-term citation patterns from early trajectories, from less predictable breakthrough discovery.
- Clauset et al. emphasize that prediction systems need validation against causal mechanisms and policy consequences, because using predictions in evaluation can change incentives and narrow search.
- Clauset et al. also warn that genuinely novel discoveries create an [out-of-distribution prediction limit](../validations/novel_discovery_out_of_distribution_limit.md), because past data cannot fully teach a model what has not yet appeared.
- The same full text supports split-out motifs for [expected-unexpected discovery spectrum](../representations/expected_unexpected_discovery_spectrum.md), [SciSci prediction domain map](scisci_prediction_domain_map.md), [lagging-indicator prediction limits](../validations/lagging_indicator_prediction_limits.md), [context-specific SciSci prediction data](../datasets/context_specific_scisci_prediction_data.md), and [automated predictive-evaluation safeguards](../validations/automated_predictive_evaluation_safeguards.md).
- Additional Clauset et al. split-outs capture [prediction residuals as discovery diagnostics](../validations/prediction_residuals_as_discovery_diagnostics.md), [latent-factor prediction ceiling](../validations/latent_factor_prediction_ceiling.md), and [scientometric measure construct validation](../validations/scientometric_measure_construct_validation.md).
- Clauset et al. also supply a policy mechanism layer: prediction tools and impact requirements can create [predictable-discovery selection pressure](../mechanisms/predictable_discovery_selection_pressure.md), [risk-averse scientist selection](../mechanisms/risk_averse_scientist_selection.md), and a need to preserve [scientific ecosystem diversity](../mechanisms/scientific_ecosystem_diversity.md).
- Fortunato et al. (2018) similarly positions prediction as a policy-relevant goal of science of science, but emphasizes that prediction should be paired with experiments and quasi-experimental evidence.
- Fortunato et al. also extends the future-facing prediction agenda toward [mind-machine science partnerships](mind_machine_science_partnerships.md), where machine-learning systems support scientific search and decisions.

## Caveats

- Prediction is not explanation; accurate forecasts can still fail to identify causal mechanisms.
- Prediction tools can create feedback loops, evaluation bias, and incentives that suppress novelty or risky work.
- Out-of-sample validation across fields, cohorts, and demographic/institutional groups is essential before policy use.

## Links

- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [expected-unexpected discovery spectrum](../representations/expected_unexpected_discovery_spectrum.md)
- [SciSci prediction domain map](scisci_prediction_domain_map.md)
- [informal science forecast formalization](informal_science_forecast_formalization.md)
- [generic trace proxy target operationalization](generic_trace_proxy_target_operationalization.md)
- [prediction target aspect decomposition](prediction_target_aspect_decomposition.md)
- [lagging-indicator prediction limits](../validations/lagging_indicator_prediction_limits.md)
- [prediction residuals as discovery diagnostics](../validations/prediction_residuals_as_discovery_diagnostics.md)
- [latent-factor prediction ceiling](../validations/latent_factor_prediction_ceiling.md)
- [scientometric measure construct validation](../validations/scientometric_measure_construct_validation.md)
- [novel-discovery out-of-distribution limit](../validations/novel_discovery_out_of_distribution_limit.md)
- [predictive bibliographic platform traces](../datasets/predictive_bibliographic_platform_traces.md)
- [context-specific SciSci prediction data](../datasets/context_specific_scisci_prediction_data.md)
- [mind-machine science partnerships](mind_machine_science_partnerships.md)
- [automated predictive-evaluation safeguards](../validations/automated_predictive_evaluation_safeguards.md)
- [predictable-discovery selection pressure](../mechanisms/predictable_discovery_selection_pressure.md)
- [risk-averse scientist selection](../mechanisms/risk_averse_scientist_selection.md)
- [scientific ecosystem diversity](../mechanisms/scientific_ecosystem_diversity.md)
- [active science-policy experimentation](../validations/active_science_policy_experimentation.md)
- [science of science framework](science_of_science_framework.md)
- [citation trajectory models](citation_trajectory_models.md)
- [long-term citation prediction](long_term_citation_prediction.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [paper fitness](../measures/paper_fitness.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [research fronts](../mechanisms/research_fronts.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [funding threshold quasi-experiments](funding_threshold_quasi_experiments.md)
- [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md)
- [domain-specific SciSci studies](domain_specific_scisci_studies.md)
- [peer review gatekeeping](../mechanisms/peer_review_gatekeeping.md)

- [discovery-discoverer target entanglement](../representations/discovery_discoverer_target_entanglement.md)
- [predecision feature-admissibility boundary](../validations/predecision_feature_admissibility_boundary.md)
- [predictive-evaluation false-negative harm taxonomy](../validations/predictive_evaluation_false_negative_harm_taxonomy.md)
## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]
- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `scientific_discovery_prediction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Aliases: data-driven prediction; scientific forecasting; science forecasting
