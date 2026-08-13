# Citation moment-ratio shape test

## Summary

Citation moment-ratio shape test uses scale-free moment ratios of citation counts to check whether a hypothesized distributional family is consistent with observed citation data.

## Canonical Form

- Unit of analysis: citation distribution, moment order, functional family, cohort, or database snapshot.
- Typical representation: dimensionless ratios such as higher moments divided by powers of the mean, compared with theoretical values.
- Method target: test distributional shape without depending on a scale parameter alone.
- Empirical signature: inferred shape parameters should be stable across moment orders and compatible with direct fits if the assumed family is appropriate.

## Uses in Science of Science

- Adds a quantitative diagnostic to [citation functional-form diagnostics](../validations/citation_functional_form_diagnostics.md).
- Helps test whether [citation distribution scaling](../measures/citation_distribution_scaling.md) can be summarized by a single distributional family.
- Provides a check on tail-sensitive models before interpreting [attention inequality](../mechanisms/attention_inequality.md), [citation tail sparsity limits](../validations/citation_tail_sparsity_limit.md), or [cumulative advantage distribution](cumulative_advantage_distribution.md).
- Complements rank-based evidence from [Zipf citation-tail inference](zipf_citation_tail_inference.md).
- Should be interpreted with [citation higher-moment outlier leverage](../validations/citation_higher_moment_outlier_leverage.md), because higher-order moments can be dominated by a few extreme papers.

## Operationalization

- Compute empirical citation-count moments for a defined cohort and citation window.
- Construct dimensionless moment ratios so the scale parameter cancels for the candidate family.
- Infer the candidate shape parameter separately for multiple moment orders.
- Check whether inferred parameters vary systematically or disagree with least-squares fits.
- Report sensitivity to truncation, uncited-paper inclusion, and extreme-citation observations.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) compares numerical moments of citation distributions with moments implied by a stretched exponential form.
- The paper defines dimensionless ratios in which the stretched-exponential scale factor cancels.
- Redner reports that estimates of the stretched-exponential shape parameter inferred from moments of orders two through six depend weakly but non-systematically on the moment order and do not match least-squares fit values.
- The same passage notes that numerical moments also do not match a power-law form over the entire distribution, supporting the conclusion that one function does not fit all citation-count ranges.

## Caveats

- High-order moments are sensitive to rare extreme papers and database errors.
- Run explicit outlier-leverage checks when annual or field cohorts contain unusually dominant top papers.
- Moment tests can reject a simple family without identifying the correct alternative.
- Citation distributions with aging, field mixture, or truncation can fail moment tests even when a family fits within a narrower range.

## Links

- [citation functional-form diagnostics](../validations/citation_functional_form_diagnostics.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [Zipf citation-tail inference](zipf_citation_tail_inference.md)
- [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md)
- [citation higher-moment outlier leverage](../validations/citation_higher_moment_outlier_leverage.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [cumulative advantage distribution](cumulative_advantage_distribution.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `citation_moment_ratio_shape_test`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: citation moment ratios; stretched-exponential moment test; citation distribution moment diagnostic; scale-free citation moment test
