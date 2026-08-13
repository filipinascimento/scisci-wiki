# Proposal batch randomization

## Summary

Proposal batch randomization is a block-level assignment method that randomizes groups of proposals to evaluators while keeping review administration tractable.

## Canonical Form

- Unit of analysis: proposal batch, evaluator, assignment block, review load, or evaluator-proposal pair.
- Typical representation: randomized blocks of proposals assigned to reviewers.
- Method target: preserve random assignment while managing reviewer workload and back-office logistics.
- Empirical signature: each evaluator receives a batch, but the batch composition is randomized from the proposal pool.

## Uses in Science of Science

- Refines [randomized reviewer-proposal assignment](randomized_reviewer_proposal_assignment.md) by identifying the assignment unit.
- Supports [proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md) when pair-level scores are analyzed.
- Works with [triple-blind proposal review](triple_blind_proposal_review.md) to reduce interpersonal and inter-reviewer contamination.

## Operationalization

- Randomly partition proposals into blocks or randomly draw proposal batches.
- Assign one or more batches to evaluators while respecting load and conflict constraints.
- Store the evaluator-proposal assignment table at pair level.
- Test balance across evaluator and proposal attributes.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports ten blocks of 15 proposals drawn from a pool of 150 proposals.
- Each of 142 evaluators was assigned 15 proposals, yielding 2,130 evaluator-proposal pairs.
- The paper notes that block assignment supported administration while preserving randomized proposal exposure.

## Caveats

- Block designs can induce within-batch correlations.
- Conflict-of-interest removals can weaken randomization if not documented.
- Randomization at batch level should not be analyzed as if every pair were independently sampled without checking design effects.

## Links

- [randomized reviewer-proposal assignment](randomized_reviewer_proposal_assignment.md)
- [triple-blind proposal review](triple_blind_proposal_review.md)
- [proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md)
- [reviewer-distance rank reshuffling](../validations/reviewer_distance_rank_reshuffling.md)
- [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; SciSciNet: W3122634626; WoS: unknown]

## Metadata

- Concept ID: `proposal_batch_randomization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: proposal block randomization; randomized proposal batches; batch-level reviewer assignment; block-randomized grant review
