# City collaboration strength-degree scaling

## Summary

City collaboration strength-degree scaling measures how a city's collaboration volume grows with the number of other cities it collaborates with.

## Canonical Form

- Unit of analysis: city, weighted collaboration node, degree, node strength, city-city coauthorship edge, or self-link.
- Typical representation: power-law relation between city collaboration degree and collaboration strength.
- Measurement target: whether highly connected cities also have disproportionately strong collaboration ties.
- Empirical signature: city collaboration strength grows superlinearly with degree in the spatial coauthorship network.

## Uses in Science of Science

- Adds a node-scaling measure to [world city collaboration network](../representations/world_city_collaboration_network.md).
- Connects [city internal collaboration share](city_internal_collaboration_share.md) to broader city connectivity.
- Extends [collaboration strength distribution](collaboration_strength_distribution.md) from edge weights to city-node scaling.
- Provides a spatial network measure for [coauthorship networks](../representations/coauthorship_networks.md).

## Operationalization

- Construct a weighted city collaboration network from geocoded author affiliations.
- Compute each city's degree and weighted collaboration strength.
- Fit the relationship between degree and strength across cities.
- Inspect whether superlinear scaling is driven by large cities, internal collaboration, or international ties.

## Evidence and Validations

- Verified full-text evidence from Pan, Kaski, and Fortunato (2012) constructs a city collaboration network with weighted undirected links.
- The paper defines city degree as the number of other cities with which a city collaborates and node strength as an indicator of collaboration volume.
- Pan et al. report that city collaboration strength scales superlinearly with degree.
- They interpret this as evidence that higher-degree city nodes are more frequently connected by stronger collaboration links.

## Caveats

- City degree and strength are sensitive to affiliation parsing, address completeness, and fractional edge weighting.
- Superlinear scaling can reflect large universities, hospitals, multi-site collaborations, or city aggregation rules.
- Internal collaboration self-links should be separated from external city degree when interpreting collaboration reach.

## Links

- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [city internal collaboration share](city_internal_collaboration_share.md)
- [collaboration strength distribution](collaboration_strength_distribution.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [city science agglomeration scaling](../mechanisms/city_science_agglomeration_scaling.md)
- [scholarly spatial gravity law](scholarly_spatial_gravity_law.md)
- [affiliation fractional network projection](../methods/affiliation_fractional_network_projection.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; SciSciNet: W2150607630]

## Metadata

- Concept ID: `city_collaboration_strength_degree_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: city collaboration degree-strength scaling; spatial collaboration strength scaling; city coauthorship strength scaling; collaboration node strength scaling
