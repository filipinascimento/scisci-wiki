# Clear-winner benchmark check

## Summary

Clear-winner benchmark check compares near-threshold groups with applicants farther above the funding threshold to distinguish near-miss improvement from narrow-win underperformance.

## Canonical Form

- Unit of analysis: grant applicant, running-variable distance, near miss, narrow win, or clear winner.
- Typical representation: benchmark comparison across threshold-distance groups.
- Validation target: whether a local contrast reflects treatment effects or a weak comparison group.
- Empirical signature: narrow winners are benchmarked against clearer winners, not only near misses.

## Uses in Science of Science

- Refines [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md).
- Supports [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md).
- Links [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md) to distance-from-cutoff validation.
- Complements [near-threshold pretreatment balance panel](near_threshold_pretreatment_balance_panel.md).

## Operationalization

- Define clear winners using scores farther above the funding cutoff.
- Compare their outcomes with narrow winners and near misses.
- Test whether narrow winners are unusually weak or whether near misses are unusually strong.
- Report sensitivity to clear-winner band definitions.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) compares narrow winners to clear winners farther from the payline.
- The check addresses the alternative explanation that narrow winners become worse rather than near misses improving.
- This strengthens the interpretation of the near-miss effect among persistent scientists.

## Caveats

- Clear winners may differ in proposal quality, institution, and field from threshold applicants.
- The check is a benchmark, not a replacement for local identification.
- Distance bands should be reported transparently.

## Links

- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [near-threshold pretreatment balance panel](near_threshold_pretreatment_balance_panel.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `clear_winner_benchmark_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: clear-winner benchmark; far-above-payline comparison; narrow-win benchmark check
