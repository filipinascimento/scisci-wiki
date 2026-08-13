# Top-decile trajectory stability filter

## Summary

The top-decile trajectory stability filter restricts citation life-cycle fitting to highly cited papers so annual citation trajectories are dense enough for stable post-peak analysis.

## Canonical Form

- Unit of analysis: paper, citation percentile group, field, publication year, or annual citation trajectory.
- Typical method: select top-decile papers by total citations before fitting peak and decay trajectories.
- Measurement target: stability of citation aging and attention-decay estimates.
- Empirical signature: older cohorts retain enough yearly citation events to support normalized trajectory comparison.

## Uses in Science of Science

- Explains a design choice in the [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md).
- Supports [citation decay model comparison](citation_decay_model_comparison.md) and [peak-year citation alignment](peak_year_citation_alignment.md).
- Pairs with [citation-percentile decay robustness](../validations/citation_percentile_decay_robustness.md).
- Helps avoid overfitting sparse individual-paper citation histories.

## Operationalization

- Compute total citations for papers within each field and publication cohort.
- Select papers above the chosen percentile threshold, commonly the top 10%.
- Fit or compare normalized annual citation trajectories only after checking enough citation events remain per year.
- Repeat key estimates on lower percentile bands to check whether conclusions depend on the filter.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) states that most analyses use the top 10% of cited papers because older and lower-cited papers have too few yearly citation events for reliable trajectory fitting.
- The paper repeats analyses for an 11-30% citation group as a robustness check.
- This design separates life-cycle shape estimation from claims about the entire citation distribution.

## Caveats

- The filter excludes most papers and therefore does not describe average paper attention.
- High-citation papers may have different aging dynamics from low-citation papers.
- Percentile thresholds depend on field definitions, citation census dates, and document-type filters.

## Links

- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [citation decay model comparison](citation_decay_model_comparison.md)
- [peak-year citation alignment](peak_year_citation_alignment.md)
- [citation-percentile decay robustness](../validations/citation_percentile_decay_robustness.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `top_decile_trajectory_stability_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: top cited stability filter; citation-trajectory percentile filter; high-citation life-cycle filter
