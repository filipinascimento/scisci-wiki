# D-index reference-length invariance

## Summary

D-index reference-length invariance tests whether bibliography growth has any residual association with disruption after local displacement and predecessor dominance are held fixed.

## Canonical Form

- Unit of analysis: cited paper grouped by local displacement, predecessor dominance, and reference-list length.
- Typical representation: observed D-index by reference count within fixed `d_p` and `b_p` strata.
- Validation target: the claim that citation inflation mechanically suppresses D-index values.
- Empirical signature: no residual reference-count gradient after the two D-index components are controlled.

## Uses in Science of Science

- Directly audits a proposed temporal confound in [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Separates D-index-specific robustness from the broader [reference-list length growth confound](reference_list_length_growth_confound.md), which can remain important for other indicators.
- Provides a component-conditioned alternative to adjusting disruption scores by reference count alone.

## Operationalization

- Compute the [local displacement factor](../measures/local_displacement_factor.md), [relative predecessor dominance factor](../measures/relative_predecessor_dominance_factor.md), D-index, and reference count for each eligible paper.
- Restrict or match papers to narrow `d_p` ranges and stratify by fixed `b_p` levels.
- Plot or regress observed D-index against reference count within those strata.
- Repeat across fields, cohorts, citation windows, and database snapshots before making a universal invariance claim.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2026) analyzes 929,900 OpenAlex papers with similar local displacement levels and at least 10 citations.
- The paper compares observed values with the theoretical approximation across `b_p` groups and reports close alignment over a broad range of reference lengths.
- Once `d_p` and `b_p` are accounted for, reference count has no residual effect in the reported analysis.

## Caveats

- Component conditioning can hide pathways through which reference length changes `d_p` or predecessor selection.
- The reported design focuses on papers with at least 10 citations and therefore does not establish invariance for sparse-citation cases.
- Database coverage and reference parsing can still vary over time even when bibliography length itself has no residual effect.

## Links

- [disruption index](../measures/disruption_index.md)
- [local displacement factor](../measures/local_displacement_factor.md)
- [relative predecessor dominance factor](../measures/relative_predecessor_dominance_factor.md)
- [reference-list length growth confound](reference_list_length_growth_confound.md)
- [disruption measure validation](disruption_measure_validation.md)
- [OpenAlex disruption-decomposition corpus](../datasets/openalex_disruption_decomposition_corpus.md)

## References

- Lin, Y., Li, L., & Wu, L. (2026). The Disruption Index measures displacement between a paper and its most cited reference. *Quantitative Science Studies*, 7, 229-239. https://doi.org/10.1162/QSS.a.409 [OpenAlex: W7119230500; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `d_index_reference_length_invariance`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2026) (2026)
- Latest seen paper: Lin et al. (2026) (2026)
- Primary reference DOI: `10.1162/qss.a.409`
- OpenAlex ID: `W7119230500`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: disruption citation-inflation robustness; D-index bibliography-length invariance; reference-count residual test
