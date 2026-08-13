# Within-country mobility omission

## Summary

Within-country mobility omission is the validation problem that country-level affiliation mobility ignores movement among regions, institutions, labor markets, or scientific hubs inside large countries.

## Canonical Form

- Unit of analysis: author, institution, subnational region, metropolitan area, country, or mobility edge.
- Typical representation: omitted within-country edge, national aggregation caveat, city-region mobility network, or institution-to-institution flow table.
- Validation target: whether a country-level mobility design misses scientifically important domestic movement.
- Empirical signature: large or geographically decentralized countries show substantial institution or regional movement even when international country labels remain unchanged.

## Uses in Science of Science

- Qualifies country-level [brain circulation networks](../representations/brain_circulation_networks.md) and [regional mobility net balance](../measures/regional_mobility_net_balance.md).
- Adds a spatial aggregation caveat to [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md) and [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md).
- Links researcher mobility measurement to [city science agglomeration scaling](../mechanisms/city_science_agglomeration_scaling.md), [world city citation network](../representations/world_city_citation_network.md), and [world city collaboration network](../representations/world_city_collaboration_network.md).
- Helps policy analyses avoid treating national retention as equivalent to institutional or regional retention.

## Operationalization

- Preserve institution, city, state/province, and region identifiers when affiliation metadata support them.
- Build separate domestic and international mobility layers before aggregating to country flows.
- Compare country-level classifications with institution-to-institution and city-to-city movement rates.
- Report when the study deliberately excludes domestic mobility and identify countries where the omission is likely consequential.
- Use geocoded affiliations or institutional identifiers to distinguish local moves from national-level non-movement.

## Evidence and Validations

- Verified full-text evidence from Sugimoto et al. (2017) focuses on country-level scientific mobility derived from publication affiliations.
- The paper explicitly states that it does not measure mobility rates within each country.
- It notes that within-country mobility could be significant and interesting for large nations such as the United States.
- This limitation means that a researcher can be non-mobile in the country-level design while still changing institutions, regions, or scientific labor markets domestically.

## Caveats

- Subnational affiliation metadata are noisier and less standardized than country labels in many bibliographic databases.
- Domestic mobility may have different mechanisms, policy levers, and career consequences than international mobility.
- Country-level studies remain appropriate for immigration, visa, and international collaboration questions.
- Domestic moves can still interact with [mobility-collaboration complementarity](../mechanisms/mobility_collaboration_complementarity.md) when they alter network access.

## Links

- [brain circulation networks](../representations/brain_circulation_networks.md)
- [regional mobility net balance](../measures/regional_mobility_net_balance.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md)
- [city science agglomeration scaling](../mechanisms/city_science_agglomeration_scaling.md)
- [world city citation network](../representations/world_city_citation_network.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [mobility-collaboration complementarity](../mechanisms/mobility_collaboration_complementarity.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)

## References

- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]

## Metadata

- Concept ID: `within_country_mobility_omission`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sugimoto et al. (2017) (2017)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/550029a`
- OpenAlex ID: `W2757063724`
- Dimensions ID: `pub.1092034214`
- SciSciNet ID: `W2757063724`
- Aliases: domestic mobility omission; subnational mobility omission; national aggregation mobility caveat; within-country affiliation mobility
