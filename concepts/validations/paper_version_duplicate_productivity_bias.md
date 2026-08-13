# Paper-version duplicate productivity bias

## Summary

Paper-version duplicate productivity bias is the validation problem that mixed preprint and published-paper sources can double-count the same scholarly work and inflate papers-per-author measures.

## Canonical Form

- Unit of analysis: author, paper version, preprint, published article, bibliographic source, or productivity distribution.
- Typical representation: duplicate-version audit, source-overlap check, or productivity-tail sensitivity analysis.
- Validation target: determine whether author productivity counts reflect distinct works rather than multiple records for the same work.
- Empirical signature: unusually high papers-per-author counts decline after preprint-published version deduplication.

## Uses in Science of Science

- Extends [bibliographic source-maintenance regime](bibliographic_source_maintenance_regime.md) with a version-duplication bias.
- Validates [papers-per-author distribution](../measures/papers_per_author_distribution.md) before interpreting productivity tails.
- Connects to [preprint social-trace equivalence](preprint_social_trace_equivalence.md), where preprints and published papers may represent related but nonidentical traces.
- Helps clean coauthorship-network panels before productivity or degree distributions are modeled.

## Operationalization

- Identify records likely to be versions of the same work using DOI, title, arXiv/preprint ID, authors, venue, and date.
- Recompute papers-per-author distributions before and after version consolidation.
- Report source-specific duplication risks, especially for repositories that index both preprints and journal publications.
- Preserve version links when the research question needs preprint and publication events separately.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) notes that SPIRES can include both preprints and published papers.
- Newman raises this duplication as a possible explanation for high papers-per-author values in the physics collaboration data.
- This motif is distinct from generic source maintenance because it targets productivity inflation from duplicate versions.
- It is also distinct from author-name disambiguation because the problem can occur even when the author identity is correct.

## Caveats

- Deduplicating versions can erase meaningful temporal events when preprint posting is itself the object of study.
- Version matching can create false merges when titles or author lists are similar.
- The bias is source-specific and should not be assumed equal across repositories.

## Links

- [bibliographic source-maintenance regime](bibliographic_source_maintenance_regime.md)
- [papers-per-author distribution](../measures/papers_per_author_distribution.md)
- [preprint social-trace equivalence](preprint_social_trace_equivalence.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [author productivity implausibility check](author_productivity_implausibility_check.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; SciSciNet: W2025572017; WoS: unknown]

## Metadata

- Concept ID: `paper_version_duplicate_productivity_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `W2025572017`
- Aliases: preprint publication duplicate bias; version duplicate productivity inflation; duplicate paper-version productivity bias; preprint-published double count
