# Self-benchmark hit/flop rates

## Summary

Self-benchmark hit/flop rates count how often a scientist's later papers exceed their own best pre-event citation benchmark or fall below their own weakest pre-event citation benchmark.

## Canonical Form

- Unit of analysis: scientist, pre-event paper portfolio, post-event paper, citation quantile, or funding event.
- Typical representation: post-event hit count above the scientist's highest pre-event citation quantile and flop count below the scientist's lowest pre-event citation quantile.
- Measurement target: whether an intervention changes both the upside and downside tails relative to each scientist's own prior performance.
- Empirical signature: exploratory regimes can increase both hits and flops.

## Uses in Science of Science

- Converts risky exploration into a distributional career measure rather than a mean-impact measure.
- Provides a self-normalized counterpart to [vintage-specific citation-tail output](vintage_specific_citation_tail_output.md).
- Links [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md) to [novelty impact dispersion](novelty_impact_dispersion.md).
- Helps distinguish rising-star selection from changed risk-taking: a program that only selects strong scientists should not necessarily increase flops.

## Operationalization

- Define a pre-event period and compute each scientist's highest and lowest article-level citation quantile over that period.
- Count post-event papers above the scientist's highest pre-event quantile as hits.
- Count post-event papers below the scientist's lowest pre-event quantile as flops.
- Use the full pre-event record consistently and note that this may limit within-scientist difference-in-differences designs.

## Evidence and Validations

- Verified full-text evidence from Azoulay et al. (2009) computes post-appointment hits and flops relative to each scientist's own pre-appointment citation-impact record.
- The paper reports that HHMI appointment increases both hit frequency and flop frequency, consistent with riskier exploratory bets rather than only rising-star selection.
- Azoulay et al. note that the self-benchmark measures are analyzed cross-sectionally because the full pre-appointment citation record is used to construct the individual benchmark.

## Caveats

- Self-benchmarks are sensitive to pre-event career length and outlier papers.
- A scientist with an unusually high pre-event best paper faces a harder hit threshold.
- Low citation quantiles can reflect field or publication-type differences, not only failed exploration.

## Links

- [vintage-specific citation-tail output](vintage_specific_citation_tail_output.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [novelty impact dispersion](novelty_impact_dispersion.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [citation percentile indicators](citation_percentile_indicators.md)

## References

- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and creativity: Evidence from the academic life sciences. *NBER Working Paper Series*, No. 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `self_benchmark_hit_flop_rates`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Azoulay et al. (2009) (2009)
- Latest seen paper: Azoulay et al. (2009) (2009)
- Primary reference DOI: `10.3386/w15466`
- OpenAlex ID: `W3024332105`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: scientist-relative hits and flops; pre-appointment citation benchmark; self-normalized risk outcome; personal citation-tail benchmark
