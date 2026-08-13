# Productivity regime shift

## Summary

Productivity regime shift detects a change in the publication-author scaling relationship that coincides with historical changes in a field's technical, funding, or recruitment environment.

## Canonical Form

- Unit of analysis: field-year, publication-author scaling segment, historical event, or fitted productivity exponent.
- Typical representation: piecewise scaling exponents before and after a breakpoint, often in `Delta publications` versus `Delta authors` space.
- Validation target: distinguish stable field productivity scaling from periods where the field enters a new growth regime.
- Empirical signature: a slope change aligns with technical breakthroughs, funding shifts, media attention, or recruitment activation.

## Uses in Science of Science

- Extends [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md) from a single field-level estimate to a time-varying diagnostic.
- Links productivity scaling to [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md) and [field emergence](../mechanisms/field_emergence.md).
- Helps avoid averaging across qualitatively different stages of a field.
- Provides a validation target for historical interpretation of fitted field-growth parameters.

## Operationalization

- Estimate publication-author scaling over the full field history and candidate subperiods.
- Test whether a piecewise slope meaningfully improves the fit.
- Align candidate breakpoints with independent historical evidence such as technical demonstrations, major algorithms, funding programs, or review milestones.
- Report both pre- and post-shift exponents and the uncertainty around the breakpoint.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) reports a clear transition in quantum computing productivity scaling.
- The paper estimates `alpha = 1.00` for smaller yearly new-author pools and `alpha = 1.37` once yearly new authors reach about 1000.
- Bettencourt et al. connect this shift to the mid-1990s emergence of experimental and algorithmic paths in quantum computing.
- The same paper notes consistency between this scaling shift and a field-population model in which susceptible recruitment is switched on around 1990.

## Caveats

- Apparent regime shifts can be produced by query changes, database expansion, or author-disambiguation artifacts.
- A historical event aligned with a breakpoint is not by itself causal evidence.
- Scaling shifts should be interpreted with field-specific publication norms and collaboration growth.

## Links

- [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md)
- [scientific field recruitment rate](../measures/scientific_field_recruitment_rate.md)
- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [cross-field SEIR benchmark](cross_field_seir_benchmark.md)
- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field emergence](../mechanisms/field_emergence.md)
- [conceptual territory growth](../measures/conceptual_territory_growth.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `productivity_regime_shift`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: scaling-regime shift; field productivity breakpoint; publication-author slope shift; quantum-computing productivity transition
