# Scholarly spatial gravity law

## Summary

Scholarly spatial gravity law measures how citation or collaboration flows between places scale with place-level scientific strength and geographic distance.

## Canonical Form

- Unit of analysis: city pair, country pair, directed citation edge, undirected collaboration edge, or distance bin.
- Typical representation: gravity-law equation, distance-decay exponent, normalized edge-weight curve, or log-log scaling plot.
- Measurement target: distance friction after accounting for the size or strength of the scholarly places involved.
- Empirical signature: normalized collaboration and citation flows decrease as a power of great-circle distance.

## Uses in Science of Science

- Refines [geographic collaboration distance](geographic_collaboration_distance.md) by normalizing edge weights by node strength.
- Provides a spatial model for [world city collaboration network](../representations/world_city_collaboration_network.md) and [world city citation network](../representations/world_city_citation_network.md).
- Supports tests of whether Internet-era science still has distance frictions.
- Connects science-of-science networks to spatial-network models in communication, migration, and trade.
- Complements strength-degree motifs that characterize node scaling before distance normalization: [city citation strength-degree scaling](city_citation_strength_degree_scaling.md) and [city collaboration strength-degree scaling](city_collaboration_strength_degree_scaling.md).

## Operationalization

- Build weighted city or country citation and collaboration networks.
- Use [affiliation fractional network projection](../methods/affiliation_fractional_network_projection.md) when papers or citations span multiple cities or countries.
- Compute node strengths for source and target locations.
- Compute great-circle distance between locations.
- Normalize edge weight by the product of endpoint strengths.
- Fit a power-law distance-decay curve and report the exponent separately for citation and collaboration flows.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) applies gravity-law reasoning to city collaboration and citation networks.
- For collaboration, the paper normalizes edge weight by the product of city strengths and reports a decay exponent of 1.16 with distance, except at very short distances.
- For citation, Pan et al. normalize directed edge weight by source out-strength and target in-strength and report a gravity-law exponent of 0.77.
- The paper also reports link-existence distance decay: collaboration link probability decreases with exponent 0.57, while citation link probability decreases with exponent 0.30.
- Pan et al. conclude that scientific interactions follow gravity-law patterns despite improved communication and transportation technologies.
- City-level strength-degree scaling pages preserve the associated node-level evidence so gravity-law interpretations are not conflated with hub-size scaling.

## Caveats

- Gravity-law exponents depend on geographic unit, time period, database coverage, and edge-weight normalization.
- Distance can proxy for language, national systems, topic similarity, funding programs, and institutional prestige.
- Power-law fits should be checked for short-distance deviations and alternative functional forms.

## Links

- [geographic collaboration distance](geographic_collaboration_distance.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [world city citation network](../representations/world_city_citation_network.md)
- [city citation strength-degree scaling](city_citation_strength_degree_scaling.md)
- [city collaboration strength-degree scaling](city_collaboration_strength_degree_scaling.md)
- [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)
- [affiliation fractional network projection](../methods/affiliation_fractional_network_projection.md)
- [city internal collaboration share](city_internal_collaboration_share.md)
- [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `scholarly_spatial_gravity_law`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: science gravity law; collaboration gravity law; citation gravity law; scholarly distance-decay law
