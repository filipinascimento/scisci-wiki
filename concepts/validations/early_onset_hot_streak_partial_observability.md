# Early-onset hot-streak partial observability

## Summary

Early-onset hot-streak partial observability is the validation motif that hot streaks beginning near the start of an observed career are left-censored for pre-onset exploration tests.

## Canonical Form

- Unit of analysis: career sequence, hot-streak onset, pre-onset window, during-streak window, or excluded early-onset career.
- Typical representation: left-censored onset flag, missing pre-onset behavior, exploitation-only check, or onset-position sensitivity.
- Validation target: avoid treating unobserved pre-career behavior as evidence against exploration before a hot streak.
- Empirical signature: careers whose hot streak starts immediately can test behavior during the streak but cannot directly test pre-onset exploration.

## Uses in Science of Science

- Adds event-left-censoring detail to [hot-streak onset detection](../measures/hot_streak_onset_detection.md).
- Refines [career length selection boundary](career_length_selection_boundary.md), which covers general career-observation eligibility.
- Guards inference in [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md) and [relative entropy phase labeling](../methods/relative_entropy_phase_labeling.md).
- Connects to [hot-streak observational causal boundary](hot_streak_observational_causal_boundary.md) because missing pre-onset behavior limits causal interpretation.

## Operationalization

- Locate the first observed work and the detected hot-streak onset.
- Flag careers where the onset occurs before enough pre-onset works or time windows are observable.
- Exclude those careers from pre-onset exploration tests or analyze them separately.
- Report whether exploitation-during-streak patterns hold for early-onset cases.
- Test sensitivity to minimum pre-onset-history requirements.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) notes that when a hot streak begins at the start of a career, prior behavior cannot be observed.
- The paper handles such cases by checking exploitation during the hot streak while not overinterpreting missing pre-onset exploration.
- This creates a reusable event-study caveat for career-impact analyses.

## Caveats

- Early-onset left censoring can reflect true early success, missing earlier outputs, or database coverage limits.
- Excluding early-onset cases can bias the sample toward longer and later-developing careers.
- Partial observability should be reported separately from null results.

## Links

- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [career length selection boundary](career_length_selection_boundary.md)
- [hot-streak observational causal boundary](hot_streak_observational_causal_boundary.md)
- [exploration-exploitation robustness grid](exploration_exploitation_robustness_grid.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [relative entropy phase labeling](../methods/relative_entropy_phase_labeling.md)
- [domain-specific entropy windowing](../methods/domain_specific_entropy_windowing.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `early_onset_hot_streak_partial_observability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: early-onset hot-streak censoring; pre-onset left censoring; hot-streak partial observability; missing pre-hot-streak behavior
