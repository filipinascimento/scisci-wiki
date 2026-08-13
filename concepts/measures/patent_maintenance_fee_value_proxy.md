# Patent maintenance fee value proxy

## Summary

Patent maintenance fee value proxy uses renewal or maintenance-fee payments as an alternative indicator of patent value because owners pay fees to keep economically valuable patents active.

## Canonical Form

- Unit of analysis: patent, maintenance-fee event, renewal decision, lapse, patent cohort, or technology class.
- Typical representation: paid-maintenance indicator, renewal age, lapse event, maintenance-fee history, or value-proxy robustness check.
- Measurement target: market value or private value of a patent, complementing citation-based patent impact.
- Empirical signature: conclusions based on patent citations are checked against whether patent owners continue paying maintenance fees.

## Uses in Science of Science

- Validates [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md) using a non-citation outcome.
- Complements [citation impact indicators](citation_impact_indicators.md) for technology studies where citations may mix knowledge flow, prior art, and examination practice.
- Provides an alternative outcome for [science-technology distance](science_technology_distance.md), [patent-paper links](../datasets/patent_paper_links.md), and direct-boundary patents.
- Links patent valuation to science-of-science analyses of translation, innovation, and technology impact.

## Operationalization

- Retrieve maintenance-fee events for patents from USPTO or jurisdiction-specific renewal databases.
- Encode whether required fees are paid at each maintenance window and whether the patent lapses.
- Use fee payment, renewal duration, or lapse timing as a value proxy.
- Compare citation-based findings with maintenance-fee outcomes by field, year, technology class, assignee type, and boundary distance.
- Record jurisdiction, grant-date eligibility, and fee schedule because renewal regimes differ.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) uses patent maintenance-fee payments as an alternative impact measure for patent-paper boundary analyses.
- The paper explains that maintenance fees are paid by patent owners to prevent patents from lapsing and can provide a more direct measure of market value than citations received.
- Ahmadpoor and Jones report that the direct-boundary impact premium remains similar when using patent maintenance-fee payments rather than citations.
- Their supplement states that USPTO maintenance-fee events occur in the fourth, eighth, and twelfth years after the patent was granted.
- The same source reports that this maintenance-fee data is available for patents granted from September 1, 1981 onward.

## Caveats

- Maintenance-fee decisions reflect private value to the owner, not necessarily social value or scientific importance.
- Fee schedules, grace periods, and maintenance rules vary by jurisdiction and patent type.
- Patents owned by universities, firms, and individuals may have different renewal strategies.
- Maintenance-fee data are grant-date dependent and can be right-censored for recent patents.

## Links

- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [science-technology distance](science_technology_distance.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)
- [citation impact indicators](citation_impact_indicators.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [responsible metrics](responsible_metrics.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `patent_maintenance_fee_value_proxy`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Aliases: patent renewal value proxy; maintenance-fee patent value; patent lapse value proxy; renewal-based patent impact
