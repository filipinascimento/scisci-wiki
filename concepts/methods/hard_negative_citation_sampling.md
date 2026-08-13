# Hard-negative citation sampling

## Summary

Hard-negative citation sampling chooses related but uncited papers as negative examples so citation-supervised embedding models learn finer document distinctions than they would from random negatives alone.

## Canonical Form

- Unit of analysis: query paper, cited positive paper, negative candidate, citation path, or training triplet.
- Typical representation: negative samples drawn from a citation neighborhood, often citations of cited papers that the query paper does not cite.
- Mechanism or measurement target: difficult contrastive examples that force the model to distinguish close scholarly neighbors.
- Empirical signature: removing hard negatives weakens downstream embedding performance relative to mixed easy and hard negative training.

## Uses in Science of Science

- Improves [citation-triplet supervision](citation_triplet_supervision.md) by avoiding overly easy random distractors.
- Converts local [citation networks](../representations/citation_networks.md) into a training curriculum for [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md).
- Useful for literature recommender systems, reviewer matching, paper clustering, and concept extraction where near-neighbor errors matter.
- Provides a reusable sampling motif for other graph-supervised embeddings, including co-citation, bibliographic coupling, and multiplex scholarly graphs.

## Operationalization

- For each query paper, sample positives from papers cited by the query.
- Sample easy negatives randomly from the eligible corpus.
- Sample hard negatives from structurally nearby papers that are not directly cited by the query, such as papers cited by the query's cited papers.
- Track exclusion rules, snapshot date, and citation direction so train, validation, and test data do not leak.
- Compare performance with and without hard negatives across the intended downstream tasks.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) defines hard negatives as papers not cited by the query but cited by a paper that the query cites.
- Their SPECTER training process uses a mix of hard negatives and random negatives for each query paper.
- The ablation in the same paper reports lower average SCIDOCS performance when hard negatives are removed, showing that the sampling rule is part of the method rather than a cosmetic implementation detail.
- The paper also notes that random negatives can be too easy, which motivates using local citation structure to make the training signal more informative.

## Caveats

- Citation-neighborhood hard negatives can still be genuinely relevant papers, so the label is a pragmatic training contrast rather than a proof of unrelatedness.
- Fields with sparse, delayed, or idiosyncratic citation behavior may yield weak hard-negative candidates.
- Negative sampling choices can encode field size, citation culture, and status effects into the learned representation.

## Links

- [citation-triplet supervision](citation_triplet_supervision.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [citation networks](../representations/citation_networks.md)
- [co-citation](../representations/co_citation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [Semantic Scholar citation-triplet corpus](../datasets/semantic_scholar_citation_triplet_corpus.md)
- [SCIDOCS embedding benchmark](../validations/scidocs_embedding_benchmark.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `hard_negative_citation_sampling`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- Aliases: citation hard negatives; citations-of-citations negatives; difficult citation distractors; hard negative paper sampling
