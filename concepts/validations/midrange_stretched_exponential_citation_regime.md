# Midrange stretched-exponential citation regime

## Summary

Midrange stretched-exponential citation regime is the validation finding that a stretched exponential may fit low-to-middle citation counts while failing in the high-citation tail.

## Canonical Form

- Unit of analysis: citation distribution, midrange citation count, fitted functional form, corpus, or citation-count threshold.
- Typical representation: stretched-exponential fit over a bounded citation range with tail residual diagnostics.
- Validation target: separate useful finite-range approximation from invalid global distributional claims.
- Empirical signature: stretched-exponential fit residuals are acceptable in the middle range but break down for highly cited papers.

## Uses in Science of Science

- Refines [citation functional-form diagnostics](citation_functional_form_diagnostics.md) with a range-specific fit caveat.
- Connects to [citation moment-ratio shape test](../methods/citation_moment_ratio_shape_test.md), where high-tail deviations strongly affect moments.
- Complements [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md), which targets the high-citation tail.
- Provides a concrete example for [citation-regime stratified modeling](../methods/citation_regime_stratified_modeling.md).

## Operationalization

- Fit a stretched exponential over candidate low-to-middle citation ranges.
- Test high-tail residuals separately rather than judging only the midrange fit.
- Compare with power-law, lognormal, and other heavy-tailed alternatives.
- Report the citation-count threshold at which the fit stops being credible.
- Use cohort-age and source-coverage sensitivity checks before interpreting regime boundaries.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) reports that stretched-exponential fits appear reasonable over limited lower citation ranges in the PRD and ISI data.
- The same paper shows that the approximation fails for the largest citation counts.
- This motif captures a finite-range validation result, not a claim that citation distributions are globally stretched exponential.
- It is useful because many citation analyses overfit the middle of the distribution while underrepresenting the tail.

## Caveats

- Fit quality depends on binning, corpus choice, and cohort age.
- A midrange approximation does not identify the causal mechanism behind citations.
- The threshold between middle and tail can vary across fields and databases.

## Links

- [citation functional-form diagnostics](citation_functional_form_diagnostics.md)
- [citation moment-ratio shape test](../methods/citation_moment_ratio_shape_test.md)
- [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md)
- [citation-regime stratified modeling](../methods/citation_regime_stratified_modeling.md)
- [citation tail sparsity limit](citation_tail_sparsity_limit.md)
- [citation tail maturation bias](citation_tail_maturation_bias.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; SciSciNet: W2062021443; WoS: unknown]

## Metadata

- Concept ID: `midrange_stretched_exponential_citation_regime`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: finite-range stretched exponential citation fit; midrange citation fit caveat; stretched-exponential regime; bounded citation distribution fit
