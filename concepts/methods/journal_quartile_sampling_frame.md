# Journal-quartile sampling frame

## Summary

Journal-quartile sampling frame selects journals from impact-factor or journal-rank quartiles so a survey sample spans higher- and lower-prestige publication outlets within each field.

## Canonical Form

- Unit of analysis: journal, field, quartile, sampled article, corresponding author, or survey invitee.
- Typical representation: field-by-quartile journal sample linked to articles and corresponding-author contacts.
- Method target: reduce outlet-prestige skew in survey recruitment from publication records.
- Empirical signature: journals are sampled from each rank quartile rather than only from elite venues or the full unstratified journal list.

## Uses in Science of Science

- Complements [corresponding-author survey frame](corresponding_author_survey_frame.md) by specifying how publication outlets enter the sample.
- Helps document the publication-source denominator for the [GlobSci survey](../datasets/globsci_survey.md).
- Links survey-based mobility estimates to [journal citation score baseline](../measures/journal_citation_score_baseline.md) and broader responsible metric caveats about journal-level proxies.
- Provides a reusable sampling design for surveys of active researchers in fields where full personnel rosters are unavailable.

## Operationalization

- Define fields and the journal-rank source used for quartile assignment.
- Randomly choose journals from each quartile of the impact-factor or journal-rank distribution.
- Sample articles from the selected journals and identify corresponding authors.
- Store field, quartile, journal, article year, corresponding-author country, and invitation outcomes.
- Report whether country and field estimates are weighted or stratified by quartile.

## Evidence and Validations

- Verified full-text evidence from Franzoni et al. (2012) says the GlobSci survey selected articles from journals chosen at random from each quartile of the impact-factor distribution.
- The paper applies this design to four fields: biology, chemistry, materials, and Earth and environmental sciences.
- The study cites SCImago Journal and Country Rank as the journal-rank source in the article reference list.
- This sampling frame makes the survey an active-researcher publication sample rather than a purely top-journal sample.

## Caveats

- Journal quartiles do not remove all field, language, national, and outlet-selection bias.
- Impact-factor quartiles are journal-level strata and should not be interpreted as article quality.
- Survey weighting still needs response-rate and country-coverage checks.

## Links

- [corresponding-author survey frame](corresponding_author_survey_frame.md)
- [GlobSci survey](../datasets/globsci_survey.md)
- [core-country scientist panel](../datasets/core_country_scientist_panel.md)
- [journal citation score baseline](../measures/journal_citation_score_baseline.md)
- [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Franzoni, C., Scellato, G., & Stephan, P. (2012). Foreign-born scientists: Mobility patterns for 16 countries. *Nature Biotechnology*, 30, 1250-1253. https://doi.org/10.1038/nbt.2449 [OpenAlex: W1965663941; Dimensions: pub.1041991056; WoS: unknown]

## Metadata

- Concept ID: `journal_quartile_sampling_frame`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Franzoni et al. (2012) (2012)
- Latest seen paper: Franzoni et al. (2012) (2012)
- Primary reference DOI: `10.1038/nbt.2449`
- OpenAlex ID: `W1965663941`
- Dimensions ID: `pub.1041991056`
- SciSciNet ID: `W1965663941`
- Aliases: journal quartile sampling; impact-factor quartile sampling; journal-rank stratified sampling; field journal quartile frame
