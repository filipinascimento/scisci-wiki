# WoS third-party application license boundary

## Summary

WoS API integration requires an ownership and control check because third-party applications may need separate approval or licensing.

## Canonical Form

- Unit of analysis: API integration, third-party application, license, institution, service provider, or data product.
- Typical representation: application ownership and approval-status classification.
- Mechanism, measurement, or validation target: data-governance boundary for embedding WoS data in software.
- Empirical signature: an integration is allowed internally but requires extra approval when controlled by an external provider..

## Uses in Science of Science

- Adds an application-boundary layer to [WoS data-use entitlement ladder](wos_data_use_entitlement_ladder.md).
- Connects [bibliometric data access modes](bibliometric_data_access_modes.md) to software deployment.
- Clarifies when raw or derived WoS data can appear in external services.

## Operationalization

- Classify integrations as institution-owned, internally controlled third party, or externally delivered third party.
- Record license or approval status before embedding WoS data in applications.
- Separate internal analytics from product or service delivery.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) explains that API integration into an organization's application may need extra permissions and that a third-party provider requires approval or license when the client does not own or control the application.

## Caveats

- This is data-governance metadata, not legal advice.
- Contract terms can change by institution, country, and agreement vintage.

## Links

- [WoS data-use entitlement ladder](wos_data_use_entitlement_ladder.md)
- [Bibliometric data access modes](bibliometric_data_access_modes.md)
- [Citation database web-interface access](citation_database_web_interface_access.md)
- [Full-database bibliometric access](full_database_bibliometric_access.md)
- [Restricted-raw public-derived bibliometric release](restricted_raw_public_derived_bibliometric_release.md)
- [WoS update-service cadence](wos_update_service_cadence.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_third_party_application_license_boundary`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: API app ownership boundary; third-party app licensing; external provider approval; integration license check
