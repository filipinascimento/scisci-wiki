# Faculty analysis-denominator manifest

## Summary

Documents the denominator for each analysis because gender, production, prestige, field, domain, and longitudinal claims use different eligibility rules.

## Canonical Form

- Unit of analysis: result, analysis table, or figure panel.
- Typical representation: eligibility manifest with degree status, origin, gender annotation, coverage rule, field/domain inclusion, and `n`.
- Method target: denominator transparency across faculty-system analyses.
- Empirical signature: each reported claim can be traced to its eligible faculty universe.

## Uses in Science of Science

- Adds denominator discipline to [faculty roster panel](../datasets/faculty_roster_panel.md) analyses.
- Useful when one paper mixes production, retention, gender, prestige, and longitudinal panels.
- Connects faculty hiring networks to evaluated data transparency.

## Operationalization

- Attach per-result eligibility fields for degree status, origin, gender annotation, field/domain inclusion, coverage rule, time window, and sample size.
- State whether analyses include non-doctorate faculty, U.S.-doctorate-only faculty, all-year departments, or field-rankable networks.
- Prevent cross-result comparisons unless denominators align.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) uses different denominators for gender analyses, prestige and production analyses, and longitudinal analyses requiring all-year coverage.
- The paper therefore motivates explicit denominator manifests.

## Caveats

- Cross-result comparisons are easy to misread without denominator disclosure.
- A compact manifest may hide complex inclusion rules unless linked to code.

## Links

- [Faculty roster panel](../datasets/faculty_roster_panel.md)
- [Faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md)
- [Faculty gender demographic turnover](../mechanisms/faculty_gender_demographic_turnover.md)
- [Field coherence inclusion threshold](../validations/field_coherence_inclusion_threshold.md)
- [Faculty hiring networks](../representations/faculty_hiring_networks.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_analysis_denominator_manifest`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: faculty denominator manifest; roster analysis eligibility table; faculty-system denominator disclosure
