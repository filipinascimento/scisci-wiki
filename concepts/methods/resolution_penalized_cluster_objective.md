# Resolution-penalized cluster objective

## Summary

Publication clusters can be optimized by rewarding within-cluster normalized relatedness while subtracting a level-specific resolution penalty.

## Canonical Form

- Unit of analysis: publication pair, cluster, normalized relatedness, resolution parameter, or objective contribution.
- Typical representation: quality function balancing within-cluster relatedness against a resolution-controlled penalty.
- Mechanism, measurement, or validation target: granularity control in publication-level field clustering.
- Empirical signature: higher resolution parameters require stronger relatedness for publications to remain in the same cluster.

## Uses in Science of Science

- Connects publication clustering method to [hierarchical resolution parameter clustering](hierarchical_resolution_parameter_clustering.md) and [normalized publication relatedness](../measures/normalized_publication_relatedness.md).
- Provides a reusable motif for comparing [multilevel coarsening refinement clustering](multilevel_coarsening_refinement_clustering.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md) in linked scholarly data.

## Operationalization

- Define the objective as within-cluster normalized relatedness minus a resolution-sensitive penalty term.
- Tune resolution parameters separately for hierarchy levels.
- Report how cluster counts, sizes, and average relatedness change across parameter settings.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) defines a quality function using normalized relatedness and a resolution parameter.
- The method uses stronger resolution settings to obtain smaller and more numerous research areas.

## Caveats

- A resolution parameter is a modeling choice and should be tied to the use case.
- Optimization can find local optima, so stochastic run selection remains relevant.

## Links

- [Hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md)
- [Normalized publication relatedness](../measures/normalized_publication_relatedness.md)
- [Multilevel coarsening-refinement clustering](multilevel_coarsening_refinement_clustering.md)
- [Stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md)
- [Publication-level field classification](publication_level_field_classification.md)
- [Field-classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `resolution_penalized_cluster_objective`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: resolution-penalty clustering objective; normalized-relatedness quality function; intra-area relatedness threshold objective; resolution-weighted publication clustering
