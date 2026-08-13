# Domain-specific impact proxy alignment

## Summary

Domain-specific impact proxy alignment maps different career-output domains to comparable ordered impact signals while preserving the caveats of each domain-specific proxy.

## Canonical Form

- Unit of analysis: output, career, domain, impact proxy, rank ordering, or transformed impact value.
- Typical representation: domain-to-proxy table, transformed impact series, rank-preserving proxy, or cross-domain measurement audit.
- Method target: allow career-dynamics models to be tested across domains without pretending that all impact proxies measure the same thing.
- Empirical signature: artworks, films, and papers are each assigned a domain-appropriate impact value and then analyzed through shared sequence-level statistics.

## Uses in Science of Science

- Provides the measurement bridge behind [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md).
- Lets [hot streaks](../mechanisms/hot_streaks.md) be tested across art, film, and science with comparable sequence methods.
- Supports [top-hit distance enrichment curves](../measures/top_hit_distance_enrichment_curve.md), [top-hit colocation matrices](../representations/top_hit_colocation_matrix.md), and [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md).
- Adds a caveat layer for [domain-specific SciSci studies](domain_specific_scisci_studies.md) and [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Define the output unit in each domain: artwork, film, paper, patent, dataset, software release, or other product.
- Select an impact proxy appropriate to that domain and state what it captures.
- Transform skewed proxies when needed, while preserving rank order for top-hit analyses.
- Use shared sequence statistics only after recording domain-specific measurement limits.
- Test robustness to alternative impact proxies, inflation corrections, and inclusion thresholds.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) aligns artists, film directors, and scientists by ordering their artworks, films, and papers within careers.
- The paper uses auction prices for artworks, IMDB ratings for films, and ten-year citations for scientific papers as domain-specific impact proxies.
- Liu et al. log-transform hammer prices and ten-year citations because those distributions are fat-tailed, while IMDB ratings follow a bounded rating scale.
- The methods report that the log transform preserves rank ordering of top hits and does not affect the paper's main conclusions.
- The paper also notes that the data-driven scope is limited to individuals with enough recorded outputs to support career-level analysis.

## Caveats

- Auction price, film rating, and citations are not semantically identical forms of impact.
- Market, audience, and scholarly attention systems differ in bias, coverage, and time lag.
- Proxy transformations can make modeling easier without solving construct-validity limits.
- Cross-domain regularity should be interpreted as evidence about sequence structure, not identical causal mechanisms.

## Links

- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [hot streaks](../mechanisms/hot_streaks.md)
- [top-hit distance enrichment curve](../measures/top_hit_distance_enrichment_curve.md)
- [top-hit colocation matrix](../representations/top_hit_colocation_matrix.md)
- [longest high-impact streak excess](../validations/longest_high_impact_streak_excess.md)
- [hot-streak performance-state model](hot_streak_performance_state_model.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [domain-specific SciSci studies](domain_specific_scisci_studies.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; SciSciNet: W2808505390; WoS: unknown]

## Metadata

- Concept ID: `domain_specific_impact_proxy_alignment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: cross-domain impact proxy alignment; domain-specific career impact proxies; auction-rating-citation alignment; creative impact proxy mapping
