# National research output-funding scaling

## Summary

National research output-funding scaling measures how country-level publication or citation volume scales with national R&D expenditure and researcher counts.

## Canonical Form

- Unit of analysis: country, national research system, R&D expenditure, researcher count, publication volume, or citation volume.
- Typical representation: log-log scaling between output volume and funding or researcher counts.
- Measurement target: the resource-volume relationship for national science output.
- Empirical signature: countries with more R&D investment and researchers produce more publications and citations in approximately proportional fashion.

## Uses in Science of Science

- Complements [R&D spending per researcher threshold](rd_spending_per_researcher_threshold.md), which focuses on average impact rather than output volume.
- Adds resource scaling to [research contribution cartogram](../representations/research_contribution_cartogram.md).
- Provides a macro-level counterpart to project-level [funding acknowledgments](../datasets/funding_acknowledgments.md).
- Helps distinguish volume growth from quality or average-impact differences in [citation impact indicators](citation_impact_indicators.md).

## Operationalization

- Aggregate national publication and citation counts over a fixed window.
- Collect national R&D expenditure in comparable purchasing-power-parity units.
- Collect national researcher counts over the same or comparable period.
- Fit scaling relationships between output volume and expenditure or researcher counts.
- Interpret separately from average citations per paper or field-normalized impact.

## Evidence and Validations

- Verified full-text evidence from Pan, Kaski, and Fortunato (2012) compares national research output with World Bank R&D expenditure and researcher-count data.
- The paper reports that national citations scale linearly with R&D expenditure.
- Pan et al. also state that research contribution in citations scales linearly with the number of researchers.
- Their discussion concludes that countries cannot substantially increase research output without sizeable increases in research investment.

## Caveats

- Output-volume scaling does not imply that marginal spending has the same effect in all countries.
- Country field mix, database coverage, language, and international coauthorship counting can alter scaling.
- Linear citation-volume scaling should not be read as evidence of above-average impact, which requires separate normalization.

## Links

- [R&D spending per researcher threshold](rd_spending_per_researcher_threshold.md)
- [research contribution cartogram](../representations/research_contribution_cartogram.md)
- [citation impact indicators](citation_impact_indicators.md)
- [funding acknowledgments](../datasets/funding_acknowledgments.md)
- [web of science](../datasets/web_of_science.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; SciSciNet: W2150607630]

## Metadata

- Concept ID: `national_research_output_funding_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: national output funding scaling; R&D output scaling; country research resource scaling; funding-citation volume scaling
