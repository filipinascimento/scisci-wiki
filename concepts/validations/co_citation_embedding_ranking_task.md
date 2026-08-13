# Co-citation embedding ranking task

## Summary

Co-citation embedding ranking task evaluates whether paper embeddings place a query paper closer to papers that are frequently cited together with it than to unrelated candidates.

## Canonical Form

- Unit of analysis: query paper, co-cited candidate, random candidate, embedding vector, or ranked candidate set.
- Typical representation: co-citation candidate-ranking task scored with MAP, nDCG, precision, or recall at rank.
- Validation target: test whether embeddings capture citation-neighborhood relatedness beyond direct citation edges.
- Empirical signature: highly co-cited papers rank above random candidate papers by embedding distance.

## Uses in Science of Science

- Adds a co-citation validation layer to [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md).
- Splits one component of [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md) into a reusable embedding task.
- Connects embedding evaluation to [co-citation](../representations/co_citation.md), [bibliographic coupling](../representations/bibliographic_coupling.md), and science-map relatedness.
- Complements [direct-citation embedding ranking task](direct_citation_embedding_ranking_task.md) by testing shared-citing-context similarity rather than direct references.

## Operationalization

- For each query paper, identify papers that are highly co-cited with it in a held-out citation graph.
- Construct a candidate set with co-cited positives and sampled random negatives.
- Rank candidates by a documented embedding distance, usually without task-specific model tuning.
- Report ranking metrics and compare against direct-citation, classification, user-activity, and recommendation tasks.
- Record the citation snapshot and co-citation threshold because co-citation labels evolve over time.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) defines a SCIDOCS co-citation task where the goal is to predict highly co-cited papers for a given query paper.
- The paper motivates the task by arguing that papers frequently cited together are likely related.
- Cohan et al. construct the co-citation dataset similarly to the direct-citation task and evaluate embeddings by ranking candidates with raw embedding distances.
- This task validates whether a paper representation captures broader scholarly neighborhoods, not only explicit query-to-candidate citation links.

## Caveats

- Co-citation requires later citing papers, so recent papers may have sparse or missing labels.
- Co-citation can reflect field size, review practices, and citation conventions as well as semantic relatedness.
- Candidate sampling and citation-window choices should be documented because they can change difficulty.

## Links

- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [direct-citation embedding ranking task](direct_citation_embedding_ranking_task.md)
- [L2 embedding-distance ranking](../methods/l2_embedding_distance_ranking.md)
- [co-citation](../representations/co_citation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [science maps](../representations/science_maps.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `co_citation_embedding_ranking_task`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: co-citation prediction task; SCIDOCS co-citation ranking; co-cited paper ranking; embedding co-citation validation
