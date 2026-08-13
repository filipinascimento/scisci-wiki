# Proposal ambiguity-aversion discount

## Summary

Proposal ambiguity-aversion discount is the mechanism by which evaluators assign lower value to highly novel or distant proposals because uncertainty cannot be resolved into known probabilities.

## Canonical Form

- Unit of analysis: proposal, reviewer, evaluation score, novelty measure, reviewer-proposal distance, or funding decision.
- Typical representation: negative review-score adjustment under novelty, uncertainty, ambiguity, or perceived risk.
- Mechanism: evaluators discount proposals when outcomes are fundamentally uncertain, especially when existing mental models do not support confident probability judgments.
- Empirical signature: novelty or distance affects mean scores in a way that cannot be explained by a pure noisy-signal model alone.

## Uses in Science of Science

- Provides a decision-theoretic channel for [right-tail novelty review discount](right_tail_novelty_review_discount.md).
- Complements [noisy-signal peer-review null](../validations/noisy_signal_peer_review_null.md), which predicts variance changes without necessarily changing mean evaluations.
- Connects [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md) to risk and ambiguity perception.
- Helps distinguish ambiguity discounting from [private-interest evaluator bias](private_interest_evaluator_bias.md) and [expert cue-sampling bias](expert_cue_sampling_bias.md).

## Operationalization

- Measure proposal novelty and reviewer-proposal distance before review.
- Test whether novelty or distance lowers mean scores after proposal and evaluator controls.
- Compare mean effects with variance effects to distinguish systematic discounting from noisier evaluation.
- Add reviewer confidence, perceived risk, or ambiguity prompts where survey or experimental review designs permit.

## Evidence and Validations

- Verified full-text evidence from Boudreau, Guinan, Lakhani, and Riedl (2016) lays out uncertainty, risk, and ambiguity aversion as possible mechanisms linking proposal novelty and intellectual distance to evaluation scores.
- The paper argues that novelty creates fundamental uncertainty that cannot be fully resolved without experimentation, making probability assignment difficult ex ante.
- Boudreau et al. report that novelty has a negative relationship with evaluation scores, while greater intellectual distance does not show the same risk-discount pattern.
- They conclude that ambiguity around novelty may play a special role, while also emphasizing bounded rationality and the inability to rule out lower expected outcomes for novelty itself.

## Caveats

- Ambiguity aversion is not directly observed unless reviewer confidence or perceived ambiguity is measured.
- Lower scores for novel proposals can reflect true lower expected outcomes, poor framing, feasibility concerns, or measurement artifacts.
- Ambiguity discounting may coexist with expert cue sampling, private interests, and institutional conservatism.

## Links

- [right-tail novelty review discount](right_tail_novelty_review_discount.md)
- [noisy-signal peer-review null](../validations/noisy_signal_peer_review_null.md)
- [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md)
- [private-interest evaluator bias](private_interest_evaluator_bias.md)
- [expert cue-sampling bias](expert_cue_sampling_bias.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md)
- [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626]

## Metadata

- Concept ID: `proposal_ambiguity_aversion_discount`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: ambiguity discount in review; novelty ambiguity aversion; proposal risk discount; uncertain-proposal discount
