# Co-citation field text-similarity validation

## Summary

Co-citation field text-similarity validation tests whether a focal article is textually closer to its co-citation field than to articles from the same journal.

## Canonical Form

- Unit of analysis: focal paper, co-citation network, same-journal article set, title/abstract text, or pairwise similarity score.
- Typical representation: TF-IDF cosine similarity distributions comparing co-citation neighbors against journal neighbors.
- Validation target: whether a co-citation-defined field captures topical proximity better than journal publication venue.
- Empirical signature: co-citation-network comparisons show higher text similarity than same-journal comparisons.

## Uses in Science of Science

- Validates [co-citation network field definition](../representations/co_citation_network_field_definition.md).
- Supports [co-citation field normalization](../methods/co_citation_field_normalization.md) and [field citation rate](../measures/field_citation_rate.md).
- Provides a reusable diagnostic for dynamic [reference set construction](../methods/reference_set_construction.md).
- Links text representations to citation-network field definitions.

## Operationalization

- Select focal articles with enough co-citations to define a field.
- Build each focal article's co-citation network and a same-journal comparison set.
- Construct title/abstract term vectors with TF-IDF or a comparable text representation.
- Compute cosine similarity between the focal article and co-citation-neighbor articles, then between the focal article and same-journal articles.
- Compare the similarity distributions by journal type, field, and text preprocessing choices.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) compares 1,397 reference articles with exactly five citations to their co-citation networks and to articles from the same journals.
- The paper reports 249,981 pairwise comparisons within co-citation networks and 28,516,576 pairwise comparisons with same-journal articles.
- Hutchins et al. find that diagnostic words are more likely to be shared between an article and papers in its co-citation network than between the article and papers in the same journal.
- This evidence supports co-citation networks as article-level field definitions rather than relying only on journal categories.

## Caveats

- Title/abstract similarity misses conceptual overlap expressed with different vocabulary.
- The validation sample was restricted to papers with exactly five citations for computational tractability.
- Text similarity validates topical proximity, not necessarily evaluation fairness or metric use.

## Links

- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [field citation rate](../measures/field_citation_rate.md)
- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [reference set construction](../methods/reference_set_construction.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [science maps](../representations/science_maps.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `co_citation_field_text_similarity_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: co-citation text validation; co-citation field cosine validation; journal versus co-citation similarity; RCR field text validation
