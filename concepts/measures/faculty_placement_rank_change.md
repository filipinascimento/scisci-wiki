# Faculty placement rank change

## Summary

Faculty placement rank change measures the difference between a scholar's doctoral institution prestige rank and the prestige rank of the institution where they hold a faculty position.

## Canonical Form

- Unit of analysis: faculty placement, doctoral institution, employing institution, field, rank tier, gender group, or cohort.
- Typical representation: rank difference, upward-placement indicator, downward-placement magnitude, median rank change, or distribution by origin tier.
- Measurement target: how far faculty move up, down, or laterally in a prestige hierarchy when entering faculty employment.
- Empirical signature: most faculty placements are lateral or downward from doctoral institution to employer.

## Uses in Science of Science

- Provides the measurement layer for [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md).
- Uses ranks from [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md) and edges from [faculty hiring networks](../representations/faculty_hiring_networks.md).
- Links [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) to individual career outcomes and downstream faculty production.

## Operationalization

- Infer or import institution prestige ranks for each field-specific labor market.
- For each placement edge, subtract employer rank from doctoral-origin rank under the chosen rank convention.
- Report upward, lateral, and downward placement shares, along with median and mean rank changes.
- Stratify by doctoral prestige tier, gender, field, domain, cohort, and self-hire status to expose patterns such as [gendered faculty placement gap](../mechanisms/gendered_faculty_placement_gap.md).
- Treat above-rank placements as a separate target for [upward faculty placement exception audit](../validations/upward_faculty_placement_exception_audit.md).

## Evidence and Validations

- Verified full-text evidence from Clauset et al. (2015) reports that only 9-14% of faculty in the studied disciplines are placed at institutions more prestigious than their doctoral institution.
- The paper reports average downward moves of 27-47 ranks and median moves of 21-35 ranks below the doctorate.
- Clauset et al. also report that placement distributions differ by doctoral prestige and gender, with larger gender differences among graduates of elite computer science and business units.
- The rare upward-placement cases in Clauset et al. motivate audits of compensatory factors beyond doctoral prestige.
- Verified full-text evidence from Wapman et al. (2022) expands the measure across U.S. academia, reporting that the typical professor is employed 18% further down the prestige hierarchy than their doctoral training.
- Wapman et al. estimate that this downward movement implies the typical U.S.-trained professor can expect to supervise 2.4-fold fewer future faculty than their doctoral advisor.

## Caveats

- Rank change depends on the rank model, field definition, and inclusion of international doctorates.
- Downward movement is a system-level placement pattern, not an individual quality assessment.
- Rank change does not capture pay, research environment, subfield fit, geography, or non-academic alternatives.

## Links

- [faculty prestige-rank inference](../methods/faculty_prestige_rank_inference.md)
- [faculty placement predictive validity](../validations/faculty_placement_predictive_validity.md)
- [faculty hiring null models](../methods/faculty_hiring_null_models.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [prestige-constrained faculty mobility](../mechanisms/prestige_constrained_faculty_mobility.md)
- [gendered faculty placement gap](../mechanisms/gendered_faculty_placement_gap.md)
- [upward faculty placement exception audit](../validations/upward_faculty_placement_exception_audit.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [faculty production inequality](faculty_production_inequality.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; WoS: unknown]
- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_placement_rank_change`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: placement rank delta; upward faculty mobility share; downward placement distance; prestige rank change
