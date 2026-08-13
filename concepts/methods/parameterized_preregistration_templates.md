# Parameterized preregistration templates

## Summary

Parameterized preregistration templates are reusable preregistration forms for high-throughput research programs where each study records the parameters changed from a common protocol.

## Canonical Form

- Unit of analysis: laboratory workflow, repeated experiment, protocol template, manipulated parameter, or preregistration record.
- Typical representation: template plus study-specific parameter fields, reusable protocol, or repeated-experiment preregistration form.
- Method target: make preregistration efficient for studies that vary a small number of parameters within a shared paradigm.
- Empirical signature: the recurring design and analysis structure is fixed, while each run documents the variables or manipulations that differ.

## Uses in Science of Science

- Extends [preregistration specificity gradient](../validations/preregistration_specificity_gradient.md) to high-throughput repeated-experiment settings.
- Complements [preregistration decision trees and SOPs](preregistration_decision_trees_sops.md) by encoding repeated parameters rather than branching contingencies.
- Supports [preregistration and registered reports](../validations/preregistration_registered_reports.md) adoption where fully bespoke plans would be too burdensome.
- Helps audit whether repeated studies are genuinely comparable or are drifting across undocumented protocol changes.

## Operationalization

- Define the common design, measurement, exclusion, and analysis components shared by a research program.
- Create fields for study-specific parameters, manipulations, samples, and outcomes.
- Time-stamp each completed template before outcome observation.
- Preserve both the template version and the filled parameter values for audit.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) discusses laboratories that acquire data quickly and run many experiments.
- The paper states that such teams often work within a methodological paradigm where each experiment varies key aspects of a common procedure.
- Nosek et al. propose that a preregistration template can define protocol variables and parameters, while individual preregistrations document which parameters changed or were manipulated in each successive experiment.

## Caveats

- A template can become too generic to constrain inference if the variable fields are underspecified.
- Version changes to the template itself should be tracked.
- Parameterized templates do not solve program-level multiplicity unless all runs and outcomes remain visible.

## Links

- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [preregistration specificity gradient](../validations/preregistration_specificity_gradient.md)
- [preregistration decision trees and SOPs](preregistration_decision_trees_sops.md)
- [program-level preregistration multiplicity](../validations/program_level_preregistration_multiplicity.md)
- [outcome-blind protocol amendment](outcome_blind_protocol_amendment.md)
- [open science interventions](../validations/open_science_interventions.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; SciSciNet: W2779812635; WoS: unknown]

## Metadata

- Concept ID: `parameterized_preregistration_templates`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: preregistration parameter templates; repeated-experiment preregistration template; high-throughput preregistration forms; protocol parameterization
