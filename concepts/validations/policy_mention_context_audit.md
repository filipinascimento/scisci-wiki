# Policy mention context audit

## Summary

Policy mention context audit checks whether a tracked policy-document mention is substantively policy-relevant, correctly matched, and located in an intended document context.

## Canonical Form

- Unit of analysis: paper-policy mention, policy source, document section, reference context, match event, or source family.
- Typical representation: manual audit sample, mention-context label, false-positive category, source-type inventory, or source-specific validity check.
- Validation target: distinguish meaningful policy use from bibliographic noise, unintended source types, and provider matching artifacts.
- Empirical signature: sparse policy mentions require context review because a single mention can drive a paper's entire policy-attention signal.

## Uses in Science of Science

- Validates [policy document mentions](../measures/policy_document_mentions.md) before they are used as evidence of policy uptake.
- Complements [policy attention coverage bias](policy_attention_coverage_bias.md) by auditing mention meaning, not just source coverage.
- Supports [responsible metrics](../measures/responsible_metrics.md) by preventing policy mentions from becoming unexamined impact badges.

## Operationalization

- Sample mentions by source, field, year, and mention count.
- Inspect document context, section, reference format, source type, and whether the document is genuinely policy-related.
- Classify mentions as substantive use, background citation, bibliography-only reference, CV/listing, false match, or unclear.
- Report source-specific false-positive and context distributions separately from raw mention counts.
- Use [unintended policy-source contamination](unintended_policy_source_contamination.md) when tracked source domains contain CV-like pages, publication lists, or other non-policy documents.
- Pair context labels with [policy-author motivation surveys](policy_author_motivation_surveys.md) where author-side evidence is feasible.
- Treat [policy document deduplication](policy_document_deduplication.md) as a prerequisite when the same policy content appears in multiple languages, mirrors, or document versions.
- Pair context coding with [assessment report policy boundary](assessment_report_policy_boundary.md) so mentions in evidence syntheses are not automatically treated as government policy impact.

## Evidence and Validations

- Verified full-text evidence from Bornmann et al. (2016) notes that policy mentions can help target policy-related societal impact, but also that low mention counts require binary treatment and source caution.
- Verified full-text evidence from Haunschild and Bornmann (2017) states that it is unknown where a particular publication was mentioned on policy-related websites and that policy-related sources can be large and include unintended documents.
- Haunschild and Bornmann give CV-like publication lists as an example of unintended policy-related mentions.
- The same paper also warns that policy documents may not mention every important paper they rely on, because policy authors often do not use scholarly citation styles.
- Because policy mentions are rare, the same paper recommends against using them for impact measurement until more policy-related sites are tracked and the indicator matures.
- Bornmann et al. explicitly call for future analyses of policy mention contexts and surveys of policy-document authors to resolve what observed mentions measure.

## Caveats

- Manual context audits are labor-intensive and may need source-specific sampling.
- A bibliography-only mention may still reflect evidence use, but it should not be interpreted the same way as guideline text or policy recommendation.
- Policy use can occur without formal citation, so context audits validate observed mentions but do not measure all policy influence.

## Links

- [policy document mentions](../measures/policy_document_mentions.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [policy document deduplication](policy_document_deduplication.md)
- [unintended policy-source contamination](unintended_policy_source_contamination.md)
- [assessment report policy boundary](assessment_report_policy_boundary.md)
- [policy citation-style omission](policy_citation_style_omission.md)
- [policy-author motivation surveys](policy_author_motivation_surveys.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_mention_context_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy mention validation; policy context audit; policy citation context; policy-source false positives
