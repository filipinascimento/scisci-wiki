# Relative entropy phase labeling

## Summary

Relative entropy phase labeling converts a continuous career entropy trajectory into exploration and exploitation phases by comparing local diversity to the individual's own baseline.

## Canonical Form

- Unit of analysis: career, moving window, output sequence, topic/style entropy, or phase label.
- Typical representation: above-person-average entropy as exploration and below-person-average entropy as exploitation.
- Method target: label career episodes without imposing a universal entropy threshold across people or domains.
- Empirical signature: the same entropy value can indicate exploration for one individual and exploitation for another depending on that individual's baseline.

## Uses in Science of Science

- Provides the phase-labeling method for [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md).
- Converts [career topic/style entropy](../measures/career_topic_style_entropy.md) into episode labels for sequence analysis.
- Feeds [exploration-exploitation sequence nulls](../validations/exploration_exploitation_sequence_nulls.md) and [hot-streak entropy randomization baseline](../validations/hot_streak_entropy_randomization_baseline.md).
- Works with [domain-specific entropy windowing](domain_specific_entropy_windowing.md) when output cadence differs across fields or creative domains.

## Operationalization

- Represent each work in a topic, style, semantic, or co-citation space.
- Compute local entropy over a moving window around each career point.
- Compute the individual's average entropy across the observed career.
- Label windows above the individual's average as exploration and windows below the individual's average as exploitation.
- Validate labels against random onset baselines and robustness checks over window size and representation.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) defines exploration and exploitation episodes using whether a window's entropy is above or below the individual's average entropy.
- The paper applies this relative labeling to artists, film directors, and scientists before testing whether exploration followed by exploitation is enriched around hot-streak onset.
- Using person-relative baselines avoids treating naturally broad and naturally narrow careers as equivalent.

## Caveats

- A person's observed career average can be biased by truncated careers or sparse output histories.
- Relative labeling identifies phases, not intentions.
- Entropy thresholds depend on the representation and moving-window design.

## Links

- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [domain-specific entropy windowing](domain_specific_entropy_windowing.md)
- [career work embedding trajectories](career_work_embedding_trajectories.md)
- [exploration-exploitation sequence nulls](../validations/exploration_exploitation_sequence_nulls.md)
- [hot-streak entropy randomization baseline](../validations/hot_streak_entropy_randomization_baseline.md)
- [early-onset hot-streak partial observability](../validations/early_onset_hot_streak_partial_observability.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `relative_entropy_phase_labeling`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: person-relative entropy labeling; exploration exploitation phase labels; individual entropy baseline; relative career diversity phase
