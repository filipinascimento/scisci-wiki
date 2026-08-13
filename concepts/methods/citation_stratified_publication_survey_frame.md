# Citation-stratified publication survey frame

## Summary

Citation-stratified publication survey frame samples papers from a bibliometric database by field, year, and citation rank, then surveys responsible authors about the projects behind those papers.

## Canonical Form

- Unit of analysis: publication, sampled stratum, contact author, response, project, or population weight.
- Typical representation: field-by-citation sampling frame, top-cited oversample, contact-author routing table, response-bias audit, or survey weight.
- Method target: recover project-level facts that are missing from bibliometric records while preserving a known publication population.
- Empirical signature: survey responses can be reweighted back to the publication frame and checked against nonresponse patterns.

## Uses in Science of Science

- Extends [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md) by making the publication sampling frame explicit.
- Links survey evidence to [Web of Science](../datasets/web_of_science.md), [citation percentile indicators](../measures/citation_percentile_indicators.md), and [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md).
- Helps collect otherwise unavailable variables such as project funding shares, autonomy, respondent status, and project-to-paper attribution.

## Operationalization

- Draw focal papers from a bibliometric database within selected fields and years.
- Stratify the sample by field and citation rank, including deliberate oversampling of highly cited papers when rare high-impact outputs are analytically important.
- Identify a responsible contact author using a [corresponding-author survey frame](corresponding_author_survey_frame.md) or equivalent author-role rule.
- Deduplicate so respondents are not asked about the same focal publication multiple times.
- Compare respondents and nonrespondents on observed publication features and compute population weights when the design uses unequal sampling probabilities.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) constructs a survey from Japanese Web of Science papers and asks authors to report project-level funding sources.
- The paper stratifies the survey frame by field and citation rank, oversamples highly cited publications, and then uses weights to recover population-level estimates.
- Wang et al. report response-bias checks comparing respondents and nonrespondents on publication attributes, making the survey frame a reusable method rather than only a data source.
- This method supports the downstream [competitive-funding share threshold](../measures/competitive_funding_share_threshold.md) and [funding model status contingency](../mechanisms/funding_model_status_contingency.md) motifs.

## Caveats

- Citation-stratified surveys inherit database coverage limits and can miss books, local journals, software, datasets, or policy outputs.
- Top-cited oversampling requires transparent weights; unweighted analyses can overrepresent high-impact work.
- Contact-author routing can bias responses toward senior, administrative, or English-speaking authors depending on field norms.

## Links

- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [corresponding-author survey frame](corresponding_author_survey_frame.md)
- [survey response-rate heterogeneity](../validations/survey_response_rate_heterogeneity.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [Web of Science](../datasets/web_of_science.md)
- [competitive-funding share threshold](../measures/competitive_funding_share_threshold.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; SciSciNet: W2794465725; WoS: unknown]

## Metadata

- Concept ID: `citation_stratified_publication_survey_frame`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: citation-stratified author survey; publication-based project survey; top-cited oversampled survey frame; weighted publication survey
