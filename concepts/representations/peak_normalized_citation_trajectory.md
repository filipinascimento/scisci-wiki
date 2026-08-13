# Peak-normalized citation trajectory

## Summary

Peak-normalized citation trajectory represents a paper's annual citation history after dividing each year's citations by the paper's own maximum annual citation count, making citation life-cycle shapes comparable across papers with different citation scales.

## Canonical Form

- Unit of analysis: paper-level annual citation trajectory, publication cohort, peak-year cohort, field, or citation-percentile group.
- Typical representation: `c_i(t) / c_i^max`, where `c_i^max` is the maximum annual citation count observed for paper `i`.
- Representation target: compare uptake, peak, and post-peak decay shapes rather than absolute citation volume.
- Empirical signature: trajectories rise toward a normalized peak of 1 and then decay in a way that can be averaged, aligned, and fitted across cohorts.

## Uses in Science of Science

- Supplies the trajectory representation used by [peak-year citation alignment](../methods/peak_year_citation_alignment.md) and [citation decay model comparison](../methods/citation_decay_model_comparison.md).
- Provides the normalized citation curve behind [paper attention half-life](../measures/paper_attention_half_life.md), [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md), and [attention half-life definition sensitivity](../validations/attention_half_life_definition_sensitivity.md).
- Makes [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md) and the [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md) interpretable as post-peak shape parameters rather than raw-volume parameters.
- Helps inspect [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md) without letting field citation-volume differences dominate the plot.

## Operationalization

- Build annual citation counts for each paper from publication through the citation-census year.
- Identify the paper's maximum annual citation count within the observation window.
- Divide every annual citation count by that maximum, producing a normalized trajectory whose peak equals 1.
- Compare trajectories by publication year, peak year, field, or citation-percentile group.
- Before using recent papers, apply a [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md) because the observed maximum may still move.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) defines normalized citation trajectories as annual citations divided by the peak value reached by the paper.
- The paper uses normalized trajectories for Physics and Biology publication cohorts in Figure 1 and then compares their post-peak decay.
- Parolo et al. state that the maximum annual citation count is the denominator for each paper, allowing papers from different fields and years to be compared by trajectory shape.
- The same normalized trajectories are fitted with exponential and power-law post-peak decay curves in the model-comparison section.

## Caveats

- Peak normalization removes citation scale, so it should not be used alone to compare total impact.
- The representation depends on observing a stable maximum annual citation year; recent papers and delayed-recognition papers are vulnerable to right-censoring.
- Noisy low-citation trajectories can change shape substantially when divided by a small maximum.
- Field and document-type differences can remain even after normalization.

## Links

- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md)
- [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)
- [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `peak_normalized_citation_trajectory`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: peak-normalized citation curve; normalized annual citation trajectory; max-normalized citation history; citation-shape trajectory
