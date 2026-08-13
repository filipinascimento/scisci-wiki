# Proposal MeSH novelty percentile

## Summary

Proposal MeSH novelty percentile measures how much a biomedical research proposal uses keyword combinations or terms that have not appeared in prior PubMed-indexed research.

## Canonical Form

- Unit of analysis: research proposal, keyword set, review score, or proposal cohort.
- Typical representation: percentile score based on the share or count of proposal MeSH terms or term combinations that are new relative to prior literature.
- Measurement target: novelty of a proposed research idea before the project is executed.
- Empirical signature: highly novel proposals occupy the upper tail of the novelty distribution and can be compared against review scores.

## Uses in Science of Science

- Makes proposal novelty observable in [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md), not only in published papers.
- Complements publication-based measures such as [tail novelty](tail_novelty.md), [new journal-pair novelty](new_journal_pair_novelty.md), and [novelty-conventionality quadrant typology](novelty_conventionality_quadrant_typology.md).
- Supports tests of [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md).
- Separates proposal novelty from [reviewer-proposal intellectual distance](reviewer_proposal_intellectual_distance.md).
- Uses [MeSH knowledge-frontier space](../representations/mesh_knowledge_frontier_space.md) as the prior-literature denominator and supports [novelty robustness specification sweep](../validations/novelty_robustness_specification_sweep.md).
- Enables tests of [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md) when review-score dispersion is modeled alongside mean scores.

## Operationalization

- Annotate proposals with MeSH terms or another controlled biomedical vocabulary.
- Compare proposal terms, pairs, triplets, or quadruplets against a prior-literature corpus such as PubMed.
- Compute the share or count of terms or combinations not yet observed in prior published research.
- Express the result as a percentile within the proposal cohort or review pool.
- Test robustness to absolute counts versus shares, history windows, and term-combination order.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) defines `PROPOSAL_NOVELTY` as the share of MeSH terms used to describe a proposal that had not yet appeared in prior published research, expressed as a percentile.
- Their robustness checks report that the novelty result does not depend on using shares versus absolute counts, keyword pairs versus triplets or quadruplets, or a 10-year versus full-history PubMed baseline.
- Boudreau et al. use the measure to show that highly novel proposals receive lower evaluations, especially in the right tail of proposal novelty.
- The authors propose that objective novelty measures can be supplied to evaluators as part of [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md).

## Caveats

- MeSH novelty is vocabulary novelty, not necessarily conceptual, methodological, clinical, or causal novelty.
- Controlled-vocabulary novelty can be affected by indexing conventions and by how proposals are mapped to terms.
- Proposal novelty should be analyzed alongside quality controls and reviewer-distance measures because novelty is not randomly assigned.

## Links

- [right-tail novelty review discount](../mechanisms/right_tail_novelty_review_discount.md)
- [reviewer-proposal intellectual distance](reviewer_proposal_intellectual_distance.md)
- [MeSH knowledge-frontier space](../representations/mesh_knowledge_frontier_space.md)
- [randomized reviewer-proposal assignment](../methods/randomized_reviewer_proposal_assignment.md)
- [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md)
- [novelty robustness specification sweep](../validations/novelty_robustness_specification_sweep.md)
- [ex ante novelty-variance blind spot](../validations/ex_ante_novelty_variance_blindspot.md)
- [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [tail novelty](tail_novelty.md)
- [new journal-pair novelty](new_journal_pair_novelty.md)
- [highly novel paper class](highly_novel_paper_class.md)
- [research strategy surprisal](research_strategy_surprisal.md)
- [topic models](../methods/topic_models.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `proposal_mesh_novelty_percentile`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: proposal novelty percentile; MeSH proposal novelty; frontier proposal novelty; biomedical proposal novelty
