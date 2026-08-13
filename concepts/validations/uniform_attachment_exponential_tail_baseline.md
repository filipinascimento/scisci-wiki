# Uniform-attachment exponential-tail baseline

## Summary

Uniform-attachment exponential-tail baseline tests whether network growth alone, without preferential attachment, produces an exponential degree distribution rather than a stationary scale-free tail.

## Canonical Form

- Unit of analysis: growing network, new node, existing target node, degree distribution, or ablation model.
- Typical representation: growth-only model, uniform target probability, exponential degree tail, or Model A comparison.
- Validation target: isolating the contribution of preferential attachment in a growing-network model.
- Empirical signature: when new nodes attach uniformly to existing nodes, the heavy tail disappears and high-degree hubs are much rarer.

## Uses in Science of Science

- Splits the growth-only ablation from [growth-attachment null models](growth_attachment_null_models.md).
- Tests whether [network growth](../mechanisms/network_growth.md) is sufficient to explain citation, collaboration, or scholarly graph skew.
- Provides a direct contrast for [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md).
- Helps justify estimating attachment kernels rather than only measuring node-entry rates.

## Operationalization

- Build or simulate a growing network with the same node-entry schedule as the target model.
- Add each new node with a fixed number or distribution of edges.
- Select existing target nodes with equal probability rather than degree-proportional probability.
- Compare the simulated degree distribution with the full preferential-attachment model and the observed network.
- Report whether the resulting tail is exponential, truncated, or otherwise non-scale-free.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) defines Model A as a growing network in which preferential attachment is eliminated.
- In Model A, the new vertex connects with equal probability to any existing vertex.
- The paper reports that Model A leads to an exponential degree distribution, showing that growth alone eliminates the scale-free feature.
- This result supports the claim that preferential attachment is necessary in the base Barabasi-Albert mechanism.

## Caveats

- Uniform attachment is a deliberately simple ablation, not a realistic complete model of scholarly attention.
- Real networks may include baseline attractiveness, semantic relevance, recommendation systems, field boundaries, and aging.
- Rejecting uniform attachment does not prove that attachment is exactly linear.

## Links

- [growth-attachment null models](growth_attachment_null_models.md)
- [network growth](../mechanisms/network_growth.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [fixed-size random-network baseline](fixed_size_random_network_baseline.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `uniform_attachment_exponential_tail_baseline`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: Model A growth-only baseline; uniform attachment null; exponential-tail growth model; no-preferential-attachment ablation
