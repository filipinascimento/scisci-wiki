# Journal-scoped initial-name disambiguation

## Summary

Journal-scoped initial-name disambiguation groups author mentions by normalized surname and initials within a single journal, using the venue boundary to reduce homonym risk in longitudinal author-order analyses.

## Canonical Form

- Unit of analysis: author mention, formatted name, journal, publication sequence, or inferred author-journal identity.
- Typical representation: lowercase surname-plus-initial key, within-journal author sequence, homonym-risk note, or journal-constrained blocking rule.
- Measurement target: stable author identity proxies for venue-specific career-transition histories.
- Empirical signature: the same formatted name is treated as one individual only inside the focal journal, rather than globally across all journals.

## Uses in Science of Science

- Supplies a lightweight entity-resolution method for [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md).
- Supports [venue PI experience categories](../measures/venue_pi_experience_categories.md), [chaperone-effect ratio](../measures/chaperone_effect_ratio.md), and [nonlast-to-last transition probability](../measures/nonlast_to_last_transition_probability.md).
- Gives [author name disambiguation](author_name_disambiguation.md) a venue-specific variant for studies where full author identifiers are unavailable.
- Connects [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md) to the narrower risk profile of single-journal career histories.

## Operationalization

- Convert all author names to lowercase.
- Collapse given names to initials while preserving surname information.
- Process each journal independently rather than using the formatted key across the full database.
- Treat the sequence of papers by the same formatted key inside one journal as one author-journal trajectory.
- Report remaining risks from common surnames, initials-only records, name changes, and field-specific journal communities.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) formats names to lowercase and converts given names to first-letter initials, giving examples such as `smith,j` and `johnson,ms`.
- The paper treats an identical formatted name within the same journal as the same individual when reconstructing publication sequences.
- Sekara et al. argue that homonym errors should be lower because the comparison is restricted to the same journal, so a collision would require two different people with the same formatted name in the same field and venue.
- This method is intentionally simpler than global author-disambiguation systems and is appropriate only when the analysis target is an author-venue trajectory.

## Caveats

- Journal scope reduces but does not eliminate homonyms among common names in large journals.
- Initial-based formatting can merge distinct people and split the same person after name changes or inconsistent transliteration.
- The approach does not use coauthors, affiliations, ORCID, references, topics, or learned similarity features.
- It should be treated as a transparent proxy, not a high-precision person identifier.

## Links

- [author name disambiguation](author_name_disambiguation.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [venue PI experience categories](../measures/venue_pi_experience_categories.md)
- [nonlast-to-last transition probability](../measures/nonlast_to_last_transition_probability.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [author-name blocking](author_name_blocking.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `journal_scoped_initial_name_disambiguation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: within-journal initial disambiguation; surname-initial venue blocking; journal-constrained author identity; venue-scoped name normalization
