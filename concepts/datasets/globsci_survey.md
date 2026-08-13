# GlobSci survey

## Summary

The GlobSci survey is a cross-country survey dataset of active research scientists designed to compare scientist immigration, emigration, return mobility, and mobility motivations across countries.

## Canonical Form

- Unit of analysis: corresponding author, scientist, country of work or study, country of residence at age 18, field, or mobility experience.
- Typical representation: survey-response table with country origin, 2011 work/study country, international experience, return status, and mobility motivation responses.
- Data type: cross-sectional survey linked to sampled publication authors.
- Empirical signature: country-level variation in foreign-origin shares, emigration rates, return rates, and stated reasons for mobility.

## Uses in Science of Science

- Provides survey evidence for [scientific mobility](../mechanisms/scientific_mobility.md) beyond publication-affiliation traces.
- Supports country-level measures such as [foreign-born scientist share](../measures/foreign_born_scientist_share.md), [scientific emigration rate](../measures/scientific_emigration_rate.md), and [scientist return mobility rate](../measures/scientist_return_mobility_rate.md).
- Provides direct origin information through [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md), which complements bibliometric [country of scientific origin proxy](../methods/country_scientific_origin_proxy.md).
- Splits its survey design into [corresponding-author survey frame](../methods/corresponding_author_survey_frame.md), [journal-quartile sampling frame](../methods/journal_quartile_sampling_frame.md), and [core-country scientist panel](core_country_scientist_panel.md).
- Supplies a motivation layer for [scientific mobility motivation taxonomy](../methods/scientific_mobility_motivation_taxonomy.md).

## Operationalization

- Sample corresponding authors of 2009 articles in biology, chemistry, materials, and Earth and environmental sciences.
- Restrict sampled work/study locations to 16 core countries.
- Ask respondents their country of residence at age 18, current country of work or study, prior international experience, return status, and reasons for mobility.
- Use country-response weights when reporting emigration, international-experience, and return rates.
- Report field, country, response-rate, and missing-country limitations explicitly.
- Store the [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md) separately from individual motivation responses so country-flow structure remains auditable.
- Preserve denominator metadata with [survey origin-destination denominator split](../representations/survey_origin_destination_denominator_split.md), especially when mixing current-country and origin-country rates.
- Split current-location rates from [international experience prevalence](../measures/international_experience_prevalence.md), [scientific destination-hub dominance](../measures/scientific_destination_hub_dominance.md), and [job-conditioned return intention](../measures/job_conditioned_return_intention.md) so the same survey table can support several mobility constructs.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) states that GlobSci surveyed corresponding authors during February-June 2011 in 16 core countries.
- The survey covers four science fields and the core countries collectively produced about 70 percent of articles in those fields.
- The paper reports 16,504 completed responses plus 2,356 partial responses, with an overall response rate of 35.6 percent before adjustment for non-deliverables.
- Franzoni et al. use the survey to compare immigration, emigration, international experience, return rates, and mobility motivations across the 16 countries.
- The verified text also supports explicit validation pages for [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md) and [web-survey country coverage failure](../validations/web_survey_country_coverage_failure.md).
- A later pass separates the survey's international-experience, destination-hub, and conditional-return signals into dedicated motifs for reuse in mobility-policy and workforce analyses.
- Additional full-text evidence separates the [emigrant scientist tracking gap](../validations/emigrant_scientist_tracking_gap.md), [GlobSci cross-sectional snapshot limit](../validations/globsci_cross_sectional_snapshot_limit.md), [four-field mobility scope filter](../validations/four_field_mobility_scope_filter.md), and denominator-split representation as reusable checks for mobility analyses.

## Caveats

- GlobSci is cross-sectional and cannot compare cohorts over time.
- China is not one of the core countries because the web survey could not be fielded successfully there.
- The survey is restricted to four fields and to scientists who published in sampled journals.
- Survey nonresponse and country-specific response rates require weighting and caution.
- Origin-side emigration claims should account for national datasets that do not follow scientists after they leave the country.

## Links

- [scientific mobility](../mechanisms/scientific_mobility.md)
- [international mobility typologies](../measures/international_mobility_typologies.md)
- [country-at-18 origin proxy](../methods/country_at_18_origin_proxy.md)
- [corresponding-author survey frame](../methods/corresponding_author_survey_frame.md)
- [journal-quartile sampling frame](../methods/journal_quartile_sampling_frame.md)
- [core-country scientist panel](core_country_scientist_panel.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)
- [survey origin-destination denominator split](../representations/survey_origin_destination_denominator_split.md)
- [foreign-born scientist share](../measures/foreign_born_scientist_share.md)
- [immigrant source-country concentration](../measures/immigrant_source_country_concentration.md)
- [scientific emigration rate](../measures/scientific_emigration_rate.md)
- [international experience prevalence](../measures/international_experience_prevalence.md)
- [scientific destination-hub dominance](../measures/scientific_destination_hub_dominance.md)
- [scientist return mobility rate](../measures/scientist_return_mobility_rate.md)
- [job-conditioned return intention](../measures/job_conditioned_return_intention.md)
- [scientific mobility motivation taxonomy](../methods/scientific_mobility_motivation_taxonomy.md)
- [attraction-return policy asymmetry](../mechanisms/attraction_return_policy_asymmetry.md)
- [brain circulation networks](../representations/brain_circulation_networks.md)
- [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md)
- [web-survey country coverage failure](../validations/web_survey_country_coverage_failure.md)
- [emigrant scientist tracking gap](../validations/emigrant_scientist_tracking_gap.md)
- [GlobSci cross-sectional snapshot limit](../validations/globsci_cross_sectional_snapshot_limit.md)
- [four-field mobility scope filter](../validations/four_field_mobility_scope_filter.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `globsci_survey`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: GlobSci; GlobSci scientist mobility survey; cross-country scientist mobility survey; active researcher mobility survey
