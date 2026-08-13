# Collaborator-distribution team-size projection

## Summary

Collaborator-distribution team-size projection relates author collaborator-count distributions to article team-size distributions, showing when collaborator tails can arise from team-size structure.

## Canonical Form

- Unit of analysis: article team size, author collaborator count, coauthorship network, or observation window.
- Typical representation: mapping from team-size distribution `F(k)` to collaborator-count distribution `FC(n)`.
- Method target: distinguish collaborator-degree tails caused by repeated social attachment from tails caused by large-team membership.
- Empirical signature: a large-team power-law tail can induce a fat-tailed collaborator-count distribution even without every high-degree author being a star scientist.

## Uses in Science of Science

- Adds a team-size mechanism to [collaborator-count distribution](../measures/collaborator_count_distribution.md).
- Connects distributional team models to [coauthorship networks](../representations/coauthorship_networks.md) and [scale-free degree distributions](../measures/scale_free_degree_distributions.md).
- Provides a caveat for interpreting [preferential attachment](../mechanisms/preferential_attachment.md) in collaboration networks.
- Links [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md) to observed collaborator-count tails.

## Operationalization

- Estimate or observe the field-period distribution of article team sizes.
- Under a short-window or single-article approximation, map team sizes to collaborator counts using the relation between `k` authors and `k - 1` collaborators per author.
- Compare projected collaborator-count tails with the observed coauthorship degree distribution.
- Use the mismatch to diagnose repeated collaboration, author productivity, and network accumulation beyond team-size effects.

## Evidence and Validations

- Verified full-text evidence from Milojevic (2014) states that when each author appears on only one article, collaborator-count distribution is related to team-size distribution as `FC(n) = (n + 1)F(n + 1)`.
- The paper notes that this approximation is relevant because most authors appear on only one article over short periods of a few years.
- Milojevic argues that collaborator-distribution power-law tails traditionally attributed to preferential attachment around star scientists can alternatively reflect membership in extended teams that grow through cumulative advantage.
- The interpretation reframes some high collaborator counts as consequences of article-team organization rather than only individual collaborator acquisition.

## Caveats

- The simple projection is exact only under restrictive assumptions about one article per author.
- Longer windows, repeated collaborations, author productivity, and team overlap break the direct mapping.
- Large-team byline conventions and author disambiguation can strongly affect both sides of the projection.

## Links

- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [team-size distribution decomposition](team_size_distribution_decomposition.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)

## References

- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown; SciSciNet: W2109746829]

## Metadata

- Concept ID: `collaborator_distribution_team_size_projection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Milojevic (2014) (2014)
- Latest seen paper: Milojevic (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1309723111`
- OpenAlex ID: `W2109746829`
- Dimensions ID: `pub.1018284603`
- SciSciNet ID: `W2109746829`
- Aliases: team-size collaborator projection; FC(n) mapping; collaborator-tail team-size explanation; coauthor-degree team-size projection
