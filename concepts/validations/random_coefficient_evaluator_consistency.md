# Random-coefficient evaluator consistency

## Summary

Random-coefficient evaluator consistency is a validation that tests whether a reviewer-distance effect is broadly present across evaluators rather than driven by a small subset of unusual reviewers.

## Canonical Form

- Unit of analysis: evaluator, evaluator-proposal pair, proposal score, distance coefficient, or random slope.
- Typical representation: random-coefficient or mixed-effects model with evaluator-specific distance slopes.
- Validation target: assess heterogeneity in the estimated distance-score relationship.
- Empirical signature: most evaluator-specific coefficients point in the same substantive direction, or the aggregate result is not concentrated in a small subgroup.

## Uses in Science of Science

- Strengthens evidence for [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md).
- Complements [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md) by asking whether the estimated effect is evaluator-general.
- Helps interpret [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) as a systematic review-process pattern.
- Adds a robustness layer to randomized review designs.

## Operationalization

- Estimate a model allowing the distance coefficient to vary by evaluator.
- Inspect the distribution of evaluator-specific slopes and their uncertainty.
- Check whether conclusions depend on excluding influential evaluators or evaluator strata.
- Compare random-coefficient results with fixed-effect and pooled specifications.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports a random-coefficient analysis of the evaluator-distance effect.
- The analysis checks whether the positive relationship between intellectual distance and evaluation of novelty is spread across evaluators.
- This supports the interpretation that the result is not only a small-reviewer artifact.

## Caveats

- Random-slope estimates can be noisy when each evaluator reviews few proposals.
- Consistency across evaluators does not prove the mechanism; shared institutional context or scoring rules can also align coefficients.
- The test is local to the controlled review setting and may not generalize to open committee discussion.

## Links

- [closest-expert review penalty](../mechanisms/closest_expert_review_penalty.md)
- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [within-domain expertise heterogeneity](../mechanisms/within_domain_expertise_heterogeneity.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626]

## Metadata

- Concept ID: `random_coefficient_evaluator_consistency`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: evaluator random-slope consistency; random-coefficient reviewer check; evaluator-slope robustness; reviewer heterogeneity check
