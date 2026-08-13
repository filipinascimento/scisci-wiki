# Organization-type science application gradient

## Summary

Organization-type science application gradient compares how often patents from different assignee categories cite scientific publications.

## Canonical Form

- Unit of analysis: patent, assignee type, organization-year cohort, corporate patent, university patent, or collaborative patent.
- Typical representation: [scientific knowledge application index](scientific_knowledge_application_index.md) by organization type and year.
- Measurement target: institutional differences in the prevalence of observable science use in patented inventions.
- Empirical signature: university, corporate, and mixed-assignee patents show different science-citing shares within the same technology corpus.

## Uses in Science of Science

- Separates the prevalence of science use from the impact premium measured by [organizational science-based patent value premium](../mechanisms/organizational_science_based_patent_value_premium.md).
- Provides an organization-level input to [science-based patent grouping](../methods/science_based_patent_grouping.md), [forward citation differentiation index](forward_citation_differentiation_index.md), and [patent-paper links](../datasets/patent_paper_links.md).
- Supports policy questions about whether universities, firms, or university-firm collaborations are the main organizational carriers of science-linked invention.
- Helps interpret technology-transfer patterns when universities have high science linkage but firms have larger science-linked citation premiums.

## Operationalization

- Classify patent assignees into corporate, university, corporate-university collaboration, government, or other categories.
- Use scientific-publication references to assign each patent to the science-citing or non-science-citing group.
- Compute SKAI separately for each organization type and filing-year cohort.
- Compare levels and trends, while keeping the patent corpus, patent-family treatment, and reference-filtering method fixed.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) reports that university nano medical device patents have the highest science application level.
- Their 2003-2012 organization-level SKAI values are 34.6% for university patents, 25.8% for corporate-university collaborated patents, and 23.3% for corporate patents.
- They observe increasing SKAI over time for all three organization categories.
- The authors interpret the university lead as consistent with academic inventors publishing and patenting in parallel, being aware of relevant scientific papers, and sometimes citing their own publications.

## Caveats

- Assignee categories can miss subsidiaries, university-owned startups, licensing, and inventor mobility.
- University patents can cite science more often because of organizational norms rather than stronger technology transfer.
- Organization-type gradients should be compared within technology fields because field mix can dominate institutional differences.
- A high science-citing share does not imply a high forward-citation premium.

## Links

- [scientific knowledge application index](scientific_knowledge_application_index.md)
- [forward citation differentiation index](forward_citation_differentiation_index.md)
- [organizational science-based patent value premium](../mechanisms/organizational_science_based_patent_value_premium.md)
- [science-based patent grouping](../methods/science_based_patent_grouping.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [science application impact nonmonotonicity](../validations/science_application_impact_nonmonotonicity.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `organization_type_science_application_gradient`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: assignee-type SKAI gradient; university corporate science-base contrast; organization science-citing patent share; institutional patent science application
