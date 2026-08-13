# Film plot-cast embedding fusion

## Summary

Film plot-cast embedding fusion represents films by concatenating text embeddings of plot descriptions with network embeddings of co-casting structure.

## Canonical Form

- Unit of analysis: film, director career, plot description, cast network, embedding vector, or career window.
- Typical representation: word-embedding plot vector plus node-embedding cast vector in a fused film representation.
- Representation target: encode both narrative content and production/cast context for creative-career trajectory analysis.
- Empirical signature: fused film embeddings cluster films into style or genre neighborhoods and support entropy measurement around career events.

## Uses in Science of Science

- Provides the film-domain counterpart to [artwork style embedding transfer](artwork_style_embedding_transfer.md) and [individual co-citing topic communities](../methods/individual_co_citing_topic_communities.md).
- Extends [career work embedding trajectories](../methods/career_work_embedding_trajectories.md) to multimodal metadata.
- Supplies film-style assignments for [career topic/style entropy](../measures/career_topic_style_entropy.md).
- Demonstrates how network embeddings can be fused with text embeddings before measuring creative exploration.

## Operationalization

- Gather film plot descriptions and cast lists with director and release-date metadata.
- Train word embeddings over plot descriptions to obtain a plot representation.
- Build a weighted co-casting network and apply a node-embedding method to actor trajectories or co-occurrences.
- Concatenate plot and cast vectors into a fixed-dimensional film embedding.
- Validate by predicting film genre or another external label before using the representation for career-sequence measures.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) represents films by combining plot and casting information.
- The paper trains word embeddings on plot descriptions to learn a 100-dimensional text representation.
- Liu et al. build a weighted co-casting network and use DeepWalk to produce a 100-dimensional casting vector.
- The resulting 200-dimensional representation predicts film genre with reported accuracy of 0.948.

## Caveats

- Film genre and cast information are imperfect proxies for creative style.
- Popular actors, franchise effects, or market genres can dominate embedding structure.
- Cast-network embeddings may encode industry organization in addition to content.

## Links

- [career work embedding trajectories](../methods/career_work_embedding_trajectories.md)
- [semantic embeddings](semantic_embeddings.md)
- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [hot-streak entropy randomization baseline](../validations/hot_streak_entropy_randomization_baseline.md)
- [exploration-exploitation robustness grid](../validations/exploration_exploitation_robustness_grid.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `film_plot_cast_embedding_fusion`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: film plot cast embedding; movie multimodal embedding; co-casting plot fusion; director career film vectors
