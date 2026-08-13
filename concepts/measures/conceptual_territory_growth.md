# Conceptual territory growth

## Summary

Conceptual territory growth measures how the cognitive space of science expands, often by counting distinct concepts, phrases, topics, or idea units rather than only publication volume.

## Canonical Form

- Unit of analysis: phrase, topic, concept, idea unit, field, corpus, year, or publication sample.
- Typical representation: cumulative concept count, new phrase count, title/abstract phrase diversity, topic-space expansion, or concept-growth curve.
- Mechanism or measurement target: growth of scientific ideas relative to growth of papers, authors, fields, and databases.
- Empirical signature: idea-space growth can diverge from publication growth, revealing whether output expansion is matched by cognitive expansion.

## Uses in Science of Science

- Separates [publication-count distribution](papers_per_author_distribution.md) and literature growth from expansion of ideas.
- Provides a text-based complement to [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md), [field emergence](../mechanisms/field_emergence.md), [research fronts](../mechanisms/research_fronts.md), and [science maps](../representations/science_maps.md).
- Helps interpret [burden of knowledge](../mechanisms/burden_of_knowledge.md), [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md), and domain maturity.
- Contrasts idea-space expansion with [publication-author scaling exponent](publication_author_scaling_exponent.md), which measures paper output per entering author rather than concept growth.
- Supports portfolio questions about whether science is producing more papers, more concepts, or denser recombinations of existing concepts.

## Operationalization

- Choose a corpus, time window, field boundary, and document fields such as titles, abstracts, keywords, or full text.
- Extract phrases, concepts, topic labels, or embedding clusters with stable preprocessing.
- Count new and cumulative concept units over time, optionally normalized by a fixed number of papers.
- Compare conceptual growth with publication growth, citation-network growth, field-size growth, and vocabulary-drift sensitivity checks.

## Evidence and Validations

- Verified full-text evidence from Fortunato et al. (2018) distinguishes growth in the volume of scientific literature from growth in scientific ideas.
- The review reports that scientific article production has continued to grow exponentially, with an average doubling period of about 15 years.
- Fortunato et al. cite large-scale text analysis using title and abstract phrases to measure cognitive extent and report that conceptual territory expands linearly while publication counts grow exponentially.
- The same passage cautions against equating publication growth with idea growth, making conceptual-territory growth a distinct measure rather than a synonym for output volume.

## Caveats

- Phrase counts depend on title/abstract conventions, language, indexing coverage, corpus boundaries, and preprocessing choices.
- Conceptual novelty is not identical to scientific value or causal discovery.
- Linear concept growth can coexist with rapidly growing recombination, specialization, or hidden full-text concept use.

## Links

- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [topic models](../methods/topic_models.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [field emergence](../mechanisms/field_emergence.md)
- [publication-author scaling exponent](publication_author_scaling_exponent.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science maps](../representations/science_maps.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [reference-age search depth](reference_age_search_depth.md)
- [science of science framework](../methods/science_of_science_framework.md)

## References

- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `conceptual_territory_growth`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Fortunato et al. (2018) (2018)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.aao0185`
- OpenAlex ID: `W2793071066`
- Dimensions ID: `pub.1101303008`
- SciSciNet ID: `W2793071066`
- Aliases: cognitive extent of science; idea-space growth; concept-space expansion; publication growth versus idea growth
