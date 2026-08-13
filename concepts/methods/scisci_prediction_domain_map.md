# SciSci prediction domain map

## Summary

SciSci prediction domain map organizes science-of-science forecasting targets by what appears more or less predictable from available data and models.

## Canonical Form

- Unit of analysis: prediction task, outcome domain, model family, data source, or validation setting.
- Typical representation: map of tasks such as citation accumulation, faculty placement, productivity timing, personal-best timing, and personal-best magnitude.
- Method target: identify which scientific outcomes are forecastable, which remain weakly predictable, and what data or experiments could improve forecasts.
- Empirical signature: different prediction domains show different limits even when they use the same bibliographic and career data ecosystem.

## Uses in Science of Science

- Refines [scientific discovery prediction](scientific_discovery_prediction.md) into task-specific forecasting domains.
- Connects paper-level models such as [long-term citation prediction](long_term_citation_prediction.md) with career-level models such as [Q-model career impact prediction](q_model_career_prediction.md).
- Helps prevent overgeneralizing from predictable citation trajectories to unpredictable breakthrough timing or hiring outcomes.
- Provides a planning layer for data collection, model validation, and policy-use audits.

## Operationalization

- List the forecast target, prediction horizon, decision context, input features, and validation metric for each task.
- Separate descriptive predictability from causal policy value.
- Benchmark against simple baselines such as pedigree, productivity, preferential attachment, or field-year averages.
- Treat simple baselines such as [faculty-placement pedigree baseline](../validations/faculty_placement_pedigree_baseline.md) and [early-career productivity peak window](../measures/early_career_productivity_peak_window.md) as domain-specific reference points before adding complex models.
- Record whether failures appear due to missing data, latent factors, stochasticity, or feedback after deployment.

## Evidence and Validations

- Verified full-text evidence from Clauset, Larremore, and Sinatra (2017) identifies four exemplar prediction areas: citations of past discoveries, faculty hiring, scientific productivity, and timing of major discoveries over a career.
- The paper describes citation accumulation as relatively predictable under preferential-attachment and modified citation-trajectory models, while noting exceptions such as sleeping beauties.
- Clauset et al. report that faculty placement remains difficult to predict beyond academic pedigree even with early productivity, postdoctoral training, geography, gender, and related data.
- The paper contrasts productivity timing, which often peaks early but varies substantially, with the timing of a scientist's highest-impact paper, which appears uniformly distributed across the publication sequence.
- Clauset et al. also make the policy boundary explicit through [productivity-age policy causal ambiguity](../validations/productivity_age_policy_causal_ambiguity.md): descriptive productivity timing does not by itself identify the effect of shifting funding by age.
- It further notes that the magnitude of a scientist's personal-best work is more predictable than its career timing, showing that predictability varies within the same career domain.

## Caveats

- A domain map is only as current as the models and data sources it summarizes.
- Strong retrospective performance in one task does not justify policy use in another task.
- Predictability can change after deployment if forecasts alter incentives, attention, or resource allocation.

## Links

- [scientific discovery prediction](scientific_discovery_prediction.md)
- [expected-unexpected discovery spectrum](../representations/expected_unexpected_discovery_spectrum.md)
- [long-term citation prediction](long_term_citation_prediction.md)
- [Q-model career impact prediction](q_model_career_prediction.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [faculty placement predictive validity](../validations/faculty_placement_predictive_validity.md)
- [faculty-placement pedigree baseline](../validations/faculty_placement_pedigree_baseline.md)
- [early-career productivity peak window](../measures/early_career_productivity_peak_window.md)
- [productivity-age policy causal ambiguity](../validations/productivity_age_policy_causal_ambiguity.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)
- [lagging-indicator prediction limits](../validations/lagging_indicator_prediction_limits.md)
- [novel-discovery out-of-distribution limit](../validations/novel_discovery_out_of_distribution_limit.md)
- [context-specific SciSci prediction data](../datasets/context_specific_scisci_prediction_data.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `scisci_prediction_domain_map`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: predictability map; prediction task map; science forecasting domain map; SciSci predictability taxonomy
