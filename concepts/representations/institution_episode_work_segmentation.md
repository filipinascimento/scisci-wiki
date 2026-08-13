# Institution-episode work segmentation

## Summary

Institution-episode work segmentation is a representation that partitions a scientist's career into institution-bounded episodes, attaching publications and citation outcomes to each episode.

## Canonical Form

- Unit of analysis: scientist, affiliation episode, institution, paper set, citation outcome, or career move.
- Typical representation: ordered sequence of institution episodes with papers assigned to each segment.
- Representation target: connect mobility events to the work produced before, during, and after each institutional affiliation.
- Empirical signature: post-move performance or productivity is computed from papers in the destination episode relative to prior episodes.

## Uses in Science of Science

- Refines [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md) by adding an episode-level outcome layer.
- Feeds [post-move citation change score](../measures/post_move_citation_change_score.md).
- Supports studies of [scientific mobility](../mechanisms/scientific_mobility.md) and institutional stratification.
- Makes career mobility analyzable as a sequence of work contexts rather than a list of addresses.

## Operationalization

- Infer each scientist's ordered affiliation trajectory from publication records.
- Collapse consecutive publications at the same institution into one episode when appropriate.
- Assign papers and citation counts to the institution episode active when each paper was produced.
- Compare productivity or impact before and after moves, controlling for career age and field where possible.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) reconstructs scientists' affiliation trajectories and evaluates publication and citation outcomes around moves.
- The paper treats each institutional period as a context for scientific output, allowing post-move performance to be compared with pre-move performance.
- This representation supports their analysis of how institutional rank transitions relate to impact changes.

## Caveats

- Papers can have long gestation periods, making assignment to a single institution episode imperfect.
- Multiple affiliations and visiting positions can blur episode boundaries.
- Citation outcomes reflect field, coauthors, and journal placement as well as institutional context.

## Links

- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [post-move citation change score](../measures/post_move_citation_change_score.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [career move timing distribution](../measures/career_move_timing_distribution.md)
- [physical review mobility panel](../datasets/physical_review_mobility_panel.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; SciSciNet: W2049213211]

## Metadata

- Concept ID: `institution_episode_work_segmentation`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: institution-bounded career episode; affiliation episode segmentation; institutional work episode; career episode outcome segment
