# Q-rescaled impact collapse

## Summary

Q-rescaled impact collapse validates the Q model by checking whether paper-impact distributions from different scientists collapse onto a common project-potential distribution after dividing impact by each scientist's Q.

## Canonical Form

- Unit of analysis: paper, scientist, Q estimate, rescaled impact, career portfolio, or impact distribution.
- Typical representation: cumulative distribution of `c10 / Q`, collapse plot, fitted project-potential distribution, or goodness-of-fit test.
- Validation target: test whether Q behaves as a scientist-level multiplier rather than merely restating each paper's citation count.
- Empirical signature: scientists with different raw impact distributions show similar rescaled impact distributions after Q normalization.

## Uses in Science of Science

- Provides a validation layer for the [individual Q parameter](../measures/individual_q_parameter.md).
- Makes the [project-potential distribution](../measures/project_potential_distribution.md) empirically inspectable as a distributional collapse.
- Connects career-impact modeling to broader data-collapse checks used in citation-distribution and trajectory models.
- Helps distinguish stable author-level differences from stochastic paper-level potential.

## Operationalization

- Estimate Q for each scientist from their publication-impact sequence.
- Divide each paper's impact by the corresponding scientist's Q.
- Compare raw impact distributions and Q-rescaled distributions across Q strata or individual careers.
- Quantify collapse quality with distributional tests, residuals, or visual diagnostics.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) states that the Q model predicts individual paper-impact differences should disappear under the reduced variable `p = c10 / Q`.
- The paper reports that individual `P(c10)` distributions differ strongly, while `P(c10 / Q)` collapses onto a common project-potential distribution.
- Sinatra et al. show this collapse both for representative scientists and for grouped career distributions by Q.
- The collapse supports the interpretation of Q as a career-level multiplier and project potential as a scientist-independent stochastic component.

## Caveats

- A distributional collapse can support a model without proving that Q captures intrinsic ability.
- The check depends on citation normalization, Q estimation, and sufficient publications per scientist.
- Social visibility, field position, collaboration, and institutional resources can be absorbed into Q or project potential.

## Links

- [individual Q parameter](../measures/individual_q_parameter.md)
- [project-potential distribution](../measures/project_potential_distribution.md)
- [project-potential independence test](project_potential_independence_test.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [Q parameter stability test](q_parameter_stability_test.md)
- [universal citation distribution collapse](universal_citation_distribution_collapse.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `q_rescaled_impact_collapse`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: Q-normalized impact collapse; c10-over-Q collapse; career impact data collapse; Q-model distribution collapse
