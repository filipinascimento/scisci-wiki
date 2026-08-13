# Policy mention enrichment profiles

## Summary

Policy mention enrichment profiles compare the papers observed in policy-related documents against a baseline paper corpus to identify which publication years, journals, document types, fields, or topics are overrepresented in policy attention.

## Canonical Form

- Unit of analysis: paper, policy-mentioned paper set, baseline paper set, publication year, journal, document type, subject category, or topic group.
- Typical representation: observed-versus-expected percentage difference, enrichment ratio, overrepresentation table, or stratified policy-mention profile.
- Method target: distinguish raw policy-mention counts from the kinds of research disproportionately selected into policy documents.
- Empirical signature: mentioned papers concentrate in practical, review-like, older, or policy-relevant strata rather than mirroring the full scholarly baseline.

## Uses in Science of Science

- Extends [policy document mentions](../measures/policy_document_mentions.md) from event counting to comparative profiling.
- Gives [policy attention coverage bias](../validations/policy_attention_coverage_bias.md) a denominator-aware diagnostic.
- Supports [public and policy attention](../mechanisms/public_policy_attention.md) studies that need to separate source coverage from topic or field relevance.
- Complements [policy mention time lag](../measures/policy_mention_time_lag.md) by comparing publication-year profiles against the baseline corpus.

## Operationalization

- Define a target corpus and a policy-mentioned subset, preserving DOI coverage and source-list dates.
- Use the [policy mention binary indicator](../measures/policy_mention_binary_indicator.md) when count distributions are dominated by one- and two-mention papers.
- Calculate baseline shares for strata such as year, journal, document type, subject category, field, or topic.
- Calculate the same shares among policy-mentioned papers and report observed-minus-expected differences or ratios.
- Interpret enrichment jointly with [policy-source corpus construction](policy_source_corpus_construction.md), because tracked sources can overrepresent specific policy sectors.
- Compare [practical-use policy relevance gradient](../mechanisms/practical_use_policy_relevance_gradient.md) with [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md) before treating field enrichment as substantive policy demand.
- Avoid treating enriched strata as inherently higher quality; the profile measures selection into observed policy documents.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) compares climate-change papers with the subset having at least one policy mention across publication years, journals, document types, and OECD subject categories.
- Bornmann et al. use the percentage distribution of all climate-change papers as the expected baseline and compare it with the distribution of policy-mentioned papers.
- Their results show that policy-mentioned climate-change papers are disproportionately older, include an overrepresentation of review papers, and concentrate in outlets and subject categories with clearer policy relevance.
- Verified full-text evidence from Haunschild and Bornmann (2017) generalizes the profiling logic to Web of Science subject categories, finding especially high absolute or relative policy-mention presence in medicine- and economics-related categories.
- Both papers emphasize that observed disciplinary profiles can reflect the selection of tracked policy sources, so enrichment profiles should be interpreted with coverage audits rather than as direct societal-impact rankings.
- Haunschild and Bornmann specifically pair the practical-use interpretation of medicine and economics categories with a warning that easily searchable policy sources can shape the observed profile.

## Caveats

- Enrichment can arise from source-list bias, DOI coverage, topic choice, language coverage, document-type mix, or actual policy relevance.
- Sparse policy mentions make fine-grained strata unstable.
- A field with low observed policy attention may be undercovered by the provider rather than socially irrelevant.

## Links

- [policy document mentions](../measures/policy_document_mentions.md)
- [policy mention binary indicator](../measures/policy_mention_binary_indicator.md)
- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md)
- [policy mention time lag](../measures/policy_mention_time_lag.md)
- [policy-source corpus construction](policy_source_corpus_construction.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [practical-use policy relevance gradient](../mechanisms/practical_use_policy_relevance_gradient.md)
- [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [policy document deduplication](../validations/policy_document_deduplication.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [field classifications](../measures/field_classifications.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_mention_enrichment_profiles`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: policy mention overrepresentation; observed expected policy mentions; policy attention profiles; policy-mentioned paper enrichment
