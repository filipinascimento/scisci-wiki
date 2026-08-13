# Interlayer switching costs

## Summary

Interlayer switching costs measure the weight, effort, time, uncertainty, or penalty associated with moving between layers in a multilayer network.

## Canonical Form

- Unit of analysis: node, layer pair, interlayer edge, node-layer tuple, or transition event.
- Typical representation: interlayer edge weight, layer-switching penalty, transition time, coupling weight, or switching-probability modifier.
- Measurement target: how easily flow, attention, people, information, or interpretation moves between relation layers.
- Empirical signature: two layers may be connected in principle but costly to traverse in practice.

## Uses in Science of Science

- Gives [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md) an interpretable weight scale.
- Controls layer-switching behavior in [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md).
- Helps represent transitions among citation, coauthorship, affiliation, funding, topic, patent, and dataset layers in [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Can encode relation confidence, time lag, institutional friction, translation cost, data-linkage uncertainty, or user-defined penalties in scholarly graph navigation.

## Operationalization

- Define which layer pairs are traversable and whether switching is node-specific, layer-pair-specific, directed, or symmetric.
- Estimate or assign interlayer weights using observed transition time, relation confidence, semantic distance, policy cost, or domain priors.
- Attach switching costs to [counterpart-node coupling](../representations/counterpart_node_coupling.md) or [ordinal interlayer coupling](../representations/ordinal_interlayer_coupling.md) edges when the model uses those interlayer forms.
- Use the weights in the multilayer adjacency tensor, supra-adjacency matrix, random-walk transition tensor, or diffusion operator.
- Compare results with unit-switching and no-switching baselines.
- Report whether larger weights mean easier movement or higher cost, then normalize consistently.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) states that counterpart-node interlayer connections can have different weights for different layer pairs and different entities.
- The paper illustrates this with transportation networks, where interlayer weight can reflect the cost of switching between transportation modes at a node.
- De Domenico et al. note that these weights matter for layer-changing dynamics, which directly affects diffusion and random walks on multilayer networks.
- In science-of-science graphs, analogous costs can represent the difficulty of moving from publications to patents, grants, datasets, policy documents, or collaboration layers.

## Caveats

- Switching costs are often modeled rather than directly observed.
- Different layers can require different units, so normalization can dominate results.
- A low graph cost does not prove an easy social, cognitive, or institutional transition.

## Links

- [intralayer and interlayer adjacency](../representations/intralayer_interlayer_adjacency.md)
- [counterpart-node coupling](../representations/counterpart_node_coupling.md)
- [ordinal interlayer coupling](../representations/ordinal_interlayer_coupling.md)
- [multilayer adjacency tensors](../representations/multilayer_adjacency_tensors.md)
- [supra-adjacency matrices](../representations/supra_adjacency_matrices.md)
- [multilayer diffusion and random walks](../methods/multilayer_diffusion_random_walks.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [multilayer projection and overlay networks](../representations/multilayer_projection_overlay_networks.md)
- [science-technology distance](science_technology_distance.md)
- [science-technology lag](science_technology_lag.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `interlayer_switching_costs`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/PhysRevX.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: layer-switching cost; interlayer coupling weight; layer-crossing penalty; counterpart-node transition cost
