# GlobSci cross-sectional snapshot limit

## Summary

GlobSci cross-sectional snapshot limit is the caveat that the GlobSci survey observes active scientists at one time point, so it cannot directly compare mobility cohorts or estimate longitudinal mobility dynamics.

## Canonical Form

- Unit of analysis: survey respondent, field, origin-destination pair, cohort, or observation year.
- Typical representation: cross-sectional limitation flag, cohort-comparison caveat, or temporal-coverage note.
- Validation target: prevent cross-sectional mobility tables from being interpreted as panel dynamics.
- Empirical signature: active scientists are observed in one survey window, while entry, exit, and cohort trajectories remain unobserved.

## Uses in Science of Science

- Qualifies analyses based on the [GlobSci survey](../datasets/globsci_survey.md).
- Separates cross-sectional [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md) evidence from longitudinal career-flow evidence.
- Connects to [mobility entry-cohort windows](../methods/mobility_entry_cohort_window.md) when comparing generations of scientists.
- Helps policy analyses avoid attributing age, cohort, and period effects from a single snapshot.

## Operationalization

- Mark GlobSci-derived estimates as cross-sectional unless linked to follow-up waves or external longitudinal records.
- Avoid comparing respondent age groups as if they were observed cohorts unless cohort assumptions are stated.
- Use the survey for prevalence, origin-destination structure, and stated motivations at the sampled time.
- Combine with panel bibliometric or administrative data before estimating mobility timing, return hazards, or cohort trends.
- Report field, country, and publication-frame restrictions together with the snapshot limitation.

## Evidence and Validations

- Verified full-text evidence from Franzoni, Scellato, and Stephan (2012) states that GlobSci provides only a snapshot of scientists active in 2009.
- The same limitation section says the survey cannot be used to compare cohorts of scientists over time.
- This caveat is separate from field and country coverage limits: it concerns temporal inference even when the sampled countries and fields are accepted.

## Caveats

- Snapshot prevalence can still be policy-relevant for current workforce composition.
- Retrospective questions about past international experience add limited history but do not replace panel observation.
- Linking GlobSci to external records may introduce matching and survival biases.

## Links

- [GlobSci survey](../datasets/globsci_survey.md)
- [core-country scientist panel](../datasets/core_country_scientist_panel.md)
- [mobility entry-cohort window](../methods/mobility_entry_cohort_window.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; SciSciNet: W1965663941; WoS: unknown]

## Metadata

- Concept ID: `globsci_cross_sectional_snapshot_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: GlobSci snapshot caveat; cross-sectional mobility limit; active-scientist snapshot limit; no-cohort GlobSci caveat
