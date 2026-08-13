# Multi-margin scale-free diagnostics

## Summary

Multi-margin scale-free diagnostics inspect several topology or usage distributions within the same system before claiming scale-free organization.

## Canonical Form

- Unit of analysis: networked system, degree margin, search trace, domain subgraph, usage distribution, or comparison panel.
- Typical representation: multiple tail plots, same-system distribution dashboard, or topology-plus-usage diagnostic table.
- Method target: avoid overclaiming from a single degree distribution when other margins reveal different organization.
- Empirical signature: a system can show scale-free behavior in incoming links, outgoing links, domain organization, search activity, or other margins, with each margin requiring its own interpretation.

## Uses in Science of Science

- Adds a within-system diagnostic layer to [scale-free degree distributions](../measures/scale_free_degree_distributions.md).
- Works with [degree semantics audit](../validations/degree_semantics_audit.md), because incoming citations, outgoing references, collaborations, and searches encode different processes.
- Helps compare citation networks, web graphs, repository usage, recommendation traces, and search-discovery systems.
- Connects [citation distribution scaling](../measures/citation_distribution_scaling.md) to platform and discovery traces such as [search-result reputation reinforcement](../mechanisms/search_result_reputation_reinforcement.md).

## Operationalization

- Identify all relevant margins in the same system, such as in-degree, out-degree, domain-level degree, query volume, download counts, or recommendation exposures.
- Fit and visualize each margin separately.
- Report which margins support a scale-free claim and which do not.
- Interpret each margin using its own data-generating process rather than treating all tails as equivalent evidence.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) notes that the World Wide Web shows scale-free features beyond incoming links, including organization within domains, search distributions, and links per webpage.
- This supports a diagnostic pattern where scale-free organization is checked across multiple margins of the same system.
- For science-of-science systems, the same logic applies when citation, reference, collaboration, usage, and search traces coexist.

## Caveats

- Multiple tested margins increase the risk of selective reporting.
- Margins can be correlated because they come from the same infrastructure or exposure mechanisms.
- Similar tail shapes across margins do not imply the same underlying mechanism.

## Links

- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [scale-free exemplar network panel](../datasets/scale_free_exemplar_network_panel.md)
- [degree semantics audit](../validations/degree_semantics_audit.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [search-result reputation reinforcement](../mechanisms/search_result_reputation_reinforcement.md)
- [network topology observability](network_topology_observability.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; SciSciNet: W2008620264; WoS: unknown]

## Metadata

- Concept ID: `multi_margin_scale_free_diagnostics`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: within-system tail diagnostics; multi-distribution scale-free check; scale-free margin panel; topology and usage tail audit
