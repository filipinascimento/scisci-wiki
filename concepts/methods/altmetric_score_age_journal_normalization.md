# Altmetric score age-journal normalization

## Summary

Altmetric score age-journal normalization adjusts or contextualizes a composite online-attention score relative to papers of similar age and papers in the same journal, so raw attention is not interpreted without exposure context.

## Canonical Form

- Unit of analysis: paper, composite attention score, publication age, journal, source-weighted mention count, or provider score.
- Typical representation: age-normalized score, same-journal comparator, source-weighted score, or provider-context percentile.
- Method target: make provider-supplied attention scores more comparable across papers with different ages and publication venues.
- Empirical signature: a provider score is not just a source-count sum; it embeds source weights, age controls, venue controls, and anti-gaming rules.

## Uses in Science of Science

- Qualifies [altmetric composite scores](../measures/altmetric_composite_scores.md) by making provider-side normalization explicit.
- Connects score construction to [altmetric attention timing windows](altmetric_attention_timing_windows.md) and [altmetric publication-month filter](altmetric_publication_month_filter.md).
- Provides metadata needed for [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md) and [responsible metrics](../measures/responsible_metrics.md).
- Helps interpret [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md) because source weights and source coverage jointly shape the scalar score.

## Operationalization

- Record whether the composite is provider-supplied or researcher-constructed.
- Preserve the source-specific count vector before applying any scalar score.
- Document the age comparator, journal comparator, source weights, and anti-gaming controls if the provider discloses them.
- Compare conclusions using raw source counts, unweighted totals, and provider-normalized scores.
- Treat undisclosed or changing provider formulas as part of [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md).

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) describes Altmetric.com's score as combining the quantity of attention with source-weighted quality.
- The paper states that the provider score applies normalization or control by papers of similar age and within the same journal.
- Costas et al. separately construct an exploratory total-altmetrics sum from Facebook, blogs, Twitter, Google+, and news counts, making clear that provider-normalized scores and researcher-built totals are different objects.
- Their factor analysis and Twitter dominance results show why normalized or weighted composite scores still need source-specific validation.

## Caveats

- Provider normalization formulas can be proprietary or change over time.
- Same-journal comparison may not remove field, topic, language, promotion, or article-type differences.
- Age normalization does not solve source-list bias, identifier matching loss, or zero-score semantics.
- Anti-gaming controls reduce but do not eliminate strategic behavior or automated promotion.

## Links

- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric attention timing windows](altmetric_attention_timing_windows.md)
- [altmetric publication-month filter](altmetric_publication_month_filter.md)
- [altmetric source factor structure](../representations/altmetric_source_factor_structure.md)
- [Twitter dominance composite bias](../validations/twitter_dominance_composite_bias.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_score_age_journal_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: age-normalized altmetric score; same-journal altmetric normalization; provider attention-score normalization; source-weighted altmetric score
