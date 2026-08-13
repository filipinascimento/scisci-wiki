# Mortality-event pretrend validation

## Summary

Mortality-event pretrend validation checks whether treated and control fields were already diverging before a scientist-death event, and whether results are robust to stronger-exogeneity subsets such as sudden deaths.

## Canonical Form

- Unit of analysis: treated subfield, control subfield, field-year, event-time coefficient, or cause-of-death subset.
- Typical representation: event-study leads and lags around actual or counterfactual death dates.
- Validation target: rule out pre-existing divergence as the explanation for post-event field changes.
- Empirical signature: pre-event coefficients are near zero or non-systematic, while post-event coefficients move after the shock.

## Uses in Science of Science

- Provides the identification check for [superstar death event studies](../methods/superstar_death_event_study.md).
- Separates event-driven field change from field life-cycle decline or growth.
- Complements matched control construction in the [deceased superstar life-scientist panel](../datasets/deceased_superstar_life_scientist_panel.md).
- Supplies a validation template for policy shocks, deaths, retirements, institutional closures, and abrupt funding changes.

## Operationalization

- Assign event time to treated subfields using actual scientist death year and to control subfields using counterfactual death year inherited from the matched treated field.
- Estimate dynamic treatment effects using event-time indicators before and after the event.
- Plot or tabulate pre-event leads for total activity, collaborator activity, non-collaborator activity, and funding flows.
- Re-estimate the event path separately for sudden and anticipated deaths.
- Interpret sudden deaths as stronger exogeneity evidence, while still checking that anticipated-death paths are not driving the result.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) reports similar treated/control publication trajectories before star death, even though matching did not use the publication outcomes.
- The paper's event-study graphs show no discernible evidence of an effect in the years leading up to death for total, collaborator, or non-collaborator publication activity.
- The authors split non-collaborator event studies by sudden versus anticipated deaths; both show post-event increases, with anticipated deaths displaying more pre-event variability but no monotonic pretrend.
- This validation supports interpreting the post-death non-collaborator increase as an event response rather than a continuation of prior divergence.

## Caveats

- No-pretrend evidence is not proof of random assignment; latent shocks can remain hidden if they do not affect measured pre-period outcomes.
- Anticipated deaths may involve succession planning or changes before the formal event date.
- Power can fall in cause-of-death subsamples, especially for high-dimensional field-year outcomes.

## Links

- [superstar death event study](../methods/superstar_death_event_study.md)
- [deceased superstar life-scientist panel](../datasets/deceased_superstar_life_scientist_panel.md)
- [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [scisci quasi-experimental policy evaluation](scisci_quasi_experimental_policy_evaluation.md)
- [mobility policy shock evaluation](mobility_policy_shock_evaluation.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `mortality_event_pretrend_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: death-event pretrend check; sudden-death robustness; mortality event-study validation; no-pretrend death design
