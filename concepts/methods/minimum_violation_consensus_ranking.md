# Minimum-violation consensus ranking

## Summary

Minimum-violation consensus ranking infers a hierarchy from directed placement or dominance edges by finding rankings that minimize upward violations, then averaging over equally optimal rankings to produce a consensus order.

## Canonical Form

- Unit of analysis: directed edge, institution, vertex, ranking, hierarchy strength, optimal ranking sample, or rank score.
- Typical representation: minimum-violation ranking, downward-edge fraction, sampled optimal rankings, average-rank score, or consensus hierarchy.
- Method target: extract an ordering from pairwise outcomes when a perfect hierarchy is impossible but edge direction carries status information.
- Empirical signature: many edges point from higher-ranked origins to lower-ranked destinations, and multiple equally plausible optimal rankings may exist.

## Uses in Science of Science

- Provides the algorithmic core behind early [faculty prestige-rank inference](faculty_prestige_rank_inference.md).
- Converts [faculty hiring networks](../representations/faculty_hiring_networks.md) into a hierarchy for [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md) and [faculty placement rank change](../measures/faculty_placement_rank_change.md).
- Supplies rank samples for [faculty prestige rank uncertainty](../measures/faculty_prestige_rank_uncertainty.md).
- Gives a general method for extracting status orderings from interaction networks beyond faculty hiring.

## Operationalization

- Build a directed graph where edges represent placements, wins, deference, nominations, or other directional status events.
- Define a violation as an edge pointing upward under the candidate ranking.
- Search for rankings that maximize the share of downward edges or minimize violations.
- Sample equally optimal rankings when the optimum is non-unique.
- Assign each node a consensus score from its average rank across sampled optima, then order nodes by that score.
- Report hierarchy strength and uncertainty rather than only a single deterministic rank list.

## Evidence and Validations

- Verified full-text evidence from Clauset, Arbesman, and Larremore (2015) applies minimum-violation ranking to faculty hiring networks, where each directed edge represents a faculty member trained at one institution and employed at another.
- The paper defines hierarchy strength as the fraction of edges pointing downward in the inferred hierarchy.
- Clauset et al. note that large networks typically have many equally plausible rankings with the same maximum hierarchy strength.
- They sample optimal rankings by repeated rank swaps that do not reduce hierarchy strength, then assign each institution a consensus score equal to its average rank across sampled optima.

## Caveats

- The objective function treats all violations under the chosen edge weighting as comparable.
- A consensus rank can hide multi-modal or nearly tied rank distributions.
- The inferred hierarchy is a status ordering implied by observed edges, not direct evidence of merit or causal hiring preferences.

## Links

- [faculty prestige-rank inference](faculty_prestige_rank_inference.md)
- [faculty prestige rank uncertainty](../measures/faculty_prestige_rank_uncertainty.md)
- [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty hiring null models](faculty_hiring_null_models.md)
- [faculty placement predictive validity](../validations/faculty_placement_predictive_validity.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; WoS: unknown]

## Metadata

- Concept ID: `minimum_violation_consensus_ranking`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Clauset et al. (2015) (2015)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: minimum violation ranking; consensus prestige hierarchy; violation-minimizing hierarchy; dominance-order consensus ranking
