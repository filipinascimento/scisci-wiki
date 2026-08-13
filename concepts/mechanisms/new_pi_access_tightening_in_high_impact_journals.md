# New PI access tightening in high-impact journals

## Summary

New PI access tightening in high-impact journals is the temporal pattern in which senior-author entry without prior same-venue experience becomes rarer as chaperoned or established senior authors make up a larger share of accepted papers.

## Canonical Form

- Unit of analysis: journal-year, senior author, author-venue state, high-impact multidisciplinary venue, or publication cohort.
- Typical representation: time series of new, chaperoned, and established PI shares.
- Mechanism: as venue-specific knowledge, specialization, and repeat access accumulate, first-time senior authors face a narrower observed path into prestigious venues.
- Empirical signature: the fraction of new senior authors declines while chaperoned or established senior-author shares rise in high-impact wide-audience journals.

## Uses in Science of Science

- Adds a temporal access layer to [venue chaperone effect](venue_chaperone_effect.md).
- Uses [chaperone-effect journal panels](../datasets/chaperone_effect_journal_panel.md) and [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md).
- Interprets changes in [venue PI experience categories](../measures/venue_pi_experience_categories.md) as access dynamics rather than only static labels.
- Links mentorship, specialization, and [peer review and gatekeeping](peer_review_gatekeeping.md) to longitudinal venue stratification.

## Operationalization

- For each journal-year, classify last authors as new, chaperoned, or established.
- Track the share of each category over time.
- Focus on high-impact multidisciplinary or wide-audience journals when testing access tightening.
- Separate changes in new-author share from changes in repeated senior authorship and nonlast-to-last transitions.
- Avoid treating accepted-publication shares as submission or acceptance probabilities without submission data.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) reports that Nature underwent a strong recent change, with the fraction of new senior authors dropping significantly.
- The paper interprets this as publishing as senior author in Nature becoming increasingly rare without previous publication experience in the journal.
- Sekara et al. report that in NEJM and Nature, the fraction of new authors decreases over time while the fraction of chaperoned authors slightly increases.
- The authors summarize the pattern as publishing in Nature becoming harder without having published there before.

## Caveats

- The pattern is observed among accepted papers and does not identify whether authors submit less often or are rejected more often.
- A falling new-PI share may reflect field growth, team size, journal scope, topic shifts, or specialization rather than editorial gatekeeping alone.
- High-impact multidisciplinary journals may not generalize to specialized field journals.

## Links

- [venue chaperone effect](venue_chaperone_effect.md)
- [mentorship and chaperone effects](mentorship_chaperone_effects.md)
- [tacit venue submission knowledge transfer](tacit_venue_submission_knowledge_transfer.md)
- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [venue PI experience categories](../measures/venue_pi_experience_categories.md)
- [accepted-publication transition denominator limit](../validations/accepted_publication_transition_denominator_limit.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `new_pi_access_tightening_in_high_impact_journals`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: new senior-author decline; first-time PI access tightening; high-impact venue entry barrier; new PI share decline
