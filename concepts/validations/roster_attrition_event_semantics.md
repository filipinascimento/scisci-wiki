# Roster attrition-event semantics

## Summary

Defines attrition as all-cause disappearance from the observed tenure-track panel, not a known voluntary exit or career failure.

## Canonical Form

- Unit of analysis: faculty person-year panel exit.
- Typical representation: all-cause attrition event with unknown reason and censoring rules.
- Validation target: interpretation boundary for roster-based attrition measures.
- Empirical signature: departure from the observed panel is measured even when the reason is unknown.

## Uses in Science of Science

- Adds an event-semantics guardrail to [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md).
- Useful for separating observed roster exits from causal claims about career failure or institutional climate.
- Connects attrition measurement to roster-gap imputation.

## Operationalization

- Code last observed panel exit, censor the final observation year, count each person once, and keep reason unknown unless external data establish it.
- Report possible mechanisms such as retirement, termination, sector move, non-U.S. move, death, or frame exit.
- Use external follow-up data before interpreting event causes.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) states that attrition can include retirement, termination, leaving the sample frame, industry or government moves, non-U.S. moves, or death and that reasons are unavailable.
- This supports attrition-event semantics as a validation concept.

## Caveats

- The event mixes mechanisms that need follow-up data for causal interpretation.
- Panel disappearance can reflect data coverage loss, name change, or appointment reclassification.

## Links

- [Faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)
- [Faculty hiring-attrition dynamic equilibrium](../mechanisms/faculty_hiring_attrition_dynamic_equilibrium.md)
- [International-doctorate faculty attrition](../mechanisms/international_doctorate_attrition.md)
- [Self-hire attrition premium](../measures/self_hire_attrition_premium.md)
- [Roster-gap false-departure imputation](../methods/roster_gap_false_departure_imputation.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `roster_attrition_event_semantics`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: faculty attrition event semantics; roster exit interpretation boundary; all-cause faculty attrition
