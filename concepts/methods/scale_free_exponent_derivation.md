# Scale-free exponent derivation

## Summary

Scale-free exponent derivation analytically links a preferential-attachment degree-growth equation to the long-time degree distribution and its power-law exponent.

## Canonical Form

- Unit of analysis: growing-network model, node entry time, degree trajectory, cumulative distribution, or degree exponent.
- Typical representation: rate equation, degree-growth solution, cumulative probability transform, and P(k) power-law form.
- Method target: deriving the expected degree-distribution exponent from model assumptions rather than fitting it only by simulation.
- Empirical signature: the model predicts a stationary degree distribution with exponent gamma equal to three in the base undirected case.

## Uses in Science of Science

- Connects [node degree growth trajectory](../measures/node_degree_growth_trajectory.md) to [scale-free degree distributions](../measures/scale_free_degree_distributions.md).
- Provides the analytic layer for the [stationary scale-free growth model](stationary_scale_free_growth_model.md).
- Clarifies which assumptions must be changed before expecting different exponents across citation, collaboration, web, or patent networks.
- Gives a benchmark for extensions with aging, fitness, directedness, field growth, or baseline attractiveness.

## Operationalization

- Specify the degree-growth rate equation for a node as a function of current degree and network time.
- Solve the degree trajectory as a function of the node's entry time.
- Treat entry times as uniformly distributed across the growing network.
- Convert the cumulative probability for degree less than k into a degree density.
- Compare the analytic exponent with simulated and observed exponents.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) gives the rate equation in which a vertex's edge-acquisition rate is proportional to its current degree divided by network time.
- The paper solves this to k_i(t) = m(t / t_i)^0.5, where t_i is the time at which vertex i was added.
- It then converts the entry-time probability into a degree density and derives P(k) = 2m^2 / k^3.
- This gives gamma = 3, independent of m, for the base model.

## Caveats

- The derivation depends on the base model's assumptions: one-node-at-a-time growth, linear attachment, and simple edge addition.
- Real scholarly networks are directed, aged, field-structured, and affected by fitness and visibility.
- An analytic exponent is a benchmark, not a substitute for empirical goodness-of-fit or mechanism tests.

## Links

- [stationary scale-free growth model](stationary_scale_free_growth_model.md)
- [node degree growth trajectory](../measures/node_degree_growth_trajectory.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [age advantage in network growth](../mechanisms/age_advantage_in_network_growth.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [directed-fraction exponent shift](directed_fraction_exponent_shift.md)
- [growth-attachment null models](../validations/growth_attachment_null_models.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `scale_free_exponent_derivation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: gamma equals three derivation; BA exponent derivation; P(k) equals 2m2 over k3; continuum degree derivation
