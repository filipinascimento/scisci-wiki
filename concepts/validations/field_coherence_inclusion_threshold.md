# Field coherence inclusion threshold

## Summary

Field coherence inclusion threshold restricts field-level faculty-market analyses to fields with enough institutional coverage or faculty count to support meaningful prestige and production estimates.

## Canonical Form

- Unit of analysis: field, university coverage share, eligible faculty count, hiring network, or prestige-rank analysis.
- Typical representation: minimum coverage or minimum-size inclusion rule.
- Validation target: ensure that field-specific faculty hiring networks are sufficiently coherent and observed.
- Empirical signature: fields below coverage or count thresholds are excluded from field-level analyses.

## Uses in Science of Science

- Validates field-specific use of [faculty field-multilabel assignment](../methods/faculty_field_multilabel_assignment.md).
- Supports stable [faculty hiring networks](../representations/faculty_hiring_networks.md) and [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md).
- Helps distinguish real field differences from sparse-sample artifacts.

## Operationalization

- Define the university-coverage threshold for a field.
- Define an alternative minimum eligible-faculty threshold.
- Include fields that satisfy at least one threshold.
- Report excluded fields and the rationale for the threshold.
- Reassess thresholds if the faculty census or field taxonomy changes.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) requires field-level analyses to have either 25% university coverage or at least 500 eligible faculty.
- The paper frames this as a way to ensure coherent production and prestige analyses.
- The rule prevents small or weakly observed fields from dominating field-level conclusions.

## Caveats

- Thresholds can exclude small but substantively important fields.
- Coverage quality is not identical to faculty count.
- Threshold choices should be treated as design assumptions and checked in sensitivity analyses.

## Links

- [faculty field-multilabel assignment](../methods/faculty_field_multilabel_assignment.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md)
- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [consistent department panel filter](consistent_department_panel_filter.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; SciSciNet: W4296907580; WoS: unknown]

## Metadata

- Concept ID: `field_coherence_inclusion_threshold`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: field inclusion threshold; coherent-field coverage rule; faculty field coverage threshold; field-level sample-size filter
