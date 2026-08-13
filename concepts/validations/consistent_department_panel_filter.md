# Consistent department panel filter

## Summary

Consistent department panel filter restricts faculty-market analyses to departments observed for enough years to support stable hiring, retention, and attrition estimates.

## Canonical Form

- Unit of analysis: department, university, field, roster year, or observation window.
- Typical representation: inclusion rule based on majority-year or all-year department observation.
- Validation target: reduce sample-frame instability in longitudinal faculty roster panels.
- Empirical signature: records, faculty, departments, or universities are removed when observation coverage is insufficient.

## Uses in Science of Science

- Audits the longitudinal frame behind [faculty roster panel](../datasets/faculty_roster_panel.md).
- Supports valid estimates of [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md).
- Keeps [faculty field-multilabel assignment](../methods/faculty_field_multilabel_assignment.md) from being confounded by intermittent department coverage.

## Operationalization

- Define the required number or share of years a department must be observed.
- Apply the rule before longitudinal hiring, retention, or attrition analyses.
- Report how many records, faculty, departments, and universities are excluded.
- Compare sensitive results under weaker and stricter panel-consistency filters.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) excludes departments that are not observed for enough years.
- The paper uses majority-year and all-year filters and reports their effects on records, faculty, departments, and universities.
- These filters stabilize longitudinal analyses of faculty movement and attrition.

## Caveats

- Strict panel filters can drop newer, smaller, or reorganized departments.
- Consistent observation does not guarantee complete within-department roster accuracy.
- Results should note whether they refer to the full roster or a consistency-filtered panel.

## Links

- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)
- [faculty field-multilabel assignment](../methods/faculty_field_multilabel_assignment.md)
- [roster-gap false-departure imputation](../methods/roster_gap_false_departure_imputation.md)
- [faculty new-hire window definition](../methods/faculty_new_hire_window_definition.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; SciSciNet: W4296907580; WoS: unknown]

## Metadata

- Concept ID: `consistent_department_panel_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: faculty panel consistency filter; observed-department inclusion rule; majority-year department filter; all-year department filter
