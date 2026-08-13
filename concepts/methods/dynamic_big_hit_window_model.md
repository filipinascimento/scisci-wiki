# Dynamic big-hit window model

## Summary

A dynamic big-hit window model repeatedly classifies papers as top-percentile citation hits over expanding cumulative citation windows to show when an effect becomes visible in evaluation data.

## Canonical Form

- Unit of analysis: paper, publication cohort, subject category, citation window, or novelty class.
- Typical representation: year-by-year top-percentile indicator, predicted probability curve, odds-ratio curve, or coefficient sequence across cumulative windows.
- Method target: trace how high-impact status changes as citation exposure lengthens.
- Empirical signature: a paper class can look ordinary or disadvantaged in short windows but become advantaged in longer windows.

## Uses in Science of Science

- Operationalizes [citation window selection](citation_window_selection.md) as a repeated model rather than a single early-versus-long comparison.
- Provides the method layer for [novelty short-window undercount](../validations/novelty_short_window_undercount.md) and [high-JIF novelty delay interaction](../validations/high_jif_novelty_delay_interaction.md).
- Extends [citation percentile indicators](../measures/citation_percentile_indicators.md) by making top-percentile membership window-specific.
- Pairs direct top-percentile timing with indirect outcomes such as the [cited-by-big-hit indicator](../measures/cited_by_big_hit_indicator.md).

## Operationalization

- Define a fixed publication cohort with enough follow-up time for the longest window.
- For each window length `t`, count cumulative citations from publication through `t`.
- Build a field-year reference set and define a window-specific top-percentile outcome, such as top 1% cited within subject category.
- Estimate the same model separately for each cumulative window or fit an explicit window-by-exposure interaction.
- Plot predicted probabilities, odds ratios, or coefficients by window length.
- Report whether the sample, controls, field definitions, and percentile threshold are constant across windows.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) defines `Big hit in year t` as top-1% cited status within the same WoS subject category and publication year, based on cumulative citations from 2001 through year `t`.
- The paper estimates top-1% status for non-novel, moderately novel, and highly novel papers over 13 consecutive citation windows.
- Wang et al. use separate logistic models to show that highly novel papers are not advantaged under a standard three-year window but have higher top-hit probability under a 13-year window.
- The same dynamic setup is extended with novelty-by-top-JIF interactions to show that prestigious journals accelerate citation accumulation generally but do not remove delayed recognition for highly novel papers.
- This makes the citation-window choice itself an empirical robustness surface.

## Caveats

- Early windows are more policy-relevant but noisier; long windows are more stable but arrive late.
- Top-percentile thresholds can be unstable when many papers tie near the cutoff.
- Window-specific models do not by themselves explain whether delay comes from novelty, field pace, visibility, or database coverage.
- A fixed publication cohort avoids exposure imbalance but may not represent recent evaluation settings.

## Links

- [citation window selection](citation_window_selection.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [high-JIF novelty delay interaction](../validations/high_jif_novelty_delay_interaction.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [cited-by-big-hit indicator](../measures/cited_by_big_hit_indicator.md)
- [citation-window impact split](../measures/citation_window_impact_split.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `dynamic_big_hit_window_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: dynamic big-hit model; year-by-year top-percentile model; cumulative citation-window logistic sweep; top-1% window sweep
