# Corresponding-author survey frame

## Summary

Corresponding-author survey frame samples scientists through corresponding authors of recent research articles, using publication records as a gateway to an active researcher survey.

## Canonical Form

- Unit of analysis: article, corresponding author, sampled journal, field, country of work or study, or survey invitee.
- Typical representation: publication-derived contact frame linked to survey invitations, responses, respondent countries, and fields.
- Method target: construct a surveyable population of currently active researchers when administrative workforce rosters are not harmonized across countries.
- Empirical signature: respondents are active publication authors rather than all doctorate holders, all researchers, or all byline authors.

## Uses in Science of Science

- Defines the sampling route for the [GlobSci survey](../datasets/globsci_survey.md).
- Pairs with [journal-quartile sampling frame](journal_quartile_sampling_frame.md) to distribute invitations across fields and journal-impact strata.
- Supports survey-derived mobility measures such as [country-at-18 origin proxy](country_at_18_origin_proxy.md), [foreign-born scientist share](../measures/foreign_born_scientist_share.md), and [scientific emigration rate](../measures/scientific_emigration_rate.md).
- Requires [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md) and country-coverage audits before cross-country inference.

## Operationalization

- Select recent articles from defined fields and sampled journals.
- Identify corresponding authors and their country of work or study.
- Send a questionnaire to corresponding authors rather than treating every coauthor as a survey contact.
- Record completed responses, partial responses, non-deliverables, country-specific response rates, and weighting rules.
- State that the frame is an active-publication author frame, not a complete workforce census.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) states that GlobSci surveyed corresponding authors of articles published in 2009.
- The survey covered authors working or studying in 16 core countries across biology, chemistry, materials, and Earth and environmental sciences.
- Franzoni et al. report 16,504 completed responses and 2,356 partial responses.
- The paper uses respondent answers to construct mobility variables including country at age 18, current country, international experience, and return expectations.

## Caveats

- Corresponding authors may differ from non-corresponding coauthors by seniority, role, country, field, and publication venue.
- A publication-derived frame misses active researchers who did not publish in the sampled year or sampled journals.
- Contact information and web-survey delivery can fail unevenly across countries.

## Links

- [GlobSci survey](../datasets/globsci_survey.md)
- [core-country scientist panel](../datasets/core_country_scientist_panel.md)
- [journal-quartile sampling frame](journal_quartile_sampling_frame.md)
- [country-at-18 origin proxy](country_at_18_origin_proxy.md)
- [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md)
- [web-survey country coverage failure](../validations/web_survey_country_coverage_failure.md)
- [scientific mobility](../mechanisms/scientific_mobility.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `corresponding_author_survey_frame`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: corresponding author sampling; publication-author survey frame; active author survey frame; corresponding-author respondent frame
