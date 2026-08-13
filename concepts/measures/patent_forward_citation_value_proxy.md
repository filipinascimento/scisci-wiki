# Patent forward-citation value proxy

## Summary

Patent forward-citation value proxy uses citations received by patents as an observable indicator of technological influence, impact, or value.

## Canonical Form

- Unit of analysis: patent, patent family, patent cohort, organization type, country, technology class, or citation window.
- Typical representation: forward citations per patent, average forward citations by cohort, or citation-premium ratio.
- Measurement target: downstream technological influence or value of an invention.
- Empirical signature: patents that receive more later patent citations are treated as more influential under a declared citation-window and age-control rule.

## Uses in Science of Science

- Supplies the outcome for [forward citation differentiation index](forward_citation_differentiation_index.md).
- Complements [patent maintenance fee value proxy](patent_maintenance_fee_value_proxy.md) as a citation-based rather than renewal-based patent-value indicator.
- Connects patent studies to broader [citation impact indicators](citation_impact_indicators.md).
- Requires [patent-age forward-citation control](../validations/patent_age_forward_citation_control.md) before comparing patents with different exposure windows.

## Operationalization

- Define forward citations as later patents citing the focal patent or patent family.
- Choose whether to count raw patents, patent families, examiner citations, applicant citations, or all citation sources.
- Harmonize citation exposure by filing year, grant year, patent age, or fixed citation window.
- Aggregate forward citations by science-linkage group, country, organization type, or technology class.
- Report absolute citation counts alongside ratios or premiums.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) uses forward citations received by nano medical device patents as an impact indicator.
- The paper compares forward citations for patents that cite scientific publications with those that do not cite scientific publications.
- Their overall panel shows science-citing patents receiving more forward citations on average, but technology-class and country results vary.
- The study explicitly controls for patent age in forward-citation regressions, motivating age harmonization whenever this proxy is used.

## Caveats

- Patent citations can reflect legal prior art, examiner practice, strategic drafting, or database coverage rather than value alone.
- Forward citations are right-censored for recent patents.
- Patent offices and technology classes differ in citation practices.
- A citation premium is associative unless the design can separate science use from selection into higher-potential inventions.

## Links

- [forward citation differentiation index](forward_citation_differentiation_index.md)
- [patent-age forward-citation control](../validations/patent_age_forward_citation_control.md)
- [citation impact indicators](citation_impact_indicators.md)
- [patent maintenance fee value proxy](patent_maintenance_fee_value_proxy.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [ratio-metric absolute-impact context](../validations/ratio_metric_absolute_impact_context.md)
- [scientific knowledge application index](scientific_knowledge_application_index.md)
- [patent-paper links](../datasets/patent_paper_links.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology-The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `patent_forward_citation_value_proxy`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: patent forward-citation proxy; forward citations as patent value; patent citation impact proxy; technological impact citation proxy
