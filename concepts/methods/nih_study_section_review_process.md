# NIH study-section review process

## Summary

NIH study-section review process describes the panel workflow that assigns biomedical grant applications to peer reviewers, triages some proposals, discusses others, and produces a final priority or percentile score for funding decisions.

## Canonical Form

- Unit of analysis: grant application, study section, assigned reviewer, panel discussion, priority score, percentile score, or institute funding decision.
- Typical representation: application-reviewer-panel table, score distribution, triage flag, discussion status, and final percentile rank.
- Method target: turn expert judgments into comparable administrative scores for proposal selection.
- Empirical signature: scores are produced after individual review, discussion, and anonymous final scoring, then normalized for use by NIH institutes.

## Uses in Science of Science

- Provides the institutional microprocess behind [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md).
- Produces the [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md) used in grant-review validity studies.
- Separates full-review access from score rank through [priority score receipt](../measures/priority_score_receipt.md).
- Helps distinguish reviewer information, committee deliberation, triage, institute paylines, and out-of-order funding exceptions.
- Supplies a process layer for fairness studies such as [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).

## Operationalization

- Model proposal assignment by topic to study sections and then to one to three initial reviewers.
- Preserve whether applications were triaged, discussed, rescored, and percentile-normalized.
- Link panel outcomes to institute-level funding decisions, including early-investigator exceptions and out-of-order funding.
- When possible, separate scientific merit criteria from budget, programmatic priority, and post-review institute decisions.
- Track exceptions separately with [out-of-order funded grant exception](../validations/out_of_order_funded_grant_exception.md) audits.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) describes NIH applications being assigned by topic to approximately 200 study sections in the main article.
- The supplementary text details five review criteria: significance, approach, innovation, investigator skill, and environment.
- The same full text reports that applications are assigned to one to three reviewers, that roughly 40 to 50 percent may be triaged before full discussion, and that discussed applications receive final anonymous scores after panel deliberation.
- Li and Agha use the final normalized percentile score as the study section's evaluation of an application, then test whether it predicts funded-grant outcomes.

## Caveats

- Confidential reviewer identities, deliberation content, and conflicts of interest are often unavailable to external researchers.
- Study-section review is not identical to final funding, because institute budgets, paylines, appeals, early-investigator policies, and exceptional circumstances can intervene.
- Process descriptions can drift as NIH reforms scoring scales, application length, and review criteria.

## Links

- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [priority score receipt](../measures/priority_score_receipt.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [funded-only peer-review validation](../validations/funded_only_peer_review_validation.md)
- [out-of-order funded grant exception](../validations/out_of_order_funded_grant_exception.md)
- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `nih_study_section_review_process`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: NIH study sections; grant review panels; NIH priority scoring; proposal triage process
