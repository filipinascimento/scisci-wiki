# Study-section-year fixed-effect identification

## Summary

Study-section-year fixed-effect identification compares grant applications reviewed in the same study section and fiscal year so review-score gradients are not driven by broad field or cohort differences.

## Canonical Form

- Unit of analysis: grant application, funded grant, study section, fiscal year, NIH institute, review score, or outcome.
- Typical representation: study-section-by-year fixed effects, institute fixed effects, within-cell score-outcome coefficient, or residualized outcome model.
- Method target: isolate peer-review score information from differences in field citation density, review cohort timing, and institute portfolios.
- Empirical signature: review scores remain predictive of later outputs after comparisons are restricted to applications evaluated in the same study-section-year environment.

## Uses in Science of Science

- Provides the field/cohort control layer for [grant peer-review value-added](../validations/grant_peer_review_value_added.md).
- Complements [applicant prestige-residualization stack](../validations/applicant_prestige_residualization_stack.md), which controls applicant history and resources.
- Supplies the first-stage residualization frame used by [residual review-score response curve](../validations/residual_review_score_response_curve.md).
- Helps distinguish expert-review signal from disciplinary citation rates, funding-institute priorities, and changing publication windows.

## Operationalization

- Assign each grant to its NIH study section, fiscal year, and institute.
- Model future publications, citations, hit publications, or patent outcomes as a function of percentile score.
- Include study-section-by-fiscal-year fixed effects and institute fixed effects before adding applicant controls.
- Interpret coefficients as within-review-environment gradients, not as cross-field comparisons.
- Report whether the sample includes only funded grants, because funded-only designs answer a narrower question.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) adds detailed fixed effects for study-section-by-year cells and NIH institutes when estimating whether NIH percentile scores predict later publications and citations.
- The paper states that these fixed effects make estimates compare grants evaluated in the same fiscal year and study section, while institute fixed effects capture broad differences by area of medical application.
- Li and Agha report that controlling for cohort and field effects does not attenuate their main finding: a one-standard-deviation worse score predicts fewer publications and citations.
- The same design becomes the residualization base for later applicant-history controls and nonparametric residual score curves.

## Caveats

- Fixed effects do not remove all unobserved proposal, applicant, or reviewer differences within a study-section-year cell.
- Sparse cells can limit precision or make estimates depend on larger review units.
- Study sections and institutes are administrative categories, not perfect scientific fields.
- This method estimates predictive validity among observed funded grants unless combined with data on unfunded applications.

## Links

- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [applicant prestige-residualization stack](../validations/applicant_prestige_residualization_stack.md)
- [residual review-score response curve](../validations/residual_review_score_response_curve.md)
- [funded-only peer-review validation](../validations/funded_only_peer_review_validation.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [NIH study-section review process](nih_study_section_review_process.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `study_section_year_fixed_effect_identification`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: study-section-year fixed effects; subject-year peer-review controls; within-study-section grant comparison; field-cohort grant-review identification
