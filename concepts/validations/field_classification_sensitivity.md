# Field-classification sensitivity

## Summary

Field-classification sensitivity checks how normalized citation indicators change when the field taxonomy or aggregation level used for reference sets changes.

## Canonical Form

- Unit of analysis: paper, journal category, field, institution, country, portfolio, reference set, or normalization cell.
- Typical representation: taxonomy-sensitivity table, aggregation-level comparison, category reassignment audit, or field-classification robustness check.
- Validation target: whether field-normalized citation results depend on arbitrary or contested field boundaries.
- Empirical signature: normalized scores or rankings change when journal subject categories are replaced or aggregated differently.

## Uses in Science of Science

- Validates [field normalized citation impact](../measures/field_normalized_citation_impact.md), [cited-side normalization](../methods/cited_side_normalization.md), and [reference set construction](../methods/reference_set_construction.md).
- Generalizes [WoS subject category fractionalization](wos_subject_category_fractionalization.md) from double-counting to broader taxonomy choice.
- Connects [field classifications](../measures/field_classifications.md), [paper-field linkages](../representations/paper_field_linkages.md), and [science maps](../representations/science_maps.md).
- Helps evaluate whether algorithmic publication-level classifications improve over journal-level categories.
- Treats [sparse direct-citation exclusion](sparse_direct_citation_exclusion.md) as a coverage-sensitivity check when classifications rely on direct citation links.

## Operationalization

- Compute normalized citation indicators using the baseline field taxonomy.
- Recompute using alternative aggregation levels, journal categories, publication-level clusters, topic labels, or expert fields.
- Compare score changes, rank changes, and uncertainty intervals.
- Inspect multidisciplinary journals, emerging fields, and interdisciplinary papers separately.
- Report whether full counting, fractional counting, or primary-field assignment is used for multi-field papers.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) states that field normalization requires a classification system and that Web of Science journal subject categories are commonly used.
- The review reports literature showing that normalized indicators can be sensitive to the aggregation level at which fields are defined.
- Waltman notes problems with WoS journal subject categories for normalization, including heterogeneity within medical categories and poor representation of some fields.
- The review describes alternatives, including domain-specific taxonomies and algorithmically constructed publication-level classifications based on citation relations.
- Verified full-text evidence from Waltman and van Eck (2012) supplies the paper-level classification case behind this alternative, including direct-citation relatedness, hierarchical resolution parameters, and exclusion of weakly linked publications.

## Caveats

- No field taxonomy is neutral; each one encodes a theory of similarity.
- Very fine classifications can be noisy, while coarse classifications can mix citation cultures.
- Stability across taxonomies supports robustness but does not prove the indicator captures quality.

## Links

- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [field classifications](../measures/field_classifications.md)
- [reference set construction](../methods/reference_set_construction.md)
- [cited-side normalization](../methods/cited_side_normalization.md)
- [WoS subject category fractionalization](wos_subject_category_fractionalization.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [publication-level field classification](../methods/publication_level_field_classification.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [sparse direct-citation exclusion](sparse_direct_citation_exclusion.md)
- [science maps](../representations/science_maps.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `field_classification_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: field taxonomy sensitivity; classification-system sensitivity; normalization field-boundary audit; field aggregation sensitivity
