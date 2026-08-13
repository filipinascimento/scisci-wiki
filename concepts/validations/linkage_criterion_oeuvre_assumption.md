# Linkage-criterion oeuvre assumption

## Summary

Linkage-criterion oeuvre assumption is the validation motif that single-link and average-link clustering encode different assumptions about whether an author's publication set is chained or cohesive.

## Canonical Form

- Unit of analysis: author mention cluster, author oeuvre, similarity graph, linkage rule, or merge decision.
- Typical representation: single-link chaining, average-link cohesion, bridge publication, heterogeneous author portfolio, or split-merge audit.
- Validation target: test whether the clustering rule matches the expected structure of real author oeuvres.
- Empirical signature: a linkage choice changes whether heterogeneous careers are split or whether bridge similarities create false merges.

## Uses in Science of Science

- Adds an author-career interpretation to [author similarity clustering](../methods/author_similarity_clustering.md).
- Links clustering assumptions to [homonym and synonym author errors](homonym_synonym_author_errors.md).
- Helps diagnose whether [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md) reflects pairwise links or usable author profiles.

## Operationalization

- Compare single-link, complete-link, average-link, and agglomerative variants on the same name blocks.
- Audit bridge cases where one publication connects otherwise distinct clusters.
- Audit heterogeneous oeuvres where a real author changes topics, institutions, or coauthors.
- Report split and merge errors separately by linkage rule.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) contrasts single-link chaining with average-link cohesion in author-disambiguation approaches.
- The paper notes that heterogeneous oeuvres can be split when similarity requirements are too cohesive, while loose chaining can increase false links.
- This motif separates clustering semantics from the feature set used to compute similarity.

## Caveats

- No linkage rule is universally best across fields, career stages, and name-block sizes.
- Real authors can have both cohesive and heterogeneous phases.
- Linkage effects can be masked when blocking already creates unrecoverable splits.

## Links

- [author similarity clustering](../methods/author_similarity_clustering.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `linkage_criterion_oeuvre_assumption`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: author-oeuvre linkage assumption; single-link average-link disambiguation caveat; author clustering cohesion assumption
