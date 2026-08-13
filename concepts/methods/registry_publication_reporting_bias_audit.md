# Registry-publication reporting-bias audit

## Summary

Registry-publication reporting-bias audit is the method of comparing preregistered study plans with published reports to detect omitted outcomes, omitted conditions, and selective presentation of results.

## Canonical Form

- Unit of analysis: registry record, protocol, outcome variable, treatment condition, publication, or registry-publication pair.
- Typical representation: planned-versus-reported matrix, outcome-switching table, missing-condition audit, or significance-by-reporting-status comparison.
- Method target: reveal reporting bias that is invisible when only the final published article is inspected.
- Empirical signature: planned outcomes or manipulations absent from papers, or significant findings reported more often than null findings.

## Uses in Science of Science

- Converts [preregistration registry ecosystem](../datasets/preregistration_registry_ecosystem.md) records into evidence for [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md).
- Provides an empirical check on [preregistration and registered reports](../validations/preregistration_registered_reports.md).
- Supplies measures for [open science interventions](../validations/open_science_interventions.md), especially before/after registry mandates.
- Links paper-level omissions to broader [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md).
- Extends to [program-level preregistration multiplicity](../validations/program_level_preregistration_multiplicity.md) when the denominator is all registered attempts in a study series rather than one registry-publication pair.

## Operationalization

- Match preregistered records to publications using registry IDs, titles, authors, trial identifiers, grants, or DOIs.
- Extract planned outcomes, manipulations, exclusions, covariates, and analysis plans.
- Extract reported outcomes and conditions from the publication.
- Classify each planned item as reported, omitted, switched, added, or unclear.
- Compare reporting rates by result direction, significance, condition type, and outcome status.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) states that preregistration can make selection and reporting biases detectable and possibly correctable.
- Nosek et al. cite evidence that requiring primary-outcome preregistration in clinical trials was associated with a drop in positive-result rates.
- The same full text reports a registry-publication comparison in which many published preregistered studies omitted at least one treatment condition or outcome variable.
- Nosek et al. also report selective visibility: consistently significant findings were more likely to appear in articles than null effects.
- Nosek et al. further note that all preregistered attempts and outcomes must remain visible when a program runs many studies, otherwise a single successful publication can mask the larger denominator.

## Caveats

- Registry-publication matching can be noisy when identifiers are missing.
- Some deviations are justified and should be coded separately from unexplained omissions.
- Registries with vague outcome labels or private records weaken audit power.
- The method detects discrepancies, not necessarily intent.

## Links

- [preregistration registry ecosystem](../datasets/preregistration_registry_ecosystem.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [preregistration adherence and deviation audit](../validations/preregistration_adherence_deviation_audit.md)
- [program-level preregistration multiplicity](../validations/program_level_preregistration_multiplicity.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)
- [condition-subset reporting](../mechanisms/condition_subset_reporting.md)
- [outcome-measure selection flexibility](../mechanisms/outcome_measure_selection_flexibility.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]

## Metadata

- Concept ID: `registry_publication_reporting_bias_audit`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: registry-publication comparison; outcome-switching audit; preregistration-publication audit; registered-outcome reporting audit
