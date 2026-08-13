# WoS subject-category co-citation matrix

## Summary

A WoS subject-category co-citation matrix represents pairwise similarity among Web of Science subject categories from how often article reference lists cite journals assigned to both categories.

## Canonical Form

- Unit of analysis: subject-category pair, cited-reference assignment, article reference list, or similarity matrix cell.
- Typical representation: subject-category by subject-category cosine-similarity matrix.
- Measurement target: cognitive or citation proximity among field categories.
- Empirical signature: category pairs often co-cited by the same articles receive high similarity values; rarely co-cited pairs approach zero.

## Uses in Science of Science

- Supplies the distance/similarity infrastructure for [Rao-Stirling diversity](../measures/rao_stirling_diversity.md), [category disparity](../measures/category_disparity.md), and [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md).
- Provides the base matrix for [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md), [science maps](science_maps.md), and [science map overlays](science_map_overlays.md).
- Makes field distances empirical rather than purely taxonomic when studying [interdisciplinarity](../mechanisms/interdisciplinarity.md).
- Gives a reusable representation for evaluating [field classifications](../measures/field_classifications.md) and [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md).

## Operationalization

- Build an article by cited-subject-category matrix from reference lists.
- Map cited journals to Web of Science subject categories with a documented thesaurus.
- Compute pairwise category similarities, commonly using Salton cosine, over the cited-category profiles.
- Store the matrix snapshot, source records, document-type filters, journal-category mapping date, and missing-reference handling.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) constructs a 244 subject-category similarity matrix from 30,261 Web of Science articles with at least one U.S. author address sampled during 2005-2007.
- Their workflow processes cited references, extracts journal source strings, normalizes journal-title variants, maps journals to subject categories, and iteratively improves the thesaurus.
- Porter and Rafols report more than one million cited subject-category instances and compute Salton cosine similarities between subject categories.
- They use the matrix both to compute the Integration score and to construct science-map layouts for visualizing disciplinary diversity.
- The same workflow depends on [journal subject-category thesaurus matching](../methods/journal_subject_category_thesaurus_matching.md) and motivates [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md).

## Caveats

- Similarity values depend on the sampled articles, document types, country filter, year window, and journal-to-category thesaurus.
- Arts and humanities categories can be sparse in citation data and may have unstable similarities.
- A co-citation matrix captures observed citation proximity, not necessarily conceptual distance in every research context.

## Links

- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [category disparity](../measures/category_disparity.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md)
- [journal subject-category thesaurus matching](../methods/journal_subject_category_thesaurus_matching.md)
- [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md)
- [science maps](science_maps.md)
- [science map overlays](science_map_overlays.md)
- [field classifications](../measures/field_classifications.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [co-citation strength](../measures/co_citation_strength.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `wos_subject_category_cocitation_matrix`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: SC co-citation matrix; WoS category similarity matrix; subject-category cosine matrix; cited-SC similarity matrix
