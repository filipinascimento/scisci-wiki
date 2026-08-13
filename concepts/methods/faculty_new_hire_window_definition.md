# Faculty new-hire window definition

## Summary

Faculty new-hire window definition specifies how roster panels label new faculty hires when doctorate years and first observed employment years are both available.

## Canonical Form

- Unit of analysis: faculty member, degree year, first observed employment year, roster year, or hire cohort.
- Typical representation: degree-to-employment window or first-observed-year indicator.
- Method target: distinguish new entrants from incumbent faculty in aggregate and longitudinal faculty-market analyses.
- Empirical signature: new-hire shares depend on whether a degree-window or first-observed-year definition is used.

## Uses in Science of Science

- Provides the cohort-definition layer for [faculty roster panel](../datasets/faculty_roster_panel.md).
- Supports demographic and flow analyses such as [faculty gender demographic turnover](../mechanisms/faculty_gender_demographic_turnover.md).
- Reduces ambiguity in [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md) by distinguishing entry from continuing employment.

## Operationalization

- For aggregated analyses, label faculty as new hires if their degree occurred within a chosen window before first recorded employment.
- For longitudinal analyses, label only the first observed employment year as a new-hire event.
- Report the window length and whether degree-year data are required.
- Keep the distinction between entry-cohort and annual-flow definitions explicit.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) defines new hires in aggregated analyses as faculty whose degree occurred within four years of first recorded faculty employment.
- In longitudinal analyses, the paper labels only the first observed employment year as new.
- This split lets the study compare broad hiring cohorts while preserving annual transition logic.

## Caveats

- Degree-year windows can miss delayed entrants or postdoctoral transitions.
- First observed employment can reflect panel entry rather than true first faculty job.
- Hire definitions can affect demographic-turnover conclusions.

## Links

- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [faculty gender demographic turnover](../mechanisms/faculty_gender_demographic_turnover.md)
- [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)
- [faculty hiring-attrition dynamic equilibrium](../mechanisms/faculty_hiring_attrition_dynamic_equilibrium.md)
- [consistent department panel filter](../validations/consistent_department_panel_filter.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; SciSciNet: W4296907580; WoS: unknown]

## Metadata

- Concept ID: `faculty_new_hire_window_definition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: faculty hire cohort window; four-year new-hire rule; first-observed hire indicator; faculty entry-window definition
