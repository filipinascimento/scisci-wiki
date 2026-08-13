# Doctoral-department unobserved self-hire upper bound

## Summary

Doctoral-department unobserved self-hire upper bound is the measurement caveat that university-level doctoral origin can overstate department-level self-hiring when doctoral departments are not observed.

## Canonical Form

- Unit of analysis: faculty hire, doctoral university, hiring department, doctoral department, or self-hire edge.
- Typical representation: upper-bound self-hire estimate based on shared university rather than shared department.
- Validation target: clarify what self-hiring rates mean when doctoral department data are unavailable.
- Empirical signature: self-hiring is observed at the university level, but true same-department hiring may be lower.

## Uses in Science of Science

- Refines interpretation of [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md).
- Adds a measurement-bound caveat to [faculty hiring networks](../representations/faculty_hiring_networks.md).
- Interacts with [faculty field-multilabel assignment](../methods/faculty_field_multilabel_assignment.md) when field and department are not equivalent.

## Operationalization

- Identify whether doctoral institution and doctoral department are both available.
- If only doctoral university is known, label same-university hires as university-level self-hires.
- State that department-level self-hiring is bounded above by the same-university rate.
- Avoid interpreting university-level self-hire rates as exact same-department rates.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) notes that doctoral universities are observed but doctoral departments are not.
- The paper therefore treats self-hiring estimates as upper bounds on department-level self-hiring.
- This caveat is important because faculty-market closure can operate differently at university and department levels.

## Caveats

- University-level self-hiring can still be substantively meaningful.
- Department-level self-hiring may be much lower in universities with many strong departments.
- The upper-bound interpretation depends on accurate doctoral-university identification.

## Links

- [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty field-multilabel assignment](../methods/faculty_field_multilabel_assignment.md)
- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [self-hire attrition premium](../measures/self_hire_attrition_premium.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; SciSciNet: W4296907580; WoS: unknown]

## Metadata

- Concept ID: `doctoral_department_unobserved_self_hire_upper_bound`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: department-level self-hire upper bound; unobserved doctoral department caveat; university-level self-hire bound; self-hiring measurement upper bound
