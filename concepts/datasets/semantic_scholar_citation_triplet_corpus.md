# Semantic Scholar citation-triplet corpus

## Summary

The Semantic Scholar citation-triplet corpus is a training data pattern that converts a large scholarly citation graph into query-positive-negative paper triples for document-level representation learning.

## Canonical Form

- Unit of analysis: query paper, outgoing citation, candidate negative paper, citation triplet, or snapshot of a literature graph.
- Typical representation: table of title/abstract records linked to sampled positives and negatives from citation structure.
- Mechanism or measurement target: citation-derived relatedness labels for training paper embeddings.
- Empirical signature: a document encoder trained on the triples places cited papers closer than sampled negative papers.

## Uses in Science of Science

- Supplies training data for [citation-triplet supervision](../methods/citation_triplet_supervision.md) and [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md).
- Demonstrates how a large bibliographic graph can become supervised data without manual labels.
- Provides a template for building Dimensions/OpenAlex-derived triplet corpora with current snapshots and explicit worker-safe chunking.
- Links citation-network data infrastructure to downstream science maps, recommendation systems, and concept discovery.

## Operationalization

- Start from a literature graph with paper identifiers, titles, abstracts, and outgoing citation edges.
- Split query papers into train, validation, and test-compatible pools before sampling triples.
- For each query, sample positive papers from outgoing citations.
- Sample negative papers from random corpus draws and structurally nearby hard negatives.
- Record the source snapshot, identifier system, field coverage, and leakage-prevention rules.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) trains SPECTER on a Semantic Scholar subset with about 146,000 query papers and a separate validation set.
- The paper constructs up to five triples per query paper, pairing direct citations as positives with random and hard negative papers.
- Cohan et al. report roughly 684,000 training triples and 145,000 validation triples, then validate the learned embeddings with the SCIDOCS task suite.
- This corpus pattern shows how citation graphs can be operationalized as weak supervision for scalable paper representations.

## Caveats

- Semantic Scholar coverage, citation parsing, and abstract availability affect which papers can become training examples.
- Citation links encode attention and social structure, not only semantic relatedness.
- Training corpora should be versioned because citation graphs, abstracts, and deduplication rules change over time.

## Links

- [citation-triplet supervision](../methods/citation_triplet_supervision.md)
- [hard-negative citation sampling](../methods/hard_negative_citation_sampling.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [citation networks](../representations/citation_networks.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [OpenAlex](openalex.md)
- [Dimensions](dimensions.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `semantic_scholar_citation_triplet_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- Aliases: SPECTER training triples; citation triplet corpus; Semantic Scholar citation supervision; paper embedding training triples
