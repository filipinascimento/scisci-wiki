# Citation-aware search and summarization

## Summary

Citation-aware search and summarization use citation contexts and citation functions to retrieve, summarize, or explain relationships between papers.

## Canonical Form

- Unit of analysis: query paper, cited paper, citing paper, citation context, citation function, search result, or summary sentence.
- Typical representation: citation map, relation-aware search interface, context snippet, citation-summary cluster, or typed citation neighborhood.
- Mechanism or measurement target: relation-sensitive literature navigation rather than citation-count ranking alone.
- Empirical signature: search results expose whether papers use, extend, contrast, support, or criticize each other.

## Uses in Science of Science

- Turns [citation contexts and functions](../representations/citation_contexts.md) into an interactive discovery and review tool.
- Supports more informative citation indexes than raw backward/forward citation lists.
- Helps users inspect why a paper is cited before treating the citation as impact, support, or use.
- Provides a suggested-experiment motif for testing whether relation-aware retrieval improves literature review quality.
- Uses [rhetorical citation maps](../representations/rhetorical_citation_maps.md) as a concrete interface for typed paper-to-paper relationships.
- Depends on full-text recovery routes such as the [Dimensions full-text delivery layer](dimensions_full_text_delivery_layer.md) when citation contexts are mined from platform-linked papers.

## Operationalization

- Extract citation context windows and classify citation functions.
- Build paper neighborhoods around cited and citing relations.
- Display representative context sentences and typed links such as use, contrast, continuation, weakness, or support.
- Evaluate retrieval and summarization outputs against expert judgments, review tasks, or known paper relationships.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) argues that ordinary citation indexes such as ISI, Google Scholar, and CiteSeer do not satisfy all search needs because they do not expose relations between articles.
- The paper describes researchers wanting to know whether one paper criticizes another, is based on it, or uses its methodology.
- Teufel et al. propose rhetorical citation maps that display contrastive and continuative links plus representative textual sentences about each citation.
- The same full text connects citation-function classification to text summarization and more informative citation indexers.

## Caveats

- The method depends on accurate citation parsing, citation resolution, and citation-function classification.
- Relation-aware snippets can mislead when context windows are too narrow.
- Search interfaces should separate inferred function labels from verified human annotations.

## Links

- [citation contexts and functions](../representations/citation_contexts.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation function taxonomies](../representations/citation_function_taxonomies.md)
- [rhetorical citation maps](../representations/rhetorical_citation_maps.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [citation sentiment-role projection](citation_sentiment_role_projection.md)
- [citation function classification](citation_function_classification.md)
- [citation networks](../representations/citation_networks.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [Dimensions full-text delivery layer](dimensions_full_text_delivery_layer.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_aware_search_summarization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Aliases: rhetorical citation maps; citation-aware retrieval; citation-context summarization; relation-aware literature search
