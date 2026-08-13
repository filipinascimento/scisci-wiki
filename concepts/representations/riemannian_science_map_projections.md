# Riemannian science-map projections

## Summary

Riemannian science-map projections place science-map clusters on a spherical or continuous surface and then project them into two-dimensional, one-dimensional, or circular forms for interpretation and overlays.

## Canonical Form

- Unit of analysis: journal cluster, discipline, map coordinate, spherical layout, projection, or circular ordering.
- Typical representation: 3D spherical map, Mercator projection, 1D consensus ordering, or factor-ordered circular map.
- Representation target: avoid artificial Cartesian boundaries while producing readable map views for navigation and portfolio overlays.
- Empirical signature: the same cluster layout can be shown as a 3D map, a 2D projection, or a circular ordered map.

## Uses in Science of Science

- Provides an alternative representation for [science maps](science_maps.md) when field relationships are continuous rather than naturally bounded by page edges.
- Supports [science map overlays](science_map_overlays.md) in tools that need compact 2D or circular displays.
- Complements [science map layout and reduction](../methods/science_map_layout_reduction.md) by treating projection as a representation choice, not just a layout algorithm detail.
- Helps document how map geometry affects interpretation of adjacency and field boundaries.

## Operationalization

- Generate a cluster-level layout on a spherical or Riemannian surface.
- Project the layout to 2D when a flat display is required, recording the projection type.
- Optionally order disciplines, subdisciplines, and journals around a circle using factor analysis or another ordering rule.
- Preserve the original coordinates and projection metadata so overlays can be reproduced.

## Evidence and Validations

- Verified full-text evidence from Borner et al. (2012) describes the UCSD map as a 3D Fruchterman-Reingold layout of 554 journal clusters.
- The paper reports that a two-dimensional Mercator projection was produced from the 3D layout.
- Borner et al. state that the UCSD map was created from a Riemannian perspective and that using a sphere as the layout surface avoids left, right, top, and bottom Cartesian boundaries.
- The same full text describes a one-dimensional circular map: disciplines are ordered by a Riemannian consensus map, while subdiscipline and journal ordering within regions is produced with factor analysis.
- That circular-map ordering logic is now represented separately as [consensus-aligned circular map ordering](consensus_aligned_circular_map_ordering.md).

## Caveats

- Projection choices can distort distances and neighborhoods.
- Circular orderings are convenient for overlays but can imply adjacency that is partly an artifact of ordering.
- Tool users need access to projection metadata, not just rendered images.

## Links

- [science maps](science_maps.md)
- [science map overlays](science_map_overlays.md)
- [consensus-aligned circular map ordering](consensus_aligned_circular_map_ordering.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [science map update workflows](../methods/science_map_update_workflows.md)
- [journal-cluster science backbones](journal_cluster_science_backbones.md)
- [weighted science-map matrix fusion](../methods/weighted_science_map_matrix_fusion.md)
- [field classifications](../measures/field_classifications.md)

## References

- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `riemannian_science_map_projections`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Borner et al. (2012) (2012)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1371/journal.pone.0039464`
- OpenAlex ID: `W2036137014`
- Dimensions ID: `pub.1049668114`
- SciSciNet ID: `W2036137014`
- Aliases: spherical science map; Mercator science-map projection; circular science map; Riemannian map of science
