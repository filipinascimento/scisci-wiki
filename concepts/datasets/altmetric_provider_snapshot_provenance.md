# Altmetric provider snapshot provenance

## Summary

Altmetric provider snapshot provenance records which attention provider, source list, collection start date, delivery date, and data-cleaning rules produced a set of altmetric indicators.

## Canonical Form

- Unit of analysis: provider export, paper-source record, event snapshot, source-specific count, or attention score.
- Typical representation: provider name, delivery date, collection start date, covered identifiers, source list version, cleaning rules, and known collection gaps.
- Data target: make online-attention data auditable despite platform drift and provider-specific tracking.
- Empirical signature: altmetric analyses are tied to a provider snapshot rather than to a stable universal record of online attention.

## Uses in Science of Science

- Supplies provenance for [altmetrics](altmetrics.md), [social media attention channels](social_media_attention_channels.md), and [altmetric composite scores](../measures/altmetric_composite_scores.md).
- Provides the versioning context needed for [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md), [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md), and [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md).
- Links provider exports to [altmetric source-list curation](../methods/altmetric_source_list_curation.md) and [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md).
- Supports replication because online platforms, APIs, source lists, and provider cleaning routines change over time.
- Supplies the provenance layer for [altmetric event-context metadata](altmetric_event_context_metadata.md), [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md), and [altmetric score age-journal normalization](../methods/altmetric_score_age_journal_normalization.md).

## Operationalization

- Record the provider, export date, API endpoint or delivery mode, collection start date, and source-list scope.
- Preserve raw source-specific counts alongside provider-supplied composite scores.
- Document cleaning rules such as duplicate DOI handling, [unique-user counting](../methods/altmetric_unique_actor_deduplication.md), source weighting, and score normalization.
- Keep provider limitations explicit: missing periods, incomplete backfill, coverage restricted to identifier-bearing outputs, or conditional source collection.
- Treat provider snapshots as time-stamped datasets rather than as permanently current measures.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) uses Altmetric.com data delivered on January 1, 2013, with scores gathered since July 2011.
- Thelwall et al. note that the system was under development and may have had periods of lost data, making provider provenance part of the validation context.
- Verified full-text evidence from Costas et al. (2015) uses Altmetric.com records downloaded on October 14, 2013, and describes Altmetric.com as storing collected data over time to reduce volatility.
- Costas et al. also state that their study is bound by the data provider and should be interpreted cautiously because it relies on Altmetric.com's ability to collect robust and reliable data.
- The paper reports provider-side cleaning and standardization such as counting unique Twitter users, offering source-weighted attention scores, and providing context for social-media mentions.
- Verified full-text evidence from Haunschild and Bornmann (2017) adds a policy-source snapshot: their Altmetric data were retrieved on December 19, 2015, when more than 100 policy-related sources were tracked.

## Caveats

- Provider provenance does not prove data completeness.
- Source lists, APIs, access policies, URL matching, and identifier matching can change without being visible in downstream counts.
- Provider-supplied stability can reduce volatility while still preserving historical gaps or source-list bias.
- A snapshot suitable for descriptive research may not be sufficient for evaluation or longitudinal monitoring.

## Links

- [altmetrics](altmetrics.md)
- [social media attention channels](social_media_attention_channels.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)
- [altmetric event-context metadata](altmetric_event_context_metadata.md)
- [altmetric unique-actor deduplication](../methods/altmetric_unique_actor_deduplication.md)
- [altmetric score age-journal normalization](../methods/altmetric_score_age_journal_normalization.md)
- [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md)
- [altmetric zero-score semantics](../validations/altmetric_zero_score_semantics.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [Altmetric policy source tracker](altmetric_policy_source_tracker.md)
- [Mendeley conditional collection bias](../validations/mendeley_conditional_collection_bias.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `altmetric_provider_snapshot_provenance`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Aliases: altmetric snapshot provenance; provider export provenance; Altmetric.com snapshot; online attention snapshot metadata
