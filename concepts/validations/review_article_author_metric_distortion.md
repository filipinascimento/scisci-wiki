# Review-article author-metric distortion

## Summary

Review articles can inflate author-level citation totals relative to original-research influence, so author metrics should audit document-type composition rather than treating all cited publications as equivalent.

## Canonical Form

- Unit of analysis: author citation portfolio, h-core, or evaluation candidate.
- Typical representation: total citations and h-index with review articles included and excluded.
- Validation target: document-type sensitivity of author impact metrics.
- Empirical signature: review-heavy portfolios show a larger gap between total citation counts and original-research contribution indicators.

## Uses in Science of Science

- Links the [h-index](../measures/h_index.md) to document-type filtering and portfolio assessment.
- Useful when comparing scientists whose citation profiles mix articles, reviews, methods papers, and other highly citable genres.
- Separates citation-volume inflation from genuine original contribution and from the broader [h-index tail insensitivity](h_index_tail_insensitivity.md).

## Operationalization

- Classify each author publication by document type, preferably from the source index and publisher metadata.
- Compute total citations, h-index, h-core composition, and total-citation-to-h-squared ratios before and after excluding or flagging reviews.
- Report whether conclusions about rank, threshold passage, or evaluation category change under the filtered profile.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) motivates the h-index partly as a response to total citation counts that can give excessive weight to highly cited review articles.
- The same paper still treats h as an author-level scalar, so review composition remains a useful validation layer rather than a solved problem.

## Caveats

- Reviews can be original syntheses and important scholarly contributions; the audit should expose sensitivity rather than automatically discard them.
- Document-type labels differ across databases and may miss hybrid research-review articles.

## Links

- [h-index](../measures/h_index.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [Document-type citation filtering](../methods/document_type_citation_filtering.md)
- [Review-journal Article Influence inflation](review_journal_article_influence_inflation.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `review_article_author_metric_distortion`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: review citation inflation audit; author metric review-article sensitivity; review-heavy citation portfolio
