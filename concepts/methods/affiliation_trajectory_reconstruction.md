# Affiliation trajectory reconstruction

## Summary

Affiliation trajectory reconstruction infers a scientist's career path from the sequence of institutional or country affiliations appearing on their publications.

## Canonical Form

- Unit of analysis: author, affiliation string, institution, country, publication, or career move.
- Typical representation: longitudinal author-affiliation sequence, origin-destination flow, or mobility event table.
- Mechanism or measurement target: observed institutional and geographic career movement in publication records.
- Empirical signature: ordered affiliations that reveal moves, multi-affiliations, return mobility, and post-move outcomes.

## Uses in Science of Science

- Provides the data construction layer for [scientific mobility](../mechanisms/scientific_mobility.md).
- Supports institutional mobility, country mobility, collaboration retention, and post-move impact analyses.
- Links author disambiguation, affiliation disambiguation, and career-stage inference.
- Produces movement tables used by [career move timing distribution](../measures/career_move_timing_distribution.md), [career move count distribution](../measures/career_move_count_distribution.md), [career mobility distance decay](../measures/career_mobility_distance_decay.md), and [institutional rank transition likelihood](../measures/institutional_rank_transition_likelihood.md).
- Provides the longitudinal alternative to [author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md) when author-level metric tables collapse an entire portfolio to one recent affiliation.
- Makes move definitions auditable through filters such as [consecutive-affiliation move filter](consecutive_affiliation_move_filter.md).
- Needs source-specific coverage checks such as [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md) when Web of Science records supply the author-institution history.
- Supplies the author-country sequences used by [country of scientific origin proxy](country_scientific_origin_proxy.md), [migrant-traveler mobility split](../measures/migrant_traveler_mobility_split.md), and [brain circulation networks](../representations/brain_circulation_networks.md).

## Operationalization

- Disambiguate authors and normalize affiliation strings to institutions and countries.
- Assign each publication to one or more affiliations, with documented rules for multi-affiliation cases such as [primary affiliation assignment rule](primary_affiliation_assignment_rule.md).
- Apply a documented episode filter, such as requiring repeated consecutive appearances of an institution, before declaring a move.
- Sort publications by year to reconstruct affiliation episodes and moves.
- Validate inferred moves against CVs, ORCID profiles, institutional records, or manually checked samples.

## Evidence and Validations

- Verified full-text evidence from Deville et al. (2014) reconstructs physicists' institutional career trajectories from Physical Review publication affiliations, using the first listed affiliation when multiple affiliations appear.
- The paper extracts institutional moves, publication records, and five-year citation outcomes for individual scientists, yielding 5,915 career movements for the focal cohort.
- Deville et al. filter career trajectories by treating only institutions reported in at least two consecutive papers as moves, reducing artificial movement induced by short-term stays, errors, and affiliation typos.
- Verified full-text evidence from Sugimoto et al. (2017) uses country affiliations on nearly 14 million papers and almost 16 million individuals to assign a country of scientific origin and identify international mobility.
- Sugimoto et al.'s workflow is now split into reusable pages for the origin-country proxy, individual mobility-category split, country flow networks, country role typologies, and policy-shock evaluation.
- Together these papers show that affiliation trajectories are useful but rule-sensitive: first affiliation, multi-affiliation, author disambiguation, and country/institution resolution all shape the mobility signal.
- Verified full-text evidence from Birkle et al. (2020) adds a WoS-specific temporal caveat by reporting author-affiliation links from 2008 forward in Core Collection.

## Caveats

- Publication affiliations can lag, omit, or strategically list real employment relationships.
- Multi-affiliations and visiting appointments complicate "move" definitions.
- Affiliation and author disambiguation errors can create false moves or hide real ones.

## Links

- [scientific mobility](../mechanisms/scientific_mobility.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [primary affiliation assignment rule](primary_affiliation_assignment_rule.md)
- [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md)
- [author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md)
- [consecutive-affiliation move filter](consecutive_affiliation_move_filter.md)
- [institution-episode work segmentation](../representations/institution_episode_work_segmentation.md)
- [country of scientific origin proxy](country_scientific_origin_proxy.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [career move timing distribution](../measures/career_move_timing_distribution.md)
- [career move count distribution](../measures/career_move_count_distribution.md)
- [career mobility distance decay](../measures/career_mobility_distance_decay.md)
- [post-move citation-change score](../measures/post_move_citation_change_score.md)
- [international mobility typologies](../measures/international_mobility_typologies.md)
- [migrant-traveler mobility split](../measures/migrant_traveler_mobility_split.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [author name disambiguation](author_name_disambiguation.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)

## References

- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]
- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `affiliation_trajectory_reconstruction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/srep04770`
- OpenAlex ID: `W2049213211`
- Aliases: affiliation history; career trajectory reconstruction; publication affiliation mobility; author affiliation sequence
