# P-value diagnosticity under forking paths

## Summary

P-value diagnosticity under forking paths is the validation concern that a p-value becomes hard to interpret when the analysis path was selected after observing data from many plausible alternatives.

## Canonical Form

- Unit of analysis: p-value, null-hypothesis test, analytic path, model specification, exclusion rule, outcome choice, or preregistered analysis plan.
- Typical representation: analysis-path inventory, preregistered pipeline, multiverse, specification curve, or false-positive-rate simulation.
- Validation target: whether the reported p-value reflects a planned test or an outcome-influenced path through a larger choice space.
- Empirical signature: unknown number of plausible tests, data-dependent model selection, p-values near threshold, or missing record of considered alternatives.

## Uses in Science of Science

- Clarifies why [preregistration and registered reports](preregistration_registered_reports.md) are validation practices, not just documentation norms.
- Links the [prediction-postdiction boundary](prediction_postdiction_boundary.md) to [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md).
- Gives [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md) and multiverse analysis a statistical target.
- Supports responsible interpretation of [researcher degrees of freedom](researcher_degrees_of_freedom.md).
- Depends on the [preregistration specificity gradient](preregistration_specificity_gradient.md), because vague plans leave the number of possible tests unclear.
- Extends to [program-level preregistration multiplicity](program_level_preregistration_multiplicity.md) when many preregistered studies or outcomes are run and only selected successes are visible.

## Operationalization

- Identify the set of plausible outcome, exclusion, transformation, covariate, and model choices.
- Determine whether those choices were fixed before outcome observation.
- Use preregistration records, code histories, notebooks, or multiverse analyses to reconstruct the choice space.
- Treat reported p-values as more diagnostic when the tested path and multiplicity correction were fixed prospectively.
- Treat p-values from postdicted paths as descriptive signals requiring independent prediction tests.
- Compare planned replication p-values with [replication p-value distribution diagnostic](replication_p_value_distribution_diagnostic.md) when the question is whether replication failures are near-threshold or broadly nonsignificant.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) explains that p-value interpretation partly depends on knowing how many tests were performed.
- Nosek et al. argue that counting literal tests is insufficient when observing data can influence which tests are selected from a larger garden of forking paths.
- The same full text states that, in prediction, specifying the analytic pipeline before observing data helps preserve p-value diagnosticity.
- In postdiction, data-influenced analysis decisions can leave p-values with unknown diagnosticity and make null-hypothesis significance testing difficult to interpret.
- Nosek et al. also warn that multiplicity can appear across a program of preregistered studies if the full set of attempts and outcomes is not reported.

## Caveats

- A preregistered p-value can still be weak evidence if assumptions, power, measurement, or multiplicity handling are poor.
- Multiverse analyses can expose forking paths but do not automatically turn exploratory findings into confirmatory tests.
- The issue is not p-values alone; any inferential statistic can be affected by outcome-dependent model selection.

## Links

- [prediction-postdiction boundary](prediction_postdiction_boundary.md)
- [preregistration and registered reports](preregistration_registered_reports.md)
- [preregistration specificity gradient](preregistration_specificity_gradient.md)
- [program-level preregistration multiplicity](program_level_preregistration_multiplicity.md)
- [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md)
- [researcher degrees of freedom](researcher_degrees_of_freedom.md)
- [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md)
- [preregistration decision trees and SOPs](../methods/preregistration_decision_trees_sops.md)
- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [replication p-value distribution diagnostic](replication_p_value_distribution_diagnostic.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]

## Metadata

- Concept ID: `p_value_diagnosticity_forking_paths`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: p-value diagnosticity; garden of forking paths; unknown multiplicity; NHST postdiction limit
