# Relative predecessor dominance factor

## Summary

The relative predecessor dominance factor measures how strongly a focal paper's most cited reference dominates the focal paper in total citation impact.

## Canonical Form

- Unit of analysis: focal paper and its most cited reference.
- Typical representation: `b_p = C_max / C_p`, where `C_max` is the citation count of the focal paper's most cited reference and `C_p` is the focal paper's citation count.
- Measurement target: the citation burden imposed by the strongest predecessor.
- Empirical signature: values above one mean the predecessor remains more cited; values below one mean the focal paper has surpassed it.

## Uses in Science of Science

- Explains the magnitude term in the approximation `D_p ≈ d_p / (1 + b_p)` for the [disruption index](disruption_index.md).
- Turns disruption into a relational comparison with the strongest predecessor rather than a claim about creativity in isolation.
- Connects predecessor citation concentration to the difficulty of displacing canonical ideas.

## Operationalization

- Count citations to the focal paper and separately count citations to each focal reference over a common observation window.
- Identify the maximum reference citation count and divide it by the focal paper's citation count.
- Report database coverage, document types, self-citation treatment, and the citation window used for both counts.
- Interpret `b_p` jointly with the [local displacement factor](local_displacement_factor.md).

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2026) shows that reference citation counts are highly skewed and that the top reference accounts for about 40% of all reference citations in a 1,000-paper OpenAlex calibration sample.
- Their fitted Zipf parameters predict a top-reference share of about 42%, close to the empirical 40% value.
- In the 22-million-paper analysis subset, the median `b_p` is about 119 and roughly 99% of papers have `b_p > 1`, making predecessor dominance the main suppressor of D-index magnitude.

## Caveats

- Citation counts depend on corpus coverage, field, publication age, and document-type indexing.
- `C_max` may identify a method, dataset, or review rather than the intellectual idea a focal paper seeks to displace.
- Focal and predecessor citation windows must be comparable to avoid age-driven dominance.

## Links

- [local displacement factor](local_displacement_factor.md)
- [disruption index](disruption_index.md)
- [top-cited predecessor concentration](top_cited_predecessor_concentration.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [D-index reference-length invariance](../validations/d_index_reference_length_invariance.md)
- [OpenAlex disruption-decomposition corpus](../datasets/openalex_disruption_decomposition_corpus.md)

## References

- Lin, Y., Li, L., & Wu, L. (2026). The Disruption Index measures displacement between a paper and its most cited reference. *Quantitative Science Studies*, 7, 229-239. https://doi.org/10.1162/QSS.a.409 [OpenAlex: W7119230500; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `relative_predecessor_dominance_factor`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2026) (2026)
- Latest seen paper: Lin et al. (2026) (2026)
- Primary reference DOI: `10.1162/qss.a.409`
- OpenAlex ID: `W7119230500`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: relative dominance factor; knowledge burden factor; b-p factor; strongest-predecessor citation burden
