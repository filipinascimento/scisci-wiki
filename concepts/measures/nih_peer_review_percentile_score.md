# NIH peer-review percentile score

## Summary

NIH peer-review percentile score is a normalized proposal-review rank that places a grant application relative to other applications evaluated by the same study section in the same fiscal year.

## Canonical Form

- Unit of analysis: grant application, study-section review round, percentile score, applicant, or funding institute.
- Typical representation: numeric percentile from 0 to 100, where lower values indicate more favorable review.
- Measurement target: expert-panel evaluation after within-study-section normalization.
- Empirical signature: percentile scores order proposals for funding decisions and can be linked to later publication, citation, and patent outcomes.

## Uses in Science of Science

- Gives a reusable score variable for studies of [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md).
- Supports [grant peer-review value-added](../validations/grant_peer_review_value_added.md) by measuring whether expert rankings predict later research output after applicant controls.
- Provides the running score used in [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md), although threshold designs estimate funding effects rather than score predictive validity.
- Needs interpretation under [responsible metrics](responsible_metrics.md), because a review percentile is an administrative evaluation signal, not a direct measure of social value.

## Operationalization

- Collect final study-section priority scores or post-review normalized percentile scores from grant administrative data.
- Distinguish the percentile value from [priority score receipt](priority_score_receipt.md), because unscored or triaged applications do not enter the same score distribution.
- Interpret lower percentile values as stronger review outcomes.
- Compare scores within fiscal-year, study-section, and institute strata to reduce field and cohort confounding.
- Link scores to applicant history, grant outcomes, and funding decisions without treating the score as independent of reviewer norms.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) defines the NIH percentile score as the application's rank among other applications reviewed by a study section in a fiscal year.
- Their full text reports that applications are generally funded in percentile-score order until institute budgets are exhausted, with only rare out-of-order funding.
- In the funded R01 sample, a one-standard-deviation worse score is associated with fewer later publications, citations, high-impact publications, and follow-on patents.
- The paper uses study-section-by-year fixed effects, institute controls, and applicant-history controls, making the percentile score a central variable for estimating peer review's value-added.
- Li and Agha also use residual score-response curves and out-of-order funding exceptions to show where the score-outcome relationship is steepest or departs from normal ordering.

## Caveats

- Percentile scores are partly institutional artifacts: scale changes, triage rules, review criteria, and study-section composition can affect comparability.
- A score among funded grants cannot by itself identify the causal effect of receiving funding.
- Review scores may contain applicant reputation, proposal-writing skill, and committee dynamics as well as proposal quality.
- Conditioning only on scored applications can hide disparities or mechanisms that occur at the score-receipt stage.

## Links

- [NIH study-section review process](../methods/nih_study_section_review_process.md)
- [priority score receipt](priority_score_receipt.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [funded-only peer-review validation](../validations/funded_only_peer_review_validation.md)
- [residual review-score response curve](../validations/residual_review_score_response_curve.md)
- [out-of-order funded grant exception](../validations/out_of_order_funded_grant_exception.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [responsible metrics](responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `nih_peer_review_percentile_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: NIH percentile score; review percentile; normalized study-section score; R01 priority percentile
