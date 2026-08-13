# Peak-year citation alignment

## Summary

Peak-year citation alignment groups or re-indexes paper citation trajectories by the year of maximum annual citations, so post-peak attention decay can be compared after papers reach their own attention maxima.

## Canonical Form

- Unit of analysis: paper-level annual citation trajectory, publication year, peak year, post-peak time, field, or citation-percentile group.
- Typical representation: normalized citation curves aligned at `t_peak = 0`, peak-year cohorts, or post-peak decay panels.
- Method target: separate uptake timing from post-peak decay when estimating citation aging.
- Empirical signature: decay patterns are more robust when papers are grouped by peak year than when grouped only by publication year.

## Uses in Science of Science

- Provides the alignment step for [citation decay model comparison](citation_decay_model_comparison.md).
- Uses [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md) when the goal is to compare citation-shape decay after the attention maximum.
- Uses [time-to-peak attention](../measures/time_to_peak_attention.md) to locate the attention maximum before estimating decay.
- Helps distinguish early uptake speed from post-peak [paper attention half-life](../measures/paper_attention_half_life.md).
- Supplies a trajectory-alignment motif for broader [citation trajectory models](citation_trajectory_models.md).

## Operationalization

- Build annual citation counts for each paper.
- Identify the peak year as the year of maximum annual citations.
- Normalize annual citations by the peak value when comparing shapes rather than scale.
- Re-index the trajectory by years since peak and analyze only the post-peak segment for decay.
- Exclude or flag recent papers whose eventual peak may still change using a [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md).

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) defines the peak year as the year in which a paper receives its maximum number of citations and therefore is at peak attention.
- The paper reports that grouping papers by peak year yields more robust decay patterns than grouping them only by publication year.
- Parolo et al. use peak-year alignment before fitting exponential and power-law post-peak citation-decay curves.
- The same full-text design divides annual citations by the paper's maximum annual citation count before comparing trajectory shapes.
- The same design is repeated for the [11-30]% citation-percentile group in the appendix.

## Caveats

- Peak years can be unstable for recent papers, papers with sparse annual citations, or delayed-recognition papers.
- Multiple local maxima can make a single alignment point misleading.
- Aligning by peak year is useful for decay analysis but removes information about how long papers took to reach peak attention.

## Links

- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [citation decay model comparison](citation_decay_model_comparison.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [citation trajectory models](citation_trajectory_models.md)
- [post-peak citation decay check](../validations/post_peak_citation_decay_check.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `peak_year_citation_alignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: peak-year trajectory alignment; post-peak citation alignment; attention-peak alignment; citation peak cohorting
