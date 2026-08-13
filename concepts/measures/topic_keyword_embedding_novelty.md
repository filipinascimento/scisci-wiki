# Topic-keyword embedding novelty

## Summary

Topic-keyword embedding novelty measures paper novelty as the negative semantic typicality of topic-keyword pairs, where typicality is computed from embeddings learned on keyword co-occurrence.

## Canonical Form

- Unit of analysis: paper, topic keyword, keyword pair, embedding vector, or team-output cohort.
- Typical representation: pairwise keyword typicality, negative typicality score, novelty percentile, or top-novelty indicator.
- Measurement target: atypical recombination of ideas represented by topic keywords.
- Empirical signature: papers combining less semantically typical keyword pairs receive higher novelty scores.

## Uses in Science of Science

- Extends [novelty and conventionality](../mechanisms/novelty_conventionality.md) from reference-pair combinations to topic-keyword semantics.
- Provides a team-output measure for [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md).
- Relates to [tail novelty](tail_novelty.md) while using embeddings rather than direct reference-pair z-scores.
- Uses [semantic embeddings](../representations/semantic_embeddings.md) as the representation layer.

## Operationalization

- Collect topic keywords associated with papers.
- Train a skip-gram word2vec model on keyword co-occurrence within papers.
- Represent each keyword as an embedding vector.
- Compute typicality for a keyword pair as the inner product of the two vectors.
- Define novelty as negative typicality and aggregate pair-level novelty to the paper-level statistic used by the analysis.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) states that novelty quantifies the extent to which a paper draws on and combines atypical ideas.
- The authors learn vector representations of MAG topic keywords from their co-occurrence within papers using a skip-gram word2vec model.
- They calculate typicality of a topic-keyword pair as the inner product of embedding vectors and define novelty as negative typicality.

## Caveats

- Topic-keyword coverage and quality depend on the underlying graph and extraction pipeline.
- Embedding typicality captures semantic proximity, not necessarily conceptual or methodological surprise.
- Comparisons should account for field, year, and keyword-volume differences.

## Links

- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [tail novelty](tail_novelty.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [developmental index](developmental_index.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)

## References

- Xu, F., Wu, L., & Evans, J. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; SciSciNet: W4226148732; WoS: unknown]

## Metadata

- Concept ID: `topic_keyword_embedding_novelty`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: embedding novelty; topic-keyword novelty; negative semantic typicality; MAG topic embedding novelty
