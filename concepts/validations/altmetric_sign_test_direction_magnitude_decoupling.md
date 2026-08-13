# Altmetric sign-test direction-magnitude decoupling

## Summary

Altmetric sign-test direction-magnitude decoupling is the validation caveat that a sign test can show whether altmetric and citation orderings tend to agree without estimating the strength of the underlying association.

## Canonical Form

- Unit of analysis: focal paper, adjacent comparator papers, source-specific count, citation count, success/failure/null outcome, or source-level validation table.
- Typical representation: success share, failure share, sign-test p-value, direction-only validation, or effect-size-not-estimated flag.
- Validation target: avoid interpreting sign-test significance as a correlation magnitude, prediction accuracy, or evaluation-grade effect size.
- Empirical signature: sign-test evidence can point positive while raw correlations are small, misleading, or even reversed by timing artifacts.

## Uses in Science of Science

- Refines [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md).
- Qualifies [altmetric-citation association](altmetric_citation_association.md) when association direction matters but effect magnitude is unresolved.
- Helps interpret cases such as [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md), where raw correlations and age-local direction diverge.
- Provides a responsible-metrics guardrail against overstating early source validations.

## Operationalization

- Report sign-test outcomes separately from correlation estimates and prediction metrics.
- State that success/failure ratios establish direction under the test design, not the practical size of an association.
- Pair sign tests with age-matched correlations, regressions, or filtering metrics when magnitude is needed.
- Treat null outcomes separately when citations are immature or source coverage is sparse.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) says that the sign-test success and failure rates do not reveal the magnitude of the underlying altmetric-citation association.
- The same paper shows why this matters: Twitter has positive sign-test evidence but a negative raw cross-age correlation because publication timing and platform uptake bias the raw estimate.
- Thelwall et al. conclude that their methods provide evidence of source-citation association for several sources but do not estimate correlation effect size.

## Caveats

- Direction-only validation can still be useful for source screening or exploratory case discovery.
- A statistically significant sign test can coexist with low coverage and limited evaluation utility.
- Effect-size estimation still requires careful age, field, journal, and source-coverage controls.

## Links

- [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [altmetric temporal correlation reversal](altmetric_temporal_correlation_reversal.md)
- [altmetric coverage utility threshold](../measures/altmetric_coverage_utility_threshold.md)
- [altmetric prediction-claim boundary](altmetric_prediction_claim_boundary.md)
- [indicator false precision](indicator_false_precision.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `altmetric_sign_test_direction_magnitude_decoupling`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: direction-only sign test; altmetric effect-size caveat; sign-test magnitude boundary; success-failure effect-size decoupling
