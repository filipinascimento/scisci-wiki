# Retrieval-to-quantitative reuse mismatch

## Summary

Retrieval-to-quantitative reuse mismatch is the validation problem that metadata fields designed for search and discovery may be reused as if they were quantitative measurement variables.

## Canonical Form

- Unit of analysis: database field, subject category, source collection, publication record, citation link, or derived indicator.
- Typical representation: provenance note, field-purpose audit, retrieval-versus-analysis flag, or sensitivity check.
- Validation target: determine whether a source-native field is suitable for counting, normalization, ranking, or modeling.
- Empirical signature: a field works well for filtering or discovery but creates duplication, coarse boundaries, or biased denominators in quantitative analysis.

## Uses in Science of Science

- Generalizes the WoS-specific caution behind [WoS subject category fractionalization](wos_subject_category_fractionalization.md).
- Supports [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) and [reference set construction](../methods/reference_set_construction.md).
- Helps compare curated sources such as [Web of Science](../datasets/web_of_science.md) with open sources such as [OpenAlex](../datasets/openalex.md) and [Dimensions](../datasets/dimensions.md).
- Adds a data-design caveat to [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Identify the original purpose of each source-native field before using it in an indicator.
- Separate search filters, collection flags, and display metadata from fields designed for analysis.
- Test whether the field duplicates records, mixes levels of analysis, or changes denominators.
- Run sensitivity checks using alternative fields, fractionalization, paper-level classifications, or curated derived variables.
- Document cases where the field is useful for discovery but weak as a quantitative variable.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that Web of Science was originally designed for information retrieval rather than scientometric analysis.
- The paper notes that secondary uses such as evaluation, ranking, mapping, and sociology of science would have led to different data elements and structures if they had been the original design target.
- Birkle et al. use WoS Subject Categories as an example: they are useful for retrieval but require adjustment for quantitative analysis because journals can have multiple categories.
- The full text emphasizes that scientometric analyses using WoS must account for inherited search-oriented design choices.

## Caveats

- A retrieval-oriented field is not automatically invalid; it may be useful after adjustment or validation.
- Some source fields have mixed purposes, especially when products evolve from search tools into analytics platforms.
- The audit should be repeated as database schemas and classification systems change.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [WoS subject category fractionalization](wos_subject_category_fractionalization.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [reference set construction](../methods/reference_set_construction.md)
- [field classifications](../measures/field_classifications.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [evaluated-party data verification](evaluated_party_data_verification.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `retrieval_to_quantitative_reuse_mismatch`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: search-field reuse caveat; retrieval metadata measurement mismatch; database design-purpose mismatch; search-to-analysis field audit
