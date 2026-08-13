# Author productivity implausibility check

## Summary

Author productivity implausibility check is a validation diagnostic that uses extreme publication rates to identify possible author-name conflation or other productivity-tail artifacts.

## Canonical Form

- Unit of analysis: author identity, publication count, observation window, source database, or productivity-tail record.
- Typical representation: top-productivity audit, plausibility threshold, name-frequency check, or manual identity review.
- Validation target: determine whether extreme author output is credible for one person.
- Empirical signature: implausibly high counts concentrate among common names, ambiguous initials, duplicate records, or large-team artifacts.

## Uses in Science of Science

- Provides a downstream plausibility layer for [coauthorship name-resolution bounds](coauthorship_name_resolution_bounds.md).
- Connects [homonym and synonym author errors](homonym_synonym_author_errors.md) to observed productivity tails.
- Validates [papers-per-author distribution](../measures/papers_per_author_distribution.md).
- Complements [paper-version duplicate productivity bias](paper_version_duplicate_productivity_bias.md) and [team-output full-credit inflation](team_output_full_credit_inflation.md).

## Operationalization

- Sort authors by publication count within a fixed time window.
- Flag records above a plausible productivity threshold for manual review or stronger disambiguation.
- Inspect name commonness, affiliation consistency, coauthor overlap, source duplication, and large-team participation.
- Recompute productivity distributions after resolving flagged cases.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) inspects extreme MEDLINE author productivity and notes the risk that common names conflate multiple people.
- Newman treats exceptionally high publication counts over a short window as suspicious enough to examine.
- This motif is distinct from a disambiguation method because it is a diagnostic on the resulting productivity distribution.
- It is useful for catching downstream artifacts even when the original name-resolution procedure is fixed.

## Caveats

- Some extreme productivity is real, especially in large collaborations or clinical trial groups.
- A plausibility threshold should be field-specific and time-window-specific.
- Manual checks can be labor intensive and may not scale to full-corpus correction.

## Links

- [coauthorship name-resolution bounds](coauthorship_name_resolution_bounds.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [papers-per-author distribution](../measures/papers_per_author_distribution.md)
- [paper-version duplicate productivity bias](paper_version_duplicate_productivity_bias.md)
- [team-output full-credit inflation](team_output_full_credit_inflation.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; SciSciNet: W2025572017; WoS: unknown]

## Metadata

- Concept ID: `author_productivity_implausibility_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `W2025572017`
- Aliases: extreme productivity sanity check; author output implausibility audit; productivity-tail identity check; publication-rate plausibility check
