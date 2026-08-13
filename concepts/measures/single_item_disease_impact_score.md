# Single-item disease-impact score

## Summary

Single-item disease-impact score is a compact review outcome in which evaluators assign one numeric score for a proposal's likely impact on a disease, patient, or research domain.

## Canonical Form

- Unit of analysis: evaluator-proposal pair, proposal, review score, disease area, or impact judgment.
- Typical representation: one ordinal or interval-like rating scale.
- Measure target: proposal-level perceived impact in a review process.
- Empirical signature: each review yields a single score that can be compared across evaluator-proposal pairs.

## Uses in Science of Science

- Supplies the dependent variable for [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md).
- Connects [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) to a measurable review outcome.
- Supports [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md) when rankings are simulated from alternative evaluator sets.

## Operationalization

- Define the scale and prompt before evaluation.
- Ask evaluators to score likely impact on the stated disease or research goal.
- Store scores with evaluator, proposal, and assignment identifiers.
- Estimate distance, novelty, and evaluator effects using the score as the outcome.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) uses `EVALUATION_SCORE` as the main dependent variable.
- Evaluators scored proposals on a one-item 1-10 impact judgment tied to endocrine disease research, treatment, or care.
- The paper uses variation in this score across randomized evaluator-proposal pairs to estimate distance and novelty effects.

## Caveats

- A single score compresses feasibility, novelty, importance, and expected execution into one judgment.
- Scale interpretation may vary across evaluators.
- Compact scores are useful for experiments but may miss deliberative panel reasoning.

## Links

- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [reviewer-proposal intellectual distance](reviewer_proposal_intellectual_distance.md)
- [proposal MeSH novelty percentile](proposal_mesh_novelty_percentile.md)
- [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626; WoS: unknown]

## Metadata

- Concept ID: `single_item_disease_impact_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: one-item proposal impact score; disease impact review score; grant proposal impact rating; evaluator impact score
