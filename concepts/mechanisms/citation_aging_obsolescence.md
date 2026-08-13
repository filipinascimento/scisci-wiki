# Citation aging and obsolescence

## Summary

Citation aging describes how attention to papers changes with time; obsolescence is the decline of use or citation as fields move on, while some work has delayed or long-lived impact.

## Canonical Form

- Unit of analysis: paper, journal, field, topic, method, or reference cohort.
- Typical representation: citation trajectory by age, normalized by field/year.
- Mechanism: attention decay, knowledge replacement, incorporation, delayed uptake, or field growth.
- Empirical signature: age-dependent citation rates with field-specific decay and outlier long-memory trajectories.

## Uses in Science of Science

- Used to correct impact measures for exposure time and field citation tempo.
- Central to sleeping beauties, long-term impact prediction, and historical credit.
- Helps separate immediate attention from durable knowledge use.
- Needs diagnostics such as [post-peak citation decay check](../validations/post_peak_citation_decay_check.md) when delayed-recognition measures depend on observed citation maxima.

- A residual Parolo pass adds [TR subject-category broad-field map](../methods/tr_subject_category_broad_field_map.md), [annual citation counting process](../representations/annual_citation_counting_process.md), [citation autocorrelation regime test](../methods/citation_autocorrelation_regime_test.md), [ultrametric transition-rate kernel](../methods/ultrametric_transition_rate_kernel.md), [publication-year tail heterogeneity caveat](../validations/publication_year_tail_heterogeneity_caveat.md), [recent-cohort power-law fit drift](../validations/recent_cohort_power_law_fit_drift.md), [field-pair attention-decay grouping](../validations/field_pair_attention_decay_grouping.md), [average reference-growth partial offset](average_reference_growth_partial_offset.md), [initial attention-drop stability check](../validations/initial_attention_drop_stability_check.md), and [citation life-cycle tail-plateau percentile gap](../validations/citation_lifecycle_tail_plateau_percentile_gap.md).
## Operationalization

- Estimate citation hazard or rate as a function of age, fitness, field, and cohort.
- Compute citation half-life or age-normalized impact.
- Fit paper-level citation histories with parameters for relative fitness, immediacy, and longevity when the goal is long-term impact prediction rather than only retrospective normalization.
- Use [lognormal citation survival function](../methods/lognormal_citation_survival_function.md) when modeling the age-dependent citation survival curve explicitly.
- Use [citation immediacy parameter](../measures/citation_immediacy_parameter.md) and [citation longevity parameter](../measures/citation_longevity_parameter.md) to separate early uptake from durable attention.
- Use [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md) when finite citation windows are likely to change the observed citation-count distribution.
- Use [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md) when comparing rare citation-trajectory counts across growing publication cohorts.
- Use [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md) when testing whether apparent faster forgetting is driven by growth in the number of competing papers.
- Use [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md) and [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md) when the goal is to separate archive growth from recent-front concentration.
- Use [citation obsolescence from Garfield Constant](../methods/citation_obsolescence_from_garfield_constant.md) when age-specific citations per cited item are available and publication-volume growth needs to be separated from true decline in use.
- Use citation contexts/full text to distinguish use, perfunctory citation, and historical credit.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) models citation histories as the joint result of preferential attachment, aging/novelty decay, and paper fitness; the paper argues that short-term citations can underestimate exceptional long-term impact.
- The Wang et al. aging term is represented separately as [lognormal citation survival function](../methods/lognormal_citation_survival_function.md).
- Wang et al. split paper-level trajectories into relative fitness, immediacy, and longevity, enabling [ultimate citation impact](../measures/ultimate_citation_impact.md) estimation and [long-term citation prediction](../methods/long_term_citation_prediction.md).
- Verified full-text evidence from Price (1976) uses cumulative-advantage reasoning to separate literature growth from obsolescence, arguing that most citations are recent partly because most papers are recent and that obsolescence is largely long-range.
- Price also uses age-specific [Garfield Constant](../measures/garfield_constant.md) values as an obsolescence estimator, yielding a separate [citation obsolescence from Garfield Constant](../methods/citation_obsolescence_from_garfield_constant.md) method page.
- Price's growth-adjusted interpretation is now split out as [growth-deconfounded long-range obsolescence](../validations/growth_deconfounded_long_range_obsolescence.md).
- Verified full-text evidence from Price (1965) adds an earlier front-versus-archive framing: recent papers receive excess citation attention, some papers leave active citation circulation, and fields differ in their classic versus ephemeral citation half-life mix.
- A later Price split separates the background citation-age growth curve and recent-paper immediacy curve from broader aging and obsolescence mechanisms.
- Verified full-text evidence from Fortunato et al. (2018) frames citation aging through immediacy, longevity, obsolescence, fitness, and delayed recognition, making aging a modifier of cumulative advantage rather than a nuisance parameter.
- Verified full-text evidence from Wu et al. (2019) shows that small-team and disruptive work can receive slower attention, which links aging curves to team structure and disruption rather than only paper age.
- Verified full-text evidence from Ke et al. (2015) operationalizes delayed citation trajectories at scale through sleeping-beauty identification.
- Ke et al. report that nearly 90% of papers had already experienced a drastic decline after their maximum annual citations, and that beauty-coefficient distribution shapes were stable after filtering to those cases.
- Verified full-text evidence from Parolo et al. (2015) shows that papers in four broad Web of Science fields typically peak within a few years and then decay rapidly in annual citation attention.
- Parolo et al. distinguish absolute-time decay from publication-volume time: calendar-year half-life declines, while half-life measured in the number of new field publications is comparatively stable.
- The paper therefore links citation aging to [publication growth attention competition](publication_growth_attention_competition.md), not only to intrinsic paper age.

## Caveats

- Citation age patterns are database- and field-dependent.
- Obsolescence is not always epistemic failure; useful facts may become uncited common knowledge.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [post-peak citation decay check](../validations/post_peak_citation_decay_check.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [lognormal citation survival function](../methods/lognormal_citation_survival_function.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)
- [ultimate citation impact](../measures/ultimate_citation_impact.md)
- [long-term citation prediction](../methods/long_term_citation_prediction.md)
- [citation window selection](../methods/citation_window_selection.md)
- [paper fitness](../measures/paper_fitness.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [annual citation-incidence distribution](../measures/annual_citation_incidence_distribution.md)
- [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md)
- [citation obsolescence from Garfield Constant](../methods/citation_obsolescence_from_garfield_constant.md)
- [growth-deconfounded long-range obsolescence](../validations/growth_deconfounded_long_range_obsolescence.md)
- [Garfield Constant](../measures/garfield_constant.md)
- [citation immediacy effect curve](../measures/citation_immediacy_effect_curve.md)
- [research-front citation share](../measures/research_front_citation_share.md)
- [live/dead citation survival](live_dead_citation_survival.md)
- [classic/ephemeral literature split](classic_ephemeral_literature_split.md)
- [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md)
- [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [publication growth attention competition](publication_growth_attention_competition.md)
- [ultradiffusive citation decay](ultradiffusive_citation_decay.md)
- [citation pull mechanism](citation_pull_mechanism.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [team size disruption](../mechanisms/team_size_disruption.md)
- [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

- [annual citation counting process](../representations/annual_citation_counting_process.md)
- [recent-cohort power-law fit drift](../validations/recent_cohort_power_law_fit_drift.md)
- [citation life-cycle tail-plateau percentile gap](../validations/citation_lifecycle_tail_plateau_percentile_gap.md)
## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]
- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]
- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]
- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `citation_aging_obsolescence`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Aliases: citation decay; immediacy; half-life; long-term impact
