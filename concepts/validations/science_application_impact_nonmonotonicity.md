# Science application impact nonmonotonicity

## Summary

Science application impact nonmonotonicity is the validation warning that higher science-citing patent prevalence does not always imply a larger forward-citation impact premium.

## Canonical Form

- Unit of analysis: patent cohort, country, organization type, IPC class, science-citing group, or non-science-citing group.
- Typical representation: side-by-side SKAI, FCDI, and average forward-citation columns.
- Validation target: test whether science reliance and patent impact move together or diverge.
- Empirical signature: the highest science-citing share is not necessarily the highest science-linked forward-citation ratio.

## Uses in Science of Science

- Prevents [scientific knowledge application index](../measures/scientific_knowledge_application_index.md) from being interpreted as a direct patent-value indicator.
- Adds a robustness layer to [forward citation differentiation index](../measures/forward_citation_differentiation_index.md), especially across technology classes and countries.
- Helps separate science-to-technology linkage from commercial, organizational, and field-specific impact processes.
- Supports cautious interpretation of [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md) and [organization-type science application gradient](../measures/organization_type_science_application_gradient.md).

## Operationalization

- Compute SKAI and FCDI for the same set of cohorts.
- Compare ranks and magnitudes across countries, organization types, or IPC classes.
- Inspect average forward citations for science-citing and non-science-citing patents separately, not only the ratio.
- Flag cohorts where high SKAI pairs with modest FCDI, low SKAI pairs with high FCDI, or FCDI falls below 1.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) reports that higher science application is not always associated with higher patent impact across nano medical device technology classes.
- In their IPC analysis, C07 has the highest SKAI at 46.2%, while C09 has the highest FCDI at 8.81.
- G01 and B32 have FCDI below 1, meaning non-science-citing patents receive more forward citations than science-citing patents in those classes.
- Their country table also shows why ratios need context: China has low SKAI and low absolute forward-citation averages even when its FCDI is above 1.

## Caveats

- Nonmonotonicity can reflect field mix, patent quality, citation practices, denominator size, or reference-filtering error.
- FCDI ratios can be unstable when average forward citations are small.
- A low FCDI does not prove scientific knowledge is unimportant; science may affect value through noncitation outcomes.
- The validation should be repeated across broader patent domains before general policy conclusions.

## Links

- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [IPC-class science linkage heterogeneity](../measures/ipc_class_science_linkage_heterogeneity.md)
- [organization-type science application gradient](../measures/organization_type_science_application_gradient.md)
- [organizational science-based patent value premium](../mechanisms/organizational_science_based_patent_value_premium.md)
- [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md)
- [patent-age forward-citation control](patent_age_forward_citation_control.md)
- [patent-paper links](../datasets/patent_paper_links.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `science_application_impact_nonmonotonicity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: science reliance impact divergence; SKAI FCDI nonmonotonicity; patent science-value divergence; science-application citation-premium caveat
