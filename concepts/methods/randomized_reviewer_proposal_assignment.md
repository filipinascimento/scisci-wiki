# Randomized reviewer-proposal assignment

## Summary

Randomized reviewer-proposal assignment uses controlled variation in which reviewers evaluate which proposals to estimate how reviewer expertise, distance, or bias affects scores.

## Canonical Form

- Unit of analysis: reviewer-proposal pair, proposal, evaluator, assignment block, or review score.
- Typical representation: randomized bipartite assignment table linking evaluators to proposals.
- Method target: causal identification of evaluator-side effects while holding proposal content fixed.
- Empirical signature: reviewer assignment is unrelated to proposal quality except through the randomized design.

## Uses in Science of Science

- Provides design leverage for [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md).
- Turns [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) into an estimable treatment-like variable.
- Supports evaluation of [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md) and [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md).
- Complements observational validation designs such as [grant peer-review value-added](../validations/grant_peer_review_value_added.md) and [funded-only peer-review validation](../validations/funded_only_peer_review_validation.md).
- Pairs naturally with [triple-blind proposal review](triple_blind_proposal_review.md) and [proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md).
- Defines the assignment layer of the [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md), where [single-author proposal standardization](single_author_proposal_standardization.md) helped keep applicant and proposal metrics cleaner.
- Helps handle [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md), because the design creates reviewer variation without assuming proposal quality is directly observed.

## Operationalization

- Define a proposal pool and an eligible evaluator pool before review begins.
- Randomly assign proposals to evaluators, often within blocks that maintain load balance and avoid conflicts.
- Use [proposal batch randomization](proposal_batch_randomization.md) when assignment is implemented as randomized proposal blocks rather than as independent pair draws.
- Blind evaluators to authors and to other evaluators when feasible.
- Collect pair-level scores and construct evaluator, proposal, and reviewer-proposal covariates.
- Estimate models with proposal and evaluator fixed effects, using random assignment to interpret remaining distance-score relationships.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) describes a grant-proposal process at a research-intensive U.S. medical school where evaluator-proposal assignment was randomized.
- The design used 142 evaluators, 150 proposals, and 2,130 evaluator-proposal pairs, with each evaluator assigned to 15 proposals.
- The process was triple blinded: evaluators and authors were blinded to one another, and evaluators were blinded to other evaluators.
- The first-stage proposal format was standardized and restricted to single-author submissions to make author and proposal metrics cleaner.
- A residual Boudreau pass separates the block-level assignment procedure as [proposal batch randomization](proposal_batch_randomization.md).

## Caveats

- Randomization must still respect conflicts of interest, reviewer availability, and expertise minimums.
- The design estimates reviewer-assignment effects within the review system that was randomized, not necessarily all funding panels.
- Proposal novelty cannot usually be randomized, so novelty findings still require controls and robustness checks.

## Links

- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md)
- [stratified-distance evaluator recruitment](stratified_distance_evaluator_recruitment.md)
- [proposal batch randomization](proposal_batch_randomization.md)
- [single-author proposal standardization](single_author_proposal_standardization.md)
- [triple-blind proposal review](triple_blind_proposal_review.md)
- [proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md)
- [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md)
- [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [random-coefficient evaluator consistency](../validations/random_coefficient_evaluator_consistency.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [NIH study-section review process](nih_study_section_review_process.md)
- [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `randomized_reviewer_proposal_assignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: randomized proposal assignment; reviewer assignment experiment; randomized grant review; evaluator-proposal randomization
