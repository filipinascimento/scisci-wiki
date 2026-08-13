# Metric eligibility-window manifest

## Summary

Metric eligibility-window manifest is the method of documenting the cohort limits, citation windows, field restrictions, and threshold rules that define which papers can receive each precomputed science-of-science indicator.

## Canonical Form

- Unit of analysis: metric, paper cohort, citation window, field assignment, eligibility rule, or data release.
- Typical representation: manifest table, metric documentation, derived-field README, or eligibility filter specification.
- Measurement target: make precomputed indicators reusable without hiding censoring, window, or denominator assumptions.
- Empirical signature: each metric has explicit years, fields, citation windows, and missingness rules.

## Uses in Science of Science

- Complements [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md).
- Links precomputed metrics to [citation window selection](citation_window_selection.md) and [citation data census dates](citation_data_census_dates.md).
- Applies to [field-normalized citation impact](../measures/field_normalized_citation_impact.md), [disruption index](../measures/disruption_index.md), and [beauty coefficient](../measures/beauty_coefficient.md).
- Helps users avoid comparing metrics with different observation windows or eligibility filters.

## Operationalization

- For each metric, list eligible publication years and required identifiers.
- Specify citation-window length, data-census date, and treatment of uncited or unlinked papers.
- Record field, journal, document-type, and threshold filters.
- Version the manifest with the data release and regenerate it when inputs are refreshed.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) reports precomputed SciSciNet indicators with different eligibility windows and restrictions.
- The paper describes windows for citation counts, disruption, novelty, sleeping beauties, and other derived metrics.
- This motif is distinct from the metric bundle because it captures the documentation layer required for valid reuse.
- It is especially important for historical SciSciNet releases because static MAG-based coverage can make recent windows incomplete.

## Caveats

- Eligibility manifests do not solve upstream data errors; they make them visible.
- Window rules can be metric-specific and should not be inferred from one indicator to another.
- Users should prefer current OpenAlex or Dimensions when recent coverage is the target.

## Links

- [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md)
- [citation window selection](citation_window_selection.md)
- [citation data census dates](citation_data_census_dates.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [disruption index](../measures/disruption_index.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; SciSciNet: W4378980478; WoS: unknown]

## Metadata

- Concept ID: `metric_eligibility_window_manifest`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: metric eligibility manifest; precomputed metric window manifest; derived-indicator eligibility rules; metric cohort-window documentation
