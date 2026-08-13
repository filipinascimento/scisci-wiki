# Web-survey country coverage failure

## Summary

Web-survey country coverage failure is the validity problem that a planned survey country cannot be fielded successfully, removing a national science system from the sampling frame.

## Canonical Form

- Unit of analysis: planned country, survey platform, language, contact route, fielding attempt, or missing country.
- Typical representation: failed-country note, excluded-country flag, missing high-output country caveat, or coverage sensitivity.
- Validation target: whether a cross-country survey frame represents the target country universe.
- Empirical signature: a high-output or otherwise important country is absent because questionnaire delivery, access, or participation failed.

## Uses in Science of Science

- Qualifies [core-country scientist panels](../datasets/core_country_scientist_panel.md) and the [GlobSci survey](../datasets/globsci_survey.md).
- Prevents cross-country mobility results from being interpreted as global when a major country is missing.
- Links survey design to [survey response-rate heterogeneity](survey_response_rate_heterogeneity.md) because both are coverage threats.
- Provides a reusable caveat for web-based surveys of scientists, especially in cross-national work.

## Operationalization

- Pre-register or document the intended country frame.
- Record failed fielding attempts, blocked delivery, language/platform constraints, and final exclusions.
- Report whether the excluded country is high-output in the sampled fields.
- Avoid imputing missing-country values from neighboring countries or global averages without an explicit model.
- Re-run or supplement with alternative fielding modes when the missing country is central to the research question.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) states that China was the only high-producing country not represented in GlobSci.
- The paper explains that efforts to field the web-based questionnaire in China were unsuccessful.
- Franzoni et al. list this exclusion as a limitation, noting that GlobSci is restricted to researchers who published in one of the 16 included countries.
- The result is a strong example of a nonresponse problem at the country-frame level rather than only at the individual respondent level.

## Caveats

- A failed country frame does not imply absence of scientists or mobility in that country.
- The importance of the missing country depends on the research question, field mix, and global output share.
- Alternative data sources such as publication-affiliation histories may partly fill coverage gaps but use different origin and mobility definitions.

## Links

- [GlobSci survey](../datasets/globsci_survey.md)
- [core-country scientist panel](../datasets/core_country_scientist_panel.md)
- [corresponding-author survey frame](../methods/corresponding_author_survey_frame.md)
- [survey response-rate heterogeneity](survey_response_rate_heterogeneity.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)
- [international mobility typologies](../measures/international_mobility_typologies.md)
- [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `web_survey_country_coverage_failure`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: missing country survey coverage; failed country fielding; web questionnaire country failure; cross-country survey coverage gap
