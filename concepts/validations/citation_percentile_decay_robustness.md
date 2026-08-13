# Citation-percentile decay robustness

## Summary

Citation-percentile decay robustness tests whether citation-aging patterns found among highly cited papers also appear in lower-cited paper strata, rather than being artifacts of elite-paper selection.

## Canonical Form

- Unit of analysis: citation-percentile stratum, paper, annual citation trajectory, field, or peak-year cohort.
- Typical representation: top 10% trajectories compared with [11-30]% trajectories, lower-citation appendix check, or percentile-stratified decay fit.
- Validation target: selection sensitivity in attention-decay estimates.
- Empirical signature: main timing and decay patterns remain qualitatively similar in lower-citation strata, though levels and plateaus differ.

## Uses in Science of Science

- Validates the top-decile design of [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md).
- Provides a robustness layer for [time-to-peak attention](../measures/time_to_peak_attention.md), [paper attention half-life](../measures/paper_attention_half_life.md), and [citation decay model comparison](../methods/citation_decay_model_comparison.md).
- Checks whether [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md) and [field-specific attention-decay gradient](field_specific_attention_decay_gradient.md) persist outside the top-decile paper stratum.
- Connects citation-aging studies to broader [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Helps avoid generalizing elite-paper decay dynamics to all papers without checks.

## Operationalization

- Rank papers within the chosen field or corpus by total citation count.
- Define citation-percentile strata, such as the top 10% and the [11-30]% group.
- Recompute citation trajectories, peak timing, decay fits, and half-life measures in each stratum.
- Compare qualitative trends and parameter levels across strata.
- Report whether lower-cited strata are too sparse for stable annual citation fitting.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) uses top-decile papers for most analyses because they provide enough older papers and annual citations for stable estimation.
- The paper repeats key analyses for the [11-30]% citation-percentile group and reports qualitatively similar behavior.
- The appendix shows that lower-cited papers have more concentrated early peaks, more rapid decay, and lower final plateaus than top-decile papers.
- Parolo et al. also show that the faster calendar-time decay pattern is independent of whether top-decile or [11-30]% papers are used.
- The lower-citation appendix retains the field-specific comparisons that motivate the [field-specific attention-decay gradient](field_specific_attention_decay_gradient.md).

## Caveats

- Percentile strata based on total citations are post-outcome selections and can condition on long-term impact.
- Lower-citation papers have noisier annual citation histories and can be harder to fit individually.
- Robustness across two strata does not imply that uncited or very low-cited papers follow the same dynamics.

## Links

- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md)
- [field-specific attention-decay gradient](field_specific_attention_decay_gradient.md)
- [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `citation_percentile_decay_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: citation-stratum decay robustness; lower-cited attention decay check; top-decile decay sensitivity; citation percentile life-cycle check
