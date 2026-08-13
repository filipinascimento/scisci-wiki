# Individual Q parameter

## Summary

The individual Q parameter is a scientist-level latent impact parameter that estimates a persistent tendency to turn projects into highly cited work after separating productivity and random project potential.

## Canonical Form

- Unit of analysis: scientist, author-disambiguated career, publication sequence, or paper portfolio.
- Typical representation: Q value, log Q, author-level impact multiplier, or career-stable latent parameter.
- Mechanism or measurement target: persistent person-level impact tendency distinct from productivity and project-level chance.
- Empirical signature: scientists with similar productivity can have systematically different paper-impact distributions, and rescaling by Q collapses individual impact distributions toward a common project-potential distribution.

## Uses in Science of Science

- Provides a measure-level split-out from [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Acts as an author-level analogue to [paper fitness](paper_fitness.md), while remaining explicitly inferred from citation outcomes rather than directly observed ability.
- Supplies an input to [Q-model career impact prediction](../methods/q_model_career_prediction.md) and a correction to the [R-model productivity null](../validations/r_model_productivity_null.md).
- Splits into an author-level parameter, a paper-level [project-potential distribution](project_potential_distribution.md), a [Q parameter stability test](../validations/q_parameter_stability_test.md), and [Q-based recognition prediction](../validations/q_based_recognition_prediction.md).
- Connects career evaluation to [h index](h_index.md), cumulative citations, prizes, productivity, and responsible-metrics caveats.

## Operationalization

- Define a field- and age-adjusted paper-impact measure over author-disambiguated publication histories.
- Estimate Q from the scientist's sequence of paper impacts, typically using log-transformed citation outcomes and a model-derived project-potential distribution.
- Evaluate Q stability across career windows and sensitivity to coauthorship-credit assumptions.
- Report uncertainty, minimum-publication thresholds, database coverage, field mix, and self-citation handling before using Q comparatively.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) defines the Q-model equation in which a paper's impact is the product of a scientist-specific Q parameter and a randomly selected project-potential term.
- The paper states that Q is unique to each scientist and is taken to be constant throughout the career, then validates that stability with moving publication windows.
- Sinatra et al. show that Q is not dominated by a single high- or low-impact paper because it depends on the sequence of log impacts.
- The paper reports that rescaling paper impacts by Q collapses individual distributions into a common project-potential distribution, supporting Q as a career-level multiplier rather than a paper-specific outcome.
- The same full text tests Q stability across moving and early-late career windows and validates Q-ranked careers against independent recognitions such as Nobel prizes and field medals.
- The distributional check is now split out as [Q-rescaled impact collapse](../validations/q_rescaled_impact_collapse.md), and the project-potential covariance assumption as [project-potential independence test](../validations/project_potential_independence_test.md).
- Sinatra et al. also report [Q collaborator-omission robustness](../validations/q_collaborator_omission_robustness.md), testing whether Q estimates are dominated by individual collaborators.

## Caveats

- Q is inferred from citation behavior and should not be interpreted as a direct measure of talent, truth, creativity, or social value.
- Estimates require sufficient publications and can be unstable for short careers or sparse fields.
- Q can absorb visibility, field position, collaboration structure, database coverage, and evaluation bias, so it needs responsible-metrics framing.

## Links

- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [Q-luck complementarity](../mechanisms/q_luck_complementarity.md)
- [APS-WoS career impact panel](../datasets/aps_wos_career_impact_panel.md)
- [random impact rule](../mechanisms/random_impact_rule.md)
- [project-potential distribution](project_potential_distribution.md)
- [Q-rescaled impact collapse](../validations/q_rescaled_impact_collapse.md)
- [project-potential independence test](../validations/project_potential_independence_test.md)
- [Q parameter stability test](../validations/q_parameter_stability_test.md)
- [Q-origin confound boundary](../validations/q_origin_confound_boundary.md)
- [Q collaborator-omission robustness](../validations/q_collaborator_omission_robustness.md)
- [Q-based recognition prediction](../validations/q_based_recognition_prediction.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [impact-productivity coevolution boundary](../validations/impact_productivity_coevolution_boundary.md)
- [R-model productivity null](../validations/r_model_productivity_null.md)
- [paper fitness](paper_fitness.md)
- [h index](h_index.md)
- [citation impact indicators](citation_impact_indicators.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [responsible metrics](responsible_metrics.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `individual_q_parameter`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: Q factor; scientist Q parameter; author impact multiplier; career impact Q
