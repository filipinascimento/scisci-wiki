# Appointment-status ascription check

## Summary

Appointment-status ascription check tests whether a prestigious appointment changes attention to pre-appointment work, separating status visibility from new research behavior.

## Canonical Form

- Unit of analysis: scientist, appointment event, pre-appointment paper, citation rate, attention trace, or evaluation outcome.
- Typical representation: event-study or pre/post citation-rate comparison for work produced before appointment.
- Validation target: determine whether a program effect reflects ascribed status rather than changed incentives, resources, or research choices.
- Empirical signature: if citations to pre-appointment papers jump after appointment, status visibility may explain part of the observed treatment effect.

## Uses in Science of Science

- Supplies a specific test inside [funding-program alternative-mechanism audit](funding_program_alternative_mechanism_audit.md).
- Connects [recognition-visibility coupling](../mechanisms/recognition_visibility_coupling.md) to program-evaluation designs.
- Helps interpret [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md) and [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md) without treating prestige as a nuisance only.
- Extends reputation models such as [reputation-effect citation model](../methods/reputation_effect_citation_model.md) into funding-program validation.

## Operationalization

- Identify papers produced before appointment or award announcement.
- Estimate citation-rate changes around appointment while controlling for paper age, field, journal, baseline citations, coauthors, and calendar time.
- Compare the event-study pattern with untreated but similar scientists.
- Treat a citation jump in old work as evidence of visibility/ascription, not evidence of immediate new scientific production.

## Evidence and Validations

- Verified full-text evidence from Azoulay, Graff Zivin, and Manso (2009) considers whether HHMI appointment prestige independently raises scientific achievements through exposure or ascription.
- The paper cites an anointment-effects test based on whether appointment shifts citation rates for articles written before appointment.
- Azoulay et al. report that those pre-appointment citation shifts are modest, making a pure status-benefit interpretation unlikely for their main results.
- The check therefore narrows but does not eliminate the broader status and recognition channel.

## Caveats

- Small pre-appointment citation shifts do not rule out status effects on future submissions, collaborations, trainees, or reviewer attention.
- Citation-rate event studies can be confounded by publicity, prize timing, journal issue timing, and field growth.
- Status may be part of the appointment treatment rather than an alternative mechanism to subtract mechanically.

## Links

- [funding-program alternative-mechanism audit](funding_program_alternative_mechanism_audit.md)
- [recognition-visibility coupling](../mechanisms/recognition_visibility_coupling.md)
- [reputation-effect citation model](../methods/reputation_effect_citation_model.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [HHMI-NIH incentive contrast](../methods/hhmi_nih_incentive_contrast.md)
- [status-authority evaluation bias](../mechanisms/status_authority_evaluation_bias.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `appointment_status_ascription_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: appointment anointment check; pre-appointment citation shift; status-ascription validation; prestige visibility falsification
