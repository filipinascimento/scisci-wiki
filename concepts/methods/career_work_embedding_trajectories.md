# Career work embedding trajectories

## Summary

Career work embedding trajectories place a person's sequential outputs in a latent topic, style, semantic, or citation-neighborhood space so career movement, diversity, and concentration can be measured over time.

## Canonical Form

- Unit of analysis: work, paper, film, artwork, career window, or individual career.
- Typical representation: ordered vectors, clusters, communities, or low-dimensional projections indexed by output date.
- Mechanism or measurement target: movement through a creative or scientific content space.
- Empirical signature: changes in distance, entropy, cluster occupancy, or topic concentration before and after career events.

## Uses in Science of Science

- Converts publication histories into measurable trajectories that can be linked to [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Provides the representation layer for [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md).
- Feeds [career topic/style entropy](../measures/career_topic_style_entropy.md) by assigning each work to a topic, style, or embedding-space cluster.
- Complements citation-only career models by measuring what kind of work a scientist is doing, not only how much impact it receives.
- Splits into domain-specific representation motifs: [artwork style embedding transfer](../representations/artwork_style_embedding_transfer.md), [film plot-cast embedding fusion](../representations/film_plot_cast_embedding_fusion.md), and [individual co-citing topic communities](individual_co_citing_topic_communities.md).
- Event-aligned entropy motifs now separate [relative entropy phase labeling](relative_entropy_phase_labeling.md), [domain-specific entropy windowing](domain_specific_entropy_windowing.md), [topic-choice heuristic rejection](../validations/topic_choice_heuristic_rejection.md), and [early-onset hot-streak partial observability](../validations/early_onset_hot_streak_partial_observability.md).

## Operationalization

- Embed or cluster each career output using text, images, metadata, references, co-citation neighborhoods, or co-occurrence networks.
- Order embedded works by career time and define moving windows around events such as [hot-streak onset detection](../measures/hot_streak_onset_detection.md).
- Convert the trajectory into measures such as style or topic entropy, cluster transitions, centroid drift, and distance from prior work.
- Validate trajectory patterns against randomized career alignments, alternative representation methods, and domain-specific robustness checks.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) builds high-dimensional representations of artworks, films, and scientific publications to trace career trajectories in an underlying creative space.
- For scientific careers, Liu et al. identify research topics with communities in an individual's weighted co-citing network and report that a node-embedding variant yields the same conclusions.
- For films, the paper combines plot word embeddings with a DeepWalk embedding of a co-casting network; for artworks, it uses neural-network image features and dimensionality reduction.
- These representations support the paper's entropy analysis showing exploration before, and exploitation after, hot-streak onset.
- The same paper reports a robustness grid using alternative community detection, node embeddings, Simpson diversity, topic counts, dominant-topic share, and topic-switching probability.

## Caveats

- Embedding trajectories can be dominated by corpus coverage, preprocessing, model choice, and the granularity of clusters or communities.
- Distances in a learned space are useful proxies but do not directly explain why a line of work becomes influential.
- Career-level embedding analysis requires reliable author disambiguation, output ordering, and treatment of team-authored work.

## Links

- [semantic embeddings](../representations/semantic_embeddings.md)
- [artwork style embedding transfer](../representations/artwork_style_embedding_transfer.md)
- [film plot-cast embedding fusion](../representations/film_plot_cast_embedding_fusion.md)
- [individual co-citing topic communities](individual_co_citing_topic_communities.md)
- [co-citation](../representations/co_citation.md)
- [topic models](topic_models.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [science maps](../representations/science_maps.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [hot-streak entropy randomization baseline](../validations/hot_streak_entropy_randomization_baseline.md)
- [exploration-exploitation robustness grid](../validations/exploration_exploitation_robustness_grid.md)
- [exploration-exploitation sequence nulls](../validations/exploration_exploitation_sequence_nulls.md)
- [hot-streak onset detection](../measures/hot_streak_onset_detection.md)
- [relative entropy phase labeling](relative_entropy_phase_labeling.md)
- [domain-specific entropy windowing](domain_specific_entropy_windowing.md)
- [topic-choice heuristic rejection](../validations/topic_choice_heuristic_rejection.md)
- [early-onset hot-streak partial observability](../validations/early_onset_hot_streak_partial_observability.md)
- [author name disambiguation](author_name_disambiguation.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]
- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]
- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `career_work_embedding_trajectories`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: career embeddings; work style vectors; career content space; creative-output trajectory
