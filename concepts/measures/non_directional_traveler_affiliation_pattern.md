# Non-directional traveler affiliation pattern

## Summary

Non-directional traveler affiliation pattern identifies mobile researchers who have multiple country affiliations from their first observed publication year and retain those affiliations over time, making their mobility path affiliation-spanning rather than origin-to-destination.

## Canonical Form

- Unit of analysis: researcher, first publication year, country-affiliation set, or traveler subtype.
- Typical representation: non-directional traveler share, persistent first-year affiliation set, or multi-country first-year flag.
- Mechanism or measurement target: separating continuing multi-country affiliation from directional movement after a single-country origin.
- Empirical signature: multiple countries are present at entry and persist across observed publication years, so there is no clean origin-to-destination sequence.

## Uses in Science of Science

- Refines [migrant-traveler mobility split](migrant_traveler_mobility_split.md) by isolating the traveler subtype that cannot be represented as a simple move.
- Prevents [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md) analyses from forcing persistent multi-affiliation into one directed edge.
- Adds an affiliation-set interpretation to [brain circulation networks](../representations/brain_circulation_networks.md).
- Flags cases where [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md) is multi-country at the start.

## Operationalization

- Reconstruct each author's ordered country-affiliation sets by publication year.
- Identify travelers as researchers who retain origin-country ties while adding or holding international affiliations.
- Label a traveler as non-directional when the first publication year already contains more than one country affiliation and those affiliations persist in each publication year.
- Report the share of travelers and all mobile researchers falling into this subtype.
- Keep non-directional travelers separate from migrants and directional travelers in flow diagrams and impact comparisons.

## Evidence and Validations

- Verified full-text evidence from Sugimoto et al. (2017) defines travelers as scholars who retain a footing in their country or countries of scientific origin while adding international affiliations.
- Sugimoto et al. report that travelers were 72.7% of mobile researchers, or 433,375 researchers, in their 2008-2015 analysis.
- The paper further states that nearly half of travelers are non-directional because they have more than one affiliation in their first publication year and retain all these affiliations in each publication year.
- This subtype explains why brain circulation can be missed by migration-only measures.

## Caveats

- Persistent affiliation can reflect actual movement, dual employment, visiting status, remote affiliation, administrative practice, or collaboration-mediated address listing.
- The subtype depends on accurate author disambiguation and affiliation-country normalization.
- Multiple first-year affiliations can make a single [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md) misleading unless multi-origin cases are retained.

## Links

- [migrant-traveler mobility split](migrant_traveler_mobility_split.md)
- [international mobility typologies](international_mobility_typologies.md)
- [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [mobility entry-cohort window](../methods/mobility_entry_cohort_window.md)

## References

- Sugimoto, C. R., Robinson-Garcia, N., Murray, D. S., Yegros-Yegros, A., Costas, R., & Lariviere, V. (2017). Scientists have most impact when they're free to move. *Nature*, 550, 29-31. https://doi.org/10.1038/550029a [OpenAlex: W2757063724; Dimensions: pub.1092034214; WoS: unknown]

## Metadata

- Concept ID: `non_directional_traveler_affiliation_pattern`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sugimoto et al. (2017) (2017)
- Latest seen paper: Sugimoto et al. (2017) (2017)
- Primary reference DOI: `10.1038/550029a`
- OpenAlex ID: `W2757063724`
- Dimensions ID: `pub.1092034214`
- SciSciNet ID: `W2757063724`
- Aliases: non-directional traveler; persistent multi-affiliation traveler; multi-country first-year traveler; affiliation-spanning traveler
