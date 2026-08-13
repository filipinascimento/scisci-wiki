# Scientific knowledge application index

## Summary

Scientific knowledge application index (SKAI) is the share of patents in a defined technology cohort that cite at least one scientific publication.

## Canonical Form

- Unit of analysis: patent, patent cohort, organization type, country, patent class, or year.
- Typical representation: percentage or ratio of patents with scientific-publication references.
- Measurement target: observable science base of technological invention.
- Empirical signature: patents are split into science-citing and non-science-citing groups, and the science-citing share is computed for a comparable denominator.

## Uses in Science of Science

- Converts [scientific non-patent references](../datasets/scientific_non_patent_references.md) into a group-level measure of science reliance.
- Provides the base measure for [normalized scientific knowledge application index](normalized_scientific_knowledge_application_index.md).
- Defines the patent groups compared by [forward citation differentiation index](forward_citation_differentiation_index.md).
- Supports cross-country, organization-type, time-series, and technology-class comparisons of [patent-paper links](../datasets/patent_paper_links.md), including [organization-type science application gradient](organization_type_science_application_gradient.md) and [IPC-class science linkage heterogeneity](ipc_class_science_linkage_heterogeneity.md).
- Requires class-mix and benchmark checks such as [dominant-class science-linkage dilution](../validations/dominant_class_science_linkage_dilution.md) and [normalized linkage baseline drift](../validations/normalized_linkage_baseline_drift.md).

## Operationalization

- Define a patent corpus, filing-year window, and technology scope.
- Extract backward citations and identify which non-patent references are scientific publications.
- Classify each patent as `P_s` if it cites at least one scientific publication and as `P_non-s` otherwise.
- Compute `SKAI = P_s / (P_s + P_non-s)` for the chosen year, country, organization type, or patent class.
- Report the denominator, patent-family treatment, jurisdictional scope, and scientific-reference identification method.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) defines SKAI as the degree to which scientific knowledge contributes to nano medical device technology development.
- In their DWPI nano medical device patent panel, the overall 2003-2012 SKAI is 24.1% across 108,468 patent applications.
- They report organization differences: university patents have SKAI 34.6%, corporate patents 23.3%, and corporate-university collaborated patents 25.8%.
- They also report technology-class heterogeneity: organic chemistry patents (IPC C07) have SKAI 46.2%, while the dominant A61 medical/veterinary/hygiene class has SKAI 20.7%.
- Their time-series figure shows increasing SKAI for corporate, university, and collaborated patents over 2003-2012.

## Caveats

- SKAI is a documented-reference measure, not direct proof that inventors learned from the cited papers.
- Non-patent references include many non-scientific items, so filtering quality strongly affects the measure.
- Patent-office rules, examiner additions, and database coverage can change observed SKAI across jurisdictions and time.
- SKAI values are field- and corpus-specific and should not be compared without harmonized patent scopes.

## Links

- [normalized scientific knowledge application index](normalized_scientific_knowledge_application_index.md)
- [forward citation differentiation index](forward_citation_differentiation_index.md)
- [science-based patent grouping](../methods/science_based_patent_grouping.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [organization-type science application gradient](organization_type_science_application_gradient.md)
- [IPC-class science linkage heterogeneity](ipc_class_science_linkage_heterogeneity.md)
- [dominant-class science-linkage dilution](../validations/dominant_class_science_linkage_dilution.md)
- [normalized linkage baseline drift](../validations/normalized_linkage_baseline_drift.md)
- [technological complexity science-linkage gradient](../mechanisms/technological_complexity_science_linkage_gradient.md)
- [science application impact nonmonotonicity](../validations/science_application_impact_nonmonotonicity.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md)
- [organizational science-based patent value premium](../mechanisms/organizational_science_based_patent_value_premium.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `scientific_knowledge_application_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: SKAI; science-base patent share; scientific-publication citation share; patent science application share
