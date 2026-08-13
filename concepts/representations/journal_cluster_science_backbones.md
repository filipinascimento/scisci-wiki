# Journal-cluster science backbones

## Summary

Journal-cluster science backbones reduce a journal-level science map to clusters and dominant cross-cluster citation dependencies, making broad disciplinary structure visible.

## Canonical Form

- Unit of analysis: journal cluster, discipline, subdiscipline, cluster-to-cluster citation flow, or backbone edge.
- Typical representation: cluster-level science map, disciplinary dependency graph, hub-and-spoke structure, or reduced citation-flow backbone.
- Measurement target: global structure of science and dominant relationships among disciplines.
- Empirical signature: clusters form broad fields, while arrows or weighted edges identify strong dependencies and interdisciplinary hubs.

## Uses in Science of Science

- Provides a meso-level representation between individual journal maps and high-level field classifications.
- Supports interpretation of [science maps](science_maps.md), [field classifications](../measures/field_classifications.md), and [disciplinary independence](../measures/disciplinary_independence.md).
- Helps identify bridge disciplines, insular regions, and large knowledge-flow dependencies.

## Operationalization

- Build or import a journal-level map from [journal similarity mapping](../methods/journal_similarity_mapping.md).
- Cluster journals into disciplinary or subdisciplinary groups.
- Label clusters with a documented process such as [manual science-map cluster labeling](../methods/manual_science_map_cluster_labeling.md).
- Aggregate citation flows between clusters and filter to dominant dependencies.
- Record whether cluster positions come from [Riemannian science-map projections](riemannian_science_map_projections.md), 2D force-directed layouts, or manually adjusted coordinates.
- Encode cluster size, independence, impact, or field label as node attributes.
- Use [cluster citation-dependency arrows](cluster_citation_dependency_arrows.md) when the map emphasizes directed citation dependencies among clusters.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) hand-identifies 212 journal clusters covering 7,000 of 7,121 journals on an IC-Jaccard science map.
- The paper plots cluster size by number of journals, color-codes disciplinary independence, and shows arrows where a citing cluster directs more than 7.5% of its citations to a cited cluster.
- Boyack et al. describe biochemistry as a major interdisciplinary hub, receiving strong citation shares from many other disciplines and linking medicine, earth sciences, and chemistry.
- Their full text also uses a [local journal-neighborhood zoom map](local_journal_neighborhood_zoom_map.md) to inspect the Information and Library Science region beneath the cluster-level backbone.
- Verified full-text evidence from Borner et al. (2012) later creates the UCSD map around 554 journal clusters grouped into 13 high-level disciplines for overlays and field navigation.

## Caveats

- Backbone thresholds are interpretive choices; lowering or raising them changes visible dependencies.
- Cluster labels are often manual and should not be treated as definitive taxonomies.
- Journal-cluster backbones are coarse and can hide paper-level interdisciplinary structure.

## Links

- [science maps](science_maps.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [manual science-map cluster labeling](../methods/manual_science_map_cluster_labeling.md)
- [local journal-neighborhood zoom map](local_journal_neighborhood_zoom_map.md)
- [Riemannian science-map projections](riemannian_science_map_projections.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [disciplinary independence](../measures/disciplinary_independence.md)
- [cluster citation-dependency arrows](cluster_citation_dependency_arrows.md)
- [journal category specificity audit](../validations/journal_category_specificity_audit.md)
- [field classifications](../measures/field_classifications.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [co-citation](co_citation.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]
- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `journal_cluster_science_backbones`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: science backbone map; disciplinary dependency graph; journal-cluster map; science structure backbone
