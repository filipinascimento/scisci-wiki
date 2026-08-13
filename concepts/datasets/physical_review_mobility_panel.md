# Physical Review mobility panel

## Summary

The Physical Review mobility panel is a publication-derived dataset that links disambiguated physicists, Physical Review papers, institutional affiliations, publication dates, and internal citation outcomes to reconstruct institutional career moves.

## Canonical Form

- Unit of analysis: scientist, paper, institution, affiliation episode, career move, or citation outcome.
- Typical representation: longitudinal author-paper-affiliation panel with institution IDs, publication dates, and five-year citation counts.
- Data target: institutional career mobility and post-move impact in a long-run discipline-bounded publication corpus.
- Empirical signature: publication sequences reveal moves between institutions after author and affiliation disambiguation.

## Uses in Science of Science

- Supplies the data layer for [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md) in Deville et al. (2014).
- Supports measures of [career move timing distribution](../measures/career_move_timing_distribution.md), [career move count distribution](../measures/career_move_count_distribution.md), [career mobility distance decay](../measures/career_mobility_distance_decay.md), [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md), and [post-move citation-change score](../measures/post_move_citation_change_score.md).
- Supports data-construction and organization-level motifs such as [consecutive-affiliation move filter](../methods/consecutive_affiliation_move_filter.md), [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md), and [institution size-impact scaling](../measures/institution_size_impact_scaling.md).
- Complements the [Physical Review citation network](physical_review_citation_network.md) by adding author-affiliation trajectories to an internal APS citation universe.
- Provides a bounded testbed for [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md).

## Operationalization

- Start from APS Physical Review papers with author names, affiliations, publication dates, and internal citation links.
- Disambiguate authors and affiliations, then assign a primary institution when multiple affiliations are listed.
- Filter affiliation episodes before declaring stable career moves.
- Restrict to a focal cohort when estimating career dynamics, recording inclusion rules and removed ambiguous cases.
- Attach five-year internal citation counts to papers before computing pre- and post-move impact measures.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) uses 425,369 Physical Review papers, 237,038 disambiguated physicists, and 4,052 distinct institutions.
- The paper reports a focal cohort of 2,725 scientists who began between 1950 and 1980, had at least 20 years of career longevity, and had no interruption exceeding five years.
- This cohort yields 5,915 recorded career movements, after filtering artificial moves and affiliation noise.
- Deville et al. note that about 5% of publications with ambiguous author-affiliation links or massive authorship were removed.

## Caveats

- The panel is physics- and APS-bounded; it should not be treated as all science or all physics.
- Internal APS citation counts miss citations from outside the Physical Review journal family.
- First-affiliation and consecutive-paper rules simplify multi-affiliation, visiting, and short-term appointment histories.

## Links

- [Physical Review citation network](physical_review_citation_network.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [consecutive-affiliation move filter](../methods/consecutive_affiliation_move_filter.md)
- [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md)
- [institution size-impact scaling](../measures/institution_size_impact_scaling.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [career move timing distribution](../measures/career_move_timing_distribution.md)
- [career move count distribution](../measures/career_move_count_distribution.md)
- [career mobility distance decay](../measures/career_mobility_distance_decay.md)
- [post-move citation-change score](../measures/post_move_citation_change_score.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]

## Metadata

- Concept ID: `physical_review_mobility_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Deville et al. (2014) (2014)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Dimensions ID: `pub.1032371564`
- SciSciNet ID: `W2049213211`
- Aliases: APS mobility panel; Physical Review career-mobility panel; physicist affiliation trajectory panel
