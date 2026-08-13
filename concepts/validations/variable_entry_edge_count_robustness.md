# Variable entry-edge count robustness

## Summary

Variable entry-edge count robustness is the check that nonconstant numbers of edges added by new nodes do not automatically invalidate a scale-free growth model.

## Canonical Form

- Unit of analysis: entering node, edge count at entry, growth model, simulation variant, or degree exponent.
- Typical representation: fixed-m model, random-m variant, sensitivity simulation, or robustness note.
- Validation target: whether heterogeneous reference-list lengths, web-page links, or collaboration ties at node entry change the expected degree-tail behavior.
- Empirical signature: allowing new nodes to enter with varying edge counts preserves the exponent in the tested model class.

## Uses in Science of Science

- Separates fixed-parameter simplification from substantive assumptions in the [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md).
- Helps interpret citation networks where new papers have variable reference-list lengths and author networks where new entrants form different numbers of collaborations.
- Connects degree-tail modeling to [reference-list length growth confound](reference_list_length_growth_confound.md) when entry-edge distributions change over historical time.
- Provides a robustness layer for [linear preferential-attachment kernels](../measures/linear_attachment_kernel.md) and [scale-free exponent derivation](../methods/scale_free_exponent_derivation.md).

## Operationalization

- Estimate or simulate entry-edge counts for new nodes in the observed network.
- Compare fixed-m and variable-m growth variants while holding the attachment rule constant.
- Report whether exponent, tail fit, and model residuals change materially.
- Distinguish cross-sectional entry-edge heterogeneity from secular growth in reference-list or collaboration norms.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) defines the base model with each new vertex adding m edges.
- In a note, the paper states that most networks do not have constant new-vertex connectivity, but choosing m randomly does not change the exponent gamma.
- The result marks variable entry-edge count as a robustness dimension rather than a decisive rejection of the paired growth and preferential-attachment mechanism.

## Caveats

- Robustness to random m does not cover all edge-entry processes, especially time-trending reference lengths or field-specific citation norms.
- Very heavy-tailed entry-edge distributions can change finite-sample diagnostics even if the asymptotic exponent is stable.
- The check does not validate preferential attachment by itself.

## Links

- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [scale-free exponent derivation](../methods/scale_free_exponent_derivation.md)
- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [reference-list length growth confound](reference_list_length_growth_confound.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; SciSciNet: W2008620264; WoS: unknown]

## Metadata

- Concept ID: `variable_entry_edge_count_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: random-m robustness; variable new-node degree check; entry-edge heterogeneity robustness; new-vertex connectivity robustness
