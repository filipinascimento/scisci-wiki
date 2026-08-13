# Nonlocal citation-context dependency

## Summary

Nonlocal citation-context dependency is the discourse pattern in which the words that explain a citation's function appear outside the sentence containing the citation marker.

## Canonical Form

- Unit of analysis: citation marker, cited author mention, paragraph, discourse segment, citation context window, or citation-function label.
- Typical representation: citation context span larger than the citation sentence, often bounded by paragraph or discourse segment.
- Mechanism: authors introduce a citation in one sentence and express contrast, use, weakness, or continuation in nearby sentences.
- Empirical signature: sentence-centered citation snippets omit the relation-bearing evidence needed to classify the citation.

## Uses in Science of Science

- Explains why [citation context windows](../representations/citation_context_windows.md) need flexible span definitions.
- Defines a failure mode for [citation-aware search and summarization](../methods/citation_aware_search_summarization.md).
- Affects [citation function classification](../methods/citation_function_classification.md) by requiring paragraph or discourse features.
- Connects full-text citation analysis to [hidden citations](../measures/hidden_citations.md), where influence may appear outside formal reference markers.

## Operationalization

- Compare sentence-only citation snippets with paragraph-level or discourse-level context spans.
- Measure how often relation cues occur before or after the formal citation marker.
- Link evaluative or contrastive sentences back to the nearest citation or author-name mention.
- Use [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md) when the relation-bearing sentence refers to a cited work by author name rather than by formal citation marker.
- Store context-window width, paragraph boundary, and evidence span separately from the citation marker location.
- Evaluate classification and retrieval performance under sentence-only versus expanded-context settings.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) reports that many contrast and continuation statements in their annotated corpus did not contain the corresponding citation.
- The paper notes that the citation can appear in preceding sentences while the sentence expressing the relation falls outside a simple citation snippet.
- Teufel et al. therefore argue for a discourse-aware citation indexer that associates relation-bearing sentences with the relevant citation.
- The annotation rules generally constrain context to paragraph boundaries, with rare paper-wide information needed for motivation cases.

## Caveats

- Larger windows improve recall but can attach the wrong discourse cue to a citation.
- The appropriate context boundary varies by genre, field, and citation style.
- Nonlocal evidence is harder for annotators and models, increasing disagreement and uncertainty.

## Links

- [citation context windows](../representations/citation_context_windows.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [rhetorical citation maps](../representations/rhetorical_citation_maps.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [author-name citation-referent annotation](../methods/author_name_citation_referent_annotation.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [hidden citations](../measures/hidden_citations.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `nonlocal_citation_context_dependency`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation cue nonlocality; discourse-aware citation context; paragraph-level citation evidence; citation snippet failure
