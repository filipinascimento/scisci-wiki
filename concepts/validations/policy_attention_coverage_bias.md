# Policy attention coverage bias

## Summary

Policy attention coverage bias is the validation problem that tracked policy-document mentions cover only a selective slice of policy sources, languages, topics, identifiers, and document types, so observed mentions are not a complete measure of policy influence.

## Canonical Form

- Unit of analysis: paper, policy-document mention, source organization, tracked policy corpus, field/year cohort, DOI-bearing paper set, or topic set.
- Typical representation: coverage audit, source-list inventory, field-normalized mention rate, source-country/language table, DOI-match denominator, or sparse binary mention indicator.
- Validation target: whether policy-document mention data are broad and stable enough for descriptive mapping, comparative analysis, or research evaluation.
- Empirical signature: very low mention rates, concentration in tracked organizations and policy-relevant topics, and sensitivity to source-list expansion.

## Uses in Science of Science

- Audits [policy document mentions](../measures/policy_document_mentions.md) before treating them as societal-impact indicators.
- Connects [public and policy attention](../mechanisms/public_policy_attention.md) to [responsible metrics](../measures/responsible_metrics.md).
- Provides the policy-specific case of [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md).

## Operationalization

- Record which policy sources are tracked, their geography, language, document types, crawl dates, and matching rules.
- Require [policy source list transparency](policy_source_list_transparency.md) so the tracked-source denominator is interpretable and repeatable.
- Report DOI and identifier coverage separately from mention coverage.
- Check source composition through [policy source regional/language bias](policy_source_regional_language_bias.md) and identifier composition through [policy mention DOI denominator loss](policy_mention_doi_denominator_loss.md).
- Audit [policy source tracking-ease bias](policy_source_tracking_ease_bias.md) so hard-to-crawl policy sources are not silently treated as absent policy use.
- Track [policy mention coverage rate](../measures/policy_mention_coverage_rate.md) as a denominator-specific sparse-coverage statistic rather than only raw mention counts.
- Prefer the [policy mention binary indicator](../measures/policy_mention_binary_indicator.md) when repeated policy mentions are rare.
- Compare rates by field, topic, journal, document type, year, and policy-source family.
- Treat absence of a tracked mention as absence from the observed source list, not as absence of policy use.
- Use [policy-source corpus construction](../methods/policy_source_corpus_construction.md) for source-list provenance and [policy mention context audit](policy_mention_context_audit.md) for semantic validity.
- Use [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md) to separate overrepresentation within observed data from claims about all policy use.
- Use the [assessment report policy boundary](assessment_report_policy_boundary.md) to separate policy-facing evidence syntheses from stronger government-policy uptake claims.
- Check [policy document deduplication](policy_document_deduplication.md) before treating repeated mentions from similar policy documents as independent evidence.
- Apply [policy-altmetric 80/20 readiness rule](policy_altmetric_80_20_readiness_rule.md) before using sparse source coverage for field-specific evaluation.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) uses Altmetric policy-document data for 191,276 climate-change publications and finds that only 1.2% had at least one policy mention.
- Bornmann et al. note that the tracked policy sources were limited toward major organizations from North America and Europe, and that low coverage makes the data an early-stage source for societal-impact measurement.
- In the same climate-change corpus, most mentioned papers had only one or two policy-document mentions, reinforcing the value of binary and source-audited indicators.
- Verified full-text evidence from Haunschild and Bornmann (2017) broadens the test to Web of Science publications and reports that less than 0.5% of papers in subject categories were mentioned at least once in policy-related documents.
- Haunschild and Bornmann recommend not using policy-related mentions for impact measurement until more policy-related sites are tracked, while still treating the data as promising for future source-specific analyses.
- A residual Haunschild and Bornmann pass splits [policy target-source slice](../methods/policy_target_source_slice.md), [policy evidence-commons gap](../mechanisms/policy_evidence_commons_gap.md), [altmetric complementary-impact frame](../representations/altmetric_complementary_impact_frame.md), and [policy indicator maturity gate](policy_indicator_maturity_gate.md) out of the same policy-mention validity argument.
- Bornmann et al. identify two additional coverage-related interpretation problems: tracked policy sources were concentrated in North America and Europe, and some same-content policy documents could be counted multiple times across language versions.
- Haunschild and Bornmann add a broader provider-source caution: mainly international English documents were tracked in the December 2015 Altmetric snapshot, and non-English policy sources were not broadly covered.

## Caveats

- Policy documents often use scientific evidence without formal DOI citations.
- A mention may appear in a guideline, report, bibliography, CV-like page, or unintended source, so document context needs audit.
- Coverage bias changes over time as providers add sources; comparisons across snapshots should record source-list dates.

## Links

- [policy document mentions](../measures/policy_document_mentions.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [policy source list transparency](policy_source_list_transparency.md)
- [policy source regional/language bias](policy_source_regional_language_bias.md)
- [policy source tracking-ease bias](policy_source_tracking_ease_bias.md)
- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [policy mention binary indicator](../measures/policy_mention_binary_indicator.md)
- [annual policy mention coverage curve](../measures/annual_policy_mention_coverage_curve.md)
- [policy subject-category concentration](../measures/policy_subject_category_concentration.md)
- [policy mention DOI denominator loss](policy_mention_doi_denominator_loss.md)
- [policy citation-style omission](policy_citation_style_omission.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [policy mention context audit](policy_mention_context_audit.md)
- [policy document deduplication](policy_document_deduplication.md)
- [policy-altmetric 80/20 readiness rule](policy_altmetric_80_20_readiness_rule.md)
- [policy target-source slice](../methods/policy_target_source_slice.md)
- [policy evidence-commons gap](../mechanisms/policy_evidence_commons_gap.md)
- [altmetric complementary-impact frame](../representations/altmetric_complementary_impact_frame.md)
- [policy indicator maturity gate](policy_indicator_maturity_gate.md)
- [policy-altmetric channel sparsity contrast](policy_altmetric_channel_sparsity_contrast.md)
- [unintended policy-source contamination](unintended_policy_source_contamination.md)
- [research-policy interaction barrier](../mechanisms/research_policy_interaction_barrier.md)
- [assessment report policy boundary](assessment_report_policy_boundary.md)
- [policy-author motivation surveys](policy_author_motivation_surveys.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetrics](../datasets/altmetrics.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_attention_coverage_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Aliases: policy mention sparsity; policy source bias; policy-document coverage; policy altmetric validity
