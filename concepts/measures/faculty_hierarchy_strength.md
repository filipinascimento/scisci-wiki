# Faculty hierarchy strength

## Summary

Faculty hierarchy strength measures how closely faculty placement flows follow an institutional prestige ordering, often as the share of placements that move down or do not move up the inferred hierarchy.

## Canonical Form

- Unit of analysis: faculty hiring network, placement edge, institution, field, domain, prestige rank, or rewired null network.
- Typical representation: downward-edge fraction, upward-mobility share, hierarchy violation rate, SpringRank steepness statistic, or observed-versus-null hierarchy strength.
- Measurement target: extent to which faculty labor markets restrict upward movement from doctoral institution to faculty employer.
- Empirical signature: most placements flow from higher-prestige doctoral institutions to equal or lower-prestige employers, beyond what production and hiring margins alone explain.

## Uses in Science of Science

- Turns [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md) into a compact measure for comparing fields and domains.
- In Clauset et al.'s formulation, it is computed with [minimum-violation consensus ranking](../methods/minimum_violation_consensus_ranking.md).
- Quantifies the constraint behind [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md) and [faculty placement rank change](faculty_placement_rank_change.md).
- Provides a test statistic for [faculty hiring null models](../methods/faculty_hiring_null_models.md) and a summary of [faculty hiring networks](../representations/faculty_hiring_networks.md).

## Operationalization

- Infer a field-specific prestige ranking from the faculty hiring network or import a documented rank.
- Count each placement as up-hierarchy, lateral/self-hire, or down-hierarchy under the rank convention.
- Report upward-mobility share, downward or non-upward share, and the statistic's uncertainty or null-model position.
- Compare observed hierarchy strength with rewired networks that preserve production and hiring totals.
- Stratify by field, domain, cohort, gender, doctorate origin, and self-hire status when the data allow.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) defines hierarchy strength as the fraction of faculty-hiring edges that point downward in a prestige ranking inferred by minimum violations.
- Clauset et al. report steep hierarchies in computer science, business, and history, with only 9-14% of faculty placed at institutions more prestigious than their doctoral institution and hierarchy strengths of 0.86-0.91.
- The paper also finds those hierarchies to be 19-33% stronger than expected from observed production inequality alone under Monte Carlo comparisons.
- Verified full-text evidence from Wapman et al. (2022) applies SpringRank across U.S. faculty hiring networks and finds only 5-23% of faculty employed at universities more prestigious than their doctoral university.
- Wapman et al. show empirical networks are significantly steeper than rewired counterparts in academia overall, all eight domains, and 94 of 107 fields.

## Caveats

- Hierarchy strength depends on rank inference, rank ties, self-loop handling, field definitions, and the institution set.
- A strong hierarchy is a system-level pattern, not a deterministic prediction for individual faculty placements.
- Null models that preserve only in-degree and out-degree may not account for geography, subfield demand, or candidate preferences.
- Upward-mobility shares are easier to interpret when paired with [faculty placement rank change](faculty_placement_rank_change.md), which records movement distance.

## Links

- [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md)
- [minimum-violation consensus ranking](../methods/minimum_violation_consensus_ranking.md)
- [faculty hiring null models](../methods/faculty_hiring_null_models.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty placement rank change](faculty_placement_rank_change.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [core-periphery faculty exchange](../representations/core_periphery_faculty_exchange.md)
- [faculty production inequality](faculty_production_inequality.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; WoS: unknown]
- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_hierarchy_strength`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: upward mobility share; hierarchy violation rate; downward-edge fraction; faculty prestige steepness
