# Citation context windows

## Summary

Citation context windows are the local text spans around a citation marker that provide evidence for interpreting the citation's function, polarity, or use.

## Canonical Form

- Unit of analysis: citation marker, sentence, paragraph, author-name mention, cited work, or context span.
- Typical representation: citation sentence, nearby sentence window, XML/HTML text span, or extracted citation snippet linked to a reference.
- Mechanism or measurement target: local discourse evidence around a citation.
- Empirical signature: a citation edge is accompanied by surrounding words that mention use, contrast, weakness, support, or neutral background.

## Uses in Science of Science

- Provides the text layer needed for [citation function taxonomies](citation_function_taxonomies.md) and [citation function classification](../methods/citation_function_classification.md).
- Makes citation networks inspectable by attaching local prose evidence to edges.
- Supports [hidden citations](../measures/hidden_citations.md), citation-aware summarization, and quality checks on bibliometric indicators.
- Helps distinguish formal reference-list citations from author-name mentions and other prose references.
- Author-name mentions can be explicitly handled through [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md).
- Supplies the local text layer for [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md) when hidden credit is inferred from topic-specific mentions.
- Scales into [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md) when citation contexts are extracted across many documents.
- Exposes [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md) when function cues fall outside the citation-bearing sentence.

## Operationalization

- Parse reference lists and citation markers from full text.
- Extract citation-bearing sentences, nearby sentences, paragraphs, and author-name mentions outside formal citation markers.
- Preserve citation-to-reference resolution, document section, sentence position, and extracted evidence text.
- Avoid overinterpreting contexts where the cited work is referenced only indirectly or where local evidence is insufficient.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) uses full citations recognized by an automatic citation processor and author names of cited papers in running text as annotation units.
- The paper reports that the citation parser marks up citations and author names in XML-formatted computational-linguistics papers.
- Teufel et al. argue that author-name mentions outside formal citation contexts can function as important referents comparable in importance to formal citations.
- The paper also warns that citation function may be unannotatable when local text lacks enough evidence or when important references appear as pronouns, abbreviations, or theory names.
- Verified full-text evidence from Meng et al. (2024) uses citation contexts and full-text mentions as the corpus for identifying topic catchphrases, foundational papers, and hidden citations.
- Meng et al. also make full-text coverage a validation boundary through the [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md).

## Caveats

- Context-window size changes the interpretation of a citation.
- Full-text access and citation parsing quality constrain coverage.
- Some references require broader discourse knowledge than a sentence or paragraph window provides.

## Links

- [citation contexts and functions](citation_contexts.md)
- [citation function taxonomies](citation_function_taxonomies.md)
- [citation function classification](../methods/citation_function_classification.md)
- [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [citation-function feature vectors](citation_function_feature_vectors.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [citation networks](citation_networks.md)
- [hidden citations](../measures/hidden_citations.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [database and method textual-acknowledgment gap](../validations/database_method_textual_acknowledgment_gap.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [semantic embeddings](semantic_embeddings.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]
- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `citation_context_windows`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Aliases: citation sentence windows; citation snippets; local citation context; citation evidence spans
