# Patent-paper boundary impact premium

## Summary

Patent-paper boundary impact premium is the empirical pattern that papers and patents directly on the science-technology boundary are unusually likely to be highly cited within their own domains.

## Canonical Form

- Unit of analysis: patent, paper, patent-paper boundary node, field, technology class, institution, inventor, or author.
- Typical representation: high-impact probability by distance to boundary, home-run share, field-year normalized citation percentile, or fixed-effect robustness estimate.
- Mechanism or conclusion: direct science-technology linkage is associated with unusually consequential work in both science and technology.
- Empirical signature: papers and patents at distance 1 from the patent-paper boundary are more often top-cited than comparable non-boundary outputs.

## Uses in Science of Science

- Adds an impact interpretation layer to [patent-paper boundary](../representations/patent_paper_boundary.md).
- Connects [science-technology distance](../measures/science_technology_distance.md) and [science-technology lag](../measures/science_technology_lag.md) to within-domain impact outcomes.
- Helps distinguish mere traceable linkage from high-value dual-frontier work.
- Supports institution and career studies of people and organizations that span [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md).

## Operationalization

- Build boundary status or distance using an [integrated patent-paper citation network](../representations/integrated_patent_paper_citation_networks.md).
- Define high impact within comparable field/year or technology/year cohorts, such as a top-5% citation indicator.
- Compare boundary nodes with nodes farther from the boundary and disconnected nodes.
- Add controls for year, field, technology class, number of authors or inventors, reference counts, institution type, and inventor or author fixed effects.
- Test alternative impact measures such as [patent maintenance fee value proxy](../measures/patent_maintenance_fee_value_proxy.md) when available.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) defines "home runs" as outputs in the upper 5% of citations received in their field and year.
- Their analysis reports that patents directly citing scientific papers were home runs 7.62% of the time, 52.4% above the background rate.
- The same paper reports that scientific papers directly cited by patents were 3.72 times more likely to be highly cited by other papers.
- Ahmadpoor and Jones report that the impact premium is robust to fixed effects for year, field, authors or inventors, institution type, and reference counts, and to alternative impact measures including patent maintenance fees.
- The paper further finds that many direct boundary links are institutional handoffs from university papers to firm patents, while [scientist-inventor boundary spanning](scientist_inventor_boundary_spanning.md) is especially common for university and government patents.
- The disconnected residual pattern is stored separately as [disconnected knowledge-network impact penalty](disconnected_knowledge_network_impact_penalty.md).

## Caveats

- Boundary impact is an association, not direct proof that the cited paper caused the invention or that the patent caused scientific impact.
- Highly cited boundary work may reflect selection by firms, universities, journals, or patenting institutions.
- Direct patent-paper citations are incomplete and noisy indicators of science-to-technology knowledge flow.

## Links

- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [science-technology lag](../measures/science_technology_lag.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [scientist-inventor boundary spanning](scientist_inventor_boundary_spanning.md)
- [university-firm patent-paper handoff](university_firm_patent_paper_handoff.md)
- [disconnected knowledge-network impact penalty](disconnected_knowledge_network_impact_penalty.md)
- [patent maintenance fee value proxy](../measures/patent_maintenance_fee_value_proxy.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `patent_paper_boundary_impact_premium`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: boundary home-run premium; direct science-technology impact premium; dual-frontier impact premium; patent-paper high-impact premium
