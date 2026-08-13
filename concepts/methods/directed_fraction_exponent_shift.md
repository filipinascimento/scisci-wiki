# Directed-fraction exponent shift

## Summary

Directed-fraction exponent shift modifies a scale-free growth model by allowing a fraction of links to be directed, shifting the predicted degree-distribution exponent away from the base value of three.

## Canonical Form

- Unit of analysis: directed edge, mixed directed-undirected network, exponent parameter, or scale-free model extension.
- Typical representation: fraction of directed links p, exponent gamma(p), or directedness-adjusted degree-distribution prediction.
- Method target: adapting a simple growth model to networks where citation, hyperlink, or other edges have direction.
- Empirical signature: directedness changes the expected degree exponent compared with the undirected base model.

## Uses in Science of Science

- Helps adapt the [stationary scale-free growth model](stationary_scale_free_growth_model.md) to [citation networks](../representations/citation_networks.md), patent citations, and web-link graphs.
- Connects [scale-free exponent derivation](scale_free_exponent_derivation.md) with model extensions that explain observed exponent variation.
- Reminds users not to compare exponents across networks without checking directedness, edge definition, and degree type.
- Provides a compact extension before adding aging, paper fitness, field boundaries, or copying mechanisms.

## Operationalization

- Decide whether the analyzed degree is in-degree, out-degree, total degree, or a mixed measure.
- Estimate or specify the fraction of links treated as directed in the model.
- Use the directedness-adjusted exponent prediction as a baseline, then compare with empirical tail fits.
- Report whether edge direction is structural, such as citations, or an artifact of data collection.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) notes that exponents across studied networks range from 2.1 to 4.
- The paper states that the base model can be modified to account for exponents different from gamma = 3.
- As one example, it reports that if a fraction p of links is directed, the model gives gamma(p) = 3 - p, supported by numerical simulations.
- This observation is directly relevant to citation networks, where edges are naturally directed from citing to cited papers.

## Caveats

- The directed-fraction expression is a simple model extension, not a full directed citation model.
- Empirical exponent differences can also reflect aging, fitness, field mixture, measurement truncation, or node-entry rules.
- Directedness should be paired with clear in-degree and out-degree definitions.

## Links

- [scale-free exponent derivation](scale_free_exponent_derivation.md)
- [stationary scale-free growth model](stationary_scale_free_growth_model.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [citation networks](../representations/citation_networks.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [paper fitness](../measures/paper_fitness.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `directed_fraction_exponent_shift`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: gamma(p) exponent shift; directed-link scale-free exponent; directedness exponent correction; mixed directed network exponent
