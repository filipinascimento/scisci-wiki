# Venue PI experience categories

## Summary

Venue PI experience categories label a paper's senior author as new, chaperoned, or established according to prior publication history in the same journal.

## Canonical Form

- Unit of analysis: paper, senior author, journal, author-venue history, or publication year.
- Typical representation: three-state categorical label: new PI, chaperoned PI, or established PI.
- Measurement target: whether a senior author has no venue experience, prior junior-author venue experience, or prior senior-author venue experience.
- Empirical signature: the distribution of senior-author categories changes across journals, fields, and years.

## Uses in Science of Science

- Operationalizes [venue chaperone effect](../mechanisms/venue_chaperone_effect.md) at the paper level.
- Feeds [chaperone-effect ratio](chaperone_effect_ratio.md), [nonlast-to-last transition probability](nonlast_to_last_transition_probability.md), and [chaperoned PI citation-impact comparison](../validations/chaperoned_pi_citation_impact_comparison.md).
- Uses [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md) as its state representation.
- Gives a venue-specific counterpart to [coauthor prestige exposure](coauthor_prestige_exposure.md), focused on experience in a journal rather than collaborator status.
- Supports [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) studies when publication access is inferred from accepted-paper histories.

## Operationalization

- Identify the last author on each paper as the focal senior author or PI when field conventions allow.
- Mark the senior author as new if they have no previous publication in that journal.
- Mark the senior author as chaperoned if they previously appeared in that journal only as a nonlast author.
- Mark the senior author as established if they previously appeared in that journal as a last author.
- Update the author-venue history after each paper is classified.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) divides last authors in each journal-year into new, chaperoned, and established PI categories.
- The paper defines new PIs as authors with no previous publication in the specific journal.
- It defines chaperoned PIs as authors who appeared before in the journal only as junior or nonlast authors.
- It defines established PIs as authors previously listed as last author in the journal.
- The authors stress that the categories are mutually exclusive for any given paper and journal.

## Caveats

- The classification depends on last-author seniority conventions.
- A senior author's relevant expertise may come from other venues, labs, or informal review experience that the category ignores.
- New, chaperoned, and established labels are accepted-publication states, not direct measures of submission success.
- Author disambiguation and publication-date ordering can change labels near first appearances.

## Links

- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [chaperone-effect ratio](chaperone_effect_ratio.md)
- [nonlast-to-last transition probability](nonlast_to_last_transition_probability.md)
- [chaperoned PI citation-impact comparison](../validations/chaperoned_pi_citation_impact_comparison.md)
- [coauthor prestige exposure](coauthor_prestige_exposure.md)
- [task specialization](../mechanisms/task_specialization.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `venue_pi_experience_categories`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: new chaperoned established PIs; senior-author venue categories; PI experience label; venue seniority categories
