# Co-citation semantic-association residual

## Summary

Treats strong co-citation unexplained by topical similarity, direct citation, or bibliographic coupling as a residual semantic association to inspect.

## Canonical Form

- Unit of analysis: co-citation edge after baseline similarity adjustment.
- Typical representation: residual co-citation weight over text, topic, direct-citation, and bibliographic-coupling baselines.
- Validation target: whether co-citation captures broader association or idea co-occurrence beyond subject similarity.
- Empirical signature: an edge remains unusually strong after topical and citation-structural controls.

## Uses in Science of Science

- Connects [semantic embeddings](../representations/semantic_embeddings.md) to co-citation validation.
- Useful for separating subject similarity from broader intellectual association.
- Provides a residual audit for [co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md).

## Operationalization

- Model expected co-citation from text similarity, topic labels, direct citation, bibliographic coupling, and citation volume.
- Inspect high positive residual edges with full text or citation contexts.
- Classify residuals as transfer, shared concept, review packaging, canonical pairing, or artifact.

## Evidence and Validations

- Verified full-text evidence from Small (1973) says strong co-citation interpretation relies on both subject similarity and idea co-occurrence.
- This supports a validation motif for residual association beyond topical similarity.

## Caveats

- Residual semantic association can mix real intellectual links with citation convention, reviews, or canonical packaging.
- Text embeddings can miss historical meanings and formula-based relationships.

## Links

- [Semantic embeddings](../representations/semantic_embeddings.md)
- [Citation contexts and functions](../representations/citation_contexts.md)
- [Co-citation edge-context interpretation](../methods/co_citation_edge_context_interpretation.md)
- [Topic semantic artifact caveat](topic_semantic_artifact_caveat.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_semantic_association_residual`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation semantic residual; co-citation association residual; residual intellectual association edge
