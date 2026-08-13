# Right-tail novelty review discount

## Summary

Right-tail novelty review discount is the evaluation penalty faced by the most novel proposals, where moderate novelty may be tolerated or rewarded but extreme novelty receives lower peer-review scores.

## Canonical Form

- Unit of analysis: proposal, review score, novelty percentile, or funding decision.
- Typical representation: nonlinear score-novelty curve with a negative effect in the high-novelty tail.
- Mechanism: boundedly rational evaluators may misconstrue ideas outside established paradigms or fail to perceive upside variance.
- Empirical signature: highly novel proposals receive lower evaluations after proposal and applicant controls, while low-to-moderate novelty need not be penalized.

## Uses in Science of Science

- Provides a proposal-review instance of [novelty penalty](novelty_penalty.md).
- Uses [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md) as a pre-publication novelty measure.
- Links peer-review allocation to [novelty and conventionality](novelty_conventionality.md) and [tail novelty](../measures/tail_novelty.md).
- Helps interpret underinvestment in exploratory ideas within [funding incentives and exploration](funding_incentives_and_exploration.md).
- Motivates [novelty robustness specification sweep](../validations/novelty_robustness_specification_sweep.md) and [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md).
- Depends on [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md), because proposal novelty cannot be randomized independently of all other proposal characteristics.
- Connects to [proposal ambiguity-aversion discount](proposal_ambiguity_aversion_discount.md), a decision-theoretic channel for why extreme novelty may be penalized.

## Operationalization

- Measure proposal novelty before review using controlled-vocabulary, topic, semantic, or reference-based features.
- Model evaluation scores flexibly over novelty percentiles instead of assuming a linear relationship.
- Compare right-tail novelty against moderate novelty and conventional proposals.
- Control for author history, proposal length, references, figures, evaluator distance, and review-block features.
- Test whether high-novelty proposals show lower means, higher variance, or both.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) finds that more novel proposals receive lower evaluations, with the effect driven by proposals in the right tail of novelty.
- Their full text states that low levels of proposal novelty are associated with increasing scores, while particularly high levels account for the negative novelty result.
- The study reports no evidence of greater variance in ex ante evaluations of novel proposals, raising concern that reviewers may not perceive upside risk at review time.
- The authors argue that aggregation, blinding, and conventional review procedures cannot by themselves correct a systematic discount on novelty.
- Boudreau et al. propose reviewer priming/coaching and objective novelty statistics as possible calibration interventions.
- Their interpretation ties the discount to bounded rationality: evaluators may understand proposals through existing paradigms and misconstrue ideas beyond the perceived [knowledge-frontier envelope](../representations/knowledge_frontier_envelope.md).
- The same full text considers ambiguity aversion: novelty can create uncertainty that cannot be resolved into probabilities before experimentation, making discounting plausible even when variance is not perceived.

## Caveats

- Proposal novelty was not randomized, so novelty-score findings require robustness checks and cannot fully rule out true lower expected outcomes.
- Extreme vocabulary novelty can reflect poor framing, miscoding, or infeasible proposals as well as breakthrough ideas.
- Review discount and post-publication citation delay are related but empirically distinct novelty-penalty channels.

## Links

- [novelty penalty](novelty_penalty.md)
- [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [novelty robustness specification sweep](../validations/novelty_robustness_specification_sweep.md)
- [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md)
- [unobserved proposal-quality identification](../validations/unobserved_proposal_quality_identification.md)
- [knowledge-frontier envelope](../representations/knowledge_frontier_envelope.md)
- [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md)
- [expert review aggregation limit](../validations/expert_review_aggregation_limit.md)
- [closest-expert review penalty](closest_expert_review_penalty.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [novelty and conventionality](novelty_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)
- [highly novel paper class](../measures/highly_novel_paper_class.md)
- [research strategy risk-reward](research_strategy_risk_reward.md)
- [funding incentives and exploration](funding_incentives_and_exploration.md)
- [block-funding novelty buffer](block_funding_novelty_buffer.md)
- [proposal ambiguity-aversion discount](proposal_ambiguity_aversion_discount.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `right_tail_novelty_review_discount`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: high-novelty review penalty; proposal novelty discount; extreme novelty penalty; novelty gatekeeping discount
