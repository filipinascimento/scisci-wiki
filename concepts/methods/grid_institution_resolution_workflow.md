# GRID institution resolution workflow

## Summary

Institutional affiliation strings can be resolved to organization identifiers through extracted address data, clustering, name variants, machine learning, and manual curation.

## Canonical Form

- Unit of analysis: affiliation string, organization, address, GRID record, alias, acronym, translation, or geocode.
- Typical representation: institution-resolution workflow from raw affiliation text to curated organization IDs.
- Mechanism, measurement, or validation target: organization disambiguation for affiliation-linked research data.
- Empirical signature: raw affiliation strings collapse into curated organization records with aliases, hierarchy, and location metadata.

## Uses in Science of Science

- Refines institution-resolution methods by linking it to [paper author affiliation linkages](../representations/paper_author_affiliation_linkages.md) and [geocoded affiliation extraction](geocoded_affiliation_extraction.md).
- Useful as a reusable check when [openalex affiliation ror linking](openalex_affiliation_ror_linking.md) is used in science-of-science inference.
- Creates cross-links to [wos institution parent child hierarchy mapping](../representations/wos_institution_parent_child_hierarchy_mapping.md) so the motif is not interpreted in isolation.

## Operationalization

- Parse affiliation strings and address fields into organization candidates.
- Cluster variants, curate institution records, attach aliases, acronyms, translations, and geocodes.
- Use machine learning and manual review for compound or ambiguous affiliations.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) describes building GRID from PubMed addresses, clustering similar names, manually curating variants, and using machine learning for difficult compound affiliations.
- The workflow turns raw affiliation text into a reusable institution axis.

## Caveats

- Parent-child institutional boundaries are policy choices.
- Hospitals, business schools, companies, institutes, and campuses may be split or merged inconsistently across use cases.

## Links

- [Paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Geocoded affiliation extraction](geocoded_affiliation_extraction.md)
- [OpenAlex affiliation-ROR linking](openalex_affiliation_ror_linking.md)
- [WoS institution parent-child hierarchy mapping](../representations/wos_institution_parent_child_hierarchy_mapping.md)
- [Institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [Multi-address author overcount diagnostic](../validations/multi_address_author_overcount_diagnostic.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `grid_institution_resolution_workflow`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: institutional name resolution; GRID affiliation mapping; research-organization disambiguation
