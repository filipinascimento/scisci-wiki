# Expert cue-sampling bias

## Summary

Expert cue-sampling bias is the mechanism in which close experts evaluate the same proposal differently because their richer local knowledge lets them see more subtle flaws, missing details, feasibility problems, or paradigm violations.

## Canonical Form

- Unit of analysis: evaluator-proposal pair, expertise distance, review score, proposal rank, or evaluation explanation.
- Typical representation: review-score gradient over distance, interpreted through differential cue detection.
- Mechanism: experts sample a broader and more detailed set of informational cues than distant reviewers.
- Empirical signature: closer experts give systematically different mean scores rather than only less noisy scores.

## Uses in Science of Science

- Provides the bounded-rationality mechanism behind [closest-expert review penalty](closest_expert_review_penalty.md).
- Contrasts with the [noisy-signal peer-review null](../validations/noisy_signal_peer_review_null.md) and [private-interest evaluator bias](private_interest_evaluator_bias.md).
- Helps explain why [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md) can reflect both better discrimination and stricter local standards.
- Helps interpret [expert review aggregation limit](../validations/expert_review_aggregation_limit.md), because aggregating less-expert scores may not reproduce close-expert cue detection.
- Links peer-review studies to broader cognitive limits in [scientific problem choice](scientific_problem_choice.md) and [novelty penalty](novelty_penalty.md).

## Operationalization

- Measure evaluator-proposal distance using publication keywords, MeSH terms, topics, references, or embeddings.
- Estimate whether close experts shift mean scores after proposal and evaluator fixed effects.
- Compare score gradients with review-text evidence about merits, demerits, feasibility, methods, and paradigm fit.
- Test whether closest experts improve prediction for high-quality proposals or simply lower all nearby proposals.
- Separate cue sampling from private-interest channels using blinding, conflict data, and randomized assignment.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) describes bounded rationality and expert cognition as a mechanism for distance-related evaluation effects.
- The paper argues that experts can observe more detail, complexity, patterns, and meaning because of richer domain-specific knowledge.
- Boudreau et al. interpret lower scores from closer evaluators as consistent with experts sampling more demerits, problems, and limitations than less expert evaluators.
- The authors distinguish this mechanism from the view that distance only adds random error and from agency-based private-interest explanations.

## Caveats

- Seeing more problems may improve evaluation quality even when it lowers scores.
- Expert cue sampling can be mixed with local conservatism, rivalry, and status protection.
- Distant reviewers may miss defects, but they may also be more open to cross-domain combinations.

## Links

- [closest-expert review penalty](closest_expert_review_penalty.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [noisy-signal peer-review null](../validations/noisy_signal_peer_review_null.md)
- [private-interest evaluator bias](private_interest_evaluator_bias.md)
- [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [expert review aggregation limit](../validations/expert_review_aggregation_limit.md)
- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [novelty penalty](novelty_penalty.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `expert_cue_sampling_bias`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: expert demerit sampling; bounded-rationality review bias; close-expert cue detection; expert cognition review effect
