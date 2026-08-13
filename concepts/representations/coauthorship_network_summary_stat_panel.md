# Coauthorship network summary-stat panel

## Summary

Coauthorship network summary-stat panel is a compact cross-field comparison table bundling author counts, paper counts, productivity, team size, collaborator counts, component size, distances, clustering, and assortativity.

## Canonical Form

- Unit of analysis: field coauthorship network, source-domain panel, summary statistic, or comparison table.
- Typical representation: multi-row network-statistics panel with one column per field or source.
- Representation target: make collaboration-network differences scannable across fields.
- Empirical signature: fields can be compared on several structural dimensions rather than one headline statistic.

## Uses in Science of Science

- Summarizes [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md).
- Provides a field-specific indicator bundle linked to [field-specific indicator suites](../methods/field_specific_indicator_suites.md).
- Integrates measures such as [collaboration assortativity](../measures/collaboration_assortativity.md), clustering, path length, and component size.
- Offers context for [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md).

## Operationalization

- Define comparable source-domain panels and time windows.
- Compute a fixed set of network and productivity statistics for each field.
- Present values in a compact table with clear definitions.
- Pair the panel with source-coverage and denominator caveats.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) introduces a summary table for three coauthorship networks.
- The table includes author counts, paper counts, papers per author, authors per paper, average collaborators, largest component, average and largest distance, clustering, and assortativity.
- The conclusion uses the panel to identify similarities and differences across biomedical research, physics, and mathematics.

## Caveats

- Summary panels can hide within-field heterogeneity.
- Statistics are only comparable when source coverage, time windows, and author disambiguation are documented.
- A field can differ by mechanism even when summary statistics look similar.

## Links

- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [field-specific indicator suites](../methods/field_specific_indicator_suites.md)
- [collaboration assortativity](../measures/collaboration_assortativity.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; SciSciNet: W2097777089; WoS: unknown]

## Metadata

- Concept ID: `coauthorship_network_summary_stat_panel`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: coauthorship statistics panel; collaboration network comparison table; field network summary panel
