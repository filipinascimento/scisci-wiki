# Eigenfactor Score

## Summary

Eigenfactor Score is a journal-level recursive citation measure equal to the share of time a random walker spends at a journal while following citation chains through the journal citation network.

## Canonical Form

- Unit of analysis: journal, journal year, citation matrix, database source, or journal collection.
- Typical representation: stationary visit percentage, Eigenfactor score, recursive journal influence, or network-weighted journal value.
- Measurement target: total journal influence in the citation network.
- Empirical signature: large, heavily cited journals can have high scores because a random walker visits them often across all articles in the journal.

## Uses in Science of Science

- Splits total journal influence from the per-article influence measured by [Article Influence Score](article_influence_score.md).
- Provides an additive input for [Eigenfactor bundle influence](eigenfactor_bundle_influence.md) and [Eigenfactor cost-effectiveness](eigenfactor_cost_effectiveness.md).
- Offers a network-based alternative to raw [journal citation frequency](journal_citation_frequency.md) and [journal impact factor](journal_impact_factor.md).
- Supports [responsible metrics](responsible_metrics.md) when used only for journal-level or collection-level questions.

## Operationalization

- Build a [journal citation random walk](../methods/journal_citation_random_walk.md) over the journal citation network.
- Compute the stationary visit share for each journal.
- Report the journal's percentage share of total random-walk time.
- Compare with Article Influence Score when journal size and per-article influence need to be separated.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) defines the Eigenfactor Score as the percentage of time the model researcher visits a journal while following journal citations.
- The paper states that a Nature Eigenfactor score of 2.0 in 2006 means the model researcher would be directed to Nature two percent of the time.
- West et al. list high-Eigenfactor journals such as *Nature*, *Science*, and *PNAS*, illustrating that the score measures total network influence rather than influence per article.
- The full text emphasizes that the score is additive across journals, which distinguishes it from impact factor and Article Influence.
- The same evidence motivates [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md), because total Eigenfactor Score rises with article output as well as citation-network centrality.

## Caveats

- High total influence can reflect journal size as well as prestige.
- Eigenfactor Score is not a paper-level, author-level, or institutional quality measure.
- Scores can change with the citation database, journal coverage, citation window, and self-citation handling.

## Links

- [Eigenfactor metrics](eigenfactor_metrics.md)
- [journal metric scope creep](../mechanisms/journal_metric_scope_creep.md)
- [question-routed journal metric selection](../methods/question_routed_journal_metric_selection.md)
- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [JCR 2006 journal citation network](../datasets/jcr_2006_journal_citation_network.md)
- [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md)
- [Article Influence Score](article_influence_score.md)
- [dual-metric field-annotated rank table](../representations/dual_metric_field_annotated_rank_table.md)
- [preprint citation-exposure metric bias](../validations/preprint_citation_exposure_metric_bias.md)
- [Eigenfactor bundle influence](eigenfactor_bundle_influence.md)
- [Eigenfactor cost-effectiveness](eigenfactor_cost_effectiveness.md)
- [journal impact factor](journal_impact_factor.md)
- [citation PageRank](citation_pagerank.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `eigenfactor_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: Eigenfactor; total journal influence; recursive journal value; stationary journal visit share
