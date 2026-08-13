# Content and embedding enrichment pathway

## Summary

Scholarly data lakes can be extended by linking papers to abstracts, full text, embeddings, and extracted biomedical or chemical entities.

## Canonical Form

- Unit of analysis: paper, abstract, full text, embedding vector, entity mention, or external content source.
- Typical representation: paper-ID bridge from relational metadata to text, embedding, and entity layers.
- Mechanism, measurement, or validation target: content-aware enrichment of graph-based science-of-science data.
- Empirical signature: bibliographic records gain text and embedding features linked by persistent paper identifiers..

## Uses in Science of Science

- Connects SciSciNet to [semantic embeddings](../representations/semantic_embeddings.md) and [title abstract paper embeddings](../representations/title_abstract_paper_embeddings.md).
- Supports entity-level knowledge-network studies such as [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md).
- Provides a future bridge to [OpenAlex](../datasets/openalex.md) and Semantic Scholar content layers.

## Operationalization

- Link SciSciNet IDs to OpenAlex or Semantic Scholar content layers.
- Attach abstract, full-text, embedding, and entity features.
- Track which enrichment features are proposed extensions rather than released core tables.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) proposes linking to OpenAlex or Semantic Scholar for abstracts, full text, embeddings, and biomedical or chemical entity identification.

## Caveats

- The enrichment pathway is proposed, not a core released SciSciNet table.
- Full-text and embedding layers have access, licensing, and versioning constraints.

## Links

- [Semantic embeddings](../representations/semantic_embeddings.md)
- [Title-abstract paper embeddings](../representations/title_abstract_paper_embeddings.md)
- [Title-abstract/full-text embedding input limit](../validations/title_abstract_full_text_embedding_limit.md)
- [Chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [OpenAlex](../datasets/openalex.md)
- [Semantic Scholar citation-triplet corpus](../datasets/semantic_scholar_citation_triplet_corpus.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `content_embedding_entity_enrichment_pathway`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: SciSciNet text enrichment; embedding extension pathway; abstract full-text enrichment; bio-chemical entity linkage
