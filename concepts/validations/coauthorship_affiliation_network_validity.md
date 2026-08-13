# Coauthorship affiliation-network validity

## Summary

Coauthorship affiliation-network validity is the representational claim that shared paper bylines can be used as a documented proxy for professional collaboration, while still requiring caveats about informal work, large teams, contribution asymmetry, and source coverage.

## Canonical Form

- Unit of analysis: author, paper, author-paper affiliation network, projected author-author tie, source-domain panel, or field.
- Typical representation: paper bylines as groups, authors as actors, and coauthorship as projected social or professional ties.
- Validation target: whether a bibliographic coauthorship graph is a meaningful proxy for collaboration rather than only a publication artifact.
- Empirical signature: the source records group membership reliably enough to build large networks, but interpretation is bounded by documented exceptions.

## Uses in Science of Science

- Provides the construct-validity layer for [coauthorship networks](../representations/coauthorship_networks.md).
- Justifies using [coauthorship affiliation projection](../methods/coauthorship_affiliation_projection.md) when paper membership lists are the observable trace.
- Helps interpret [article team-size distribution](../measures/article_team_size_distribution.md) as an author-list proxy for collaborative team size, not a complete record of all collaboration.
- Connects construction choices to [author name disambiguation](../methods/author_name_disambiguation.md), [coauthorship name-resolution bounds](coauthorship_name_resolution_bounds.md), and [collaboration source coverage bias](collaboration_source_coverage_bias.md).
- Separates the social-network interpretation of coauthorship from intellectual traces such as [citation networks](../representations/citation_networks.md).

## Operationalization

- Define papers as affiliation groups and authors as actors before projecting author-author edges.
- Document why the source records are reliable enough for group-membership inference.
- Report whether ties represent any shared byline, repeated coauthorship, weighted collaboration strength, or role-aware contribution.
- Audit large-team fields with [mega-collaboration degree inflation](mega_collaboration_degree_inflation.md) and contribution asymmetry with [contribution role vectors](../representations/contribution_role_vectors.md).
- Treat validity as a bounded claim: coauthorship records professional interaction more directly than many affiliation networks, but it does not observe every collaboration or guarantee acquaintance.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) frames coauthorship data as an affiliation network: actors are scientists and groups are the coauthors of a paper.
- Newman argues that affiliation-network data can be more reliable than questionnaire-based social-network data because group membership can often be recovered from lists rather than interviews.
- The same text treats coauthorship as more socially meaningful than some other affiliation networks because most coauthor pairs are likely to know one another through joint research.
- Newman also states the main exception: very large collaborations can contain coauthors who have never met, so the validity claim is strongest for ordinary research teams and weaker for mega-collaborations.

## Caveats

- Coauthorship misses informal advising, data sharing, peer review, and other uncredited collaboration.
- Shared bylines do not imply equal contribution, direct interaction, or endorsement of all project components.
- Validity varies by field authorship norms, consortium practices, source coverage, and author-name resolution.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship affiliation projection](../methods/coauthorship_affiliation_projection.md)
- [article team-size distribution](../measures/article_team_size_distribution.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [coauthorship-citation network distinction](../representations/coauthorship_citation_network_distinction.md)
- [coauthorship name-resolution bounds](coauthorship_name_resolution_bounds.md)
- [mega-collaboration degree inflation](mega_collaboration_degree_inflation.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [author contribution statements](../datasets/author_contribution_statements.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_affiliation_network_validity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `unknown`
- Aliases: coauthorship proxy validity; affiliation-network validity; byline collaboration validity; coauthorship construct validity
