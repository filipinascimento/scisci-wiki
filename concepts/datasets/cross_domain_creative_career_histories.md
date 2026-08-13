# Cross-domain creative career histories

## Summary

Cross-domain creative career histories are aligned career-output datasets spanning scientific, artistic, and cultural domains, used to test whether career dynamics such as hot streaks generalize beyond one profession.

## Canonical Form

- Unit of analysis: individual career, ordered work, domain-specific impact measure, career position, calendar year, or career event.
- Typical representation: sequences of artworks, films, or papers with impact proxies and career-order metadata.
- Data target: comparable longitudinal career histories across domains where creative outputs can be ordered and scored.
- Empirical signature: the same career-dynamics model is estimated on artists, film directors, and scientists using domain-specific impact measures.

## Uses in Science of Science

- Supplies the data scaffold for [hot streaks](../mechanisms/hot_streaks.md), [hot-streak onset detection](../measures/hot_streak_onset_detection.md), and [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md).
- Requires [domain-specific impact proxy alignment](../methods/domain_specific_impact_proxy_alignment.md) so auction prices, film ratings, and citations are treated as comparable sequence signals without erasing their measurement differences.
- Lets [random impact rule](../mechanisms/random_impact_rule.md) be compared with clustered high-impact intervals across domains.
- Supports cross-domain validation signatures such as [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md), [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md), and [hot-streak productivity invariance](../validations/hot_streak_productivity_invariance.md).
- Supports [career work embedding trajectories](../methods/career_work_embedding_trajectories.md) and [career topic/style entropy](../measures/career_topic_style_entropy.md) when works can be embedded or clustered.
- In Liu et al. (2021), the cross-domain representation layer splits into [artwork style embedding transfer](../representations/artwork_style_embedding_transfer.md), [film plot-cast embedding fusion](../representations/film_plot_cast_embedding_fusion.md), and [individual co-citing topic communities](../methods/individual_co_citing_topic_communities.md).
- Helps evaluate whether science-specific claims about [scientific career impact dynamics](../mechanisms/scientific_career_impact.md) are domain-specific or part of broader creative-career structure.

## Operationalization

- Compile ordered career-output histories for multiple creative domains.
- Define a domain-specific impact proxy for each output, such as auction price, film rating, or fixed-window citations.
- Transform or normalize proxies where needed while preserving the rank ordering used by top-hit sequence statistics.
- Retain enough outputs per person to estimate career-level sequences, top-hit clustering, and hot-streak parameters.
- Align outputs by career position and calendar time when testing onset, duration, productivity, and impact contributions.
- Keep domain-specific caveats explicit, because impact measures are not semantically identical across art, film, and science.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) reports large-scale career histories of individual artists, film directors, and scientists, tracing artworks, films, and scientific publications.
- The paper's data description reports 3,480 artists reconstructed from auction records, 6,233 film directors from IMDB profiles, and 20,040 scientists from publication records built with Web of Science and Google Scholar.
- Liu et al. use hammer prices for artworks, IMDB ratings for films, and ten-year citations for scientific papers as domain-specific impact measures.
- Verified full-text evidence from Liu et al. (2021) uses related cross-domain histories for artists, directors, and scientists to construct embeddings, style/topic labels, and entropy measures around hot-streak onset.
- Liu et al. (2021) reports 2128 artists, 4337 film directors, and 20,040 scientists for the representation and entropy analyses.

## Caveats

- Domain-specific impact measures are comparable as career signals but not as identical constructs.
- Coverage and selection thresholds can bias the population toward longer, more visible, or better-recorded careers.
- Scientific publication histories require author disambiguation and citation-window choices; art and film histories require provenance and metadata coverage.
- Cross-domain regularity does not imply identical causal mechanisms in each domain.

## Links

- [hot streaks](../mechanisms/hot_streaks.md)
- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)
- [domain-specific impact proxy alignment](../methods/domain_specific_impact_proxy_alignment.md)
- [creative career minimum-observation filter](../validations/creative_career_minimum_observation_filter.md)
- [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md)
- [top-hit distance enrichment curve](../measures/top_hit_distance_enrichment_curve.md)
- [hot-streak duration distribution](../measures/hot_streak_duration_distribution.md)
- [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md)
- [hot-streak random-onset test](../validations/hot_streak_random_onset_test.md)
- [hot-streak productivity invariance](../validations/hot_streak_productivity_invariance.md)
- [single-hot-streak uniqueness](../validations/single_hot_streak_uniqueness.md)
- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [artwork style embedding transfer](../representations/artwork_style_embedding_transfer.md)
- [film plot-cast embedding fusion](../representations/film_plot_cast_embedding_fusion.md)
- [individual co-citing topic communities](../methods/individual_co_citing_topic_communities.md)
- [career work embedding trajectories](../methods/career_work_embedding_trajectories.md)
- [career-length selection boundary](../validations/career_length_selection_boundary.md)
- [cross-domain strategy generalization boundary](../validations/cross_domain_strategy_generalization_boundary.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]
- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `cross_domain_creative_career_histories`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: artist-director-scientist career data; creative career histories; cross-domain hot-streak corpus; longitudinal creative-output careers
