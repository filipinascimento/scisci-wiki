# Initial-reviewer panel-score aggregation

## Summary

Study-section scores can be modeled as staged aggregation: assigned reviewers seed scores, panel discussion may update them, and final anonymous scores are averaged.

## Canonical Form

- Unit of analysis: grant application, assigned reviewer, study-section member, initial score, revised score, final priority score, or percentile score.
- Typical representation: staged panel aggregation process from assigned-reviewer priors to averaged final scores.
- Mechanism, measurement, or validation target: mechanical construction of proposal peer-review scores.
- Empirical signature: assigned-reviewer assessments are converted into a panel-level score through discussion, revision, anonymous scoring, and averaging..

## Uses in Science of Science

- Refines peer-review score construction by linking it to [nih study section review process](nih_study_section_review_process.md) and [proposal evaluator fixed effect identification](proposal_evaluator_fixed_effect_identification.md).
- Useful as a reusable distinction when [randomized reviewer proposal assignment](randomized_reviewer_proposal_assignment.md) is analyzed in science-of-science data.
- Adds cross-links to [noisy signal peer review null](../validations/noisy_signal_peer_review_null.md) so the motif is not read as an isolated result.

## Operationalization

- Represent proposal score construction as assigned-reviewer assessment, panel discussion, individual revision, anonymous voting, and final averaging.
- Separate individual reviewer paths from final panel-level scores when data permit.
- Use reviewer assignment data to test how much assigned reviewers shape the final score.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) describes one to three assigned reviewers, full-panel discussion, revision, anonymous final scoring, and averaging across members.
- The motif identifies where deliberation and aggregation enter NIH score production.

## Caveats

- The paper observes final percentile scores, not the full individual score path.
- Aggregation may produce consensus or conformity that cannot be inferred from the final score alone.

## Links

- [NIH study-section review process](nih_study_section_review_process.md)
- [Proposal-evaluator fixed-effect identification](proposal_evaluator_fixed_effect_identification.md)
- [Randomized reviewer-proposal assignment](randomized_reviewer_proposal_assignment.md)
- [Noisy-signal peer-review null](../validations/noisy_signal_peer_review_null.md)
- [Peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [Mode-2 peer-review consensus strain](../mechanisms/mode2_peer_review_consensus_strain.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `initial_reviewer_panel_score_aggregation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li & Agha (2015) (2015)
- Latest seen paper: Li & Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: panel score aggregation; reviewer-seeded deliberation; study-section score averaging; initial-to-final reviewer scoring
