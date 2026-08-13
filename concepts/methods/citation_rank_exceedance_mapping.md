# Citation rank-exceedance mapping

## Summary

Citation rank-exceedance mapping is the method of linking a paper's rank in a citation list to the number of papers exceeding a citation threshold.

## Canonical Form

- Unit of analysis: ranked paper, citation threshold, exceedance count, citation distribution, or Zipf plot.
- Typical representation: rank-threshold equation, exceedance curve, or rank plot.
- Method target: translate between rank-ordered citation views and distributional tail probabilities.
- Empirical signature: the kth-ranked paper corresponds to the citation value for which k papers have at least that many citations.

## Uses in Science of Science

- Provides the mathematical bridge underneath [Zipf citation-tail inference](zipf_citation_tail_inference.md).
- Links citation ranks to [citation threshold profile](../measures/citation_threshold_profile.md).
- Helps interpret [scaled Zipf data collapse](scaled_zipf_data_collapse.md).
- Supports transparent construction of tail plots before fitting exponents or thresholds.

## Operationalization

- Sort papers by citation count in descending order.
- For each rank, record the citation count and the number of papers exceeding that count.
- Map rank curves to cumulative distribution or survival-function views.
- Disclose ties, zero-citation handling, and corpus truncation.
- Use [rank-plot truncation disclosure](../validations/rank_plot_truncation_disclosure.md) when only the top segment is shown.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) formalizes the relationship between the kth-ranked paper and the integrated number of papers above its citation threshold.
- The paper uses this mapping to connect Zipf plots with citation distributions.
- This motif is distinct from tail inference because it is the general rank-exceedance construction step.
- It is reusable for citation, download, altmetric, and other attention-ranked corpora.

## Caveats

- Ties in citation counts can make rank-threshold mapping ambiguous.
- Truncated rank lists cannot represent the full exceedance curve without denominator disclosure.
- Rank views can hide the mass of zero- and low-citation papers.

## Links

- [Zipf citation-tail inference](zipf_citation_tail_inference.md)
- [citation threshold profile](../measures/citation_threshold_profile.md)
- [scaled Zipf data collapse](scaled_zipf_data_collapse.md)
- [rank-plot truncation disclosure](../validations/rank_plot_truncation_disclosure.md)
- [citation-regime stratified modeling](citation_regime_stratified_modeling.md)
- [attention inequality](../mechanisms/attention_inequality.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; SciSciNet: W2062021443; WoS: unknown]

## Metadata

- Concept ID: `citation_rank_exceedance_mapping`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: rank-threshold citation mapping; citation exceedance rank curve; citation survival-rank bridge; rank-exceedance mapping
