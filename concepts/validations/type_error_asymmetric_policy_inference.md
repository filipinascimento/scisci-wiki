# Type-error asymmetric policy inference

## Summary

Type-error asymmetric policy inference weighs Type I and Type II errors by their policy consequences when interpreting mixed or weak evidence in science-policy studies.

## Canonical Form

- Unit of analysis: policy decision, statistical test, subgroup estimate, interaction coefficient, or robustness pattern.
- Typical representation: explicit comparison of false-positive and false-negative consequences for a proposed policy change.
- Validation target: avoid treating nonsignificance as policy neutrality when one error has much higher social or scientific cost.
- Empirical signature: cautious policy interpretation is justified when estimates are directionally consistent and the cost of missing a harmful effect exceeds the cost of preserving the status quo.

## Uses in Science of Science

- Extends [responsible metrics](../measures/responsible_metrics.md) to policy inference under uncertainty.
- Helps interpret [funding status-interaction tests](funding_status_interaction_test.md), demographic disparity estimates, novelty penalties, and prediction-based interventions.
- Pairs with [prediction feedback loops](prediction_feedback_loops.md) when mistaken deployment or non-deployment of a tool can have asymmetric effects.
- Makes the value judgment in evidence thresholds visible instead of hiding it inside p-value cutoffs.

## Operationalization

- State the policy action being considered and the null or status-quo alternative.
- Identify plausible Type I and Type II errors in the empirical test.
- Describe the consequence of each error for affected groups, fields, or scientific outcomes.
- Combine statistical evidence, estimate direction, robustness, and consequence asymmetry in the policy interpretation.
- Report uncertainty plainly and distinguish cautionary interpretation from definitive causal proof.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) uses this reasoning for the peripheral-university interaction in the funding-model analysis.
- The paper notes that falsely concluding there is no negative interaction could encourage a shift toward competitive funding that harms peripheral-university scientists.
- It contrasts this with the consequence of falsely concluding there is an interaction, which would maintain the status quo despite limited evidence that low-status scientists benefit from competitive funding.
- Wang et al. combine this asymmetry with consistent negative interaction signs across status measures to argue for caution in funding-policy interpretation.

## Caveats

- Consequence asymmetry can be misused to rationalize weak evidence if assumptions are not made explicit.
- The policy-relevant loss function should be stated before or alongside the empirical interpretation, not retrofitted only when results are convenient.
- Different stakeholders may reasonably disagree about the relative costs of Type I and Type II errors.

## Links

- [funding status-interaction test](funding_status_interaction_test.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [prediction feedback loops](prediction_feedback_loops.md)
- [automated predictive-evaluation safeguards](automated_predictive_evaluation_safeguards.md)
- [indicator systemic effects](../mechanisms/indicator_systemic_effects.md)
- [novelty robustness specification sweep](novelty_robustness_specification_sweep.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `type_error_asymmetric_policy_inference`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: asymmetric Type I Type II policy costs; policy loss-function inference; consequence-weighted significance; asymmetric error policy interpretation
