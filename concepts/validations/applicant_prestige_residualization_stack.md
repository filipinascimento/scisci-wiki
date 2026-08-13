# Applicant prestige-residualization stack

## Summary

Applicant prestige-residualization stack tests whether peer-review scores still predict future research outcomes after controlling for observable applicant prestige, prior output, grant history, institution, and demographics.

## Canonical Form

- Unit of analysis: grant application, funded grant, principal investigator, review score, applicant history, or output window.
- Typical representation: nested regression models that add field, cohort, publication-history, grant-history, experience, institution, gender, and ethnicity controls.
- Validation target: distinguish expert information about proposed work from score variation that could be explained by applicant reputation or resources.
- Empirical signature: review-score coefficients remain stable after adding increasingly rich applicant and institutional covariates.

## Uses in Science of Science

- Strengthens [grant peer-review value-added](grant_peer_review_value_added.md) by auditing whether score predictive validity is only a prestige proxy.
- Extends the [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md) from publication records to a broader confounding-control stack.
- Connects [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) to [responsible metrics](../measures/responsible_metrics.md), because predictive validity should be separated from fairness and status reproduction.
- Helps interpret [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md) models alongside [NIH R01 award disparities](nih_r01_award_disparities.md).

## Operationalization

- Start with review-score outcome regressions within field, fiscal-year, study-section, and institute strata.
- Add lagged publication counts, lagged citation counts, prior top-cited papers, and authorship-position variants.
- Add degree type, years since terminal degree, prior NIH R01 and non-R01 funding, institution rank, gender, and ethnicity proxies where ethically justified.
- Compare coefficient stability and residual score-outcome gradients across nested specifications.
- Add rare-name applicant checks and low-track-record subgroup estimates when publication-history controls or reputation proxies are central to the argument.
- Report the controls as a validity audit, not as proof that all status or network confounding has been removed.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) adds publication-history controls including past publications, citations, top 0.1%, 1%, and 5% papers, plus first- or last-author versions.
- The same paper adds degree and experience controls, prior NIH funding indicators, institutional quality, gender, and ethnicity controls.
- Li and Agha report that score-outcome associations remain stable across Models 3 through 6, which they interpret as evidence that prestige and political connections are not the primary driver of peer review's value-added.
- Their supplementary robustness checks also evaluate rare-name applicant matches and lower-track-record applicant groups, extending the residualization stack beyond simple covariate addition.
- The study-section and institute controls underneath this stack are split into [study-section-year fixed-effect identification](../methods/study_section_year_fixed_effect_identification.md).
- The full text still cautions that these variables cannot capture every source of omitted-variable bias.

## Caveats

- Residualization can adjust away consequences of earlier inequality while still leaving unmeasured networks, topic fashion, proposal-writing support, and reviewer familiarity.
- Demographic and prestige controls require ethical framing and careful missingness audits.
- Stability across nested controls supports predictive validity but does not prove causal reviewer insight.

## Links

- [grant peer-review value-added](grant_peer_review_value_added.md)
- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [study-section-year fixed-effect identification](../methods/study_section_year_fixed_effect_identification.md)
- [residual review-score response curve](residual_review_score_response_curve.md)
- [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md)
- [rare-name applicant match robustness](rare_name_applicant_match_robustness.md)
- [low-track-record applicant subgroup validation](low_track_record_applicant_subgroup_validation.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `applicant_prestige_residualization_stack`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: prestige confounding audit; applicant-history residualization; peer-review covariate stack; review-score prestige controls
