# Project funding-source survey linkage

## Summary

Project funding-source survey linkage connects a publication to the research project that produced it and asks the responsible author to apportion that project's funding sources.

## Canonical Form

- Unit of analysis: publication, project, respondent author, funding source, or funding-source percentage.
- Typical representation: paper-level bibliometric record joined to survey-reported project funding shares and author status variables.
- Mechanism or measurement target: direct project-funding attribution that includes block funding and avoids relying only on funding acknowledgments.
- Empirical signature: each sampled paper has linked project-level funding shares rather than a binary grant-acknowledgment flag.

## Uses in Science of Science

- Supports comparisons of [competitive-funding share thresholds](../measures/competitive_funding_share_threshold.md) and internal block funding.
- Provides the data structure for [funding model status contingency](../mechanisms/funding_model_status_contingency.md) and [funding status-interaction tests](../validations/funding_status_interaction_test.md).
- Helps study funding-policy mechanisms when acknowledgment metadata underreport block funds or attach grants that did not fund the focal work.

## Operationalization

- Sample focal publications from a bibliometric database.
- Survey a responsible author about the project that yielded the focal paper.
- Ask for approximate percentages of project funding by source category.
- Link the funding-source shares to paper outcomes, respondent status, field, year, team size, and reference data.
- Preserve the shares as [fractional project-funding attribution](../measures/fractional_project_funding_attribution.md) before reducing them to binary funding-model indicators.
- When the survey begins from a publication population, document the [citation-stratified publication survey frame](../methods/citation_stratified_publication_survey_frame.md) and any weighting used to recover the publication universe.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) combines a survey of Japanese research projects with Web of Science publication and reference data.
- The paper argues that survey-reported project funding improves on publication acknowledgments because it can capture block funding and fractional funding-source attribution.
- Their survey asks the respondent to allocate project funding across internal funds, competitive government grants, noncompetitive grants, firm funding, donations, local or foreign government funds, and other sources.
- The design enables both a binary competitive-funding indicator and a continuous funding-share measure for robustness checks.
- The same full text uses a citation-stratified publication sample, top-cited oversampling, response checks, and weights, making the survey frame part of the reusable linkage design.

## Caveats

- Survey recall and respondent selection can introduce measurement error.
- The project-to-paper link is author-reported rather than mechanically observed.
- The Web of Science publication frame misses outputs outside indexed journals and can interact with funding source or status.

## Links

- [competitive-funding share threshold](../measures/competitive_funding_share_threshold.md)
- [fractional project-funding attribution](../measures/fractional_project_funding_attribution.md)
- [funding status-interaction test](../validations/funding_status_interaction_test.md)
- [funding selection-treatment split](../methods/funding_selection_treatment_split.md)
- [respondent-author status proxy](../methods/respondent_author_status_proxy.md)
- [citation-stratified publication survey frame](../methods/citation_stratified_publication_survey_frame.md)
- [mixed-funding within-system comparison](../methods/mixed_funding_within_system_comparison.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [funding acknowledgments](funding_acknowledgments.md)
- [Web of Science](web_of_science.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `project_funding_source_survey_linkage`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Aliases: project funding survey; paper-project funding linkage; funding-source percentage survey; publication-project survey linkage
