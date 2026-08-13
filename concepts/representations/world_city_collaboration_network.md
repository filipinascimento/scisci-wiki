# World city collaboration network

## Summary

World city collaboration network represents coauthorship-based collaboration flows between cities using author affiliation locations.

## Canonical Form

- Unit of analysis: city, paper, affiliation pair, weighted undirected city-city edge, or self-link.
- Typical representation: weighted undirected spatial collaboration network with cities as nodes.
- Representation target: the geography of scientific teamwork and place-based coauthorship.
- Empirical signature: collaboration links are weighted by shared papers, self-links capture within-city collaboration, and link probability declines with distance.

## Uses in Science of Science

- Adds a spatial aggregation layer to [coauthorship networks](coauthorship_networks.md).
- Provides the collaboration counterpart to [world city citation network](world_city_citation_network.md).
- Supplies edge weights for [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md) and [geographic collaboration distance](../measures/geographic_collaboration_distance.md).
- Helps distinguish internal, domestic, and international collaboration in [international collaboration networks](international_collaboration_networks.md).
- Splits internal city closure into [city internal collaboration share](../measures/city_internal_collaboration_share.md).

## Operationalization

- Assign every paper to all affiliated cities through [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md).
- Project the paper-affiliation bipartite graph onto city-city edges using [affiliation fractional network projection](../methods/affiliation_fractional_network_projection.md).
- For a paper with n affiliations, create weighted links among all city pairs so total paper weight is conserved.
- Use self-links for single-city papers or repeated city affiliations.
- Aggregate weights over papers to construct the city collaboration network.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) constructs a city collaboration network with 18,199 nodes and 1,256,718 undirected links, including 14,954 self-links.
- The paper interprets self-link weights as internal collaboration within a city.
- Pan et al. report that self-link weights are more broadly distributed than between-city link weights, indicating that scholars collaborate more frequently within their own city than with any other city.
- The paper finds that the fraction of internal collaboration increases with city strength; larger cities have more collaboration inside the city, while small cities depend more on external collaborators.
- Pan et al. show that the probability of a collaboration link between two cities decreases with geographic distance.
- The same evidence is split into [city collaboration strength-degree scaling](../measures/city_collaboration_strength_degree_scaling.md) for reusing the city-size scaling pattern apart from the full network representation.

## Caveats

- Coauthorship misses informal collaboration, shared facilities, acknowledgments, and funding ties.
- City projection can inflate edges for papers with many affiliations if weighting is not explicit.
- City definitions and geocoding rules affect self-links and short-distance edges.

## Links

- [coauthorship networks](coauthorship_networks.md)
- [world city citation network](world_city_citation_network.md)
- [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)
- [affiliation fractional network projection](../methods/affiliation_fractional_network_projection.md)
- [city internal collaboration share](../measures/city_internal_collaboration_share.md)
- [city collaboration strength-degree scaling](../measures/city_collaboration_strength_degree_scaling.md)
- [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md)
- [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [international collaboration networks](international_collaboration_networks.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [regional elite remote-partnership maps](regional_elite_remote_partnership_maps.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `world_city_collaboration_network`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: city collaboration network; spatial coauthorship network; city-city collaboration graph; geographic collaboration network
