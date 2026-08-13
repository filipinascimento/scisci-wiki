# Title-word age recency control

## Summary

Title-word age recency control measures whether citing articles are about newer or older concepts, then controls for that topical recency when estimating citation-age or archive-access effects.

## Canonical Form

- Unit of analysis: citing paper, title word, journal-year, field-year, or panel model.
- Typical representation: weighted average age of title terms in the citing articles.
- Method target: separate changes in reference age caused by changing topics from changes caused by discovery infrastructure or search behavior.
- Empirical signature: archive-access effects remain after controlling for whether paper titles use newer or older terminology.

## Uses in Science of Science

- Strengthens [online availability panel identification](../validations/online_availability_panel_identification.md) when outcomes include [reference-age search depth](../measures/reference_age_search_depth.md).
- Provides a text-based confounding control for studies of citation aging, disruption, novelty, and knowledge-use narrowing.
- Complements [title word diversity](../measures/title_word_diversity.md) and [title combinatorial novelty](../measures/title_combinatorial_novelty.md) by using title language as a temporal covariate rather than an outcome.
- Can be generalized to abstract terms, keywords, MeSH terms, embeddings, or field-specific concept vocabularies.

## Operationalization

- For each title term, compute its age in the relevant publication window.
- Weight terms by a term-frequency and inverse-document-frequency style score so distinctive words carry more information than generic words.
- Average weighted term ages across citing articles in the focal source-year or field-year.
- Include the resulting topical-age measure in models of citation age, breadth, concentration, or disruption.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) includes average age of title words to account for the possibility that recent research concerns newer concepts or recently discovered phenomena.
- Evans weights distinguishing title terms more heavily and assigns low weight to broad or universal terms.
- The paper reports that title-age coefficients are positive and significant, meaning articles with older title terms reference earlier work.
- Evans still finds online-availability effects on reference age after including this topical-recency control.

## Caveats

- Title words are a partial proxy for topic age and may miss conceptual continuity under new labels.
- The method depends on the chosen publication window, tokenization, and term weighting.
- Field-specific vocabularies, multilingual titles, and acronym changes can distort term-age estimates.

## Links

- [online availability panel identification](../validations/online_availability_panel_identification.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [title word diversity](../measures/title_word_diversity.md)
- [title combinatorial novelty](../measures/title_combinatorial_novelty.md)
- [topic prevalence dynamics](topic_prevalence_dynamics.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `title_word_age_recency_control`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: title age control; topical recency control; weighted title-word age; concept-age covariate
