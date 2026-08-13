# Forward citation differentiation index

## Summary

Forward citation differentiation index (FCDI) compares the average forward citations of science-based patents with the average forward citations of patents that do not cite scientific publications.

## Canonical Form

- Unit of analysis: patent cohort, organization type, country, technology class, filing-year cohort, or patent age.
- Typical representation: ratio of average forward citations per patent.
- Measurement target: citation-impact premium associated with citing scientific publications.
- Empirical signature: science-citing patents receive more or fewer forward citations than otherwise comparable non-science-citing patents.

## Uses in Science of Science

- Tests whether science-linked inventions are more technologically influential than patents without scientific-publication references.
- Adds an outcome layer to [scientific knowledge application index](scientific_knowledge_application_index.md).
- Complements [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md) with a patent-cohort citation contrast.
- Supports organization, country, and subfield heterogeneity analyses in [patent-paper links](../datasets/patent_paper_links.md), with [patent-age forward-citation control](../validations/patent_age_forward_citation_control.md) for exposure differences.
- Depends on [patent forward-citation value proxy](patent_forward_citation_value_proxy.md) and should be interpreted with [ratio-metric absolute-impact context](../validations/ratio_metric_absolute_impact_context.md).

## Operationalization

- Use [science-based patent grouping](../methods/science_based_patent_grouping.md) to split patents into science-citing and non-science-citing groups.
- Count forward citations received by patents within the chosen citation window or by patent age.
- Compute `FCDI = average forward citations of P_s / average forward citations of P_non-s`.
- Stratify by organization type, country, technology class, or year and report citation-window censoring.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) defines FCDI as the citation difference between science-based and non-science-based patents.
- In their full 2003-2012 nano medical device panel, science-citing patents receive 19.42 forward citations on average while non-science-citing patents receive 7.46, giving FCDI 2.60.
- By organization type, they report FCDI 2.73 for corporate patents, 1.62 for university patents, and 1.65 for corporate-university collaborated patents.
- By country, FCDI is higher for the United Kingdom, France, and the United States than for Germany, Japan, and China in their six-country comparison.
- By subfield, the measure warns against a universal premium: C09 has FCDI 8.81, while G01 and B32 have values below 1.

## Caveats

- Forward citations are a noisy proxy for patent value and vary by patent age, office, technology class, and citation practices.
- A high FCDI is an association between documented scientific references and later patent citations, not proof that science caused the patent's impact.
- Citation windows must be harmonized; otherwise older patents mechanically receive more citations.
- FCDI can mask different absolute impact levels, as shown when countries have similar ratios but very different citation counts.
- This reporting guardrail is split out as [ratio-metric absolute-impact context](../validations/ratio_metric_absolute_impact_context.md).

## Links

- [scientific knowledge application index](scientific_knowledge_application_index.md)
- [science-based patent grouping](../methods/science_based_patent_grouping.md)
- [organizational science-based patent value premium](../mechanisms/organizational_science_based_patent_value_premium.md)
- [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [patent-age forward-citation control](../validations/patent_age_forward_citation_control.md)
- [patent forward-citation value proxy](patent_forward_citation_value_proxy.md)
- [ratio-metric absolute-impact context](../validations/ratio_metric_absolute_impact_context.md)
- [IPC-class science linkage heterogeneity](ipc_class_science_linkage_heterogeneity.md)
- [science application impact nonmonotonicity](../validations/science_application_impact_nonmonotonicity.md)
- [patent maintenance fee value proxy](patent_maintenance_fee_value_proxy.md)
- [citation impact indicators](citation_impact_indicators.md)
- [patent-paper links](../datasets/patent_paper_links.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `forward_citation_differentiation_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: FCDI; science-based patent citation premium; forward-citation ratio; patent impact differentiation index
