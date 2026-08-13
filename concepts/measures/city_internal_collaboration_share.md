# City internal collaboration share

## Summary

City internal collaboration share measures how much of a city's collaboration activity occurs among affiliations within the same city rather than with external cities.

## Canonical Form

- Unit of analysis: city, city collaboration self-link, collaboration edge, paper affiliation set, or city strength.
- Typical representation: self-link weight divided by total city collaboration strength.
- Measurement target: local closure versus external dependence in city-level scientific collaboration.
- Empirical signature: larger or stronger cities can have higher internal collaboration shares, while smaller cities rely more on external collaborators.

## Uses in Science of Science

- Splits an interpretable city-level measure out of [world city collaboration networks](../representations/world_city_collaboration_network.md).
- Provides a local-collaboration counterpart to [geographic collaboration distance](geographic_collaboration_distance.md) and [scholarly spatial gravity law](scholarly_spatial_gravity_law.md).
- Helps distinguish local agglomeration from long-distance scientific partnership.
- Connects to [city science agglomeration scaling](../mechanisms/city_science_agglomeration_scaling.md) by testing whether large city systems collaborate internally.

## Operationalization

- Construct a weighted city collaboration network from affiliation-derived coauthorships.
- Treat same-city collaborations or single-city papers as self-link weight when the network design supports self-links.
- Compute the ratio of the city self-link weight to total city collaboration strength.
- Compare the ratio across city size, city strength, field, country, and time.
- Report how multi-affiliation papers and multiple institutions inside one city are counted.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) constructs a city collaboration network with self-links indicating internal city collaboration.
- The paper compares self-link weights with between-city link weights and finds self-links more broadly distributed.
- Pan et al. compute the ratio of self-link weight to node strength as the fraction of internal collaboration.
- The paper reports that this ratio increases with city strength: larger cities collaborate more inside the city, while small cities write more papers with external collaborators.

## Caveats

- Self-link interpretation depends on whether same-city multi-institution papers and single-affiliation papers are both counted as internal collaboration.
- City boundaries can make nearby institutions look external or internal depending on geocoding.
- High internal collaboration share is not necessarily isolation; it can coexist with strong external links.

## Links

- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [world city citation network](../representations/world_city_citation_network.md)
- [city science agglomeration scaling](../mechanisms/city_science_agglomeration_scaling.md)
- [geographic collaboration distance](geographic_collaboration_distance.md)
- [scholarly spatial gravity law](scholarly_spatial_gravity_law.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)
- [affiliation fractional network projection](../methods/affiliation_fractional_network_projection.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `city_internal_collaboration_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: internal city collaboration ratio; collaboration self-link share; within-city collaboration share; city collaboration closure
