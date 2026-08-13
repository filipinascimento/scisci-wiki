# Post-training covariate attenuation check

## Summary

Post-training covariate attenuation check is the validation motif that training-support effects should be compared before and after later career covariates to see whether training operates through downstream channels.

## Canonical Form

- Unit of analysis: applicant, training support, institution, NIH experience, productivity measure, or nested covariate block.
- Typical representation: pre-training model, post-training model, coefficient attenuation, mediation channel, or overcontrol warning.
- Validation target: identify whether training-support associations are direct, mediated, or overcontrolled by later variables.
- Empirical signature: training indicators predict awards in reduced models but shrink after institution, experience, and productivity controls enter.

## Uses in Science of Science

- Adds temporal covariate structure to [NIH training support indicators](../measures/nih_training_support_indicators.md).
- Helps interpret [training-support disparity persistence](training_support_disparity_persistence.md).
- Connects funding inequality to [scientific resource cumulative advantage](../mechanisms/scientific_resource_cumulative_advantage.md).

## Operationalization

- Order covariate blocks by career timing: training, institution, experience, productivity, and review score.
- Report coefficient changes and discuss possible mediation.
- Avoid presenting post-training controls as purely exogenous controls.
- Use longitudinal designs where training precedes measured downstream resources.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) reports that NIH F, T, and K training support predicts award probability before the full covariate set but attenuates in the fully adjusted model.
- The pattern suggests training support can operate through later career resources and credentials.

## Caveats

- Post-treatment controls can induce collider bias or remove part of the disparity mechanism.
- Training support itself is selected.
- Attenuation does not identify which downstream pathway is causal.

## Links

- [NIH training support indicators](../measures/nih_training_support_indicators.md)
- [training-support disparity persistence](training_support_disparity_persistence.md)
- [scientific resource cumulative advantage](../mechanisms/scientific_resource_cumulative_advantage.md)
- [sequential covariate gap decomposition](../methods/sequential_covariate_gap_decomposition.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `post_training_covariate_attenuation_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: training coefficient attenuation check; post-training overcontrol caveat; grant-training mediation audit
