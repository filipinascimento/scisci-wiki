# Algorithm implementation-fidelity caveat

## Summary

Algorithm implementation-fidelity caveat is the validation motif that benchmark implementations may modify published algorithms, so performance comparisons must disclose deviations from the original method.

## Canonical Form

- Unit of analysis: algorithm implementation, parameter search, merge order, similarity definition, or benchmark reproduction.
- Typical representation: original method, reimplemented method, feasible variant, undocumented deviation, or fidelity note.
- Validation target: separate algorithm performance from implementation artifacts.
- Empirical signature: a benchmark changes parameter fitting, clustering order, or similarity dependencies to make comparison feasible.

## Uses in Science of Science

- Qualifies [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md).
- Adds reproduction detail to [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md) and other named methods.
- Supports transparent method comparison in bibliometric infrastructure studies.

## Operationalization

- Record each deviation from the original algorithm, including parameter ranges and merge rules.
- Run fidelity checks against published examples when possible.
- Distinguish missing-code reimplementation uncertainty from deliberate benchmark adaptation.
- Report whether deviations plausibly change precision, recall, or runtime.

## Evidence and Validations

- Verified full-text evidence from Tekles and Bornmann (2020) explicitly notes modifications to a Backes-style approach and warns that these changes can affect results.
- The paper still uses the modified implementation for controlled comparison, making disclosure central to interpretation.
- This motif captures the reproducibility boundary of algorithm benchmarks.

## Caveats

- Not all implementation deviations materially alter conclusions.
- Original papers may be underspecified, forcing reasonable reconstruction choices.
- Strict fidelity can conflict with fair cross-algorithm comparison on a shared benchmark.

## Links

- [unsupervised author-disambiguation comparison](../methods/unsupervised_author_disambiguation_comparison.md)
- [Backes specificity-weighted cluster disambiguation](../methods/backes_specificity_weighted_cluster_disambiguation.md)
- [disambiguation evaluation metrics](disambiguation_evaluation_metrics.md)
- [metric-dependent disambiguation ranking](metric_dependent_disambiguation_ranking.md)

## References

- Tekles, A., & Bornmann, L. (2020). Author name disambiguation of bibliometric data: A comparison of several unsupervised approaches. *Quantitative Science Studies*, 1(4), 1510-1528. https://doi.org/10.1162/qss_a_00081 [OpenAlex: W2941991812; Dimensions: pub.1130006391; WoS: unknown]

## Metadata

- Concept ID: `algorithm_implementation_fidelity_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Tekles and Bornmann (2020) (2020)
- Latest seen paper: Tekles and Bornmann (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00081`
- OpenAlex ID: `W2941991812`
- Dimensions ID: `pub.1130006391`
- SciSciNet ID: `W3013745385`
- Aliases: method reimplementation caveat; algorithm fidelity disclosure; benchmark implementation deviation
