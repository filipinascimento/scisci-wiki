# Time-to-peak attention

## Summary

Time-to-peak attention measures how many years a paper takes to reach its maximum annual citation rate, using the citation peak as a proxy for the moment of greatest scholarly attention.

## Canonical Form

- Unit of analysis: paper-level annual citation trajectory.
- Typical representation: `Delta t_peak`, the elapsed time from publication to the year of maximum annual citations.
- Measurement target: speed of uptake and turnover in citation attention.
- Empirical signature: decreasing mean time-to-peak across publication cohorts indicates that papers reach peak attention sooner.

## Uses in Science of Science

- Converts [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) into a directly observed timing measure before post-peak decay begins.
- Helps align citation histories by peak year before applying [citation decay model comparison](../methods/citation_decay_model_comparison.md).
- Supplies the peak-year input for [peak-year citation alignment](../methods/peak_year_citation_alignment.md).
- Complements [citation immediacy parameter](citation_immediacy_parameter.md), which estimates early uptake inside a fitted citation-history model.
- Provides field-specific evidence for [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md).
- Requires [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md) checks for recent cohorts whose maximum annual citation year may still move.
- Feeds [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md) when peak timing differs by discipline.

## Operationalization

- Build annual citation counts for each paper from publication onward.
- Identify the year in which the paper receives its maximum annual citation count.
- Compute `Delta t_peak` as the difference between that peak year and the publication year.
- Aggregate the distribution or mean of `Delta t_peak` by field, publication year, and citation-percentile group.
- Exclude recent papers whose eventual peak may still change if the observation window is not mature.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) defines the peak year as the year in which a paper receives its maximum annual citation count, making it the year of peak attention.
- The paper reports that most papers in the four broad fields peak within a few years after publication.
- Biology papers have shorter time-to-peak than Medicine, Physics, and Chemistry in the studied Web of Science panel.
- That discipline contrast is split out as [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md).
- For both top-decile papers and the [11-30]% citation-percentile group, the mean `Delta t_peak` decreases over publication years, indicating faster attention turnover in newer cohorts.
- The authors avoid papers peaking after 2005 in the trend estimate because their peak years could still be unstable.
- That recent-cohort exclusion is split out as [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md).

## Caveats

- Multiple local maxima, late awakenings, and right-censoring can make a single peak year unstable.
- Peak timing is sensitive to annual binning, database coverage, and field assignment.
- A shorter time-to-peak may reflect faster discovery, faster forgetting, changing reference practices, or publication-volume pressure.

## Links

- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [paper attention half-life](paper_attention_half_life.md)
- [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md)
- [peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation immediacy parameter](citation_immediacy_parameter.md)
- [citation life-cycle half-life](citation_life_cycle_half_life.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `time_to_peak_attention`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: Delta t peak; citation peak time; years to peak attention; time to maximum annual citations
