# Preregistration registry ecosystem

## Summary

The preregistration registry ecosystem is the set of domain-specific and domain-general services that preserve time-stamped research plans before outcomes are observed.

## Canonical Form

- Unit of analysis: registry, preregistration record, protocol, trial entry, registered analysis plan, or registry-publication link.
- Typical representation: registry metadata table, DOI or URL list, protocol snapshot, record-version history, or registry coverage map.
- Data target: preserve claims about hypotheses, outcomes, analysis plans, and timing so they can be compared with later publications.
- Empirical signature: discoverable records with dates, study descriptions, outcomes, analysis plans, and public or embargoed access rules.

## Uses in Science of Science

- Provides the evidence layer for [preregistration and registered reports](../validations/preregistration_registered_reports.md).
- Enables [registry-publication reporting-bias audits](../methods/registry_publication_reporting_bias_audit.md).
- Supports evaluation of [open science interventions](../validations/open_science_interventions.md) across clinical trials, economics, political science, psychology, and domain-general research.
- Distinguishes registry services from simple private forms or lab records that cannot support public verification.

## Operationalization

- Enumerate relevant registries for a field, including domain-specific services and domain-general repositories.
- Extract registration date, public availability, study title, authors, planned outcomes, planned analyses, and links to resulting publications.
- Track whether records are public, embargoed, private, withdrawn, revised, or superseded.
- Match records to publications by title, investigator, trial ID, DOI, grant, or registry identifier.
- Record registry policies for preservation, public access, and post-registration edits.

## Evidence and Validations

- Verified full-text evidence from Nosek et al. (2018) lists clinical-trial registries, WHO registry infrastructure, ClinicalTrials.gov, AEA RCT Registry, RIDIE, EGAP, Open Science Framework, and AsPredicted as preregistration services or related tools.
- Nosek et al. distinguish domain-specific registries from domain-general services and describe OSF as offering multiple preregistration formats.
- The same full text cautions that a simple preregistration form is not itself a registry if users can keep forms private indefinitely and selectively report them.
- Nosek et al. report that more than 8,000 preregistrations already existed on the Open Science Framework at the time of their article, suggesting a measurable adoption trace.

## Caveats

- Registry presence is not the same as a high-quality or complete preregistration.
- Private, selectively disclosed, or mutable records weaken verification value.
- Registry-publication matching can be incomplete when identifiers are missing or titles change.
- Registry ecosystems evolve quickly, so current coverage should be refreshed from live registry metadata when doing empirical studies.

## Links

- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [registry-publication reporting-bias audit](../methods/registry_publication_reporting_bias_audit.md)
- [preregistration adherence and deviation audit](../validations/preregistration_adherence_deviation_audit.md)
- [open science interventions](../validations/open_science_interventions.md)
- [selective reporting and publication bias](../mechanisms/publication_bias_selective_reporting.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [preregistration badge incentives](../validations/preregistration_badge_incentives.md)

## References

- Nosek, B. A., Ebersole, C. R., DeHaven, A. C., & Mellor, D. T. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences*, 115(11), 2600-2606. https://doi.org/10.1073/pnas.1708274114 [OpenAlex: W2779812635; Dimensions: pub.1101502429; WoS: unknown]

## Metadata

- Concept ID: `preregistration_registry_ecosystem`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Nosek et al. (2018) (2018)
- Latest seen paper: Nosek et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1708274114`
- OpenAlex ID: `W2779812635`
- Dimensions ID: `pub.1101502429`
- SciSciNet ID: `W2779812635`
- Aliases: preregistration registries; study registries; OSF registrations; ClinicalTrials.gov registry ecosystem
