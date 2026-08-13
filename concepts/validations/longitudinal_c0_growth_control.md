# Longitudinal c0 growth control

## Summary

Field-year normalization should distinguish citation-age accumulation from stable relative citation distributions.

## Canonical Form

- Unit of analysis: field-year cohort, average citation count, normalized density, publication year, or citation-age profile.
- Typical representation: cohort-specific `c0` rescaling with distribution-collapse comparison across years.
- Mechanism, measurement, or validation target: temporal stability of field-normalized citation distributions.
- Empirical signature: older cohorts have larger `c0` values while normalized distributions remain similar across publication years.

## Uses in Science of Science

- Refines citation-age normalization by linking it to [field year citation baseline c0](../measures/field_year_citation_baseline_c0.md) and [single year field comparison cohort](../methods/single_year_field_comparison_cohort.md).
- Useful as a reusable check when [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md) is used in science-of-science inference.
- Creates cross-links to [sleeping beauty](../mechanisms/sleeping_beauty.md) so the motif is not interpreted in isolation.

## Operationalization

- Compute field-year `c0` values for multiple publication cohorts.
- Rescale citation densities by each cohort's `c0`.
- Test whether curves collapse across years and inspect delayed-recognition tails separately.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) compares 1990, 1999, and 2004 cohorts and notes that older cohorts have larger `c0` while rescaled curves remain similar.
- This separates age accumulation from relative citation standing.

## Caveats

- The demonstrated comparison uses a limited set of years and fields.
- Sleeping-beauty and delayed-recognition cases may require longer windows.

## Links

- [Field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [Single-year field-comparison cohort](../methods/single_year_field_comparison_cohort.md)
- [Citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [Sleeping beauty](../mechanisms/sleeping_beauty.md)
- [Cited half-life temporal confound](cited_half_life_temporal_confound.md)
- [Universal citation distribution collapse](universal_citation_distribution_collapse.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `longitudinal_c0_growth_control`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: cohort-age c0 adjustment; publication-year citation-growth control; longitudinal normalization check
