# Domain-specific entropy windowing

## Summary

Domain-specific entropy windowing chooses moving-window sizes for career entropy analysis according to output cadence and data structure in each scientific or creative domain.

## Canonical Form

- Unit of analysis: career sequence, moving window, paper, artwork, film, or domain-specific output cadence.
- Typical representation: fixed work-count window, fixed time window, or hybrid window chosen separately by domain.
- Method target: align exploration/exploitation measures across domains without forcing identical temporal granularity.
- Empirical signature: the same career-dynamics test uses different window definitions for scientists, artists, and film directors.

## Uses in Science of Science

- Supports [career topic/style entropy](../measures/career_topic_style_entropy.md) by defining the comparison window.
- Refines [career work embedding trajectories](career_work_embedding_trajectories.md) and [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md).
- Provides a method-level guardrail for [cross-domain strategy generalization boundary](../validations/cross_domain_strategy_generalization_boundary.md).
- Works with [relative entropy phase labeling](relative_entropy_phase_labeling.md) and sequence-null tests.

## Operationalization

- Inspect output cadence, career length distribution, and data granularity for each domain.
- Select a window that balances local sensitivity and enough observations for stable entropy.
- Use work-count windows when output events are discrete and unevenly spaced.
- Use time windows when calendar-time context is the comparison target.
- Test robustness to alternative windows before comparing domains.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) uses domain-specific windows for onset dynamics: six artworks, five films, and five scientific papers in one analysis.
- The same paper uses different windows for sequence tests, including two-year windows for artists and scientists and work-count windows for film directors.
- The design acknowledges that output frequency and career structure differ across artistic, cultural, and scientific careers.

## Caveats

- Window choices can change measured entropy, phase labels, and apparent event timing.
- Domain-specific windows improve comparability but can also introduce researcher degrees of freedom.
- Very short careers may still be excluded or left-censored.

## Links

- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [career work embedding trajectories](career_work_embedding_trajectories.md)
- [relative entropy phase labeling](relative_entropy_phase_labeling.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [cross-domain strategy generalization boundary](../validations/cross_domain_strategy_generalization_boundary.md)
- [exploration-exploitation robustness grid](../validations/exploration_exploitation_robustness_grid.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `domain_specific_entropy_windowing`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: domain-specific career windows; entropy moving-window design; output-cadence entropy window; cross-domain entropy windowing
