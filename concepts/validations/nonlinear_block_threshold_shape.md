# Nonlinear block-threshold shape

## Summary

Nonlinear block-threshold shape is the validation motif that block-size-dependent disambiguation thresholds may require nonlinear forms rather than a simple constant or linear adjustment.

## Canonical Form

- Unit of analysis: name block, block size, similarity threshold, false-link rate, or threshold function.
- Typical representation: constant threshold, linear block-size threshold, classed threshold, spline threshold, or per-block calibration.
- Validation target: test whether the threshold shape fits how ambiguity grows with block size.
- Empirical signature: a threshold rule works for small blocks but becomes too strict or too permissive for large blocks.

## Uses in Science of Science

- Refines [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md).
- Extends [disambiguation threshold flexibility upper bound](disambiguation_threshold_flexibility_upper_bound.md) with functional-form sensitivity.
- Connects block-size modeling to [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md).

## Operationalization

- Compare constant, classed, linear, nonlinear, and per-block threshold functions on the same labeled benchmark.
- Plot precision and recall by block-size decile.
- Report whether large blocks require diminishing, increasing, or saturating threshold adjustments.
- Avoid choosing a threshold function solely from global F1.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) reports that a linear block-size threshold in the Backes-style implementation appears too strict for large blocks and suggests nonlinear adjustment.
- The result shows that "block dependent" is not a complete specification unless the threshold shape is validated.
- This motif captures calibration geometry rather than the broader use of block-size thresholds.

## Caveats

- Nonlinear calibration requires enough labeled cases across the block-size range.
- Flexible threshold functions can overfit a benchmark denominator.
- Threshold shape may need to change when metadata fields or blocking rules change.

## Links

- [block-size-dependent disambiguation thresholds](../methods/block_size_dependent_disambiguation_thresholds.md)
- [disambiguation threshold flexibility upper bound](disambiguation_threshold_flexibility_upper_bound.md)
- [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md)
- [name-block size complexity](../measures/name_block_size_complexity.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `nonlinear_block_threshold_shape`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: nonlinear name-block threshold; threshold-shape sensitivity; block-size threshold functional form
