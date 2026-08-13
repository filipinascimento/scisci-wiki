# Field saturation projection

## Summary

Field saturation projection uses a fitted field-population model to estimate whether an emerging specialty is approaching a plateau, still expanding, or entering a new growth regime.

## Canonical Form

- Unit of analysis: scientific field, author-count trajectory, publication-count trajectory, fitted population model, or forecast horizon.
- Typical representation: fitted cumulative-author curve, saturation interval, confidence band, or near-future extrapolation.
- Validation target: distinguish ongoing expansion from slowing recruitment or topic saturation.
- Empirical signature: the fitted active-author or cumulative-author trajectory bends toward a plateau, while alternative fields remain approximately linear or exponential.

## Uses in Science of Science

- Adds a forecasting layer to [field population models](../methods/field_population_models.md) and [scientific SEIR contact model](../methods/scientific_seir_contact_model.md).
- Complements [productivity regime shift](productivity_regime_shift.md) by distinguishing population saturation from a change in publication-author productivity.
- Helps science policy and portfolio analysis ask whether a specialty is expanding, maturing, or losing entrant momentum.

## Operationalization

- Build field author-publication time series with documented query and disambiguation rules.
- Fit a logistic, SEIR, or comparable field-population model and inspect the projected author-count trajectory.
- Report uncertainty bands and compare with historical events, funding changes, competing fields, and recent data not used in fitting.
- Treat saturation projections as hypotheses unless validated prospectively or with out-of-sample periods.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) fits population models to six emerging fields and discusses whether each shows signs of saturation.
- The paper reports that prions and scrapie show signs of saturation, H5N1 influenza shows no saturation in the observed period, and carbon nanotubes and quantum computing are projected to approach some saturation over the following decade.
- Bettencourt et al. caution that alternative models or more detailed historical data may be needed, especially for cases with unusual growth such as cosmological inflation and quantum computing.

## Caveats

- Saturation can be an artifact of query boundaries, database lag, author disambiguation, or field renaming.
- Policy, funding, instruments, or breakthroughs can reopen a field after an apparent plateau.
- Forecasts should not be treated as deterministic evaluation signals without prospective validation.

## Links

- [field population models](../methods/field_population_models.md)
- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [cross-field SEIR benchmark](cross_field_seir_benchmark.md)
- [productivity regime shift](productivity_regime_shift.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [field emergence](../mechanisms/field_emergence.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `field_saturation_projection`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: specialty saturation forecast; field plateau projection; author-growth saturation; topic maturation forecast
