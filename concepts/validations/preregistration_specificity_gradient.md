# Preregistration specificity gradient

## Summary

Preregistration specificity gradient is the validation idea that a registered plan protects inference only to the extent that it clearly constrains hypotheses, outcomes, exclusions, transformations, covariates, models, and decision rules before results are known.

## Canonical Form

- Unit of analysis: preregistered plan, hypothesis, outcome variable, exclusion rule, model choice, decision tree, or analysis pipeline.
- Typical representation: specificity score, plan-quality rubric, vague-versus-specific comparison, or preregistered-choice inventory.
- Validation target: whether the preregistration prevents hindsight rationalization and unknown analytic multiplicity.
- Empirical signature: vague plans allow many plausible analyses or interpretations, while specific plans make deviations and forking paths inspectable.

## Uses in Science of Science

- Separates the mere presence of [preregistration and registered reports](preregistration_registered_reports.md) from the inferential quality of the plan.
- Complements [preregistration adherence and deviation audit](preregistration_adherence_deviation_audit.md): adherence matters only after the planned constraints are specific enough to audit.
- Connects [HARKing and hindsight bias](../mechanisms/harking_hindsight_bias.md) to [p-value diagnosticity under forking paths](p_value_diagnosticity_forking_paths.md).
- Gives [preregistration decision trees and SOPs](../methods/preregistration_decision_trees_sops.md) a plan-quality target.

## Operationalization

- Inventory whether outcomes, hypotheses, transformations, exclusions, covariates, model families, stopping rules, and inference thresholds are named before data inspection.
- Code the number and openness of remaining analytic branches.
- Score whether predictions are narrow enough that multiple possible results could not all be explained as support.
- Compare vague plans with decision trees, SOPs, or executable analysis scripts.
- Treat unspecified branches as residual researcher degrees of freedom when interpreting confirmatory claims.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) argues that broad or vague predictions can be made consistent with many outcomes after the fact.
- The same full text explains that preregistration is useful because it constrains how data confront research questions before outcomes are observed.
- Nosek et al. connect specificity to p-value diagnosticity: the tested pipeline and the set of tests are more interpretable when the path is fixed in advance.
- Their discussion of decision trees and standard operating procedures shows that specificity can include preplanned contingencies rather than a single rigid analysis.

## Caveats

- More specificity is not always better if it locks in invalid statistical practice or ignores predictable data-quality problems.
- Specificity should be interpreted with the study design, domain knowledge, and measurement constraints in view.
- A highly specific plan can still be underpowered, biased, or poorly theorized.

## Links

- [preregistration and registered reports](preregistration_registered_reports.md)
- [preregistration adherence and deviation audit](preregistration_adherence_deviation_audit.md)
- [preregistration decision trees and SOPs](../methods/preregistration_decision_trees_sops.md)
- [p-value diagnosticity under forking paths](p_value_diagnosticity_forking_paths.md)
- [HARKing and hindsight bias](../mechanisms/harking_hindsight_bias.md)
- [prediction-postdiction boundary](prediction_postdiction_boundary.md)
- [researcher degrees of freedom](researcher_degrees_of_freedom.md)
- [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]

## Metadata

- Concept ID: `preregistration_specificity_gradient`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: preregistration specificity; vague preregistration risk; analysis-plan specificity; preregistered constraint quality
