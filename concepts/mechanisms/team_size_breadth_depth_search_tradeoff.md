# Team-size breadth-depth search tradeoff

## Summary

Team-size breadth-depth search tradeoff is the pattern that larger teams can combine broader knowledge sources, but with diminishing novelty returns, while smaller teams search deeper into older and less popular work.

## Canonical Form

- Unit of analysis: paper, patent, software repository, team-size bin, reference list, keyword set, or knowledge-combination profile.
- Typical representation: team-size curves for combinatorial novelty, reference age, reference popularity, and atypical-combination tails.
- Mechanism: collaboration expands accessible literature and expertise, but coordination, shared agendas, and resource commitments can pull larger teams toward recent, visible, and developmental directions.
- Empirical signature: search breadth or combinatorial novelty rises initially with team size but eventually flattens or declines, while deep search into older or less popular predecessors declines monotonically with team size.

## Uses in Science of Science

- Refines [team size and disruption](team_size_disruption.md) by separating broad recombination from deep search.
- Connects [team tail-novelty advantage](team_tail_novelty_advantage.md) to a later diseconomy-of-scale caveat: not every additional collaborator increases unusual recombination.
- Bridges [novelty and conventionality](novelty_conventionality.md) with [small-team deep-search delay](small_team_deep_search_delay.md).
- Provides a mechanism for portfolio design: large teams may be useful for broad development while small teams may preserve access to neglected predecessor space.

## Operationalization

- Compute team size for each focal work.
- Measure deep search with [reference-age search depth](../measures/reference_age_search_depth.md) and [reference-popularity search](../measures/reference_popularity_search.md).
- Measure breadth or recombination with cited-journal combination novelty, keyword-combination novelty, atypical reference-pair scores, or category-disparity measures.
- Plot average and top-tail novelty measures by team-size bin, checking for diminishing marginal gains or inverted-U patterns.
- Compare the breadth curve with deep-search curves and with disruption or developmental outcomes.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) reports that larger teams more often use recent and popular predecessors, while smaller teams more often build on older and less popular ideas.
- The same paper tests journal-combination novelty within article references and keyword-combination novelty within articles as a team-size function.
- Wu et al. report consistent diminishing marginal increases to novelty as team size grows: each additional team member contributes less to novel combinations.
- Using the prior atypical-combinations measure from Uzzi et al. (2013), Wu et al. find that atypical combinations increase slowly up to teams of about ten members and then fall sharply below the solo-investigator level.
- The authors summarize the contrast as larger teams facilitating broader search while small teams search deeper.
- Extended Data Fig. 9 labels this pattern as diseconomies of scale in combinatorial novelty, making it a distinct mechanism from the monotonic team-size disruption gradient.

## Caveats

- Breadth and depth are not opposites; a work can combine distant domains while also citing older or neglected predecessors.
- Team size can proxy for field, funding, hierarchy, equipment, and authorship norms.
- Novelty measures based on journals, keywords, or atypical reference pairs capture different forms of breadth and should not be collapsed without validation.
- The inverted-U pattern in atypical combinations is a descriptive association, not a randomized team-size effect.

## Links

- [team size and disruption](team_size_disruption.md)
- [small-team deep-search delay](small_team_deep_search_delay.md)
- [team tail-novelty advantage](team_tail_novelty_advantage.md)
- [novelty and conventionality](novelty_conventionality.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [reference-popularity search](../measures/reference_popularity_search.md)
- [tail novelty](../measures/tail_novelty.md)
- [median conventionality](../measures/median_conventionality.md)
- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [category disparity](../measures/category_disparity.md)
- [disruption consolidation](disruption_consolidation.md)
- [scientific ecosystem diversity](scientific_ecosystem_diversity.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; SciSciNet: W2913773162; WoS: unknown]
- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; SciSciNet: W2066752129; WoS: unknown]

## Metadata

- Concept ID: `team_size_breadth_depth_search_tradeoff`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: breadth-depth team search tradeoff; combinatorial novelty diseconomies of scale; team-size search breadth limit; small-team deep versus large-team broad search
