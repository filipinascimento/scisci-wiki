# Growth-attachment null models

## Summary

Growth-attachment null models test whether network heavy tails require both network growth and preferential attachment by comparing full models with growth-only and attachment-only variants.

## Canonical Form

- Unit of analysis: growing citation, collaboration, web, patent, or scholarly entity network.
- Typical representation: full growth-plus-attachment model, growth-only null, attachment-only null, degree distribution, or attachment kernel.
- Validation target: determine whether a scale-free or heavy-tailed network signature can be explained by the proposed mechanisms.
- Empirical signature: removing either growth or preferential attachment changes the resulting degree distribution or eliminates the stationary heavy tail.

## Uses in Science of Science

- Provides a validation layer for [preferential attachment](../mechanisms/preferential_attachment.md).
- Prevents overinterpreting [scale-free degree distributions](../measures/scale_free_degree_distributions.md) as direct evidence of one mechanism.
- Connects [cumulative advantage](../mechanisms/cumulative_advantage.md) with explicit network-model ablations.
- Applies to [citation networks](../representations/citation_networks.md), [coauthorship networks](../representations/coauthorship_networks.md), and multiplex scholarly graphs.

## Operationalization

- Construct a time-ordered network with clear node-entry and edge-formation events.
- Fit or simulate a [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md) with [network growth](../mechanisms/network_growth.md) and a [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md).
- Compare against a growth-only model with uniform attachment and an attachment-only model without expanding node count.
- Evaluate degree distributions, stationarity, attachment kernels, [node degree growth trajectories](../measures/node_degree_growth_trajectory.md), and predictive fit.
- Add [nonlinear attachment scaling constraint](nonlinear_attachment_scaling_constraint.md) when growth and attachment are present but the attachment kernel shape is unspecified.
- Add aging, fitness, field, and database-coverage controls before treating the null rejection as a social mechanism.
- Use [uniform-attachment exponential-tail baseline](uniform_attachment_exponential_tail_baseline.md) and [fixed-node attachment saturation baseline](fixed_node_attachment_saturation_baseline.md) as explicit Barabasi-Albert ablation variants.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) uses scientific manuscripts as an example of preferential connectivity: new manuscripts are more likely to cite already well-known, highly cited papers.
- The paper defines a model in which new vertices enter a growing network and connect with probability proportional to existing connectivity, Pi(k_i) = k_i / sum_j k_j.
- Barabasi and Albert test two variants: Model A keeps network growth but removes preferential attachment, while Model B keeps preferential attachment but removes growth.
- The failure of both variants supports the claim that both growth and preferential attachment are needed for the stationary power-law distribution in their model.
- The same full text motivates a separate [age advantage in network growth](../mechanisms/age_advantage_in_network_growth.md), because earlier-entering vertices have more time to accumulate links under the model.

## Caveats

- Model ablations validate a mechanism class, not a complete empirical explanation.
- Real scholarly networks can include aging, field boundaries, author disambiguation errors, copying, recommendation systems, and fitness heterogeneity.
- A null model should match the temporal resolution and database coverage of the observed network.

## Links

- [preferential attachment](../mechanisms/preferential_attachment.md)
- [network growth](../mechanisms/network_growth.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [nonlinear attachment scaling constraint](nonlinear_attachment_scaling_constraint.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [uniform-attachment exponential-tail baseline](uniform_attachment_exponential_tail_baseline.md)
- [fixed-node attachment saturation baseline](fixed_node_attachment_saturation_baseline.md)
- [fixed-size random-network baseline](fixed_size_random_network_baseline.md)
- [node degree growth trajectory](../measures/node_degree_growth_trajectory.md)
- [age advantage in network growth](../mechanisms/age_advantage_in_network_growth.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [cumulative advantage distribution](../methods/cumulative_advantage_distribution.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [citation networks](../representations/citation_networks.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `growth_attachment_null_models`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: growth preferential-attachment ablations; attachment null model; scale-free growth nulls; network growth ablation
