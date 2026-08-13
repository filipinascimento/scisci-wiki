# Journal similarity mapping

## Summary

Journal similarity mapping builds science maps by measuring how journals are related through inter-citation, co-citation, shared references, text, keywords, or category overlap.

## Canonical Form

- Unit of analysis: journal, source title, citation pair, co-cited journal pair, similarity matrix, or map edge.
- Typical representation: journal-journal similarity matrix, normalized relatedness graph, or weighted map input file.
- Method target: convert raw scholarly metadata into proximity values for [science maps](../representations/science_maps.md).
- Empirical signature: different similarity measures produce alternative map layouts that can be compared for local accuracy, structural accuracy, scalability, and readability.

## Uses in Science of Science

- Provides the similarity layer for [science maps](../representations/science_maps.md), [science map overlays](../representations/science_map_overlays.md), and [science map update workflows](science_map_update_workflows.md).
- Links [co-citation](../representations/co_citation.md), [bibliographic coupling](../representations/bibliographic_coupling.md), citation flows, and keyword similarity into a common mapping workflow.
- Supplies edge weights for [science map layout and reduction](science_map_layout_reduction.md) and [science map accuracy validation](../validations/science_map_accuracy_validation.md).

## Operationalization

- Select a source universe, such as WoS, Scopus, OpenAlex sources, Dimensions journals, or a curated journal list.
- Build journal-journal matrices from inter-citation frequencies, co-citation frequencies, shared-reference counts, keywords, or text-derived features.
- Normalize raw counts with documented measures such as cosine-like indices, Jaccard, Pearson correlation, or K50-style relatedness.
- Use [IC-Jaccard intercitation relatedness](ic_jaccard_intercitation_relatedness.md) when the selected input is a normalized direct inter-citation matrix.
- When multiple source-year-feature matrices are available, use [weighted science-map matrix fusion](weighted_science_map_matrix_fusion.md) before layout rather than silently choosing one input layer.
- Compare candidate matrices with validation criteria before using them as a base map.
- Preserve whether the input is an [inter-citation or co-citation matrix](../representations/journal_intercitation_cocitation_matrices.md), because those representations have different coverage and reconstruction requirements.
- Interpret selected layouts through documented labels and local region checks such as [manual science-map cluster labeling](manual_science_map_cluster_labeling.md) and [local journal-neighborhood zoom maps](../representations/local_journal_neighborhood_zoom_map.md).

## Evidence and Validations

- Verified full-text evidence from Boyack, Klavans, and Borner (2005) compares eight journal-journal similarity measures over 7,121 journals and more than one million SCI/SSCI documents.
- The paper tests five inter-citation measures and three co-citation measures, then lays out each similarity matrix with VxOrd.
- Boyack et al. report that IC-Jaccard and CC-K50 were selected as strong inter-citation and co-citation choices after combining local accuracy, structural accuracy, scalability, and qualitative map readability.
- The CC-K50 co-citation measure is split out as [K50 co-citation relatedness](k50_cocitation_relatedness.md), and the multi-criterion comparison as [science map measure selection grid](../validations/science_map_measure_selection_grid.md).
- The IC-Jaccard direct-citation counterpart and its source-universe boundary are now split into linked method and validation pages.
- Verified full-text evidence from Borner et al. (2012) updates the UCSD map by combining cited-reference and keyword matrices from WoS and Scopus, then using weighted matrix reduction before layout and clustering.
- This evidence motivates [weighted science-map matrix fusion](weighted_science_map_matrix_fusion.md) as a separate reusable method when maps draw on multiple data sources and feature types.
- The same source motivates [citation-linkage similarity bias](../validations/citation_linkage_similarity_bias.md) and [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md) as validation checks before treating journal proximity as topical structure.

## Caveats

- Similarity is source- and measure-dependent; a map based on journal inter-citation can differ from a co-citation or keyword map.
- Raw counts favor large journals and broad multidisciplinary venues unless normalized.
- Journal-level similarity hides paper-level heterogeneity, especially for multidisciplinary journals.
- Citation-link similarity can reflect social, age, and cumulative-attention mechanisms as well as intellectual relatedness.

## Links

- [science maps](../representations/science_maps.md)
- [journal inter-citation and co-citation matrices](../representations/journal_intercitation_cocitation_matrices.md)
- [IC-Jaccard intercitation relatedness](ic_jaccard_intercitation_relatedness.md)
- [K50 co-citation relatedness](k50_cocitation_relatedness.md)
- [intercitation source-universe boundary](../validations/intercitation_source_universe_boundary.md)
- [science map layout and reduction](science_map_layout_reduction.md)
- [manual science-map cluster labeling](manual_science_map_cluster_labeling.md)
- [local journal-neighborhood zoom map](../representations/local_journal_neighborhood_zoom_map.md)
- [weighted science-map matrix fusion](weighted_science_map_matrix_fusion.md)
- [top-N similarity edge filtering](top_n_similarity_edge_filtering.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [science map measure selection grid](../validations/science_map_measure_selection_grid.md)
- [mutual-information map structural accuracy](../validations/mutual_information_map_structural_accuracy.md)
- [citation-linkage similarity bias](../validations/citation_linkage_similarity_bias.md)
- [journal-level map distortion caveat](../validations/journal_level_map_distortion_caveat.md)
- [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)
- [co-citation](../representations/co_citation.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [field classifications](../measures/field_classifications.md)
- [science map overlays](../representations/science_map_overlays.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]
- Borner, K., Klavans, R., Patek, M., Zoss, A. M., Biberstine, J. R., Light, R. P., Lariviere, V., & Boyack, K. W. (2012). Design and update of a classification system: The UCSD map of science. *PLOS ONE*, 7(7), e39464. https://doi.org/10.1371/journal.pone.0039464 [OpenAlex: W2036137014; Dimensions: pub.1049668114; WoS: unknown]

## Metadata

- Concept ID: `journal_similarity_mapping`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Borner et al. (2012) (2012)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: journal-journal similarity; journal relatedness matrix; inter-citation mapping; co-citation mapping
