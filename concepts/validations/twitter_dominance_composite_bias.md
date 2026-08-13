# Twitter dominance composite bias

## Summary

Twitter dominance composite bias occurs when a composite altmetric score mostly reflects Twitter activity because Twitter has far higher source coverage or event volume than other included channels.

## Canonical Form

- Unit of analysis: paper, source-specific count vector, composite altmetric score, publication field, source channel, or provider snapshot.
- Typical representation: source contribution share, source-composite correlation, dominance ratio, or sensitivity test that removes the dominant source.
- Validation target: determine whether a composite online-attention score represents multiple sources or mostly one high-volume platform.
- Empirical signature: the composite score correlates most strongly with Twitter counts and changes little source ordering after lower-coverage sources are added.

## Uses in Science of Science

- Validates [altmetric composite scores](../measures/altmetric_composite_scores.md) before treating them as broad online-attention measures.
- Connects [Twitter mention counts](../measures/twitter_mention_counts.md) to [altmetric source factor structure](../representations/altmetric_source_factor_structure.md).
- Helps decide when source-specific models are preferable to a scalar score in [altmetrics](../datasets/altmetrics.md).
- Provides a guardrail for [responsible metrics](../measures/responsible_metrics.md) when composite attention indicators are used in dashboards or rankings.

## Operationalization

- Store a paper-by-source count vector and compute the composite score.
- Calculate source shares, source-composite correlations, and the composite score with and without Twitter.
- Record whether Twitter was counted as raw posts or unique actors through [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md).
- Repeat by field, publication year, and provider snapshot because source dominance can drift.
- Report whether conclusions are robust to source weighting, transformations, and source removal.

## Evidence and Validations

- Verified full-text evidence from Costas, Zahedi, and Wouters (2015) finds that Twitter is the most prevalent Altmetric.com source in their multidisciplinary Web of Science sample.
- In their July-2011-onward population, Twitter mentions appear for 13.3% of all sampled papers and 88.1% of papers with any altmetric score.
- Costas et al. report that their exploratory total-altmetrics indicator correlates mostly with Twitter, which they interpret as expected because Twitter dominates the indicator.
- Their factor analysis also separates Twitter, Facebook, Google+, and total altmetrics from the blog/news dimension, reinforcing the need to inspect source dominance before using a composite.

## Caveats

- Twitter dominance is source- and time-specific; other providers or later platform ecosystems may have different dominant channels.
- Dominance can reflect real attention concentration, provider coverage, API access, bot behavior, or source weighting.
- Removing Twitter may improve construct balance but reduce coverage and statistical power.

## Links

- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md)
- [altmetric source factor structure](../representations/altmetric_source_factor_structure.md)
- [altmetric field presence profiles](../measures/altmetric_field_presence_profiles.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `twitter_dominance_composite_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: Twitter-dominated altmetric score; source dominance bias; composite source dominance; total altmetrics Twitter bias
