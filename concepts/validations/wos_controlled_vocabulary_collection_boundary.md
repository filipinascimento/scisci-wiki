# WoS controlled-vocabulary collection boundary

## Summary

Controlled vocabulary fields are collection-dependent in WoS, so query and topic extraction rules should distinguish free-text fields from specialist-index thesauri.

## Canonical Form

- Unit of analysis: WoS collection, keyword field, controlled term, topic feature, or search query.
- Typical representation: collection-by-vocabulary availability matrix.
- Mechanism, measurement, or validation target: availability and meaning of controlled vocabulary fields across WoS source collections.
- Empirical signature: topic or retrieval results differ when vocabulary-enabled specialist collections are included or excluded..

## Uses in Science of Science

- Separates [Keywords Plus cited-title terms](../representations/keywords_plus_cited_title_terms.md) from controlled vocabularies.
- Adds a feature-availability check to [WoS collection-specific schema completeness](wos_collection_specific_schema_completeness.md).
- Useful for topic models and retrieval-to-analysis workflows.

## Operationalization

- Flag whether controlled vocabulary searching is available for each collection.
- Separate author keywords, Keywords Plus, and controlled terms in feature construction.
- Test retrieval and topic results with vocabulary-enabled collections excluded or stratified.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) states that Core Collection has no controlled vocabulary, while several specialist indexes provide controlled vocabulary searching.

## Caveats

- Controlled vocabulary availability is not the same as field classification accuracy.
- Mixing free-text and thesaurus terms can create artificial topic signals.

## Links

- [Keywords Plus cited-title terms](../representations/keywords_plus_cited_title_terms.md)
- [WoS collection-specific schema completeness](wos_collection_specific_schema_completeness.md)
- [WoS platform common query schema](../methods/wos_platform_common_query_schema.md)
- [Retrieval-to-quantitative reuse mismatch](retrieval_to_quantitative_reuse_mismatch.md)
- [Topic models](../methods/topic_models.md)
- [Field-classification sensitivity](field_classification_sensitivity.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_controlled_vocabulary_collection_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: controlled-term availability; specialist-index vocabulary boundary; WoS thesaurus availability matrix; controlled vocabulary heterogeneity
