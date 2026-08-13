# Rhetorical citation maps

## Summary

Rhetorical citation maps represent papers as citation neighborhoods where edges are typed by the relationship expressed in full text, such as contrast, continuation, use, support, or weakness.

## Canonical Form

- Unit of analysis: focal paper, cited paper, citing paper, citation context, typed citation edge, or representative context sentence.
- Typical representation: relation-aware paper map with edge colors, citation-function labels, and snippets explaining each relation.
- Measurement target: how papers are intellectually related, not only whether a citation exists.
- Empirical signature: the same citation neighborhood separates rival, contrastive, continuative, methodological, and neutral links.

## Uses in Science of Science

- Adds typed edge semantics to [citation networks](citation_networks.md).
- Turns [citation contexts and functions](citation_contexts.md) into inspectable literature-navigation objects.
- Gives [citation-aware search and summarization](../methods/citation_aware_search_summarization.md) an interface-level representation.
- Helps distinguish relation structure from raw [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Build a citation neighborhood around a target paper using references and citing papers.
- Extract citation context windows and classify each edge with a citation-function taxonomy.
- Display contrastive, continuative, usage, support, and neutral links with representative context sentences.
- Preserve uncertainty and provenance for automatically classified labels.
- Evaluate whether researchers can answer relation-search tasks more accurately than with ordinary citation lists.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) introduces a hypothetical rhetorical citation map around a target paper.
- The paper contrasts ordinary citation snippets with a map that shows rival, contrastive, and continuative links plus characteristic textual sentences for each citation.
- Teufel et al. argue that relation-aware maps satisfy search needs that author abstracts and raw citation counts cannot answer.
- The full text notes that relevant relation statements can occur outside the citation-bearing sentence, requiring discourse-aware linkage between context and citation.

## Caveats

- Rhetorical maps depend on citation parsing, citation resolution, and citation-function classification accuracy.
- A visual edge label can overstate certainty if the underlying context is ambiguous or automatically inferred.
- Relation maps built from full text can inherit field, publisher, and access biases.

## Links

- [citation networks](citation_networks.md)
- [citation contexts and functions](citation_contexts.md)
- [citation context windows](citation_context_windows.md)
- [citation function taxonomies](citation_function_taxonomies.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `rhetorical_citation_maps`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: relation-aware citation map; rhetorical citation graph; contrast-continuation citation map; typed citation neighborhood
