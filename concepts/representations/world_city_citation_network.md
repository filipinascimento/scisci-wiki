# World city citation network

## Summary

World city citation network represents directed citation flows between cities by assigning citing and cited papers to the cities in their author affiliations.

## Canonical Form

- Unit of analysis: city, directed city-city citation edge, paper citation, self-link, or country aggregation.
- Typical representation: weighted directed spatial citation network with city nodes and citation-flow edge weights.
- Representation target: geographic structure of scientific recognition and information flow.
- Empirical signature: weighted citation links are broad, self-links are unusually heterogeneous, and citation link probability decays with geographic distance.

## Uses in Science of Science

- Adds a spatial layer to [citation networks](citation_networks.md).
- Supports [geographic collaboration distance](../measures/geographic_collaboration_distance.md), [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md), and [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md).
- Makes it possible to compare citation flows with [world city collaboration network](world_city_collaboration_network.md).
- Provides a place-based representation for studying how new findings diffuse across geographic areas.
- Connects city-level flows to country-level visual summaries such as [research contribution cartograms](research_contribution_cartogram.md).

## Operationalization

- Assign each paper to all cities in its affiliations using [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md).
- For each paper citation, create directed weighted links from every citing-paper city to every cited-paper city.
- Fractionally weight links when citing or cited papers have multiple affiliated cities using [affiliation fractional network projection](../methods/affiliation_fractional_network_projection.md).
- Sum directed weights over all citation events.
- Retain self-links when within-city citation flows are analytically relevant.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) constructs a city citation network with 18,199 city nodes and 9,494,021 directed links, including 14,447 self-links.
- The paper defines directed links as publications of one city citing publications of another city.
- Pan et al. report broad distributions of citation link weights and especially heterogeneous self-link weights, indicating a bias toward within-city citation.
- The paper reports two in-strength versus in-degree scaling regimes: an exponent near 0.91 for low in-degree nodes and near 2.20 for high in-degree nodes.
- Pan et al. also show that the probability of a citation link between two cities decreases with distance.
- The same evidence is now split into [within-city citation self-link bias](../measures/within_city_citation_self_link_bias.md) and [city citation strength-degree scaling](../measures/city_citation_strength_degree_scaling.md) so local closure and hub scaling can be reused separately.

## Caveats

- City citation networks can mix intellectual influence, coauthor awareness, self-citation, local field composition, and database coverage.
- Multi-affiliation papers create many directed city pairs and require fractional counting choices.
- Geographic citation flow does not by itself identify knowledge use or citation meaning.

## Links

- [citation networks](citation_networks.md)
- [world city collaboration network](world_city_collaboration_network.md)
- [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)
- [affiliation fractional network projection](../methods/affiliation_fractional_network_projection.md)
- [research contribution cartogram](research_contribution_cartogram.md)
- [city science agglomeration scaling](../mechanisms/city_science_agglomeration_scaling.md)
- [within-city citation self-link bias](../measures/within_city_citation_self_link_bias.md)
- [city citation strength-degree scaling](../measures/city_citation_strength_degree_scaling.md)
- [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md)
- [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [citation contexts and functions](citation_contexts.md)
- [web of science](../datasets/web_of_science.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `world_city_citation_network`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: city citation flow network; spatial citation network; geographic citation network; city-city citation graph
