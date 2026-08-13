# Nested research-area code path

## Summary

Dot-separated research-area codes encode parent-child paths in a hierarchical publication classification.

## Canonical Form

- Unit of analysis: research area, publication assignment, hierarchy level, parent cluster, or area code.
- Typical representation: dot-path identifier such as level1, level1.level2, and level1.level2.level3.
- Mechanism, measurement, or validation target: machine-readable hierarchy for field assignments.
- Empirical signature: child area identifiers preserve the full parent path and can be joined back to higher-level areas.

## Uses in Science of Science

- Connects hierarchical field representation to [hierarchical resolution parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md) and [hierarchical assignment consistency constraint](../validations/hierarchical_assignment_consistency_constraint.md).
- Provides a reusable motif for comparing [paper field linkages](paper_field_linkages.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [publication level field classification](../methods/publication_level_field_classification.md) in linked scholarly data.

## Operationalization

- Store hierarchy levels as both separate columns and a dot-separated path string.
- Validate that every child code has an existing parent code.
- Use the path to aggregate publications from fine to broad research areas.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) defines notation in which level-2 and level-3 research areas extend parent area codes.
- The code path is an implementation motif for reusable field-classification artifacts.

## Caveats

- Code paths are identifiers and do not themselves provide semantic labels.
- Reassignments or version changes can break comparability if path versions are not recorded.

## Links

- [Hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [Hierarchical assignment consistency constraint](../validations/hierarchical_assignment_consistency_constraint.md)
- [Paper-field linkages](paper_field_linkages.md)
- [Publication-level field classification](../methods/publication_level_field_classification.md)
- [Science maps](science_maps.md)
- [Field classifications](../measures/field_classifications.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `nested_research_area_code_path`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: hierarchical area identifier; dot-path field code; nested cluster code; parent-child research-area path
