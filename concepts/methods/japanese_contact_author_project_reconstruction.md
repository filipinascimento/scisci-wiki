# Japanese contact-author project reconstruction

## Summary

Japanese contact-author project reconstruction identifies a responsible Japanese author from a sampled publication to reconstruct the research project and its funding sources through survey.

## Canonical Form

- Unit of analysis: sampled publication, contact author, respondent, project, or survey record.
- Typical representation: author-selection rule and one-paper-per-respondent sampling procedure.
- Method target: recover project-level funding information from a publication-origin sample.
- Empirical signature: a publication record is linked to a survey response from a likely knowledgeable Japanese author.

## Uses in Science of Science

- Specializes [corresponding-author survey frame](corresponding_author_survey_frame.md) for Japanese publication data.
- Operationalizes [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md).
- Extends [citation-stratified publication survey frame](citation_stratified_publication_survey_frame.md) with contact-author selection rules.
- Creates inputs for [respondent-author status proxy](respondent_author_status_proxy.md).

## Operationalization

- Start from a sampled publication with at least one Japanese-affiliated author.
- Search for a reprint or contact author, then first author, then last author, then another Japanese author if needed.
- Exclude unreachable or ineligible cases.
- Limit repeated respondents by sampling one focal paper per scientist, using a declared priority rule.
- Ask the respondent to describe the project that produced the named paper.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) describes searching sampled papers for an appropriate Japanese author to survey.
- The procedure uses contact, first, and last author information and reduces respondent burden by retaining one paper for scientists appearing more than once.
- This makes the respondent-author selection rule part of the data-generating process.
- It also underpins the link between publication outcomes and project funding shares.

## Caveats

- The selected author may not know all project funding details.
- Contact-author conventions vary by field and country.
- One-paper-per-respondent sampling can prioritize highly cited outputs and should be documented.

## Links

- [corresponding-author survey frame](corresponding_author_survey_frame.md)
- [citation-stratified publication survey frame](citation_stratified_publication_survey_frame.md)
- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md)
- [respondent-author status proxy](respondent_author_status_proxy.md)
- [response-weighted publication survey adjustment](../validations/response_weighted_publication_survey_adjustment.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `japanese_contact_author_project_reconstruction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: Japanese project survey contact rule; publication-origin project reconstruction; Japanese respondent author selection; contact-author project linkage
