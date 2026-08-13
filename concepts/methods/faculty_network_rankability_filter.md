# Faculty-network rankability filter

## Summary

Filters field hiring networks to universities with relevant field units and enough within-field hiring flow for prestige ranks to be identifiable.

## Canonical Form

- Unit of analysis: field-specific faculty hiring network.
- Typical representation: iteratively pruned node set meeting rankability or in-flow requirements.
- Method target: identifiable prestige ranking in sparse field networks.
- Empirical signature: peripheral or disconnected units are excluded before rank inference.

## Uses in Science of Science

- Adds a network-preprocessing step to [faculty hiring networks](../representations/faculty_hiring_networks.md).
- Useful before applying [faculty prestige-rank inference](faculty_prestige_rank_inference.md).
- Connects field inclusion to [field coherence inclusion threshold](../validations/field_coherence_inclusion_threshold.md).

## Operationalization

- Build field-specific nodes and require relevant field units plus a minimum within-field hiring flow.
- Iteratively prune nodes failing in-flow or rankability criteria.
- Report excluded units and sensitivity of ranks to the filter.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) includes universities only if they have a field unit and iteratively require at least one within-field hire into each node for field networks.
- The procedure makes rankability an explicit preprocessing requirement.

## Caveats

- The filter can censor peripheral, new, or internationally connected units.
- Rankability constraints can make the analyzed network less representative of the full labor market.

## Links

- [Faculty hiring networks](../representations/faculty_hiring_networks.md)
- [Faculty prestige-rank inference](faculty_prestige_rank_inference.md)
- [Field coherence inclusion threshold](../validations/field_coherence_inclusion_threshold.md)
- [Closed doctoral ecosystem sampling frame](../datasets/closed_doctoral_ecosystem_sampling_frame.md)
- [Faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_network_rankability_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: faculty network rankability pruning; prestige-rank node filter; field hiring network in-flow filter
