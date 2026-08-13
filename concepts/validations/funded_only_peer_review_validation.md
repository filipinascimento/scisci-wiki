# Funded-only peer-review validation

## Summary

Funded-only peer-review validation tests whether review scores predict later outcomes among awarded grants, separating score predictive validity from the causal effect of receiving funding while leaving rejected-proposal quality only partially observed.

## Canonical Form

- Unit of analysis: funded grant, review score, applicant, award cohort, output window, or outcome distribution.
- Typical representation: score-outcome regression within awarded applications, with field, cohort, applicant-history, and institution controls.
- Validation target: whether expert-review scores contain information about funded projects' future output beyond observable applicant characteristics.
- Empirical signature: better scores predict stronger outcomes among grants with the same funded status.

## Uses in Science of Science

- Provides the design boundary for [grant peer-review value-added](grant_peer_review_value_added.md).
- Prevents conflating review-score validity with the treatment effect studied by [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md).
- Highlights what [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) studies can and cannot infer when rejected proposals are missing.
- Supports [responsible metrics](../measures/responsible_metrics.md) by documenting the counterfactual population excluded from an evaluation.
- Links to [rejected-proposal line attrition](../mechanisms/rejected_proposal_line_attrition.md), the missing downstream process that funded-only designs cannot directly measure.

## Operationalization

- Restrict the analytical sample to grants that were funded, so all observed proposals received the resource treatment.
- Regress later outcomes on review scores with study-section-year, institute, applicant-history, grant-history, career-stage, institution, and demographic controls.
- Interpret remaining score-outcome association as predictive information in the review score, not as the causal effect of funding.
- State explicitly that rejected high-potential applications cannot be directly counted without data on unfunded proposals and their later work.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) focuses on funded NIH R01 grants because comparing funded and unfunded proposals would mix peer-review selection with the productivity effect of funding itself.
- The paper argues that, among grants with the same funded status, the remaining score-outcome relationship can be attributed to peer review rather than receipt of funds.
- Li and Agha find a positive relationship between better scores and higher-impact research among funded grants, while explicitly stating that the design cannot directly assess whether NIH systematically rejects high-potential applications.
- The full text also notes rare out-of-order funded applications with poor scores, which may attenuate estimated score-outcome relationships if program officers identify unusual high-potential cases.
- The funded-only design can be inspected with [residual review-score response curve](residual_review_score_response_curve.md) diagnostics and [out-of-order funded grant exception](out_of_order_funded_grant_exception.md) audits.

## Caveats

- The design cannot observe the full counterfactual output distribution of rejected proposals.
- It estimates predictive validity for selected funded grants, not universal reviewer accuracy over all applications.
- Out-of-order funding, appeals, institute priorities, and missing output links can alter the selected sample.

## Links

- [grant peer-review value-added](grant_peer_review_value_added.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [NIH study-section review process](../methods/nih_study_section_review_process.md)
- [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md)
- [residual review-score response curve](residual_review_score_response_curve.md)
- [out-of-order funded grant exception](out_of_order_funded_grant_exception.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [rejected-proposal line attrition](../mechanisms/rejected_proposal_line_attrition.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `funded_only_peer_review_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: funded-only score validation; awarded-grant predictive validity; rejected-proposal counterfactual boundary; grant-review selected-sample validation
