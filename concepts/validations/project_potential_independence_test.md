# Project-potential independence test

## Summary

Project-potential independence test checks whether the paper-level potential term in the Q model is statistically independent of scientist productivity and the scientist-level Q parameter.

## Canonical Form

- Unit of analysis: paper potential, scientist Q, productivity count, covariance matrix, career portfolio, or model fit.
- Typical representation: covariance or correlation estimates among `p`, `Q`, and `N`.
- Validation target: test whether project potential can be treated as a scientist-independent stochastic component.
- Empirical signature: correlations between `p` and both `Q` and `N` are close to zero, while Q and productivity may have their own weaker dependence.

## Uses in Science of Science

- Validates a key assumption behind the [project-potential distribution](../measures/project_potential_distribution.md).
- Supports the [Q-model career impact prediction](../methods/q_model_career_prediction.md), because prediction intervals assume future project potentials are drawn from a common distribution.
- Separates persistent author-level impact tendency from stochastic paper-level opportunity.
- Keeps "luck" language in Q-model interpretation tied to an explicit statistical test.

## Operationalization

- Estimate each scientist's Q and productivity `N`.
- Infer paper-level project potential `p`, usually from `c10 / Q`.
- Fit a joint distribution over transformed `p`, `Q`, and `N`.
- Report covariance or correlation terms and test whether `p` is independent of Q and productivity.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) fits a trivariate log-normal model over project potential, Q, and productivity.
- The reported covariance matrix has near-zero covariance between project potential and both Q and productivity.
- The paper interprets this as evidence that scientists draw project potentials from a common distribution independent of Q and N.
- Sinatra et al. also report a nonzero but small relationship between Q and productivity, distinguishing productivity coupling from project-potential independence.

## Caveats

- Independence is model- and transformation-dependent.
- Project choice may still be strategic even if the inferred potential term is independent in the fitted model.
- Field, collaboration, funding, and institution effects can be hidden inside Q, N, or the residual project-potential term.

## Links

- [project-potential distribution](../measures/project_potential_distribution.md)
- [Q-rescaled impact collapse](q_rescaled_impact_collapse.md)
- [individual Q parameter](../measures/individual_q_parameter.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [R-model productivity null](r_model_productivity_null.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `project_potential_independence_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: p-Q-N independence test; project potential luck test; Q-model covariance test; project-potential productivity independence
