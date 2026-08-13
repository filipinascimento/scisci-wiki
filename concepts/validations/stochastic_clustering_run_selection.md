# Stochastic clustering run selection

## Summary

Stochastic clustering run selection is the validation practice of running a randomized clustering algorithm many times and retaining the solution with the highest objective value.

## Canonical Form

- Unit of analysis: clustering run, random seed, quality-function value, partition, hierarchy level, or retained solution.
- Typical representation: run-count table, best-objective selection rule, stability summary, and retained cluster assignment.
- Validation target: reduce dependence on one random start when exact maximization is infeasible.
- Empirical signature: multiple runs produce different partitions, so the retained solution is selected by an explicit objective-value criterion.

## Uses in Science of Science

- Audits large-scale [publication-level field classification](../methods/publication_level_field_classification.md) when clustering is stochastic.
- Complements [multilevel coarsening-refinement clustering](../methods/multilevel_coarsening_refinement_clustering.md) by documenting how one partition is chosen.
- Supports [field-classification sensitivity](field_classification_sensitivity.md) and [direct-citation classification accuracy gap](direct_citation_classification_accuracy_gap.md) checks.
- Helps distinguish optimization reproducibility from substantive field-label validity.

## Operationalization

- State whether the clustering algorithm contains random elements.
- Run the algorithm repeatedly at each hierarchy level or parameter setting.
- Record the quality-function value and relevant diagnostics for each run.
- Retain the partition with the highest quality-function value, and optionally report stability across near-best partitions.
- Document hardware, software, runtime, memory use, and parallelization when scale is part of the method claim.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) states that exact maximization of the clustering quality function is usually infeasible for very large publication sets.
- Their algorithm includes random elements, so different runs generally lead to different cluster assignments.
- In the 10.2 million-publication application, the authors report 500 runs at the lowest classification level and 10,000 runs at each of the other two levels.
- They retain the values from the run with the highest quality-function value and report using 64 GB memory, five parallel runs, and four to five days of computation.

## Caveats

- Selecting the highest objective value does not guarantee the substantively best classification.
- Objective values can be close while partitions differ meaningfully for small or boundary fields.
- Best-run selection should be paired with external accuracy checks, sensitivity analysis, and transparent parameter reporting.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [multilevel coarsening-refinement clustering](../methods/multilevel_coarsening_refinement_clustering.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [direct-citation classification accuracy gap](direct_citation_classification_accuracy_gap.md)
- [minimum research-area size constraint](../methods/minimum_research_area_size_constraint.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `stochastic_clustering_run_selection`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: best-run clustering selection; random-start clustering validation; clustering objective run selection; stochastic partition selection
