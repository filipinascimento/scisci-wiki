# WoS collection-specific schema completeness

## Summary

WoS collection-specific schema completeness is the caveat that author, affiliation, controlled-vocabulary, citation, and enrichment fields are not uniformly available across all Web of Science platform resources.

## Canonical Form

- Unit of analysis: WoS collection, record field, author field, affiliation field, keyword field, cited-reference field, or controlled vocabulary.
- Typical representation: field-availability matrix by collection and year.
- Validation target: prevent missing fields from being interpreted as missing scholarly behavior.
- Empirical signature: a query returns records from multiple resources, but some resources lack the fields needed for a given measure.

## Uses in Science of Science

- Supports field-by-field provenance for [Web of Science](../datasets/web_of_science.md) extracts.
- Complements [WoS author-affiliation linking onset](wos_author_affiliation_linking_onset.md), [institution-name variant normalization](../methods/institution_name_variant_normalization.md), and [Keywords Plus cited-title terms](../representations/keywords_plus_cited_title_terms.md).
- Helps diagnose [retrieval-to-quantitative reuse mismatch](retrieval_to_quantitative_reuse_mismatch.md) when discovery records are repurposed for analysis.
- Pairs with [WoS platform common query schema](../methods/wos_platform_common_query_schema.md), because shared platform search does not imply equal schema completeness.

## Operationalization

- Build a field-availability table for each included source collection, year range, and document type.
- Before computing measures, confirm that required fields such as all authors, affiliations, institutional mappings, keywords, or citation counts are available in the selected collections.
- Add missingness flags that distinguish field unavailable, field available but blank, and field suppressed by access route.
- Run sensitivity analyses on collections with complete fields when the target measure depends on those fields.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes collection-specific differences in author indexing, author-affiliation linking, institution indexing, controlled vocabulary, and keyword fields.
- The paper reports that all Core Collection authors are indexed, author-affiliation links begin from 2008 forward, and other resources vary by collection.
- Birkle et al. also describe controlled vocabulary and Keywords Plus availability as collection-dependent.

## Caveats

- Complete records in one WoS source cannot be assumed for another WoS-hosted source.
- Field completeness can change historically as indexing policies and product integrations evolve.
- Missing metadata can bias author, institution, field, and collaboration measures.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [WoS platform common query schema](../methods/wos_platform_common_query_schema.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [WoS author-affiliation linking onset](wos_author_affiliation_linking_onset.md)
- [institution-name variant normalization](../methods/institution_name_variant_normalization.md)
- [Keywords Plus cited-title terms](../representations/keywords_plus_cited_title_terms.md)
- [retrieval-to-quantitative reuse mismatch](retrieval_to_quantitative_reuse_mismatch.md)
- [WoS indicator normalization axes](../measures/wos_indicator_normalization_axes.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_collection_specific_schema_completeness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: WoS field availability matrix; collection-specific WoS fields; WoS schema completeness caveat; source-specific metadata completeness
