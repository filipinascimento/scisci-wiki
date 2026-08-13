# Vintage-specific citation-tail output

## Summary

Vintage-specific citation-tail output counts a scientist's, entrant group's, or field's papers that fall into high citation quantiles within publication-year-specific article-level citation distributions.

## Canonical Form

- Unit of analysis: scientist, entrant group, subfield, paper, publication year, citation quantile, or funding-program period.
- Typical representation: count of papers in the top quartile, top 5%, or top 1% of same-vintage citation distributions.
- Measurement target: high-impact output adjusted for citation-age truncation.
- Empirical signature: treatment or program effects grow larger at more extreme citation-tail thresholds.

## Uses in Science of Science

- Specializes [citation percentile indicators](citation_percentile_indicators.md) for career and funding-program evaluation.
- Provides a top-tail outcome for [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md) and [HHMI-NIH incentive contrast](../methods/hhmi_nih_incentive_contrast.md).
- Complements average citation measures by focusing on breakthrough-like outputs.
- Can be paired with [self-benchmark hit/flop rates](self_benchmark_hit_flop_rates.md) to inspect both universal and scientist-relative tails.
- Supports [intellectual rejuvenation decomposition](intellectual_rejuvenation_decomposition.md) when field-entry designs ask whether entrant papers are disproportionately high impact.

## Operationalization

- Build empirical citation distributions separately by publication year, field, and document type.
- Choose high-tail thresholds such as top 25%, top 5%, and top 1%.
- Count papers by scientist and period that exceed each threshold.
- Exclude or separately treat reviews, editorials, letters, and unusually large collaborations when they distort originality or credit interpretation.

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2009) measures creative output by counting publications in the top quartile, top 5%, and top 1% of vintage-specific article-level citation distributions.
- The paper computes separate empirical cumulative citation distributions for each publication year to address truncation: older articles have more time to accumulate citations.
- Azoulay et al. report that HHMI appointment effects increase toward the citation tail, with the preferred estimate larger for top 1% papers than for all publications.
- Verified full-text evidence from Azoulay, Fons-Rosen, and Graff Zivin (2019) bins non-collaborator subfield articles by publication-year citation quantiles and finds that post-death entry effects increase toward the high-citation tail.

## Caveats

- Citation tails are attention measures, not direct creativity or social value.
- Extreme-tail counts are noisy for small portfolios.
- Field, document-type, citation-window, and database choices can change tail membership.

## Links

- [citation percentile indicators](citation_percentile_indicators.md)
- [top-percentile publication share](top_percentile_publication_share.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [HHMI-NIH incentive contrast](../methods/hhmi_nih_incentive_contrast.md)
- [intellectual rejuvenation decomposition](intellectual_rejuvenation_decomposition.md)
- [outsider entry after star death](../mechanisms/outsider_entry_after_star_death.md)
- [self-benchmark hit/flop rates](self_benchmark_hit_flop_rates.md)
- [novelty impact dispersion](novelty_impact_dispersion.md)
- [citation window selection](../methods/citation_window_selection.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]
- Azoulay, P., Fons-Rosen, C., & Graff Zivin, J. S. (2019). Does Science Advance One Funeral at a Time? *American Economic Review*, 109(8), 2889-2920. https://doi.org/10.1257/aer.20161574 [OpenAlex: W2193631239; Dimensions: pub.1120042002; WoS: unknown]

## Metadata

- Concept ID: `vintage_specific_citation_tail_output`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2019) (2019)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: vintage-adjusted citation tail; top-tail publication count; year-specific citation quantile output; high-impact publication tail
