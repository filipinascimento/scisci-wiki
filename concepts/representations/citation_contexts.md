# Citation contexts and functions

## Summary

Citation contexts and functions represent the local text around a citation and the author's reason for citing, turning a plain citation edge into a typed rhetorical or semantic relation.

## Canonical Form

- Unit of analysis: citation marker, citing sentence, citation context window, cited work, or typed citation edge.
- Typical representation: context text, function label, sentiment label, rhetorical role, or citation-edge attribute.
- Mechanism or measurement target: why a work is cited, how it is used, and whether the citation signals background, method use, agreement, contrast, weakness, or critique.
- Empirical signature: heterogeneous citation functions that cannot be recovered from citation counts alone.

## Uses in Science of Science

- Adds semantic information to [citation networks](citation_networks.md) and citation-impact measures.
- Supports literature summarization, more informative citation indexers, and impact indicators that distinguish use, contrast, weakness, and neutral background.
- Connects full-text mining to [hidden citations](../measures/hidden_citations.md), because influence can appear in prose even when reference-list edges are incomplete or ambiguous.
- Supports [rhetorical citation maps](rhetorical_citation_maps.md), where relation-bearing context is displayed as typed paper-to-paper edges.

## Operationalization

- Extract citation markers and their surrounding sentence or paragraph from full text.
- Annotate each citation with a function or rhetorical role; optionally add sentiment or polarity.
- Train supervised classifiers or modern language models to reproduce human annotations.
- Store the citation function as an edge attribute in a citation graph or as a text span linked to a cited work.

## Evidence and Validations

- Verified full-text evidence from Teufel, Siddharthan, and Tidhar (2006) defines citation function as the author's reason for citing a paper, such as acknowledging use of a cited method.
- The paper presents a reliable annotation scheme for citation function and a supervised machine-learning framework using shallow and linguistically inspired features.
- Teufel et al. emphasize applications from improved impact-factor calculations to text summarization and more informative citation indexers.
- The full text reports that citation function is related to sentiment classification and that automatic classification can approximate human annotation, supporting typed citation edges as a machine-readable representation.
- The narrower pages [citation function taxonomies](citation_function_taxonomies.md), [citation context windows](citation_context_windows.md), [citation function classification](../methods/citation_function_classification.md), and [citation-aware search and summarization](../methods/citation_aware_search_summarization.md) split this broad representation into reusable data, label, model, and interface motifs.
- Teufel et al. also motivate split-out motifs for [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md), [citation cue and agent-action features](citation_cue_agent_action_features.md), and [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md).

## Caveats

- Citation function annotation depends on local discourse, field conventions, and enough surrounding text to interpret the citation.
- Positive, negative, and neutral functions are not always cleanly separable.
- Context-based citation measures require full text, so coverage and copyright constraints can bias datasets.

## Links

- [citation networks](citation_networks.md)
- [citation function taxonomies](citation_function_taxonomies.md)
- [citation context windows](citation_context_windows.md)
- [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md)
- [rhetorical citation maps](rhetorical_citation_maps.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [citation sentiment-role projection](../methods/citation_sentiment_role_projection.md)
- [citation cue and agent-action features](citation_cue_agent_action_features.md)
- [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [co citation](co_citation.md)
- [semantic embeddings](semantic_embeddings.md)
- [hidden citations](../measures/hidden_citations.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_contexts`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Aliases: citation function; citation context; rhetorical citation role; typed citation edge
