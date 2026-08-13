# Faculty retention and attrition

## Summary

Faculty retention and attrition describes how differential departure from tenure-track faculty positions changes the composition of academia after hiring and can amplify or dampen inequalities created by faculty placement.

## Canonical Form

- Unit of analysis: faculty member, department, university, field, cohort, doctorate origin, self-hire status, gender, or annual roster transition.
- Typical representation: retention indicator, attrition event, annual per-capita attrition risk, hazard model, or group-specific attrition ratio.
- Mechanism: unequal retention converts initial hiring differences into longer-term differences in faculty composition, prestige reproduction, and demographic representation.
- Empirical signature: higher attrition among groups already disadvantaged in faculty production, placement, or institutional status.

## Uses in Science of Science

- Adds a dynamic layer to [faculty hiring networks](../representations/faculty_hiring_networks.md), which are often observed cross-sectionally, using annual data such as a [faculty roster panel](../datasets/faculty_roster_panel.md).
- Explains how [faculty production inequality](../measures/faculty_production_inequality.md) can increase after hiring.
- Splits into mechanisms and measures such as [international-doctorate faculty attrition](international_doctorate_attrition.md), [doctoral-production-rank attrition gradient](doctoral_production_rank_attrition_gradient.md), [self-hire attrition premium](../measures/self_hire_attrition_premium.md), and [faculty gender demographic turnover](faculty_gender_demographic_turnover.md).
- Provides the component attrition process for [faculty hiring-attrition dynamic equilibrium](faculty_hiring_attrition_dynamic_equilibrium.md), where stable group shares can hide offsetting inflows and outflows.
- Connects [gender race stratification](gender_race_stratification.md), [scientific mobility](scientific_mobility.md), and [institutional prestige hierarchy](institutional_prestige_hierarchy.md).

- Later Wapman residual motifs separate [stale concurrent-employment record cleanup](../methods/stale_concurrent_employment_record_cleanup.md), [faculty analysis-denominator manifest](../methods/faculty_analysis_denominator_manifest.md), [roster attrition-event semantics](../validations/roster_attrition_event_semantics.md), and [prestige-conditioned cohort-flow attenuation](prestige_conditioned_cohort_flow_attenuation.md) from the broad attrition mechanism.
## Operationalization

- Build annual faculty rosters and identify new hires, retained faculty, and departures.
- Estimate attrition rates by field, domain, doctorate country, doctoral-production rank, self-hire status, gender, and prestige rank.
- Compare newly hired faculty with sitting faculty to separate hiring composition from post-hiring retention.
- Use event-history or logistic models when annual roster panels are available.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) annotates new hiring, retention, and attrition in a 2011-2020 panel of 295,089 U.S. tenure-track faculty.
- Wapman et al. find higher attrition among faculty trained outside the United States, Canada, or the United Kingdom, among faculty trained at universities that produce fewer faculty, and among self-hires.
- The paper shows that attrition can exacerbate production inequality because faculty trained at lower-producing universities leave at higher rates.
- Wapman et al. connect differential attrition to roughly unchanged group proportions, motivating [faculty hiring-attrition dynamic equilibrium](faculty_hiring_attrition_dynamic_equilibrium.md) as a flow interpretation of stable cross-sectional composition.
- Wapman et al. also show that apparent growth in women's representation is driven partly by [faculty gender demographic turnover](faculty_gender_demographic_turnover.md) among departing faculty, while women's representation among newly hired faculty is often flat or still below parity.

## Caveats

- Attrition from a roster is not always negative; it can include retirement, movement to another university, non-academic career moves, administrative appointments, death, or data coverage loss.
- Roster-based attrition needs careful distinction between true departure and changes in name, appointment, department, or data source.
- Differential attrition can reflect institutional climate, career opportunities, immigration status, family constraints, retirement age, or unobserved selection.

## Links

- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty roster panel](../datasets/faculty_roster_panel.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [faculty hiring-attrition dynamic equilibrium](faculty_hiring_attrition_dynamic_equilibrium.md)
- [faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md)
- [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)
- [self-hire attrition premium](../measures/self_hire_attrition_premium.md)
- [doctoral-production-rank attrition gradient](doctoral_production_rank_attrition_gradient.md)
- [international-doctorate faculty attrition](international_doctorate_attrition.md)
- [faculty gender demographic turnover](faculty_gender_demographic_turnover.md)
- [prestige-constrained faculty mobility](prestige_constrained_faculty_mobility.md)
- [institutional prestige hierarchy](institutional_prestige_hierarchy.md)
- [gender race stratification](gender_race_stratification.md)
- [scientific career impact](scientific_career_impact.md)
- [scientific mobility](scientific_mobility.md)

- [roster attrition-event semantics](../validations/roster_attrition_event_semantics.md)
- [prestige-conditioned cohort-flow attenuation](prestige_conditioned_cohort_flow_attenuation.md)
## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_retention_attrition`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Aliases: faculty attrition; academic retention; roster attrition; faculty departure risk
