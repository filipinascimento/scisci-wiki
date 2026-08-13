# Standardized author citation database

## Summary

Standardized author citation database is a public author-level bibliometric table that combines citation indicators, self-citation variants, field annotations, and percentile context into reusable evaluation infrastructure.

## Canonical Form

- Unit of analysis: author profile, citation record, field, subfield, career-long impact window, or single-year impact window.
- Typical representation: author rows with component citation metrics, composite indicators, field/subfield labels, self-citation-included and self-citation-excluded variants, and rank or percentile columns.
- Measurement target: transparent author-level citation impact and its sensitivity to field, career length, coauthorship, author position, and self-citation.
- Empirical signature: the same author can be inspected through raw components, normalized composites, field-relative percentiles, and anomaly diagnostics rather than one citation count.

## Uses in Science of Science

- Provides a concrete dataset template for [author citation composite indicator](../measures/author_citation_composite_indicator.md), [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md), and [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md).
- Makes author-role components explicit through [author-position citation components](../measures/author_position_citation_components.md).
- Separates raw citation indicators from [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md) and [citation source concentration ratio](../measures/citation_source_concentration_ratio.md).
- Gives [responsible metrics](../measures/responsible_metrics.md) users a more inspectable alternative to private or self-reported CV citation counts.
- Depends on [Scopus](scopus.md) coverage and [author name disambiguation](../methods/author_name_disambiguation.md), so it needs source-specific data-quality audits.
- Requires guardrails for [Scopus pre-1996 citation truncation](../validations/scopus_pre_1996_citation_truncation.md), [author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md), and [early-career author metric sparsity](../validations/early_career_author_metric_sparsity.md).
- Splits release and denominator infrastructure into [spreadsheet-first metric release](../methods/spreadsheet_first_metric_release.md), [minimum-paper author universe](../methods/minimum_paper_author_universe.md), and [author metric update rank persistence](../validations/author_metric_update_rank_persistence.md).
- Adds implementation guardrails for [sufficient author ranking depth](../methods/sufficient_author_ranking_depth.md), [author primary-field share annotation](../methods/author_primary_field_share_annotation.md), [raw cross-field author comparison caveat](../validations/raw_cross_field_author_comparison_caveat.md), and [source-record correction pathway](../validations/source_record_correction_pathway.md).

- A residual Ioannidis pass adds [CV citation-claim accuracy audit](../validations/cv_citation_claim_accuracy_audit.md), [public author-profile adoption bias](../validations/public_author_profile_adoption_bias.md), [field citation-density reference table](../representations/field_citation_density_reference_table.md), [author reference-set granularity sensitivity](../validations/author_reference_set_granularity_sensitivity.md), [unassigned author field-classification boundary](../validations/unassigned_author_field_classification_boundary.md), [source-repository provider coupling disclosure](../validations/source_repository_provider_coupling_disclosure.md), [author-metric formula-constant disclosure](../methods/author_metric_formula_constant_disclosure.md), [author-metric group aggregation use case](../methods/author_metric_group_aggregation_use_case.md), [author database linkage extension](../methods/author_database_linkage_extension.md), and [citation-indicator frame mismatch misuse](../validations/citation_indicator_frame_mismatch_misuse.md).
## Operationalization

- Select an author universe from a citation database and an author-disambiguation layer.
- Compute component citation indicators for each author, including total citations, h-index, coauthorship-adjusted hm-index, and author-position-sensitive citation counts.
- Publish career-long and single-year snapshots so long-run accumulated impact and recent citation performance can be inspected separately.
- Report each metric with and without self-citations and include citations-per-citing-paper diagnostics.
- Attach field and subfield labels plus field-relative ranks or percentiles so users can compare authors within closer reference sets.
- Publish files in a downloadable format and document snapshot dates, minimum-paper thresholds, and update comparisons.
- Document ranking depth, primary-field share annotation, and the source-record correction route so downstream users can separate data infrastructure from evaluative rank claims.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) describes a public database of the 100,000 most-cited scientists, standardized across six citation metrics and annotated with scientific field.
- The database includes career-long and single-year indicators, with and without self-citations, plus the ratio of total citations to citing papers.
- Ioannidis et al. classify scientists into 22 fields and 176 subfields and provide field/subfield percentile context for all Scopus authors with at least five papers.
- The authors position the database as a response to unstandardized citation reporting, incomplete Google Scholar profiles, inconsistent self-citation handling, and weak cross-field comparability.
- The same paper documents source limitations, including Scopus coverage, author-profile disambiguation errors, affiliation simplification, and missing pre-1996 citation records.
- A later Ioannidis pass separates ranking-depth, primary-field share, raw cross-field comparison, and source-record correction motifs from the broader standardized database page.

## Caveats

- A standardized author table is still not a quality ranking.
- Scopus coverage, author disambiguation, field classification, and citation-window choices remain consequential.
- Career-long snapshots disadvantage younger scientists, while single-year snapshots remain partly dependent on accumulated publication stock.
- Public indicators can be misused if component values, field context, and anomaly flags are ignored.
- Downloadable tables still require version, denominator, and anomaly-review metadata.

## Links

- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [career-long and single-year author impact](../measures/career_long_single_year_author_impact.md)
- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [author-position citation components](../measures/author_position_citation_components.md)
- [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md)
- [citation source concentration ratio](../measures/citation_source_concentration_ratio.md)
- [Scopus](scopus.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [Scopus author profile disambiguation audit](../validations/scopus_author_profile_disambiguation_audit.md)
- [composite indicator replication stability](../validations/composite_indicator_replication_stability.md)
- [Scopus pre-1996 citation truncation](../validations/scopus_pre_1996_citation_truncation.md)
- [author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md)
- [early-career author metric sparsity](../validations/early_career_author_metric_sparsity.md)
- [minimum-paper author universe](../methods/minimum_paper_author_universe.md)
- [spreadsheet-first metric release](../methods/spreadsheet_first_metric_release.md)
- [author metric update rank persistence](../validations/author_metric_update_rank_persistence.md)
- [composite component correlation caveat](../validations/composite_component_correlation_caveat.md)
- [citation farm case review](../validations/citation_farm_case_review.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [sufficient author ranking depth](../methods/sufficient_author_ranking_depth.md)
- [author primary-field share annotation](../methods/author_primary_field_share_annotation.md)
- [raw cross-field author comparison caveat](../validations/raw_cross_field_author_comparison_caveat.md)
- [source-record correction pathway](../validations/source_record_correction_pathway.md)

- [CV citation-claim accuracy audit](../validations/cv_citation_claim_accuracy_audit.md)
- [field citation-density reference table](../representations/field_citation_density_reference_table.md)
- [citation-indicator frame mismatch misuse](../validations/citation_indicator_frame_mismatch_misuse.md)
## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `standardized_author_citation_database`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: standardized citation metrics author database; author citation database; top-cited scientist database; Scopus author citation table
