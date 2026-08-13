# Single-journal coauthorship coverage bias

## Summary

Single-journal coauthorship coverage bias is the risk that a collaboration network built from one journal captures only a fragment of authors' collaboration patterns because most researchers publish across multiple venues.

## Canonical Form

- Unit of analysis: journal source, author, paper, coauthorship edge, source-domain panel, or collaboration-network sample.
- Typical representation: single-journal network compared with broader field databases or multi-source panels.
- Validation target: whether the source corpus is broad enough to support claims about field-level collaboration structure.
- Empirical signature: a single-journal network omits many papers and coauthors, making author degree, components, clustering, path length, and tie strength incomplete.

## Uses in Science of Science

- Provides a source-coverage guardrail for [coauthorship networks](../representations/coauthorship_networks.md).
- Motivates [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md) and broader sources such as Dimensions or OpenAlex for current studies.
- Extends [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) from citations to collaboration-network construction.
- Helps validate [collaboration strength distribution](../measures/collaboration_strength_distribution.md), [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md), and [collaboration path length](../measures/collaboration_path_length.md) before comparing fields or institutions.

## Operationalization

- Record whether the coauthorship corpus comes from one journal, a field database, a preprint archive, a general index, or a merged source set.
- Compare author, paper, edge, and component coverage against broader source-domain panels when possible.
- Test whether key measures such as degree, component size, clustering, and centrality are stable under source expansion.
- Avoid treating a single-journal network as a field-level collaboration map unless the journal is the intended population.
- Report venue selection rules and missing-source limitations.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) notes that a PNAS-only paper database could be used to construct a coauthorship network, but that such a network would be less satisfactory for studying collaboration patterns than broader sources.
- Newman explains the reason directly: most authors publish in more than one journal, so a single-journal source gives an incomplete picture of authorship patterns.
- The same text contrasts the single-journal risk with the broader Medline, Physics E-print Archive, and Mathematical Reviews networks used in the study, while still noting that those broader databases do not document every paper.

## Caveats

- Single-journal networks can be valid when the research question is explicitly about that journal or venue.
- Broader sources have their own coverage, author-disambiguation, and field-classification biases.
- Journal-level coverage bias can interact with language, discipline, publication type, open-access status, and indexing policies.
- Source breadth should be matched to the claim: venue-level, field-level, national, or global.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [collaboration strength distribution](../measures/collaboration_strength_distribution.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [Web of Science](../datasets/web_of_science.md)
- [Dimensions](../datasets/dimensions.md)
- [OpenAlex](../datasets/openalex.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `single_journal_coauthorship_coverage_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: single-journal collaboration bias; venue-limited coauthorship bias; journal-source coauthorship coverage; incomplete authorship-pattern coverage
