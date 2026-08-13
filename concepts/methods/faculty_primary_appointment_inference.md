# Faculty primary-appointment inference

## Summary

Faculty primary-appointment inference assigns each faculty member a main department or unit when roster data contain multiple appointments or incomplete appointment signals.

## Canonical Form

- Unit of analysis: faculty member, appointment record, department, promotion event, or roster year.
- Typical representation: primary appointment flag, excluded ambiguous appointment, or rule-based inferred primary unit.
- Method target: avoid double-counting faculty in field, department, and hiring-network analyses.
- Empirical signature: a small share of faculty cannot be assigned or are classified as having non-primary appointments.

## Uses in Science of Science

- Supports [faculty roster panel](../datasets/faculty_roster_panel.md) construction by turning multiple appointment records into analyzable person-unit records.
- Provides the person-level base for [faculty field-multilabel assignment](faculty_field_multilabel_assignment.md).
- Stabilizes [faculty hiring networks](../representations/faculty_hiring_networks.md) by making departmental placement edges explicit.

## Operationalization

- Identify whether a faculty member appears in one or multiple departments.
- Use single observed appointments as primary by default.
- Use promotion timing or department-update metadata to infer a primary unit when multiple appointments exist.
- Exclude or mark cases where a primary appointment cannot be inferred.
- Record the share of excluded or non-primary appointments.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) infers primary appointments from single observed appointments and promotion-update timing.
- The paper reports that 1.2% of faculty could not be assigned a primary appointment and 5.5% of appointments were non-primary.
- This inference rule supports field- and department-level analyses without counting the same person as multiple primary faculty members.

## Caveats

- Primary appointment rules can obscure legitimate interdisciplinary or joint appointments.
- Promotion timing may not reliably indicate appointment salience in all universities.
- Excluded ambiguous appointments can be nonrandom across fields, ranks, or institutional types.

## Links

- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [faculty field-multilabel assignment](faculty_field_multilabel_assignment.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty hiring network union aggregation](faculty_hiring_network_union_aggregation.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; SciSciNet: W4296907580; WoS: unknown]

## Metadata

- Concept ID: `faculty_primary_appointment_inference`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: primary faculty appointment rule; faculty main-department inference; primary-unit assignment; multiple-appointment resolution
