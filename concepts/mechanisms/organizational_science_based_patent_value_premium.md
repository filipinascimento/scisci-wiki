# Organizational science-based patent value premium

## Summary

Organizational science-based patent value premium is the pattern that the forward-citation advantage of science-citing patents varies by assignee type, and can be largest for corporate patents.

## Canonical Form

- Unit of analysis: patent, assignee type, organization-year, organization-technology class, or patent cohort.
- Typical representation: [forward citation differentiation index](../measures/forward_citation_differentiation_index.md) by corporate, university, and collaboration categories.
- Mechanism or conclusion: scientific knowledge may be especially valuable when firms integrate it into commercially oriented inventions.
- Empirical signature: science-citing patents receive more forward citations than non-science-citing patents, with the ratio differing by assignee type.

## Uses in Science of Science

- Connects [patent-paper links](../datasets/patent_paper_links.md) to organization-type heterogeneity in technology impact.
- Complements [university-firm patent-paper handoff](university_firm_patent_paper_handoff.md) by focusing on citation impact rather than institutional source-target edges.
- Supports policy questions about whether public science is more consequential when used by firms, universities, or mixed collaborations.
- Provides an organization-stratified outcome for [scientific knowledge application index](../measures/scientific_knowledge_application_index.md).

## Operationalization

- Classify patent assignees into corporate, university, collaboration, government, or other categories.
- Use [science-based patent grouping](../methods/science_based_patent_grouping.md) to split each organization category into science-citing and non-science-citing patents.
- Compute FCDI by organization type, controlling or stratifying by filing year, patent age, country, and technology class.
- Compare both ratio values and absolute forward-citation levels.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) reports that corporate, university, and corporate-university collaborated nano medical device patents all show increasing scientific knowledge application over 2003-2012.
- Their organization-level FCDI values are 2.73 for corporate patents, 1.62 for university patents, and 1.65 for corporate-university collaborated patents.
- They interpret this as scientific knowledge adding the most forward-citation value to commercial patents developed by firms.
- They also report that universities have the highest SKAI, indicating that [organization-type science application gradient](../measures/organization_type_science_application_gradient.md) and science-linked patent impact are distinct organization-level quantities.

## Caveats

- Corporate patents may differ from university patents in resources, prosecution strategy, field mix, and citation practices.
- Forward citations are not the same as revenue, social welfare, or clinical value.
- Assignee categories can miss subsidiaries, licensing, inventor mobility, and mixed ownership.
- The observed premium is field-specific in Wang and Li's nano medical device case and should be tested in other technologies.

## Links

- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [organization-type science application gradient](../measures/organization_type_science_application_gradient.md)
- [science-based patent grouping](../methods/science_based_patent_grouping.md)
- [university-firm patent-paper handoff](university_firm_patent_paper_handoff.md)
- [patent-paper boundary impact premium](patent_paper_boundary_impact_premium.md)
- [patent-age forward-citation control](../validations/patent_age_forward_citation_control.md)
- [science application impact nonmonotonicity](../validations/science_application_impact_nonmonotonicity.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `organizational_science_based_patent_value_premium`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: firm science-based patent premium; organization-specific FCDI; corporate science citation premium; science-linked patent value by assignee type
