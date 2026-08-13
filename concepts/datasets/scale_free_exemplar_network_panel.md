# Scale-free exemplar network panel

## Summary

Scale-free exemplar network panel is a cross-domain set of empirical networks used to show that heavy-tailed connectivity appears in systems with very different node and edge meanings.

## Canonical Form

- Unit of analysis: empirical network, node, edge, degree distribution, or cross-domain comparison.
- Typical representation: network-by-network table with node count, average degree, fitted tail exponent, and node/edge definition.
- Data target: showing that scale-free connectivity is not confined to one domain such as citations or webpages.
- Empirical signature: multiple networks exhibit right-tailed degree distributions even though their nodes and links encode different relations.

## Uses in Science of Science

- Places [citation networks](../representations/citation_networks.md) inside a broader class of complex networks rather than treating citation skew as unique to science.
- Supports [scale-free degree distributions](../measures/scale_free_degree_distributions.md) as an empirical motif before mechanism testing.
- Supplies evidence for comparing scholarly graphs with web, social, infrastructure, biological, and technological networks.
- Motivates [fixed-size random-network baseline](../validations/fixed_size_random_network_baseline.md) checks when observed degree tails differ from classical random-graph expectations.

## Operationalization

- Define each network's node and edge semantics.
- Compute or import degree distributions with explicit sample size, average connectivity, and tail-fitting choices.
- Compare exponents and tail ranges across networks while reporting database truncation and measurement limits.
- Use the panel as descriptive evidence, then test mechanisms with temporal data and null models.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) compares actor collaboration, the World Wide Web, the western United States power grid, and scientific citation patterns.
- The paper reports power-law tails with approximate exponents of 2.3 for actor collaboration, 2.1 for the Web, about 4 for the power grid, and 3 for citation counts based on Redner's citation study.
- Figure 1 reports network sizes and average connectivity for the actor graph, Web graph, and power grid, making the examples a compact cross-domain empirical panel.
- The text also notes additional examples, including the C. elegans neural network and a computer-chip wiring diagram, while acknowledging data-quality limits for small or truncated systems.

## Caveats

- The panel is illustrative and does not by itself establish a common causal mechanism.
- Tail fits in small or truncated networks can be unstable.
- Degree definitions differ across directed, undirected, projected, and infrastructure networks.
- Cross-domain comparison can hide domain-specific processes such as citation aging, web crawling limits, and collaboration projection rules.

## Links

- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [citation networks](../representations/citation_networks.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [fixed-size random-network baseline](../validations/fixed_size_random_network_baseline.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [network growth](../mechanisms/network_growth.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; WoS: unknown]

## Metadata

- Concept ID: `scale_free_exemplar_network_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: cross-domain scale-free network panel; actor web power-grid citation panel; scale-free exemplar set; complex-network exemplar panel
