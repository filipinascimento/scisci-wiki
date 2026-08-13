# Novelty occurrence skew

## Summary

Novelty occurrence skew is the empirical regularity that most papers contain no first-time journal-pair combinations, while most novel papers contain only a small number of new pairs and a narrow tail contains many.

## Canonical Form

- Unit of analysis: paper, referenced-journal pair, subject category, publication year, or novelty class.
- Typical representation: share of non-novel, moderately novel, and highly novel papers plus the distribution of new-pair counts among novel papers.
- Measurement target: prevalence and concentration of combinatorial novelty.
- Empirical signature: the novelty distribution has a large zero mass, a one-pair-heavy body, and a sparse high-novelty tail.

## Uses in Science of Science

- Calibrates thresholds for [new journal-pair novelty](new_journal_pair_novelty.md), [highly novel paper class](highly_novel_paper_class.md), and [distance-weighted new journal-pair score](distance_weighted_new_journal_pair_score.md).
- Helps interpret [novelty impact dispersion](novelty_impact_dispersion.md) because the treatment is rare and unevenly distributed.
- Warns against treating novelty as a continuous variable with uniform support across fields.
- Supports evaluation designs that distinguish any novelty from high-tail novelty.

## Operationalization

- Count the number of historically new referenced-journal pairs per paper.
- Report the share of papers with zero new pairs, at least one new pair, and high-tail novelty.
- Summarize the conditional distribution among novel papers with medians, shares with one new pair, and shares above larger new-pair counts.
- Stratify by subject category before comparing novelty prevalence across fields.
- Track whether weighting by journal distance changes the identity of high-tail papers.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) reports that 89% of the retained 2001 WoS articles are non-novel, 10% are moderately novel, and 1% are highly novel.
- The paper states that about 11% of articles make at least one new referenced-journal pair.
- Among novel papers, more than half contain only one new pair, while only about 7% contain more than five new pairs.
- Highly novel papers have a median of seven new pairs, separating the high-tail class from ordinary one-pair novelty.
- The skew motivates separate analysis of moderately novel and highly novel papers rather than a single binary novelty flag.

## Caveats

- Novelty prevalence depends on the historical lookback window and database coverage.
- Journal-pair count skew may differ from concept-pair or semantic novelty skew.
- Field assignment and reference-list length can affect the probability of observing new pairs.
- A rare new-pair event can reflect indexing artifacts rather than substantive novelty.

## Links

- [new journal-pair novelty](new_journal_pair_novelty.md)
- [highly novel paper class](highly_novel_paper_class.md)
- [distance-weighted new journal-pair score](distance_weighted_new_journal_pair_score.md)
- [WoS 2001 novelty article cohort](../datasets/wos_2001_novelty_article_cohort.md)
- [novelty impact dispersion](novelty_impact_dispersion.md)
- [novel research low-citation tail](../validations/novel_research_low_citation_tail.md)
- [citation percentile indicators](citation_percentile_indicators.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `novelty_occurrence_skew`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: novelty rarity; novelty prevalence skew; new-pair novelty skew; rare novelty tail
