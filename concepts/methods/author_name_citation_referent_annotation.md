# Author-name citation-referent annotation

## Summary

Author-name citation-referent annotation treats cited-author names in running text as citation-function annotation units when they refer back to cited works outside formal citation markers.

## Canonical Form

- Unit of analysis: cited author name, formal citation marker, reference-list item, running-text mention, or citation context window.
- Typical representation: author-name mention linked to a cited work and eligible for citation-function labeling.
- Method target: capture relation-bearing prose that refers to prior work through names rather than parenthetical citation markers.
- Empirical signature: an author name outside a formal citation context carries the same discourse role as a citation marker and can anchor use, contrast, weakness, or support evidence.

## Uses in Science of Science

- Extends [citation context windows](../representations/citation_context_windows.md) beyond formal citation markers.
- Improves [citation function classification](citation_function_classification.md) training data by including text spans where the citation referent is expressed through author names.
- Helps [citation-aware search and summarization](citation_aware_search_summarization.md) retrieve relation-bearing sentences that citation-snippet tools miss.
- Connects to [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md), because relation cues may attach to an author-name mention after the formal citation.
- Provides a conservative alternative to broader hidden-citation extraction when the author-name referent can be linked to a reference-list item.

## Operationalization

- Parse the reference list and formal citation markers in full text.
- Extract cited-author names from the reference list, including names hidden by an `et al.` surface form when possible.
- Mark running-text author-name mentions that refer to cited papers even when no date or parenthetical citation appears.
- Link each mention to the nearest or resolved cited work before assigning a citation-function label.
- Record unresolved pronouns, abbreviations, theory names, and approach names as coverage limits rather than forcing unreliable labels.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) defines annotation units as both full citations and author names of cited papers appearing in running text outside formal citation contexts.
- The paper argues that such author names function as important referents comparable in importance to formal citations.
- Teufel et al. note that their citation processor can recognize cited author names after parsing the reference list.
- The authors also identify unresolved pronouns, abbreviations, and approach or theory names as cases where citation function cannot be reliably annotated, creating context-dependency problems.

## Caveats

- Author-name mentions can be ambiguous when several cited works share authors or when one author has multiple cited papers.
- Name-only annotation misses pronouns, abbreviations, method names, and theory names unless additional coreference or entity-linking is added.
- Treating author names as citation referents requires accurate reference-list parsing and author-name normalization.

## Links

- [citation context windows](../representations/citation_context_windows.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [citation function classification](citation_function_classification.md)
- [explicit citation-evidence annotation](explicit_citation_evidence_annotation.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [citation-aware search and summarization](citation_aware_search_summarization.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `author_name_citation_referent_annotation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: cited-author mention annotation; author-name citation context; running-text cited author referent; name-based citation-function unit
