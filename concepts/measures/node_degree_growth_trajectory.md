# Node degree growth trajectory

## Summary

Node degree growth trajectory measures how a paper, author, webpage, institution, or other network node accumulates links as the network evolves.

## Canonical Form

- Unit of analysis: node, node-entry time, degree time series, citation history, or collaboration history.
- Typical representation: k_i(t), degree-growth curve, age-normalized degree trajectory, or link-arrival rate.
- Measurement target: the rate at which existing nodes acquire new edges over time.
- Empirical signature: high-degree or older nodes acquire edges faster than otherwise similar lower-degree or later-entering nodes.

## Uses in Science of Science

- Gives [preferential attachment](../mechanisms/preferential_attachment.md) a time-resolved measurement beyond static degree distributions.
- Connects citation histories, collaboration histories, and institutional network histories to a common temporal graph measure.
- Helps separate [age advantage in network growth](../mechanisms/age_advantage_in_network_growth.md) from paper fitness, author reputation, venue prestige, or field growth.
- Provides an empirical target for [stationary scale-free growth models](../methods/stationary_scale_free_growth_model.md).

## Operationalization

- Record each node's entry time and degree at multiple network times.
- For citation networks, use citation arrivals after publication; for collaboration networks, use new coauthor edges after career entry or first publication.
- Estimate degree change per unit time as a function of current degree, age, field, and node attributes.
- Compare observed trajectories to the Barabasi-Albert prediction and to models with aging, fitness, or baseline attractiveness.
- Validate with held-out later snapshots when possible.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) derives a degree-growth equation in which the rate of edge acquisition for vertex i is proportional to its current degree.
- The paper gives the trajectory k_i(t) = m(t / t_i)^0.5, where t_i is the time the vertex entered the network.
- Barabasi and Albert explicitly state that this scaling property could be directly tested once time-resolved network-connectivity data are available.
- In science-of-science use, the same idea maps to time-stamped citation histories, coauthorship histories, and growing scholarly entity graphs.

## Caveats

- Entry time, exposure windows, field growth, and missing historical data can dominate observed degree growth.
- A node's degree trajectory may reflect fitness or content relevance rather than pure preferential attachment.
- Citation trajectories are directed and age-structured, so they often need additional aging or obsolescence terms.

## Links

- [preferential attachment](../mechanisms/preferential_attachment.md)
- [network growth](../mechanisms/network_growth.md)
- [linear preferential-attachment kernel](linear_attachment_kernel.md)
- [age advantage in network growth](../mechanisms/age_advantage_in_network_growth.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [growth-attachment null models](../validations/growth_attachment_null_models.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [paper fitness](paper_fitness.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `node_degree_growth_trajectory`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: degree trajectory; k_i(t); link accumulation curve; node connectivity growth
