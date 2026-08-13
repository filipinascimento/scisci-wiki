# Policy mention binary indicator

## Summary

The policy mention binary indicator records whether a publication has at least one tracked policy-document mention, rather than modeling sparse policy-mention counts as stable intensity measures.

## Canonical Form

- Unit of analysis: paper, DOI-bearing paper, publication cohort, policy-mentioned subset, field, topic, year, institution, or funder.
- Typical representation: `has_policy_mention = 0/1`, nonzero mention share, binary outcome model, or mentioned-paper subset.
- Measurement target: observed selection into tracked policy documents.
- Empirical signature: most mentioned papers have only one or two mentions, so an at-least-one indicator is more stable than raw count intensity.

## Uses in Science of Science

- Provides the paper-level building block for [policy mention coverage rate](policy_mention_coverage_rate.md).
- Converts sparse [policy document mentions](policy_document_mentions.md) into a robust outcome for [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md).
- Connects policy altmetrics to the broader sparse-source logic in [altmetric coverage sparsity](altmetric_coverage_sparsity.md).
- Helps avoid false precision when policy mentions are used in [responsible metrics](responsible_metrics.md).

## Operationalization

- Define the eligible publication denominator, identifier matching method, and policy-source snapshot.
- Set the indicator to one when a publication receives at least one tracked policy-related mention.
- Preserve the raw mention count separately for sensitivity analysis and high-count case inspection.
- Use binary outcomes for denominator-aware coverage, regression, enrichment, or matching when counts are dominated by one-off mentions.
- Report count distributions so readers can see why binary collapse was chosen.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) finds that only 2,341 of 191,276 DOI-bearing climate-change papers had at least one policy mention.
- Among policy-mentioned papers, Bornmann et al. report that 78.7% received one mention and 13.3% received two mentions.
- Because 92% of mentioned papers had one or two mentions and the mean count was 1.4, the paper analyzes characteristics of papers mentioned at least once rather than using mention counts in the main stratified tables.
- This binary treatment is distinct from treating repeated mentions as independent evidence of policy impact.

## Caveats

- Binary collapse loses intensity information for the few papers mentioned many times.
- A nonzero tracked mention is not necessarily policy influence; context audits are still needed.
- A zero value can mean no tracked mention, missing DOI, omitted policy source, informal citation, or source-coverage failure.

## Links

- [policy document mentions](policy_document_mentions.md)
- [policy mention coverage rate](policy_mention_coverage_rate.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [policy document deduplication](../validations/policy_document_deduplication.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [responsible metrics](responsible_metrics.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]

## Metadata

- Concept ID: `policy_mention_binary_indicator`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Bornmann et al. (2016) (2016)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: at-least-one policy mention; binary policy mention; nonzero policy mention; policy mention count collapse
