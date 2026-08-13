# Mean review-score resource-allocation rule

## Summary

Individual proposal scores can be converted into rankings and awards by averaging evaluator ratings.

## Canonical Form

- Unit of analysis: proposal, evaluator score, mean score, ranking, prize, or funding eligibility decision.
- Typical representation: mean-score aggregation rule for proposal ranking and allocation.
- Mechanism, measurement, or validation target: translation of peer-review scores into resource allocation.
- Empirical signature: proposal rank and funding eligibility follow the average of assigned evaluator scores.

## Uses in Science of Science

- Refines grant-review allocation methods by linking it to [single item disease impact score](../measures/single_item_disease_impact_score.md) and [expert review aggregation limit](../validations/expert_review_aggregation_limit.md).
- Useful as a reusable check when [reviewer distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md) is used in science-of-science inference.
- Creates cross-links to [embedded grant contest field experiment](embedded_grant_contest_field_experiment.md) so the motif is not interpreted in isolation.

## Operationalization

- Calculate each proposal's mean evaluator score.
- Rank proposals by mean score and assign prizes or funding eligibility from that rank.
- Compare mean-score allocation against closest-expert or distance-adjusted rankings.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) states that proposals were ordered by average score, average score was the award basis, and top first-phase proposals received prizes and second-stage advantages.
- The rule shows how reviewer-distance and novelty effects can enter resource allocation.

## Caveats

- Mean aggregation can transmit systematic reviewer-distance and novelty biases into awards.
- Averaging can hide disagreement or heterogeneity in proposal interpretation.

## Links

- [Single-item disease-impact score](../measures/single_item_disease_impact_score.md)
- [Expert review aggregation limit](../validations/expert_review_aggregation_limit.md)
- [Reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [Embedded grant-contest field experiment](embedded_grant_contest_field_experiment.md)
- [Two-phase hypothesis seed-grant design](two_phase_hypothesis_seed_grant_design.md)
- [Distance-adjusted expert rank correction](distance_adjusted_expert_rank_correction.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `mean_review_score_resource_allocation_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: average-score award rule; mean proposal ranking; review-score allocation rule
