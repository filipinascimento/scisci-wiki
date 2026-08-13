# Consecutive-affiliation move filter

## Summary

Consecutive-affiliation move filter treats an institutional move as valid only when the new institution appears in a sustained publication sequence, reducing false moves from affiliation noise.

## Canonical Form

- Unit of analysis: author-paper affiliation sequence, institution episode, or inferred move.
- Typical representation: ordered affiliation labels with a minimum-run rule before creating a move event.
- Method target: distinguish stable institutional changes from temporary visits, typographical variants, or one-off affiliation listings.
- Empirical signature: fewer short-duration moves and fewer isolated origin-destination switches after filtering.

## Uses in Science of Science

- Refines [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md) before computing mobility measures.
- Protects [career move timing distribution](../measures/career_move_timing_distribution.md), [career move count distribution](../measures/career_move_count_distribution.md), and [career mobility distance decay](../measures/career_mobility_distance_decay.md) from false positives.
- Complements [author name disambiguation](author_name_disambiguation.md) and [institution name variant normalization](institution_name_variant_normalization.md).
- Makes publication-derived mobility panels more auditable when no CV or personnel record is available.

## Operationalization

- Sort an author's papers by publication date.
- Normalize and disambiguate institutional affiliations.
- Collapse or remove single-paper institution appearances unless they are confirmed by at least one adjacent paper or external source.
- Reconstruct move events from the remaining institution episodes and record the filtering rule.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) reconstructs physicists' trajectories from Physical Review affiliations.
- The paper uses the first listed affiliation as the primary institution when multiple affiliations are present.
- To reduce artificial movement, Deville et al. count only institutions reported in at least two consecutive papers as part of a career trajectory.
- The authors motivate this rule as a way to suppress short-term stays, affiliation errors, and typographical variants before measuring mobility.

## Caveats

- The rule can miss real short appointments, single-paper visits, and fast moves.
- Publication gaps can make a sustained appointment look like a transient affiliation.
- The appropriate minimum-run rule depends on field publication rates and authorship norms.

## Links

- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [author name disambiguation](author_name_disambiguation.md)
- [institution name variant normalization](institution_name_variant_normalization.md)
- [career move timing distribution](../measures/career_move_timing_distribution.md)
- [career move count distribution](../measures/career_move_count_distribution.md)
- [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `consecutive_affiliation_move_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: sustained affiliation filter; two-paper mobility filter; affiliation episode filter; false-move suppression
