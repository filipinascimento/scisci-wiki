# Fixed-node attachment saturation baseline

## Summary

Fixed-node attachment saturation baseline tests whether preferential attachment without continuing node growth becomes nonstationary and eventually saturates the network.

## Canonical Form

- Unit of analysis: fixed node set, added edge, attachment-only model, degree distribution, or saturation time.
- Typical representation: Model B comparison, fixed-N attachment process, nonstationary degree distribution, or complete-graph endpoint.
- Validation target: isolating the contribution of network growth in a preferential-attachment model.
- Empirical signature: preferential attachment may create early heavy-tail behavior, but without new nodes the system drifts toward saturation rather than a stable scale-free distribution.

## Uses in Science of Science

- Splits the no-growth ablation from [growth-attachment null models](growth_attachment_null_models.md).
- Clarifies why citation and collaboration networks should be represented as open systems with new papers, authors, and venues.
- Complements [uniform-attachment exponential-tail baseline](uniform_attachment_exponential_tail_baseline.md), which removes preferential attachment but keeps growth.
- Helps distinguish temporary heavy-tail transients from stationary scaling claims.

## Operationalization

- Start with a fixed number of nodes and no or few edges.
- Add edges over time using a preferential-attachment target rule.
- Track the degree distribution at multiple times rather than only one snapshot.
- Measure whether the distribution stabilizes or moves toward dense saturation.
- Compare with a growing preferential-attachment model using the same attachment kernel.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) defines Model B with a fixed number of vertices and no continuing vertex growth.
- At each timestep, Model B selects a vertex and connects it to another vertex with probability proportional to the target's degree.
- The paper reports that Model B can show early power-law scaling but is not stationary.
- Because the node count is fixed and edges keep increasing, the system eventually reaches a state in which all vertices are connected, failing to reproduce the stationary power-law distribution.

## Caveats

- Fixed-node attachment models can be relevant for bounded populations, but scholarly systems usually have continuing entry.
- Saturation behavior depends on whether multi-edges, directed edges, and edge deletion are allowed.
- A single cross-sectional heavy tail can be a transient, so temporal validation is required.

## Links

- [growth-attachment null models](growth_attachment_null_models.md)
- [network growth](../mechanisms/network_growth.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [uniform-attachment exponential-tail baseline](uniform_attachment_exponential_tail_baseline.md)
- [node degree growth trajectory](../measures/node_degree_growth_trajectory.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `fixed_node_attachment_saturation_baseline`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: Model B attachment-only baseline; no-growth attachment null; fixed-node saturation model; nonstationary attachment baseline
