# Attention half-life definition sensitivity

## Summary

Attention half-life definition sensitivity tests whether conclusions about citation half-life depend on the chosen threshold and on whether half-life means the last sufficiently high attention year or the first drop below the threshold.

## Canonical Form

- Unit of analysis: normalized annual citation trajectory, half-life threshold, first-drop year, last-sub-peak year, field, or peak-year cohort.
- Typical representation: `sigma` threshold sensitivity, last-threshold half-life, first-drop half-life, or rescaled half-life comparison.
- Validation target: ensuring attention-decay conclusions are not artifacts of an arbitrary half-life definition.
- Empirical signature: some trends survive threshold changes, while first-drop and last-sub-peak definitions answer different questions.

## Uses in Science of Science

- Provides the robustness layer for [paper attention half-life](../measures/paper_attention_half_life.md).
- Helps interpret [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md) when alternative half-life definitions produce different rescaled trends.
- Connects half-life indicators to [citation decay model comparison](../methods/citation_decay_model_comparison.md) and [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Separates definition sensitivity from [post-peak right-censoring boundary](post_peak_right_censoring_boundary.md), which asks whether the citation window is mature enough.
- Prevents a threshold choice from being silently treated as a natural boundary of scholarly attention.

## Operationalization

- Compute normalized annual citation trajectories for each paper.
- Estimate half-life using the last year when normalized citations remain above a threshold such as 0.5.
- Repeat with alternative thresholds such as 0.3.
- Compare with the first year when normalized citations drop below the threshold.
- Recompute calendar-time and publication-volume-rescaled half-life trends for each definition.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) defines half-life as the last year when normalized citation rate remains at least one half of the peak.
- The appendix repeats the half-life analysis with a lower threshold, `sigma = 0.3`, and reports that the main pattern is retained.
- Parolo et al. also test an alternative first-drop half-life definition and find that it changes the rescaled half-life behavior.
- The authors explain that the first-drop measure captures the initial drop in attention, while their main half-life measure captures the last sub-peak of meaningful attention.

## Caveats

- Thresholds such as 0.5 or 0.3 are conventional choices, not natural constants.
- Sparse citation histories can cross thresholds repeatedly, making first-drop and last-sub-peak definitions diverge.
- The best definition depends on whether the research question is early loss, durable relevance, or long-run obsolescence.

## Links

- [paper attention half-life](../measures/paper_attention_half_life.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md)
- [post-peak right-censoring boundary](post_peak_right_censoring_boundary.md)
- [field-specific attention-decay gradient](field_specific_attention_decay_gradient.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [post-peak citation decay check](post_peak_citation_decay_check.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `attention_half_life_definition_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: half-life threshold sensitivity; first-drop half-life check; last sub-peak half-life check; citation half-life definition robustness
