# Article Influence Score

## Summary

Article Influence Score is a per-article journal influence measure that divides a journal's Eigenfactor Score by its article output and normalizes the average article in Journal Citation Reports to 1.

## Canonical Form

- Unit of analysis: journal, article output, citation window, or journal field comparison.
- Typical representation: Article Influence Score, per-article Eigenfactor influence, normalized recursive article influence, or JCR Article Influence.
- Measurement target: average recursive influence per article in a journal.
- Empirical signature: small selective journals can rank higher by Article Influence than by total Eigenfactor Score.

## Uses in Science of Science

- Complements [Eigenfactor Score](eigenfactor_score.md), which measures total journal influence.
- Serves as the Eigenfactor-family counterpart to [journal impact factor](journal_impact_factor.md), but with recursive citation weighting and a longer citation window.
- Supports [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md) as a validation motif for journal rankings.
- Helps separate journal size from per-article influence in evaluation or library-analysis settings.

## Operationalization

- Compute a journal's [Eigenfactor Score](eigenfactor_score.md).
- Divide by the number of articles published by the journal in the relevant output window.
- Normalize so the average article in Journal Citation Reports has Article Influence Score equal to 1.
- Compare review journals with review journals and nonreview journals with nonreview journals when document type matters.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) defines Article Influence Score as a journal's Eigenfactor Score divided by the number of articles in that journal, normalized to an average article score of 1.
- The paper explains that Article Influence is directly comparable to journal impact factor because both are per-article measures.
- West et al. use *PLoS Biology* to illustrate the distinction: it ranks highly by total Eigenfactor despite being small, and ranks even higher by Article Influence because its per-article influence is high.
- The full text warns that review journals can score high because review articles receive many citations, so comparisons should account for review status.
- The same full text motivates [review-journal Article Influence inflation](../validations/review_journal_article_influence_inflation.md), [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md), and [journal-metric article-level misuse](../validations/journal_metric_article_level_misuse.md).

## Caveats

- Article Influence remains a journal-level average and should not be projected onto individual articles.
- It is sensitive to article-count definitions, review-journal composition, field citation timing, and database coverage.
- Per-article recursive influence can still reinforce journal prestige if used without responsible-metrics guardrails.

## Links

- [Eigenfactor metrics](eigenfactor_metrics.md)
- [Eigenfactor Score](eigenfactor_score.md)
- [journal citation random walk](../methods/journal_citation_random_walk.md)
- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)
- [review-journal Article Influence inflation](../validations/review_journal_article_influence_inflation.md)
- [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md)
- [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md)
- [journal-metric article-level misuse](../validations/journal_metric_article_level_misuse.md)
- [journal impact factor](journal_impact_factor.md)
- [citation window selection](../methods/citation_window_selection.md)
- [responsible metrics](responsible_metrics.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `article_influence_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: Article Influence; per-article Eigenfactor; normalized article influence; recursive per-article journal impact
