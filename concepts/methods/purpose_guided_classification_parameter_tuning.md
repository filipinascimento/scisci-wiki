# Purpose-guided classification parameter tuning

## Summary

Purpose-guided classification parameter tuning selects field-classification levels, resolution parameters, and minimum-size thresholds according to the intended use of the classification rather than claiming one optimal setting.

## Canonical Form

- Unit of analysis: classification system, hierarchy level, resolution parameter, minimum-size threshold, research area, or use case.
- Typical representation: parameter table, sensitivity grid, manual review log, or purpose-parameter decision record.
- Method target: align classification granularity and hierarchy with downstream normalization, mapping, or portfolio analysis needs.
- Empirical signature: multiple candidate parameter settings are evaluated, and unacceptable macro-merges or overfragmentation are rejected.

## Uses in Science of Science

- Extends [hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md) with an explicit decision rule for parameter choice.
- Connects [minimum research-area size constraint](minimum_research_area_size_constraint.md) to intended classification use.
- Provides a practical response to [field-classification sensitivity](../validations/field_classification_sensitivity.md).
- Helps document reproducible [publication-level field classification](publication_level_field_classification.md) builds.

## Operationalization

- Define the intended use: broad map, field normalization, expert browsing, portfolio overlay, or fine-grained discovery.
- Set target counts for hierarchy levels and minimum area sizes.
- Run candidate resolutions and inspect broad merges, split quality, label interpretability, and excluded-publication rates.
- Record rejected settings and the reason for rejection.
- Report that the final parameters are use-guided, not universally optimal.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) states that suitable parameter values depend on the purpose for which a classification system is intended to be used.
- In their Web of Science application, the authors aimed for 10-20 broad disciplines, 500-1000 fields, and 20,000-25,000 small subfields.
- They report spending considerable time tuning high-level parameters because some settings produced unsatisfactory results, such as merging neuroscience and social sciences into one area.
- The paper explicitly says the chosen parameters illustrate the methodology and are not claimed to be optimal.

## Caveats

- Manual tuning can encode expert expectations and institutional categories.
- Purpose-specific settings reduce universal comparability across classifications.
- Parameter search should be logged so future rebuilds can distinguish methodological choice from accidental drift.

## Links

- [hierarchical resolution-parameter clustering](hierarchical_resolution_parameter_clustering.md)
- [minimum research-area size constraint](minimum_research_area_size_constraint.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [publication-level field classification](publication_level_field_classification.md)
- [stochastic clustering run selection](../validations/stochastic_clustering_run_selection.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; SciSciNet: W2126566678; WoS: unknown]

## Metadata

- Concept ID: `purpose_guided_classification_parameter_tuning`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: use-guided classification tuning; purpose-based resolution selection; classification parameter decision log; field-classification parameter tuning
