# Citation trajectory models

## Summary

Citation trajectory models fit the time path of citations to estimate impact dynamics, forecast future citations, and distinguish aging, attachment, fitness, and delayed-recognition patterns.

## Canonical Form

- Unit of analysis: paper, patent, journal cohort, author portfolio, or citation time series.
- Typical representation: fitted citation curve, impact envelope, life-cycle parameters, or future-citation forecast.
- Mechanism or measurement target: how attention accumulates, peaks, decays, or awakens over time.
- Empirical signature: citation histories collapse, forecast, or classify better when age, previous citations, and paper heterogeneity are modeled together.

## Uses in Science of Science

- Provides a forecasting method for [scientific discovery prediction](scientific_discovery_prediction.md) and long-term paper evaluation.
- Turns [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) into estimable life-cycle parameters.
- Uses model components such as [lognormal citation survival function](lognormal_citation_survival_function.md) to represent paper-age decay.
- Splits into reusable parameters and validations: [citation immediacy parameter](../measures/citation_immediacy_parameter.md), [citation longevity parameter](../measures/citation_longevity_parameter.md), [ultimate citation impact](../measures/ultimate_citation_impact.md), [universal citation-history rescaling](../validations/universal_citation_history_rescaling.md), and [long-term citation prediction](long_term_citation_prediction.md).
- Also supports validation motifs for [equal-fitness citation convergence](../validations/equal_fitness_citation_convergence.md), [same-early-citation divergence](../validations/same_early_citation_divergence.md), [citation prediction envelope coverage](../validations/citation_prediction_envelope_coverage.md), and [alternative citation curve benchmark](../validations/alternative_citation_curve_benchmark.md).
- Complements [Q-model career impact prediction](q_model_career_prediction.md), which moves from paper-level citation histories to person-level career-impact trajectories.
- Helps identify delayed-recognition cases such as [sleeping beauty](../mechanisms/sleeping_beauty.md) without treating them only as anecdotes.

## Operationalization

- Assemble annual citation histories by publication cohort and data source.
- Fit model parameters for attachment, aging, and paper-specific heterogeneity, or compare alternative curves such as logistic, Bass, and Gompertz models.
- For post-peak attention studies, align trajectories by peak year and compare exponential and power-law decay forms with a fit statistic such as an F-score.
- Evaluate predictive accuracy with held-out future years, prediction envelopes, or deviations from observed long-window citations.
- Inspect outliers with citation contexts, field changes, or downstream topic shifts.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) fits citation histories using preferential attachment, aging, and paper fitness, then estimates relative fitness, immediacy, and longevity for each paper.
- The aging component is split out as [lognormal citation survival function](lognormal_citation_survival_function.md).
- Wang et al. report that rescaled paper histories collapse onto a common curve across Physical Review and journal cohorts, while parameter variation captures jump-decay, delayed-impact, and long-lived trajectories.
- The paper evaluates future-citation prediction from early training windows and reports uncertainty envelopes, comparing its model against logistic, Bass, and Gompertz alternatives.
- The same full text separates prediction uncertainty, alternative-curve benchmarking, and the low-fitness regime where preferential attachment is not distinguishable from a lognormal-aging model.
- The same full-text evidence supports finer linked motifs for immediacy, longevity, ultimate impact, citation-history rescaling, and long-term citation prediction.
- Verified full-text evidence from Ke et al. (2015) shows a complementary trajectory-classification use: citation histories can be compared with a reference line to quantify delayed recognition and awakening time.
- Ke et al. also define a [citation-model first-mover limit](../validations/citation_model_first_mover_limit.md), arguing that standard citation-dynamics models naturally favor early attention and do not readily predict delayed recognition.
- Verified full-text evidence from Parolo et al. (2015) adds a post-peak comparison layer: [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md) histories are aligned by peak year, fitted with exponential and power-law decay curves including plateau terms, and compared using F-statistics.
- Parolo et al. report that exponential fits describe most papers better, while power-law fit quality improves for recent peak-year cohorts.
- The same paper supports split motifs for [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md), [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md), and [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md).

## Caveats

- Forecasts are sensitive to early-window noise, missing citations, cohort truncation, field assignment, and database changes.
- A good curve fit does not explain the social or cognitive mechanism behind a trajectory.
- Prediction can be misused in evaluation if uncertainty and delayed-recognition risk are ignored.

## Links

- [paper fitness](../measures/paper_fitness.md)
- [lognormal citation survival function](lognormal_citation_survival_function.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [universal citation-history rescaling](../validations/universal_citation_history_rescaling.md)
- [long-term citation prediction](long_term_citation_prediction.md)
- [equal-fitness citation convergence](../validations/equal_fitness_citation_convergence.md)
- [same-early-citation divergence](../validations/same_early_citation_divergence.md)
- [citation prediction envelope coverage](../validations/citation_prediction_envelope_coverage.md)
- [alternative citation curve benchmark](../validations/alternative_citation_curve_benchmark.md)
- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [citation-model first-mover limit](../validations/citation_model_first_mover_limit.md)
- [awakening time](../measures/awakening_time.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [scientific discovery prediction](scientific_discovery_prediction.md)
- [Q-model career impact prediction](q_model_career_prediction.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation decay model comparison](citation_decay_model_comparison.md)
- [peak-year citation alignment](peak_year_citation_alignment.md)
- [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)
- [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)
- [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [preferential attachment activation threshold](../mechanisms/preferential_attachment_activation_threshold.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]
- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]
- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `citation_trajectory_models`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: citation history model; citation life-cycle model; impact prediction model; citation dynamics model
