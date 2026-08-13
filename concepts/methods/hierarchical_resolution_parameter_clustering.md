# Hierarchical resolution-parameter clustering

## Summary

Hierarchical resolution-parameter clustering builds nested research areas by repeatedly clustering publication networks with level-specific resolution and minimum-size parameters.

## Canonical Form

- Unit of analysis: publication, research area, hierarchy level, resolution parameter, minimum area size, or clustering run.
- Typical representation: nested cluster identifiers such as level-1, level-2, and level-3 area codes.
- Method target: create a multilevel field hierarchy from a large citation-relatedness network.
- Empirical signature: higher resolution parameters produce more detailed and smaller research areas, while minimum-size rules merge or exclude undersized clusters.

## Uses in Science of Science

- Provides the clustering engine for [publication-level field classification](publication_level_field_classification.md).
- Lets [field classifications](../measures/field_classifications.md) support both broad disciplines and fine research fronts.
- Supplies hierarchy metadata for [paper-field linkages](../representations/paper_field_linkages.md), [science maps](../representations/science_maps.md), and field-normalized baselines.
- Pairs with [research-area term labeling](research_area_term_labeling.md) so each hierarchy level can be interpreted.
- Makes parameter choices explicit enough to audit classification sensitivity.

## Operationalization

- Choose the number of hierarchy levels `L`.
- For each level, set a resolution parameter and a minimum number of publications per research area.
- Cluster the normalized relatedness graph bottom-up, subject to the constraint that lower-level clusters nest within higher-level clusters.
- Reassign publications from undersized clusters to sufficiently large related clusters where possible.
- Repeat stochastic optimization runs and retain the highest-quality solution when exact maximization is infeasible.
- Document the optimization workflow, including [multilevel coarsening-refinement clustering](multilevel_coarsening_refinement_clustering.md) and [stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md), when those choices determine the retained hierarchy.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) describes a bottom-up algorithm with one iteration per classification level.
- The method uses a resolution parameter to control detail at each level and a minimum-publication parameter to prevent very small research areas.
- Their application uses three levels with targets of broad disciplines, fields, and small subfields, producing 20, 672, and 22,412 areas after parameter tuning.
- The authors run the optimization algorithm many times because it contains random elements and exact maximization is infeasible at large scale.
- The minimum-size component is now split out as [minimum research-area size constraint](minimum_research_area_size_constraint.md).

## Caveats

- Parameter values are design choices, not intrinsic properties of science.
- Stochastic optimization can yield different clusterings across runs.
- Minimum-size reassignment can move weakly connected publications into areas where the substantive fit is imperfect.

## Links

- [publication-level field classification](publication_level_field_classification.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [normalized publication relatedness](../measures/normalized_publication_relatedness.md)
- [research-area term labeling](research_area_term_labeling.md)
- [minimum research-area size constraint](minimum_research_area_size_constraint.md)
- [multilevel coarsening-refinement clustering](multilevel_coarsening_refinement_clustering.md)
- [stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [field classifications](../measures/field_classifications.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [science maps](../representations/science_maps.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [multilayer modularity](../measures/multilayer_modularity.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `hierarchical_resolution_parameter_clustering`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: resolution-parameter field clustering; hierarchical publication clustering; multilevel publication classification; nested research-area clustering
