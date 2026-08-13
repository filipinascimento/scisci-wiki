# Response-weighted publication survey adjustment

## Summary

Response-weighted publication survey adjustment uses response-bias checks and survey weights to make respondent records better represent the sampled publication population.

## Canonical Form

- Unit of analysis: sampled publication, respondent, nonrespondent, survey weight, field stratum, or citation stratum.
- Typical representation: response-bias test, weight vector, or weighted regression specification.
- Validation target: whether survey-based paper/project inferences are distorted by differential response.
- Empirical signature: respondent and nonrespondent differences are checked and weights adjust the analytic sample toward the target population.

## Uses in Science of Science

- Qualifies [citation-stratified publication survey frame](../methods/citation_stratified_publication_survey_frame.md).
- Extends [survey response-rate heterogeneity](survey_response_rate_heterogeneity.md) into weighted analysis.
- Supports [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md) by addressing response selection.
- Relates to broader weighting motifs such as [diversity aggregation weight sensitivity](diversity_aggregation_weight_sensitivity.md).

## Operationalization

- Compare respondents and nonrespondents on observed publication, field, author, and citation variables.
- Estimate or assign weights that account for sampling and response differences.
- Use weights in descriptive statistics and regression models when estimating population-level associations.
- Report unweighted robustness checks when feasible.
- Document which variables are and are not observable for nonrespondents.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) reports a 27% response rate and response-bias checks.
- The paper uses weights to account for differential response and the sampling structure of the publication-origin survey.
- This adjustment is part of the credibility of the funding-model results because project funding is observed only for respondents.
- It also makes the sampled publication population, not only the respondent set, the intended inference target.

## Caveats

- Weights only adjust for observed differences.
- Large or variable weights can increase uncertainty.
- Response-bias checks may miss unobserved differences in funding source or project novelty.

## Links

- [survey response-rate heterogeneity](survey_response_rate_heterogeneity.md)
- [citation-stratified publication survey frame](../methods/citation_stratified_publication_survey_frame.md)
- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [diversity aggregation weight sensitivity](diversity_aggregation_weight_sensitivity.md)
- [weighted science-map matrix fusion](../methods/weighted_science_map_matrix_fusion.md)
- [Japanese contact-author project reconstruction](../methods/japanese_contact_author_project_reconstruction.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `response_weighted_publication_survey_adjustment`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: publication survey response weighting; respondent nonrespondent weighting; survey response-bias adjustment; weighted publication-origin survey
