# Novelty-aware review calibration

## Summary

Novelty-aware review calibration is a review-system intervention that makes evaluators aware of novelty, resource-allocation goals, and cognitive limits so highly novel proposals are not automatically discounted for being hard to judge.

## Canonical Form

- Unit of analysis: proposal, evaluator, review rubric, calibration prompt, novelty statistic, or funding decision.
- Typical representation: review workflow that adds novelty metrics, evaluator coaching, rubric prompts, or protected exploratory funding channels.
- Method target: reduce avoidable underinvestment in novel proposals while preserving expert scrutiny.
- Empirical signature: calibrated review changes scores, rankings, funding shares, or portfolio novelty without lowering later outcome quality.

## Uses in Science of Science

- Turns [novelty penalty](../mechanisms/novelty_penalty.md) and [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md) into a policy experiment.
- Builds on [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md) by using novelty measures as review context rather than only analysis variables.
- Connects [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) to [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md), [responsible metrics](../measures/responsible_metrics.md), and [metrics support qualitative assessment](metrics_support_qualitative_assessment.md).
- Addresses [expert review aggregation limit](../validations/expert_review_aggregation_limit.md) and [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md) by changing what reviewers are asked to notice.

## Operationalization

- Add calibrated novelty statistics to review packets while warning that novelty is not quality.
- Prime or coach evaluators about goals for exploration, cognitive limits, and the risks of over-penalizing uncertain ideas.
- Separate scores for feasibility, novelty, rigor, potential upside, and fit to program goals.
- Compare calibrated and uncalibrated panels through randomized prompts, phased rollout, or matched review rounds.
- Track downstream portfolio diversity, project completion, publications, citations, patents, and exploratory failures.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) argues that aggregation, averaging, blinding, and conventional policies cannot by themselves address novelty discounting.
- The authors propose priming and coaching evaluators to understand resource-allocation goals and their cognitive limits.
- They also suggest supplementing evaluations with objective measures of proposal novelty.
- Boudreau et al. further point to less stringent resource constraints as a possible way to foster novel innovation.

## Caveats

- Novelty calibration can be gamed if novelty metrics become targets.
- Promoting novelty without quality controls can fund incoherent or infeasible proposals.
- A successful intervention should be evaluated on portfolio-level outcomes, not only immediate score shifts.

## Links

- [novelty penalty](../mechanisms/novelty_penalty.md)
- [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [expert review aggregation limit](../validations/expert_review_aggregation_limit.md)
- [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [metrics support qualitative assessment](metrics_support_qualitative_assessment.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `novelty_aware_review_calibration`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: novelty-calibrated review; novelty-aware peer review; reviewer novelty coaching; exploratory review calibration
