# Author-level output reallocation check

## Summary

Author-level output reallocation check tests whether field-specific entry reflects new aggregate scientific output or a shift of the same authors' effort away from other agendas.

## Canonical Form

- Unit of analysis: entrant author, author-year, field-specific output, total output, grant output, or event-time path.
- Typical representation: author-level difference-in-differences or event-study model comparing total output around a field shock.
- Validation target: prevent field-level gains from being mistaken for aggregate productivity gains.
- Empirical signature: focal-field output rises while total author output is flat, implying reallocation across fields.

## Uses in Science of Science

- Adds a welfare and interpretation check to [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md).
- Complements [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md), which is measured at the subfield level.
- Helps distinguish field rejuvenation from system-level growth in [superstar death event studies](../methods/superstar_death_event_study.md).
- Provides a reusable check for funding, policy, mobility, or platform shocks that move researchers across topics.

## Operationalization

- Identify authors who increase activity in the treated field after the event.
- Construct author-year histories of total publications, grants, or other output across all fields.
- Estimate an author-level panel model around the treated event date, using comparable control authors when possible.
- Compare focal-field output changes with total output changes.
- Interpret flat total output as displacement or reallocation, not as a failure of field-level renewal.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) examines total output by related non-collaborator authors after star deaths.
- The paper reports that non-collaborators do not increase overall publication output or NIH grant output even though they contribute more inside the deceased star's subfields.
- Dynamic author-level graphs similarly show no clear expansion or contraction in total output after the event.
- The authors interpret the field-level gains as coming at least partly at the expense of entrants' previous agendas.
- This check motivates caution in welfare claims about whether star death increases aggregate scientific progress.

## Caveats

- Total output counts do not measure idea quality, social value, clinical translation, or long-run career effects.
- Reallocation can still be welfare-improving if entrants move effort toward more valuable problems.
- Author-level matching and database coverage affect the ability to see work outside the focal field.

## Links

- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [intellectual rejuvenation decomposition](../measures/intellectual_rejuvenation_decomposition.md)
- [collaborator/non-collaborator field flow](../measures/collaborator_noncollaborator_field_flow.md)
- [superstar death event study](../methods/superstar_death_event_study.md)
- [circle of academic life](../mechanisms/circle_of_academic_life.md)
- [life-science generalizability boundary](life_science_generalizability_boundary.md)

## References

- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `author_level_output_reallocation_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2019) (2019)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.1257/aer.20161574`
- OpenAlex ID: `W2193631239`
- Dimensions ID: `pub.1120042002`
- SciSciNet ID: `W2193631239`
- Aliases: output displacement check; entrant reallocation validation; aggregate output check; author-level welfare caveat
