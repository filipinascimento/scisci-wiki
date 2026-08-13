# Blocking split-error ceiling

## Summary

Blocking split-error ceiling is the validation motif that author-name blocking can impose an unrecoverable recall limit because mentions split across different blocks cannot be merged by later clustering.

## Canonical Form

- Unit of analysis: author mention, name block, same-author mention pair, blocking key, or recovered cluster.
- Typical representation: first-initial block, all-initial block, cross-block synonym split, or blocking recall ceiling.
- Validation target: quantify the maximum recall a disambiguation pipeline can achieve after its initial blocking rule.
- Empirical signature: a true author's mentions are separated into different name blocks, so no downstream similarity threshold can reunite them.

## Uses in Science of Science

- Adds a recall-ceiling caveat to [author-name blocking](../methods/author_name_blocking.md).
- Connects [homonym and synonym author errors](homonym_synonym_author_errors.md) to pipeline design rather than only final clustering.
- Helps interpret [name-block size complexity](../measures/name_block_size_complexity.md) because narrower blocks reduce comparisons while increasing split risk.
- Provides a validation lens for [author name disambiguation](../methods/author_name_disambiguation.md).

## Operationalization

- Compare alternative blocking rules on a gold-standard or identifier-labeled sample.
- Estimate how many true same-author mention pairs fall into different blocks under each rule.
- Report blocking recall separately from final clustering precision and recall.
- Audit cross-block splits by name variants, initials, transliteration, marriage/name changes, and source-record missingness.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) contrasts first-initial blocking with all-initial blocking and chooses the more general form to avoid unrecoverable splitting.
- Their discussion shows the tradeoff: broader blocks increase computational burden and homonym ambiguity, while narrower blocks can cap recall before clustering begins.
- The motif is separate from final disambiguation metrics because the ceiling is created upstream.

## Caveats

- Broad blocks can become too large for expensive pairwise comparisons.
- Identifier-labeled benchmarks may underrepresent name changes or non-Western naming patterns.
- Blocking recall is necessary but not sufficient for high-quality clustering.

## Links

- [author-name blocking](../methods/author_name_blocking.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)
- [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [ResearcherID disambiguation gold standard](researcherid_disambiguation_gold_standard.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `blocking_split_error_ceiling`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: blocking recall ceiling; cross-block synonym split; blocking false split; unrecoverable blocking error
