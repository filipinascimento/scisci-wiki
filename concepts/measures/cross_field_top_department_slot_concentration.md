# Cross-field top-department slot concentration

## Summary

Counts how elite top-k field prestige positions are distributed across universities, distinct from total faculty production.

## Canonical Form

- Unit of analysis: university and field-specific top-k department slot.
- Typical representation: top-k slot counts, concentration ratios, and zero-slot rates by university.
- Measurement target: concentration of elite field positions across institutions.
- Empirical signature: a small set of universities holds a large share of top field slots while many hold none.

## Uses in Science of Science

- Adds an elite-slot measure to [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md).
- Complements [faculty production inequality](faculty_production_inequality.md) by focusing on top-ranked departments rather than produced faculty counts.
- Connects to [core-periphery faculty exchange](../representations/core_periphery_faculty_exchange.md) and prestige centrality.

## Operationalization

- Infer field ranks, count top-k slots by university, compute concentration ratios and zero-slot rates, and test sensitivity to k.
- Compare top-slot concentration with faculty production, hiring volume, and domain-level prestige.
- Report whether top-slot concentration changes by field taxonomy.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) reports that 248 of 1,070 field top-10 slots are held by five universities while many universities hold no top-10 departments.
- This demonstrates a distinct concentration measure for elite department positions.

## Caveats

- Top-10 is arbitrary and should be paired with continuous rank measures.
- Slots across fields may not be equal in size, mission, or labor-market weight.

## Links

- [Institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [Faculty prestige centrality-insularity coupling](../mechanisms/faculty_prestige_centrality_insularity.md)
- [Core-periphery faculty exchange](../representations/core_periphery_faculty_exchange.md)
- [Faculty production inequality](faculty_production_inequality.md)
- [Domain macroculture rank coupling](../mechanisms/domain_macroculture_rank_coupling.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `cross_field_top_department_slot_concentration`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: top-k faculty department concentration; elite department slot concentration; cross-field prestige slot count
