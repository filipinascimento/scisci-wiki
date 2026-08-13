# Degree semantics audit

## Summary

Degree semantics audit is the validation step of stating what node degree means in each empirical network before comparing degree distributions across systems.

## Canonical Form

- Unit of analysis: node, edge, degree, network type, or cross-system comparison.
- Typical representation: degree distribution accompanied by node and edge semantics.
- Validation target: prevent numerical degree similarity from being overinterpreted across systems with different relation meanings.
- Empirical signature: degree is interpreted separately for webpages, actors, power stations, citations, and scholarly entities.

## Uses in Science of Science

- Qualifies [scale-free degree distributions](../measures/scale_free_degree_distributions.md).
- Supports comparisons in [scale-free exemplar network panel](../datasets/scale_free_exemplar_network_panel.md).
- Links to [coauthorship-citation network distinction](../representations/coauthorship_citation_network_distinction.md).
- Helps distinguish citation degree, collaboration degree, web degree, and infrastructure degree.

## Operationalization

- Define the node population and edge relation.
- State whether degree is in-degree, out-degree, total degree, weighted degree, or projected degree.
- Compare distributions only after recording these semantics.
- Treat cross-domain exponent comparisons as suggestive unless degree meanings are aligned.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) compares several systems while defining what vertices and links mean in each.
- The paper includes systems where degree represents social collaboration, hyperlinks, power-grid connections, or citations.
- This makes degree semantics a necessary companion to cross-system scaling claims.

## Caveats

- Clear semantics do not remove all measurement bias.
- Some networks have multiple meaningful degree definitions.
- Projection from bipartite or multilayer data can change degree interpretation.

## Links

- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [scale-free exemplar network panel](../datasets/scale_free_exemplar_network_panel.md)
- [coauthorship-citation network distinction](../representations/coauthorship_citation_network_distinction.md)
- [citation networks](../representations/citation_networks.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; SciSciNet: W2008620264]

## Metadata

- Concept ID: `degree_semantics_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: degree meaning audit; node-degree semantics check; cross-system degree caveat; degree interpretation audit
