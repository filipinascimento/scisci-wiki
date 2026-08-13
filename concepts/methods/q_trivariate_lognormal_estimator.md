# Q-model trivariate lognormal estimator

## Summary

Captures the model-estimation scaffold that fits joint lognormal structure over project potential `p`, individual `Q`, and productivity `N`.

## Canonical Form

- Unit of analysis: author, project potential, individual Q, productivity, or likelihood model.
- Typical representation: joint lognormal model over transformed `p`, `Q`, and `N`.
- Mechanism, measurement, or validation target: distributional estimation scaffold behind Q-model career impact.
- Empirical signature: project potential, Q, and productivity are estimated as a joint distribution with reported parameters..

## Uses in Science of Science

- Adds estimation detail to [individual Q parameter](../measures/individual_q_parameter.md) and [Q-model career impact prediction](q_model_career_prediction.md).
- Connects [project-potential distribution](../measures/project_potential_distribution.md) to likelihood fitting.
- Useful for reproducing or extending the Q model.

## Operationalization

- Log-transform `p`, `Q`, and `N`, optimize the likelihood, and report mean/covariance estimates plus fit diagnostics.
- Release initialization, convergence, and sensitivity checks.
- Compare fit against alternative distributions when applying to new domains.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) describes fitting a joint lognormal structure over project potential, individual Q, and productivity.
- The method provides the model-estimation scaffold for Q-based predictions.

## Caveats

- `p` and `Q` are latent citation-derived quantities, so distributional fit is not causal identification.
- Lognormal assumptions may fail in small or unusual fields.

## Links

- [Individual Q parameter](../measures/individual_q_parameter.md)
- [Project-potential distribution](../measures/project_potential_distribution.md)
- [Project-potential independence test](../validations/project_potential_independence_test.md)
- [Q-rescaled impact collapse](../validations/q_rescaled_impact_collapse.md)
- [Q-model career impact prediction](q_model_career_prediction.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `q_trivariate_lognormal_estimator`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: trivariate Q estimator; Q-model lognormal estimator; project potential Q productivity model
