# Program-level preregistration multiplicity

## Summary

Program-level preregistration multiplicity is the validation concern that preregistering each study does not eliminate false-positive risk if a research program runs many preregistered tests and only successful studies or outcomes become visible.

## Canonical Form

- Unit of analysis: research program, lab portfolio, study series, registry record set, outcome family, or publication stream.
- Typical representation: all-preregistrations denominator, study-series audit, program-level multiplicity correction, or registered file-drawer inventory.
- Validation target: whether the visible report represents the full set of preregistered attempts rather than a selected success.
- Empirical signature: many preregistered studies exist, but only a subset with positive, publishable, or narratively useful outcomes appears in papers.

## Uses in Science of Science

- Extends [p-value diagnosticity under forking paths](p_value_diagnosticity_forking_paths.md) from analysis choices within a study to repeated tests across a research program.
- Links [preregistration registry ecosystem](../datasets/preregistration_registry_ecosystem.md) records to [registry-publication reporting-bias audits](../methods/registry_publication_reporting_bias_audit.md).
- Provides a program-scale mechanism for [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md).
- Connects study-level preregistration to field-level motifs such as [field testing multiplicity](../mechanisms/field_testing_multiplicity.md) and [positive predictive value of findings](../measures/positive_predictive_value_findings.md).

## Operationalization

- Enumerate all preregistered studies, experiments, outcomes, or analysis plans linked to an investigator, lab, grant, program, or question.
- Match each registration to published and unpublished results.
- Code which registrations yielded visible papers, omitted outcomes, or unavailable results.
- Apply multiplicity adjustments or evidence-weighting using the full preregistered denominator.
- Preserve registry records and results long enough for later audits.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) notes that even if every individual experiment is preregistered, a single positive result in a larger series can still arise by chance.
- Nosek et al. use a program-level example in which many attempts are run and only one positive study would be misleading if the rest are hidden.
- The same full text argues that transparent reporting of all outcomes allows observers to correct for multiple comparisons and interpret a positive finding in context.
- Nosek et al. stress that preregistrations and results need to be permanently preserved and accessible for this program-level audit to work.

## Caveats

- Program boundaries can be ambiguous when questions evolve or collaborators change.
- Not every failed or abandoned preregistration is equally informative; attrition reasons should be coded.
- Multiplicity correction is only possible when the registry ecosystem can identify related attempts and outcomes.

## Links

- [preregistration and registered reports](preregistration_registered_reports.md)
- [preregistration registry ecosystem](../datasets/preregistration_registry_ecosystem.md)
- [registry-publication reporting-bias audit](../methods/registry_publication_reporting_bias_audit.md)
- [p-value diagnosticity under forking paths](p_value_diagnosticity_forking_paths.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)
- [field testing multiplicity](../mechanisms/field_testing_multiplicity.md)
- [positive predictive value of findings](../measures/positive_predictive_value_findings.md)
- [open science interventions](open_science_interventions.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]

## Metadata

- Concept ID: `program_level_preregistration_multiplicity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: program-level multiplicity; preregistered file drawer; cross-study selective reporting; all-preregistrations denominator
