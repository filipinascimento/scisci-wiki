# Core-country scientist panel

## Summary

Core-country scientist panel is the country-bounded survey frame used to compare active researchers working or studying in a fixed set of national science systems.

## Canonical Form

- Unit of analysis: scientist, corresponding author, country of work or study, field, sampled publication, or survey wave.
- Typical representation: respondent table keyed by current country, origin proxy, field, journal sample, and response status.
- Data target: cross-country workforce comparison for mobility, immigration, emigration, international experience, and return.
- Empirical signature: a fixed list of core countries defines the comparison universe and should be reported with field coverage.

## Uses in Science of Science

- Provides the country denominator for the [GlobSci survey](globsci_survey.md).
- Supports [foreign-born scientist share](../measures/foreign_born_scientist_share.md), [scientific emigration rate](../measures/scientific_emigration_rate.md), and [scientist return mobility rate](../measures/scientist_return_mobility_rate.md).
- Supplies country nodes for [origin-destination mobility matrices](../representations/origin_destination_mobility_matrix.md).
- Makes coverage caveats such as [web-survey country coverage failure](../validations/web_survey_country_coverage_failure.md) visible.

## Operationalization

- Define the core countries before fielding the survey and keep the list fixed for cross-country comparisons.
- Restrict sampled respondents to scientists working or studying in the core countries at the survey date.
- Record fields, publication-year sampling rules, response counts, country-specific response rates, and weights.
- Treat countries outside the frame as observable only when they appear as origin or destination reports from sampled respondents.
- Report missing high-output countries separately rather than folding them into an unspecified global denominator.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) states that GlobSci surveyed corresponding authors working or studying in 16 core countries.
- The 16 countries are Australia, Belgium, Brazil, Canada, Denmark, France, Germany, India, Italy, Japan, the Netherlands, Spain, Sweden, Switzerland, the United Kingdom, and the United States.
- The paper reports that these countries collectively produced about 70 percent of articles in the four sampled fields.
- China was the only high-producing country not represented in the core-country frame because fielding the web questionnaire there was unsuccessful.

## Caveats

- Core-country panels support comparable measurement inside the frame, not global scientist population estimates.
- Country coverage can be distorted by survey-fielding failures, language, platform access, and nonresponse.
- A country can be outside the sampling frame but still appear as an origin or destination in respondent answers.

## Links

- [GlobSci survey](globsci_survey.md)
- [corresponding-author survey frame](../methods/corresponding_author_survey_frame.md)
- [journal-quartile sampling frame](../methods/journal_quartile_sampling_frame.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)
- [web-survey country coverage failure](../validations/web_survey_country_coverage_failure.md)
- [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `core_country_scientist_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: core-country mobility panel; 16-country scientist panel; GlobSci country frame; active researcher country panel
