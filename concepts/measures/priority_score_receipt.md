# Priority score receipt

## Summary

Priority score receipt measures whether an NIH grant application receives a scored review outcome rather than being triaged or otherwise left without a priority score.

## Canonical Form

- Unit of analysis: grant application, study-section review round, triage decision, scored flag, or applicant group.
- Typical representation: binary indicator for receiving a priority score, sometimes paired with the score value when observed.
- Measurement target: access to full review discussion and scored evaluation before final funding decisions.
- Empirical signature: determinants of being scored differ from determinants of score value or final award, and may vary across applicant groups.

## Uses in Science of Science

- Separates an early review-stage outcome from final [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).
- Adds a triage-sensitive measure to the [NIH study-section review process](../methods/nih_study_section_review_process.md).
- Complements [NIH peer-review percentile score](nih_peer_review_percentile_score.md), which measures score rank conditional on a scored outcome.
- Provides a concrete [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) signal before institute funding decisions.
- Supports [score-conditioned funding parity](../validations/score_conditioned_funding_parity.md) checks by keeping the score-receipt stage separate from post-score award decisions.

## Operationalization

- Code whether each application receives a priority score or comparable full-review score in the administrative data.
- Model score receipt separately from score percentile and final award.
- Preserve study section, institute, application type, and year controls, because triage and scoring rules can vary across review contexts.
- Test whether covariates such as prior awards, review service, citations, or institutional rank have group-specific associations with score receipt.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) treats priority score receipt as a distinct review-stage outcome in the NIH R01 process.
- The paper reports that variables associated with higher award probability in the full sample are also associated with receiving a priority score in the full sample.
- In the verified text, the marginal effects for Black applications differ: NIH review committee experience and citation count are significantly correlated with priority score receipt for Black applicants.
- The discussion identifies the probability of receiving a priority score as one of the largest Black-white differences, suggesting that score receipt should be analyzed separately from final award status.

## Caveats

- Priority score receipt is affected by NIH triage rules and scoring reforms, so period documentation matters.
- Not receiving a score can reflect preliminary reviewer assessments, topic fit, administrative rules, or reviewer behavior.
- Score receipt is not equivalent to funding; institutes can fund or not fund scored applications for budgetary and programmatic reasons.
- Analyses should avoid conditioning only on scored applications when the triage stage is itself part of the mechanism.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [NIH study-section review process](../methods/nih_study_section_review_process.md)
- [NIH peer-review percentile score](nih_peer_review_percentile_score.md)
- [prior NIH experience indicators](prior_nih_experience_indicators.md)
- [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md)
- [score-conditioned funding parity](../validations/score_conditioned_funding_parity.md)
- [applicant credential-return heterogeneity](../validations/applicant_credential_return_heterogeneity.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `priority_score_receipt`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: scored application flag; NIH priority score receipt; review triage outcome; discussed application indicator
