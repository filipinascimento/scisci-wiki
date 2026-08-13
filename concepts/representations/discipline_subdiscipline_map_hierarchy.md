# Discipline-subdiscipline map hierarchy

## Summary

A discipline-subdiscipline map hierarchy represents a science map as lower-level specialty nodes nested inside broader discipline groups, usually with spatial coordinates and labels for each node.

## Canonical Form

- Unit of analysis: discipline, subdiscipline, journal cluster, map node, coordinate, keyword set, or map version.
- Typical representation: two-level hierarchy, cluster coordinate table, discipline color legend, or node-to-parent assignment table.
- Representation target: make a large science map readable at both broad and fine granularity.
- Empirical signature: source titles or papers map to subdiscipline nodes, and subdiscipline nodes aggregate to a smaller number of named disciplines.

## Uses in Science of Science

- Gives [science maps](science_maps.md) a stable structure for zooming between field-level and specialty-level interpretation.
- Supports [science map overlays](science_map_overlays.md) by allowing portfolio weights to be summarized at discipline or subdiscipline level.
- Provides a classification layer for [field classifications](../measures/field_classifications.md), [science map update workflows](../methods/science_map_update_workflows.md), and [science-location lookup tables](../methods/science_location_lookup_tables.md).
- Helps compare map-based categories with OpenAlex topics, Dimensions categories, WoS subject categories, or other field taxonomies.

## Operationalization

- Cluster journals or papers into fine-grained subdisciplines using a documented similarity and layout workflow.
- Aggregate subdiscipline nodes into broader named disciplines with stable colors or labels.
- Store map coordinates, parent discipline, keywords, and source-title assignments for every subdiscipline.
- Version the hierarchy whenever source coverage, clustering, labels, or coordinates change.
- Use [science-map coverage expansion audit](../validations/science_map_coverage_expansion_audit.md) to check whether updates shift the distribution of nodes or records.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) describes the UCSD map as 554 journal clusters laid out on a map and aggregated into 13 higher-level disciplines.
- The paper states that subdisciplines were assigned names, colors, and positions, and that each subdiscipline belongs to exactly one discipline in the updated map.
- Borner et al. also describe each subdiscipline as having keywords and map coordinates, making the hierarchy both a classification and a spatial representation.
- The full text frames this hierarchy as useful for map overlays, expertise profiles, institutional comparisons, and science navigation.

## Caveats

- Fixed parent disciplines simplify reading but can hide cross-disciplinary clusters and boundary changes.
- A hierarchy built from journal clusters can misclassify papers in broad or multidisciplinary venues.
- Coordinates and colors are interpretive aids; they should not be treated as exact distances or natural boundaries without validation.

## Links

- [science maps](science_maps.md)
- [science map overlays](science_map_overlays.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [science-location lookup tables](../methods/science_location_lookup_tables.md)
- [science-map source-title spine](../datasets/science_map_source_title_spine.md)
- [field classifications](../measures/field_classifications.md)
- [journal-cluster science backbones](journal_cluster_science_backbones.md)
- [Riemannian science-map projections](riemannian_science_map_projections.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `discipline_subdiscipline_map_hierarchy`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: discipline-subdiscipline hierarchy; 13-discipline 554-subdiscipline map; science-map node hierarchy; map classification hierarchy
