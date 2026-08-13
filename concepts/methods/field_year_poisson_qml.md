# Field-year Poisson QML

## Summary

Field-year Poisson QML estimates treatment effects on sparse, skewed, non-negative field outcomes using a log-link count model with field fixed effects and robust inference.

## Canonical Form

- Unit of analysis: field-year, subfield-year, group-specific field-year, grant-flow count, or publication-flow count.
- Typical representation: conditional fixed-effects Poisson quasi-maximum likelihood model with event-time or difference-in-differences terms.
- Method target: estimate proportional changes in sparse field activity without dropping zero-count observations through log transforms.
- Empirical signature: exponentiated coefficients are interpreted as percentage changes in field activity.

## Uses in Science of Science

- Provides the main estimator for [superstar death event studies](superstar_death_event_study.md).
- Complements [overdispersed citation-breadth count models](overdispersed_citation_breadth_count_model.md) when the outcome is field activity rather than distinct-source breadth.
- Supports publication, funding, and subgroup outcomes from [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md).
- Offers a practical default for quasi-experimental panels with many zeros and skewed right tails.

## Operationalization

- Build a balanced or analyzable panel of field-year observations with non-negative outcomes.
- Include field fixed effects, calendar-year controls, field-age controls, and event indicators when the design requires them.
- Estimate a Poisson QML specification with a log link even when the true variance is not Poisson.
- Use robust standard errors and cluster at the treatment-assignment or shock level when field observations share a focal source.
- Convert coefficients to percentage changes with `100 * (exp(beta) - 1)` for interpretation.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) uses conditional fixed-effects Poisson QML because publication and NIH-grant outcomes are non-negative and skewed.
- The paper reports that 31.4% of subfield-year observations have no publication activity, and the zero share is higher for NIH grant counts.
- The main model includes subfield fixed effects, calendar-year controls, subfield-age controls, a common after-death term, and the treatment interaction.
- Standard errors are clustered around superstar scientists, matching the level at which treated and control subfields are organized.
- The authors report similar conclusions under alternate OLS and inverse-hyperbolic-sine specifications.

## Caveats

- Poisson QML identifies conditional mean effects, not a literal Poisson data-generating process.
- High-dimensional interactions can fail to converge in small or heavily split panels.
- Cluster choice should follow the treatment assignment and dependence structure, and spatial dependence in knowledge space can remain.

## Links

- [superstar death event study](superstar_death_event_study.md)
- [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md)
- [matched control subfield construction](matched_control_subfield_construction.md)
- [mortality-event pretrend validation](../validations/mortality_event_pretrend_validation.md)
- [overdispersed citation-breadth count model](overdispersed_citation_breadth_count_model.md)
- [journal fixed-effect citation model](journal_fixed_effect_citation_model.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `field_year_poisson_qml`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: conditional fixed-effects Poisson QML; field count panel model; subfield-year count model; Poisson quasi-maximum likelihood field panel
