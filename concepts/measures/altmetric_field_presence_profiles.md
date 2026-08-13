# Altmetric field presence profiles

## Summary

Altmetric field presence profiles measure how often papers in different fields have any tracked online-attention event and how source mixes vary across broad disciplinary areas.

## Canonical Form

- Unit of analysis: paper, field, subject category, publication year, source channel, DOI-bearing paper set, or provider snapshot.
- Typical representation: field-by-source coverage table, nonzero altmetric share, source density by field, or field-specific source profile.
- Measurement target: field differences in online-attention availability before comparing altmetric counts or scores.
- Empirical signature: some fields have substantially higher source presence than others, and high-volume sources such as Twitter can dominate the field profile.

## Uses in Science of Science

- Extends [altmetric coverage sparsity](altmetric_coverage_sparsity.md) from a global denominator check to a field-specific denominator.
- Helps prevent field comparisons in [altmetrics](../datasets/altmetrics.md) from confusing attention differences with source coverage and platform adoption.
- Provides field context for [Twitter mention counts](twitter_mention_counts.md), [blog and news mention counts](blog_and_news_mention_counts.md), and [altmetric composite scores](altmetric_composite_scores.md).
- Supplies the stratification layer for [altmetric-citation association](../validations/altmetric_citation_association.md) and [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md).

## Operationalization

- Define the eligible publication set, source snapshot, publication years, DOI or identifier requirements, and field classification system.
- Calculate the share of papers with any altmetric event and with each source-specific event by field.
- Report source density separately from citation density, and document whether zeros mean no event, no identifier, or no provider coverage.
- Use field-specific profiles before comparing papers, authors, journals, institutions, or countries on altmetric counts.

## Evidence and Validations

- Verified full-text evidence from Costas, Zahedi, and Wouters (2015) matches Altmetric.com DOI records to a Web of Science population and studies source presence across broad fields.
- In their July-2011-onward sample, 15% of papers had at least one altmetric score, but field shares differed substantially.
- Costas et al. report the highest altmetric presence in biomedical and health sciences and in social sciences and humanities, each above 22% of publications, while natural sciences and engineering and mathematics and computer science were below 10%.
- They also show that source profiles are uneven: Twitter accounts for most nonzero altmetric presence, while Facebook, blogs, Google+, and news outlets are much sparser.

## Caveats

- Field profiles are properties of a provider, source list, identifier coverage, platform adoption, and snapshot date.
- Cross-field differences may reflect public interest, professional platform use, language coverage, source curation, or data-provider matching rules.
- Field-normalized altmetric analysis should not erase source-specific meaning; it only adjusts denominator differences.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [altmetric active universe](../methods/altmetric_active_universe.md)
- [altmetric composite scores](altmetric_composite_scores.md)
- [Twitter mention counts](twitter_mention_counts.md)
- [blog and news mention counts](blog_and_news_mention_counts.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [field classifications](field_classifications.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [responsible metrics](responsible_metrics.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `altmetric_field_presence_profiles`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: field-specific altmetric coverage; altmetric source presence by field; disciplinary altmetric profiles; field altmetric density
