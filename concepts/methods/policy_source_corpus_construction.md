# Policy-source corpus construction

## Summary

Policy-source corpus construction defines which policy-related sites, organizations, document types, identifiers, and matching rules are included before policy mentions are counted.

## Canonical Form

- Unit of analysis: policy source, policy document, scholarly paper, DOI, URL, source organization, crawl date, or matching rule.
- Typical representation: tracked source list, policy-document corpus, DOI/API matching workflow, source-country table, or coverage manifest.
- Method target: make [policy document mentions](../measures/policy_document_mentions.md) reproducible and auditable.
- Empirical signature: mention rates depend strongly on which policy-related sites are tracked and which scholarly identifiers are matchable.

## Uses in Science of Science

- Provides the data-construction layer for [policy document mentions](../measures/policy_document_mentions.md) and [policy attention coverage bias](../validations/policy_attention_coverage_bias.md).
- Separates policy-corpus coverage from substantive policy uptake.
- Supports country-, organization-, and topic-specific policy-attention studies.
- Requires [policy source list transparency](../validations/policy_source_list_transparency.md) when the corpus is used for comparative or evaluative analysis.

## Operationalization

- Record the provider, source list, source geography, document types, crawl dates, and language coverage.
- Match scholarly works by DOI, URL, title, or bibliographic string, preserving match method and confidence.
- Use [DOI recovery consistency checks](doi_recovery_consistency_checks.md) when DOI coverage is expanded before provider matching.
- Keep DOI coverage separate from policy-source coverage.
- Repeat or version the corpus regularly because provider source lists expand over time.
- Represent provider-side source snapshots with [Altmetric policy source trackers](../datasets/altmetric_policy_source_tracker.md), and publication-side denominators with [WoS-Altmetric policy mention panels](../datasets/wos_altmetric_policy_mention_panel.md).
- Preserve policy-document identifiers, source URLs, language, and document dates so [policy document deduplication](../validations/policy_document_deduplication.md) and [policy mention time lag](../measures/policy_mention_time_lag.md) can be audited.
- Classify document types so the [assessment report policy boundary](../validations/assessment_report_policy_boundary.md) is visible when interpreting policy-related documents.
- Preserve topic-specific denominators such as the [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md) when interpreting sparse coverage rates.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) describes Altmetric's Policy Miner as a text-mining solution for detecting publication mentions in policy documents.
- Bornmann et al. list example tracked organizations such as EFSA, GOV.UK, IPCC, WHO, UNESCO, World Bank, and others, while noting that sources were limited mainly to major organizations from North America and Europe.
- Their climate-change workflow constructs a DOI-bearing corpus by combining WoS DOI fields with Crossref DOI recovery and then querying Altmetric's API for policy mentions.
- Verified full-text evidence from Haunschild and Bornmann (2017) reports that more than 100 policy-related sources were tracked by Altmetric in their December 2015 data and recommends repeating coverage analyses regularly as sources expand.
- Bornmann et al. also note that policy sources were limited mainly to major organizations from North America and Europe, motivating source-list provenance when interpreting [policy mention enrichment profiles](policy_mention_enrichment_profiles.md).
- Haunschild and Bornmann also report that their broad Web of Science merge was DOI-only, so policy source construction and DOI denominator construction must be tracked separately.

## Caveats

- A policy corpus is never the full policy universe; it is a tracked-source sample.
- DOI-only matching excludes policy use of research without DOI-resolvable references.
- Source expansion changes time-series comparability unless the source list is versioned.

## Links

- [policy document mentions](../measures/policy_document_mentions.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy source list transparency](../validations/policy_source_list_transparency.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md)
- [policy source regional/language bias](../validations/policy_source_regional_language_bias.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [policy document deduplication](../validations/policy_document_deduplication.md)
- [assessment report policy boundary](../validations/assessment_report_policy_boundary.md)
- [DOI recovery consistency checks](doi_recovery_consistency_checks.md)
- [policy mention enrichment profiles](policy_mention_enrichment_profiles.md)
- [policy mention time lag](../measures/policy_mention_time_lag.md)
- [altmetrics](../datasets/altmetrics.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_source_corpus_construction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: policy source list; policy corpus construction; policy document tracking; policy miner workflow
