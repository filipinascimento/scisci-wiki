# Preregistration decision trees and SOPs

## Summary

Preregistration decision trees and standard operating procedures are methods for specifying contingent analysis choices before outcomes are known, especially when data treatment decisions depend on observable data properties.

## Canonical Form

- Unit of analysis: decision node, analysis branch, standard operating procedure, assumption check, exclusion rule, transformation rule, or preregistered protocol.
- Typical representation: decision tree, rule table, SOP document, preregistered analysis pipeline, or branch-specific robustness plan.
- Method target: preserve inferential diagnosticity when assumptions, data quality, or model choice cannot be fully known in advance.
- Empirical signature: conditional rules are declared before outcome inspection and applied consistently across analyses or studies.

## Uses in Science of Science

- Extends [preregistration and registered reports](../validations/preregistration_registered_reports.md) beyond single fixed analysis plans.
- Gives [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md) a concrete mitigation when data-processing contingencies are expected.
- Supports [preregistration adherence and deviation audits](../validations/preregistration_adherence_deviation_audit.md) by making planned contingencies distinct from deviations.
- Connects method standardization to [open science interventions](../validations/open_science_interventions.md).
- Provides one way to increase [preregistration specificity](../validations/preregistration_specificity_gradient.md) without pretending that every data contingency is known in advance.

## Operationalization

- Define assumption checks and the analysis branch that follows each check.
- Specify exclusion, transformation, model-selection, and robustness rules before outcome inspection.
- Store SOPs with preregistration records or cite a stable community standard.
- Audit whether applied branches match the declared decision tree.
- Flag branches that encode significance-seeking behavior, such as trying exclusion rules until p-values cross a threshold.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) proposes preregistered decision trees for cases where analysis choices depend on data properties such as normality assumptions.
- Nosek et al. note that decision trees are useful when the range of possible analyses is easily described.
- The same full text warns that biased practices can be preregistered into decision trees, but preregistration makes such practices detectable.
- Nosek et al. also describe standard operating procedures as reusable rules for handling observed data, especially in areas with common modeling approaches and many data-treatment decisions.
- The same logic contributes to the specificity of the preregistered plan: branches can be auditable when they are named before outcome inspection.

## Caveats

- A preregistered decision tree can still encode poor statistical practice.
- SOPs need versioning, community scrutiny, and evidence that they fit the current data context.
- Highly open-ended exploratory analyses may not be well served by rigid trees.
- Branching rules should be interpreted with the number of possible analytic paths in mind.

## Links

- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [p-value diagnosticity under forking paths](../validations/p_value_diagnosticity_forking_paths.md)
- [preregistration specificity gradient](../validations/preregistration_specificity_gradient.md)
- [preregistration adherence and deviation audit](../validations/preregistration_adherence_deviation_audit.md)
- [partial-blinding and incremental preregistration](partial_blinding_incremental_preregistration.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [false-positive flexibility simulation](false_positive_flexibility_simulation.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]

## Metadata

- Concept ID: `preregistration_decision_trees_sops`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: preregistered decision tree; analysis SOP; contingent analysis plan; standard operating procedures for preregistration
