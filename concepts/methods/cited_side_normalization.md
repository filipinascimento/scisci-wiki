# Cited-side normalization

## Summary

Cited-side normalization compares a focal paper's citation count with expected citation counts for similar cited papers, usually in the same field, year, and document type.

## Canonical Form

- Unit of analysis: paper, citation count, reference set, field-year-document-type cell, portfolio, or evaluation unit.
- Typical representation: observed-to-expected citation ratio, normalized citation score, mean normalized citation score, or top-percentile threshold.
- Method target: make citation impact comparable across fields, years, and document types by normalizing on the cited paper side.
- Empirical signature: citation counts are divided by or ranked against a reference set of comparable cited publications.

## Uses in Science of Science

- Provides the default normalization logic for [field normalized citation impact](../measures/field_normalized_citation_impact.md).
- Underlies [mean normalized citation score](../measures/mean_normalized_citation_score.md), [citation percentile indicators](../measures/citation_percentile_indicators.md), and [top-percentile publication share](../measures/top_percentile_publication_share.md).
- Makes [reference set construction](reference_set_construction.md), [citation window selection](citation_window_selection.md), and [field-classification sensitivity](../validations/field_classification_sensitivity.md) explicit design choices.
- Contrasts with [citing-side normalization](citing_side_normalization.md), which uses the reference-list behavior of citing publications.

## Operationalization

- Define comparable cited-paper reference sets by field, publication year, document type, and citation window.
- Apply [document-type citation filtering](document_type_citation_filtering.md) or build document-type-specific baselines.
- Compute the expected citation count or citation-percentile threshold for each focal paper.
- Divide observed citations by expected citations, or assign percentile/top-percentile status within the reference set.
- Aggregate paper-level values using a declared rule, such as [normalized citation aggregation choice](normalized_citation_aggregation_choice.md).
- Report field taxonomy, database, citation census date, and document-type filtering.
- Check [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md) when zero-citation records are common or omitted.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) defines expected citations as the average citations of publications in the same field, year, and document type.
- The review describes normalized citation scores as ratios of actual citations to expected citations.
- Waltman treats normalized average-based indicators and normalized highly cited publication indicators as cited-side approaches because focal papers are compared with similar cited publications.
- The full text notes that these approaches require a field classification system, often Web of Science journal subject categories.

## Caveats

- Cited-side normalization inherits all reference-set choices, including field taxonomy, document-type selection, and citation-window length.
- Interdisciplinary papers can be misnormalized when forced into a single field.
- Ratios can be unstable when expected citation counts are small.

## Links

- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [top-percentile publication share](../measures/top_percentile_publication_share.md)
- [normalized citation aggregation choice](normalized_citation_aggregation_choice.md)
- [reference set construction](reference_set_construction.md)
- [document-type citation filtering](document_type_citation_filtering.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [citing-side normalization](citing_side_normalization.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `cited_side_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: cited-side field normalization; expected-citation normalization; observed-to-expected citation normalization; cited-publication normalization
