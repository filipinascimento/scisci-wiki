# Self-hire attrition premium

## Summary

Self-hire attrition premium measures whether faculty employed by their doctoral university leave faculty rosters at higher rates than otherwise comparable non-self-hires.

## Canonical Form

- Unit of analysis: faculty member, self-hire status, annual roster transition, field, domain, or institution.
- Typical representation: self-hire attrition ratio, relative annual attrition risk, observed attrition rate by self-hire status, or field-specific attrition premium.
- Measurement target: retention difference associated with being hired by one's doctoral alma mater.
- Empirical signature: self-hires can be overrepresented in hiring networks yet also experience elevated attrition after hiring.

## Uses in Science of Science

- Splits a retention measure from [faculty self-hiring rates](faculty_self_hiring_rates.md).
- Adds a post-placement dynamic to [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md) and [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md).
- Connects local academic reproduction to [faculty roster panel](../datasets/faculty_roster_panel.md) transitions.
- Helps test whether self-hiring stabilizes local knowledge reproduction or instead marks a group with elevated departure risk.
- Feeds into [faculty hiring-attrition dynamic equilibrium](../mechanisms/faculty_hiring_attrition_dynamic_equilibrium.md), because persistent self-hire shares can reflect offsetting hiring and attrition flows.

## Operationalization

- Mark self-hires where doctoral university equals faculty employer.
- Use annual roster comparisons to classify attrition events for self-hires and non-self-hires.
- Compute relative annual attrition risk by field, domain, cohort, gender, and prestige tier.
- Compare observed self-hire attrition with non-self-hires and report multiple-testing correction for field-level comparisons.
- Separate retirement-age departures, true moves, data losses, and exits where possible.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) reports that self-hires are at greater risk of attrition than non-self-hires.
- In academia overall, self-hires leave at 1.2-fold the rate of other faculty, with similarly elevated rates across all eight domains and in 36 of 107 fields.
- Wapman et al. report the largest relative self-hire attrition rates in Criminal Justice and Criminology and Industrial Engineering, at 1.9- and 1.8-fold the rate of other faculty.
- The paper notes that Nursing is the only field in which the relative self-hire attrition rate is significantly below 1.0.
- Wapman et al. argue that because self-hiring is ubiquitous and attrition rates differ, understanding the causes of self-hire attrition would have broad impact.

## Caveats

- Self-hire attrition may reflect retirement, local promotion structures, labor-market options, institutional climate, or data coverage rather than self-hiring itself.
- Alma-mater matching depends on institution normalization across campuses, schools, and hospitals.
- Elevated attrition does not imply that self-hiring caused departure without controls for field, cohort, rank, prestige, gender, and doctorate origin.
- Roster-based attrition needs manual or administrative validation when causal interpretation matters.

## Links

- [faculty self-hiring rates](faculty_self_hiring_rates.md)
- [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)
- [faculty hiring-attrition dynamic equilibrium](../mechanisms/faculty_hiring_attrition_dynamic_equilibrium.md)
- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [faculty gender demographic turnover](../mechanisms/faculty_gender_demographic_turnover.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `self_hire_attrition_premium`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Aliases: self-hire attrition ratio; self-hiring departure premium; alma-mater hire attrition; self-loop attrition risk
