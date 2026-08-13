# Research contribution cartogram

## Summary

Research contribution cartogram rescales geographic regions by publication or citation contribution so national scientific output is shown by scholarly weight rather than land area.

## Canonical Form

- Unit of analysis: country, region, citation count, publication count, or mapped spatial unit.
- Typical representation: density-equalizing cartogram, deformed world map, citation-weighted country map, or publication-weighted country map.
- Representation target: make global research contribution visible without letting physical land area dominate perception.
- Empirical signature: countries with large scientific output occupy more map area than their geographic area would imply, while low-output regions shrink.

## Uses in Science of Science

- Provides a spatial visualization layer for [science maps](science_maps.md) and [citation elite geography](citation_elite_geography.md).
- Complements [world city citation network](world_city_citation_network.md) by summarizing country-level research contribution before city-level edge analysis.
- Helps compare publication-volume and citation-volume maps without treating physical country size as scientific size.
- Supports policy-facing communication about global imbalance in scientific output and attention.

## Operationalization

- Assign papers or citations to countries using affiliation metadata.
- Choose a counting rule for multi-country papers and citations before mapping.
- Compute a country-level contribution such as normalized publications, normalized citations, or share of world citations.
- Use a density-equalizing cartogram or equivalent map transformation to rescale regions by the selected contribution.
- Show the scalar variable and the cartogram deformation separately when possible, because color and area can communicate different quantities.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) maps normalized country citation contribution and warns that ordinary colored maps can mislead because large land areas make colors appear more important.
- The paper uses a cartogram in which geographic regions are deformed and rescaled in proportion to relative research contribution.
- Pan et al. report that country citation strengths span seven orders of magnitude and that North America and Europe receive most world citations in their 2003-2010 data.
- The same paper uses the cartogram before moving to city-level citation and collaboration networks.

## Caveats

- Cartograms communicate relative contribution, not causal capacity or research quality.
- Counting rules for multi-affiliation papers can change country shares.
- Small countries with high average impact can still appear visually small if the cartogram is based on total volume.

## Links

- [science maps](science_maps.md)
- [citation elite geography](citation_elite_geography.md)
- [world city citation network](world_city_citation_network.md)
- [international collaboration networks](international_collaboration_networks.md)
- [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)
- [country mean-scaled citation distribution collapse](../validations/country_mean_scaled_citation_distribution_collapse.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `research_contribution_cartogram`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: citation cartogram; research-output cartogram; country citation map; density-equalized science map
