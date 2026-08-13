# Faculty hiring null models

## Summary

Faculty hiring null models compare observed faculty placement networks with randomized networks that preserve key margins, testing whether hierarchy, self-hiring, or other patterns exceed what production and hiring totals alone would imply.

## Canonical Form

- Unit of analysis: faculty hiring network, placement edge, institution, field, domain, self-loop, or prestige hierarchy.
- Typical representation: rewired directed network, preserved out-degree and in-degree sequence, null distribution of upward mobility, or observed-to-null ratio.
- Method target: separate structural hierarchy from mechanical consequences of unequal faculty production and hiring demand.
- Empirical signature: observed networks are steeper, more self-hiring, or otherwise more structured than randomized networks with the same margins.

## Uses in Science of Science

- Validates [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) and [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md).
- Uses [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md) as a compact observed-versus-null statistic.
- Provides comparison baselines for [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md) and [faculty placement rank change](../measures/faculty_placement_rank_change.md).
- Helps distinguish production inequality from additional prestige-sensitive hiring behavior.
- Includes the simpler [size-proportional placement null](../validations/size_proportional_placement_null.md) when asking whether production inequality is just department-size inequality.

## Operationalization

- Build the observed [faculty hiring network](../representations/faculty_hiring_networks.md).
- Test [size-proportional placement null](../validations/size_proportional_placement_null.md) assumptions before treating production counts as structural placement advantages.
- Randomly rewire placement edges while preserving chosen margins such as out-degree, in-degree, and field membership.
- Recompute prestige ranks, upward-mobility rates, self-hiring rates, or other test statistics on each randomized network.
- Compare observed values with the null distribution using one-sided or two-sided tests and multiple-comparison correction.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) uses Monte Carlo comparisons to show that extracted faculty prestige hierarchies are stronger than expected from observed inequality in faculty production rates alone.
- Clauset et al. also reject a size-proportional placement hypothesis, showing that unit-size differences cannot explain the observed production distribution.
- Verified full-text evidence from Wapman et al. (2022) randomly rewires faculty hiring networks while preserving out-degree and in-degree and ignoring self-loops, then re-ranks nodes with SpringRank.
- Wapman et al. report that empirical networks are significantly steeper than randomized counterparts in academia overall, all domains, and 94 of 107 fields.
- The same paper uses a null model preserving faculty production and hiring totals to show that self-hiring rates are higher than expected across academia and individual fields.

## Caveats

- Null-model conclusions depend on which margins are preserved and which structures are allowed to vary.
- Preserving in-degree and out-degree may still miss geography, subfield demand, institutional mission, or candidate preference.
- Randomization tests show nonrandom structure, not the causal mechanism that produced it.

## Links

- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty prestige-rank inference](faculty_prestige_rank_inference.md)
- [size-proportional placement null](../validations/size_proportional_placement_null.md)
- [faculty placement rank change](../measures/faculty_placement_rank_change.md)
- [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md)
- [faculty self-hiring rates](../measures/faculty_self_hiring_rates.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [faculty production inequality](../measures/faculty_production_inequality.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; WoS: unknown]
- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_hiring_null_models`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: hiring-network rewiring; placement null model; faculty self-hiring null; prestige hierarchy null model
