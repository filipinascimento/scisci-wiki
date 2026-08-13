# Near-threshold pretreatment balance panel

## Summary

Near-threshold pretreatment balance panel validates quasi-experimental near-miss and narrow-win comparisons by showing that pre-treatment applicant characteristics are similar around the cutoff.

## Canonical Form

- Unit of analysis: applicant, proposal, threshold band, covariate, balance table, or quasi-experimental design.
- Typical representation: pre-treatment comparison panel across demographics, prior output, prior funding, institutional reputation, and team features.
- Validation target: support local exchangeability around a funding threshold.
- Empirical signature: near-miss and narrow-win groups are statistically and substantively similar before the funding decision.

## Uses in Science of Science

- Validates [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md) and [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md).
- Supports [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md) and [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md).
- Provides a reusable design diagnostic for funding, hiring, tenure, and prize cutoff studies.

## Operationalization

- Define the local threshold band and treatment-side groups.
- Compare pre-treatment covariates such as gender, career age, institution, prior applications, publications, prior hit papers, citation measures, and team size.
- Report both statistical tests and substantive magnitudes.
- Use remaining imbalance to motivate matching, covariate adjustment, or narrower bandwidth checks.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) compares narrow-win and near-miss junior NIH R01 applicants before treatment.
- The paper reports a broad pre-treatment panel including gender, career age, institutional reputation, prior R01 activity, prior publications, prior hit papers, citation measures, and team size.
- Wang et al. argue that observable features of the two groups are statistically indistinguishable prior to the funding decision, supporting the near-threshold design.

## Caveats

- Balance on observed covariates does not prove balance on unobserved traits.
- Balance can depend on bandwidth, score normalization, and institute-specific paylines.
- A balance panel supports local design validity; it does not generalize to applicants far from the threshold.

## Links

- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md)
- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md)
- [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; SciSciNet: W3099970011; WoS: unknown]

## Metadata

- Concept ID: `near_threshold_pretreatment_balance_panel`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: threshold balance table; near-miss covariate balance; pre-treatment threshold balance; cutoff exchangeability panel
