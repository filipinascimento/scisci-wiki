# Fixed-size random-network baseline

## Summary

Fixed-size random-network baseline compares observed heavy-tailed networks against classical models that hold the node set fixed and generate edges randomly or through small-world rewiring.

## Canonical Form

- Unit of analysis: observed network, random-graph baseline, small-world baseline, node degree, or degree distribution.
- Typical representation: Poisson degree distribution, peaked rewired-lattice degree distribution, exponential large-degree tail, or observed-versus-null contrast.
- Validation target: testing whether a network's high-degree nodes are compatible with fixed-size random connection models.
- Empirical signature: the baseline predicts very few highly connected nodes, while observed networks have many more hubs or heavy-tail nodes.

## Uses in Science of Science

- Provides a first null for [scale-free degree distributions](../measures/scale_free_degree_distributions.md) in citation, collaboration, and scholarly entity graphs.
- Clarifies why [network growth](../mechanisms/network_growth.md) must be modeled when scholarly systems continuously add papers, authors, topics, and venues.
- Complements [growth-attachment null models](growth_attachment_null_models.md), which test the Barabasi-Albert mechanisms after the fixed-size baseline fails.
- Helps avoid treating small-world structure and scale-free degree structure as the same empirical claim.

## Operationalization

- Reconstruct the observed network and its degree distribution.
- Generate Erdos-Renyi random graphs with matched node count and expected edge density.
- Generate or cite Watts-Strogatz small-world baselines when the claim concerns local clustering and short path length.
- Compare observed high-degree frequency, distribution shape, and tail mass with the null distributions.
- Document directedness, projections, isolates, and whether edge weights were binarized.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) contrasts observed power-law tails with Erdos-Renyi random graph theory.
- The paper states that the Erdos-Renyi model assumes a fixed number of vertices and connects each vertex pair with uniform probability, producing a Poisson degree distribution.
- The same text describes the Watts-Strogatz small-world model as a rewired lattice whose degree distribution remains peaked around the lattice coordination number.
- Barabasi and Albert argue that both fixed-size baselines make highly connected vertices practically absent, unlike the observed scale-free networks.

## Caveats

- A fixed-size baseline can be useful for some questions even when it fails to explain growth-driven degree skew.
- Matching only node count and edge density may ignore field, age, degree sequence, or bipartite projection constraints.
- Small-world and scale-free properties can coexist, so rejecting one baseline does not validate a complete generative mechanism.

## Links

- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [scale-free exemplar network panel](../datasets/scale_free_exemplar_network_panel.md)
- [network growth](../mechanisms/network_growth.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [growth-attachment null models](growth_attachment_null_models.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `fixed_size_random_network_baseline`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: Erdos-Renyi baseline; Watts-Strogatz degree baseline; fixed-node random graph null; Poisson degree baseline
