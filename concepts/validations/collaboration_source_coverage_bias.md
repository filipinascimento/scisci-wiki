# Collaboration source coverage bias

## Summary

Collaboration source coverage bias is the validation problem that coauthorship-network statistics depend on which bibliographic sources, institutions, fields, and time periods are covered by the underlying database.

## Canonical Form

- Unit of analysis: source database, field panel, participating institution, publication window, author, paper, or connected component.
- Typical representation: source-coverage audit, missing-source caveat, component-size sensitivity, or cross-source comparison table.
- Validation target: distinguish real collaboration structure from source inclusion, maintenance, and coverage artifacts.
- Empirical signature: undercovered sources produce smaller connected components, missing authors, altered collaborator counts, or apparent field differences.

## Uses in Science of Science

- Extends [single-journal coauthorship coverage bias](single_journal_coauthorship_coverage_bias.md) from narrow journals to source databases and field repositories.
- Supports careful interpretation of [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md).
- Connects [collaboration fixed time windows](../methods/collaboration_fixed_time_window.md) to source age, because older records can be less complete.
- Helps decide when recent analyses should prefer current [Dimensions](../datasets/dimensions.md) or [OpenAlex](../datasets/openalex.md) metadata over stale source panels.

## Operationalization

- Document source scope, maintenance process, submission model, and known omissions.
- Compare component size, author counts, and collaborator counts across overlapping sources where possible.
- Report whether low connectedness may reflect source coverage rather than social fragmentation.
- Re-run critical analyses with fresher or broader data sources when available.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) notes that Los Alamos Archive and NCSTRL coverage is relatively poor before 1995, motivating a fixed 1995-1999 window.
- Newman explains that high-energy theory and computer science had smaller giant-component shares, and suggests that source coverage is a possible explanation.
- The paper specifically notes that NCSTRL depends on participating institutions, so papers from nonparticipating institutions are mostly excluded.
- This makes source coverage a direct interpretation caveat for component size and field comparison, not only a data-cleaning detail.

## Caveats

- Source coverage and true field structure can be hard to separate without external validation.
- Repository use differs by field, so preprint-based panels may capture adoption of the platform as much as collaboration.
- Broad current data sources still have DOI, affiliation, author-disambiguation, language, and document-type biases.

## Links

- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [single-journal coauthorship coverage bias](single_journal_coauthorship_coverage_bias.md)
- [collaboration fixed time window](../methods/collaboration_fixed_time_window.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [coauthorship name-resolution bounds](coauthorship_name_resolution_bounds.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Dimensions](../datasets/dimensions.md)
- [OpenAlex](../datasets/openalex.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]

## Metadata

- Concept ID: `collaboration_source_coverage_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: coauthorship source bias; collaboration database coverage; source-domain coverage caveat; repository coverage bias
