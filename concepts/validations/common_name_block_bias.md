# Common-name block bias

## Summary

Common-name block bias is the validation motif that author disambiguation quality can decline for large or frequent-name blocks, producing uneven downstream error by name prevalence and naming culture.

## Canonical Form

- Unit of analysis: name block, author mention, inferred cluster, gold-standard author, or demographic/name-frequency stratum.
- Typical representation: block size, common-name frequency, block-specific precision, block-specific recall, or F1-by-block-size curve.
- Validation target: detect whether author-level datasets are less reliable for people with common names.
- Empirical signature: larger name blocks have lower disambiguation scores across one or more algorithms.

## Uses in Science of Science

- Extends [name-block size complexity](../measures/name_block_size_complexity.md) from computational difficulty to downstream bias.
- Adds a fairness and validity caveat to [author name disambiguation](../methods/author_name_disambiguation.md).
- Connects [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md) to stratified evaluation.
- Helps interpret mobility, productivity, inequality, and collaboration analyses that depend on author identity resolution.

## Operationalization

- Compute name-block sizes under the chosen blocking rule.
- Evaluate disambiguation precision, recall, and F1 by block-size bins or name-frequency quantiles.
- Compare common-name strata across fields, countries, languages, and demographic proxies where appropriate.
- Report whether downstream findings are robust to excluding or reweighting high-ambiguity blocks.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) reports lower F1 values for larger name blocks across methods.
- The paper explicitly warns that disambiguation results can be biased by the frequency of a name representation.
- This motif separates a bias consequence from the broader measure of block-size complexity.

## Caveats

- Name frequency is not the same as race, ethnicity, nationality, or gender, but it can correlate with naming systems and source coverage.
- Identifier-labeled benchmarks may underrepresent authors without persistent IDs.
- Very small blocks can also have errors if metadata are sparse or names vary strongly.

## Links

- [name-block size complexity](../measures/name_block_size_complexity.md)
- [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `common_name_block_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: large-name-block bias; common-name disambiguation bias; name-frequency disambiguation error; block-size performance bias
