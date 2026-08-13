# Subfield scale-exponent profile

## Summary

International coauthorship subfields can be profiled by power-law exponents, fit quality, clustering coefficients, and random-network baselines.

## Canonical Form

- Unit of analysis: subfield, country collaboration network, degree distribution, gamma exponent, clustering coefficient, or random baseline.
- Typical representation: subfield table of degree-fit and clustering parameters.
- Mechanism, measurement, or validation target: field heterogeneity in international collaboration network topology.
- Empirical signature: subfields show different exponent estimates, fit quality, and clustering relative to random-network baselines.

## Uses in Science of Science

- Refines international-collaboration topology measure by linking it to [scale free degree distributions](scale_free_degree_distributions.md) and [collaboration clustering coefficient](collaboration_clustering_coefficient.md).
- Useful as a reusable check when [international collaboration small world](../representations/international_collaboration_small_world.md) is used in science-of-science inference.
- Creates cross-links to [institutional constraint degree tail](../validations/institutional_constraint_degree_tail.md) so the motif is not interpreted in isolation.

## Operationalization

- Estimate degree distributions and power-law exponents by subfield.
- Report fit quality, mean clustering coefficient, and random-network comparator.
- Inspect hooks and tails rather than assuming one universal power law.

## Evidence and Validations

- Verified local full text from Wagner and Leydesdorff (2005) lists exponents and clustering coefficients for astrophysics, geophysics, mathematical logic, polymers, soil science, and virology.
- The table supports subfield-specific topology profiles inside international collaboration networks.

## Caveats

- The paper itself notes deviations from a single power law, especially hooks and tails.
- Small country counts can make exponent estimates unstable.

## Links

- [Scale-free degree distributions](scale_free_degree_distributions.md)
- [Collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [International collaboration small-world structure](../representations/international_collaboration_small_world.md)
- [Institutional constraint degree-tail](../validations/institutional_constraint_degree_tail.md)
- [Subfield international coauthorship networks](../representations/subfield_international_coauthorship_networks.md)
- [Country collaboration core](country_collaboration_core.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]

## Metadata

- Concept ID: `subfield_scale_exponent_profile`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: ICS exponent table; subfield degree-fit profile; international coauthorship gamma profile
