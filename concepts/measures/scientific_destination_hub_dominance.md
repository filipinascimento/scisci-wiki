# Scientific destination-hub dominance

## Summary

Scientific destination-hub dominance measures whether emigrating scientists from many origin countries concentrate in the same destination country or small set of destination countries.

## Canonical Form

- Unit of analysis: origin country, destination country, emigrant scientist, country pair, or mobility matrix.
- Typical representation: top-destination share, hub-rank table, destination concentration score, or weighted origin-destination network.
- Measurement target: asymmetry in the destination structure of scientific migration.
- Empirical signature: one destination appears as the top or near-top destination for many origin countries.

## Uses in Science of Science

- Adds destination-side structure to [scientific emigration rate](scientific_emigration_rate.md), which otherwise reports only the share abroad.
- Converts [origin-destination mobility matrices](../representations/origin_destination_mobility_matrix.md) into a hub-dominance measure.
- Helps explain central nodes in [brain circulation networks](../representations/brain_circulation_networks.md) and possible sensitivity to visa or border policy shocks.
- Provides a workforce-mobility analogue to country centrality in [international collaboration networks](../representations/international_collaboration_networks.md).

## Operationalization

- Build an origin-destination table from survey, administrative, or affiliation-history data.
- For each origin country, identify the top destination country and its share of emigrants.
- Count how often each destination is top-ranked, second-ranked, or above a fixed destination-share threshold.
- Report whether hub dominance is measured by number of origin countries, weighted emigrant counts, or network centrality.
- Pair the hub statistic with coverage caveats for missing countries and survey weights.

## Evidence and Validations

- Verified full-text evidence from Franzoni, Scellato, and Stephan (2012) reports destination countries for scientists who lived in a core country at age 18 and were working or studying abroad in 2011.
- The paper states that the United States was the top destination for emigrants from 13 of the other 15 core countries.
- For the two remaining origin countries, the United States was the second most likely destination.
- Franzoni et al. also report that Canada was the most likely destination for scientists who lived in the United States at age 18.
- These findings support treating destination hubs as distinct mobility structure rather than only as a by-product of origin-country emigration rates.

## Caveats

- Destination-hub dominance depends on the set of origin countries included in the frame.
- A hub can be dominant because of training capacity, language, prestige, visa channels, proximity, or historical ties; the measure does not identify the mechanism by itself.
- Missing high-output countries can materially change hub rankings and should be reported.

## Links

- [scientific emigration rate](scientific_emigration_rate.md)
- [foreign-born scientist share](foreign_born_scientist_share.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [country mobility role typology](country_mobility_role_typology.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [mobility policy shock evaluation](../validations/mobility_policy_shock_evaluation.md)
- [central-country mobility displacement](../mechanisms/central_country_mobility_displacement.md)
- [international collaboration networks](../representations/international_collaboration_networks.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; SciSciNet: W1965663941; WoS: unknown]

## Metadata

- Concept ID: `scientific_destination_hub_dominance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: destination-country hub dominance; mobility destination concentration; scientist migration hub; dominant mobility destination
