# Chaperone-effect ratio

## Summary

Chaperone-effect ratio compares chaperoned senior authors with new senior authors in a journal, estimating how important prior junior-author venue experience is for later senior authorship.

## Canonical Form

- Unit of analysis: journal, field, year, senior author, or author-venue transition.
- Typical representation: raw ratio `c`, normalized magnitude `C = c / crandom`, or alphabetical-adjusted magnitude `Calphabet = c / calphabet`.
- Measurement target: imbalance between senior authors who transition from prior nonlast venue roles and senior authors with no prior venue history.
- Empirical signature: high values indicate that chaperoned senior authors are more common than new senior authors after accounting for appropriate baselines.

## Uses in Science of Science

- Measures the strength of [venue chaperone effect](../mechanisms/venue_chaperone_effect.md).
- Converts [venue PI experience categories](venue_pi_experience_categories.md) into a journal-level scalar.
- Depends on [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md).
- Requires [random author-order chaperone null](../validations/random_author_order_chaperone_null.md) and [alphabetical author-order chaperone null](../validations/alphabetical_author_order_chaperone_null.md) for cross-field comparison.
- Feeds the [field chaperone-effect gradient](field_chaperone_effect_gradient.md) when normalized values are compared across disciplines.
- Links publication access to [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md) and [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md).

## Operationalization

- Count chaperoned PIs and new PIs within each journal or journal-year window.
- Compute the raw ratio `c` comparing the chaperoned and new PI counts or shares.
- Compute `crandom` by permuting author order within papers while preserving team size and productivity, then calculate `C = c / crandom`.
- Compute `calphabet` under alphabetically sorted bylines when alphabetical authorship is a plausible convention, then calculate `Calphabet = c / calphabet`.
- Interpret `C > 1` as evidence that nonlast-to-last transitions are more frequent than expected under random author order.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) defines `c` by comparing authors who transition from nonlast to last position in a journal with last authors who never made that transition in the journal.
- The paper states that `c = 1` means balance between new and chaperoned authors, `c > 1` means chaperoned authors are more prevalent, and `c < 1` means publication is easier for new senior authors.
- Sekara et al. caution that raw `c` is affected by field characteristics, team size, productivity, and chance nonlast-to-last transitions, so it cannot be directly compared across fields without normalization.
- The paper reports normalized average values increasing from mathematics and physics toward medicine, biology, and interdisciplinary journals, with the interdisciplinary average around 1.68 under `C = c / crandom`.

## Caveats

- Raw `c` should not be compared directly across fields with different authorship norms.
- The ratio observes accepted papers only and cannot distinguish submission rates from acceptance rates.
- A high ratio can reflect selection, repeated venue specialization, senior-author reputation, or true apprenticeship.
- The metric depends on correct author order, publication dates, and author disambiguation.

## Links

- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [venue PI experience categories](venue_pi_experience_categories.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [random author-order chaperone null](../validations/random_author_order_chaperone_null.md)
- [alphabetical author-order chaperone null](../validations/alphabetical_author_order_chaperone_null.md)
- [nonlast-to-last transition probability](nonlast_to_last_transition_probability.md)
- [field chaperone-effect gradient](field_chaperone_effect_gradient.md)
- [accepted-publication transition denominator limit](../validations/accepted_publication_transition_denominator_limit.md)
- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `chaperone_effect_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: chaperone ratio; venue apprenticeship ratio; c ratio; chaperone magnitude C
