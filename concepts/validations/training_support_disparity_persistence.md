# Training-support disparity persistence

## Summary

Training-support disparity persistence is the validation finding that prior training support can improve later funding outcomes on average while failing to eliminate demographic gaps among similarly trained applicants.

## Canonical Form

- Unit of analysis: applicant, training-award recipient, grant application, demographic group, award outcome, or training-by-group comparison.
- Typical representation: trained versus untrained contrast, within-training group disparity, training-by-group interaction, or post-training award-probability gap.
- Validation target: test whether pipeline interventions translate into equal downstream returns.
- Empirical signature: training indicators predict higher award probability, but treated applicants from different groups still have unequal outcomes.

## Uses in Science of Science

- Adds a validation layer beneath [NIH training support indicators](../measures/nih_training_support_indicators.md).
- Connects [scientific-resource cumulative advantage](../mechanisms/scientific_resource_cumulative_advantage.md) to equity analysis by asking whether early resources compound equally.
- Deepens [NIH R01 award disparities](nih_r01_award_disparities.md) and [applicant credential-return heterogeneity](applicant_credential_return_heterogeneity.md) beyond mean covariate adjustment.
- Supports policy experiments that compare training access, mentoring quality, resubmission support, and review-stage outcomes.

## Operationalization

- Identify prior training support before the focal funding application.
- Estimate the association between training and later award or score outcomes in the pooled sample.
- Compare award probabilities among trained applicants across demographic groups.
- Add group-by-training interactions or stratified models to test whether training returns are equal.
- Separate training access disparities from downstream return disparities.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) reports that NIH fellowship, traineeship, and career-development support were each associated with higher R01 award probability before the full control set was added.
- The paper then examines U.S. citizen and permanent-resident applicants with previous NIH F or T training support.
- In that trained subset, applications from Black investigators were 13.5 percentage points less likely than applications from white trained investigators to receive funding.
- Ginther et al. also report that among all applicants who received F or T training, Black, Asian, and Hispanic applicants were less likely than white trained applicants to ever receive an R01 award.
- The authors argue that closer investigation of training by race and ethnicity could identify policy levers for diversifying the scientific workforce.

## Caveats

- Training support is itself selected and can reflect earlier inequalities in mentoring, institutions, and topic exposure.
- A persistent post-training gap does not by itself identify whether the mechanism is review bias, post-training opportunity, institutional support, topic sorting, or resubmission behavior.
- F, T, and K awards target different career stages and should be separated when data allow.
- Restricting to trained applicants can condition on a collider if training access is affected by unobserved applicant and institutional factors.

## Links

- [NIH training support indicators](../measures/nih_training_support_indicators.md)
- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [applicant credential-return heterogeneity](applicant_credential_return_heterogeneity.md)
- [PhD-citizenship stratification](../measures/phd_citizenship_stratification.md)
- [scientific-resource cumulative advantage](../mechanisms/scientific_resource_cumulative_advantage.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [R01 application resubmission sequences](../methods/r01_application_resubmission_sequences.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `training_support_disparity_persistence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: post-training funding gap; unequal returns to NIH training; training support gap persistence; trained-applicant award disparity
