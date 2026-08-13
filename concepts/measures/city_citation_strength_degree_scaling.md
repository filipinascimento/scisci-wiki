# City citation strength-degree scaling

## Summary

City citation strength-degree scaling measures how a city's citation-flow strength grows with the number of other cities connected to it in a spatial citation network.

## Canonical Form

- Unit of analysis: city, directed citation network node, in-degree, out-degree, in-strength, out-strength, or citation-flow edge.
- Typical representation: power-law relation between city citation degree and citation strength.
- Measurement target: whether highly connected cities receive or send disproportionately strong citation flows.
- Empirical signature: city citation strength scales nonlinearly with degree, with different regimes for low- and high-degree cities.

## Uses in Science of Science

- Adds a node-scaling measure to [world city citation network](../representations/world_city_citation_network.md).
- Links spatial citation flows to [city science agglomeration scaling](../mechanisms/city_science_agglomeration_scaling.md).
- Provides a geographic version of network strength-degree scaling for [citation networks](../representations/citation_networks.md).
- Helps interpret [scholarly spatial gravity law](scholarly_spatial_gravity_law.md) by documenting node-level heterogeneity before distance normalization.

## Operationalization

- Construct a directed city citation network from geocoded citing and cited papers.
- Compute in-degree, out-degree, in-strength, and out-strength for each city.
- Fit strength-degree scaling, preferably checking for regime changes or thresholds.
- Compare self-links, low-degree cities, and high-degree cities separately.

## Evidence and Validations

- Verified full-text evidence from Pan, Kaski, and Fortunato (2012) builds a city citation network with directed weighted links between citing and cited cities.
- The paper reports that city in-strength scales with in-degree according to two regimes.
- For low in-degree nodes, the exponent is close to linear; for high in-degree nodes, the exponent is strongly superlinear.
- Pan et al. interpret the superlinear regime as stronger links being more frequently connected to high-degree cities.

## Caveats

- Degree and strength depend on affiliation geocoding, fractional counting, and citation-window choices.
- Superlinear scaling can reflect field mix, large institutions, international coauthorship, and database coverage, not only city-level scientific capacity.
- Citation self-links and coauthor citations should be inspected separately when local concentration is important.

## Links

- [world city citation network](../representations/world_city_citation_network.md)
- [citation networks](../representations/citation_networks.md)
- [city science agglomeration scaling](../mechanisms/city_science_agglomeration_scaling.md)
- [scholarly spatial gravity law](scholarly_spatial_gravity_law.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [within-city citation self-link bias](within_city_citation_self_link_bias.md)
- [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; SciSciNet: W2150607630]

## Metadata

- Concept ID: `city_citation_strength_degree_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: city citation degree-strength scaling; spatial citation strength scaling; citation in-strength degree scaling; city citation flow scaling
