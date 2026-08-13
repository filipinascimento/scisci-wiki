# Topic-choice heuristic rejection

## Summary

Topic-choice heuristic rejection tests whether a later exploited topic can be explained by simple heuristics such as recency, prior citation success, or prior popularity before fitting richer prediction models.

## Canonical Form

- Unit of analysis: explored topic, exploited topic, career window, prior work, citation outcome, or prediction baseline.
- Typical representation: most recent topic baseline, most cited topic baseline, most frequent topic baseline, and prediction lift over heuristics.
- Validation target: show that topic exploitation is not trivially determined by the most obvious prior signal.
- Empirical signature: the eventually exploited topic is not usually the most recent, most cited, or most popular topic from the exploration period.

## Uses in Science of Science

- Adds a baseline layer to [exploited-topic choice prediction](../methods/exploited_topic_choice_prediction.md).
- Connects individual career dynamics to [reference-popularity search](../measures/reference_popularity_search.md) and [scientific discovery prediction](../methods/scientific_discovery_prediction.md).
- Helps interpret [individual co-citing topic communities](../methods/individual_co_citing_topic_communities.md) as predictive structure rather than post hoc labels.
- Provides a general validation motif for strategy-prediction tasks.

## Operationalization

- Identify the set of topics explored before a focal transition.
- Mark simple heuristic candidates: most recent topic, topic with highest prior impact, topic with most prior works, or topic with highest field popularity.
- Compare the actual exploited topic against those baselines.
- Fit richer prediction models only after reporting whether they beat the heuristic baselines.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) tests whether the topic later exploited during a hot streak is simply the most recent, most cited, or most popular topic explored before onset.
- The paper reports that the eventual exploited topic is less likely to be any of those simple heuristic choices, motivating richer prediction features.
- This separates topic-choice prediction from trivial persistence or impact-following baselines.

## Caveats

- Rejecting simple heuristics does not prove a causal choice mechanism.
- Heuristic definitions can depend on topic granularity and citation windows.
- A richer model may still capture omitted social, funding, or collaboration signals.

## Links

- [exploited-topic choice prediction](../methods/exploited_topic_choice_prediction.md)
- [individual co-citing topic communities](../methods/individual_co_citing_topic_communities.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [reference-popularity search](../measures/reference_popularity_search.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [relative entropy phase labeling](../methods/relative_entropy_phase_labeling.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `topic_choice_heuristic_rejection`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: exploited-topic heuristic baseline; topic choice baseline rejection; most recent topic baseline; prior-impact topic heuristic
