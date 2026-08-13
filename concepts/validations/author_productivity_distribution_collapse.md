# Author productivity distribution collapse

## Summary

Author publication-count distributions can be compared across fields after scaling by average annual author productivity.

## Canonical Form

- Unit of analysis: author, field, annual publication count, average productivity, or rescaled productivity distribution.
- Typical representation: N/N0-scaled author productivity distribution by field.
- Mechanism, measurement, or validation target: field-normalized comparison of author output distributions.
- Empirical signature: publication-count variability across fields collapses after scaling by field-level average annual productivity.

## Uses in Science of Science

- Refines author productivity normalization by linking it to [publication rate normalized rank](../measures/publication_rate_normalized_rank.md) and [field normalized h index](../measures/field_normalized_h_index.md).
- Useful as a reusable check when [papers per author distribution](../measures/papers_per_author_distribution.md) is used in science-of-science inference.
- Creates cross-links to [author count citation normalization test](../methods/author_count_citation_normalization_test.md) so the motif is not interpreted in isolation.

## Operationalization

- Count annual papers per author by field and publication window.
- Divide each author count `N` by the field-level average `N0`.
- Compare rescaled distributions and fit the stable power-law or tail region.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) reports that publication-count variability across disciplines collapses after `N/N0` scaling and is fit across roughly two decades.
- The result extends normalization diagnostics from paper impact to author productivity.

## Caveats

- This is author-level productivity, not article-level impact.
- Author disambiguation and field assignment can dominate the apparent collapse.

## Links

- [Publication-rate normalized rank](../measures/publication_rate_normalized_rank.md)
- [Field-normalized h-index](../measures/field_normalized_h_index.md)
- [Papers-per-author distribution](../measures/papers_per_author_distribution.md)
- [Author-count citation normalization test](../methods/author_count_citation_normalization_test.md)
- [Single-publication evaluation boundary](../representations/single_publication_evaluation_boundary.md)
- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `author_productivity_distribution_collapse`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: N/N0 productivity collapse; publication-rate distribution scaling; field-normalized author output distribution
