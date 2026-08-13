# Country-at-18 origin proxy

## Summary

Country-at-18 origin proxy assigns a scientist's origin country from their country of residence at age 18, using survey data rather than publication affiliations.

## Canonical Form

- Unit of analysis: scientist, survey respondent, country of residence at age 18, current country, or origin-destination pair.
- Typical representation: origin-country label, origin-current country comparison, immigrant/emigrant indicator, or return-status table.
- Measurement target: pre-career or early-adult country baseline for scientist mobility.
- Empirical signature: a scientist is treated as foreign-origin in a current country when the current work/study country differs from the country where they lived at age 18.

## Uses in Science of Science

- Provides the origin definition for survey-based [foreign-born scientist share](../measures/foreign_born_scientist_share.md) and [scientific emigration rate](../measures/scientific_emigration_rate.md).
- Complements bibliometric [country of scientific origin proxy](country_scientific_origin_proxy.md), which often uses first-publication affiliation.
- Helps distinguish survey-based mobility from publication-affiliation movement in [international mobility typologies](../measures/international_mobility_typologies.md).
- Supplies the origin dimension for [origin-destination mobility matrices](../representations/origin_destination_mobility_matrix.md).
- Supports return-mobility measures when paired with questions about international experience and current country.

## Operationalization

- Ask each respondent to report the country where they lived at age 18.
- Compare that country with the respondent's current country of work or study.
- Classify respondents as native-origin, foreign-origin, emigrant, or returnee depending on current location and international experience.
- Weight aggregate country estimates when response rates vary across current countries.
- Report that the proxy is not identical to birth country, citizenship, ethnicity, or first publication country.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) determines country of origin by asking corresponding authors to report their country of residence at age 18.
- The paper uses this proxy for 17,182 scientists whose country of origin and 2011 country of residence could be determined.
- Franzoni et al. use the age-18 origin label to compute foreign-origin shares for current work/study countries and emigration rates for scientists from core countries.
- The same origin proxy enables return analyses for scientists with international experience who had returned to their age-18 country by the 2011 survey.
- When paired with current country, the proxy creates a country-by-country mobility matrix that can be audited for [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md).

## Caveats

- Country at age 18 can differ from country of birth, citizenship, undergraduate training, doctoral training, or first publication.
- Survey recall is usually simple for country at age 18, but it remains self-reported.
- The proxy is not available in standard bibliometric datasets unless survey or biographical data are linked.

## Links

- [country of scientific origin proxy](country_scientific_origin_proxy.md)
- [globsci survey](../datasets/globsci_survey.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [foreign-born scientist share](../measures/foreign_born_scientist_share.md)
- [scientific emigration rate](../measures/scientific_emigration_rate.md)
- [scientist return mobility rate](../measures/scientist_return_mobility_rate.md)
- [international mobility typologies](../measures/international_mobility_typologies.md)
- [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md)
- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `country_at_18_origin_proxy`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: country at age 18; age-18 origin country; country of residence at 18; survey origin proxy
