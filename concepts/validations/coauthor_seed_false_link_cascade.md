# Coauthor-seed false-link cascade

## Summary

Coauthor-seed false-link cascade is the validation motif that false links made in an early coauthor-based disambiguation step can propagate into later clustering stages.

## Canonical Form

- Unit of analysis: coauthor seed link, connected component, author cluster, false merge, or staged disambiguation pipeline.
- Typical representation: shared-coauthor first step, seed cluster precision, connected-component expansion, or cascade audit.
- Validation target: isolate early-stage link errors before they become final author clusters.
- Empirical signature: final low precision is traceable to an initial coauthor-linking step rather than later metadata refinements.

## Uses in Science of Science

- Adds staged-error diagnostics to [COTA coauthor TF-IDF disambiguation](../methods/cota_coauthor_tf_idf_disambiguation.md).
- Connects author identity inference to [coauthorship networks](../representations/coauthorship_networks.md), where false identity links can distort collaboration structure.
- Complements [author similarity clustering](../methods/author_similarity_clustering.md) by focusing on first-stage evidence.

## Operationalization

- Evaluate first-stage coauthor seed links separately from final clusters.
- Track which final false merges descend from seed links versus later similarity thresholds.
- Use stricter coauthor evidence in common-name blocks and looser evidence in sparse-name blocks only after calibration.
- Report cascade sensitivity by block size and coauthor-name ambiguity.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) attributes weak precision in a COTA implementation mainly to false links created by the shared-coauthor first step.
- The paper's comparison shows that an intuitively strong coauthor signal can create persistent downstream cluster errors.
- This motif is a validation pattern for staged disambiguation pipelines.

## Caveats

- Coauthor overlap can be highly informative in many fields.
- First-stage errors may interact with metadata sparsity, blocking, and threshold choice.
- The cascade is most visible when the implementation exposes intermediate pipeline outputs.

## Links

- [COTA coauthor TF-IDF disambiguation](../methods/cota_coauthor_tf_idf_disambiguation.md)
- [author similarity clustering](../methods/author_similarity_clustering.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `coauthor_seed_false_link_cascade`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: coauthor seed merge cascade; first-stage coauthor false link; staged disambiguation cascade error
