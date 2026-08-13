# Origin-prestige steepness gradient

## Summary

Origin-prestige steepness gradient measures how faculty placement rank-change distributions vary with the prestige of the doctoral-origin institution.

## Canonical Form

- Unit of analysis: doctoral institution, faculty placement, rank-change distribution, origin-prestige bin, or field.
- Typical representation: placement-rank-change curve stratified by doctoral-origin rank, falloff gradient, or net-producer threshold.
- Measurement target: how steeply placement prospects decline as doctoral-origin prestige decreases.
- Empirical signature: faculty from lower-ranked origins tend to place farther below their doctoral institution, and only a small upper tier remains net producers of faculty.

## Uses in Science of Science

- Adds an origin-stratified layer to [faculty placement rank change](faculty_placement_rank_change.md).
- Quantifies the shape of [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md) rather than only its average direction.
- Links [faculty hierarchy strength](faculty_hierarchy_strength.md) to the distribution of career opportunity by doctoral origin.
- Supports subgroup audits of upward placements, gender gaps, and field-specific mobility boundaries.

## Operationalization

- Infer or import institutional prestige ranks for doctoral and employing institutions.
- Compute placement rank change for each faculty member or placement edge.
- Stratify rank-change distributions by doctoral-origin prestige bins.
- Estimate gradient steepness, median falloff, and the share of origin institutions that are net producers of future faculty.
- Compare gradients across fields, cohorts, and demographic groups.

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) reports steep prestige hierarchies where only 9 to 14% of faculty place at institutions more prestigious than their doctorate.
- The paper reports average rank drops of 27 to 47 ranks and median drops of 21 to 35 ranks across the studied disciplines.
- It further states that the falloff is steep enough that only the top 18 to 36% of institutions are net producers of within-discipline faculty.
- These findings motivate a specific measure of how placement steepness depends on doctoral-origin prestige.

## Caveats

- Rank-change gradients depend on the rank-inference method and the set of institutions included.
- Field size and institution count affect rank distances across disciplines.
- A rank falloff is a structural measure, not direct evidence of individual merit or candidate preference.

## Links

- [faculty placement rank change](faculty_placement_rank_change.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [faculty hierarchy strength](faculty_hierarchy_strength.md)
- [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md)
- [upward faculty placement exception audit](../validations/upward_faculty_placement_exception_audit.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; SciSciNet: W2102017123; WoS: unknown]

## Metadata

- Concept ID: `origin_prestige_steepness_gradient`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Clauset et al. (2015) (2015)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: doctoral-origin placement gradient; prestige falloff gradient; origin-rank mobility steepness; placement hierarchy steepness gradient
