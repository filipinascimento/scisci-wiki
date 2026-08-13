# Collaboration brokerage inequality distribution

## Summary

Collaboration brokerage inequality distribution measures how brokerage centrality is distributed across scientists, emphasizing the heavy-tailed concentration of shortest-path brokerage.

## Canonical Form

- Unit of analysis: author node, collaboration network, betweenness score, field, or component.
- Typical measure: distribution of betweenness or brokerage centrality values over authors.
- Measurement target: inequality in structural brokerage positions.
- Empirical signature: a small number of authors occupy very high-brokerage positions while most authors have low brokerage.

## Uses in Science of Science

- Extends [scientific brokerage centrality](scientific_brokerage_centrality.md) from node-level scores to distributional inequality.
- Supports [coauthorship broker-removal fragility](../validations/coauthorship_broker_removal_fragility.md).
- Adds a social-structure layer to [coauthorship networks](../representations/coauthorship_networks.md).
- Helps compare field collaboration structures beyond mean path length or clustering.

## Operationalization

- Compute betweenness centrality or a related brokerage score for authors.
- Plot or summarize the full score distribution.
- Compare concentration across fields or time periods.
- Interpret high-brokerage tails with field norms and author-disambiguation caveats.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) reports that betweenness centrality in scientific collaboration networks is highly heterogeneous.
- The paper identifies a small set of scientists with high betweenness and many authors with much lower values.
- This makes brokerage inequality a distributional motif rather than only a list of central actors.

## Caveats

- Brokerage depends on connected-component boundaries and shortest-path assumptions.
- Name disambiguation and source coverage can create artificial brokers.
- High brokerage can reflect administration, lab leadership, or interdisciplinary scope.

## Links

- [scientific brokerage centrality](scientific_brokerage_centrality.md)
- [coauthorship broker-removal fragility](../validations/coauthorship_broker_removal_fragility.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration path length](collaboration_path_length.md)
- [collaboration giant component](collaboration_giant_component.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; SciSciNet: W2097777089; WoS: unknown]

## Metadata

- Concept ID: `collaboration_brokerage_inequality_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: brokerage inequality; betweenness distribution in collaboration; collaboration broker concentration
