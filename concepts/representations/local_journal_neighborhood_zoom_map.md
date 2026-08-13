# Local journal-neighborhood zoom map

## Summary

Local journal-neighborhood zoom map is a detailed submap that inspects nearby journals, edges, and attributes within a science-map region to audit fine-grained specialty structure.

## Canonical Form

- Unit of analysis: journal neighborhood, specialty cluster, local citation edge, journal attribute, or category audit region.
- Typical representation: zoomed journal map with node size, node color, edge weight, labels, and local cluster boundaries.
- Representation target: reveal local map structure that is hidden in all-science views and test whether source categories align with citation-derived neighborhoods.
- Empirical signature: a broad category splits into coherent local clusters, or journals with similar names relocate to different citation neighborhoods.

## Uses in Science of Science

- Adds detail-on-demand to [science maps](science_maps.md) and [journal-cluster science backbones](journal_cluster_science_backbones.md).
- Provides visual evidence for [journal category specificity audit](../validations/journal_category_specificity_audit.md).
- Helps validate [science map layout and reduction](../methods/science_map_layout_reduction.md) beyond global metrics by checking local specialty structure.
- Supports [manual science-map cluster labeling](../methods/manual_science_map_cluster_labeling.md) by exposing the journals and edges behind a label.

## Operationalization

- Select a region, cluster, or source category from a larger journal map.
- Display the constituent journals with stable local coordinates from the base layout.
- Encode journal attributes such as publication volume, impact proxy, source category, or document type.
- Show retained local similarity edges, with weight or shade representing the relatedness score.
- Compare local neighborhoods with source-category labels and document any split, merge, or misplacement pattern.

## Evidence and Validations

- Verified full-text evidence from Boyack, Klavans, and Borner (2005) zooms into the two Information and Library Science clusters from the disciplinary science backbone.
- Their local view sizes journal nodes by the number of papers published in 2000 and colors nodes by a citation-impact proxy based on citations to 1998-2000 issues divided by 2000 papers.
- The zoom map shows top-15 Jaccard relationships among the displayed journals, with darker edges indicating larger Jaccard coefficients.
- Boyack et al. use the local map to distinguish a libraries/librarians cluster from an information-science cluster and to show that several information-management journals align with Computer Science rather than the Information and Library Science clusters.

## Caveats

- Local zooms inherit all upstream choices: source coverage, similarity measure, edge filtering, layout algorithm, and manual label placement.
- A visually coherent local neighborhood should still be checked against content, categories, and alternative similarity layers.
- Attribute encodings such as impact proxies can distract from the map's primary similarity structure unless clearly documented.

## Links

- [science maps](science_maps.md)
- [journal-cluster science backbones](journal_cluster_science_backbones.md)
- [journal inter-citation and co-citation matrices](journal_intercitation_cocitation_matrices.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [top-N similarity edge filtering](../methods/top_n_similarity_edge_filtering.md)
- [manual science-map cluster labeling](../methods/manual_science_map_cluster_labeling.md)
- [journal category specificity audit](../validations/journal_category_specificity_audit.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; SciSciNet: W2100484636; WoS: unknown]

## Metadata

- Concept ID: `local_journal_neighborhood_zoom_map`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: local science-map zoom; journal neighborhood submap; specialty zoom map; detail-on-demand journal map
