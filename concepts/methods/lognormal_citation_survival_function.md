# Lognormal citation survival function

## Summary

Lognormal citation survival function models the aging component of citation dynamics as a lognormal age-at-citation curve, separating novelty decay from cumulative advantage and paper fitness.

## Canonical Form

- Unit of analysis: paper, citation age, annual citation count, citation trajectory, or aging kernel.
- Typical representation: lognormal aging function, survival probability by paper age, aging kernel, or fitted citation life-cycle curve.
- Method target: estimate how citation opportunity changes with paper age after accounting for prior citations and paper heterogeneity.
- Empirical signature: the age-dependent citation rate rises, peaks, and decays in a shape captured by lognormal parameters.

## Uses in Science of Science

- Supplies the aging kernel inside [citation trajectory models](citation_trajectory_models.md).
- Gives [citation longevity parameter](../measures/citation_longevity_parameter.md) a parametric aging interpretation.
- Links [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) to model-based long-term impact prediction.
- Helps separate aging from [preferential attachment activation threshold](../mechanisms/preferential_attachment_activation_threshold.md) and [paper fitness](../measures/paper_fitness.md).

## Operationalization

- Assemble paper-level citation histories by publication age.
- Model the probability of receiving new citations as a function of previous citations, paper fitness, and a lognormal aging term.
- Estimate immediacy and longevity parameters from the fitted lognormal age curve.
- Compare residual trajectories with delayed-recognition, second-act, or low-fitness regimes.
- Report corpus-level publication growth and reference-list assumptions used to scale citation opportunity.

## Evidence and Validations

- Verified full-text evidence from Wang, Song, and Barabasi (2013) models citation probability as the product of preferential attachment, fitness, and an aging term.
- The paper specifies the aging term as a lognormal survival probability over paper age.
- Wang et al. use this lognormal term to estimate paper-specific immediacy and longevity parameters and to collapse diverse citation histories onto a common rescaled curve.
- The same model distinguishes ordinary aging from exceptional second-act or delayed-recognition trajectories.

## Caveats

- Lognormal aging is a modeling assumption, not a universal law of attention decay.
- Field growth, citation indexing, review articles, and database coverage can distort the estimated aging curve.
- Delayed-recognition and exogenous rediscovery cases can violate a simple unimodal life-cycle shape.
- The aging kernel should be compared with alternative curve models when used for prediction.

## Links

- [citation trajectory models](citation_trajectory_models.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation immediacy parameter](../measures/citation_immediacy_parameter.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)
- [paper fitness](../measures/paper_fitness.md)
- [universal citation-history rescaling](../validations/universal_citation_history_rescaling.md)
- [alternative citation curve benchmark](../validations/alternative_citation_curve_benchmark.md)
- [exogenous second-act citation shock](../validations/exogenous_second_act_citation_shock.md)
- [preferential attachment activation threshold](../mechanisms/preferential_attachment_activation_threshold.md)
- [citation-volume growth normalization](citation_volume_growth_normalization.md)

## References

- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown; SciSciNet: W2124689612]

## Metadata

- Concept ID: `lognormal_citation_survival_function`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2013) (2013)
- Latest seen paper: Wang et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1237825`
- OpenAlex ID: `W2124689612`
- Dimensions ID: `pub.1042700127`
- SciSciNet ID: `W2124689612`
- Aliases: lognormal aging kernel; citation survival probability; citation aging function; paper-age citation kernel
