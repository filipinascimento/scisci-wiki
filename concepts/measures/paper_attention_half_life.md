# Paper attention half-life

## Summary

Paper attention half-life measures the last point in a paper's citation life cycle when its normalized annual citation rate remains at or above a specified fraction of its peak attention.

## Canonical Form

- Unit of analysis: paper-level normalized annual citation trajectory.
- Typical representation: `t_i^1/2 = max{t such that c_tilde_i(t) >= 1/2}`.
- Measurement target: the duration of post-peak attention before a paper falls persistently below a chosen threshold.
- Empirical signature: declining mean half-life across peak-year cohorts indicates faster absolute-time obsolescence.

## Uses in Science of Science

- Gives an observed half-life counterpart to the model-based [citation longevity parameter](citation_longevity_parameter.md).
- Extends [citation life-cycle half-life](citation_life_cycle_half_life.md) with a last-sub-peak definition designed for noisy annual citation trajectories.
- Provides the input for [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md).
- Tests whether rising fitted decay rates in [citation decay model comparison](../methods/citation_decay_model_comparison.md) also appear in a nonparametric threshold measure.
- Provides a nonparametric counterpart to [citation decay-rate alpha](citation_decay_rate_alpha.md).
- Requires [attention half-life definition sensitivity](../validations/attention_half_life_definition_sensitivity.md) checks when threshold or first-drop definitions change the interpretation.
- Should be read with [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md) and [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md) when comparing cohorts.

## Operationalization

- Compute annual citation counts and divide each year's count by the paper's maximum annual citation count.
- Choose an attention threshold, commonly `1/2`, with lower thresholds such as `0.3` available for robustness.
- After identifying the citation peak, find the last year when normalized annual citations are at least the chosen threshold.
- Aggregate mean half-life by field, peak year, and citation-percentile group.
- Compare the last-threshold definition with the alternative first-drop definition when the goal is early loss rather than durable post-peak attention.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) defines half-life as the time after which normalized citation rate is never above one half of the peak rate.
- The paper interprets `t_i^1/2` as the last sub-peak year of attention because it marks the last moment when the paper still gathers enough citation attention.
- In the Web of Science attention-decay panel, mean absolute half-life decreases linearly over time for Clinical Medicine, Molecular Biology, Chemistry, and Physics.
- The absolute half-life decline is consistent with the paper's fitted increase in exponential citation-decay rates.
- The paper reports a Medicine/Biology versus Chemistry/Physics grouping in the half-life trends, now split out as [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md).
- Appendix checks show that using a lower threshold retains the main pattern, while a first-drop half-life definition answers a different question and changes the rescaled-time behavior.
- Those threshold and first-drop checks are split out as [attention half-life definition sensitivity](../validations/attention_half_life_definition_sensitivity.md).

## Caveats

- Half-life can be right-censored for recent papers and unstable for papers with sparse annual citations.
- The last-threshold definition intentionally tolerates temporary post-peak rebounds, so it should not be confused with the first year of decline.
- Threshold choices are arbitrary and should be reported alongside field and citation-window filters.

## Links

- [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md)
- [citation life-cycle half-life](citation_life_cycle_half_life.md)
- [attention half-life definition sensitivity](../validations/attention_half_life_definition_sensitivity.md)
- [citation longevity parameter](citation_longevity_parameter.md)
- [time-to-peak attention](time_to_peak_attention.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [citation decay-rate alpha](citation_decay_rate_alpha.md)
- [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)
- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `paper_attention_half_life`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: attention half-life; citation attention half-life; last sub-peak attention year; normalized citation half-life
