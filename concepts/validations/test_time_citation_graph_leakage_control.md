# Test-time citation graph leakage control

## Summary

Test-time citation graph leakage control removes future or held-out citation information from graph-aware baselines so evaluation matches what a production system could know.

## Canonical Form

- Unit of analysis: citation edge, co-citation edge, query paper, candidate paper, train/dev/test split, or graph baseline.
- Typical representation: edge-removal rule for development and test citation or co-citation edges.
- Validation target: prevent graph baselines from using citation links unavailable when a new paper is embedded or recommended.
- Empirical signature: graph-aware models lose access to incoming or held-out citation edges during evaluation.

## Uses in Science of Science

- Clarifies evaluation for [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md).
- Complements [citation-free embedding inference](../methods/citation_free_embedding_inference.md) by applying the same production-availability logic to graph baselines.
- Supports fair comparisons in [direct-citation embedding ranking task](direct_citation_embedding_ranking_task.md), [co-citation embedding ranking task](co_citation_embedding_ranking_task.md), and [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md).

## Operationalization

- Remove development and test citation edges from graph training data.
- Remove incoming citations from development or test query papers when those edges would not exist for new papers.
- Apply the same temporal or availability rule to all graph-aware baselines.
- Report which edges were removed and whether the target task simulates new-paper inference, future citation prediction, or retrospective reconstruction.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) notes that graph baselines such as SGC can access the citation graph during training and test time.
- The paper removes development and test citations and co-citations during training for SGC.
- Cohan et al. also remove incoming citations from development and test queries because those would not be available in production at test time.

## Caveats

- Leakage controls depend on the intended deployment scenario; retrospective science mapping and new-paper recommendation have different availability assumptions.
- Removing only direct held-out edges may be insufficient if derived co-citation or graph-neighborhood features still encode them.
- Temporal splits should be documented when citation availability changes over time.

## Links

- [citation-free embedding inference](../methods/citation_free_embedding_inference.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [direct-citation embedding ranking task](direct_citation_embedding_ranking_task.md)
- [co-citation embedding ranking task](co_citation_embedding_ranking_task.md)
- [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md)
- [citation networks](../representations/citation_networks.md)
- [production recommender embedding feature boost](production_recommender_embedding_feature_boost.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `test_time_citation_graph_leakage_control`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: graph leakage control; test-time citation leakage; held-out citation edge removal; production-available graph evaluation
