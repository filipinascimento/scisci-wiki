# Network growth

## Summary

Network growth is the mechanism in which scholarly or social networks expand through the continuous arrival of new nodes, such as papers, authors, webpages, teams, topics, or institutions.

## Canonical Form

- Unit of analysis: entering node, time step, publication cohort, author cohort, or network snapshot.
- Typical representation: temporal graph with node-entry events and edges from new nodes to earlier nodes.
- Mechanism: new entities enter an existing system and connect to previously present entities.
- Empirical signature: network size increases over time, and entry timing affects later degree, visibility, or impact.

## Uses in Science of Science

- Provides the growth side of [preferential attachment](preferential_attachment.md) and [cumulative advantage](cumulative_advantage.md).
- Distinguishes open scholarly systems from fixed-size random graph nulls.
- Makes entry time, exposure windows, and cohort size part of citation and collaboration modeling.
- Supplies a mechanism to test with [growth-attachment null models](../validations/growth_attachment_null_models.md).

## Operationalization

- Reconstruct a network with timestamps for node entry and edge formation.
- Define what counts as a new node: paper, author, venue, topic, institution, patent, webpage, or project.
- Compare models with continuous node arrival against fixed-node models.
- Control for database start dates, missing early nodes, field expansion, and changing coverage.
- Pair node-entry evidence with [linear preferential-attachment kernels](../measures/linear_attachment_kernel.md) before attributing heavy tails to attachment.
- Compare with [fixed-node attachment saturation baseline](../validations/fixed_node_attachment_saturation_baseline.md) when testing whether continuing entry is necessary.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) identifies continuous network expansion as a generic feature omitted by Erdos-Renyi and Watts-Strogatz models.
- Their text uses the scientific literature as a direct example: new papers continuously enter the network and cite papers already present.
- The paper's model starts with a small initial graph and adds one new vertex at each timestep, with the new vertex linking to existing vertices.
- Their growth-only variant removes preferential attachment and produces an exponential degree distribution, showing that growth is necessary but insufficient for the stationary scale-free result.

## Caveats

- Growth alone does not imply cumulative advantage or scale-free structure.
- Database backfiles can create artificial node-entry dates.
- In scholarly data, a node can enter one representation before another: preprints, journal articles, patents, datasets, and indexed records may have different dates.

## Links

- [preferential attachment](preferential_attachment.md)
- [cumulative advantage](cumulative_advantage.md)
- [growth-attachment null models](../validations/growth_attachment_null_models.md)
- [fixed-size random-network baseline](../validations/fixed_size_random_network_baseline.md)
- [fixed-node attachment saturation baseline](../validations/fixed_node_attachment_saturation_baseline.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [node degree growth trajectory](../measures/node_degree_growth_trajectory.md)
- [age advantage in network growth](age_advantage_in_network_growth.md)
- [citation networks](../representations/citation_networks.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `network_growth`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: growing network; node-entry process; expanding scholarly graph; open network growth
