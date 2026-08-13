# Mutual-information map structural accuracy

## Summary

Mutual-information map structural accuracy evaluates a science map by clustering its coordinates and comparing those clusters with reference category labels using mutual information and random-assignment z-scores.

## Canonical Form

- Unit of analysis: map, coordinate cluster, journal category, contingency matrix, or candidate similarity measure.
- Typical representation: cluster-by-category contingency table, mutual-information score, random baseline, or z-score by cluster count.
- Validation target: whether a map's global cluster structure aligns with a trusted reference classification more than expected by chance.
- Empirical signature: candidate maps with high z-scores preserve recognizable category structure over a range of clustering levels.

## Uses in Science of Science

- Splits the structural validation layer from broader [science map accuracy validation](science_map_accuracy_validation.md).
- Provides a quantitative comparison for alternative [journal similarity mapping](../methods/journal_similarity_mapping.md) inputs and [science map layout and reduction](../methods/science_map_layout_reduction.md) outputs.
- Complements local accuracy tests, readability checks, and scalability checks in a [science map measure selection grid](science_map_measure_selection_grid.md).
- Can be adapted to OpenAlex concepts, Dimensions fields, WoS categories, or expert-labeled clusters when building newer map corpora.

## Operationalization

- Cluster map coordinates at several cluster counts.
- Build a contingency matrix crossing map clusters with reference category labels.
- Compute mutual information between the observed cluster assignments and reference assignments.
- Generate random cluster-category assignments to estimate the expected mutual information and standard deviation.
- Convert observed mutual information to a z-score and compare candidate maps across cluster levels.

## Evidence and Validations

- Verified full-text evidence from Boyack et al. (2005) applies k-means clustering to each VxOrd map at 100, 125, 150, 175, 200, 225, and 250 clusters.
- The paper compares cluster assignments with ISI journal category labels using mutual information based on a cluster-category contingency matrix.
- Boyack et al. compute z-scores by comparing real mutual information to 5,000 randomly assigned cluster-category distributions.
- The paper reports that most normalized measures produce maps far from random, while raw co-citation performs worst.

## Caveats

- Reference categories can be outdated, overlapping, or only partially aligned with citation-derived structure.
- k-means cluster shape assumptions can affect z-scores.
- Structural accuracy does not guarantee local placement quality for individual journals.
- The validation result depends on chosen cluster counts and random-baseline assumptions.

## Links

- [science map accuracy validation](science_map_accuracy_validation.md)
- [science map measure selection grid](science_map_measure_selection_grid.md)
- [journal similarity mapping](../methods/journal_similarity_mapping.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [field classifications](../measures/field_classifications.md)
- [SCI/SSCI journal-map corpus 2000](../datasets/sci_ssci_journal_map_corpus_2000.md)
- [journal category specificity audit](journal_category_specificity_audit.md)

## References

- Boyack, K. W., Klavans, R., & Borner, K. (2005). Mapping the backbone of science. *Scientometrics*, 64, 351-374. https://doi.org/10.1007/s11192-005-0255-6 [OpenAlex: W2100484636; Dimensions: pub.1011403274; WoS: unknown]

## Metadata

- Concept ID: `mutual_information_map_structural_accuracy`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Boyack et al. (2005) (2005)
- Latest seen paper: Boyack et al. (2005) (2005)
- Primary reference DOI: `10.1007/s11192-005-0255-6`
- OpenAlex ID: `W2100484636`
- Dimensions ID: `pub.1011403274`
- SciSciNet ID: `W2100484636`
- Aliases: map mutual information validation; structural accuracy z-score; cluster category mutual information; map MI z-score
