# Faculty self-hiring rates

## Summary

Faculty self-hiring rates measure how often faculty are employed by the same university or department where they received their doctorate, usually represented as self-loops in faculty hiring networks.

## Canonical Form

- Unit of analysis: faculty member, institution, department, field, domain, cohort, or hiring-network self-loop.
- Typical representation: self-hire share, self-loop count, observed-to-null self-hiring ratio, prestige-stratified self-hire rate, or self-hire attrition ratio.
- Measurement target: internal faculty reproduction and restricted circulation of people, ideas, and local institutional norms.
- Empirical signature: self-hiring rates above network null expectations, with variation by field, prestige, gender, and attrition.

## Uses in Science of Science

- Adds a self-loop measure to [faculty hiring networks](../representations/faculty_hiring_networks.md).
- Connects [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) to [scientific mobility](../mechanisms/scientific_mobility.md), [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md), and [self-hire attrition premium](self_hire_attrition_premium.md).
- Provides a measurable form of local academic reproduction that can interact with [gender race stratification](../mechanisms/gender_race_stratification.md).

## Operationalization

- Mark a faculty member as a self-hire when doctoral institution equals faculty employer under the chosen institution-name resolution.
- Compute self-hire rates by field, domain, institution prestige rank, faculty cohort, gender, and country of doctorate.
- Compare observed self-hiring against [faculty hiring null models](../methods/faculty_hiring_null_models.md) preserving institution outflow and inflow in the hiring network.
- Estimate retention or attrition separately for self-hires and non-self-hires.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) represents self-hires as self-loops in field-level faculty hiring networks.
- Wapman et al. report that self-hiring rates are consistently greater than expected under a network null model that preserves faculty production and hiring totals.
- The same paper finds that women are self-hired at higher rates than men in the overall data, with field-level differences concentrated in a minority of fields, especially Medicine and Health.
- Wapman et al. also report that self-hires leave at higher rates than other faculty in academia overall and in many fields, making self-hiring both a placement and retention motif.

## Caveats

- Self-hiring can mean very different things in fields with small labor markets, clinical tracks, arts training, or local professional pipelines.
- Institution-name harmonization matters because campuses, schools, hospitals, and departments may have ambiguous boundaries.
- High self-hiring is not proof of poor quality, but it is a useful signal for mobility, diversity, and knowledge-flow audits.

## Links

- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty hiring null models](../methods/faculty_hiring_null_models.md)
- [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)
- [self-hire attrition premium](self_hire_attrition_premium.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [gender race stratification](../mechanisms/gender_race_stratification.md)
- [faculty production inequality](faculty_production_inequality.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_self_hiring_rates`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Aliases: self-hiring; academic inbreeding; faculty self-loops; doctoral alma mater hiring
