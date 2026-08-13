# Eigenfactor cost-effectiveness

## Summary

Eigenfactor cost-effectiveness compares journal or bundle subscription price with Eigenfactor Score to estimate influence obtained per unit cost.

## Canonical Form

- Unit of analysis: journal, bundle, library subscription, price year, or collection portfolio.
- Typical representation: price per Eigenfactor point, Eigenfactor per dollar, cost-influence ratio, or collection value rank.
- Measurement target: network-weighted citation influence relative to access cost.
- Empirical signature: journals or bundles with similar prices differ in citation-network influence, or high-influence bundles differ in price efficiency.

## Uses in Science of Science

- Connects bibliometric influence to library collection decisions.
- Operationalizes a purchasing use case for [Eigenfactor Score](eigenfactor_score.md) and [Eigenfactor bundle influence](eigenfactor_bundle_influence.md).
- Complements [citation-based source selection](../methods/citation_based_source_selection.md), which ranks sources by citation coverage rather than price efficiency.
- Provides a concrete example of why [responsible metrics](responsible_metrics.md) must pair indicators with mission and local context.

## Operationalization

- Collect journal or bundle prices for a defined subscription period.
- Match titles or bundles to Eigenfactor Scores with title normalization and coverage checks.
- Compute cost per Eigenfactor share or Eigenfactor share per unit cost.
- Compare results with local usage, field needs, access equity, teaching value, and package constraints.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) states that when asking about the total value of a journal, it is useful to compare subscription price with Eigenfactor Score.
- The paper ties this application to the model researcher's visit share, making Eigenfactor a total-influence denominator for cost-effectiveness analysis.
- West et al. also emphasize that Eigenfactor Score is additive, allowing package-level cost comparisons when prices are attached to journal bundles.

## Caveats

- Citation-network influence is not the same as local usage, pedagogical value, access equity, or mission relevance.
- Subscription prices can be bundled, negotiated, confidential, or cross-subsidized, making simple per-journal ratios incomplete.
- Scores and prices must be aligned in time; stale citation or price data can distort cost-effectiveness.

## Links

- [Eigenfactor Score](eigenfactor_score.md)
- [Eigenfactor bundle influence](eigenfactor_bundle_influence.md)
- [Eigenfactor metrics](eigenfactor_metrics.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)
- [citation-age backfile retention](../methods/citation_age_backfile_retention.md)
- [responsible metrics](responsible_metrics.md)
- [mission-aligned indicator selection](../methods/mission_aligned_indicator_selection.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; WoS: unknown]

## Metadata

- Concept ID: `eigenfactor_cost_effectiveness`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: price per Eigenfactor; Eigenfactor per dollar; journal cost influence ratio; collection cost-effectiveness
