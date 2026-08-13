# Setback screening-effect check

## Summary

Setback screening-effect check tests whether the apparent later advantage of near-miss scientists can be explained only by selective attrition of lower-performing members of the setback group.

## Canonical Form

- Unit of analysis: initial applicant cohort, surviving applicant subset, attrition rate, outcome distribution, or constructed comparison subset.
- Typical representation: survivor balance check, attrition-equalized comparison, conservative removal, or performance-gap residual after screening adjustment.
- Validation target: distinguish selection among survivors from performance improvement or behavioral response after setback.
- Empirical signature: near misses still outperform narrow wins after conservative adjustments that make attrition rates comparable.

## Uses in Science of Science

- Validates [survivor-conditioned setback advantage](survivor_conditioned_setback_advantage.md).
- Keeps [early-career setback attrition](../mechanisms/early_career_setback_attrition.md) explicit in interpretations of later impact.
- Supports [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md) by preventing a simple survivor-bias explanation.
- Complements [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md) and [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md).
- Provides a reusable validation pattern for any career-shock study with differential attrition.

## Operationalization

- Estimate attrition separately for treated and comparison groups.
- Check whether surviving near misses and narrow wins differ on pre-treatment observables.
- Construct an attrition-equalized comparison by conservatively removing comparison-group members in a way that favors the null.
- Re-estimate hit-paper probability, average citation, and publication-count outcomes.
- Report whether the performance gap persists after the screening adjustment.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) tests whether survivor screening alone explains near misses' later performance advantage.
- The paper compares pre-treatment characteristics of surviving near misses and narrow wins and reports no observable ex ante difference.
- Wang et al. then remove narrow-win PIs until narrow wins have the same attrition rate as near misses.
- The removal is conservative: it drops narrow wins with the fewest hit papers but the most publications, artificially increasing narrow wins' hit probability.
- Even after this adjustment, near misses still outperform narrow wins on hit-paper probability and average citations per paper.

## Caveats

- Screening checks cannot observe all latent traits, motivation, institutional support, or outside opportunities.
- Conservative removal is a diagnostic rather than a full structural model of attrition.
- The validation depends on the observed outcome measures used to define favorable removal.
- Attrition outside the NIH system remains only partly observed.

## Links

- [survivor-conditioned setback advantage](survivor_conditioned_setback_advantage.md)
- [early-career setback attrition](../mechanisms/early_career_setback_attrition.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md)
- [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md)
- [setback-effect robustness grid](setback_effect_robustness_grid.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `setback_screening_effect_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: survivor-bias setback check; screening mechanism test; attrition-equalized comparison; conservative removal screen
