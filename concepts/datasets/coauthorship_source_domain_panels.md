# Coauthorship source-domain panels

## Summary

Coauthorship source-domain panels are field-specific bibliographic corpora used to construct comparable collaboration networks across domains, such as biomedical research, physics preprints, and mathematics.

## Canonical Form

- Unit of analysis: bibliographic source, field panel, author, paper, coauthorship tie, time window, or domain-specific collaboration network.
- Typical representation: separate author-author networks built from source-specific publication records.
- Data target: compare collaboration patterns across fields without treating one source or journal as representative of all science.
- Empirical signature: domain panels differ in size, author counts, team size, clustering, path length, and source coverage.

## Uses in Science of Science

- Provides the data layer for [coauthorship networks](../representations/coauthorship_networks.md), [coauthorship affiliation projection](../methods/coauthorship_affiliation_projection.md), [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md), and [collaboration path length](../measures/collaboration_path_length.md).
- Supports cross-field comparisons of [collaborator-count distribution](../measures/collaborator_count_distribution.md), [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md), [collaboration assortativity](../measures/collaboration_assortativity.md), and [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md).
- Motivates [single-journal coauthorship coverage bias](../validations/single_journal_coauthorship_coverage_bias.md) when collaboration networks are built from narrow source sets.
- Enables [time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md) when publication or submission dates are preserved, and [collaboration fixed time windows](../methods/collaboration_fixed_time_window.md) when cross-field comparison is the target.

## Operationalization

- Select source-domain panels with broad coverage for the target field or source system.
- Extract paper-author records, publication dates, and source identifiers.
- Disambiguate authors as far as the source permits, or record ambiguity when author identity resolution is incomplete.
- Build separate coauthorship graphs by source-domain panel before comparing aggregate network statistics.
- Report source coverage, time window, source-maintenance rules, and omissions.
- Compare source-domain statistics with [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md) before treating a pooled coauthorship graph as representative.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) constructs source-domain collaboration networks from four databases: Medline, the Los Alamos e-Print Archive, SPIRES, and NCSTRL.
- Newman (2001) fixes the main comparison window at 1995-1999 to reduce age-related incompleteness and make collaboration patterns comparable across databases.
- The same full text motivates source-specific coverage audits: Medline is professionally maintained, SPIRES covers high-energy physics, and NCSTRL depends on participating institutions, making [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md) a direct caveat.
- Verified full-text evidence from Newman (2004) constructs three coauthorship networks: Medline biomedical papers from 1995 to 1999, Physics E-print Archive papers from 1995 to 1999, and a Mathematical Reviews collaboration network from 1940 onward.
- Newman describes Medline as a compendious biomedical source, the physics preprint archive as timely but less complete than professionally maintained databases, and Mathematical Reviews as especially complete and accurate for mathematics.
- The paper reports that the biomedical network is the largest of the three, with about 1.5 million authors over a five-year period, and emphasizes that biology differs strongly from physics and mathematics in manpower and collaboration scale.
- Newman also states that the studied databases are more complete than a single-journal source, while not claiming that they document every paper.

## Caveats

- Source-domain panels inherit database selection, field coverage, [author-name bounds](../validations/coauthorship_name_resolution_bounds.md), and time-window biases.
- Cross-field comparisons can confound source design with real field differences.
- Older source panels may be stale for current collaboration structure and should be refreshed with updated sources such as Dimensions or OpenAlex where possible.
- A source-domain panel is not a full scholarly data lake; it should be documented as a bounded corpus.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md)
- [collaboration fixed time window](../methods/collaboration_fixed_time_window.md)
- [coauthorship affiliation projection](../methods/coauthorship_affiliation_projection.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [coauthorship-citation network distinction](../representations/coauthorship_citation_network_distinction.md)
- [single-journal coauthorship coverage bias](../validations/single_journal_coauthorship_coverage_bias.md)
- [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md)
- [coauthorship name-resolution bounds](../validations/coauthorship_name_resolution_bounds.md)
- [collaboration strength distribution](../measures/collaboration_strength_distribution.md)
- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_source_domain_panels`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: field-specific coauthorship panels; collaboration source panels; Medline Los Alamos SPIRES NCSTRL networks; source-domain collaboration corpora
