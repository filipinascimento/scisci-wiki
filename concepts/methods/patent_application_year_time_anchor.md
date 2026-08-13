# Patent application-year time anchor

## Summary

Patent application-year time anchor dates inventions by patent application year rather than grant year when measuring science-technology lags, inventor careers, or temporal trends in patent behavior.

## Canonical Form

- Unit of analysis: patent, application year, grant year, patent citation path, inventor career event, or technology-year panel.
- Typical representation: application-year field, grant-year field, application-to-grant lag, citation-window start, or time-lag variable.
- Method target: locate the invention closer to when it was filed and disclosed rather than when the office granted it.
- Empirical signature: application-year dating reduces distortions from variable grant delays when analyzing lags and trends.

## Uses in Science of Science

- Provides the timing basis for [science-technology lag](../measures/science_technology_lag.md), [science-technology distance](../measures/science_technology_distance.md), and [patent-paper boundary](../representations/patent_paper_boundary.md).
- Supports longitudinal patent measures such as [age at first invention](../measures/age_at_first_invention.md), [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md), and [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Helps align [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md) analyses with paper publication years, citation windows, and inventor career histories.
- Provides a caveat for grant-year-only patent datasets.

## Operationalization

- Extract both application year and grant year when available.
- Use application year to date invention events, science-technology lags, and inventor entry events.
- Use grant year when the research question concerns legal grant availability or citation follow-up from grant date.
- Record application-to-grant delay and apply right-censoring rules when studying repeat inventions or forward citations.
- State which patent date anchors each figure or model.
- For inventor-sequence analyses, combine application-year ordering with [inventor application time lag](../measures/inventor_application_time_lag.md) and [patent field-jump specialization](../measures/patent_field_jump_specialization.md) windows.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) records patent number, application year, patent references, inventor names, assignee, and technology class, and states that all analyses use application year to locate the patent in time.
- The same paper defines temporal distance between a paper and patent as the patent's application year minus the paper's publication year.
- Verified full-text evidence from Jones (2009) studies patent histories and notes that granted patents can appear with delay, which creates truncation issues when measuring consecutive applications or inventor timelines.
- Jones uses patent application timing to measure lag between consecutive patent applications and age at first invention.
- Verified full-text evidence from Funk and Owen-Smith (2017) controls for application year in patent regressions and contrasts application and grant-year timing when studying CD5 distributions.

## Caveats

- Application dates can be missing, corrected, or complicated by continuations and patent-family structures.
- Grant-year dating is still appropriate for some legal or public-availability questions.
- Application-to-grant delays can create right-censoring in inventor career panels and forward-citation windows.
- Cross-country patent systems can expose different filing, publication, and grant dates.

## Links

- [science-technology lag](../measures/science_technology_lag.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)
- [age at first invention](../measures/age_at_first_invention.md)
- [inventor application time lag](../measures/inventor_application_time_lag.md)
- [patent field-jump specialization](../measures/patent_field_jump_specialization.md)
- [inventor birthdate matching panel](../datasets/inventor_birthdate_matching_panel.md)
- [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md)
- [disruption index](../measures/disruption_index.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [citation data census dates](citation_data_census_dates.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]
- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]
- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]

## Metadata

- Concept ID: `patent_application_year_time_anchor`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Aliases: patent application-year dating; invention time anchor; patent filing year anchor; application-year lag measurement
