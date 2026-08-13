# Survey response-rate heterogeneity

## Summary

Survey response-rate heterogeneity is the validity problem that response probabilities differ by country, field, institution, or respondent type, requiring weights and uncertainty before comparing groups.

## Canonical Form

- Unit of analysis: survey invitee, country, field, respondent group, response status, or weighting stratum.
- Typical representation: response-rate table, inverse-response weight, nonresponse audit, or sensitivity analysis.
- Validation target: whether survey estimates are comparable across groups when participation differs.
- Empirical signature: country or field response rates vary enough that unweighted rates could distort mobility, workforce, or attitude measures.

## Uses in Science of Science

- Validates survey-based data sources such as the [GlobSci survey](../datasets/globsci_survey.md).
- Qualifies [foreign-born scientist share](../measures/foreign_born_scientist_share.md), [scientific emigration rate](../measures/scientific_emigration_rate.md), and [scientist return mobility rate](../measures/scientist_return_mobility_rate.md).
- Supports transparent construction of [origin-destination mobility matrices](../representations/origin_destination_mobility_matrix.md).
- Connects mobility-survey work to [responsible metrics](../measures/responsible_metrics.md) by requiring denominator and response documentation.

## Operationalization

- Report completed responses, partial responses, non-deliverables, and response rates by relevant stratum.
- Compute response weights when group response rates differ materially.
- State which estimates are weighted and which are unweighted.
- Audit whether low-response groups also differ on measured outcomes.
- Avoid treating missing answers as zero mobility or zero preference.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) reports an overall GlobSci response rate of 35.6 percent before adjustment for non-deliverables.
- Country response rates vary, with Italy at 63.3 percent and Germany at 26.2 percent.
- The paper states that columns 5-9 of the mobility table are weighted by the inverse of current-country response rate.
- Franzoni et al. report 16,504 completed responses and 2,356 partial responses, making partial response handling part of the survey evidence trail.

## Caveats

- Inverse-response weighting addresses observed response-rate differences but not all unobserved nonresponse bias.
- Response rates can vary by both country and field, so a single country weight may be incomplete.
- Partial responses require item-level missingness checks when building derived measures.

## Links

- [GlobSci survey](../datasets/globsci_survey.md)
- [corresponding-author survey frame](../methods/corresponding_author_survey_frame.md)
- [journal-quartile sampling frame](../methods/journal_quartile_sampling_frame.md)
- [origin-destination mobility matrix](../representations/origin_destination_mobility_matrix.md)
- [foreign-born scientist share](../measures/foreign_born_scientist_share.md)
- [scientific emigration rate](../measures/scientific_emigration_rate.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `survey_response_rate_heterogeneity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: survey nonresponse heterogeneity; country response-rate bias; inverse response weighting; mobility survey nonresponse
