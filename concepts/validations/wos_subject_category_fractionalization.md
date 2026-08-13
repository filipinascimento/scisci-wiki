# WoS subject category fractionalization

## Summary

WoS subject category fractionalization is the validation step of adjusting or auditing counts when Web of Science journal-based subject categories assign one journal, and therefore its papers, to multiple categories.

## Canonical Form

- Unit of analysis: WoS subject category, journal, paper, institution, field-normalized reference set, or evaluation portfolio.
- Typical representation: full-count category assignment, fractional-count category assignment, multi-category weight, duplication audit, or category-sensitivity check.
- Validation target: avoid double-counting or misleading field baselines when journal-level categories are used for quantitative analysis.
- Empirical signature: aggregate publication or citation totals differ under full counting versus fractional category counting.

## Uses in Science of Science

- Adds a WoS-specific caveat to [field classifications](../measures/field_classifications.md) and [reference set construction](../methods/reference_set_construction.md).
- Supports [field normalized citation impact](../measures/field_normalized_citation_impact.md), [mean normalized citation score](../measures/mean_normalized_citation_score.md), and [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Links [Web of Science](../datasets/web_of_science.md) source design to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Helps compare WoS categories with paper-level classifications in OpenAlex, Dimensions, SciSciNet, or algorithmic science maps.

## Operationalization

- Identify journals assigned to more than one WoS subject category.
- Decide whether to full count, fractionally count, choose a primary category, or use a paper-level alternative.
- Report category weights and whether category totals are allowed to exceed unique-paper totals.
- Run sensitivity checks when field-normalized metrics, interdisciplinarity measures, or institutional field profiles depend on WoS categories.
- For interdisciplinarity work, pair fractionalization choices with [within-subject-category citation share](../measures/within_subject_category_citation_share.md) and [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md) checks.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that WoS Subject Categories were created for information retrieval, not quantitative analysis.
- The paper notes that the scheme contains 254 journal-based categories and that journals may be assigned to more than one category.
- Birkle et al. explicitly warn that quantitative analysis needs count adjustment to avoid duplication when aggregating by subject category.
- The same discussion notes that contemporary analytic topics may draw on parts of multiple categories, so journal-level categories can be too coarse for some analyses.

## Caveats

- Fractionalization solves double-counting but does not make journal-level categories paper-level fields.
- Interdisciplinary journals and emerging topics can still be misrepresented after category adjustment.
- The best correction depends on whether the target is retrieval, normalization, mapping, or portfolio reporting.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [field classifications](../measures/field_classifications.md)
- [reference set construction](../methods/reference_set_construction.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [within-subject-category citation share](../measures/within_subject_category_citation_share.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_subject_category_fractionalization`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS category double-counting; subject category fractional counting; journal-category duplication audit; WoS field category sensitivity
