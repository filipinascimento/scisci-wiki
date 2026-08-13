# Article-level Eigenfactor field random walks

## Summary

Article-level Eigenfactor field random walks are citation-network random-walk processes used as the flow model for identifying article-level field structure.

## Canonical Form

- Unit of analysis: article, citation edge, random walker, field cluster, or hierarchy node.
- Typical representation: article-level transition matrix, random-walk flow, compressed field hierarchy, and cluster labels.
- Representation target: model citation trails as navigation paths so field boundaries can be inferred from where random walks remain localized.
- Empirical signature: clusters correspond to regions of the article citation network that retain random-walk flow.

## Uses in Science of Science

- Provides the random-walk layer for [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md).
- Connects article-level citation networks to [field classifications](../measures/field_classifications.md) and [citation networks](citation_networks.md).
- Supplies an article-level analog to journal-level Eigenfactor logic when classifying papers rather than ranking journals.
- Helps build field-stratified denominators for [self-citation rates](../measures/self_citation_rates.md) and [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md).

## Operationalization

- Construct a directed citation network among articles.
- Define a random-walk process over article nodes, following citation links with the chosen damping or navigation rule.
- Feed the resulting flow model into a map-equation or related community-detection algorithm.
- Preserve field labels and algorithm settings with the citation-network snapshot.
- Compare results with journal categories, expert labels, or alternative citation/text classifications when possible.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) states that their JSTOR field classification used article-level Eigenfactor as the random-walk process compressed by the hierarchical map equation.
- The paper describes this as a modified PageRank approach customized for article-level citation networks.
- King et al. state that the process works well for ranking nodes and revealing hierarchical structure.
- The resulting hierarchy is used to analyze self-citation rates by major fields and subfields.

## Caveats

- Random-walk field structure is sensitive to citation-network coverage, edge direction, and treatment of dangling or weakly connected papers.
- A good ranking process is not automatically a perfect field classifier.
- Article-level Eigenfactor classifications may differ from journal-level, text-based, or database-provided classifications.

## Links

- [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md)
- [field classifications](../measures/field_classifications.md)
- [citation networks](citation_networks.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [publication-level field classification](../methods/publication_level_field_classification.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `article_level_eigenfactor_field_random_walks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: article-level Eigenfactor random walk; article citation random walk; Eigenfactor field flow; paper-level random-walk field model
