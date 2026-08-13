# Within-career impact shuffle null

## Summary

The within-career impact shuffle null tests whether observed career-impact timing differs from a counterfactual where each scientist keeps the same productivity timeline but paper impacts are permuted within the career.

## Canonical Form

- Unit of analysis: scientist, career sequence, paper impact, productivity timeline, or peak-impact paper.
- Typical representation: shuffled impact sequence, randomized career, permutation envelope, or observed-versus-shuffled `P(t*)` and `P(N*/N)`.
- Validation target: determine whether peak-impact timing reflects structured career stages or can be explained by productivity plus random impact order.
- Empirical signature: observed peak-position and before/after-impact patterns are statistically indistinguishable from within-scientist shuffled careers.

## Uses in Science of Science

- Provides the empirical validation layer for the [random impact rule](../mechanisms/random_impact_rule.md).
- Uses [highest-impact sequence position](../measures/highest_impact_sequence_position.md) as the comparison target.
- Separates impact timing from productivity timing in [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Complements the [R-model productivity null](r_model_productivity_null.md), which asks a broader productivity-only question about career impact levels.

## Operationalization

- Preserve each scientist's publication dates, publication order, and productivity counts.
- Randomly permute paper-impact values within the same scientist's publication sequence.
- Recompute `t*`, `N*/N`, average impact before and after the highest-impact paper, and other timing statistics.
- Compare observed statistics with permutation distributions and repeat across alternative samples, impact definitions, and authorship-credit rules.
- Split local peak behavior and coauthorship sensitivity into [pre/post-peak impact stationarity](pre_post_peak_impact_stationarity.md) and [career-impact authorship-credit robustness](career_impact_authorship_credit_robustness.md) when those checks need separate reporting.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) shuffles `c10` values among papers by the same scientist while preserving time-dependent productivity.
- The paper reports that shuffled and observed `P(t*)` curves are indistinguishable, implying that the early or midcareer concentration of top works follows from productivity patterns.
- Sinatra et al. also compare average impact before and after the highest-impact paper and find no detectable pre- or post-breakthrough change.
- The full text reports robustness across career-length samples, active decades, removal of multi-authored papers, alternative impact definitions, credit-allocation rules, and non-APS disciplines.
- The pre/post and credit-allocation components are now indexed as separate reusable validations.

## Caveats

- The null preserves productivity but does not model topic changes, funding shocks, institutional moves, or collaboration-network shifts.
- Failure to reject the shuffle null for one impact measure does not rule out structure in other contribution or recognition outcomes.
- It is a timing validation, not a complete model of career success.

## Links

- [random impact rule](../mechanisms/random_impact_rule.md)
- [highest-impact sequence position](../measures/highest_impact_sequence_position.md)
- [pre/post-peak impact stationarity](pre_post_peak_impact_stationarity.md)
- [career-impact authorship-credit robustness](career_impact_authorship_credit_robustness.md)
- [APS-WoS career impact panel](../datasets/aps_wos_career_impact_panel.md)
- [R-model productivity null](r_model_productivity_null.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [Q parameter stability test](q_parameter_stability_test.md)
- [hot-streak performance-state model](../methods/hot_streak_performance_state_model.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `within_career_impact_shuffle_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: within-career impact permutation; shuffled career impact null; random-impact sequence null; peak-impact shuffle validation
