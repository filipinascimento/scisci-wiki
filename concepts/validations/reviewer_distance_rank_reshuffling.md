# Reviewer-distance rank reshuffling

## Summary

Reviewer-distance rank reshuffling measures how much proposal rankings would change if review scores came from closer experts, more distant reviewers, or calibrated reviewer-distance adjustments.

## Canonical Form

- Unit of analysis: proposal, reviewer-proposal score, ranking, funding cutoff, or simulated review policy.
- Typical representation: rank-order change, mean absolute rank shift, top-k membership change, or funding-decision change.
- Validation target: whether reviewer-assignment effects are large enough to alter resource allocation.
- Empirical signature: alternative reviewer-distance policies reorder proposals by practically meaningful amounts.

## Uses in Science of Science

- Converts [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) from a score correlate into an allocation consequence.
- Validates the policy relevance of [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md).
- Supports experimental review designs such as [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md).
- Provides a diagnostic for [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) when reviewer assignment is not neutral.
- Connects reviewer-distance scores to [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md) and possible [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md).
- Connects to [expert review aggregation limit](expert_review_aggregation_limit.md) when alternative ranking schemes compare closest experts with less-expert group averages.

## Operationalization

- Estimate reviewer-distance effects on proposal scores under fixed proposal and evaluator comparisons.
- Simulate rankings under alternative reviewer pools, such as closest experts, average reviewers, or distance-calibrated scores.
- Compute rank shifts across all proposals and within top-k or funding-threshold subsets.
- Test whether correcting reviewer fixed effects and distance effects makes rankings more stable.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) simulates an alternative ranking scheme using intellectually closest expert evaluators.
- The simulation finds that closest-expert scores would change proposals' rank order by more than 30 positions on average.
- Boudreau et al. report that even among top-25 proposals, the mean absolute rank change under this policy was 23.8 positions.
- The authors propose correcting for individual evaluator fixed effects and variation in distance when review data allow it.

## Caveats

- Rank reshuffling is policy-relevant only if rank positions map to funding decisions or other scarce resources.
- A rank change can reflect improved expert discrimination, evaluator severity, or systematic bias; interpretation depends on the design.
- Simulations from one grant process should not be treated as universal estimates for all peer review.

## Links

- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md)
- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [expert review aggregation limit](expert_review_aggregation_limit.md)
- [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [SciSci quasi-experimental policy evaluation](scisci_quasi_experimental_policy_evaluation.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `reviewer_distance_rank_reshuffling`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: reviewer-assignment rank shift; proposal rank reshuffling; expertise-distance rank change; review allocation sensitivity
