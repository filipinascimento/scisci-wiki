# Altmetric source collection-mode heterogeneity

## Summary

Altmetric source collection-mode heterogeneity is the method caveat that source counts are not directly comparable when each source is captured through a different technical route, such as firehose access, platform APIs, scraping, or curated outlet lists.

## Canonical Form

- Unit of analysis: source channel, provider snapshot, paper-source count, API route, scraped source, curated list, or event stream.
- Typical representation: source-by-collection-mode table, provider provenance field, collection-mode flag, or source comparability audit.
- Method target: distinguish real source differences from differences created by collection access and tracking infrastructure.
- Empirical signature: two sources can have different coverage, latency, and false-zero behavior because they were collected through different mechanisms.

## Uses in Science of Science

- Refines [social media attention channels](../datasets/social_media_attention_channels.md) by recording how each source was acquired.
- Extends [altmetric source-list curation](altmetric_source_list_curation.md) beyond source membership to the technical mode of capture.
- Supplies provenance for [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md) and [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md).
- Helps decide whether source-specific counts can be compared, merged, or treated as separate measurement instruments.

## Operationalization

- For each source, record whether the provider used licensed firehose data, a public API, direct scraping, manually curated feeds, or publisher-defined source lists.
- Record collection start date, known outages, backfill policy, identifier-matching rules, and whether missing records are reliable zeros.
- Analyze coverage and citation-association results source by source before building a composite score.
- Treat source-mode changes over time as versioned metadata rather than as a stable property of the source.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) describes eleven source channels captured through heterogeneous routes.
- Twitter and Facebook wall posts use licensed firehose data, Google+, Reddit, LinkedIn, and question-answer sources use API-style checks, forums and Pinterest are scraped, and blogs and mainstream media rely on curated source lists.
- The same paper warns that collection processes vary across altmetrics, so a positive score in one source does not imply that all other sources were effectively monitored for that article.
- This supports keeping collection mode as explicit metadata when using source counts for validation or evaluation.

## Caveats

- Collection mode does not fully determine data quality; source culture, user adoption, identifier matching, and platform policy also matter.
- Providers may change APIs, source lists, and backfill practices without preserving historical comparability.
- Some source-mode metadata may be unavailable in commercial snapshots and must be documented as unknown.

## Links

- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric source-list curation](altmetric_source_list_curation.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `altmetric_source_collection_mode_heterogeneity`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric collection modes; source acquisition heterogeneity; API firehose scraping mix; source-mode provenance
