# Citation processing IR test collection

## Summary

Citation processing IR test collection validates citation-aware NLP through real information-retrieval tasks with researcher queries and relevance judgments.

## Canonical Form

- Unit of analysis: researcher query, relevant document, citation-processed document, retrieval run, or relevance judgment.
- Typical representation: IR benchmark collection linking queries to relevant papers.
- Validation target: test whether citation-function processing improves downstream scholarly retrieval, not only intrinsic classification scores.
- Empirical signature: citation-aware retrieval is evaluated on user-like queries and relevance-labeled documents.

## Uses in Science of Science

- Extends [citation-aware search and summarization](../methods/citation_aware_search_summarization.md) into a downstream evaluation design.
- Connects [citation function classification](../methods/citation_function_classification.md) to search, review, and discovery systems.
- Complements [rhetorical citation maps](../representations/rhetorical_citation_maps.md) by testing whether rhetorical labels improve retrieval utility.

## Operationalization

- Collect researcher queries and documents judged relevant to those queries.
- Compare retrieval systems with and without citation-context, citation-function, or rhetorical-citation features.
- Use ranking metrics appropriate for IR, and report query-level variance.
- Keep intrinsic classifier evaluation separate from downstream retrieval evaluation.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) states that the authors were creating a large-scale real-world information-retrieval test collection.
- The proposed collection consists of researchers' queries and relevant documents.
- The paper frames this as a test of whether citation processing can increase performance in an information-retrieval task.

## Caveats

- IR gains can depend strongly on query type, field, and baseline search system.
- Relevance judgments may favor topical similarity over methodological, critical, or use-based citation roles.
- A citation-function classifier can perform well intrinsically but fail to improve retrieval.

## Links

- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [citation function classification](../methods/citation_function_classification.md)
- [rhetorical citation maps](../representations/rhetorical_citation_maps.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [knowledge network search efficiency](../measures/knowledge_network_search_efficiency.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_processing_ir_test_collection`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation-aware IR benchmark; citation-processing retrieval test; researcher-query citation benchmark; citation NLP downstream evaluation
