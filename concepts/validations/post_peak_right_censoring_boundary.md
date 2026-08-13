# Post-peak right-censoring boundary

## Summary

Post-peak right-censoring boundary is the validation rule that excludes or flags recent citation trajectories whose observed peak, post-peak decay, or long-run plateau may still change because the citation window is too short.

## Canonical Form

- Unit of analysis: paper citation history, peak-year cohort, citation-census year, model-fit window, or plateau-identification window.
- Typical representation: recent peak-year exclusion rule, immature post-peak flag, minimum years after peak, or plateau-observation boundary.
- Validation target: prevent immature citation histories from biasing peak timing, decay-rate, and model-comparison conclusions.
- Empirical signature: recent cohorts have unstable peaks, broader decay-rate distributions, or different model-fit behavior because their post-peak histories are incomplete.

## Uses in Science of Science

- Guards [peak-year citation alignment](../methods/peak_year_citation_alignment.md) and [time-to-peak attention](../measures/time_to_peak_attention.md) against unstable observed maxima.
- Helps interpret recent-cohort changes in [citation decay model comparison](../methods/citation_decay_model_comparison.md), [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md), and [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md).
- Extends general [citation window selection](../methods/citation_window_selection.md) into a specific post-peak attention-decay rule.
- Complements [post-peak citation decay check](post_peak_citation_decay_check.md), which verifies decline after a peak in delayed-recognition studies.

## Operationalization

- Record the citation-census date and the latest complete citation year.
- Identify each paper's observed peak annual citation year.
- Set a maturity cutoff or minimum post-peak follow-up window before estimating peak-year trends and decay parameters.
- Exclude, flag, or sensitivity-test recent peak-year cohorts whose observed peak or plateau is not stable.
- Report whether model comparisons change when recent, immature post-peak histories are removed.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) excludes papers peaking after 2005 from the time-to-peak trend because their peak years may still change in the Web of Science through-2010 citation panel.
- The paper notes that convergence to the final post-peak plateau takes more than 20 years on average, so recent papers may not have reached the plateau.
- Parolo et al. link improving power-law fit quality in recent peak-year cohorts partly to the smaller observed impact of plateau convergence in immature histories.
- The paper also reports broader `alpha_e` distributions for papers peaking in recent years, a pattern that should be read with observation-window maturity in mind.

## Caveats

- The cutoff is dataset-specific; a 2005 boundary in a through-2010 citation panel is not a universal rule.
- Excluding recent cohorts improves maturity but can remove the very period where attention dynamics are changing.
- A mature post-peak window does not rule out later rediscovery, topic revival, or delayed-recognition secondary peaks.
- Different outcomes need different maturity windows: peak timing, half-life, decay-rate fitting, and plateau estimation do not censor identically.

## Links

- [citation window selection](../methods/citation_window_selection.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md)
- [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [post-peak citation decay check](post_peak_citation_decay_check.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `post_peak_right_censoring_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: immature citation trajectory caveat; unstable peak-year boundary; post-peak plateau censoring; recent-cohort citation decay censoring
