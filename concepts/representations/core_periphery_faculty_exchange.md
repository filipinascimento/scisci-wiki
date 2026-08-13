# Core-periphery faculty exchange

## Summary

Core-periphery faculty exchange represents faculty hiring as a flow system in which a small high-prestige core exchanges faculty internally and exports faculty to peripheral institutions while rarely importing faculty from the periphery.

## Canonical Form

- Unit of analysis: institution, prestige tier, hiring edge, field-specific faculty hiring network, core node, peripheral node, or edge direction.
- Typical representation: core-periphery directed graph, tier-to-tier flow matrix, prestige-ranked adjacency matrix, exchange/import/export rates, or block-structured hiring network.
- Representation target: directional exchange asymmetry among institutional prestige tiers.
- Empirical signature: dense exchange among core institutions, substantial core-to-periphery export, and sparse periphery-to-core import.

## Uses in Science of Science

- Summarizes the structure behind [faculty hiring networks](faculty_hiring_networks.md), [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md), and [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md).
- Connects [faculty production inequality](../measures/faculty_production_inequality.md) with the network position of high-producing universities.
- Provides a representation for how prestige hierarchies shape the diffusion of norms, training practices, and scientific ideas through [faculty prestige centrality-insularity coupling](../mechanisms/faculty_prestige_centrality_insularity.md).

## Operationalization

- Infer prestige ranks or tiers for institutions within a field or domain.
- Define core institutions by prestige rank, production share, k-core/core-periphery algorithm, or a documented threshold.
- Aggregate placement edges into core-core, core-periphery, periphery-core, and periphery-periphery flows.
- Report exchange asymmetry, import/export rates, and how results change under alternate core definitions.
- Visualize the ranked adjacency matrix or tier-level flow matrix alongside [faculty placement rank change](../measures/faculty_placement_rank_change.md).

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) describes U.S. faculty hiring as a core-periphery structure built from production inequality and steep prestige hierarchies.
- The paper reports that high-prestige universities exchange faculty with each other and export faculty to the network periphery, but rarely import from peripheral universities.
- Wapman et al. also report that just five U.S. universities train more U.S. faculty than all non-U.S. universities combined, highlighting how the core is also a production core.
- This representation complements the paper's SpringRank hierarchy and upward-mobility tests by showing exchange asymmetry rather than only rank-change distributions.

## Caveats

- Core definitions can be threshold-sensitive and field-specific.
- A core-periphery pattern summarizes flows; it does not by itself identify whether mechanisms are status bias, candidate preference, geography, subfield fit, or resource concentration.
- Peripheral institutions can still be locally central in specific fields, regions, or teaching missions.
- International doctorates and non-tenure-track pathways may be underrepresented if the faculty network is restricted to U.S. tenure-track rosters.

## Links

- [faculty hiring networks](faculty_hiring_networks.md)
- [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md)
- [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md)
- [faculty prestige centrality-insularity coupling](../mechanisms/faculty_prestige_centrality_insularity.md)
- [faculty placement rank change](../measures/faculty_placement_rank_change.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `core_periphery_faculty_exchange`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: faculty core-periphery structure; core-to-periphery faculty export; prestige-tier exchange; academic core periphery hiring
