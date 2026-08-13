# RCR ranking invariance

## Summary

RCR ranking invariance checks whether adding uncited articles to evaluated groups changes their relative order under the Relative Citation Ratio.

## Canonical Form

- Unit of analysis: article group, uncited article, portfolio, ranking, or citation indicator.
- Typical representation: ranking-invariance proof, perturbation test, or portfolio-order stability check.
- Validation target: whether a normalized indicator preserves group ordering under equivalent additions of uncited work.
- Empirical signature: relative positions of article groups do not change when the same number or same proportion of uncited articles is added under the stated conditions.

## Uses in Science of Science

- Extends [RCR expert validation](rcr_expert_validation.md) with a formal robustness property.
- Supports responsible use of [Relative Citation Ratio](../measures/relative_citation_ratio.md) in portfolio-level comparisons.
- Complements [uncited-paper inclusion sensitivity](uncited_paper_inclusion_sensitivity.md), where the question is how uncited work is counted in normalized indicators.
- Provides a validation template for [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Define the groups or portfolios being compared.
- Add uncited articles under equivalent-count or equivalent-proportion scenarios.
- Recompute group RCR summaries and compare rankings before and after perturbation.
- State whether the proof or test applies to equal-size or unequal-size groups.
- Pair the check with substantive caveats about what uncited papers mean in the field.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) states that RCR is ranking invariant, a desirable property for bibliometric indicators.
- The paper reports that RCR remains ranking invariant when the same number of uncited articles is added to two equal-size groups.
- It also reports ranking invariance when the same proportion of uncited articles is added to two unequal-size groups.
- Hutchins et al. use this property to argue that RCR can safely evaluate relative influence for large groups of publications.

## Caveats

- Ranking invariance is a mathematical robustness property, not evidence that the metric measures quality.
- The condition being tested must match the actual evaluation scenario.
- Uncited-paper treatment remains sensitive to field, age, document type, and citation-window choices.

## Links

- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [RCR expert validation](rcr_expert_validation.md)
- [uncited-paper inclusion sensitivity](uncited_paper_inclusion_sensitivity.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [low-denominator metric inflation check](low_denominator_metric_inflation_check.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `rcr_ranking_invariance`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: RCR portfolio ranking invariance; uncited article ranking test; RCR group-order stability; ranking-invariant citation indicator
