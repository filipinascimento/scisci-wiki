# Roster-gap false-departure imputation

## Summary

Roster-gap false-departure imputation repairs faculty roster panels by treating temporary disappearances followed by reappearance in the same department as data gaps rather than true departures.

## Canonical Form

- Unit of analysis: faculty-year record, department roster, disappearance spell, reappearance event, or attrition indicator.
- Typical representation: imputed retention record or corrected attrition flag.
- Method target: avoid inflating attrition rates because of missing or inconsistent annual roster coverage.
- Empirical signature: a small but measurable share of records or faculty have disappearance-reappearance patterns that can be repaired.

## Uses in Science of Science

- Improves [faculty roster panel](../datasets/faculty_roster_panel.md) reliability before estimating retention flows.
- Reduces measurement error in [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md).
- Supports [faculty hiring-attrition dynamic equilibrium](../mechanisms/faculty_hiring_attrition_dynamic_equilibrium.md) by keeping false exits from contaminating outflow rates.

## Operationalization

- Track faculty identities by department across annual roster snapshots.
- Identify cases where a faculty member disappears and later reappears in the same department.
- Reclassify the missing interval as a roster gap rather than a true departure when the rule is satisfied.
- Preserve a flag for imputed records and report the affected share.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) treats same-department disappearance and reappearance as spurious departure.
- The paper imputes these cases and reports effects on 1.3% of records and 4.7% of faculty.
- The rule directly reduces false attrition in longitudinal faculty-market analyses.

## Caveats

- Reappearance in the same department is strong evidence of a gap, but not all false departures are observable this way.
- Long gaps can mix true leave-and-return events with data errors.
- Imputation rules should be reported because they affect attrition and retention denominators.

## Links

- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)
- [faculty hiring-attrition dynamic equilibrium](../mechanisms/faculty_hiring_attrition_dynamic_equilibrium.md)
- [consistent department panel filter](../validations/consistent_department_panel_filter.md)
- [faculty new-hire window definition](faculty_new_hire_window_definition.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; SciSciNet: W4296907580; WoS: unknown]

## Metadata

- Concept ID: `roster_gap_false_departure_imputation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: false-departure imputation; roster gap repair; same-department reappearance correction; spurious faculty attrition repair
