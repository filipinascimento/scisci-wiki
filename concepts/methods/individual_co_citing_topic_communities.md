# Individual co-citing topic communities

## Summary

Individual co-citing topic communities identify a scientist's career topics by building a co-citing network among that scientist's papers and detecting communities.

## Canonical Form

- Unit of analysis: scientist, paper, reference overlap, co-citing edge, topic community, or career window.
- Typical representation: weighted paper-paper network where edges count shared references, with paper topics assigned by community membership.
- Method target: infer within-career research topics from citation neighborhoods rather than from global field labels alone.
- Empirical signature: a scientist's papers separate into topic communities that can be tracked before, during, and after career events.

## Uses in Science of Science

- Provides the science-domain topic assignment for [career topic/style entropy](../measures/career_topic_style_entropy.md).
- Supplies the scientific counterpart to [artwork style embedding transfer](../representations/artwork_style_embedding_transfer.md) and [film plot-cast embedding fusion](../representations/film_plot_cast_embedding_fusion.md).
- Connects [career work embedding trajectories](career_work_embedding_trajectories.md) to [co-citation](../representations/co_citation.md) and community detection.
- Enables scientist-level exploration and exploitation measurement around [hot-streak onset detection](../measures/hot_streak_onset_detection.md).

## Operationalization

- For each scientist, list all papers and their references.
- Connect two papers when they share at least one reference, weighting the edge by the number of shared references.
- Run community detection on the individual paper network to assign each paper to a topic.
- Compute topic shares and entropy in moving windows around career events.
- Validate topic assignments with alternative community algorithms or node embeddings.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2021) analyzes 20,040 scientists using Web of Science and Google Scholar publication and citation data.
- The paper identifies research topics within a career by finding communities in a weighted co-citing network of all publications by the individual.
- Two papers are connected if they share at least one common reference, and the link weight is the total number of shared references.
- Liu et al. also apply a node-embedding method to the co-citing network and report that the conclusions remain the same.

## Caveats

- Reference overlap can miss topical continuity when vocabulary or citation practices change.
- Small careers or sparse reference lists may produce unstable communities.
- Individual-level topics may not align with global fields, journal categories, or institutional research areas.

## Links

- [career work embedding trajectories](career_work_embedding_trajectories.md)
- [career topic/style entropy](../measures/career_topic_style_entropy.md)
- [co-citation](../representations/co_citation.md)
- [topic assignment tagging](topic_assignment_tagging.md)
- [topic models](topic_models.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [exploration-exploitation career shifts](../mechanisms/exploration_exploitation_career_shifts.md)
- [exploration-exploitation robustness grid](../validations/exploration_exploitation_robustness_grid.md)

## References

- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `individual_co_citing_topic_communities`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2021) (2021)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41467-021-25477-8`
- OpenAlex ID: `W3201257425`
- Dimensions ID: `pub.1141075911`
- SciSciNet ID: `W3201257425`
- Aliases: individual co-citing network topics; within-career topic communities; career co-citation topics; scientist paper community topics
