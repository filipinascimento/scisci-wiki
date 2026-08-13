# Reviewer-proposal intellectual distance

## Summary

Reviewer-proposal intellectual distance measures how far an evaluator's prior expertise is from the knowledge embodied in a proposal, usually to study how expertise fit changes peer-review scores.

## Canonical Form

- Unit of analysis: evaluator-proposal pair, proposal, evaluator, review score, or review panel.
- Typical representation: distance or similarity between evaluator and proposal keyword vectors, often normalized as a percentile.
- Measurement target: overlap and relatedness between evaluator knowledge and proposal content.
- Empirical signature: review scores vary systematically with evaluator-proposal distance after proposal and evaluator controls.

## Uses in Science of Science

- Gives a reusable distance variable for [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md).
- Separates evaluator expertise fit from proposal novelty, which is captured by [proposal MeSH novelty percentile](proposal_mesh_novelty_percentile.md).
- Uses [MeSH knowledge-frontier space](../representations/mesh_knowledge_frontier_space.md) as one controlled-vocabulary representation of evaluator and proposal positions.
- Links reviewer assignment to the [knowledge-frontier envelope](../representations/knowledge_frontier_envelope.md): even experts in the same broad domain can be distant from a proposal because specialization fragments frontier knowledge.
- Supports randomized designs such as [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md) and [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md).
- Helps identify mechanisms such as [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md), [expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md), and consequences such as [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md) and [expert review aggregation limit](../validations/expert_review_aggregation_limit.md).

- A residual Boudreau pass adds [outside-domain reviewer indicator](outside_domain_reviewer_indicator.md), [coauthor-bridge domain proximity check](../validations/coauthor_bridge_domain_proximity_check.md), [embedded grant-contest field experiment](../methods/embedded_grant_contest_field_experiment.md), [mean review-score resource-allocation rule](../methods/mean_review_score_resource_allocation_rule.md), [moderate novelty review premium](../mechanisms/moderate_novelty_review_premium.md), [distance-novelty additivity check](../validations/distance_novelty_additivity_check.md), [linear distance-response diagnostic](../validations/linear_distance_response_diagnostic.md), [conditional review-score dispersion test](../validations/conditional_review_score_dispersion_test.md), [expert-signal denoising divergence test](../validations/expert_signal_denoising_divergence_test.md), [distance-adjusted expert rank correction](../methods/distance_adjusted_expert_rank_correction.md), [marketplace-of-ideas selection fallacy](../mechanisms/marketplace_of_ideas_selection_fallacy.md), and [novelty-underinvestment selection pathway](../consequences/novelty_underinvestment_selection_pathway.md).
## Operationalization

- Represent each evaluator with prior-publication keywords, topics, fields, abstracts, cited references, or embeddings.
- Represent each proposal with the same vocabulary or embedding space.
- Compute evaluator-proposal relatedness with cosine similarity, overlap, Euclidean distance, topic distance, or semantic distance.
- Normalize within the relevant proposal pool, field, disease area, or review round so distances are comparable.
- Include evaluator and proposal fixed effects when assignment variation permits, because raw distance is confounded by proposal quality and evaluator severity.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) uses evaluator and proposal MeSH keyword vectors and defines `EVALUATOR_DISTANCE` as the cosine angle between those vectors expressed as a percentile.
- The study generated 2,130 evaluator-proposal pairs by randomly assigning 142 evaluators to 15 proposals each from 150 research proposals.
- Boudreau et al. report that evaluator-proposal distance explains systematic score variation even after removing proposal and evaluator fixed effects.
- Their design separates distance from proposal novelty by also measuring [proposal MeSH novelty percentile](proposal_mesh_novelty_percentile.md).
- The same full text contrasts distance effects against a [noisy-signal peer-review null](../validations/noisy_signal_peer_review_null.md) and a [private-interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md) explanation.
- Boudreau et al. also motivate the measure through specialization: as scientific knowledge grows, no individual scientist can fully understand the entire knowledge commons, so evaluators must often look across frontier regions outside their precise expertise.

## Caveats

- Keyword distance depends on vocabulary coverage and granularity; MeSH terms, topics, references, and embeddings capture different forms of expertise.
- A small distance can mean close expertise, local competition, or stronger ability to detect flaws.
- Distance measures should not be interpreted as proposal quality measures.

## Links

- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md)
- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [proposal MeSH novelty percentile](proposal_mesh_novelty_percentile.md)
- [MeSH knowledge-frontier space](../representations/mesh_knowledge_frontier_space.md)
- [knowledge-frontier envelope](../representations/knowledge_frontier_envelope.md)
- [paradigm legibility template](../representations/paradigm_legibility_template.md)
- [within-domain expertise heterogeneity](../mechanisms/within_domain_expertise_heterogeneity.md)
- [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md)
- [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [expert review aggregation limit](../validations/expert_review_aggregation_limit.md)
- [random-coefficient evaluator consistency](../validations/random_coefficient_evaluator_consistency.md)
- [NIH peer-review percentile score](nih_peer_review_percentile_score.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [topic models](../methods/topic_models.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)

- [outside-domain reviewer indicator](outside_domain_reviewer_indicator.md)
- [conditional review-score dispersion test](../validations/conditional_review_score_dispersion_test.md)
- [novelty-underinvestment selection pathway](../consequences/novelty_underinvestment_selection_pathway.md)
## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `reviewer_proposal_intellectual_distance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: evaluator distance; reviewer expertise distance; evaluator-proposal distance; intellectual distance in peer review
