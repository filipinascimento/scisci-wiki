# Fixed-effect Poisson QML citation model

## Summary

Fixed-effect Poisson QML citation model uses robust fixed-effect Poisson quasi-maximum-likelihood to model overdispersed citation counts when the conditional mean is the target.

## Canonical Form

- Unit of analysis: paper, journal, field, citation count, time window, or count-regression observation.
- Typical representation: fixed-effect Poisson coefficient table, clustered robust standard errors, conditional mean model, or robustness comparison.
- Method target: estimate associations with citation counts while absorbing journal or field fixed effects.
- Empirical signature: citation counts are overdispersed, but Poisson estimates with robust errors are used because consistency requires correct mean specification rather than a full Poisson distribution.

## Uses in Science of Science

- Extends [journal fixed-effect citation model](journal_fixed_effect_citation_model.md) for count outcomes.
- Supports [paper feature citation control stacks](paper_feature_citation_control_stack.md).
- Provides a citation-count modeling option for [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md), novelty, team, and funding studies.
- Connects model choice to [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Choose a citation-count outcome such as short-term or long-term citations.
- Include fixed effects for journals, fields, years, or other comparison units.
- Fit a Poisson model with robust or clustered robust standard errors.
- Interpret coefficients as conditional-mean associations rather than a claim that counts follow a Poisson distribution.
- Compare with negative-binomial or alternative count models as robustness checks.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) uses fixed-effect Poisson models with robust standard errors for long- and short-term citation counts.
- The authors state that citation counts are overdispersed but cite the consistency of Poisson estimators with robust standard errors when the mean is correctly specified even if the distribution is misspecified.
- They incorporate journal fixed effects and implement conditional fixed-effect Poisson estimation.

## Caveats

- Correct conditional-mean specification is still required for consistency.
- Fixed effects do not solve all confounding from unobserved paper quality or selection.
- Negative-binomial alternatives can be useful robustness checks but may not implement the intended fixed-effect estimand.

## Links

- [journal fixed-effect citation model](journal_fixed_effect_citation_model.md)
- [paper feature citation control stack](paper_feature_citation_control_stack.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [overdispersed citation-breadth count model](overdispersed_citation_breadth_count_model.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; SciSciNet: W363554780; WoS: unknown]

## Metadata

- Concept ID: `fixed_effect_poisson_qml_citation_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: fixed-effect Poisson citation model; Poisson QML citation regression; robust Poisson citation counts; conditional mean citation-count model
