# Reviewer-type interaction null

## Summary

Reviewer-type interaction null is a falsification pattern in which reviewer-distance effects do not materially vary by reviewer seniority, career age, gender, or novelty exposure.

## Canonical Form

- Unit of analysis: evaluator, evaluator-proposal pair, interaction term, review score, or reviewer stratum.
- Typical representation: distance-by-reviewer-type interaction models.
- Validation target: test whether an aggregate reviewer-distance effect is driven by a particular evaluator group.
- Empirical signature: interaction terms are small or statistically indistinguishable from zero across reviewer strata.

## Uses in Science of Science

- Qualifies [private-interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md) by testing whether plausible interest-bearing groups respond differently.
- Complements [random-coefficient evaluator consistency](random_coefficient_evaluator_consistency.md).
- Helps interpret [noisy-signal peer-review null](noisy_signal_peer_review_null.md) and [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md).

## Operationalization

- Define reviewer-type variables before estimation.
- Interact reviewer-proposal distance with seniority, career age, gender, novelty exposure, or other theoretically relevant reviewer attributes.
- Estimate whether the core distance effect changes direction, magnitude, or variance across types.
- Treat null interactions as mechanism constraints, not proof of one mechanism.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) tests interactions between evaluator distance and novelty, seniority, years since graduation, and gender.
- The reported interaction tests do not show significant subgroup differences.
- The result weakens a narrow private-interest account in which only specific reviewer groups should penalize close or novel work.

## Caveats

- Null interactions can reflect limited power or coarse reviewer-type measures.
- Similar subgroup slopes do not identify the cognitive mechanism by themselves.
- Reviewer-type tests are local to the review setting and sampled evaluator pool.

## Links

- [private-interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md)
- [random-coefficient evaluator consistency](random_coefficient_evaluator_consistency.md)
- [noisy-signal peer-review null](noisy_signal_peer_review_null.md)
- [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626; WoS: unknown]

## Metadata

- Concept ID: `reviewer_type_interaction_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: reviewer subgroup interaction null; evaluator-type robustness null; reviewer heterogeneity interaction check; distance-by-reviewer-type null
