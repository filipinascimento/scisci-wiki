# Author reference-set granularity sensitivity

## Summary

Tests whether author rankings change when the comparator is a broad field, top subfield, or narrower topic/sub-subfield.

## Canonical Form

- Unit of analysis: author rank under alternative reference sets.
- Typical representation: rank or percentile movement across broad-field, subfield, and local-topic denominators.
- Validation target: sensitivity of author evaluation to field-granularity choice.
- Empirical signature: author percentile or rank changes materially as the comparator set narrows or broadens.

## Uses in Science of Science

- Adds a reference-set robustness layer to [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md).
- Useful when evaluators select increasingly narrow comparator groups for author metrics.
- Connects author rankings to [field classification sensitivity](field_classification_sensitivity.md).

## Operationalization

- Recompute author percentiles under 22-field, 176-subfield, and local topic or sub-subfield reference sets.
- Report rank movement, denominator size, and sparsity for every comparator.
- Flag comparisons where narrow denominators are too small or strategically chosen.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) lets users limit rankings by similar field or top subfield and warns that very small sub-subfields may have different citation densities.
- This makes comparator granularity a reusable validation choice.

## Caveats

- Finer reference sets can become sparse, noisy, or cherry-picked.
- Broad fields can hide real specialty-level citation-density differences.

## Links

- [Field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [Raw cross-field author comparison caveat](raw_cross_field_author_comparison_caveat.md)
- [Field-classification sensitivity](field_classification_sensitivity.md)
- [Reference set construction](../methods/reference_set_construction.md)
- [Author primary-field share annotation](../methods/author_primary_field_share_annotation.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `author_reference_set_granularity_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: author comparator granularity sensitivity; field reference-set sensitivity; subfield ranking robustness
