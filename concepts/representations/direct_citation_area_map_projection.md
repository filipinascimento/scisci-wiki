# Direct-citation area map projection

## Summary

Clustered research areas can be projected into a science map where spatial proximity reflects direct-citation relations between their publications.

## Canonical Form

- Unit of analysis: research area, publication cluster, direct-citation edge, map node, or layout coordinate.
- Typical representation: area-level map projection built from aggregated direct-citation relatedness.
- Mechanism, measurement, or validation target: visual representation of field proximity after publication-level clustering.
- Empirical signature: areas with stronger direct-citation relations are placed nearer to one another in the projected map.

## Uses in Science of Science

- Connects science-map representation to [science maps](science_maps.md) and [publication level field classification](../methods/publication_level_field_classification.md).
- Provides a reusable motif for comparing [direct citation relatedness graph](direct_citation_relatedness_graph.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [research area average normalized relatedness](../measures/research_area_average_normalized_relatedness.md) in linked scholarly data.

## Operationalization

- Aggregate publication-level clusters to research-area nodes.
- Compute inter-area direct-citation relation strengths.
- Use a layout algorithm and retain the underlying relation matrix for auditability.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) creates a level-2 map with VOSviewer using relation strength based on direct citations between publications in areas.
- The resulting map makes publication clusters inspectable as a science-map representation.

## Caveats

- Spatial proximity is a layout-dependent proxy, not a metric-space fact by itself.
- Large and multidisciplinary areas can dominate map structure.

## Links

- [Science maps](science_maps.md)
- [Publication-level field classification](../methods/publication_level_field_classification.md)
- [Direct-citation relatedness graph](direct_citation_relatedness_graph.md)
- [Research-area average normalized relatedness](../measures/research_area_average_normalized_relatedness.md)
- [Science-map mental-model fit](../validations/science_map_mental_model_fit.md)
- [Publication-cluster subject-category overlap profile](publication_cluster_subject_category_overlap_profile.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `direct_citation_area_map_projection`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: publication-cluster map projection; direct-citation field map; research-area proximity map; clustered citation-map layout
