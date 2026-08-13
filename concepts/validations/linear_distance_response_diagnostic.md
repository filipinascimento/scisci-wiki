# Linear distance-response diagnostic

## Summary

Linearity in the distance-score relationship can distinguish gradual cognition effects from close-reviewer agency spikes.

## Canonical Form

- Unit of analysis: evaluator-proposal pair, distance percentile, review score, quintile model, or agency-bias diagnostic.
- Typical representation: distance-response shape check using linear, quadratic, and quintile specifications.
- Mechanism, measurement, or validation target: mechanism diagnosis for expertise-distance review effects.
- Empirical signature: review scores change gradually with distance rather than showing a close-reviewer step spike or variance surge.

## Uses in Science of Science

- Refines reviewer-distance validation by linking it to [closest expert review penalty](../mechanisms/closest_expert_review_penalty.md) and [private interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md).
- Useful as a reusable check when [noisy signal peer review null](noisy_signal_peer_review_null.md) is used in science-of-science inference.
- Creates cross-links to [reviewer proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) so the motif is not interpreted in isolation.

## Operationalization

- Estimate linear, quadratic, and quintile distance-response models.
- Inspect close-distance step functions and near-expert subsets.
- Compare mean and variance behavior near the closest reviewers.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) finds a linear increasing relationship between distance and scores, with no outsized close-reviewer response or variance spike.
- The diagnostic helps separate bounded-rationality mechanisms from private-interest explanations.

## Caveats

- Linear behavior may not extrapolate to lay evaluators or very distant fields.
- Shape diagnostics still depend on the chosen knowledge-space representation.

## Links

- [Closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [Private-interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md)
- [Noisy-signal peer-review null](noisy_signal_peer_review_null.md)
- [Reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [Random-coefficient evaluator consistency](random_coefficient_evaluator_consistency.md)
- [Conditional review-score dispersion test](conditional_review_score_dispersion_test.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `linear_distance_response_diagnostic`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: distance linearity test; close-reviewer step-function null; agency-spike diagnostic
