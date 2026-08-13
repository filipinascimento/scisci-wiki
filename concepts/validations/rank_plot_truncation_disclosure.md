# Rank-plot truncation disclosure

## Summary

Rank-plot truncation disclosure is the validation rule that rank plots should state when they show only the top-ranked segment of a larger corpus.

## Canonical Form

- Unit of analysis: rank plot, citation list, corpus denominator, top-ranked subset, or fitted tail.
- Typical representation: plot caption, preprocessing note, or denominator disclosure.
- Validation target: prevent readers from mistaking a truncated tail plot for a complete distribution.
- Empirical signature: the plotted rank range and full corpus size are both reported.

## Uses in Science of Science

- Adds a preprocessing disclosure layer to [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md).
- Complements [asymptotic tail-reach diagnostic](asymptotic_tail_reach_diagnostic.md), which asks whether the plotted range reaches the true asymptotic tail.
- Connects rank plots to the [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md) denominator.
- Supports reproducible [citation rank-exceedance mapping](../methods/citation_rank_exceedance_mapping.md).

## Operationalization

- Record the full corpus size and the number of top-ranked observations used in the plot.
- State whether omitted observations are low-citation papers, zero-citation papers, or unavailable records.
- Avoid fitting global distribution claims from a top-only plot.
- Compare top-only rank plots with full distribution summaries when possible.
- Include the truncation rule in figure captions and methods.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) uses only the top segment of the ISI rank plot while using complete PRD data.
- The contrast makes preprocessing disclosure important because the two plotted corpora have different completeness.
- This motif is distinct from a tail-reach diagnostic because it focuses on whether truncation is documented at all.
- It protects downstream readers from interpreting a tail plot as evidence about low- and middle-citation regimes.

## Caveats

- Top-only plots can be appropriate for tail inference when the goal is explicit.
- Disclosure does not solve sampling bias if the top list itself was constructed with unknown rules.
- Truncation interacts with ties and zero-citation mass.

## Links

- [Zipf citation-tail inference](../methods/zipf_citation_tail_inference.md)
- [asymptotic tail-reach diagnostic](asymptotic_tail_reach_diagnostic.md)
- [ISI 1981 citation-distribution cohort](../datasets/isi_1981_citation_distribution_cohort.md)
- [citation rank-exceedance mapping](../methods/citation_rank_exceedance_mapping.md)
- [citation-regime stratified modeling](../methods/citation_regime_stratified_modeling.md)
- [citation threshold profile](../measures/citation_threshold_profile.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; SciSciNet: W2062021443; WoS: unknown]

## Metadata

- Concept ID: `rank_plot_truncation_disclosure`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: top-rank plot disclosure; rank-list truncation note; citation rank denominator disclosure; truncated rank plot caveat
