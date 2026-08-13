# Preregistered test-denominator visibility

## Summary

Preregistered test-denominator visibility is the validation benefit of making planned tests, outcomes, and analysis paths visible before results are observed.

## Canonical Form

- Unit of analysis: preregistered hypothesis, planned test, outcome variable, exclusion rule, model path, or result family.
- Typical representation: analysis-plan denominator that can be compared with reported tests.
- Validation target: interpret p-values and claims against the set of tests that were planned or possible.
- Empirical signature: a registry or protocol reveals whether a published claim is one planned test or part of a larger tested family.

## Uses in Science of Science

- Operationalizes [p-value diagnosticity under forking paths](p_value_diagnosticity_forking_paths.md).
- Gives [preregistration and registered reports](preregistration_registered_reports.md) a concrete multiplicity object: the knowable denominator of planned tests.
- Supports [registry-publication reporting-bias audits](../methods/registry_publication_reporting_bias_audit.md) and [preregistration decision trees and SOPs](../methods/preregistration_decision_trees_sops.md).
- Complements [program-level preregistration multiplicity](program_level_preregistration_multiplicity.md), which asks how many preregistered attempts are run across a broader program.

## Operationalization

- Extract the planned hypotheses, outcomes, exclusion rules, transformations, covariates, and models from the preregistration.
- Count primary, secondary, exploratory, and contingent tests separately.
- Compare the preregistered denominator with the manuscript's reported tests and claims.
- Flag unreported planned tests, added unplanned tests, and ambiguous plan language.
- Use denominator visibility to interpret multiplicity correction, evidential strength, and selective-reporting risk.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) argues that p-value diagnosticity depends partly on knowing how many tests were performed.
- The paper explains that preregistration can preserve diagnosticity by fixing the analytic pipeline before outcome observation and making conducted tests knowable.
- This motif separates the denominator-visibility mechanism from broader preregistration adoption or registry infrastructure.

## Caveats

- Visibility is only as good as the specificity of the registered plan.
- Some legitimate deviations or exploratory analyses may be scientifically useful but should be labeled separately.
- Test denominators can exist at study, manuscript, lab, or program level, and these levels should not be conflated.

## Links

- [p-value diagnosticity under forking paths](p_value_diagnosticity_forking_paths.md)
- [preregistration and registered reports](preregistration_registered_reports.md)
- [registry-publication reporting-bias audit](../methods/registry_publication_reporting_bias_audit.md)
- [preregistration decision trees and SOPs](../methods/preregistration_decision_trees_sops.md)
- [program-level preregistration multiplicity](program_level_preregistration_multiplicity.md)
- [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; SciSciNet: W2779812635; WoS: unknown]

## Metadata

- Concept ID: `preregistered_test_denominator_visibility`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: preregistered analysis denominator; visible test denominator; registered multiplicity denominator; planned-test visibility
