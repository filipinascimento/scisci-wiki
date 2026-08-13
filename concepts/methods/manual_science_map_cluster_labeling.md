# Manual science-map cluster labeling

## Summary

Manual science-map cluster labeling is the interpretive step of assigning human-readable field or specialty labels to citation-derived map clusters after layout and clustering.

## Canonical Form

- Unit of analysis: map cluster, journal neighborhood, discipline label, major-field label, or annotation pass.
- Typical representation: short cluster labels, high-level field labels, label hierarchy, or map legend attached to coordinates.
- Method target: convert an accurate but unlabeled science map into a navigable representation for researchers, managers, and evaluators.
- Empirical signature: labels are assigned after examining cluster contents and spatial neighborhoods, rather than being inherited mechanically from one source classification.

## Uses in Science of Science

- Makes [science maps](../representations/science_maps.md) usable as navigation and decision-support tools.
- Provides the interpretation layer for [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md).
- Complements [journal category specificity audit](../validations/journal_category_specificity_audit.md), because citation-derived clusters may split, merge, or relocate source categories.
- Adds a documentation requirement to [science map layout and reduction](science_map_layout_reduction.md): cluster labels, manual adjustments, and exclusion rules should be recorded.

## Operationalization

- Inspect the journals, papers, keywords, or categories contained in each map cluster.
- Assign concise labels that reflect dominant content while preserving uncertainty for mixed clusters.
- Add higher-level labels when clusters form recognizable macro-fields.
- Record who labeled the clusters, whether labels were assigned manually or algorithmically, and whether small peripheral clusters were excluded.
- Document any coordinate or label-position adjustments made for readability.

## Evidence and Validations

- Verified full-text evidence from Boyack, Klavans, and Borner (2005) says the CC-K50 and IC-Jaccard maps were explored interactively using VxInsight and labeled by hand with short terms describing dominant nearby disciplines.
- The paper uses seven larger labels to designate high-level major fields on the all-science maps.
- For the disciplinary backbone map, one author hand-identified 212 clusters covering 7,000 of 7,121 journals.
- Boyack et al. also state that small groups of two or three journals not near a major cluster were not accounted for and that some cluster positions were adjusted slightly to avoid label overlap.

## Caveats

- Manual labels improve readability but can import expert bias, outdated terminology, or overconfident boundaries.
- A dominant label can hide minority specialties, multidisciplinary journals, or bridging clusters.
- Labeling should be versioned separately from the underlying map geometry and cluster assignments.

## Links

- [science maps](../representations/science_maps.md)
- [journal-cluster science backbones](../representations/journal_cluster_science_backbones.md)
- [local journal-neighborhood zoom map](../representations/local_journal_neighborhood_zoom_map.md)
- [science map layout and reduction](science_map_layout_reduction.md)
- [journal similarity mapping](journal_similarity_mapping.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)
- [journal category specificity audit](../validations/journal_category_specificity_audit.md)
- [field classifications](../measures/field_classifications.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; SciSciNet: W2100484636; WoS: unknown]

## Metadata

- Concept ID: `manual_science_map_cluster_labeling`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: hand-labeled science map; manual cluster annotation; map cluster labeling; disciplinary map labeling
