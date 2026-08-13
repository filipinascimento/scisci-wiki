# Journal-size total-influence effect

## Summary

Journal-size total-influence effect is the pattern that raw or total journal influence metrics tend to be higher for larger journals because they publish more articles and therefore receive more total attention.

## Canonical Form

- Unit of analysis: journal, article count, total influence score, per-article score, or collection bundle.
- Typical representation: raw citation frequency or total influence compared with article-normalized influence.
- Validation target: whether a journal score reflects size, per-article prestige, or both.
- Empirical signature: a journal ranks higher by total Eigenfactor Score than by Article Influence when its total attention is spread over many articles.

## Uses in Science of Science

- Clarifies why [journal citation frequency](../measures/journal_citation_frequency.md) and total influence metrics need article-count context.
- Clarifies the difference between [Eigenfactor Score](../measures/eigenfactor_score.md) and [Article Influence Score](../measures/article_influence_score.md).
- Helps collection managers use [Eigenfactor bundle influence](../measures/eigenfactor_bundle_influence.md) appropriately for total-value questions.
- Prevents misreading total journal influence as average paper quality.
- Supports [journal metric article-level misuse](journal_metric_article_level_misuse.md) and [responsible metrics](../measures/responsible_metrics.md) checks.

## Operationalization

- Report article counts alongside total influence scores.
- Compare raw journal citation frequency, total Eigenfactor Score, and per-article Article Influence Score.
- Interpret high total scores as collection attention unless normalized by output.
- Use total scores for bundle or collection value, and per-article scores for average article influence comparisons.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) states that if every article had equal likelihood of citation, journals publishing more articles should be cited more frequently.
- Garfield reports that citation frequency is a function not only of scientific significance but also of the amount of material a journal publishes, motivating article-normalized impact factors.
- Verified full-text evidence from West et al. (2010) states that larger journals have larger Eigenfactor Scores all else equal because they publish more articles and are expected to be visited more often by the random walker.
- The paper contrasts total journal value with per-article influence and introduces Article Influence to remove the size component.
- West et al. use *PLoS Biology* as an example of a small journal whose total Eigenfactor rank is high and whose Article Influence rank is even higher because its per-article influence is strong.
- The same logic explains why Eigenfactor Score is useful for journal bundles, while Article Influence is the closer comparator to impact factor.

## Caveats

- Size effects are not a flaw when the question is total collection value.
- Article-count definitions can vary by data source and document type.
- Per-article normalization can overemphasize small selective or review-heavy journals.
- Total and per-article influence should not be substituted for article-level quality.

## Links

- [Eigenfactor Score](../measures/eigenfactor_score.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [Eigenfactor bundle influence](../measures/eigenfactor_bundle_influence.md)
- [Eigenfactor cost-effectiveness](../measures/eigenfactor_cost_effectiveness.md)
- [journal metric article-level misuse](journal_metric_article_level_misuse.md)
- [review-journal Article Influence inflation](review_journal_article_influence_inflation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `journal_size_total_influence_effect`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: journal size Eigenfactor effect; total influence size effect; article-count journal influence effect; size-normalization journal metric caveat
