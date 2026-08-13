# Composite indicator replication stability

## Summary

Composite indicator replication stability checks whether a bibliometric indicator can be recomputed on an independent platform, timestamp, or extraction with nearly identical results.

## Canonical Form

- Unit of analysis: author, indicator, database snapshot, computation pipeline, or replication run.
- Typical representation: correlation between replicated indicators, rank agreement, record-count agreement, or discrepancy audit.
- Validation target: computational and data-extraction stability of a composite indicator.
- Empirical signature: repeated computations produce highly correlated scores and similar component counts, with residual differences documented.

## Uses in Science of Science

- Provides reproducibility evidence for [author citation composite indicator](../measures/author_citation_composite_indicator.md).
- Validates the computational layer of a [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Complements [research-ready table curation](../methods/research_ready_table_curation.md) and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Helps [responsible metrics](../measures/responsible_metrics.md) distinguish reproducible computation from construct validity.
- Applies to other [citation impact indicators](../measures/citation_impact_indicators.md) whenever rankings depend on multi-component formulas.
- Pairs with [author metric update rank persistence](author_metric_update_rank_persistence.md), which checks stability across annual source snapshots.
- Still requires [composite component correlation caveat](composite_component_correlation_caveat.md) when stable components are not independent.

## Operationalization

- Define the indicator formula and component inputs explicitly.
- Recompute the indicator from an independent platform, extraction timestamp, or implementation.
- Match the replicated records and calculate correlations or rank-agreement statistics for the full relevant universe.
- Audit records with large discrepancies for data, identifier, author-disambiguation, or implementation errors.
- Report replication stability separately from theoretical validity or fairness.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) reports recalculating the author composite indicator on a second independent platform and timestamp.
- For the top 1,000,000 authors, the replicated composite indicator has correlation 0.983 with the original calculation.
- The replicated number of papers has correlation 0.991 with the original calculation.
- Ioannidis et al. use this check to support the stability of the database construction, while still documenting remaining source and disambiguation caveats.

## Caveats

- High replication correlation validates the computation more than the construct being measured.
- Correlation can hide rank changes for specific authors, especially near decision thresholds.
- Replication stability depends on matching records consistently across snapshots.
- Stable indicators can still be biased by coverage, field classification, self-citation, or evaluation misuse.

## Links

- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md)
- [author metric update rank persistence](author_metric_update_rank_persistence.md)
- [composite component correlation caveat](composite_component_correlation_caveat.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `composite_indicator_replication_stability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: indicator replication check; composite-score reproducibility; bibliometric indicator stability; independent-platform metric replication
