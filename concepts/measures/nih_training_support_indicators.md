# NIH training support indicators

## Summary

NIH training support indicators measure whether a grant applicant previously received NIH fellowship, traineeship, or career-development support before submitting a major research-grant application.

## Canonical Form

- Unit of analysis: applicant, R01 application, training award, fellowship, traineeship, or career-development award.
- Typical representation: binary or count indicators for prior F, T, and K support, often measured before the focal application.
- Measurement target: prior access to NIH-supported biomedical training and mentoring pipelines.
- Empirical signature: prior training support predicts later review or award outcomes but may not operate equally across demographic groups.

## Uses in Science of Science

- Gives an applicant-history covariate for [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).
- Connects demographic inequality to [scientific-resource cumulative advantage](../mechanisms/scientific_resource_cumulative_advantage.md), because early training awards can create later funding advantages.
- Complements [prior NIH experience indicators](prior_nih_experience_indicators.md), which measure later grant and review-service experience rather than training-pipeline exposure.
- Requires [training-support disparity persistence](../validations/training_support_disparity_persistence.md) checks before treating training as an equalizing intervention.
- Helps separate applicant preparation from the later [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) stage.

## Operationalization

- Link applicant records to prior NIH F-series fellowships, T-series training appointments, and K-series career-development awards.
- Code indicators before the focal R01 submission date to avoid post-treatment leakage.
- Separate predoctoral, postdoctoral, and early-faculty support where data permit.
- Estimate both main effects and group-specific effects, because training support may not translate into equal review or award gains across applicants.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) uses NIH training history as part of the applicant-control vector in a study of Type 1 R01 award outcomes.
- The paper reports prior NIH predoctoral or postdoctoral fellowships, traineeships, and career-development awards by applicant race and ethnicity.
- In the verified text, fellowship, traineeship, and career-development support are each associated with higher R01 award probability before the full control set is added.
- Ginther et al. also report that prior training support does not eliminate the Black-white funding gap; among applicants with prior NIH training support, Black applicants remain substantially less likely than white applicants to receive R01 funding.
- The same full text shows that training eligibility and interpretation should be read with [PhD-citizenship stratification](phd_citizenship_stratification.md), because NIH pre- and postdoctoral training programs depend on citizenship or permanent-resident status.

## Caveats

- Training support is partly a prior selection outcome, not only a measure of applicant skill.
- Missing or incomplete linkage to older training awards can bias career-history measures.
- Group-specific returns to training can reflect later review, mentoring, topic choice, institutional support, or unobserved resources.
- F, T, and K mechanisms differ in eligibility and career stage, so a single combined indicator can hide important heterogeneity.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [training-support disparity persistence](../validations/training_support_disparity_persistence.md)
- [PhD-citizenship stratification](phd_citizenship_stratification.md)
- [prior NIH experience indicators](prior_nih_experience_indicators.md)
- [scientific-resource cumulative advantage](../mechanisms/scientific_resource_cumulative_advantage.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `nih_training_support_indicators`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: NIH F T K support; prior NIH training; fellowship traineeship career award indicators; biomedical training pipeline
