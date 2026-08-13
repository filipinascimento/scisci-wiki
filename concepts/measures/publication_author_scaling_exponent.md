# Publication-author scaling exponent

## Summary

Publication-author scaling exponent measures how yearly paper output changes with yearly author entry in a field, distinguishing increasing from decreasing productivity returns as a specialty grows.

## Canonical Form

- Unit of analysis: field-year, new publication count, new author count, field-growth period, or productivity regime.
- Typical representation: power-law exponent `alpha` in `Delta publications = C * (Delta authors)^alpha`, with regime splits when slopes change.
- Measurement target: whether additional field participants produce proportionally more, equal, or fewer papers per capita.
- Empirical signature: `alpha > 1` indicates increasing returns, `alpha = 1` proportional returns, and `alpha < 1` decreasing returns in publication output per new author.

## Uses in Science of Science

- Adds an output-productivity layer to [field population models](../methods/field_population_models.md), which otherwise focus on author population dynamics.
- Uses [field author-publication time series](../datasets/field_author_publication_time_series.md) as its core data substrate.
- Helps compare [field emergence](../mechanisms/field_emergence.md), [conceptual territory growth](conceptual_territory_growth.md), and simple paper-volume expansion.
- Supports [productivity regime shift](../validations/productivity_regime_shift.md) when a field changes scaling behavior across historical stages.
- Provides a field-level complement to [papers-per-author distribution](papers_per_author_distribution.md) and [career growth exponents](career_growth_exponents.md).

## Operationalization

- Build annual counts of new field publications and new field authors.
- Fit a power-law relationship between yearly publication increments and yearly author increments.
- Estimate `alpha`, normalization `C`, uncertainty, and any regime shifts.
- Compare exponent clusters across field types, such as theoretical, experimental, biomedical, technological, or interdisciplinary domains.
- Interpret scaling jointly with field definitions, publication practices, author disambiguation, and output-quality indicators.
- Compare productivity scaling with [field saturation projection](../validations/field_saturation_projection.md) because author-population plateaus and publication-author returns capture different dynamics.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) defines a scaling law relating yearly new publications to yearly new authors across six scientific fields.
- The paper reports that the same form fits all six cases even when their author-growth trajectories differ.
- Bettencourt et al. interpret `alpha > 1` as increasing returns to scale and `alpha < 1` as decreasing returns.
- Their estimates show increasing returns for theoretical and technological fields and decreasing returns for the biomedical fields in their sample.
- The paper reports a regime shift in quantum computation, where the exponent changes after experimental and algorithmic pathways became clearer.
- That quantum-computing shift is now split into a validation page for productivity-regime changes.

## Caveats

- The exponent measures publication output, not conceptual novelty, impact, or social value.
- Author counts and publication counts are sensitive to query design, author disambiguation, collaboration norms, and database coverage.
- Regime shifts can reflect funding, media attention, field definitions, or database artifacts rather than intrinsic productivity.
- Cross-field comparisons require care because publication practices and team sizes differ.

## Links

- [field population models](../methods/field_population_models.md)
- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field query corpus construction](../methods/field_query_corpus_construction.md)
- [productivity regime shift](../validations/productivity_regime_shift.md)
- [field saturation projection](../validations/field_saturation_projection.md)
- [cross-field SEIR benchmark](../validations/cross_field_seir_benchmark.md)
- [scientific apprenticeship latency](scientific_apprenticeship_latency.md)
- [idea reproductive number](idea_reproductive_number.md)
- [conceptual territory growth](conceptual_territory_growth.md)
- [papers-per-author distribution](papers_per_author_distribution.md)
- [field emergence](../mechanisms/field_emergence.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown]

## Metadata

- Concept ID: `publication_author_scaling_exponent`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Aliases: field productivity scaling exponent; publication-author power law; increasing returns field productivity; decreasing returns field productivity
