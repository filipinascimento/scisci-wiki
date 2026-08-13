# Hot-streak entropy randomization baseline

## Summary

Hot-streak entropy randomization baselines compare observed topic or style entropy around hot-streak onset with entropy expected under randomly placed onset times.

## Canonical Form

- Unit of analysis: career, onset-aligned window, entropy value, randomized onset, z-score, or domain.
- Typical representation: randomized entropy distribution with observed entropy marked as a vertical line or z-score.
- Validation target: test whether exploration before onset and exploitation during onset exceed ordinary career variation.
- Empirical signature: pre-onset entropy is above randomized expectation, while hot-streak entropy is below randomized expectation.

## Uses in Science of Science

- Provides the direct null model for [career topic/style entropy](../measures/career_topic_style_entropy.md).
- Validates [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md) against arbitrary event alignment.
- Supports [exploration-exploitation sequence nulls](exploration_exploitation_sequence_nulls.md) by anchoring entropy deviations around randomized onsets.
- Can be reused for other career events where topic or style diversity is aligned around a fitted transition.

## Operationalization

- Estimate each career's hot-streak onset.
- Compute entropy in windows before and during the hot streak.
- Randomly assign onset times within careers many times and recompute entropy.
- Compare observed entropy against the randomized distribution using z-scores or empirical quantiles.
- Repeat across domains and window definitions.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) constructs null models by randomly designating the time at which a hot streak begins for each career.
- The paper compares observed average entropy before and after onset with entropy distributions from 1,000 randomized career realizations.
- Liu et al. report positive pre-hot-streak entropy z-scores for artists, directors, and scientists, and negative entropy z-scores during hot streaks.
- The paper also aligns careers by onset and shows entropy elevated before onset and below expectation during the hot streak.

## Caveats

- Random onset controls for generic career timing but not for all external shocks, institutional changes, or collaboration shifts.
- Entropy z-scores depend on topic/style assignment, window size, and output cadence.
- A significant entropy deviation is not proof that exploration or exploitation caused the hot streak.

## Links

- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [exploration-exploitation sequence nulls](exploration_exploitation_sequence_nulls.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [post-hot-streak entropy reversion](post_hot_streak_entropy_reversion.md)
- [exploration-exploitation robustness grid](exploration_exploitation_robustness_grid.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_entropy_randomization_baseline`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: randomized entropy onset baseline; hot-streak entropy null; onset-aligned entropy z-score; career entropy randomization
