# Novelty impact dispersion

## Summary

Novelty impact dispersion measures the wider outcome distribution of novel research, where novel work has both higher chances of exceptional success and higher chances of weak citation performance.

## Canonical Form

- Unit of analysis: paper, novelty class, citation distribution, subject category, citation window, or follow-on citation outcome.
- Typical representation: citation variance, generalized negative-binomial dispersion parameter, low-citation tail probability, top-1%-hit odds, or indirect big-hit probability.
- Measurement target: high-risk/high-gain impact profile of novel research.
- Empirical signature: highly novel papers have greater citation spread than comparable non-novel papers, including both more big hits and more low-cited papers.

## Uses in Science of Science

- Operationalizes the risk side of [novelty penalty](../mechanisms/novelty_penalty.md) without reducing novelty to average citation impact.
- Explains why [highly novel paper class](highly_novel_paper_class.md) should be evaluated with distributional and long-window indicators.
- Links [new journal-pair novelty](new_journal_pair_novelty.md) to [citation percentile indicators](citation_percentile_indicators.md), [citation distribution scaling](citation_distribution_scaling.md), and [responsible metrics](responsible_metrics.md).
- Provides a portfolio-level rationale for funding high-variance exploratory research under [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md).
- Connects to [self-benchmark hit/flop rates](self_benchmark_hit_flop_rates.md), which measures both upside and downside tails around a funding event.
- Contrasts with [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md), where reviewers may fail to perceive high-variance potential before outcomes are observed.

## Operationalization

- Classify papers by novelty class, field, and publication year.
- Estimate citation means and dispersion with controls for field, collaboration, author count, references, journal indicators, and citation window.
- Track both low-tail outcomes and high-tail outcomes such as top-1% cited status.
- Add indirect impact outcomes, such as whether later big-hit papers cite the focal paper.
- Report variance and tail effects separately from average citation effects.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) uses generalized negative-binomial models to estimate both citation mean and citation dispersion.
- The paper reports that highly novel papers receive more citations over a 13-year window but also have higher variance in citation performance.
- Wang et al. show that highly novel papers are more likely to be among the least 10 percent cited papers in their field.
- The same analysis reports that highly novel papers have much higher chances of becoming top-1% cited big hits over a long citation window.
- Wang et al. also find indirect upside: papers citing novel work are themselves more likely to become highly cited.
- This combination of lower-tail risk, top-tail upside, and downstream big-hit stimulation makes the result a distributional validation rather than a simple average-citation premium.

## Caveats

- A higher-variance impact profile can be mistaken for low quality if only averages or short windows are used.
- Citation dispersion depends on field, citation window, document type, and database coverage.
- Low-cited novel papers may include measurement noise, miscoded novelty, premature work, or genuinely unsuccessful exploration.
- Indirect impact requires downstream citation data and can be confounded by field size and citation practices.

## Links

- [highly novel paper class](highly_novel_paper_class.md)
- [new journal-pair novelty](new_journal_pair_novelty.md)
- [novelty occurrence skew](novelty_occurrence_skew.md)
- [distance-weighted new journal-pair score](distance_weighted_new_journal_pair_score.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [novel research low-citation tail](../validations/novel_research_low_citation_tail.md)
- [novelty indirect big-hit stimulation](../mechanisms/novelty_indirect_big_hit_stimulation.md)
- [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [self-benchmark hit/flop rates](self_benchmark_hit_flop_rates.md)
- [responsible metrics](responsible_metrics.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `novelty_impact_dispersion`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Aliases: high-risk high-gain novelty; novelty citation variance; novelty impact variance; risky novelty outcome distribution
