# Local displacement factor

## Summary

The local displacement factor measures whether papers that cite a focal work tend to omit its references or co-cite the focal work with those predecessors.

## Canonical Form

- Unit of analysis: focal paper and its downstream citation neighborhood.
- Typical representation: `d_p = (N_i - N_j) / (N_i + N_j)`, where `N_i` counts later papers citing only the focal paper and `N_j` counts later papers citing both the focal paper and at least one focal reference.
- Measurement target: local substitution of predecessor attention by the focal paper.
- Empirical signature: positive values indicate displacement, negative values indicate consolidation, and zero indicates balance.

## Uses in Science of Science

- Separates the direction of [disruption index](disruption_index.md) behavior from the predecessor competition that controls its magnitude.
- Provides a probability-difference view of [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md).
- Helps distinguish a paper that redirects its immediate citation neighborhood from one that also overcomes a highly dominant predecessor.

## Operationalization

- Construct the focal paper's references and all later papers that cite the focal paper.
- Count focal-only downstream citations as `N_i` and focal-plus-reference co-citations as `N_j`.
- Compute the ratio only when `N_i + N_j` is positive and report the citation window.
- Pair `d_p` with the [relative predecessor dominance factor](relative_predecessor_dominance_factor.md) when interpreting the full D-index.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2026) derives `d_p` as the first component of the approximation `D_p ≈ d_p / (1 + b_p)`.
- In their 22-million-paper OpenAlex analysis subset, 65% of papers have negative `d_p`, 32% have positive `d_p`, and 3% equal zero.
- The authors report that the sign pattern remains similar under a broader inclusion rule requiring at least one citation and one reference.

## Caveats

- `d_p` determines direction but does not show whether the focal paper has surpassed the citation impact of its strongest predecessor.
- Sparse citation neighborhoods yield discrete, unstable ratios.
- Missing references or citations can move downstream papers between `N_i` and `N_j`.

## Links

- [disruption index](disruption_index.md)
- [relative predecessor dominance factor](relative_predecessor_dominance_factor.md)
- [disruption and consolidation](../mechanisms/disruption_consolidation.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [D-index reference-length invariance](../validations/d_index_reference_length_invariance.md)
- [OpenAlex disruption-decomposition corpus](../datasets/openalex_disruption_decomposition_corpus.md)

## References

- Lin, Y., Li, L., & Wu, L. (2026). The Disruption Index measures displacement between a paper and its most cited reference. *Quantitative Science Studies*, 7, 229-239. https://doi.org/10.1162/QSS.a.409 [OpenAlex: W7119230500; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `local_displacement_factor`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2026) (2026)
- Latest seen paper: Lin et al. (2026) (2026)
- Primary reference DOI: `10.1162/qss.a.409`
- OpenAlex ID: `W7119230500`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: local displacement index; displacement factor; d-p factor; focal-only versus co-citation balance
