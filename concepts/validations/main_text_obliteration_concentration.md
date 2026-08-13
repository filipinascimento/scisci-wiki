# Main-text obliteration concentration

## Summary

Main-text obliteration concentration is the validation claim that most obliteration-by-incorporation signal appears in article prose rather than in reference lists, so hidden-credit studies need full-text evidence.

## Canonical Form

- Unit of analysis: full-text mention, main-text passage, reference-list citation, discovery phrase, or foundational paper.
- Typical representation: evidence-location flag, main-text share, full-text corpus requirement, or hidden-credit detection rule.
- Validation target: ensure hidden-citation methods search where uncited credit actually appears.
- Empirical signature: textual mentions of discoveries or methods appear in prose without explicit references to the foundational publication.

## Uses in Science of Science

- Grounds [hidden citations](../measures/hidden_citations.md) in full-text rather than reference-list-only evidence.
- Links [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md) to observable text-location patterns.
- Justifies [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md) despite access and licensing costs.
- Complements [hidden-citation full-text access barrier](hidden_citation_full_text_access_barrier.md) by explaining why metadata-only approaches are structurally incomplete.

## Operationalization

- Separate main text, citation contexts, abstracts, and reference lists during text extraction.
- Search discovery catchphrases and topic mentions in main text, not only around explicit citation anchors.
- Compare hidden-credit signals found in prose with signals recoverable from references or citation contexts.
- Report extraction coverage and publisher access limitations before interpreting hidden-credit absence.
- Treat main-text evidence as a core validation target for hidden-citation corpora.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) states that roughly 90 percent of obliteration by incorporation happens in the main text of manuscripts.
- The authors therefore apply machine learning to full text to better capture accumulation and distortion of credit in science.
- This supports treating main-text extraction as a precondition for measuring hidden credit rather than a mere enrichment layer.

## Caveats

- The main-text concentration estimate may vary across disciplines, article formats, and publisher extraction quality.
- Full-text access can bias corpora toward open or licensed sources.
- Main-text mentions still require validation to distinguish credit, background usage, and generic terminology.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [hidden-citation full-text access barrier](hidden_citation_full_text_access_barrier.md)
- [citation contexts](../representations/citation_contexts.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; SciSciNet: W4396694003; WoS: unknown]

## Metadata

- Concept ID: `main_text_obliteration_concentration`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: main-text hidden-credit concentration; obliteration main-text evidence; prose hidden-citation concentration; full-text hidden-credit validation
