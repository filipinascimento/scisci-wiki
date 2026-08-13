# Citation decay-rate alpha

## Summary

Citation decay-rate alpha is the fitted post-peak exponential decay parameter that measures how quickly normalized citation attention falls after a paper reaches peak annual citations.

## Canonical Form

- Unit of analysis: paper-level post-peak normalized citation trajectory, field, peak-year cohort, or citation-percentile group.
- Typical representation: `alpha_e` in `beta_e exp(-alpha_e t) + gamma_e`.
- Measurement target: speed of post-peak attention loss in calendar time.
- Empirical signature: larger `alpha_e` values indicate faster citation decay after peak attention.

## Uses in Science of Science

- Splits the parameter-level measure out of [citation decay model comparison](../methods/citation_decay_model_comparison.md).
- Provides model-based evidence for [paper attention half-life](paper_attention_half_life.md) and [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Helps test [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md) by tracking whether decay rates rise across peak-year cohorts.
- Feeds [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md) comparisons when decay rates differ across broad disciplines.

## Operationalization

- Start from a [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md).
- Align the post-peak segment using [peak-year citation alignment](../methods/peak_year_citation_alignment.md).
- Fit an exponential decay curve with an additive [citation decay plateau parameter](citation_decay_plateau_parameter.md).
- Estimate `alpha_e` for individual papers or grouped trajectories, then summarize its distribution by field and peak-year cohort.
- Check recent cohorts with a [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md) before treating trends in `alpha_e` as mature.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) fits normalized post-peak citation trajectories with `beta_e exp(-alpha_e t) + gamma_e`.
- The paper plots distributions of exponential decay rates for papers grouped by peak year and reports that the distributions become broader for recent peak-year cohorts.
- Parolo et al. report that the median of the `alpha_e` distributions increases over time, implying faster decay of scientific attention in absolute calendar time.
- The pattern appears in both the top-decile and [11-30]% citation-percentile groups.
- The authors report field dependence: Physics and Chemistry have faster decay than Biology and Medicine.

## Caveats

- `alpha_e` depends on the assumed exponential functional form and should be interpreted alongside power-law fit comparisons.
- Recent papers may not have reached their long-run plateau, biasing decay-rate estimates.
- Normalization makes `alpha_e` a shape parameter, not a measure of total citation impact.
- A rising decay rate is descriptive until paired with mechanisms such as publication-volume growth, search behavior, or topic turnover.

## Links

- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [citation decay plateau parameter](citation_decay_plateau_parameter.md)
- [paper attention half-life](paper_attention_half_life.md)
- [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `citation_decay_rate_alpha`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: exponential citation decay rate; post-peak alpha parameter; attention decay alpha; citation forgetting rate
