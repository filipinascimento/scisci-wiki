# Highly novel paper class

## Summary

Highly novel paper class identifies papers whose distance-weighted new referenced-journal combinations place them in the top 1 percent of novelty within their subject category.

## Canonical Form

- Unit of analysis: paper, subject-category observation, publication year, reference list, or cited-journal pair set.
- Typical representation: novelty score percentile, `NOV CAT3` indicator, top-1%-novel class, or non-novel/moderately novel/highly novel categorical variable.
- Measurement target: extreme combinatorial newness, not merely any new reference pairing.
- Empirical signature: papers in the class make more and more distant first-time journal-pair combinations than other papers in the same field-year comparison set.

## Uses in Science of Science

- Provides the categorical high-end threshold for [new journal-pair novelty](new_journal_pair_novelty.md).
- Supports tests of [novelty penalty](../mechanisms/novelty_penalty.md), [novelty impact dispersion](novelty_impact_dispersion.md), and [novelty short-window undercount](../validations/novelty_short_window_undercount.md).
- Gives evaluators a field-normalized way to flag exploratory work before using [citation percentile indicators](citation_percentile_indicators.md), [journal impact factor](journal_impact_factor.md), or short citation windows.
- Connects novelty measurement to [responsible metrics](responsible_metrics.md) by making the high-risk group explicit.

## Operationalization

- Compute each paper's distance-weighted count of historically new referenced-journal pairs.
- Assign subject categories and publication-year comparison groups.
- Label papers with zero new combinations as non-novel.
- Label papers with at least one new combination but below the field top 1 percent as moderately novel.
- Label papers in the top 1 percent of the novelty score within subject category as highly novel.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) classifies papers into non-novel, moderately novel, and highly novel categories.
- Their highly novel class is defined as papers with novelty scores among the top 1 percent of the subject category.
- In the 2001 Web of Science article sample, 89 percent of subject-category observations are non-novel, 10 percent are moderately novel, and 1 percent are highly novel.
- Wang et al. report that highly novel papers have a median of 7 new referenced-journal pairs and make more distant combinations than moderately novel papers.
- The class is used in their impact, journal-placement, citation-window, and atypicality-comparison analyses.
- The same class identifies the group with higher long-window big-hit probability, greater lower-tail risk, stronger indirect big-hit stimulation, and delayed recognition even in high-JIF journals.

## Caveats

- The top-1% threshold is a research design choice; other thresholds may be better for ranking, review, or funding contexts.
- Papers assigned to multiple subject categories can appear in multiple comparison groups.
- Top-percentile novelty is sensitive to database coverage, journal normalization, field boundaries, and the historical lookback window.
- Highly novel does not mean high quality; Wang et al. explicitly show higher upside and higher uncertainty.

## Links

- [new journal-pair novelty](new_journal_pair_novelty.md)
- [distance-weighted new journal-pair score](distance_weighted_new_journal_pair_score.md)
- [novelty occurrence skew](novelty_occurrence_skew.md)
- [WoS 2001 novelty article cohort](../datasets/wos_2001_novelty_article_cohort.md)
- [novelty impact dispersion](novelty_impact_dispersion.md)
- [novel research low-citation tail](../validations/novel_research_low_citation_tail.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [novelty indirect big-hit stimulation](../mechanisms/novelty_indirect_big_hit_stimulation.md)
- [journal impact factor novelty bias](../validations/journal_impact_factor_novelty_bias.md)
- [high-JIF novelty delay interaction](../validations/high_jif_novelty_delay_interaction.md)
- [novelty-atypicality distinction](../validations/novelty_atypicality_distinction.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [responsible metrics](responsible_metrics.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `highly_novel_paper_class`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Aliases: top 1 percent novelty class; NOV CAT3; highly novel paper category; field-normalized novelty class
