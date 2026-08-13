# Distance-adjusted expert rank correction

## Summary

Proposal rankings can be corrected for evaluator severity and reviewer-proposal distance before expert scores are used for allocation.

## Canonical Form

- Unit of analysis: proposal score, evaluator fixed effect, distance coefficient, expert ranking, or allocation rank.
- Typical representation: review-score adjustment and reranking model using evaluator and distance corrections.
- Mechanism, measurement, or validation target: bias-aware use of expert review in resource allocation.
- Empirical signature: distance-adjusted expert rankings differ from raw mean-score or closest-expert-only rankings.

## Uses in Science of Science

- Refines peer-review correction methods by linking it to [proposal evaluator fixed effect identification](proposal_evaluator_fixed_effect_identification.md) and [expert signal denoising divergence test](../validations/expert_signal_denoising_divergence_test.md).
- Useful as a reusable check when [expert review aggregation limit](../validations/expert_review_aggregation_limit.md) is used in science-of-science inference.
- Creates cross-links to [reviewer distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md) so the motif is not interpreted in isolation.

## Operationalization

- Estimate evaluator fixed effects and reviewer-proposal distance effects.
- Adjust expert scores for severity and distance before reranking proposals.
- Compare adjusted ranks with mean-score allocation and closest-expert-only allocation.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) proposes algorithmic correction for individual fixed effects and distance, or informal senior-evaluator correction when data are unavailable.
- The method translates the paper's diagnosis into an allocation correction.

## Caveats

- The correction is data-hungry and may preserve expert conservatism toward novel work.
- Corrected rankings should be validated against later outcomes when possible.

## Links

- [Proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md)
- [Expert-signal denoising divergence test](../validations/expert_signal_denoising_divergence_test.md)
- [Expert review aggregation limit](../validations/expert_review_aggregation_limit.md)
- [Reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [Novelty-aware review calibration](novelty_aware_review_calibration.md)
- [Mean review-score resource-allocation rule](mean_review_score_resource_allocation_rule.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `distance_adjusted_expert_rank_correction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: adjusted expert ranking; reviewer-severity correction; distance-corrected review allocation
