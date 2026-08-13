# Patent-age forward-citation control

## Summary

Patent-age forward-citation control compares patent impact after accounting for how long each patent has had to receive forward citations.

## Canonical Form

- Unit of analysis: patent, filing-year cohort, application-year cohort, patent age, forward-citation count, or science-citing patent group.
- Typical representation: age-stratified average forward citations, fixed citation window, patent-age control variable, or cohort-specific FCDI.
- Validation target: avoid attributing mechanical citation exposure differences to science-based patent value.
- Empirical signature: newer patents have fewer observed forward citations, so impact comparisons are stratified or controlled by age.

## Uses in Science of Science

- Validates [forward citation differentiation index](../measures/forward_citation_differentiation_index.md) by separating citation exposure from science-linkage differences.
- Pairs with [patent application-year time anchor](../methods/patent_application_year_time_anchor.md) and [citation window selection](../methods/citation_window_selection.md).
- Supports fair organization, country, and IPC-class comparisons in [patent-paper links](../datasets/patent_paper_links.md).
- Documents right-censoring in patent panels such as the [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md).

## Operationalization

- Define patent age as the time between patent filing, publication, or grant and the citation census date.
- Compare science-citing and non-science-citing patents within the same patent-age stratum or fixed citation window.
- Report average forward citations for both groups before computing FCDI.
- Run sensitivity checks using application year, grant year, and fixed-window counts where data permit.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) notes that later nano medical device patents generally receive fewer forward citations because they have less time to be cited.
- The authors therefore take patent age into account when comparing forward citations of science-citing and non-science-citing patents.
- For 14-year-old corporate patents, they report 53 forward citations per science-citing patent versus 16 per non-science-citing patent.
- For 14-year-old university patents, they report 22 forward citations per science-citing patent versus 8 per non-science-citing patent.
- These age-specific comparisons support interpreting organization-level FCDI as more than a simple citation-window artifact.

## Caveats

- Patent age depends on whether the clock starts at application, publication, or grant date.
- Forward citations vary by patent office, technology class, and patent-family treatment.
- Fixed windows improve comparability but discard longer-run influence for older patents.
- Citation exposure controls do not remove all differences in patent quality, prosecution strategy, or examiner behavior.

## Links

- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [citation window selection](../methods/citation_window_selection.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [organizational science-based patent value premium](../mechanisms/organizational_science_based_patent_value_premium.md)
- [science application impact nonmonotonicity](science_application_impact_nonmonotonicity.md)
- [patent maintenance fee value proxy](../measures/patent_maintenance_fee_value_proxy.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `patent_age_forward_citation_control`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: patent citation exposure control; patent-age FCDI check; forward-citation right-censoring control; age-stratified patent impact
