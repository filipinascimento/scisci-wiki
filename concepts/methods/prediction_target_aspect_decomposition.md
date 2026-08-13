# Prediction target aspect decomposition

## Summary

Prediction target aspect decomposition separates a broad forecast question into distinct outcome aspects, because timing, magnitude, rank, and occurrence can have different predictability.

## Canonical Form

- Unit of analysis: prediction task, outcome aspect, scientist career, paper impact, productivity timing, or validation metric.
- Typical representation: decomposition table listing forecast target, aspect, horizon, and predictability evidence.
- Method target: avoid treating a partially predictable broad outcome as uniformly predictable.
- Empirical signature: one aspect of the same substantive outcome is predictable while another aspect remains weakly predictable or apparently random.

## Uses in Science of Science

- Refines [SciSci prediction domain map](scisci_prediction_domain_map.md) by splitting each domain into forecastable subtargets.
- Links [early-career productivity peak window](../measures/early_career_productivity_peak_window.md) to career-success prediction without conflating productivity timing with best-paper timing.
- Supports [Q-model career impact prediction](q_model_career_prediction.md) by distinguishing personal-best magnitude from personal-best timing.
- Provides a design step before applying [scientific discovery prediction](scientific_discovery_prediction.md) to policy decisions.

## Operationalization

- Define the broad prediction target, such as career success or major discovery.
- Split it into aspects such as timing, magnitude, rank, occurrence, field, or institutional placement.
- Choose separate baselines, features, and validation metrics for each aspect.
- Report which aspects are predictable and which are not.
- Avoid using predictability of one aspect as evidence for policy claims about another aspect.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2017) contrasts productivity timing with the timing of a scientist's personal-best discovery.
- The paper reports that high-impact work is not correlated with timing within a scientist's publication sequence, even though most major discoveries are made by young scientists because early career phases are more productive.
- Clauset et al. then state that predicting how many citations a scientist's personal-best work will receive is a different matter.
- The paper concludes that some aspects of individual achievement are remarkably unpredictable while other aspects are more predictable.

## Caveats

- Decomposition can create many targets and increase multiple-testing risk.
- Outcome aspects can be statistically dependent even when interpreted separately.
- A decomposed prediction task still needs causal and policy validation before deployment.

## Links

- [SciSci prediction domain map](scisci_prediction_domain_map.md)
- [scientific discovery prediction](scientific_discovery_prediction.md)
- [early-career productivity peak window](../measures/early_career_productivity_peak_window.md)
- [productivity-age policy causal ambiguity](../validations/productivity_age_policy_causal_ambiguity.md)
- [Q-model career impact prediction](q_model_career_prediction.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [lagging-indicator prediction limits](../validations/lagging_indicator_prediction_limits.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `prediction_target_aspect_decomposition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: prediction aspect split; target decomposition; forecast subtarget separation; predictability aspect decomposition
