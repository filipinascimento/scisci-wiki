# Author citation composite indicator

## Summary

Author citation composite indicator combines multiple author-level citation metrics into a single standardized score, usually to reduce dependence on one scalar such as total citations or h-index.

## Canonical Form

- Unit of analysis: author, author-year, field, subfield, career-long citation record, or single-year citation record.
- Typical representation: composite score from normalized log-scaled components, field annotation, rank, and raw component metrics.
- Measurement target: author-level citation impact across productivity, coauthorship-adjusted impact, and author-position-sensitive impact.
- Empirical signature: rankings change when total citations, h-index, coauthorship adjustment, and single/first/last-author citations are combined.

## Uses in Science of Science

- Extends [citation impact indicators](citation_impact_indicators.md) from papers and journals to author-level profiles.
- Provides an alternative baseline to [h-index](h_index.md), while retaining h-index as one component.
- Can be audited against h-index subcomponents such as [h-core publication set](../representations/h_core_publication_set.md), [m-quotient](m_quotient.md), and [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md).
- Connects citation evaluation to [collective credit allocation](collective_credit_allocation.md), [lead-role ratio](lead_role_ratio.md), and [self-citation rates](self_citation_rates.md).
- Splits into supporting motifs for [author-position citation components](author_position_citation_components.md), [career-long and single-year author impact](career_long_single_year_author_impact.md), [field-subfield author percentile ranks](field_subfield_author_percentile_ranks.md), and [self-citation-excluded author metrics](self_citation_excluded_author_metrics.md).
- Requires [responsible metrics](responsible_metrics.md) guardrails because a composite score can hide choices about weighting, fields, and author roles.
- Requires a [composite component correlation caveat](../validations/composite_component_correlation_caveat.md) because transparent components may still be statistically redundant.

## Operationalization

- Choose a citation database and author-disambiguation layer.
- Compute component metrics such as total citations, h-index, coauthorship-adjusted hm-index, citations to single-author papers, citations to single-or-first-author papers, and citations to single/first/last-author papers.
- Normalize and log-scale each component before summing or combining.
- Provide self-citation-included and self-citation-excluded versions.
- Expose component values alongside the composite so users can inspect which dimension drives the score.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) builds a database of the 100,000 most-cited authors using a composite indicator based on six citation metrics.
- The six components are total citations, h-index, coauthorship-adjusted hm-index, citations to single-author papers, citations to single-or-first-author papers, and citations to single/first/last-author papers.
- Ioannidis et al. provide both career-long and single-year versions, with indicators shown with and without self-citations.
- The paper gives the composite formula using log-scaled normalized components and notes that users may prefer inspecting components separately.
- The database includes field and subfield annotations to support like-with-like author comparisons.
- Ioannidis et al. also report an independent-platform replication check, making [composite indicator replication stability](../validations/composite_indicator_replication_stability.md) an explicit validation motif for the calculation pipeline.

## Caveats

- Composite indicators can obscure disagreement between components.
- Correlated components can make one underlying citation dimension count multiple times.
- Author rankings remain sensitive to database coverage, author disambiguation, field classification, career length, and self-citation.
- Component weighting is normative even when the formula is transparent.
- Composite author scores should not replace qualitative review or contribution-aware evaluation.

## Links

- [citation impact indicators](citation_impact_indicators.md)
- [h-index](h_index.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [m-quotient](m_quotient.md)
- [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md)
- [self-citation rates](self_citation_rates.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [career-long and single-year author impact](career_long_single_year_author_impact.md)
- [field-subfield author percentile ranks](field_subfield_author_percentile_ranks.md)
- [author-position citation components](author_position_citation_components.md)
- [self-citation-excluded author metrics](self_citation_excluded_author_metrics.md)
- [citation source concentration ratio](citation_source_concentration_ratio.md)
- [composite indicator replication stability](../validations/composite_indicator_replication_stability.md)
- [composite component correlation caveat](../validations/composite_component_correlation_caveat.md)
- [Scopus author profile disambiguation audit](../validations/scopus_author_profile_disambiguation_audit.md)
- [collective credit allocation](collective_credit_allocation.md)
- [lead-role ratio](lead_role_ratio.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [responsible metrics](responsible_metrics.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `author_citation_composite_indicator`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: author composite citation score; standardized author citation indicator; c indicator; composite author impact metric
