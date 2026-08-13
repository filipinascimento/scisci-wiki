# Full-text hidden-citation corpora

## Summary

Full-text hidden-citation corpora are document collections that preserve full text, citation contexts, reference links, and phrase occurrences so uncited textual credit can be matched to foundational papers.

## Canonical Form

- Unit of analysis: full-text paper, citation context, n-gram occurrence, cited document, topic, foundational paper, or venue-specific corpus.
- Typical representation: citation-context tuples, phrase-document pairs, reference-list edges, topic labels, and corpus/source provenance.
- Data target: support [hidden citations](../measures/hidden_citations.md) by combining text mentions with explicit citation evidence.
- Empirical signature: the corpus can distinguish papers that mention and cite a topic, mention without citing it, or cite without mentioning it.

## Uses in Science of Science

- Provides the data substrate for [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md), [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md), and [citation diversion hierarchy](../mechanisms/citation_diversion_hierarchy.md).
- Extends [citation context windows](../representations/citation_context_windows.md) from local citation snippets to corpus-scale full-text evidence.
- Makes [full-database bibliometric access](../methods/full_database_bibliometric_access.md) and publisher text access a first-order condition for hidden-credit measurement.
- Links text-mining workflows to [citation-aware search and summarization](../methods/citation_aware_search_summarization.md), [topic models](../methods/topic_models.md), and [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Assemble full text, citation markers, reference lists, citation contexts, and persistent paper identifiers.
- Extract n-grams and citation-context pairs while preserving document, venue, discipline, and snapshot provenance.
- Track whether each follower paper cites the foundational paper, mentions a topic-specific catchphrase, does both, or does neither.
- Report corpus boundaries, full-text source, parser coverage, and missing-text exclusions before interpreting hidden-credit counts.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) trains hidden-citation detection on the unarXive corpus, which merges full-text arXiv papers with Microsoft Academic Graph identifiers and citation contexts.
- Meng et al. report full-text coverage for more than one million unarXive publications, plus additional computer-science, biology, and Nature full-text corpora for cross-field and venue checks.
- The paper states that hidden-citation detection relies on citation contexts and full-text mentions, not only on bibliographic metadata.
- Their data-availability statement identifies unarXive, Nature full text, supplementary textual data, and open code as separable data layers.

## Caveats

- A corpus can overrepresent fields, venues, or periods with accessible full text.
- Citation-context extraction quality affects catchphrase and foundational-paper matching.
- Hidden citations in disciplines without stable full-text access may be undercounted even if their explicit citation metadata are complete.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [citation diversion hierarchy](../mechanisms/citation_diversion_hierarchy.md)
- [citation context windows](../representations/citation_context_windows.md)
- [full-database bibliometric access](../methods/full_database_bibliometric_access.md)
- [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md)
- [topic models](../methods/topic_models.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `full_text_hidden_citation_corpora`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: full-text citation-context corpus; unarXive hidden-citation corpus; hidden-credit text corpus; citation-context full-text data
