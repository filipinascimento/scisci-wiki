# Accepted-publication transition denominator limit

## Summary

Accepted-publication transition denominator limit is the caveat that author-transition measures built from published papers observe accepted venue appearances, not the full denominator of submissions, rejected manuscripts, or scientists who exit before publishing again.

## Canonical Form

- Unit of analysis: author, venue, prior publication state, transition event, submission attempt, rejected manuscript, or career exit.
- Typical representation: publication-conditioned transition caveat, missing submission denominator, accepted-paper-only state sequence, or rejected-manuscript sensitivity note.
- Validation target: prevent accepted-paper transitions from being interpreted as venue acceptance odds or causal mentorship effects.
- Empirical signature: a study can estimate transitions among observed publications but cannot directly estimate how prior experience changes submission probability or acceptance probability.

## Uses in Science of Science

- Bounds interpretation of [nonlast-to-last transition probability](../measures/nonlast_to_last_transition_probability.md) and [chaperone-effect ratio](../measures/chaperone_effect_ratio.md).
- Adds a venue-transition case to [publication-conditioned SciSci blind spot](publication_conditioned_scisci_blind_spot.md).
- Connects accepted-publication histories to broader [unpublished-failure censoring](unpublished_failure_censoring.md) and submission-selection problems.
- Helps separate [venue chaperone effect](../mechanisms/venue_chaperone_effect.md) as an observed publication-history pattern from direct claims about editorial selection or mentoring.

## Operationalization

- State whether the dataset includes only published papers or also submissions, revisions, desk rejections, referee rejections, withdrawals, and non-submissions.
- Phrase author-state transitions as accepted-publication transitions when rejected manuscripts are not observed.
- Avoid estimating acceptance probability, submission propensity, or apprentice success shares without a submission denominator.
- Where possible, link publication histories to journal submission systems, preprints, grant records, or survey evidence on attempted submissions.
- Report career-exit and field-switching as missing states when longitudinal author histories end.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) states that because rejected-paper statistics are unavailable, the authors cannot directly answer how prior nonlast publication affects odds of later publishing as last author.
- The paper instead estimates the related probability of transitioning to last author as a function of the number of observed prior nonlast publications.
- Sekara et al. also caution that their design averages over authors with different success levels, does not account for good proteges finding good mentors, and omits many young authors who leave science.
- This validation therefore preserves the distinction between observed venue trajectories and unobserved submission, rejection, and exit processes.

## Caveats

- Submission denominators are often proprietary, journal-specific, and difficult to link to author histories.
- Preprints and surveys can partially reveal attempts but may not match rejected manuscripts cleanly.
- Conditioning on accepted papers can hide both failed attempts by aspiring entrants and self-selection by authors who never submit.
- The limit applies broadly to publication-only career-transition studies, not only chaperone-effect analyses.

## Links

- [publication-conditioned SciSci blind spot](publication_conditioned_scisci_blind_spot.md)
- [unpublished-failure censoring](unpublished_failure_censoring.md)
- [nonlast-to-last transition probability](../measures/nonlast_to_last_transition_probability.md)
- [chaperone-effect ratio](../measures/chaperone_effect_ratio.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [chaperoned PI citation-impact comparison](chaperoned_pi_citation_impact_comparison.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `accepted_publication_transition_denominator_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: missing submission denominator; accepted-paper transition caveat; rejected-manuscript denominator limit; publication-conditioned transition bias
