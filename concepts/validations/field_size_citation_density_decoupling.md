# Field-size citation-density decoupling

## Summary

Field-size citation-density decoupling is the validation check that average citation density is not assumed to be a simple function of the number of papers in a field.

## Canonical Form

- Unit of analysis: field, year, citation baseline, article count, or citation-density parameter.
- Typical representation: field-size versus `c0` comparison, scatterplot, correlation check, or field-year baseline table.
- Validation target: ensure field normalization does not treat larger fields as automatically higher- or lower-citation-density fields.
- Empirical signature: the field-year citation baseline has little or weak correlation with total article volume.

## Uses in Science of Science

- Validates [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md).
- Refines [cross-field citation-density sources](../mechanisms/cross_field_citation_density_sources.md) by separating density from field size.
- Connects to [citation indicator size dependence](../measures/citation_indicator_size_dependence.md) when aggregate fields are compared.
- Helps diagnose whether normalization denominators are capturing citation practice rather than simple scale.

## Operationalization

- Compute the field-year article count and average citation baseline.
- Test correlation or rank association between field size and citation baseline.
- Repeat across years and field taxonomies.
- Report outlier fields where scale and density move together.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) notes that the average citation baseline `c0` has little correlation with total article volume across fields.
- This supports treating citation-density differences as more than field-size differences.
- The motif is distinct from the `c0` measure because it validates one assumption behind using the baseline.
- It also helps prevent field normalization from being interpreted as a size correction alone.

## Caveats

- Field size can still matter through visibility, journal mix, and interdisciplinary flows.
- Correlation checks depend on the field classification system.
- Small fields can have unstable baselines even if size and density are decoupled on average.

## Links

- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [cross-field citation-density sources](../mechanisms/cross_field_citation_density_sources.md)
- [citation indicator size dependence](../measures/citation_indicator_size_dependence.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; SciSciNet: W2151866568; WoS: unknown]

## Metadata

- Concept ID: `field_size_citation_density_decoupling`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: field size citation-density check; c0 field-size decoupling; citation density scale decoupling; field volume baseline independence
