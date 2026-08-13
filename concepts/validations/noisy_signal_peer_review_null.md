# Noisy-signal peer-review null

## Summary

The noisy-signal peer-review null treats each reviewer score as true proposal quality plus random error, predicting that reviewer distance should mainly increase score variance rather than systematically shift mean scores.

## Canonical Form

- Unit of analysis: proposal, reviewer, review score, score variance, or reviewer-proposal pair.
- Typical representation: score equals latent proposal quality plus reviewer noise, sometimes averaged over multiple reviewers.
- Validation target: test whether observed review disagreement is only imprecision or also systematic bias.
- Empirical signature: if the null holds, distance or uncertainty changes dispersion more than conditional mean scores.

## Uses in Science of Science

- Provides a baseline for interpreting [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) and [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md).
- Contrasts with [expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md), [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md), and [private-interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md).
- Helps decide whether adding more reviewers should cancel noise or whether review-system redesign is needed.
- Sets up the [expert review aggregation limit](expert_review_aggregation_limit.md), which tests whether averaging more distant reviewers hides expertise-specific signal.

## Operationalization

- Model reviewer scores as latent proposal quality plus error.
- Estimate whether reviewer-proposal distance predicts score variance, mean scores, or both.
- Test whether averaging more reviewers reduces decision instability as expected under independent noise.
- Compare the null against fixed-effect or randomized designs that can isolate pair-specific score shifts.
- Interpret systematic mean shifts as evidence that disagreement is not just random imprecision.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) explicitly frames one alternative view as evaluators discerning noisy signals of true quality.
- The paper states that under this view, greater intellectual distance would imply less precise evaluations but no mean score difference.
- Boudreau et al. report score patterns inconsistent with simply inferring true quality from noisy signals.
- Their observed intellectual-distance and novelty score shifts therefore validate the need for mechanisms beyond random review error.

## Caveats

- The null can still be useful when reviewer disagreement is genuinely random or when the target is decision uncertainty.
- Mean shifts may reflect real quality signals, not only bias, unless the design separates proposal quality from reviewer assignment.
- Reviewer errors are often correlated through field norms, shared training, and common evaluation rubrics.

## Links

- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [expert cue-sampling bias](../mechanisms/expert_cue_sampling_bias.md)
- [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [private-interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md)
- [expert review aggregation limit](expert_review_aggregation_limit.md)
- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [grant peer-review value-added](grant_peer_review_value_added.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `noisy_signal_peer_review_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: peer-review noise null; true-quality plus error model; review score noise model; distance variance null
