# Disconnected knowledge-network impact penalty

## Summary

Disconnected knowledge-network impact penalty is the empirical pattern that papers or patents with no traceable path to the other domain in an integrated science-technology network are less likely to become high-impact outputs within their own domain.

## Canonical Form

- Unit of analysis: disconnected paper, disconnected patent, field-year cohort, technology-year cohort, citation outcome, or patent-paper network component.
- Typical representation: high-impact share for disconnected versus boundary and connected nodes, citation-percentile contrast, or distance-impact curve.
- Mechanism or conclusion: isolation from the cross-domain network is associated with lower measured impact, while direct boundary positions are associated with higher impact.
- Empirical signature: disconnected papers or patents fall below the expected field-year high-impact rate.

## Uses in Science of Science

- Complements [patent-paper boundary impact premium](patent_paper_boundary_impact_premium.md) by storing the negative side of the distance-impact gradient.
- Adds an outcome interpretation to [science-technology majority connectivity](science_technology_majority_connectivity.md), because disconnected nodes form a meaningful residual category.
- Supports robustness checks for [science-technology distance](../measures/science_technology_distance.md) where unconnected nodes cannot be assigned finite distance.
- Helps separate direct boundary advantage, indirect connectedness, and disconnected output penalties.

## Operationalization

- Build an integrated patent-paper citation network and identify nodes with no path to the patent-paper boundary.
- Define high-impact outcomes within comparable field-year or technology-year cohorts.
- Compare disconnected nodes with `D=1` boundary nodes and connected nodes at larger distances.
- Add controls for year, field or technology class, references, team size, institution type, and other available covariates.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) defines high-impact "home runs" as outputs in the upper 5% of citations received within field and year.
- The paper reports that patents disconnected from the scientific paper corpus were home runs at a rate of 3.74%, or 25.2% below the background rate.
- Ahmadpoor and Jones also report that papers directly cited by patents and patents directly citing papers are unusually likely to be high-impact, placing disconnected nodes at the opposite end of the distance-impact pattern.
- Their conclusion frames the result as evidence that productive linkages between understanding and use are substantial, while disconnected outputs are less likely to be high impact.

## Caveats

- Disconnection can reflect database coverage, uncited status, missing references, or long time lags rather than substantive isolation.
- Low citation impact is not the same as low social value, especially for local, classified, infrastructural, or niche work.
- The disconnected category should be retained in analyses rather than treated as missing finite distance.

## Links

- [patent-paper boundary impact premium](patent_paper_boundary_impact_premium.md)
- [science-technology majority connectivity](science_technology_majority_connectivity.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `disconnected_knowledge_network_impact_penalty`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: disconnected patent-paper impact penalty; unconnected output citation penalty; cross-domain disconnection penalty; no-path impact deficit
