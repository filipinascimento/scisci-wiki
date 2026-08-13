# Within-city citation self-link bias

## Summary

Within-city citation self-link bias measures the unusually strong and heterogeneous citation flows that remain inside the same city in a spatial citation network.

## Canonical Form

- Unit of analysis: city, citation self-link, within-city citation flow, paper citation, or spatial citation network.
- Typical representation: self-link weight distribution compared with between-city link weights.
- Measurement target: local concentration of citation flows after papers are assigned to cities.
- Empirical signature: citation self-link weights are broader or stronger than between-city link weights, indicating local citation concentration.

## Uses in Science of Science

- Adds a local-flow diagnostic to [world city citation network](../representations/world_city_citation_network.md).
- Distinguishes local citation concentration from [city internal collaboration share](city_internal_collaboration_share.md).
- Provides a spatial analogue to [self-citation rates](self_citation_rates.md), but at the city rather than author or journal level.
- Adds a caveat to [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md), because local citation flow may reflect collaboration neighborhoods.

## Operationalization

- Build a directed city citation network and retain city self-links.
- Compare self-link weight distributions with between-city link weight distributions.
- Normalize by city output, city citation strength, or field mix when comparing across places.
- Inspect overlap with within-city collaboration and author self-citation where possible.

## Evidence and Validations

- Verified full-text evidence from Pan, Kaski, and Fortunato (2012) reports 14,447 self-links in the city citation network.
- The paper compares the cumulative weight distributions of self-links and links between different cities.
- Pan et al. find that self-link weights are more heterogeneous, revealing a bias toward within-city citation.
- Their broader discussion links citation streams with collaboration streams, making local citation concentration a possible component of spatial collaboration-citation coupling.

## Caveats

- City self-links can include legitimate local field concentration, coauthor citations, institutional specialization, and address aggregation artifacts.
- This is not equivalent to author self-citation unless author identities are explicitly linked.
- Large cities can dominate self-link distributions unless output-normalized.

## Links

- [world city citation network](../representations/world_city_citation_network.md)
- [city internal collaboration share](city_internal_collaboration_share.md)
- [self-citation rates](self_citation_rates.md)
- [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md)
- [geographic collaboration distance](geographic_collaboration_distance.md)
- [city citation strength-degree scaling](city_citation_strength_degree_scaling.md)
- [scholarly spatial gravity law](scholarly_spatial_gravity_law.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; SciSciNet: W2150607630]

## Metadata

- Concept ID: `within_city_citation_self_link_bias`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: city citation self-link bias; within-city citation concentration; local citation self-link; spatial citation self-loop bias
