# Single-year field-comparison cohort

## Summary

Single-year field-comparison cohort is the method of holding publication year fixed when comparing citation distributions across fields, then separately testing whether the normalization also holds over time.

## Canonical Form

- Unit of analysis: publication year, field, article cohort, citation distribution, or reference set.
- Typical representation: same-year field panel, year-stratified distribution comparison, or temporal robustness check.
- Measurement target: separate field differences from citation-age and citation-window differences.
- Empirical signature: cross-field comparisons are first made within one publication year before multi-year generalization.

## Uses in Science of Science

- Supports [citation window selection](citation_window_selection.md) by fixing age before field comparisons.
- Provides a design layer for [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md).
- Helps validate [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md) without mixing field and year effects.
- Connects to [reference set construction](reference_set_construction.md) for field-normalized indicators.

## Operationalization

- Select a single publication year or narrow publication cohort.
- Build field-specific citation distributions using a common citation census date or citation window.
- Estimate field-year baselines and compare normalized distributions.
- Repeat with additional years to test temporal stability.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) compares fields within a fixed publication year and then tests selected fields across multiple years.
- This design separates field normalization from citation aging and temporal drift.
- The motif is distinct from `c0` itself because it is the cohort-construction protocol behind the baseline.
- It is useful whenever a field comparison could be confounded by different publication ages.

## Caveats

- A single year can be atypical for some fields.
- Fixed-year designs still depend on the citation census date and field taxonomy.
- Temporal robustness checks are needed before applying the same normalization across long periods.

## Links

- [citation window selection](citation_window_selection.md)
- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md)
- [reference set construction](reference_set_construction.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; SciSciNet: W2151866568; WoS: unknown]

## Metadata

- Concept ID: `single_year_field_comparison_cohort`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: same-year field comparison; fixed-year citation cohort; year-stratified field comparison; publication-year held-constant citation panel
