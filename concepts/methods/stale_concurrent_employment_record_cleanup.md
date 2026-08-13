# Stale concurrent-employment record cleanup

## Summary

Treats same-year multi-university employment records as likely stale roster artifacts after moves, rather than true simultaneous faculty jobs.

## Canonical Form

- Unit of analysis: person-year employment record conflict.
- Typical representation: stale-employer flag and cleaned employment history.
- Method target: roster-panel correction for apparent concurrent appointments.
- Empirical signature: a prior employer remains listed after a move and creates implausible same-year multi-university employment.

## Uses in Science of Science

- Adds a roster-cleaning rule to [faculty roster panel](../datasets/faculty_roster_panel.md) workflows.
- Useful before measuring [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md) or mid-career moves.
- Connects endpoint sensitivity to primary-appointment inference.

## Operationalization

- Detect same-person same-year multi-university conflicts.
- Drop or flag stale employer-year records using move timing and appointment continuity rules.
- Retain an audit flag and sample true joint appointments for validation.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) removes a small share of employment records after identifying apparent stale prior-employer listings.
- The procedure shows that faculty roster panels need concurrency cleanup before transition analysis.

## Caveats

- True joint, visiting, or transition appointments can be misclassified.
- Over-cleaning can erase real mobility complexity.

## Links

- [Faculty roster panel](../datasets/faculty_roster_panel.md)
- [Mid-career move endpoint sensitivity](../validations/midcareer_move_endpoint_sensitivity.md)
- [Faculty primary-appointment inference](faculty_primary_appointment_inference.md)
- [Consistent department panel filter](../validations/consistent_department_panel_filter.md)
- [Faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `stale_concurrent_employment_record_cleanup`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: stale roster employment cleanup; concurrent faculty record cleanup; stale prior-employer artifact
