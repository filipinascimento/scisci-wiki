# Regional mobility net balance

## Summary

Regional mobility net balance measures whether a country or region gains or loses mobile researchers over a defined mobility window after accounting for outgoing and incoming affiliation flows.

## Canonical Form

- Unit of analysis: country, region, origin cohort, destination cohort, or mobile researcher.
- Typical representation: net gain percentage, net loss percentage, origin-destination balance table, or regional flow balance.
- Mechanism or measurement target: whether global scientific mobility redistributes researcher presence across national or regional systems.
- Empirical signature: a region's outgoing mobile researchers exceed or fall below incoming mobile researchers over the same window.

## Uses in Science of Science

- Converts [brain circulation networks](../representations/brain_circulation_networks.md) and [origin-destination mobility matrices](../representations/origin_destination_mobility_matrix.md) into compact regional summaries.
- Complements [country mobility role typology](country_mobility_role_typology.md), which asks whether flows involve high-impact production, recruitment, cultivation, or incubation.
- Helps evaluate [central-country mobility displacement](../mechanisms/central_country_mobility_displacement.md) after policy shocks.
- Provides a descriptive baseline for [mobility policy shock evaluation](../validations/mobility_policy_shock_evaluation.md).
- Needs a separate domestic-mobility check when national aggregation hides [within-country mobility omission](../validations/within_country_mobility_omission.md).

## Operationalization

- Define the mobility-eligible population and observation window.
- Count each mobile researcher's origin region and later affiliated region or region set.
- Compute incoming, outgoing, and net balance for each country or region.
- State how returners, multi-affiliation travelers, and non-directional travelers are counted.
- Report both raw counts and percentage gain or loss relative to the relevant origin or observed mobile population.

## Evidence and Validations

- Verified full-text evidence from Sugimoto et al. (2017) reports regional balances for mobile scholars in a restricted cohort of researchers who first published in 2008 and had at least eight papers from 2008 to 2015.
- In that cohort, the paper reports a 22% net loss of researchers from Europe and a 20% net loss from Asia.
- The same analysis reports a nearly 50% gain for North America.
- Sugimoto et al. also note strong Asia-North America movement, with many mobile scholars associated with Asian addresses later having North American addresses and more than one-third of mobile North American scientists ending up in Asia.

## Caveats

- Net balance hides circulation, return moves, and persistent multi-affiliation unless decomposed by mobility subtype.
- Regional aggregation can mask different country-level or institutional roles.
- Net gain is not automatically a welfare gain, because outgoing scholars can continue to link regions through collaboration and return ties.
- Results depend on the cohort window, publication-count threshold, affiliation coverage, and counting rule for multi-country papers.
- Within-country moves can be invisible when the balance is computed only from country labels.

## Links

- [brain circulation networks](../representations/brain_circulation_networks.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)
- [country mobility role typology](country_mobility_role_typology.md)
- [migrant-traveler mobility split](migrant_traveler_mobility_split.md)
- [non-directional traveler affiliation pattern](non_directional_traveler_affiliation_pattern.md)
- [mobility entry-cohort window](../methods/mobility_entry_cohort_window.md)
- [mobility policy shock evaluation](../validations/mobility_policy_shock_evaluation.md)
- [within-country mobility omission](../validations/within_country_mobility_omission.md)

## References

- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]

## Metadata

- Concept ID: `regional_mobility_net_balance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sugimoto et al. (2017) (2017)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/550029a`
- OpenAlex ID: `W2757063724`
- Dimensions ID: `pub.1092034214`
- SciSciNet ID: `W2757063724`
- Aliases: mobility net gain; mobility net loss; regional brain-circulation balance; researcher flow balance
