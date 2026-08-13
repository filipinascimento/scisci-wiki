# Established PI share trajectory

## Summary

Established PI share trajectory measures how the fraction of senior authors who have already published as senior authors in the same venue changes over time.

## Canonical Form

- Unit of analysis: journal-year, paper, last author, senior-author category, or field panel.
- Typical representation: established-PI share, repeated senior-author share, journal incumbency trajectory, or same-venue senior-author time series.
- Measurement target: venue incumbency and repeated senior-author dominance.
- Empirical signature: a venue-year panel shows rising, falling, or persistently high shares of established same-venue senior authors.

## Uses in Science of Science

- Complements [chaperone-effect ratio](chaperone_effect_ratio.md), which compares chaperoned and new senior authors.
- Measures one signature of [prestige-venue author specialization](../mechanisms/prestige_venue_author_specialization.md).
- Uses [venue PI experience categories](venue_pi_experience_categories.md) and [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md).
- Helps distinguish journals dominated by repeat senior authors from journals that admit more first-time senior authors.

## Operationalization

- For each venue-year, classify last authors as new, chaperoned, or established using prior same-journal publication history.
- Count established senior authors as those with prior same-journal last-author publications.
- Divide established senior-author papers by all eligible senior-author papers in the venue-year or smoothed time window.
- Compare trajectories across journals after applying field and panel eligibility filters.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) reports that Physical Review D becomes increasingly dominated by established PIs, unlike patterns observed for Nature and NEJM.
- The measure is derived from the same author-order history panel used for the venue chaperone effect.
- Random and alphabetical author-order nulls help determine whether observed category shares exceed what would arise from byline-order artifacts.

## Caveats

- Last-author seniority is not equally meaningful in all fields.
- A high established-PI share can reflect field specialization, journal scope, collaboration norms, or editorial selectivity.
- Name disambiguation errors can inflate or deflate repeat-author histories.

## Links

- [venue PI experience categories](venue_pi_experience_categories.md)
- [chaperone-effect ratio](chaperone_effect_ratio.md)
- [field chaperone-effect gradient](field_chaperone_effect_gradient.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [prestige-venue author specialization](../mechanisms/prestige_venue_author_specialization.md)
- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [random author-order chaperone null](../validations/random_author_order_chaperone_null.md)
- [alphabetical author-order chaperone null](../validations/alphabetical_author_order_chaperone_null.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `established_pi_share_trajectory`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: established senior-author share; repeated PI venue share; same-venue PI incumbency; established-author trajectory
