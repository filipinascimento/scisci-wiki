# R&D spending per researcher threshold

## Summary

R&D spending per researcher threshold measures the minimum average national research spending per researcher associated with above-world-average citation impact.

## Canonical Form

- Unit of analysis: country, national research system, researcher count, R&D expenditure, publication set, or citation impact.
- Typical representation: average citations per paper versus R&D spending per researcher, threshold line, or clustered country groups.
- Measurement target: research-capacity floor needed for internationally competitive average citation impact.
- Empirical signature: countries below the threshold do not exceed world-average citations per paper, while above-threshold countries can but do not always do so.

## Uses in Science of Science

- Adds funding-capacity context to [citation impact indicators](citation_impact_indicators.md).
- Connects national research investment to geography-aware output and impact measures.
- Complements [funding acknowledgments](../datasets/funding_acknowledgments.md), which identify project-level funding traces rather than country-level capacity.
- Supports policy discussions about whether increased funding changes volume, average impact, or both.
- Pairs with [national research output-funding scaling](national_research_output_funding_scaling.md), which tracks volume scaling rather than average-impact thresholds.

## Operationalization

- Aggregate national R&D expenditure over a time window, preferably in purchasing-power-parity units.
- Divide by the number of researchers to estimate spending per researcher per year.
- Compute country-level average citations per paper over the same publication window.
- Compare each country with the world-average citation-per-paper baseline.
- Use clustering or threshold detection to identify spending groups, then validate against alternative country metrics.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) compares national research outcomes with World Bank R&D expenditure and researcher-count data for 2003-2010.
- The paper reports that total national citations scale linearly with R&D expenditure and with the number of researchers.
- For average impact, Pan et al. identify a threshold near 100,000 USD per researcher per year.
- The paper states that no country below this spending threshold exceeds the world-average number of citations per paper.
- Pan et al. emphasize that crossing the threshold does not guarantee high average impact, but below-threshold countries do not do better than the world average.

## Caveats

- The threshold is observational and time-period specific.
- Average citations per paper are field-, language-, and database-dependent.
- Spending per researcher includes infrastructure, bureaucracy, instruments, and other non-salary costs.
- Above-threshold underperformance can reflect allocation efficiency, field mix, institutions, or lagged effects.

## Links

- [citation impact indicators](citation_impact_indicators.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [national research output-funding scaling](national_research_output_funding_scaling.md)
- [geographic collaboration distance](geographic_collaboration_distance.md)
- [world city citation network](../representations/world_city_citation_network.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [funding acknowledgments](../datasets/funding_acknowledgments.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [science of science framework](../methods/science_of_science_framework.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `rd_spending_per_researcher_threshold`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: R&D funding threshold; spending per researcher threshold; national research funding floor; citation impact funding threshold
