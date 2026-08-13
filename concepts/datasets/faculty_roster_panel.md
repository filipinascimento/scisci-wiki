# Faculty roster panel

## Summary

Faculty roster panel is a longitudinal dataset of faculty appointments annotated with doctoral origin, field, rank, gender, hiring events, retention, and attrition.

## Canonical Form

- Unit of analysis: faculty member, annual roster record, department, university, field, domain, or appointment transition.
- Typical representation: person-year panel, new-hire indicator, retained-faculty indicator, attrition event, doctoral institution, doctorate year, rank, and demographic annotations.
- Data target: connect cross-sectional faculty hiring networks to dynamic faculty composition and retention.
- Empirical signature: roster transitions reveal how hiring, retention, and attrition reshape the professoriate after initial placement.

## Uses in Science of Science

- Supplies the data layer for [faculty hiring networks](../representations/faculty_hiring_networks.md), [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md), and [faculty gender demographic turnover](../mechanisms/faculty_gender_demographic_turnover.md).
- Supports measures such as [faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md), [faculty production inequality](../measures/faculty_production_inequality.md), and [self-hire attrition premium](../measures/self_hire_attrition_premium.md).
- Enables [faculty hiring-attrition dynamic equilibrium](../mechanisms/faculty_hiring_attrition_dynamic_equilibrium.md) by measuring group shares, incoming hires, retained faculty, and departures in the same longitudinal frame.
- Lets [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) be studied dynamically rather than only through a static placement graph.
- Provides a panel frame for auditing [gendered faculty placement gap](../mechanisms/gendered_faculty_placement_gap.md), non-U.S. doctorate attrition, self-hiring, and prestige-related retention.

## Operationalization

- Assemble annual faculty rosters from a stable source with department and appointment identifiers.
- Harmonize faculty names, institutions, departments, fields, domains, and doctoral universities.
- Use [faculty field-multilabel assignment](../methods/faculty_field_multilabel_assignment.md) when departments legitimately belong to multiple fields.
- Annotate doctorate year, faculty rank, gender where available, and doctorate country.
- Compare adjacent years to classify new hires, retained faculty, and attritions.
- Keep field assignments and multiple-appointment rules explicit to avoid double-counting in field or domain aggregations.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) studies tenure-track faculty employed from 2011 to 2020 at 368 U.S. PhD-granting universities.
- The paper reports 295,089 faculty in 10,612 departments, annotated by doctoral university, doctorate year, faculty rank, and gender.
- Wapman et al. organize departments into 107 fields and eight domains, hand-check field labels, restrict multi-department faculty to primary appointments, and manually annotate doctoral-university country.
- The paper uses self-reported faculty gender when available and otherwise applies name-gender annotation, obtaining gender annotations for 85% of records while keeping unannotated faculty in non-gender analyses.
- By comparing adjacent years, Wapman et al. annotate new hiring, retention, and attrition, enabling dynamic analyses of production inequality, gender representation, international doctorate attrition, and self-hire attrition.
- Additional Wapman et al. data-construction motifs now split out [faculty primary-appointment inference](../methods/faculty_primary_appointment_inference.md), [roster-gap false-departure imputation](../methods/roster_gap_false_departure_imputation.md), [faculty new-hire window definition](../methods/faculty_new_hire_window_definition.md), and [consistent department panel filter](../validations/consistent_department_panel_filter.md).

## Caveats

- Roster panels can miss non-tenure-track, adjunct, research-only, industry, government, and international career paths.
- Attrition from a roster can mean retirement, movement, data loss, death, or exit from tenure-track employment.
- Name-based gender annotation is incomplete and binary in Wapman et al.'s implementation.
- Multiple appointments, changing department names, and field assignment rules can change panel counts and field-specific networks.

## Links

- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty field-multilabel assignment](../methods/faculty_field_multilabel_assignment.md)
- [faculty primary-appointment inference](../methods/faculty_primary_appointment_inference.md)
- [roster-gap false-departure imputation](../methods/roster_gap_false_departure_imputation.md)
- [faculty new-hire window definition](../methods/faculty_new_hire_window_definition.md)
- [consistent department panel filter](../validations/consistent_department_panel_filter.md)
- [field coherence inclusion threshold](../validations/field_coherence_inclusion_threshold.md)
- [faculty hiring network union aggregation](../methods/faculty_hiring_network_union_aggregation.md)
- [faculty retention and attrition](../mechanisms/faculty_retention_attrition.md)
- [faculty hiring-attrition dynamic equilibrium](../mechanisms/faculty_hiring_attrition_dynamic_equilibrium.md)
- [faculty gender demographic turnover](../mechanisms/faculty_gender_demographic_turnover.md)
- [faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)
- [self-hire attrition premium](../measures/self_hire_attrition_premium.md)
- [gendered faculty placement gap](../mechanisms/gendered_faculty_placement_gap.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_roster_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Aliases: faculty census panel; academic roster panel; tenure-track faculty panel; faculty employment panel
