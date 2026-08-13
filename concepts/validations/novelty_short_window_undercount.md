# Novelty short-window undercount

## Summary

Novelty short-window undercount is the validation failure in which short citation windows underrate novel papers because their direct citation impact accumulates more slowly than conventional work.

## Canonical Form

- Unit of analysis: paper, novelty class, citation window, subject category, evaluation exercise, or funding portfolio.
- Typical representation: early-versus-long top-percentile status, three-year versus thirteen-year citation comparison, delayed big-hit probability, or novelty-by-window interaction.
- Validation target: test whether an evaluation window is long enough for novel work.
- Empirical signature: highly novel papers are not advantaged, or can be disadvantaged, under short windows despite higher long-window hit probability.

## Uses in Science of Science

- Provides a concrete robustness check for [citation window selection](../methods/citation_window_selection.md).
- Is often estimated with a [dynamic big-hit window model](../methods/dynamic_big_hit_window_model.md), where top-percentile status is recomputed across cumulative windows.
- Explains one channel of [novelty penalty](../mechanisms/novelty_penalty.md) in bibliometric, funding, hiring, and tenure evaluations.
- Should be paired with [highly novel paper class](../measures/highly_novel_paper_class.md), [novelty impact dispersion](../measures/novelty_impact_dispersion.md), and [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Connects novelty evaluation to [responsible metrics](../measures/responsible_metrics.md) and [indicator systemic effects](../mechanisms/indicator_systemic_effects.md).

## Operationalization

- Compute top-percentile citation status for the same paper cohort across multiple citation windows.
- Stratify papers by novelty class and field.
- Compare early-window and long-window odds of becoming a big hit.
- Test interactions with journal prestige, field, article type, and other controls.
- Treat a reversal or delayed emergence of novelty effects as evidence that the short window is undercounting novel work.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) estimates big-hit probability for non-novel, moderately novel, and highly novel papers over 13 consecutive citation windows.
- The paper reports that highly novel papers have a higher chance of becoming top-1% cited over a 13-year window.
- In the first few years after publication, novel papers are less likely to be top cited, and with a standard three-year window highly novel papers are not more likely to be top cited than non-novel papers.
- Wang et al. interpret this pattern as delayed direct recognition that can bias evaluation when citation windows are too short.
- Their appendix reports that the long-window high-impact result is robust across fields and novelty-measure variants.
- Their high-JIF interaction analysis shows that prestigious venue placement accelerates citations generally but does not eliminate short-window undercount for highly novel papers.
- The same appendix motivates [forward reuse filter citation leakage](forward_reuse_filter_citation_leakage.md) checks because reuse-conditioned novelty variants can alter short-window estimates.

## Caveats

- Longer windows are not always feasible for recent funding or hiring decisions.
- Delayed citations can reflect slow diffusion, field norms, database coverage, or paper quality, not only novelty.
- A window that works for one field may still undercount novelty in another.
- Early indirect impact may exist even when direct citation counts lag, so direct-citation windows are incomplete validation evidence.

## Links

- [citation window selection](../methods/citation_window_selection.md)
- [dynamic big-hit window model](../methods/dynamic_big_hit_window_model.md)
- [highly novel paper class](../measures/highly_novel_paper_class.md)
- [novelty impact dispersion](../measures/novelty_impact_dispersion.md)
- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [high-JIF novelty delay interaction](high_jif_novelty_delay_interaction.md)
- [forward reuse filter citation leakage](forward_reuse_filter_citation_leakage.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `novelty_short_window_undercount`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Aliases: short citation window novelty bias; delayed novelty recognition audit; early citation novelty undercount; novelty impact-window bias
