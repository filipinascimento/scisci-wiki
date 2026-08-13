# Research-area average normalized relatedness

## Summary

Research-area average normalized relatedness aggregates publication-level normalized relatedness into an area-to-area score used to compare or reassign preliminary research areas.

## Canonical Form

- Unit of analysis: pair of research areas, pair of publications, classification level, or preliminary cluster.
- Typical representation: area-by-area relatedness matrix, average normalized edge weight, or reassignment score.
- Measurement target: quantify how strongly two publication clusters are related through their member publications.
- Empirical signature: undersized or preliminary areas can be mapped to larger areas by strongest aggregate relatedness.

## Uses in Science of Science

- Aggregates [normalized publication relatedness](normalized_publication_relatedness.md) from paper pairs to research-area pairs.
- Feeds [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md) and [minimum research-area size constraint](../methods/minimum_research_area_size_constraint.md) workflows.
- Supports [undersized cluster reassignment rule](../methods/undersized_cluster_reassignment_rule.md).
- Helps make publication-level classifications auditable by exposing the score behind area reassignment.

## Operationalization

- Start with a preliminary assignment of publications to research areas at a hierarchy level.
- Compute normalized relatedness between publications using direct citation or another defined relation.
- For each pair of research areas, average the normalized relatedness over publications belonging to the two areas.
- Use the resulting matrix to compare preliminary areas, merge or reassign small areas, or inspect classification structure.
- Record whether within-area and between-area pairs are treated differently.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) defines the relatedness of two research areas as the average normalized relatedness of publications belonging to the two areas.
- The measure is introduced during the second stage of each bottom-up iteration, where research areas with too few publications are discarded and reassigned.
- The same procedure uses the strongest area-level relatedness to decide where undersized preliminary areas should be reassigned.

## Caveats

- Average relatedness can be sensitive to sparse citation links and uneven cluster sizes.
- It inherits biases from the underlying publication-level relatedness measure.
- Area-level aggregation can hide multi-topic small clusters that have several plausible destinations.

## Links

- [normalized publication relatedness](normalized_publication_relatedness.md)
- [minimum research-area size constraint](../methods/minimum_research_area_size_constraint.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [undersized cluster reassignment rule](../methods/undersized_cluster_reassignment_rule.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; SciSciNet: W2126566678; WoS: unknown]

## Metadata

- Concept ID: `research_area_average_normalized_relatedness`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: area average normalized relatedness; research-area relatedness matrix; cluster average relatedness; area-to-area normalized relatedness
