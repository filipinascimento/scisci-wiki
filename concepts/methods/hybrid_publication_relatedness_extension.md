# Hybrid publication-relatedness extension

## Summary

Hybrid publication-relatedness extension supplements direct-citation links with indirect citation, bibliographic-coupling, co-citation, text, or strongest-neighbor relations to improve coverage and accuracy in publication-level field classifications.

## Canonical Form

- Unit of analysis: publication pair, relatedness graph, citation relation, text similarity, bibliographic-coupling edge, co-citation edge, or strongest-neighbor filter.
- Typical representation: hybrid similarity matrix, top-n relatedness graph, thresholded similarity graph, or multi-signal publication network.
- Method target: reduce sparsity and misclassification while keeping large-scale classification computationally feasible.
- Empirical signature: more publications can be included and weakly linked papers receive better topical assignments without exploding memory or runtime.

## Uses in Science of Science

- Extends [direct-citation relatedness graphs](../representations/direct_citation_relatedness_graph.md) when direct links are too sparse.
- Provides a method response to [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md) and [direct-citation classification accuracy gap](../validations/direct_citation_classification_accuracy_gap.md).
- Connects [publication-level field classification](publication_level_field_classification.md) to [bibliographic coupling](../representations/bibliographic_coupling.md), [co citation](../representations/co_citation.md), and [semantic embeddings](../representations/semantic_embeddings.md).
- Supports current classification systems that combine citations, text, venue, concept, or topic signals.

## Operationalization

- Start with a direct-citation relatedness graph as the scalable baseline.
- Add one or more supplementary signals: bibliographic coupling, co-citation, shared title/abstract terms, embedding similarity, keywords, or source-level context.
- Use thresholding, top-n filtering, approximate nearest neighbors, or strongest-link retention to control graph size.
- Compare coverage, cluster interpretability, accuracy audits, and computational cost against the direct-citation-only baseline.
- Report signal weights, filtering rules, and sensitivity to the chosen relatedness mix.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) identifies exclusive reliance on direct citation relations as both the main reason for scalability and the main weakness of their method.
- The authors state that more sophisticated relatedness measures could increase both coverage and accuracy.
- They specifically mention indirect citation relations, bibliographic coupling, and shared title/abstract words as possible supplements.
- The paper warns that richer relatedness measures can create billions of relations for ten million publications, making naive use computationally infeasible.
- Waltman and van Eck suggest keeping only the strongest relations, similar to a top-n similarity approach, as a practical compromise.

## Caveats

- Hybrid similarity can become opaque if signal weights and filtering rules are not documented.
- Text and citation signals have different age, language, field, and document-type biases.
- Increasing coverage can introduce noisy edges that blur field boundaries.
- Computational shortcuts should be validated against both accuracy and excluded-publication profiles.

## Links

- [publication-level field classification](publication_level_field_classification.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [normalized publication relatedness](../measures/normalized_publication_relatedness.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [direct-citation classification accuracy gap](../validations/direct_citation_classification_accuracy_gap.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [co citation](../representations/co_citation.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `hybrid_publication_relatedness_extension`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: hybrid publication similarity; relatedness-measure extension; strongest publication-relatedness filtering; top-n publication similarity
