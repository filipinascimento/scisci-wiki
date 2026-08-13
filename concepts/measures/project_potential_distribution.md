# Project-potential distribution

## Summary

Project-potential distribution is the latent distribution of paper-level potential impact in the Q model after separating scientist-level Q from stochastic project opportunity.

## Canonical Form

- Unit of analysis: paper, project, scientist career, latent impact component, or rescaled citation outcome.
- Typical representation: `p`, `log p`, `P(p)`, or rescaled impact `c10/Q`.
- Measurement target: paper-level stochastic potential that is common across scientists after accounting for individual Q.
- Empirical signature: individual impact distributions collapse toward a common distribution after rescaling paper impact by the scientist's Q parameter.

## Uses in Science of Science

- Complements the author-level [individual Q parameter](individual_q_parameter.md) by making the project-level luck component explicit.
- Connects [Q-model career impact prediction](../methods/q_model_career_prediction.md) to stochastic paper outcomes and uncertainty envelopes.
- Clarifies the difference between author-level Q and [paper fitness](paper_fitness.md): project potential is a latent term inside a person-career model, not a full paper citation-trajectory parameter.
- Supports responsible interpretation of [scientific career impact dynamics](../mechanisms/scientific_career_impact.md) because high-impact papers require both high Q and a high-potential project draw.

## Operationalization

- Estimate each scientist's Q parameter from their sequence of paper impacts.
- Rescale each paper's impact by the scientist's Q, for example with `p = c10 / Q`.
- Fit or inspect the resulting `P(p)` distribution and test whether it is independent of Q and productivity N.
- Use the distribution to generate synthetic careers or prediction intervals for future impact indicators.
- Validate the distribution through [Q-rescaled impact collapse](../validations/q_rescaled_impact_collapse.md) and [project-potential independence tests](../validations/project_potential_independence_test.md).

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) defines paper impact in the Q model as `c10 = Q_i p_a`.
- The paper estimates a trivariate log-normal distribution over project potential, Q, and productivity, reporting that project potential is approximately independent of both Q and N.
- Sinatra et al. interpret this independence as a universal luck component behind impact.
- The paper reports that rescaling individual paper impacts by Q collapses scientist-level impact distributions into a common project-potential distribution.
- These two checks are now split out as [project-potential independence test](../validations/project_potential_independence_test.md) and [Q-rescaled impact collapse](../validations/q_rescaled_impact_collapse.md).

## Caveats

- Project potential is inferred from citations and model assumptions, not observed directly.
- It can absorb field demand, topic salience, collaboration effects, and database coverage unless those are modeled separately.
- Treating p as luck should not erase strategic project choice, social resources, or institutional context.

## Links

- [individual Q parameter](individual_q_parameter.md)
- [Q-rescaled impact collapse](../validations/q_rescaled_impact_collapse.md)
- [project-potential independence test](../validations/project_potential_independence_test.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [Q parameter stability test](../validations/q_parameter_stability_test.md)
- [Q-based recognition prediction](../validations/q_based_recognition_prediction.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [paper fitness](paper_fitness.md)
- [citation impact indicators](citation_impact_indicators.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `project_potential_distribution`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: Q-model project potential; paper potential p; universal project-potential distribution; c10 over Q distribution
