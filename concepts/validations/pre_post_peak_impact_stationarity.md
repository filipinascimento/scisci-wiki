# Pre/post-peak impact stationarity

## Summary

Pre/post-peak impact stationarity tests whether a scientist's ordinary papers become measurably more or less cited before or after the scientist's highest-impact paper.

## Canonical Form

- Unit of analysis: scientist, highest-impact paper, publication sequence, pre-peak paper set, post-peak paper set, or impact time series.
- Typical representation: average impact before and after `t*`, moving averages around `t*`, fitted pre/post slopes, or permutation envelopes.
- Validation target: determine whether a breakthrough is surrounded by a detectable ramp-up or afterglow in paper impact.
- Empirical signature: no measurable difference between pre-peak and post-peak average impacts after preserving the scientist's productivity timeline.

## Uses in Science of Science

- Refines the [random impact rule](../mechanisms/random_impact_rule.md) by checking local behavior around the top paper, not only its sequence position.
- Provides a more interpretable component of the [within-career impact shuffle null](within_career_impact_shuffle_null.md).
- Helps separate one exceptional paper from a sustained career-state change, which later hot-streak models treat differently.
- Warns evaluation systems against inferring durable career change from one peak-impact publication alone.

## Operationalization

- Identify each scientist's highest-impact paper and its publication time `t*`.
- Compare average paper impact before and after `t*`, excluding or fixing the peak paper as specified.
- Fit pre/post trends around `t*` and compare observed statistics with within-career shuffled impact sequences.
- Repeat under alternative impact definitions, samples, and authorship-credit rules.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) compares average impact before and after each scientist's most-cited paper.
- The paper reports no gradual increase in impact approaching the top paper and no elevated citations after it.
- Sinatra et al. validate the pattern with moving averages, rolling-window maximum checks, slope comparisons before and after `t*`, and within-career impact randomization.
- The authors report robustness across scientist samples, impact definitions, and different paper-credit allocations among coauthors.

## Caveats

- Stationarity around one top paper does not rule out multi-paper hot streaks or topic-specific career phases.
- Citation impact may miss changes in research direction, mentoring, software, datasets, or institutional influence.
- Results depend on author disambiguation, career-window rules, and impact-window choices.

## Links

- [random impact rule](../mechanisms/random_impact_rule.md)
- [within-career impact shuffle null](within_career_impact_shuffle_null.md)
- [highest-impact sequence position](../measures/highest_impact_sequence_position.md)
- [career-impact authorship-credit robustness](career_impact_authorship_credit_robustness.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `pre_post_peak_impact_stationarity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: pre-post peak impact test; breakthrough afterglow null; no pre-peak ramp; impact stationarity around top paper
