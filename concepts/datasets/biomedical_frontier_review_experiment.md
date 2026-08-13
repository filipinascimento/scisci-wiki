# Biomedical frontier-review experiment

## Summary

The biomedical frontier-review experiment is Boudreau et al.'s randomized grant-proposal evaluation dataset linking frontier biomedical proposals, expert evaluators, reviewer-proposal assignments, review scores, MeSH-based distance, and proposal novelty.

## Canonical Form

- Unit of analysis: proposal, evaluator, evaluator-proposal pair, review score, MeSH term vector, or review-stage design.
- Typical representation: randomized bipartite reviewer-proposal table with proposal, evaluator, distance, novelty, and score fields.
- Data target: identify how evaluator expertise and proposal novelty shape resource-allocation scores without observing true proposal quality directly.
- Empirical signature: many evaluators score overlapping proposals under randomized assignment and blinding.

## Uses in Science of Science

- Provides the empirical substrate for [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md), [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md), and [MeSH knowledge-frontier space](../representations/mesh_knowledge_frontier_space.md).
- Supports [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md), [triple-blind proposal review](../methods/triple_blind_proposal_review.md), and [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md).
- Grounds validation pages for [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md), [expert review aggregation limit](../validations/expert_review_aggregation_limit.md), and [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md).
- Links [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) to a design with explicit proposal, evaluator, and pair-level records.

## Operationalization

- Build a proposal table with topic terms, applicant metadata, proposal-stage metadata, and review outcomes.
- Build an evaluator table from prior-publication histories, expertise fields, and eligibility/conflict screens.
- Build an assignment table mapping evaluators to proposals, with review scores and assignment-block information.
- Compute reviewer-proposal distance and proposal novelty in the same MeSH/PubMed space.
- Preserve design features such as blinding, proposal format, single-author restriction, and evaluator load.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports collaboration with a research-intensive U.S. medical school to modify an endocrine-related disease grant process for experimental comparisons.
- The study recruited 142 researchers from inside and outside the disease domain, randomly assigned each evaluator to 15 proposals, and generated 2,130 evaluator-proposal pairs from 150 proposals.
- The process was triple blinded and focused on a first-stage review of ideas and hypotheses.
- Boudreau et al. used this design to separate proposal effects, evaluator effects, reviewer-proposal distance, and proposal novelty.

## Caveats

- The dataset comes from one institutional biomedical grant process and should not be treated as universal peer review.
- Proposal quality is not directly observed, so the design relies on assignment variation, fixed effects, and robustness checks.
- The disease-area and first-stage proposal setting may differ from standing funding panels, manuscript review, and multi-investigator grants.

## Links

- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [triple-blind proposal review](../methods/triple_blind_proposal_review.md)
- [single-author proposal standardization](../methods/single_author_proposal_standardization.md)
- [proposal-evaluator fixed-effect identification](../methods/proposal_evaluator_fixed_effect_identification.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [MeSH knowledge-frontier space](../representations/mesh_knowledge_frontier_space.md)
- [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [expert review aggregation limit](../validations/expert_review_aggregation_limit.md)
- [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `biomedical_frontier_review_experiment`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: frontier grant review experiment; biomedical proposal review experiment; randomized biomedical grant review dataset; evaluator-proposal review panel
