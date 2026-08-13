# Multilevel coarsening-refinement clustering

## Summary

Multilevel coarsening-refinement clustering optimizes a large publication network by repeatedly aggregating the graph into coarser units and then refining assignments at finer levels.

## Canonical Form

- Unit of analysis: publication, cluster, coarsened node, refinement move, quality-function value, or clustering level.
- Typical representation: multilevel local-search workflow with coarsening, refinement, and final cluster assignments.
- Method target: approximate high-quality modularity-like partitions for networks too large for exact optimization.
- Empirical signature: the algorithm scales to millions of publications while preserving a refinement phase that can improve assignments after coarse grouping.

## Uses in Science of Science

- Supplies a scalable optimization engine for [publication-level field classification](publication_level_field_classification.md).
- Connects citation-based field construction to community-detection methods used in [citation networks](../representations/citation_networks.md), co-citation maps, and science maps.
- Makes algorithmic optimization choices explicit alongside [hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md).
- Supports reproducibility audits through software availability, parameter reporting, and [stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md).

## Operationalization

- Define a publication relatedness graph and clustering quality function.
- Use multilevel coarsening to aggregate strongly related nodes into a smaller graph.
- Run local search on the coarsened graph and refine assignments when moving back to finer levels.
- Repeat the workflow at each hierarchy level when building nested research areas.
- Report software, parameter settings, number of runs, randomization behavior, runtime, memory, and retained solution quality.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) describes an optimization algorithm inspired by multilevel local-search algorithms.
- The authors state that their algorithm combines multilevel coarsening and multilevel refinement.
- They contrast this with the Blondel et al. algorithm, which uses multilevel coarsening but does not include the same multilevel refinement mechanism.
- The paper reports an available C implementation for the clustering algorithm and uses it in a 10.2 million-publication classification application.

## Caveats

- Multilevel heuristics approximate difficult optimization problems; they do not prove global optimality.
- Different random starts can yield different partitions.
- Coarsening and refinement choices can affect small or weakly connected fields, so they should be paired with sensitivity and accuracy checks.

## Links

- [publication-level field classification](publication_level_field_classification.md)
- [hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md)
- [stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [minimum research-area size constraint](minimum_research_area_size_constraint.md)
- [science maps](../representations/science_maps.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [multilayer modularity](../measures/multilayer_modularity.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `multilevel_coarsening_refinement_clustering`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: multilevel local-search clustering; coarsening-refinement community detection; large-scale publication clustering; multilevel refinement clustering
