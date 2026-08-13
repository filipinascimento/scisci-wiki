# Local visibility citation decay

## Summary

Local visibility citation decay is the mechanism that nearby work is more visible to researchers, producing geographic distance decay in citation probability.

## Canonical Form

- Unit of analysis: city pair, country pair, citation edge, researcher, or paper.
- Typical representation: citation probability or citation strength declining with geographic distance.
- Mechanism: spatial proximity increases visibility, awareness, or social exposure to nearby work.
- Empirical signature: citation links decay with distance even after accounting for scientific strength.

## Uses in Science of Science

- Provides a mechanism for [geographic collaboration distance](../measures/geographic_collaboration_distance.md).
- Complements [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md).
- Helps interpret [world city citation network](../representations/world_city_citation_network.md).
- Connects citation behavior with [citation social-networking confound](../validations/citation_social_networking_confound.md).

## Operationalization

- Geocode citing and cited papers.
- Compute distances between source and target locations.
- Model citation probability or strength as a function of distance and node strength.
- Interpret distance effects as visibility mechanisms only after considering language, field, and collaboration ties.

## Evidence and Validations

- Verified full-text evidence from Pan, Kaski, and Fortunato (2012) motivates the possibility that proximity affects the visibility of scientific work.
- The paper reports distance decay in citation flows between cities.
- This supports a visibility mechanism distinct from the mechanical measurement of distance decay.

## Caveats

- Distance can proxy for language, national boundaries, funding systems, and collaboration networks.
- Local visibility does not imply local quality advantage.
- Digital access can weaken but not necessarily remove spatial visibility gradients.

## Links

- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md)
- [world city citation network](../representations/world_city_citation_network.md)
- [citation social-networking confound](../validations/citation_social_networking_confound.md)
- [citation-collaboration flow coupling](citation_collaboration_flow_coupling.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; SciSciNet: W2150607630; WoS: unknown]

## Metadata

- Concept ID: `local_visibility_citation_decay`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: spatial citation visibility; geographic citation visibility decay; local citation awareness mechanism
