# Collaboration fixed time window

## Summary

A collaboration fixed time window constructs coauthorship networks from a bounded publication interval so cross-field comparisons are made over the same observation period and the network can be treated as roughly static.

## Canonical Form

- Unit of analysis: publication window, source-domain panel, paper, author, edge, or field.
- Typical representation: five-year source panel, rolling-window graph, cumulative snapshot, or cross-field comparison table.
- Method target: control temporal exposure and source completeness when comparing collaboration networks.
- Empirical signature: all domains use the same start and end dates, with caveats for source coverage and field turnover.

## Uses in Science of Science

- Provides a time-bounding step for [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md).
- Complements [time-resolved coauthorship reconstruction](time_resolved_coauthorship_reconstruction.md) by defining static windows before dynamic comparisons.
- Creates distributional interpretation issues such as [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md).
- Helps compare [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md), [collaborator-count distribution](../measures/collaborator_count_distribution.md), and [collaboration giant component](../measures/collaboration_giant_component.md) across fields.
- Makes [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md) visible when older source records are less complete.

## Operationalization

- Choose a common publication interval for all source-domain panels.
- Exclude records outside the interval before constructing author-author edges.
- Use the same window for papers, author counts, component measures, clustering, and collaborator counts.
- Report why the chosen window is long enough to observe collaboration but short enough to avoid major structural change.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) constructs collaboration networks for 1995 through 1999 even though longer source histories were available.
- Newman gives three reasons for the five-year window: older data were less complete, the same period enabled field comparisons, and networks change over time as people enter or leave and collaboration practices change.
- The paper treats a short bounded interval as a way to approximate a static collaboration network for descriptive network statistics.

## Caveats

- Short windows undercount rare collaborators and long career ties.
- Long windows mix different collaboration regimes, source coverage states, and career cohorts.
- Fixed windows do not eliminate source-specific coverage differences.

## Links

- [time-resolved coauthorship reconstruction](time_resolved_coauthorship_reconstruction.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [collaboration source coverage bias](../validations/collaboration_source_coverage_bias.md)
- [finite-window tail cutoff](../validations/finite_window_tail_cutoff.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]

## Metadata

- Concept ID: `collaboration_fixed_time_window`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: fixed coauthorship window; five-year collaboration window; bounded collaboration snapshot; static collaboration window
