# Stationary scale-free growth model

## Summary

Stationary scale-free growth model is the Barabasi-Albert generative model in which network growth plus linear preferential attachment produces a time-stable power-law degree distribution.

## Canonical Form

- Unit of analysis: growing network, time step, entering node, existing node, or new edge.
- Typical representation: initial graph, one new node per timestep, m new edges, attachment probability proportional to current degree, and degree distribution P(k).
- Method target: explain scale-free degree distributions with a simple generative mechanism rather than a fixed-size random graph.
- Empirical signature: after growth, the degree distribution approaches a stationary power law with exponent near three in the base model.

## Uses in Science of Science

- Supplies a baseline model for citation networks, coauthorship networks, web graphs, patent citation networks, and other scholarly graphs.
- Connects [network growth](../mechanisms/network_growth.md), [linear preferential-attachment kernels](../measures/linear_attachment_kernel.md), and [scale-free degree distributions](../measures/scale_free_degree_distributions.md).
- Provides a compact null before adding citation aging, paper fitness, venue prestige, field growth, institution stratification, or semantic relevance.
- Helps define what a model must beat when claiming a more specific science-of-science mechanism.
- Separates model-robustness and diagnostic submotifs such as [variable entry-edge count robustness](../validations/variable_entry_edge_count_robustness.md), [scale-free exponent heterogeneity trigger](../validations/scale_free_exponent_heterogeneity_trigger.md), [multi-margin scale-free diagnostics](multi_margin_scale_free_diagnostics.md), and [network topology stability target](network_topology_stability_target.md).

## Operationalization

- Start with an initial network of m0 nodes.
- At each timestep, add one new node with m edges to existing nodes.
- Select each target node with probability proportional to its current degree.
- Simulate or derive the resulting degree distribution and compare against observed networks.
- Evaluate growth-only and attachment-only variants as ablation checks.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) defines the model with m0 initial vertices and a new vertex with m edges added at every timestep.
- Their model uses Pi(k_i) = k_i / sum_j k_j and produces a stationary scale-invariant distribution with exponent gamma approximately 2.9 in simulation.
- The paper derives the long-time solution P(k) = 2m^2 / k^3, giving gamma = 3 independent of m.
- Model A without preferential attachment and Model B without continuing growth fail to reproduce the same stationary power-law distribution, supporting the paired mechanism.
- The same text notes that directed-link fractions can shift the expected exponent, making directedness one route from the base model to observed exponent variation.

## Caveats

- The base model is intentionally minimal and does not represent all scholarly mechanisms.
- Real citation and collaboration networks include aging, field boundaries, node fitness, directedness, copying, recommendation systems, and changing database coverage.
- A fitted power law does not validate the model unless the temporal growth and attachment assumptions are also tested.

## Links

- [network growth](../mechanisms/network_growth.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [scale-free exponent derivation](scale_free_exponent_derivation.md)
- [directed-fraction exponent shift](directed_fraction_exponent_shift.md)
- [scale-free exponent heterogeneity trigger](../validations/scale_free_exponent_heterogeneity_trigger.md)
- [variable entry-edge count robustness](../validations/variable_entry_edge_count_robustness.md)
- [multi-margin scale-free diagnostics](multi_margin_scale_free_diagnostics.md)
- [network topology stability target](network_topology_stability_target.md)
- [node degree growth trajectory](../measures/node_degree_growth_trajectory.md)
- [age advantage in network growth](../mechanisms/age_advantage_in_network_growth.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [growth-attachment null models](../validations/growth_attachment_null_models.md)
- [uniform-attachment exponential-tail baseline](../validations/uniform_attachment_exponential_tail_baseline.md)
- [fixed-node attachment saturation baseline](../validations/fixed_node_attachment_saturation_baseline.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [citation networks](../representations/citation_networks.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `stationary_scale_free_growth_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: Barabasi-Albert model; BA model; scale-free growth model; growth preferential-attachment model
