# Derwent nano medical device patent panel

## Summary

The Derwent nano medical device patent panel is a DWPI-derived patent corpus used to study science-to-technology knowledge transfer in nano medical device technologies from 2003 to 2012.

## Canonical Form

- Unit of analysis: patent application, patent family, assignee type, inventor country, IPC class, backward citation, or forward citation.
- Typical representation: patent panel with organization, country, technology-class, backward-citation, non-patent-reference, and forward-citation fields.
- Data target: compare science-based and non-science-based technology development in a specific emerging technology domain.
- Empirical signature: patents are retrieved by nano medical device keywords, expanded to patent families, deduplicated, and linked to citations.

## Uses in Science of Science

- Provides a domain-specific testbed for [scientific knowledge application index](../measures/scientific_knowledge_application_index.md), [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md), and [forward citation differentiation index](../measures/forward_citation_differentiation_index.md).
- Supports organization-type contrasts among corporate, university, and corporate-university collaborated patents, including the [organization-type science application gradient](../measures/organization_type_science_application_gradient.md).
- Supports country comparisons across the United States, Germany, the United Kingdom, Japan, France, and China.
- Supports [IPC-class science linkage heterogeneity](../measures/ipc_class_science_linkage_heterogeneity.md) and [science application impact nonmonotonicity](../validations/science_application_impact_nonmonotonicity.md).
- Connects patent citation data to [scientific non-patent references](scientific_non_patent_references.md) and [patent-paper links](patent_paper_links.md).
- Exposes retrieval and provenance layers through [cross-office patent-data harmonization](../methods/cross_office_patent_data_harmonization.md), [title-abstract patent-query scope boundary](../validations/title_abstract_patent_query_scope_boundary.md), and [inventor-address country assignment](../methods/inventor_address_country_assignment.md).

## Operationalization

- Query DWPI through Derwent Innovation with `SSTO = (nano* and "medical device*")` over title and abstract.
- Limit the filing-year window to 2003-2012 to reduce forward-citation right censoring and sparse early years.
- Expand matched patents to the same patent families and deduplicate the resulting applications.
- Classify patents by assignee type, inventor country code, and two-digit IPC class.
- Extract backward patent and non-patent citations, identify scientific articles among non-patent citations, and collect forward citations.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) reports 37,904 initial nano medical device patent records from DWPI.
- After family expansion, they obtain 330,022 patent applications and deduplicate to 108,468 applications for 2003-2012.
- They classify patents into corporate, university, and corporate-university collaborated groups using assignee information.
- They summarize IPC codes at the second hierarchical level and select the ten highest-ranked classes, covering 98% of total patents, for backward and forward citation analysis.
- Their backward-citation processing separates patent citations from non-patent citations and then identifies scientific articles among the non-patent references.

## Caveats

- DWPI and Derwent Innovation are proprietary, so exact reproducibility requires access to the same snapshot and query interface.
- Keyword retrieval can miss relevant nano medical device patents and include false positives.
- Patent-family expansion and deduplication choices affect denominator counts.
- The corpus is field-specific and should not be treated as a general patent sample.
- Forward citation outcomes are right-censored and require patent-age adjustment.

## Links

- [science-based patent grouping](../methods/science_based_patent_grouping.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [normalized scientific knowledge application index](../measures/normalized_scientific_knowledge_application_index.md)
- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [organization-type science application gradient](../measures/organization_type_science_application_gradient.md)
- [IPC-class science linkage heterogeneity](../measures/ipc_class_science_linkage_heterogeneity.md)
- [patent-age forward-citation control](../validations/patent_age_forward_citation_control.md)
- [patent family expansion deduplication](../methods/patent_family_expansion_deduplication.md)
- [science application impact nonmonotonicity](../validations/science_application_impact_nonmonotonicity.md)
- [scientific non-patent references](scientific_non_patent_references.md)
- [patent-paper links](patent_paper_links.md)
- [PatentsView utility patent sample](patentsview_utility_patent_sample.md)
- [cross-office patent-data harmonization](../methods/cross_office_patent_data_harmonization.md)
- [title-abstract patent-query scope boundary](../validations/title_abstract_patent_query_scope_boundary.md)
- [inventor-address country assignment](../methods/inventor_address_country_assignment.md)
- [academic publishing-patenting coupling](../mechanisms/academic_publishing_patenting_coupling.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `derwent_nano_medical_device_patent_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: nano medical device patent panel; DWPI nano medical devices; Derwent Innovation NMD patents; science-technology nano patent corpus
