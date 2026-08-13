# Career-length selection boundary

## Summary

Career-length selection boundary is the validation limit that career-dynamics studies often include only individuals with enough works or years to support event detection and trajectory analysis.

## Canonical Form

- Unit of analysis: individual career, minimum output count, observation window, event-detection eligibility, or selected career sample.
- Typical representation: minimum-career-length rule, enough-data threshold, excluded-career count, or selection caveat.
- Validation target: determine whether career-event findings generalize beyond long or sufficiently productive careers.
- Empirical signature: careers with too few outputs are excluded because hot-streak detection, moving-window entropy, or topic/style trajectories cannot be estimated reliably.

## Uses in Science of Science

- Qualifies [hot-streak onset detection](../measures/hot_streak_onset_detection.md), [career topic/style entropy](../measures/career_topic_style_entropy.md), and [career work embedding trajectories](../methods/career_work_embedding_trajectories.md).
- Adds a denominator caveat to [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md).
- Helps interpret [scientific career impact dynamics](../mechanisms/scientific_career_impact.md) when early exits, short careers, and low-output careers are not visible.
- Connects to broader [publication-conditioned SciSci blind spot](publication_conditioned_scisci_blind_spot.md) concerns when unobserved attempts or short careers are excluded.

## Operationalization

- State the minimum number of works, career years, or observed outputs needed for inclusion.
- Report the number and characteristics of excluded careers when possible.
- Test whether results differ for shorter versus longer eligible careers.
- Avoid generalizing hot-streak regularities to careers that cannot have hot streaks detected under the same model.
- Pair event-detection analyses with sensitivity checks for window length and career-boundary definitions.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) states that its datasets are limited to individuals with sufficiently long careers providing enough data points for statistical analyses.
- The paper frames this as a common limitation of data-driven career-history studies.
- This boundary matters because hot-streak models, entropy trajectories, and pre/post-onset comparisons require enough works around an event.
- The limitation constrains claims about artists, directors, or scientists with short, interrupted, or low-output careers.

## Caveats

- Excluding short careers can overrepresent successful, persistent, or highly visible individuals.
- Minimum-output rules can interact with field, gender, institution, country, and database coverage.
- Short careers may contain important failed, blocked, or early high-impact trajectories.
- Relaxing the threshold may increase measurement noise, so the solution is sensitivity reporting rather than automatic inclusion.

## Links

- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [career work embedding trajectories](../methods/career_work_embedding_trajectories.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [publication-conditioned SciSci blind spot](publication_conditioned_scisci_blind_spot.md)
- [exploration-exploitation robustness grid](exploration_exploitation_robustness_grid.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `career_length_selection_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: sufficiently long career boundary; career-history selection limit; minimum-output career filter; hot-streak eligibility selection
