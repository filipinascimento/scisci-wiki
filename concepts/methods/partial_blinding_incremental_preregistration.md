# Partial-blinding and incremental preregistration

## Summary

Partial-blinding and incremental preregistration are methods for preserving some prediction value when data already exist, assumptions must be checked, or longitudinal data are only partly observed.

## Canonical Form

- Unit of analysis: preexisting dataset, blinded dataset, data release, analysis stage, longitudinal wave, or preregistered analysis module.
- Typical representation: staged preregistration, blinded-data workflow, split-sample design, wave-specific preregistration, or known-information disclosure table.
- Method target: separate outcome-relevant knowledge from analysis planning when the ideal of fully prospective preregistration is unavailable.
- Empirical signature: the preregistration states what was known, what was blinded, what remains unobserved, and how those facts affect inference.

## Uses in Science of Science

- Extends [preregistration and registered reports](../validations/preregistration_registered_reports.md) to archival, administrative, longitudinal, and large multivariate datasets.
- Provides a design response to [HARKing and hindsight bias](../mechanisms/harking_hindsight_bias.md).
- Helps distinguish partial prediction from pure postdiction in [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md) audits.
- Complements [preregistration decision trees and SOPs](preregistration_decision_trees_sops.md).
- Connects to [exploration-to-prediction cross-validation](exploration_to_prediction_cross_validation.md) when one subset or wave is used for discovery and another remains sealed for testing.

## Operationalization

- Record who has observed which data, summaries, outcomes, or related variables before analysis planning.
- Blind outcome values when possible while preserving distributional information needed for cleaning or model choice.
- Use staged preregistration when early checks can be made without revealing outcome information.
- For longitudinal data, preregister analyses before newly observed waves when possible.
- Report the proportion and relevance of already observed data when claiming prediction value.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) discusses preregistration when assumptions cannot be checked until data analysis begins.
- Nosek et al. propose incremental preregistration, blinded datasets, decision trees, and SOPs as ways to handle assumption violations and data-treatment contingencies.
- The same full text explains that preexisting data create a gray area: prediction is stronger when the analyst and analysis plan are blind to relevant observations, summaries, or communicated findings.
- For longitudinal and large multivariate data, Nosek et al. argue that preregistering before newly observed waves can still provide partial blinding, even when prior waves weaken full blindness.
- Nosek et al. also describe cross-validation as a related way to use existing data for exploration while preserving a held-out prediction test.

## Caveats

- Partial blinding is weaker when unobserved variables are highly correlated with observed variables.
- Staged preregistration can be compromised if early stages reveal outcome-relevant information.
- Claims based on preexisting data should disclose what was already known, not merely state that a plan was registered.
- Partial prediction is still useful, but it should not be equated with fully prospective testing.

## Links

- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [prediction-postdiction boundary](../validations/prediction_postdiction_boundary.md)
- [HARKing and hindsight bias](../mechanisms/harking_hindsight_bias.md)
- [preregistration decision trees and SOPs](preregistration_decision_trees_sops.md)
- [exploration-to-prediction cross-validation](exploration_to_prediction_cross_validation.md)
- [preregistration adherence and deviation audit](../validations/preregistration_adherence_deviation_audit.md)
- [open science interventions](../validations/open_science_interventions.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]

## Metadata

- Concept ID: `partial_blinding_incremental_preregistration`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: sequential preregistration; blinded data analysis; preexisting-data preregistration; partial-blinding preregistration
