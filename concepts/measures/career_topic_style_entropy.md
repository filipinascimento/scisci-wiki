# Career topic/style entropy

## Summary

Career topic/style entropy measures how widely an individual's recent works are spread across topics, styles, or creative clusters, providing a quantitative proxy for exploration versus exploitation.

## Canonical Form

- Unit of analysis: career window, output sequence, topic/style cluster, scientist, artist, director, or hot-streak-aligned period.
- Typical representation: Shannon entropy over topic/style shares, usually normalized by the maximum possible entropy for the number of works in the window.
- Measurement target: whether a person is distributing attention across many domains or concentrating on one area.
- Empirical signature: elevated entropy marks exploration; low entropy marks exploitation or focus.

## Uses in Science of Science

- Operationalizes [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md) around [hot-streak onset detection](hot_streak_onset_detection.md).
- Converts [career work embedding trajectories](../methods/career_work_embedding_trajectories.md) into a scalar time series.
- Provides the measurement layer for [exploration-exploitation sequence nulls](../validations/exploration_exploitation_sequence_nulls.md).
- Helps connect [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md) to individual career timing.
- Can be applied to [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md) when works can be clustered into topics or styles.
- Is stress-tested with [hot-streak entropy randomization baseline](../validations/hot_streak_entropy_randomization_baseline.md), [post-hot-streak entropy reversion](../validations/post_hot_streak_entropy_reversion.md), and [exploration-exploitation robustness grid](../validations/exploration_exploitation_robustness_grid.md).
- Has a biomedical controlled-vocabulary cousin in [MeSH keyword trajectory shift](mesh_keyword_trajectory_shift.md).

## Operationalization

- Embed or cluster each work into a topic, style, or content category.
- For a moving window or pre/post event window, calculate the share of works assigned to each topic or style.
- Compute entropy as the negative sum of each share times its log share.
- Normalize by the log of the number of works or active categories when comparing windows with different output counts.
- Interpret high entropy as exploration and low entropy as exploitation, while checking robustness to window size and representation method.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) measures style or topic entropy for works across artists, film directors, and scientists.
- The paper defines entropy over the frequency with which a person devotes work to each style or topic and normalizes it as `H = eH / log n`.
- Liu et al. interpret zero entropy as pure exploitation, where work is contained in one style or topic, and maximum entropy as pure exploration, where attention is evenly spread across works.
- The paper finds that entropy is systematically higher than expected before hot-streak onset and significantly lower during the hot streak across all three domains.
- The scientific-career implementation identifies research topics through communities in an individual's weighted co-citing network and checks consistency with a node-embedding variant.
- Liu et al. report that entropy after a hot streak ends is statistically indistinguishable from randomized-career entropy, bounding the exploration-exploitation signature around onset.

## Caveats

- Entropy depends on how topics or styles are discovered and how granular the clusters are.
- High entropy can reflect noisy classification, interdisciplinary collaboration, or field structure rather than deliberate exploration.
- Low entropy can reflect field constraints, team composition, or data coverage rather than deliberate exploitation.
- Moving-window choices affect onset alignment and effect size.

## Links

- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [hot-streak onset detection](hot_streak_onset_detection.md)
- [career work embedding trajectories](../methods/career_work_embedding_trajectories.md)
- [hot-streak entropy randomization baseline](../validations/hot_streak_entropy_randomization_baseline.md)
- [post-hot-streak entropy reversion](../validations/post_hot_streak_entropy_reversion.md)
- [exploration-exploitation robustness grid](../validations/exploration_exploitation_robustness_grid.md)
- [exploration-exploitation sequence nulls](../validations/exploration_exploitation_sequence_nulls.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [topic models](../methods/topic_models.md)
- [MeSH keyword trajectory shift](mesh_keyword_trajectory_shift.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [co-citation](../representations/co_citation.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `career_topic_style_entropy`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: career entropy; topic entropy; style entropy; exploration entropy; normalized career entropy
