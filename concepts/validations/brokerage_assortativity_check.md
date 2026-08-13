# Brokerage assortativity check

## Summary

Brokerage assortativity check tests whether high-betweenness scientists preferentially collaborate with other high-betweenness scientists, separating brokerage mixing from degree assortativity.

## Canonical Form

- Unit of analysis: coauthorship edge, author betweenness score, field, time window, or source-domain panel.
- Typical representation: betweenness-betweenness correlation across coauthor pairs, binned partner-brokerage curve, or null-model comparison.
- Validation target: whether brokers cluster with brokers or bridge to otherwise peripheral scientists.
- Empirical signature: collaborator betweenness is no higher for high-betweenness scientists than for low-betweenness scientists, or differs only under specific field controls.

## Uses in Science of Science

- Adds a brokerage-specific validation to [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md).
- Complements [collaboration assortativity](../measures/collaboration_assortativity.md), which measures degree-degree mixing rather than betweenness-betweenness mixing.
- Helps distinguish hub-to-hub collaboration from bridge-to-periphery collaboration in [coauthorship networks](../representations/coauthorship_networks.md).
- Can test whether influential collaboration positions form an elite brokerage core or remain distributed across ordinary coauthor ties.

## Operationalization

- Build an author-disambiguated coauthorship network and compute betweenness centrality for each author.
- For each coauthorship edge, record the betweenness score of both endpoints.
- Estimate the correlation, rank association, or binned partner profile of endpoint betweenness.
- Compare with degree-preserving, field-preserving, or time-window null models.
- Report whether the result changes under weighted coauthorship edges or after removing large-team papers.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) summarizes work on correlations between the betweenness scores of collaborators.
- Newman reports that there is very little correlation between collaborator betweenness scores in coauthorship networks.
- The paper interprets this as evidence that influential scientists do not preferentially collaborate with other influential scientists in a strong way.
- This check is distinct from degree assortativity, because a scientist can have many collaborators without sitting on many shortest paths.

## Caveats

- Betweenness is sensitive to missing data, disconnected components, and shortest-path assumptions.
- Low brokerage assortativity does not rule out status assortativity by citations, institution, funding, or prestige.
- Weighted edges, large-team filters, and field stratification can change the interpretation of betweenness mixing.

## Links

- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [collaboration assortativity](../measures/collaboration_assortativity.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [coauthorship broker-removal fragility](coauthorship_broker_removal_fragility.md)
- [status-assortative collaboration](../mechanisms/status_assortative_collaboration.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `brokerage_assortativity_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: betweenness assortativity check; broker-broker collaboration check; brokerage mixing validation; betweenness correlation across coauthors
