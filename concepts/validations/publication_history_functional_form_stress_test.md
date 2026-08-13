# Publication-history functional-form stress test

## Summary

Publication-history functional-form stress test is the robustness check that replaces compact prior-output controls with richer bins, windows, or nonlinear forms to see whether review-score effects survive alternative applicant-history specifications.

## Canonical Form

- Unit of analysis: proposal, applicant, publication-history control, review score, output outcome, or robustness model.
- Typical representation: alternative model table, binned prior-publication history, citation-window controls, or nonlinear applicant-output terms.
- Validation target: whether a peer-review score effect is an artifact of too-simple controls for applicant track record.
- Empirical signature: review-score coefficients remain similar after flexible publication and citation history controls are added.

## Uses in Science of Science

- Validates [grant peer-review value-added](grant_peer_review_value_added.md) against misspecified applicant-track-record controls.
- Complements [reviewer information-set citation censoring](../methods/reviewer_information_set_citation_censoring.md) by varying the functional form after the time boundary is set.
- Stress-tests [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md) and [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md).
- Helps distinguish proposal-quality signal from accumulated applicant advantage.

## Operationalization

- Estimate a baseline peer-review outcome model with compact prior-output controls.
- Replace those controls with bins for publications, citations, high-impact papers, career age, or recent-output windows.
- Add interactions between track-record controls and field, study section, year, or institute when sample size permits.
- Compare review-score coefficients, confidence intervals, and tail-outcome predictions across specifications.
- Report the direction of any attenuation rather than only statistical significance.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) reports robustness checks using alternative measures of publication history.
- The stress test checks whether the NIH percentile-score association is simply absorbing applicant output history.
- Li and Agha's funded-grant design makes this check important because all observed proposals already passed the award threshold.
- This motif is distinct from rare-name matching or grant-dollar robustness because it targets model specification of applicant history.

## Caveats

- Richer histories can overfit when proposal strata are small.
- Flexible prior-output controls may absorb genuine reviewer information when reviewers are explicitly evaluating the applicant's record.
- Functional-form robustness cannot remove unobserved applicant qualities or unpublished preliminary results.

## Links

- [grant peer-review value-added](grant_peer_review_value_added.md)
- [reviewer information-set citation censoring](../methods/reviewer_information_set_citation_censoring.md)
- [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md)
- [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md)
- [rare-name applicant match robustness](rare_name_applicant_match_robustness.md)
- [funding amount channel robustness](funding_amount_channel_robustness.md)
- [low-track-record applicant subgroup validation](low_track_record_applicant_subgroup_validation.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [residual review-score response curve](residual_review_score_response_curve.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `publication_history_functional_form_stress_test`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: publication-history control stress test; flexible prior-output controls; applicant history functional-form check; review-score robustness to publication bins
