# Self-citation-adjusted team impact

## Summary

Self-citation-adjusted team impact tests whether the citation advantage of team-authored work persists after removing citations that share authors between citing and cited papers.

## Canonical Form

- Unit of analysis: team-authored output, solo-authored output, field-year cell, or citation-impact comparison.
- Typical representation: relative team-impact ratio with and without self-citations, percent reduction after self-citation removal, or robustness flag.
- Mechanism or measurement target: whether team citation advantage is inflated by larger teams' greater opportunities to cite their own prior work.
- Empirical signature: team citation advantage remains above the solo baseline after author-overlap self-citations are removed.

## Uses in Science of Science

- Provides a robustness layer for [relative team-impact ratio](../measures/relative_team_impact_ratio.md) and [team impact advantage](../mechanisms/team_impact_advantage.md).
- Connects team-science metrics to broader [self-citation rates](../measures/self_citation_rates.md) and [responsible metrics](../measures/responsible_metrics.md).
- Helps distinguish ordinary cumulative self-reference from an artifact that could explain team citation advantage.
- Supports audits of [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md).

## Operationalization

- Define self-citation by author overlap, coauthor overlap, or another documented rule.
- Remove citations where the citing and cited outputs share an author identity or matched author name.
- Recompute relative team-impact ratio and tail-citation comparisons.
- Report possible false removals from homonyms, missed removals from synonym errors, and whether patents are treated differently.
- Use [self-citation name-collision Monte Carlo check](self_citation_name_collision_monte_carlo_check.md) when name-based removal may falsely drop citations between different people with the same name.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) reruns the relative team-impact analysis with self-citations removed because teams have more opportunities to self-cite.
- The paper reports that removing self-citations reduces relative team impact by about 5-10% in some fields, but the relative citation advantage of teams remains essentially intact.
- Wuchty et al. define self-citation as a citation where a common author name exists in the authorship of both cited and citing papers, using first initial and last name matching.
- They do not remove patent self-citations because patent citations are often assigned by examiners rather than applicants, making the paper and patent mechanisms different.
- That patent-specific caveat is split out in [patent examiner citation caveat](patent_examiner_citation_caveat.md).
- Wuchty et al. also estimate false removals from shared first-initial-plus-surname strings with a Monte Carlo check, motivating a separate name-collision validation page.

## Caveats

- Name-based self-citation removal can remove citations between different people with the same name and miss citations from renamed or inconsistently indexed authors.
- Removing self-citations does not address reciprocal citation, citation clubs, or preferential attention to large teams.
- Patent-citation and paper-citation self-citation rules should not be assumed identical; see [patent examiner citation caveat](patent_examiner_citation_caveat.md).

## Links

- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [patent examiner citation caveat](patent_examiner_citation_caveat.md)
- [self-citation name-collision Monte Carlo check](self_citation_name_collision_monte_carlo_check.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [h-index self-citation sensitivity](h_index_self_citation_sensitivity.md)
- [citation metric gaming](citation_metric_gaming.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `self_citation_adjusted_team_impact`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: self-citation-adjusted RTI; team impact self-citation audit; self-citation-removed team advantage; team citation robustness check
