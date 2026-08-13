# Altmetric validation power floor

## Summary

Altmetric validation power floor is the validation motif that sparse source counts can make source-level association tests underpowered, so nonsignificant results should not be treated as evidence of no relationship.

## Canonical Form

- Unit of analysis: altmetric source, nonzero paper count, journal cell, source-citation pair, or association test.
- Typical representation: minimum nonzero records, tested-article floor, tested-journal floor, or low-power source flag.
- Validation target: distinguish low statistical power from genuine lack of association.
- Empirical signature: some sources have too few positive observations for stable source-level conclusions.

## Uses in Science of Science

- Refines [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md) into a validation requirement.
- Connects to [altmetric coverage utility threshold](../measures/altmetric_coverage_utility_threshold.md).
- Helps interpret source-specific null results in [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md).

## Operationalization

- Report nonzero article counts, tested journal counts, and non-null source-citation comparisons.
- Set minimum coverage floors before making source-level validity claims.
- Treat nonsignificant sparse-source results as inconclusive.
- Provide confidence intervals or exact-test power summaries.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) states that evidence was insufficient for several sparse sources and warns against drawing conclusions from low-coverage altmetrics.
- The paper's source-level comparisons show that coverage directly constrains validity inference.

## Caveats

- Low power can reflect adoption lag, data-collection loss, source irrelevance, or field mismatch.
- Power floors should be chosen before inspecting desired results.
- High coverage does not guarantee meaningful impact interpretation.

## Links

- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric coverage utility threshold](../measures/altmetric_coverage_utility_threshold.md)
- [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md)
- [altmetric sign-test direction-magnitude decoupling](altmetric_sign_test_direction_magnitude_decoupling.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `altmetric_validation_power_floor`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric source power floor; sparse-source inconclusive result; altmetric validity minimum evidence threshold
