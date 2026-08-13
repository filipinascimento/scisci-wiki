# Distance-novelty additivity check

## Summary

Reviewer-proposal distance and proposal novelty should be tested for additive versus interactive effects on evaluation.

## Canonical Form

- Unit of analysis: evaluator-proposal pair, distance score, novelty score, interaction term, or proposal rating.
- Typical representation: joint regression with distance, novelty, and distance-by-novelty interaction terms.
- Mechanism, measurement, or validation target: independence of distance and novelty mechanisms in peer review.
- Empirical signature: distance and novelty coefficients remain stable when modeled jointly and the interaction is weak or absent.

## Uses in Science of Science

- Refines peer-review mechanism validation by linking it to [reviewer proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) and [proposal mesh novelty percentile](../measures/proposal_mesh_novelty_percentile.md).
- Useful as a reusable check when [right tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md) is used in science-of-science inference.
- Creates cross-links to [novelty robustness specification sweep](novelty_robustness_specification_sweep.md) so the motif is not interpreted in isolation.

## Operationalization

- Include reviewer-proposal distance, proposal novelty, and their interaction in the evaluation model.
- Compare coefficients when distance and novelty are estimated separately and jointly.
- Report whether interaction terms change substantive interpretation of review bias.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) states that adding distance and novelty together leaves estimates unchanged and reports no interaction between the two.
- This supports an additivity check for two distinct knowledge-space mechanisms.

## Caveats

- Additivity is limited to the observed MeSH-space measures and distance range.
- Interaction tests can be underpowered in sparse tails of novelty or distance.

## Links

- [Reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [Proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [Right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [Novelty robustness specification sweep](novelty_robustness_specification_sweep.md)
- [Proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [Conditional review-score dispersion test](conditional_review_score_dispersion_test.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `distance_novelty_additivity_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: distance-by-novelty null; additive review model; novelty-distance independence check
