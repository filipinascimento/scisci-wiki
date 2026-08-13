# Nonlast-to-last transition probability

## Summary

Nonlast-to-last transition probability measures how likely an author is to become last author in a journal after one or more prior nonlast publications in that same journal.

## Canonical Form

- Unit of analysis: author, journal, nonlast publication count, transition event, or publication year.
- Typical representation: transition probability by number of prior nonlast occurrences, transition curve, or venue-specific comparison.
- Measurement target: how repeated junior-author venue experience relates to later senior authorship.
- Empirical signature: transition probability rises with prior nonlast publications in venues where apprenticeship or venue-specific know-how matters.

## Uses in Science of Science

- Adds an event-transition measure to [venue chaperone effect](../mechanisms/venue_chaperone_effect.md), beyond static category shares.
- Uses [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md) and [venue PI experience categories](venue_pi_experience_categories.md).
- Helps distinguish repeated junior-author exposure from a single chaperoned-state label.
- Connects [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md) to career-transition timing.
- Provides a venue-level complement to [scientific apprenticeship latency](scientific_apprenticeship_latency.md).

## Operationalization

- For each author-journal pair, count how many times the author has appeared as a nonlast author before becoming last author.
- Estimate the probability that the author later appears as last author conditional on the count of prior nonlast publications.
- Compare transition curves across journals, fields, and journal types.
- Separate specialized journals from interdisciplinary or high-impact venues.
- Interpret the curve with caution because only accepted papers are observed; use [accepted-publication transition denominator limit](../validations/accepted_publication_transition_denominator_limit.md) when submission or rejection rates matter.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) asks how the probability of transitioning to last author changes with the number of prior nonlast author occurrences.
- For Nature, the paper reports that the probability grows from about 10% after one nonlast publication to nearly 20% after four nonlast publications.
- For Physical Review D, Sekara et al. report a transition probability around 25% that does not change with additional nonlast publications.
- The contrast supports the idea that repeated prior venue experience matters differently in interdisciplinary high-impact venues and disciplinary specialist journals.

## Caveats

- Transition probability is conditional on accepted publications and does not measure submission or rejection probabilities.
- Authors who leave science, change fields, or publish outside the focal venue disappear from the focal transition sequence.
- The measure can be confounded by topic fit, reputation, lab resources, senior coauthor ties, and field authorship norms.
- It requires enough author-journal history to estimate stable curves.

## Links

- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [venue PI experience categories](venue_pi_experience_categories.md)
- [chaperone-effect ratio](chaperone_effect_ratio.md)
- [field chaperone-effect gradient](field_chaperone_effect_gradient.md)
- [accepted-publication transition denominator limit](../validations/accepted_publication_transition_denominator_limit.md)
- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md)
- [scientific apprenticeship latency](scientific_apprenticeship_latency.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `nonlast_to_last_transition_probability`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: junior-to-senior venue transition; nonlast-to-PI transition; venue senior-authorship transition; prior junior-publication transition curve
