# Journal-specific author-order histories

## Summary

Journal-specific author-order histories represent each author's sequence of byline positions within a single journal, making venue-specific transitions between junior and senior authorship visible.

## Canonical Form

- Unit of analysis: author, journal, paper, publication year, byline position, or author-venue trajectory.
- Typical representation: ordered author-position sequence, first nonlast occurrence, first last-author occurrence, repeated senior-author history, or author-venue state transition.
- Measurement target: prior venue experience by author role.
- Empirical signature: an author can appear as junior in a journal before later appearing as senior author in that same journal.

## Uses in Science of Science

- Provides the representation behind [venue PI experience categories](../measures/venue_pi_experience_categories.md) and [nonlast-to-last transition probability](../measures/nonlast_to_last_transition_probability.md).
- Turns [coauthorship networks](coauthorship_networks.md) into ordered, venue-specific career histories rather than only author-author ties.
- Supports [venue chaperone effect](../mechanisms/venue_chaperone_effect.md) by separating venue-specific publishing experience from general career seniority.
- Connects author-order role proxies to [task specialization](../mechanisms/task_specialization.md).
- Requires [author name disambiguation](../methods/author_name_disambiguation.md), including lightweight variants such as [journal-scoped initial-name disambiguation](../methods/journal_scoped_initial_name_disambiguation.md), and venue-level source coverage.

## Operationalization

- For each journal, sort papers by publication date.
- Normalize author names or link author identifiers within the journal.
- Record whether each author appears in last position, nonlast position, or both over time.
- Update an author-venue state before classifying the senior author on each new paper.
- Use the resulting state sequence to identify new, chaperoned, and established senior authors.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) constructs within-journal author histories and assumes the principal investigator is listed last, a common practice in many fields.
- The paper classifies each last author using only that author's previous publications in the same journal, distinguishing authors with no prior venue history, prior nonlast-only history, and prior last-author history.
- Sekara et al. give a Nature example in which a scientist first appears as last author and later as established, while a former coauthor later becomes a chaperoned last author after earlier nonlast publication in Nature.
- The method intentionally keeps the history journal-specific: prior publication in other journals does not by itself make a senior author established or chaperoned for the focal venue.

## Caveats

- Last-author seniority and first-author junior roles are field-specific conventions.
- Alphabetical bylines, equal-contribution statements, consortia, and missing author identifiers can weaken the representation.
- Within-journal name normalization reduces but does not eliminate homonym and synonym errors.
- The representation observes accepted publications, not submissions or rejected manuscripts.

## Links

- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [venue PI experience categories](../measures/venue_pi_experience_categories.md)
- [nonlast-to-last transition probability](../measures/nonlast_to_last_transition_probability.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [coauthorship networks](coauthorship_networks.md)
- [task specialization](../mechanisms/task_specialization.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [journal-scoped initial-name disambiguation](../methods/journal_scoped_initial_name_disambiguation.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [accepted-publication transition denominator limit](../validations/accepted_publication_transition_denominator_limit.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `journal_specific_author_order_histories`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: author-venue role histories; journal byline trajectories; venue-specific authorship histories; author-order career histories
