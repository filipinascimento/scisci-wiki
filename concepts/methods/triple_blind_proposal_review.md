# Triple-blind proposal review

## Summary

Triple-blind proposal review hides author identities from evaluators, evaluator identities from authors, and evaluator identities from one another so that proposal scores are less directly shaped by status cues, retaliation concerns, or panel coordination.

## Canonical Form

- Unit of analysis: proposal, evaluator, author, review score, assignment table, or review round.
- Typical representation: blinded reviewer-proposal assignment design with restricted identity fields.
- Method target: isolate content and reviewer-proposal fit from author identity and reviewer interaction.
- Empirical signature: review scores are produced before evaluators know authors or other evaluators.

## Uses in Science of Science

- Strengthens [randomized reviewer-proposal assignment](randomized_reviewer_proposal_assignment.md) by reducing social-information channels.
- Provides an experimental design guardrail for [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md), [status-authority evaluation bias](../mechanisms/status_authority_evaluation_bias.md), and [private-interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md).
- Makes remaining score gradients over [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md) more interpretable as content/expertise effects.
- Works with [single-author proposal standardization](single_author_proposal_standardization.md) in the [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md) to reduce identity and team-composition channels.

## Operationalization

- Remove author names, institutional identifiers, acknowledgments, and obvious self-revealing material where feasible.
- Assign proposal IDs and evaluator IDs so review forms can be linked without revealing identities during scoring.
- Prevent evaluators from seeing other evaluators' identities or scores until the target scoring stage closes.
- Record which cues could not be blinded, such as topic specialization, writing style, preliminary data, or self-citations.
- Pair blinding with randomized assignment and conflict screening rather than treating blinding as sufficient by itself.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) reports a grant process in which evaluators and authors were blinded to one another and evaluators were also blinded to one another.
- The same study used this design in a first-stage seed-grant process that solicited ideas and hypotheses.
- Boudreau et al. combined the blinding with 142 evaluators, 150 proposals, and 2,130 randomized evaluator-proposal pairs.
- The authors argue that the observed intellectual-distance and novelty effects were insensitive to usual identity-blinding procedures.

## Caveats

- Blind review does not hide all information; topic, methods, writing style, and prior work can reveal likely authors or groups.
- Blinding does not remove bounded-rationality problems in judging novelty.
- Triple blinding can reduce discussion benefits if panel deliberation is also a target of the evaluation process.

## Links

- [randomized reviewer-proposal assignment](randomized_reviewer_proposal_assignment.md)
- [biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md)
- [single-author proposal standardization](single_author_proposal_standardization.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [status-authority evaluation bias](../mechanisms/status_authority_evaluation_bias.md)
- [private-interest evaluator bias](../mechanisms/private_interest_evaluator_bias.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md)
- [NIH study-section review process](nih_study_section_review_process.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `triple_blind_proposal_review`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: triple-blinded grant review; mutually blinded proposal review; reviewer-author-evaluator blinding; blind randomized proposal review
