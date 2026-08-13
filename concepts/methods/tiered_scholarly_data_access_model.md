# Tiered scholarly data access model

## Summary

Scholarly databases can separate free publication search and noncommercial metrics access from paid cross-entity search, analytics, and database API access.

## Canonical Form

- Unit of analysis: access tier, API right, searchable entity type, analytics panel, full-text delivery, database subscription, or metrics endpoint.
- Typical representation: access-rights matrix by entity type, endpoint, and use case.
- Mechanism, measurement, or validation target: reproducibility and equity implications of tiered data access.
- Empirical signature: the same database supports different analytical possibilities depending on the user's access tier.

## Uses in Science of Science

- Refines data-access methods by linking it to [bibliometric data access modes](bibliometric_data_access_modes.md) and [citation database web interface access](citation_database_web_interface_access.md).
- Useful as a reusable check when [full database bibliometric access](full_database_bibliometric_access.md) is used in science-of-science inference.
- Creates cross-links to [wos third party application license boundary](wos_third_party_application_license_boundary.md) so the motif is not interpreted in isolation.

## Operationalization

- Compare accessible fields, searchable entity types, facets, analytics panels, bulk/API rights, and full-text delivery by access tier.
- Record whether a workflow used free search, public metrics API, paid interface access, or database API access.
- Separate discoverability from reproducible high-volume data extraction.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) distinguishes free publication search with linked object detail and metrics API from paid searchable grants, patents, clinical trials, richer analytics, and database API.
- The split makes data-access mode part of the method record.

## Caveats

- Democratization is partial when important nonpublication indices and high-volume API use sit behind subscriptions.
- Access rights can change after the paper and need current documentation.

## Links

- [Bibliometric data access modes](bibliometric_data_access_modes.md)
- [Citation database web-interface access](citation_database_web_interface_access.md)
- [Full-database bibliometric access](full_database_bibliometric_access.md)
- [WoS third-party application license boundary](wos_third_party_application_license_boundary.md)
- [Responsible metrics](../measures/responsible_metrics.md)
- [OA index openness reproducibility boundary](../validations/oa_index_openness_reproducibility_boundary.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `tiered_scholarly_data_access_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: free-paid access split; Dimensions access tiers; scholarly API entitlement model
