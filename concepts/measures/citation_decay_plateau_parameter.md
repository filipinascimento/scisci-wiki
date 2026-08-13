# Citation decay plateau parameter

## Summary

Citation decay plateau parameter is the additive long-run citation level included in post-peak decay fits to capture the fact that normalized citation trajectories often settle above zero rather than disappearing completely.

## Canonical Form

- Unit of analysis: fitted post-peak citation trajectory, paper, field, peak-year cohort, or citation-percentile group.
- Typical representation: `gamma_e` in `beta_e exp(-alpha_e t) + gamma_e` or `gamma_p` in `beta_p t^-alpha_p + gamma_p`.
- Measurement target: residual long-run attention after initial citation decay.
- Empirical signature: fitted decay curves converge to a nonzero plateau, and recent papers may not have been observed long enough to reach it.

## Uses in Science of Science

- Adds a parameter-level motif to [citation decay model comparison](../methods/citation_decay_model_comparison.md).
- Helps interpret [paper attention half-life](paper_attention_half_life.md) because a paper can have low but nonzero post-peak attention for many years.
- Connects post-peak decay to [citation longevity parameter](citation_longevity_parameter.md) and [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Provides a right-censoring warning for recent citation histories.
- Works with [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md) because recent papers may not yet have enough post-peak time to identify the plateau.

## Operationalization

- Normalize annual citation counts by each paper's maximum annual citation count.
- Fit post-peak trajectories with exponential and power-law decay forms that include an additive plateau term.
- Estimate the plateau parameter jointly with the decay rate and initial amplitude.
- Compare plateau estimates by field, citation-percentile group, and peak-year cohort.
- Flag recent papers when the observation window is too short to identify the long-run plateau.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) adds an extra parameter to both exponential and power-law fits because normalized citation curves eventually converge to a nonzero plateau after their initial decay.
- The paper fits exponential curves of the form `beta_e exp(-alpha_e t) + gamma_e` and power-law curves of the form `beta_p t^-alpha_p + gamma_p`.
- Parolo et al. note that the fraction of papers better fit by a power law rises for recent cohorts and suggest that recent papers may not yet have reached the final plateau.
- This recent-cohort qualification is split out as [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md).
- The appendix reports lower final plateaus for the [11-30]% citation-percentile group than for top-decile papers.

## Caveats

- Plateau estimates are sensitive to citation-window length and sparse late citations.
- A nonzero plateau can reflect persistent relevance, review reuse, field size, database growth, or background citation noise.
- Plateau terms improve curve fit but do not by themselves explain why residual attention persists.

## Links

- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [paper attention half-life](paper_attention_half_life.md)
- [citation longevity parameter](citation_longevity_parameter.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)
- [citation decay-rate alpha](citation_decay_rate_alpha.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation-percentile decay robustness](../validations/citation_percentile_decay_robustness.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `citation_decay_plateau_parameter`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: gamma citation plateau; long-run citation plateau; residual attention parameter; nonzero citation floor
