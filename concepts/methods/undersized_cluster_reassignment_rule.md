# Undersized cluster reassignment rule

## Summary

Undersized cluster reassignment rule discards preliminary research areas below a minimum-size threshold and reassigns their publications to sufficiently large areas with the strongest aggregate relatedness.

## Canonical Form

- Unit of analysis: preliminary research area, publication, hierarchy level, minimum-size threshold, or relatedness target area.
- Typical representation: reassignment rule, exclusion flag, area-to-area relatedness score, or classification post-processing step.
- Method target: enforce minimum area sizes while preserving relatedness-based placement.
- Empirical signature: small preliminary clusters are either reassigned to a related large area or excluded when no adequate relation exists.

## Uses in Science of Science

- Operationalizes the [minimum research-area size constraint](minimum_research_area_size_constraint.md).
- Uses [research-area average normalized relatedness](../measures/research_area_average_normalized_relatedness.md) as the reassignment score.
- Provides a transparent alternative to silently dropping sparse [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md) components.
- Helps users audit exclusions tied to [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md).

## Operationalization

- After preliminary clustering at a hierarchy level, identify research areas below the minimum required size.
- Compute each undersized area's relatedness to sufficiently large areas.
- Reassign all publications in an undersized area to the sufficiently large area with maximum relatedness.
- If an undersized area has no relation to any sufficiently large area, exclude its publications from the classification.
- Record the count of reassigned and excluded publications for each level.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) states that each bottom-up iteration has a second stage in which research areas with too few publications are discarded and their publications are reassigned.
- The method identifies the sufficiently large area most strongly related to the discarded area and reassigns all publications from the small area to that target.
- The paper also states that if an undersized area has no relation with sufficiently large areas, its publications cannot be properly reassigned and are excluded from the classification.

## Caveats

- Reassigning all publications from a small area can blur genuinely emerging specialties.
- The rule favors connected areas and may systematically exclude isolated or new topics.
- Minimum-size thresholds should be reported with purpose and sensitivity checks.

## Links

- [minimum research-area size constraint](minimum_research_area_size_constraint.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [research-area average normalized relatedness](../measures/research_area_average_normalized_relatedness.md)
- [publication-level field classification](publication_level_field_classification.md)
- [hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; SciSciNet: W2126566678; WoS: unknown]

## Metadata

- Concept ID: `undersized_cluster_reassignment_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: small-cluster reassignment; minimum-size cluster reassignment; undersized area reassignment; small research-area exclusion rule
