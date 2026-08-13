# Origin-destination mobility matrix

## Summary

Origin-destination mobility matrix represents scientist mobility as a table of origin countries by current or destination countries, optionally with return and international-experience columns.

## Canonical Form

- Unit of analysis: origin country, destination country, scientist, move, survey respondent, or country pair.
- Typical representation: weighted country-by-country matrix, origin-destination table, destination share column, or return-status matrix.
- Representation target: cross-country structure of scientist migration, return, and circulation.
- Empirical signature: off-diagonal cells indicate scientists whose current work or study country differs from their origin proxy.

## Uses in Science of Science

- Converts the [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md) into cross-country mobility flows.
- Supports [international mobility typologies](../measures/international_mobility_typologies.md), [scientific emigration rate](../measures/scientific_emigration_rate.md), and [immigrant source-country concentration](../measures/immigrant_source_country_concentration.md).
- Provides a tabular precursor to [brain circulation networks](brain_circulation_networks.md).
- Makes concentration and destination dominance visible before building graph metrics.

## Operationalization

- Assign each respondent an origin proxy and current country of work or study.
- Count or weight respondents by origin-destination pair.
- Derive country-level foreign-origin shares, emigration rates, dominant destination countries, and top-source concentration.
- Add return-status or international-experience columns when the survey asks about prior mobility.
- Report whether rows or columns are weighted by inverse response rates.
- Use [scientific destination-hub dominance](../measures/scientific_destination_hub_dominance.md) when matrix columns show repeated concentration in the same destination country.
- Use [scientist source-country affinity](../mechanisms/scientist_source_country_affinity.md) when source-country cells cluster by neighboring, language, cultural, or training ties.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) tabulates country of work or study in 2011 against country of origin at age 18 for 16 core countries.
- The table reports foreign-origin shares, source countries supplying at least 10 percent of a foreign workforce, top-four source-country concentration, emigration rates, major destination countries, international experience, and return rates.
- The paper notes that columns 5-9 are weighted by the inverse of current-country response rates.
- Franzoni et al. report that the United States is the top destination for emigrants from 13 of the other 15 core countries and the second most likely destination for the remaining two.
- The same table supports [international experience prevalence](../measures/international_experience_prevalence.md) and [job-conditioned return intention](../measures/job_conditioned_return_intention.md) when origin-country rows are paired with return and experience columns.

## Caveats

- Survey matrices reflect sampled active researchers, not all scientists or all degrees.
- Sparse cells can be unstable when the sampled respondent count is small.
- Origin-destination matrices do not show within-career timing unless linked to longitudinal histories.

## Links

- [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md)
- [core-country scientist panel](../datasets/core_country_scientist_panel.md)
- [GlobSci survey](../datasets/globsci_survey.md)
- [international mobility typologies](../measures/international_mobility_typologies.md)
- [foreign-born scientist share](../measures/foreign_born_scientist_share.md)
- [scientific emigration rate](../measures/scientific_emigration_rate.md)
- [scientific destination-hub dominance](../measures/scientific_destination_hub_dominance.md)
- [international experience prevalence](../measures/international_experience_prevalence.md)
- [immigrant source-country concentration](../measures/immigrant_source_country_concentration.md)
- [scientist source-country affinity](../mechanisms/scientist_source_country_affinity.md)
- [scientist return mobility rate](../measures/scientist_return_mobility_rate.md)
- [job-conditioned return intention](../measures/job_conditioned_return_intention.md)
- [brain circulation networks](brain_circulation_networks.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `origin_destination_mobility_matrix`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: scientist migration matrix; mobility origin-destination table; country mobility matrix; origin-current country table
