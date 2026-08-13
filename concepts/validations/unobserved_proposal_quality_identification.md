# Unobserved proposal-quality identification

## Summary

Unobserved proposal-quality identification is the validation problem that peer-review studies rarely observe the true quality or potential of a proposal, so inference must be designed around assignment, controls, and robustness rather than direct ground truth.

## Canonical Form

- Unit of analysis: proposal, reviewer-proposal pair, review score, funding decision, evaluator, or research outcome.
- Typical representation: proposal fixed effects, evaluator fixed effects, randomized assignment, latent quality, proxy outcomes, or robustness design.
- Validation target: separate reviewer behavior, novelty effects, and expertise-distance effects from unobserved proposal merit.
- Empirical signature: a review-effect claim is credible only when it explains how latent proposal quality is handled.

## Uses in Science of Science

- Generalizes the identification warning behind [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md).
- Supports [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md), where assignment variation helps study evaluator effects without observing true quality.
- Gives [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md) and [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md) a shared validation caveat.
- Connects [grant peer-review value-added](grant_peer_review_value_added.md), [noisy-signal peer-review null](noisy_signal_peer_review_null.md), and [funded-only peer-review validation](funded_only_peer_review_validation.md).
- Frames [rejected-proposal line attrition](../mechanisms/rejected_proposal_line_attrition.md) as ambiguous evidence, since discontinuation can indicate poor proposal quality or a lost opportunity created by review.

## Operationalization

- State whether true proposal quality is unobserved, proxied by later outcomes, or partially controlled with proposal fixed effects.
- Use randomized or as-if-random reviewer assignment when possible.
- Include proposal fixed effects when multiple reviewers score the same proposal and evaluator fixed effects when reviewers score multiple proposals.
- Test whether results survive controls for applicant history, proposal format, novelty, reviewer distance, conflicts, and review-block structure.
- Treat downstream publication, citation, patent, or funding outcomes as noisy proxies rather than direct ground truth.

## Evidence and Validations

- Verified full-text evidence from Boudreau, Guinan, Lakhani, and Riedl (2016) states that true proposal quality and potential are not observed and are difficult to infer unequivocally even after research is executed.
- The paper therefore builds inference around a randomized evaluator-proposal assignment, proposal and evaluator fixed effects, and pairwise distance measures rather than assuming proposal quality is directly visible.
- Boudreau et al. use this design to distinguish intellectual-distance and novelty patterns from a simple noisy-signal interpretation and from private-interest evaluator bias.
- The authors still acknowledge that novelty could be linked to lower expected outcomes in a way their design cannot fully rule out.

## Caveats

- Fixed effects remove proposal-level and evaluator-level averages, but not pair-specific unobservables.
- Later outcomes can reflect funding, execution, team composition, publication venue, and luck, not only original proposal quality.
- Randomized review assignments identify effects within the assignment pool and review system, not necessarily all grant panels or fields.
- Unobserved quality is a design constraint, not an excuse to ignore evaluation validity.

## Links

- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [noisy-signal peer-review null](noisy_signal_peer_review_null.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)
- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [rejected-proposal line attrition](../mechanisms/rejected_proposal_line_attrition.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626]

## Metadata

- Concept ID: `unobserved_proposal_quality_identification`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: latent proposal quality; unobserved review quality; proposal merit identification; true-quality review caveat
