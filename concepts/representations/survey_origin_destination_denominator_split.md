# Survey origin-destination denominator split

## Summary

Survey origin-destination denominator split records whether mobility rates use current-location denominators, origin-country denominators, weighted respondents, or other population bases.

## Canonical Form

- Unit of analysis: survey respondent, current country, origin country, origin-destination cell, or mobility-rate column.
- Typical representation: denominator metadata, weighted matrix, table-column schema, or rate-base flag.
- Representation target: make country-flow percentages comparable by preserving the population used in each column.
- Empirical signature: immigration shares, emigration rates, return rates, and international-experience measures use different denominators in the same survey table.

## Uses in Science of Science

- Refines the [origin-destination mobility matrix](origin_destination_mobility_matrix.md).
- Supports interpretation of [scientific emigration rate](../measures/scientific_emigration_rate.md), [foreign-born scientist share](../measures/foreign_born_scientist_share.md), and return or international-experience rates.
- Links weighting practice to [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md).
- Helps prevent comparing origin-side and destination-side percentages as if they shared the same denominator.

## Operationalization

- For each mobility-rate column, store numerator definition, denominator definition, country base, field base, and weighting rule.
- Separate current-country tables from origin-country tables when possible.
- Record whether rates are weighted by inverse current-country response rate or other survey weights.
- Preserve missing-origin and missing-current-country exclusions.
- Include denominator notes in downstream visualizations and country rankings.

## Evidence and Validations

- Verified full-text evidence from Franzoni, Scellato, and Stephan (2012) determines country of origin from reported residence at age 18 and analyzes scientists whose origin and 2011 residence could be determined.
- The paper notes that some table columns describe immigrants in current core countries, while other columns summarize scientists who lived in a core country at age 18 and were working or studying in another core country.
- The table notes state that columns 5-9 use answers weighted by the inverse of current-country response rate, and the text explains that response-rate variation motivated probability weights.

## Caveats

- Denominator metadata can be lost when survey tables are converted to simple country rankings.
- Weighting by response rate addresses survey response heterogeneity but not all sampling or coverage biases.
- Origin-at-age-18 denominators differ from birthplace, citizenship, degree-country, or career-start denominators.

## Links

- [origin-destination mobility matrix](origin_destination_mobility_matrix.md)
- [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md)
- [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md)
- [scientific emigration rate](../measures/scientific_emigration_rate.md)
- [foreign-born scientist share](../measures/foreign_born_scientist_share.md)
- [GlobSci survey](../datasets/globsci_survey.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; SciSciNet: W1965663941; WoS: unknown]

## Metadata

- Concept ID: `survey_origin_destination_denominator_split`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: mobility denominator split; origin-destination denominator metadata; survey mobility rate base; weighted mobility denominator schema
