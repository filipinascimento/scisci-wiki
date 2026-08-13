# Authored-items denominator mismatch

## Summary

Authored-items denominator mismatch is the caveat that source databases can define paper counts, authored items, and author-paper records differently, making productivity denominators non-comparable.

## Canonical Form

- Unit of analysis: source database, paper count, authored item, author-paper pair, or collaboration panel.
- Typical validation: audit whether reported denominators count papers, authorships, or records.
- Validation target: comparability of productivity and collaboration measures across sources.
- Empirical signature: source totals cannot be interpreted as the same unit without checking denominator semantics.

## Uses in Science of Science

- Guards [papers-per-author distribution](../measures/papers_per_author_distribution.md).
- Supports [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md).
- Adds a data-semantics layer to [coauthorship networks](../representations/coauthorship_networks.md).
- Helps prevent cross-field productivity artifacts.

## Operationalization

- Identify whether a source reports papers, author-paper records, or other authored items.
- Normalize denominators before comparing productivity across fields.
- Keep source-specific notes in metadata.
- Recompute measures from raw records where possible.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) distinguishes database records and authored items when describing collaboration panels.
- The paper's source descriptions imply that totals from MEDLINE, physics archives, and Mathematical Reviews need semantic care before comparison.
- This matters for productivity measures such as papers per author and field collaboration rates.

## Caveats

- Source documentation can be incomplete or historically inconsistent.
- Denominator harmonization may require raw records unavailable to downstream users.
- Comparable denominators do not solve author disambiguation errors.

## Links

- [papers-per-author distribution](../measures/papers_per_author_distribution.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration source coverage bias](collaboration_source_coverage_bias.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; SciSciNet: W2097777089; WoS: unknown]

## Metadata

- Concept ID: `authored_items_denominator_mismatch`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: authored-item denominator caveat; paper-count denominator mismatch; author-paper denominator semantics
