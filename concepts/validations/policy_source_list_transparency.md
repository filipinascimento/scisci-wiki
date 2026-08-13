# Policy source list transparency

## Summary

Policy source list transparency is the validation requirement that providers and researchers disclose which policy-related sources are tracked before policy-document mentions are interpreted as impact evidence.

## Canonical Form

- Unit of analysis: policy source, provider source list, source type, source country, language, policy-making body, data snapshot, or tracked-document corpus.
- Typical representation: source-list manifest, source-type taxonomy, organization counts by type, geography/language table, versioned crawl date, or coverage note.
- Validation target: whether observed policy mentions can be interpreted given the boundaries of the tracked policy corpus.
- Empirical signature: interpretation becomes weak when source lists are partial, example-only, regionally biased, or not versioned.

## Uses in Science of Science

- Audits [policy-source corpus construction](../methods/policy_source_corpus_construction.md) and [policy document mentions](../measures/policy_document_mentions.md).
- Provides a specific guardrail for [policy mention coverage rate](../measures/policy_mention_coverage_rate.md), because denominator rates depend on tracked sources.
- Complements [policy attention coverage bias](policy_attention_coverage_bias.md) by making source-list disclosure a reproducibility requirement.
- Supports source-aware studies using the [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md).
- Reinforces [responsible metrics](../measures/responsible_metrics.md) by requiring evidence provenance before evaluative use.

## Operationalization

- Preserve a dated list of tracked policy sources, including organizations, URLs, source types, countries, languages, and document categories.
- Report which source types are included or excluded, such as ministries, regional governments, NGOs, intergovernmental bodies, guidelines, or research reports.
- Count organizations and documents per source type where licensing permits disclosure.
- Version source lists when providers expand coverage, and avoid comparing rates across unversioned snapshots.
- Audit [policy source regional/language bias](policy_source_regional_language_bias.md) whenever source lists are concentrated in English, international, or easily crawled sources.
- Pair source transparency with [policy mention context audit](policy_mention_context_audit.md) because source inclusion does not establish meaningful policy use.

## Evidence and Validations

- Verified full-text evidence from Bornmann et al. (2016) argues that an up-to-date list of continuously analyzed policy-related sources is necessary to interpret studies based on policy-document mentions.
- Bornmann et al. note that example-only source disclosure makes it unclear whether national ministries or regional governments are included in the database.
- The paper recommends listing the types of policy-making bodies included, the number of organizations per type, and examples, so users can assess database inclusiveness.
- Verified full-text evidence from Haunschild and Bornmann (2017) states that Altmetric tracked over 40 policy-related sites by the end of 2014 and more than 100 sources in their December 2015 data.
- Haunschild and Bornmann also identify regional and language bias, with mainly international English documents tracked and non-English policy sources not broadly covered at that time.

## Caveats

- Provider licensing or platform design can limit source-list disclosure, but evaluation use should still report the maximum available provenance.
- A transparent source list does not guarantee comprehensive policy coverage.
- Source inclusion can change without a change in research-policy uptake, so longitudinal analyses need snapshot dates.
- Even transparent source lists require semantic validation of what the mention means in context.

## Links

- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [policy source regional/language bias](policy_source_regional_language_bias.md)
- [policy mention context audit](policy_mention_context_audit.md)
- [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md)
- [policy document deduplication](policy_document_deduplication.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_source_list_transparency`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: policy-source transparency; policy source manifest; policy source-list provenance; tracked policy-source disclosure
