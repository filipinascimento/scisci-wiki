# Journal category specificity audit

## Summary

Journal category specificity audit compares citation-derived journal clusters with assigned journal categories to identify categories that are too broad, split into multiple specialties, or dispersed across unrelated clusters.

## Canonical Form

- Unit of analysis: journal category, journal cluster, category assignment, map query, or classification audit.
- Typical representation: category-to-cluster spread, missing category label, split category, dispersed category, or reclassification recommendation.
- Validation target: determining whether a journal classification remains specific and current relative to citation-derived structure.
- Empirical signature: some categories map cleanly to one or a few coherent clusters, while others are scattered across many citation clusters.

## Uses in Science of Science

- Adds a classification-audit layer to [science map accuracy validation](science_map_accuracy_validation.md).
- Helps interpret [field classifications](../measures/field_classifications.md) when categories are used as validation references or denominators.
- Supports [journal similarity mapping](../methods/journal_similarity_mapping.md) by revealing when citation patterns suggest subcategory splits.
- Uses [local journal-neighborhood zoom maps](../representations/local_journal_neighborhood_zoom_map.md) to inspect why categories split or disperse.
- Provides a validation task for science-map updates and category maintenance.

## Operationalization

- Compare map cluster labels with a source classification system such as ISI/WoS categories.
- For each category, measure how many citation-derived clusters contain its journals and whether it is the dominant label in any cluster.
- Inspect categories represented multiple times for plausible specialty splits.
- Inspect categories not represented as cluster labels for nonspecific or dispersed assignments.
- Use local map zooms to verify whether dispersed journals form coherent neighboring specialties or belong to different citation neighborhoods.
- Record how many journals are singly versus multiply assigned in problematic categories.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) compares cluster labels in the discipline map with ISI journal categories.
- The paper shows that the category Mathematics, Applied appears as multiple clusters corresponding to linear numerical methods, nonlinear numerical methods, engineering applications, and algorithms or discrete mathematics.
- Boyack et al. argue that multiple categories for applied mathematics journals could be justified by current citation information.
- The paper also identifies several medium-sized categories, including Behavioral Sciences and Social Sciences, Interdisciplinary, whose journals are spread across many clusters, raising questions about whether those categories are specific enough.
- For the listed dispersed categories, only 32 of 244 journals are singly assigned, while 208 are assigned to multiple categories.

## Caveats

- Citation-derived clusters are not automatically better than expert categories.
- Categories can be intentionally broad for retrieval or administrative reasons.
- Multidisciplinary journals and journals with multiple category assignments require special handling.
- Category audits should be repeated over time because field boundaries evolve.

## Links

- [science map accuracy validation](science_map_accuracy_validation.md)
- [mutual-information map structural accuracy](mutual_information_map_structural_accuracy.md)
- [field classifications](../measures/field_classifications.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science maps](../representations/science_maps.md)
- [local journal-neighborhood zoom map](../representations/local_journal_neighborhood_zoom_map.md)
- [manual science-map cluster labeling](../methods/manual_science_map_cluster_labeling.md)
- [SCI/SSCI journal-map corpus 2000](../datasets/sci_ssci_journal_map_corpus_2000.md)
- [WoS subject category fractionalization](wos_subject_category_fractionalization.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `journal_category_specificity_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: journal category audit; classification specificity audit; category-cluster spread audit; ISI category specificity check
