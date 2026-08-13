# Cross-field SEIR benchmark

## Summary

Cross-field SEIR benchmark validates a field-population model by fitting the same coarse-grained framework across multiple specialties with different historical trajectories.

## Canonical Form

- Unit of analysis: field case study, author-count trajectory, fitted SEIR model, parameter table, or disciplinary cluster.
- Typical representation: side-by-side fitted trajectories and parameter estimates for several fields.
- Validation target: show that a field-growth model is not tailored to one specialty or one curve shape.
- Empirical signature: the same model fits logistic, approximately linear, delayed-takeoff, theoretical, biomedical, and technological field histories.

## Uses in Science of Science

- Tests generality of [scientific SEIR contact model](../methods/scientific_seir_contact_model.md) and [field population models](../methods/field_population_models.md).
- Helps interpret whether fitted parameters have domain-plausible patterns across field types.
- Connects model validation to [field query corpus construction](../methods/field_query_corpus_construction.md), because every benchmark case depends on a field-boundary query.
- Provides a template for later benchmarks using Dimensions, OpenAlex, or other updated data.

## Operationalization

- Construct comparable author-publication time series for several fields.
- Fit the same model family to each field using a common parameter-estimation workflow.
- Report fit quality, confidence intervals, and parameter estimates.
- Check whether parameter differences align with independent field history, such as theoretical versus experimental organization or funding shocks.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) fits the same SEIR-inspired model to six emergent fields.
- The benchmark includes cosmological inflation, cosmic strings, prions and scrapie, H5N1 influenza, carbon nanotubes, and quantum computing.
- The paper reports good fits across fields that differ in size, discipline, theoretical or experimental character, and curve shape.
- Bettencourt et al. argue that the benchmark supports broad applicability while also noting that alternative specifications and richer historical data may be needed for some cases.

## Caveats

- A cross-field fit benchmark validates descriptive flexibility, not causal truth.
- Field-query construction and database coverage can differ across cases.
- Good aggregate fits can mask incorrect micro-mechanisms or nonidentifiable parameters.
- Benchmarks should be repeated on newer snapshots when studying recent fields.

## Links

- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field population models](../methods/field_population_models.md)
- [field saturation projection](field_saturation_projection.md)
- [contact effectiveness by research modality](../mechanisms/contact_effectiveness_by_research_modality.md)
- [stochastic ensemble parameter fitting](../methods/stochastic_ensemble_parameter_fitting.md)
- [field query corpus construction](../methods/field_query_corpus_construction.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md)
- [productivity regime shift](productivity_regime_shift.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `cross_field_seir_benchmark`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: multi-field SEIR validation; field-growth model benchmark; emergent-field case benchmark; cross-specialty population-model validation
