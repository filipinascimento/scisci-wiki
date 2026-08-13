# Publication-year tail heterogeneity caveat

## Summary

Publication-year cohorts can blur citation-decay tails because papers reach peak attention at heterogeneous times.

## Canonical Form

- Unit of analysis: publication-year cohort, peak year, normalized trajectory, tail, time to peak, or citation decay.
- Typical representation: cohort-alignment validation comparing publication-year and peak-year grouping.
- Mechanism, measurement, or validation target: trajectory-tail stability under different alignment rules.
- Empirical signature: tail irregularities shrink when papers are aligned by peak year instead of publication year..

## Uses in Science of Science

- Refines citation-trajectory validation by linking it to [peak year citation alignment](../methods/peak_year_citation_alignment.md) and [time to peak attention](../measures/time_to_peak_attention.md).
- Useful as a reusable check when [peak normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md) is interpreted from citation histories.
- Adds cross-links to [post peak right censoring boundary](post_peak_right_censoring_boundary.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Compare normalized trajectories grouped by publication year versus peak year.
- Flag tail irregularity when time-to-peak dispersion is large.
- Use peak-year alignment when post-peak decay is the target.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) reports that peak-year grouping gives a more robust decay pattern and attributes tail irregularity in publication-year curves to time-to-peak heterogeneity.
- The motif marks alignment choice as a validation issue.

## Caveats

- This is a cohort-alignment caveat rather than a standalone causal mechanism.
- Peak-year alignment can condition on future citation outcomes.

## Links

- [Peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [Time-to-peak attention](../measures/time_to_peak_attention.md)
- [Peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [Post-peak right-censoring boundary](post_peak_right_censoring_boundary.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `publication_year_tail_heterogeneity_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: publication-cohort tail noise; time-to-peak tail heterogeneity; publication-year decay-alignment caveat
