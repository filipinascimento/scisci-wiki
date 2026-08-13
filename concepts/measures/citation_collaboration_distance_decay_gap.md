# Citation-collaboration distance-decay gap

## Summary

Citation-collaboration distance-decay gap compares the geographic distance-decay of citation links with the distance-decay of collaboration links.

## Canonical Form

- Unit of analysis: city pair, country pair, citation edge, collaboration edge, or distance bin.
- Typical measure: difference between citation and collaboration distance-decay exponents or curves.
- Measurement target: whether intellectual attention travels farther than coauthorship collaboration.
- Empirical signature: citation flows decay more slowly with distance than collaboration flows.

## Uses in Science of Science

- Refines [geographic collaboration distance](geographic_collaboration_distance.md).
- Extends [scholarly spatial gravity law](scholarly_spatial_gravity_law.md) by comparing two edge types.
- Supports interpretation of [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md).
- Helps distinguish social collaboration constraints from intellectual diffusion.

## Operationalization

- Build city-city or country-country citation and collaboration networks.
- Normalize edge weights by node strength where appropriate.
- Fit distance-decay curves or gravity-law exponents separately for citation and collaboration.
- Compare exponents and interpret the gap.

## Evidence and Validations

- Verified full-text evidence from Pan, Kaski, and Fortunato (2012) estimates geographic distance effects for both citation and collaboration networks.
- The paper reports that collaboration strength decays with distance and that citation links also decay but with a different profile.
- The contrast shows that distant places may cite each other more readily than they collaborate directly.

## Caveats

- Citation and collaboration networks have different edge-generation processes.
- Distance-decay estimates depend on geocoding, node strength normalization, and binning.
- Long-distance citations can still be mediated by prior collaboration or field-level visibility.

## Links

- [geographic collaboration distance](geographic_collaboration_distance.md)
- [scholarly spatial gravity law](scholarly_spatial_gravity_law.md)
- [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md)
- [world city citation network](../representations/world_city_citation_network.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; SciSciNet: W2150607630; WoS: unknown]

## Metadata

- Concept ID: `citation_collaboration_distance_decay_gap`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: citation collaboration distance gap; citation versus collaboration decay; spatial edge-type decay gap
