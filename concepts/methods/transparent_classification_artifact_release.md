# Transparent classification artifact release

## Summary

Publication-level classifications should release the algorithm description, parameter settings, software, assignments, and labels needed for inspection and reuse.

## Canonical Form

- Unit of analysis: classification artifact, source code, assignment file, label file, parameter set, or source corpus.
- Typical representation: versioned release package for a bibliometric classification system.
- Mechanism, measurement, or validation target: reproducibility and reuse of field-classification outputs.
- Empirical signature: independent users can inspect, download, rerun, or audit the classification assignments and labels.

## Uses in Science of Science

- Connects classification artifact governance to [algorithm pseudocode disclosure](algorithm_pseudocode_disclosure.md) and [science map update workflows](science_map_update_workflows.md).
- Provides a reusable motif for comparing [full database bibliometric access](full_database_bibliometric_access.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [restricted raw public derived bibliometric release](restricted_raw_public_derived_bibliometric_release.md) in linked scholarly data.

## Operationalization

- Publish the algorithm, parameter settings, software or source code, assignment files, and label files.
- Version releases by corpus, publication window, hierarchy, relation source, and parameters.
- Document restrictions that prevent raw data redistribution and provide derived artifacts where allowed.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) emphasizes full documentation, freely available clustering software and C source, and downloadable assignments and labels.
- This makes artifact release part of the classification methodology rather than an afterthought.

## Caveats

- A transparent derived artifact may still depend on restricted bibliometric source data.
- Released labels and assignments need snapshot dates to remain interpretable.

## Links

- [Algorithm pseudocode disclosure](algorithm_pseudocode_disclosure.md)
- [Science map update workflows](science_map_update_workflows.md)
- [Full-database bibliometric access](full_database_bibliometric_access.md)
- [Restricted-raw public-derived bibliometric release](restricted_raw_public_derived_bibliometric_release.md)
- [Publication-level field classification](publication_level_field_classification.md)
- [Metric recomputability data access](../validations/metric_recomputability_data_access.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `transparent_classification_artifact_release`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: reproducible classification release; downloadable field-classification artifact; transparent science-map artifact; classification rebuild package
