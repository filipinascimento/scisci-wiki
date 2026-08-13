# Prediction feedback loops

## Summary

Prediction feedback loops occur when forecasts about scientific success are used in evaluation systems, changing future opportunities and making the predictions partly self-fulfilling.

## Canonical Form

- Unit of analysis: paper, proposal, scientist, institution, field, or funding portfolio.
- Typical representation: prediction model embedded in a decision process, such as grant review, manuscript triage, hiring, or award selection.
- Mechanism or measurement target: past-success signals influence future resource allocation, which then changes the outcomes being predicted.
- Empirical signature: stronger inequality, reduced novelty, subgroup performance gaps, and policy outcomes that differ from offline validation metrics.

## Uses in Science of Science

- Converts scientific forecasting from a purely technical problem into a policy-validation problem.
- Links [scientific discovery prediction](../methods/scientific_discovery_prediction.md) to [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md), responsible metrics, and funding design.
- Applies to career forecasts such as [Q-model career impact prediction](../methods/q_model_career_prediction.md), where retrospective accuracy still needs policy-use auditing.
- Provides a warning label for models trained on citations, venues, grants, prestige, and early productivity when those same variables influence future opportunity.

## Operationalization

- Evaluate prediction tools both offline and in the decision context where they are used.
- Measure subgroup calibration, ranking error, novelty effects, and changes in portfolio diversity after deployment.
- Compare policy outcomes with experiments, phased rollouts, or quasi-experimental designs rather than only retrospective accuracy.
- Audit whether recommendations concentrate resources among already advantaged authors, institutions, fields, or topics.
- Use [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md) when predictive models enter proposal, manuscript, hiring, or award workflows.
- Design [feedback-resistant success measures](../methods/feedback_resistant_success_measures.md) when past-success indicators allocate future opportunity.

## Evidence and Validations

- Verified full-text evidence from Clauset, Larremore, and Sinatra (2017) identifies citations and publications as past-success measures with feedback dynamics: allocating future opportunities from recent success can amplify inequality.
- The same verified paper warns that automated evaluation of proposals, manuscripts, or young scholars could discourage innovation and increase inequality if it relies on crude historical signals.
- Clauset et al. also frame feedback-loop risk as partly caused by [lagging-indicator prediction limits](lagging_indicator_prediction_limits.md): past-success signals can be useful predictors but weak guides to unexpected discoveries and new fields.
- Verified full-text evidence from Fortunato et al. (2018) frames prediction as a goal of science of science but pairs it with experiments, quasi-experiments, and policy safeguards.
- This makes feedback-loop auditing a validation motif: a model can be accurate in retrospective data and still be harmful when its predictions allocate scarce resources.
- Clauset et al.'s ecosystem argument extends this into [predictable-discovery selection pressure](../mechanisms/predictable_discovery_selection_pressure.md) and [risk-averse scientist selection](../mechanisms/risk_averse_scientist_selection.md), where predictive evaluation changes which research strategies and scientists survive.
- Clauset et al. also identify an out-of-distribution failure mode for novel discovery: models trained on past science can suppress work whose value comes from not yet fitting observed patterns.

## Caveats

- Feedback loops are hard to detect from static bibliographic data alone.
- Retrospective prediction accuracy can overstate policy value when deployment changes incentives.
- Guardrails require both technical model audits and institutional experiments.

## Links

- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md)
- [predictable-discovery selection pressure](../mechanisms/predictable_discovery_selection_pressure.md)
- [risk-averse scientist selection](../mechanisms/risk_averse_scientist_selection.md)
- [scientific ecosystem diversity](../mechanisms/scientific_ecosystem_diversity.md)
- [active science-policy experimentation](active_science_policy_experimentation.md)
- [lagging-indicator prediction limits](lagging_indicator_prediction_limits.md)
- [novel-discovery out-of-distribution limit](novel_discovery_out_of_distribution_limit.md)
- [feedback-resistant success measures](../methods/feedback_resistant_success_measures.md)
- [context-specific SciSci prediction data](../datasets/context_specific_scisci_prediction_data.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)
- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [attention inequality](../mechanisms/attention_inequality.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `prediction_feedback_loops`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Aliases: self-fulfilling prediction; evaluation feedback loop; algorithmic gatekeeping; predictive evaluation risk
