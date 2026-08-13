# Closest-expert review penalty

## Summary

Closest-expert review penalty is the pattern that evaluators nearest to a proposal's knowledge domain may score it lower because they can see more flaws, limitations, and missing details than more distant evaluators.

## Canonical Form

- Unit of analysis: evaluator-proposal pair, review score, proposal rank, or panel decision.
- Typical representation: review-score gradient over evaluator-proposal distance.
- Mechanism: close experts sample more negative information and apply more demanding local standards.
- Empirical signature: closer expert evaluators give lower scores after proposal and evaluator fixed effects, without the pattern reducing to noise or private interest.

## Uses in Science of Science

- Adds a cognitive mechanism to [peer review and gatekeeping](peer_review_gatekeeping.md).
- Uses [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) as its main measurement input.
- Helps interpret [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md).
- Interacts with [right-tail novelty review discount](right_tail_novelty_review_discount.md), because expertise fit and novelty can both affect review scores.
- Is interpreted through [expert cue-sampling bias](expert_cue_sampling_bias.md) and tested against [noisy-signal peer-review null](../validations/noisy_signal_peer_review_null.md) and [private-interest evaluator bias](private_interest_evaluator_bias.md).

## Operationalization

- Build evaluator-proposal distance from publication histories, keywords, topics, references, or embeddings.
- Estimate review scores as a function of distance, ideally under [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md).
- Include proposal fixed effects to compare different reviewers evaluating the same proposal.
- Include evaluator fixed effects to compare how the same reviewer scores proposals at different distances.
- Test whether the relationship is mean-shifting, variance-increasing, or consistent with private-interest channels.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) finds that evaluators gave systematically lower scores to proposals closer to their own expertise.
- The study estimates that intellectual-distance variation accounts for about 1.1 points on a 10-point evaluation scale after removing proposal and evaluator fixed effects.
- The authors interpret the pattern as consistent with boundedly rational expert cognition: closer experts can see more demerits and limitations.
- The pattern is reported as inconsistent with a simple noisy-signal account and with private-interest explanations.
- The identification is formalized in [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md).

## Caveats

- Lower scores from close experts may reflect higher precision, stricter standards, local competition, or true quality signals.
- If every proposal receives different expert panels, expert severity can reshape ranking even when each expert is locally informative.
- The mechanism does not imply that distant reviewers are better; they may be less able to detect flaws.

## Links

- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [expert cue-sampling bias](expert_cue_sampling_bias.md)
- [noisy-signal peer-review null](../validations/noisy_signal_peer_review_null.md)
- [private-interest evaluator bias](private_interest_evaluator_bias.md)
- [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [right-tail novelty review discount](right_tail_novelty_review_discount.md)
- [novelty penalty](novelty_penalty.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [funding incentives and exploration](funding_incentives_and_exploration.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `closest_expert_review_penalty`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: expert proximity penalty; close-reviewer penalty; local expertise penalty; reviewer expertise discount
