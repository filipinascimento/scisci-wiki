# Transparent metric construction

## Summary

Transparent metric construction documents data collection, database construction, indicator formulas, analytical choices, and provider assumptions before metrics are used in evaluation.

## Canonical Form

- Unit of analysis: metric, database, provider, indicator report, evaluation system, or analytical protocol.
- Typical representation: published methodology, reproducible protocol, formula specification, audit trail, or open evaluation-data documentation.
- Method target: make indicator production inspectable and contestable.
- Empirical signature: users can trace a metric from source records through inclusion rules, cleaning, normalization, and aggregation.

## Uses in Science of Science

- Provides the governance layer for [citation impact indicators](../measures/citation_impact_indicators.md), [altmetric composite scores](../measures/altmetric_composite_scores.md), and [author citation composite indicators](../measures/author_citation_composite_indicator.md).
- Extends [research-ready table curation](research_ready_table_curation.md) into evaluation practice.
- Helps prevent black-box ranking systems from becoming unchallengeable policy instruments.
- Becomes more important under [metric platform proliferation](../mechanisms/metric_platform_proliferation.md), because users may inherit opaque provider assumptions through dashboards.
- Supports [responsible metrics](../measures/responsible_metrics.md) by making metric construction auditable.
- Supports [evaluation-contestation access gap](../validations/evaluation_contestation_access_gap.md) by making methodological evidence available to assessed researchers.

## Operationalization

- Publish the source databases, inclusion rules, deduplication choices, formulas, normalization rules, and aggregation procedures.
- Keep metric definitions simple enough to audit while preserving the complexity needed for valid interpretation.
- Record provider, snapshot date, source coverage, and formula version.
- Publish ranking outputs, algorithms, method notes, pseudocode, visualizations, and maps when a metric system is intended for community inspection.
- Require commercial and institutional providers to expose enough methodology for independent scrutiny.

## Evidence and Validations

- Verified full-text evidence from Hicks et al. (2015) says data collection and analytical processes should be open, transparent, and simple.
- Hicks et al. argue that evaluation databases should follow clearly stated rules set before the evaluated research has been completed.
- The article contrasts transparent published protocols with black-box evaluation machines and argues that commercial entrants should be held to the same standards.
- Hicks et al. also warn that simplicity can improve transparency but simplistic metrics can distort the research record.
- Verified full-text evidence from West, Bergstrom, and Bergstrom (2010) reports that the Eigenfactor Project exposes rankings, algorithms, visual tools, maps, and a detailed mathematical method description, making the metric artifact bundle inspectable.

## Caveats

- Transparency does not guarantee validity; a fully documented bad metric can still be harmful.
- Proprietary systems may expose partial documentation while hiding matching, weighting, or cleaning details.
- Excessive simplification can make a metric easier to understand but less faithful to the evaluation target.

## Links

- [responsible metrics](../measures/responsible_metrics.md)
- [research-ready table curation](research_ready_table_curation.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [bibliometric data access modes](bibliometric_data_access_modes.md)
- [metric platform proliferation](../mechanisms/metric_platform_proliferation.md)
- [citation data census dates](citation_data_census_dates.md)
- [indicator false precision](../validations/indicator_false_precision.md)
- [evaluated-party data verification](../validations/evaluated_party_data_verification.md)
- [normalized citation aggregation choice](normalized_citation_aggregation_choice.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [evaluation-contestation access gap](../validations/evaluation_contestation_access_gap.md)
- [science maps](../representations/science_maps.md)

## References

- Hicks, D., Wouters, P., Waltman, L., de Rijcke, S., & Rafols, I. (2015). Bibliometrics: The Leiden Manifesto for research metrics. *Nature*, 520, 429-431. https://doi.org/10.1038/520429a [OpenAlex: W2068452509; Dimensions: pub.1033957063; WoS: unknown]
- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `transparent_metric_construction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: Hicks et al. (2015) (2015)
- Primary reference DOI: `10.1038/520429a`
- OpenAlex ID: `W2068452509`
- Dimensions ID: `pub.1033957063`
- SciSciNet ID: `W2068452509`
- Aliases: transparent indicators; open metric methodology; metric audit trail; black-box metric avoidance
