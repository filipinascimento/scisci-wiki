# Self-Citation Name-Collision Monte Carlo Check

## Summary

Self-citation name-collision Monte Carlo check estimates how often name-string self-citation removal falsely removes citations between different people who share the same author name.

## Canonical Form

- Unit of analysis: citing-cited author-name pair, matched author string, simulated name collision, or self-citation removal rule.
- Typical representation: random matching simulation, false-removal estimate, name-collision probability, or robustness bound.
- Validation target: test whether name-based self-citation filtering overstates self-citation by conflating homonymous authors.
- Empirical signature: simulated or analytically estimated false removals are small enough that the main citation-impact comparison is not driven by name collisions.

## Uses in Science of Science

- Adds an error-mode audit to [self-citation-adjusted team impact](self_citation_adjusted_team_impact.md).
- Connects team-impact robustness to [homonym and synonym author errors](homonym_synonym_author_errors.md) and [author name disambiguation](../methods/author_name_disambiguation.md).
- Provides a lightweight validation when full author disambiguation is unavailable.
- Complements stricter matching approaches such as [full-name self-citation matching](../methods/full_name_self_citation_matching.md).

## Operationalization

- Define the self-citation removal key, such as first initial plus surname or full first and last name.
- Estimate how often unrelated authors share the same key in the source corpus.
- Simulate random citing-cited author-name pairs or use an analytical collision model to estimate false removals.
- Compare the false-removal estimate with the observed change in the focal citation metric after self-citation removal.
- Report remaining missed self-citations from synonym errors, name changes, initials, transliteration, or database inconsistencies.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) removes paper self-citations using first-initial-plus-surname author-name overlap.
- The paper explicitly notes that this procedure could remove citations between different authors who share a name.
- Wuchty et al. estimate the importance of this problem with a Monte Carlo simulation and report that such false removals appear negligible for their team-impact comparison.

## Caveats

- Name-collision rates vary by country, field, time period, and database coverage.
- A negligible false-removal estimate does not address missed self-citations caused by name changes, inconsistent initials, or split identities.
- Monte Carlo checks are only as good as the name distribution and null process used in the simulation.

## Links

- [self-citation-adjusted team impact](self_citation_adjusted_team_impact.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [full-name self-citation matching](../methods/full_name_self_citation_matching.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown; SciSciNet: W1965631677]

## Metadata

- Concept ID: `self_citation_name_collision_monte_carlo_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: self-citation false-removal simulation; name-collision self-citation audit; homonym Monte Carlo check; self-citation name-match robustness
