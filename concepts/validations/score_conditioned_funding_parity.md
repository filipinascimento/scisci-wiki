# Score-conditioned funding parity

## Summary

Score-conditioned funding parity checks whether applicants with similarly strong review scores have similar funding probabilities across demographic or institutional groups.

## Canonical Form

- Unit of analysis: scored grant application, review score bin, applicant group, institute, fiscal year, or funding decision.
- Typical representation: award probability conditional on priority score, score-bin parity plot, or score-by-group funding interaction.
- Validation target: separate disparities that occur before scoring from disparities that occur after a scored review outcome.
- Empirical signature: conditional funding rates are similar within strong-score ranges even if raw award rates differ.

## Uses in Science of Science

- Splits post-score funding decisions from [priority score receipt](../measures/priority_score_receipt.md).
- Adds a validation layer to [NIH R01 award disparities](nih_r01_award_disparities.md) by locating whether disparity appears before, within, or after peer-review scoring.
- Complements [grant peer-review value-added](grant_peer_review_value_added.md): predictive score validity and score-conditioned equity are different questions.
- Helps policy audits decide whether to focus on review triage, scoring, institute paylines, resubmission support, or applicant resources.

## Operationalization

- Restrict to applications that received comparable review scores.
- Define score quality bins or model award probability as a function of score and group.
- Include institute, fiscal year, mechanism, budget, and program-priority controls where relevant.
- Test whether score-by-group interactions are meaningful after accounting for paylines and programmatic decisions.
- Interpret parity conditional on score alongside the probability of receiving a score at all.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) states that applications with good priority scores were more likely to be funded regardless of race or ethnicity.
- The abstract reports that proposals with strong priority scores were equally likely to be funded regardless of race.
- The paper nevertheless finds raw and adjusted R01 award gaps, which implies that score-conditioned funding parity does not eliminate the need to examine score receipt, first-attempt success, resubmission, and applicant-resource channels.
- Ginther et al. explicitly separate priority score receipt from final award probability, making this parity check a stage-specific validation rather than a complete fairness audit.

## Caveats

- Conditioning on scores can hide disparities in whether applications are discussed or scored.
- Review scores may themselves reflect bias, topic fit, or differential interpretation of applicant credentials.
- Institute paylines, budgets, and program priorities can vary by year and institute.
- Equal funding conditional on strong score does not prove equal opportunity across the full application process.

## Links

- [priority score receipt](../measures/priority_score_receipt.md)
- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [NIH study-section review process](../methods/nih_study_section_review_process.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)
- [R01 application resubmission sequences](../methods/r01_application_resubmission_sequences.md)
- [applicant credential-return heterogeneity](applicant_credential_return_heterogeneity.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `score_conditioned_funding_parity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: score-conditioned award parity; priority-score funding parity; post-score funding equity; score-bin award parity
