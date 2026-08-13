# Sequential covariate gap decomposition

## Summary

Sequential covariate gap decomposition estimates an outcome disparity under progressively richer control sets to show which observable factors reduce, preserve, or fail to explain the gap.

## Canonical Form

- Unit of analysis: applicant, paper, author, institution, grant application, model specification, or demographic group.
- Typical representation: nested regression table, marginal-effect sequence, specification ladder, or adjusted-gap curve.
- Method target: distinguish raw outcome gaps from gaps after adding educational, institutional, experience, productivity, and review controls.
- Empirical signature: the focal group coefficient shrinks, disappears, persists, or changes sign as covariate blocks are added.

## Uses in Science of Science

- Provides the model-specification scaffold for [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).
- Helps audit whether [applicant bibliometric control vectors](applicant_bibliometric_control_vector.md), institutional controls, or prior-system-experience variables explain observed disparities.
- Supports responsible interpretation by separating descriptive adjustment from causal claims.
- Generalizes to funding, hiring, citation, collaboration, and career-outcome inequality studies.

## Operationalization

- Define a raw model with the outcome and focal group variables.
- Add covariate blocks in a theoretically motivated order, such as demographics, education, training, institution, prior awards, review experience, and bibliometrics.
- Report marginal effects, confidence intervals, and sample changes at every step.
- State whether covariates are confounders, mediators, proxies for prior inequality, or descriptive controls.
- Interpret persistent gaps as unexplained by the observed covariate set, not as proof of a single mechanism.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) estimates R01 award probability using probit models and reports marginal effects rather than only raw coefficients.
- The analysis progresses through five nested models that add controls most likely to explain race or ethnicity differences.
- Model blocks include demographics, education and NIH training, employer characteristics, prior NIH grants, NIH review experience, institute, publication records, and citation measures.
- The paper reports that Hispanic award-probability differentials are explained by later covariate blocks, while observable characteristics do not fully explain Black or Asian differentials.
- In the fully adjusted model, Black applications remain 10.4 percentage points less likely and Asian applications 4.2 percentage points less likely to receive R01 funding than white applications.

## Caveats

- Covariate adjustment can hide mechanisms if controls are downstream of earlier inequality.
- Sequential models are descriptive unless supported by a causal identification strategy.
- Changing samples across models can make coefficient movement hard to interpret.
- Covariate order should be justified before seeing whether a gap shrinks.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [applicant bibliometric control vector](applicant_bibliometric_control_vector.md)
- [administrative demographic record linkage](administrative_demographic_record_linkage.md)
- [prior NIH experience indicators](../measures/prior_nih_experience_indicators.md)
- [NIH training support indicators](../measures/nih_training_support_indicators.md)
- [institutional NIH funding rank](../measures/institutional_nih_funding_rank.md)
- [applicant credential-return heterogeneity](../validations/applicant_credential_return_heterogeneity.md)
- [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `sequential_covariate_gap_decomposition`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: nested disparity models; covariate-block gap decomposition; adjusted-gap ladder; sequential marginal-effect decomposition
