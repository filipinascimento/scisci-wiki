# Distribution-Sensitive Matched-Pair Tests

## Summary

Distribution-sensitive matched-pair tests validate matched career comparisons by checking both mean differences and full-distribution differences under skewed citation outcomes.

## Canonical Form

- Unit of analysis: matched author pair, treatment group, control group, citation outcome, or discipline.
- Typical representation: t-test for averages plus rank or distributional test such as Kruskal-Wallis.
- Validation target: whether results survive skewness-sensitive comparisons.
- Empirical signature: treatment-control differences appear in both sample averages and distributional tests.

## Uses in Science of Science

- Strengthens [matched career counterfactuals](../methods/matched_career_counterfactuals.md).
- Connects career-impact designs to [citation distribution scaling](../measures/citation_distribution_scaling.md).
- Provides a general audit for skewed outcomes in [attention inequality](../mechanisms/attention_inequality.md).

## Operationalization

- After matching, compare treatment and control outcome means.
- Also compare distributions with a nonparametric or rank-based test.
- Report whether skewness affects significance or interpretation.
- Apply separately by field or discipline when outcome distributions differ.

## Evidence and Validations

- Verified full-text evidence from Li et al. (2019) reports matched-pair treatment and control comparisons.
- The paper tests sample averages with t-tests and entire distributions with Kruskal-Wallis tests.
- It explicitly uses distributional testing to account for skewness in citation data.

## Caveats

- Distributional tests do not solve hidden confounding.
- Multiple field-specific tests require attention to multiplicity.
- Skewness-aware significance should still be paired with effect-size interpretation.

## Links

- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [low-early-impact matching focus](../methods/low_early_impact_matching_focus.md)
- [top-coauthor regression predictor](top_coauthor_regression_predictor.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; SciSciNet: W2949684159; WoS: unknown]

## Metadata

- Concept ID: `distribution_sensitive_matched_pair_tests`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: skewness-aware matched tests; matched-pair distribution audit; Kruskal-Wallis career validation; citation-skew matched comparison
