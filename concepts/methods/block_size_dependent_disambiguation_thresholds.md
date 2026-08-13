# Block-size-dependent disambiguation thresholds

## Summary

Block-size-dependent disambiguation thresholds adjust the similarity score required to merge author mentions or clusters according to the size of the name block being disambiguated.

## Canonical Form

- Unit of analysis: name block, author mention pair, author cluster pair, block-size class, similarity score, or threshold parameter.
- Typical representation: threshold by block-size bin, linear quality limit, block-size-adjusted linkage rule, or size-stratified parameter grid.
- Method target: reduce false merges in larger blocks while maintaining enough recall in smaller blocks.
- Empirical signature: larger name blocks require stricter thresholds because they contain many more candidate pairs and higher false-link risk.

## Uses in Science of Science

- Refines [author similarity clustering](author_similarity_clustering.md) after [author-name blocking](author_name_blocking.md).
- Uses [name-block size complexity](../measures/name_block_size_complexity.md) as an explicit model input.
- Supports validation with [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md), [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md), and [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md).

## Operationalization

- Define canonical name blocks and compute block size using mentions, candidate pairs, or labeled real authors.
- Choose global thresholds only as a baseline; then define block-size classes or a parametric threshold function.
- Fit or select thresholds with labeled data where available, usually optimizing pairwise and cluster-level F1 metrics.
- Use higher thresholds for larger or more ambiguous blocks to reduce false links.
- Report the block-size classes, candidate threshold grid, optimization metric, and whether thresholds were fitted on the same data used for evaluation.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) explains that thresholds can be global or can vary with the number of author mentions in a name block.
- The paper states that block-size-dependent thresholds address the increasing false-link problem in larger name blocks.
- Tekles and Bornmann describe the Caron and van Eck approach as using thresholds that depend on block-size classes, with higher thresholds for larger blocks.
- They also describe the Backes approach as using a quality limit with a linear dependence on block size.
- That implementation is split out as [Backes specificity-weighted cluster disambiguation](backes_specificity_weighted_cluster_disambiguation.md).
- In their comparison, threshold fitting is used to evaluate approaches independently of arbitrary threshold choices, while noting that practical use requires reliable labeled data.
- The same verified text supports a [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md), showing how per-block optimal thresholds quantify improvement potential but are not directly deployable without labels.

## Caveats

- Fitting thresholds on the evaluation set can overstate deployable performance unless held-out labeled data are available.
- Larger thresholds reduce false merges but can increase false splits, especially for heterogeneous author careers.
- Block-size-dependent rules may not capture all difficulty variation; field, country, metadata coverage, and career age also matter.
- Thresholds optimized for one database or year can degrade after metadata coverage changes.

## Links

- [author-name blocking](author_name_blocking.md)
- [author similarity clustering](author_similarity_clustering.md)
- [author metadata similarity features](../representations/author_metadata_similarity_features.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [Caron-van Eck rule-score disambiguation](caron_van_eck_rule_score_disambiguation.md)
- [Backes specificity-weighted cluster disambiguation](backes_specificity_weighted_cluster_disambiguation.md)
- [disambiguation threshold flexibility upper bound](../validations/disambiguation_threshold_flexibility_upper_bound.md)
- [ResearcherID disambiguation gold standard](../validations/researcherid_disambiguation_gold_standard.md)
- [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `block_size_dependent_disambiguation_thresholds`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: block-size thresholds; name-block thresholding; size-adjusted author linkage; block-dependent similarity cutoff
