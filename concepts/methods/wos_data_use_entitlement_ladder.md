# WoS data-use entitlement ladder

## Summary

WoS data-use entitlement ladder is the access-governance structure that separates individual use, discovery, internal analytics, API integration, public dissemination, and commercialization of Web of Science data.

## Canonical Form

- Unit of analysis: data-use case, subscription entitlement, permission tier, dissemination plan, or licensing condition.
- Typical representation: access-rights note, license tier, data-use agreement, project request, or redistribution constraint.
- Method target: make use permissions and reproducibility constraints visible alongside the extracted data.
- Empirical signature: the same WoS source may be accessible for internal analysis but require additional approval for APIs, public release, or commercial use.

## Uses in Science of Science

- Specializes [bibliometric data access modes](bibliometric_data_access_modes.md) for Web of Science governance.
- Adds permission and redistribution context to [fit-for-purpose bibliometric extracts](fit_for_purpose_bibliometric_extracts.md).
- Helps distinguish a reproducible method from a legally redistributable data product.
- Supports project manifests for proprietary-source analyses where exact record sharing may be limited.

## Operationalization

- Record the use tier, institutional entitlement, access route, redistribution permission, and whether the output is internal, public, or commercial.
- For API integration, document whether the application is internally controlled or involves a third-party provider.
- For public reports, store the approved dissemination scope and permitted summary outputs.
- Keep license notes separate from substantive findings but include enough detail for later reproducibility audits.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that many WoS data uses are linked to institutional subscriptions, data volumes, delivery frequency, and use cases.
- The paper distinguishes basic usage, discovery, analytics, API integration, public use, and commercialization as separate use cases with different permissions and restrictions.
- Birkle et al. also describe fees, terms, conditions, and formal agreements as parts of the entitlement structure.

## Caveats

- Entitlement governs what can be downloaded, integrated, shared, and redistributed; it is not only an administrative detail.
- Proprietary data-use limits can make exact replication difficult even when the analysis code is available.
- Access permissions can change over time, so dated entitlement notes should accompany extracts.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [fit-for-purpose bibliometric extracts](fit_for_purpose_bibliometric_extracts.md)
- [WoS update-service cadence](wos_update_service_cadence.md)
- [citation data census dates](citation_data_census_dates.md)
- [full-database bibliometric access](full_database_bibliometric_access.md)
- [citation database web-interface access](citation_database_web_interface_access.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_data_use_entitlement_ladder`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS data-use permissions; WoS entitlement tiers; bibliometric license ladder; WoS redistribution constraint
