# Science map layout and reduction

## Summary

Science map layout and reduction converts high-dimensional similarity matrices into readable maps by filtering edges, clustering nodes, and positioning entities in two or three dimensions.

## Canonical Form

- Unit of analysis: journal, paper, cluster, similarity edge, map coordinate, or layout run.
- Typical representation: reduced similarity graph, force-directed layout, multidimensional scaling projection, factor-layout ordering, or clustered basemap.
- Method target: preserve important local and global structure while making large scholarly spaces visually usable.
- Empirical signature: only the strongest or most informative edges are kept before layout, and resulting coordinates are validated against known categories or expert-readable structures.

## Uses in Science of Science

- Turns [journal similarity mapping](journal_similarity_mapping.md) outputs into [science maps](../representations/science_maps.md).
- Supplies map coordinates for [science map overlays](../representations/science_map_overlays.md), [field classifications](../measures/field_classifications.md), and [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md).
- Makes large science maps tractable enough for update workflows and interactive tools.

## Operationalization

- Filter the similarity graph, for example by retaining top-n edges per node, removing weak edges, or using a sparsified backbone.
- Select layout and clustering algorithms such as force-directed layout, VxOrd, Fruchterman-Reingold, multidimensional scaling, k-means, factor ordering, or spherical projection.
- Treat [top-N similarity edge filtering](top_n_similarity_edge_filtering.md) and [Riemannian science-map projections](../representations/riemannian_science_map_projections.md) as explicit design choices when they are used.
- Record layout seeds, thresholds, retained-edge rules, clustering levels, and [manual science-map cluster labeling](manual_science_map_cluster_labeling.md) rules.
- Validate maps with [science map accuracy validation](../validations/science_map_accuracy_validation.md) before treating visual proximity as substantive proximity.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) uses the VxOrd force-directed graph layout tool to generate maps from eight journal similarity matrices.
- Boyack et al. report that retaining only the largest 15 similarity pairs per journal improved layout accuracy in prior work and used those filtered similarities as map inputs.
- The paper emphasizes scalability: VxOrd is described as an order O(N) approach suitable for very large graphs, while Pearson-style full matrix calculations scale poorly.
- Verified full-text evidence from Borner et al. (2012) creates the UCSD map with graph layout and clustering, using 554 journal clusters and a three-dimensional Riemannian/spherical layout later projected to 2D and 1D forms.
- Borner et al. also remove multipoint journals before clustering and add them back with fractional assignments, motivating [multipoint journal fractional assignment](multipoint_journal_fractional_assignment.md) as a map-construction step.

## Caveats

- Layout geometry can be visually persuasive even when thresholds or random seeds drive positions.
- Edge filtering improves readability but can remove weak cross-field signals.
- Manual labeling and post-layout adjustment should be documented as part of the workflow.

## Links

- [science maps](../representations/science_maps.md)
- [journal similarity mapping](journal_similarity_mapping.md)
- [top-N similarity edge filtering](top_n_similarity_edge_filtering.md)
- [manual science-map cluster labeling](manual_science_map_cluster_labeling.md)
- [local journal-neighborhood zoom map](../representations/local_journal_neighborhood_zoom_map.md)
- [multipoint journal fractional assignment](multipoint_journal_fractional_assignment.md)
- [Riemannian science-map projections](../representations/riemannian_science_map_projections.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)
- [science map update workflows](science_map_update_workflows.md)
- [science map overlays](../representations/science_map_overlays.md)
- [field classifications](../measures/field_classifications.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]
- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `science_map_layout_reduction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: science-map layout; similarity graph reduction; VxOrd mapping; top-n edge filtering
