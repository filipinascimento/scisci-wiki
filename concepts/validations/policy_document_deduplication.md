# Policy document deduplication

## Summary

Policy document deduplication is the validation step that detects when the same or near-same policy document is counted multiple times across languages, mirrors, editions, document formats, or source pages.

## Canonical Form

- Unit of analysis: policy document, policy-document mention, document URL, source organization, language version, DOI-reference event, or provider record.
- Typical representation: duplicate cluster, canonical document ID, language/version flag, mention de-duplication rule, or sensitivity comparison with and without duplicate documents.
- Validation target: prevent duplicated policy documents from inflating [policy document mentions](../measures/policy_document_mentions.md).
- Empirical signature: multiple tracked records share the same content, title, source, report series, translated text, or reference list.

## Uses in Science of Science

- Extends [policy mention context audit](policy_mention_context_audit.md) from semantic meaning to record-level validity.
- Supports [policy-source corpus construction](../methods/policy_source_corpus_construction.md) by requiring canonical policy-document identifiers.
- Protects [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md) and [policy mention time lag](../measures/policy_mention_time_lag.md) from duplicated source records.
- Provides a policy-specific analogue of author and entity disambiguation concerns in [scholarly identifier spines](../representations/scholarly_identifier_spine.md).

## Operationalization

- Preserve policy document URL, source, title, date, language, file hash, text hash, and extracted bibliography when available.
- Cluster documents by exact URL canonicalization, checksum, near-duplicate text similarity, translated-title matching, and shared reference lists.
- Choose whether to count unique source documents, unique language editions, unique source organizations, or unique mention events.
- Report sensitivity of mention counts and enrichment profiles to deduplication choices.
- Keep duplicate handling snapshot-specific because provider URLs and source pages can change.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) identifies duplicate policy documents across same-language and different-language versions as a limitation of policy-document mention counts.
- Bornmann et al. note that some policy documents have the same content while only the language differs, causing mentions to be counted multiple times.
- The same paper distinguishes assessment reports and government documents, implying that policy-document source type and document identity should be audited before interpreting counts as political impact.
- That distinction is split out in [assessment report policy boundary](assessment_report_policy_boundary.md).
- Verified full-text evidence from Haunschild and Bornmann (2017) also warns that policy-related sources are heterogeneous and that the exact context of a mention on a policy-related site may be unclear.

## Caveats

- Deduplicating translations can remove meaningful evidence of international policy diffusion if the unit of analysis is language edition rather than content.
- Near-duplicate detection is sensitive to OCR, boilerplate, appendices, and extracted reference sections.
- Provider exports may not expose enough document-level metadata to canonicalize records perfectly.

## Links

- [policy document mentions](../measures/policy_document_mentions.md)
- [policy mention context audit](policy_mention_context_audit.md)
- [assessment report policy boundary](assessment_report_policy_boundary.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [policy mention time lag](../measures/policy_mention_time_lag.md)
- [scholarly identifier spines](../representations/scholarly_identifier_spine.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_document_deduplication`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: policy document disambiguation; duplicate policy documents; policy source deduplication; translated policy document duplicates
