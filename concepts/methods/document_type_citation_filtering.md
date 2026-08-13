# Document-type citation filtering

## Summary

Document-type citation filtering restricts citation-normalization analyses to comparable publication types so reviews, editorials, comments, letters, articles, and other records do not distort reference-set baselines.

## Canonical Form

- Unit of analysis: bibliographic record, document type, field-year reference set, citation distribution, or evaluation denominator.
- Typical representation: inclusion list, exclusion list, document-type-specific baseline, or sensitivity table.
- Method target: keep citation distributions and expected citation counts comparable within a normalization workflow.
- Empirical signature: citation baselines change when reviews, editorials, comments, letters, or other document types are included or excluded.

## Uses in Science of Science

- Makes [reference set construction](reference_set_construction.md) reproducible for normalized citation indicators.
- Supports [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md), [relative citation performance c_f](../measures/relative_citation_performance_cf.md), [mean normalized citation score](../measures/mean_normalized_citation_score.md), and [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Helps audit denominator choices in [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md).
- Reduces field-comparison artifacts when document-type mixes differ by discipline or database.

## Operationalization

- Inspect the document-type taxonomy from the source database.
- Select comparable types for the analysis, often articles and letters, or build separate baselines by document type.
- Exclude records with uncommon or structurally different citation patterns unless they are the target of the study.
- Record whether reviews, proceedings, editorials, comments, corrections, and letters are included.
- When proceedings are central outputs, audit [conference-proceedings coverage gap](../validations/conference_proceedings_coverage_gap.md) and [conference/journal double counting](../validations/conference_journal_double_counting.md) before applying a simple exclusion rule.
- Run sensitivity checks when document-type labels are noisy or central to the outcome.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) uses Web of Science records but restricts the analysis to records classified as articles and letters.
- The paper explicitly excludes reviews, editorials, comments, and other published material likely to have uncommon citation patterns.
- This filtering supports their claim that field-year c_f comparisons are based on comparable single-publication citation distributions.
- The same methods section notes that citation distributions are built from Journal Citation Reports subject categories, making document-type filtering one part of the reference-set definition.

## Caveats

- Database document-type labels can be inconsistent across fields and years.
- Letters and articles may not be comparable in all domains.
- Excluding reviews can be appropriate for paper-impact normalization but inappropriate when review influence is the research target.

## Links

- [reference set construction](reference_set_construction.md)
- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [cited-side normalization](cited_side_normalization.md)
- [citable-item denominator ambiguity](../validations/citable_item_denominator_ambiguity.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [conference-proceedings coverage gap](../validations/conference_proceedings_coverage_gap.md)
- [conference/journal double counting](../validations/conference_journal_double_counting.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [log-binned citation distribution estimator](log_binned_citation_distribution_estimator.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `document_type_citation_filtering`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: document-type filtering; article-letter filter; citation denominator document types; publication-type normalization
