# New journal-pair novelty

## Summary

New journal-pair novelty measures how much a paper combines referenced journals that have not previously appeared together in prior publications.

## Canonical Form

- Unit of analysis: paper, reference list, cited-journal pair, subject category, or publication year.
- Typical representation: count of new referenced-journal pairs, distance-weighted new-pair score, or categorical non-novel/moderately novel/highly novel label.
- Measurement target: first-time recombination of prior knowledge domains.
- Empirical signature: a focal paper contains cited-journal pairs absent from the historical publication record before its publication year.

## Uses in Science of Science

- Gives a novelty measure that is related to but distinct from [tail novelty](tail_novelty.md): it asks whether a pair is historically new, not only statistically rare.
- Supports studies of [novelty penalty](../mechanisms/novelty_penalty.md), delayed recognition, and [citation window selection](../methods/citation_window_selection.md).
- Splits into a thresholded [highly novel paper class](highly_novel_paper_class.md) and downstream validation pages for [novelty impact dispersion](novelty_impact_dispersion.md), [novelty short-window undercount](../validations/novelty_short_window_undercount.md), and [novelty-atypicality distinction](../validations/novelty_atypicality_distinction.md).
- Links [field classifications](field_classifications.md), [reference set construction](../methods/reference_set_construction.md), and [interdisciplinarity dimensions](interdisciplinarity_dimensions.md).
- Provides a compact measure for evaluating funding, peer review, and policy incentives around exploratory work.
- Residual validation pages now separate [historical newness lookback window](../validations/historical_newness_lookback_window.md), [novelty-measure eligibility denominator](../validations/novelty_measure_eligibility_denominator.md), and [journal-pair entity proxy boundary](../validations/journal_pair_entity_proxy_boundary.md).

## Operationalization

- Build historical cited-journal-pair records by publication year.
- For each focal paper, identify referenced-journal pairs that have never appeared together in earlier publications.
- Weight new pairs by journal distance when the research question distinguishes close recombination from distant recombination.
- Normalize or categorize by subject category and publication year; Wang et al. distinguish non-novel, moderately novel, and top-1%-novel papers.
- Use long citation windows or indirect-impact measures when evaluating outcomes.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) defines paper novelty as the number of new referenced-journal pairs, weighted by the similarity or distance between newly paired journals.
- The paper reports that novelty is rare in the 2001 Web of Science article cohort: only 11% of papers contain at least one new referenced-journal combination.
- Wang et al. find that new-pair novelty is highly skewed; more than half of novel papers contain only one new pair, while a small group produces many or more distant combinations.
- The full text validates the measure against long-run impact: highly novel papers have higher odds of becoming top-1% highly cited over a 13-year window, but they also show higher variance and delayed direct recognition.
- Appendix robustness checks show that the novelty-impact relationship is not driven only by low-cited journals, one-off new pairs, or star and multidisciplinary journals.
- The same paper's residual evidence highlights that a finite lookback window, eligibility denominator, and journal-level proxy all shape what can be called historically novel.

## Caveats

- The measure depends on historical database coverage and journal-title normalization.
- New journal pairs can be administratively new because of journal splits, mergers, or indexing artifacts.
- Journal pairs are coarse proxies for concepts, methods, datasets, or theories; semantic novelty may diverge from journal-pair novelty.

## Links

- [novelty penalty](../mechanisms/novelty_penalty.md)
- [WoS 2001 novelty article cohort](../datasets/wos_2001_novelty_article_cohort.md)
- [highly novel paper class](highly_novel_paper_class.md)
- [novelty occurrence skew](novelty_occurrence_skew.md)
- [distance-weighted new journal-pair score](distance_weighted_new_journal_pair_score.md)
- [novelty impact dispersion](novelty_impact_dispersion.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [novelty indirect big-hit stimulation](../mechanisms/novelty_indirect_big_hit_stimulation.md)
- [novelty-atypicality distinction](../validations/novelty_atypicality_distinction.md)
- [new journal-pair novelty filter robustness](../validations/new_journal_pair_novelty_filter_robustness.md)
- [historical newness lookback window](../validations/historical_newness_lookback_window.md)
- [novelty-measure eligibility denominator](../validations/novelty_measure_eligibility_denominator.md)
- [journal-pair entity proxy boundary](../validations/journal_pair_entity_proxy_boundary.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [tail novelty](tail_novelty.md)
- [commonness-based tail novelty](commonness_based_tail_novelty.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [responsible metrics](responsible_metrics.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `new_journal_pair_novelty`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: new referenced-journal combinations; combinatorial novelty score; first-time journal-pair novelty; novelty indicator
