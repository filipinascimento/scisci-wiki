# Affiliation fractional network projection

## Summary

Affiliation fractional network projection constructs city or country collaboration and citation networks from multi-affiliation papers by distributing edge weight across all represented locations.

## Canonical Form

- Unit of analysis: paper, affiliation, country, city, collaboration edge, citation edge, or self-link.
- Typical representation: bipartite paper-location graph projected to weighted location-location networks with fractional edge weights.
- Method target: avoid overcounting multi-affiliation publications when building spatial collaboration and citation networks.
- Empirical signature: collaboration edges and citation edges preserve total paper or citation weight while assigning shares across location pairs.

## Uses in Science of Science

- Provides the network-construction layer behind [world city collaboration networks](../representations/world_city_collaboration_network.md) and [world city citation networks](../representations/world_city_citation_network.md).
- Complements [geocoded affiliation extraction](geocoded_affiliation_extraction.md) by defining how geocoded affiliations become network edges.
- Supports [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md), [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md), and [city internal collaboration share](../measures/city_internal_collaboration_share.md).
- Generalizes to country, region, city, institution, or field co-occurrence networks when multi-membership needs fractional handling.

## Operationalization

- Build a paper-location bipartite graph from parsed affiliations.
- For a paper with n represented locations, add undirected collaboration links among all location pairs with total weight normalized across the pairs.
- Add a self-link of weight 1 when a publication has only one represented location.
- For a citation from a paper with n citing locations to a paper with m cited locations, add directed links from each citing location to each cited location with weight 1/(n*m).
- Sum weights over papers and citations to obtain location-location collaboration and citation networks.
- Preserve self-loops when within-location collaboration or citation flows are analytically relevant.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) describes publication-affiliation data as a bipartite graph projected onto country and city spaces.
- For collaboration networks, the paper assigns normalized undirected weight across all possible pairs of countries or cities represented in a multi-affiliation paper.
- For single-affiliation publications, Pan et al. add a self-link with weight 1.
- For citation networks, the paper creates directed fractional links from each citing location to each cited location, with edge weight 1/(n*m).
- The method explains why self-loops appear in both world citation and world collaboration networks.

## Caveats

- Fractional projection assumes equal contribution by all represented locations.
- Affiliation multiplicity can create dense cliques from one paper even when collaboration intensity among all location pairs is uneven.
- Self-links mix single-location papers, within-city teams, and potentially multiple institutions in the same place.

## Links

- [geocoded affiliation extraction](geocoded_affiliation_extraction.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [world city citation network](../representations/world_city_citation_network.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [city internal collaboration share](../measures/city_internal_collaboration_share.md)
- [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md)
- [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `affiliation_fractional_network_projection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: fractional affiliation projection; paper-location network projection; fractional spatial edge weighting; affiliation clique projection
