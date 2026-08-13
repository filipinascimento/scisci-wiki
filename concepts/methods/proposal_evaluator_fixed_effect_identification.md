# Proposal-evaluator fixed-effect identification

## Summary

Proposal-evaluator fixed-effect identification estimates reviewer-assignment effects by comparing scores for the same proposal across reviewers and scores by the same reviewer across proposals.

## Canonical Form

- Unit of analysis: reviewer-proposal pair, proposal fixed effect, evaluator fixed effect, review score, or assignment block.
- Typical representation: panel regression with proposal indicators, evaluator indicators, and pair-level covariates such as intellectual distance.
- Method target: separate proposal quality and reviewer severity from pair-specific expertise, novelty, or bias effects.
- Empirical signature: pair-level covariates predict score variation after proposal and evaluator fixed effects are included.

## Uses in Science of Science

- Gives [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) an identification design rather than a raw correlation.
- Addresses [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md) by comparing reviewers of the same proposal and proposals scored by the same reviewer.
- Supports [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md), [expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md), and [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md).
- Generalizes to manuscript review, grant review, hiring committees, and expert-panel ratings when multiple evaluators score overlapping items.

## Operationalization

- Construct a reviewer-proposal pair table with scores and assignment metadata.
- Include proposal fixed effects to compare reviewers of the same proposal.
- Include evaluator fixed effects to compare one evaluator's scores across proposals.
- Add pair-level measures such as reviewer-proposal distance, conflict indicators, prior ties, or field overlap.
- Use randomized or as-if-random assignment where possible; otherwise treat fixed effects as partial adjustment, not causal proof.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) estimates evaluation scores using proposal covariates, evaluator covariates, and pairwise evaluator-proposal distance.
- The paper reports a positive distance-score relationship after adding proposal dummy variables and evaluator dummy variables.
- Boudreau et al. state that intellectual-distance variation accounts for about 1.1 points of variation on a 10-point review scale after removing proposal and evaluator fixed effects.
- In their policy discussion, the authors propose correcting for individual evaluator fixed effects and distance variation when data allow it.

## Caveats

- Fixed effects do not solve omitted variables that vary at the reviewer-proposal pair level.
- The design requires overlap: proposals need multiple reviewers and reviewers need multiple proposals.
- Estimated reviewer severity can be unstable when each reviewer scores only a small number of proposals.

## Links

- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md)
- [randomized reviewer-proposal assignment](randomized_reviewer_proposal_assignment.md)
- [triple-blind proposal review](triple_blind_proposal_review.md)
- [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md)
- [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `proposal_evaluator_fixed_effect_identification`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: proposal reviewer fixed effects; evaluator fixed-effect review model; pair-level review identification; reviewer severity adjustment
