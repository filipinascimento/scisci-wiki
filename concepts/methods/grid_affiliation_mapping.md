# GRID affiliation mapping

## Summary

GRID affiliation mapping normalizes raw affiliation strings and maps them to research-organization identifiers, allowing Dimensions-style records to be analyzed by institution and geography.

## Canonical Form

- Unit of analysis: affiliation string, organization mention, GRID entity, address component, geocoded organization, or paper-institution relation.
- Typical representation: raw affiliation text plus normalized organization name, GRID ID, name variants, coordinates, and geography codes.
- Method target: turn heterogeneous institution strings into auditable organization identifiers.
- Empirical signature: affiliation strings such as departments, hospitals, business schools, laboratories, and companies map to stable organization records.

## Uses in Science of Science

- Provides the Dimensions-era predecessor to [OpenAlex affiliation-ROR linking](openalex_affiliation_ror_linking.md).
- Supports [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md), [geocoded affiliation extraction](geocoded_affiliation_extraction.md), institutional collaboration, mobility, and geography analyses.
- Supplies institution axes for [contextual analytics panels](../representations/contextual_analytics_panels.md) and [research-object context graphs](../representations/research_object_context_graphs.md).
- Helps explain why institution-level metrics need entity-resolution caveats and [evaluated-party data verification](../validations/evaluated_party_data_verification.md).

## Operationalization

- Build or use a research-organization registry with accepted names, public variants, and internal name variants.
- Extract affiliation/address strings from source records and cluster similar organization names.
- Combine machine learning, string similarity, and manual curation for ambiguous institution families.
- Preserve raw string, normalized organization, GRID ID, location, match method, and match confidence.
- Audit compound affiliations and organization hierarchies before using institution counts for evaluation.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that Dimensions maps all entity types to research institutions and research classifications using machine-learning techniques.
- Hook et al. describe GRID as the organization database used for institutional mapping and report that it contained about 80,000 unique organizations at the time of writing.
- The paper explains that GRID was built from PubMed address data, clustering similar names, manually curating clusters, and storing official names plus name variants against unique identifiers.
- Hook et al. highlight compound affiliation strings as a difficult disambiguation case requiring geography recognition and enhanced machine-learning approaches.

## Caveats

- Institution hierarchies are policy choices: a society, university, institute, hospital, campus, and business school may be separate or nested depending on the registry.
- Compound affiliation strings can imply multiple organizations and multiple locations.
- GRID has since been superseded operationally by ROR in many workflows, so current analyses should document which organization registry and snapshot they use.

## Links

- [Dimensions](../datasets/dimensions.md)
- [OpenAlex affiliation-ROR linking](openalex_affiliation_ror_linking.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [geocoded affiliation extraction](geocoded_affiliation_extraction.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [evaluated-party data verification](../validations/evaluated_party_data_verification.md)
- [contextual analytics panels](../representations/contextual_analytics_panels.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `grid_affiliation_mapping`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: GRID institutional mapping; Dimensions affiliation mapping; organization name normalization; affiliation-to-GRID matching
