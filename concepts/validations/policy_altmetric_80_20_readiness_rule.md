# Policy-altmetric 80/20 readiness rule

## Summary

Policy-altmetric 80/20 readiness rule is the validation heuristic that policy-document mention data should not be used for field-specific assessment unless the relevant publication set has sufficiently broad source coverage, often framed as at least 80 percent coverage.

## Canonical Form

- Unit of analysis: field, topic corpus, policy-source snapshot, publication denominator, or altmetric provider.
- Typical representation: coverage-readiness flag, field-specific coverage share, or enough-data threshold.
- Validation target: decide whether sparse policy-mention data are suitable for evaluation or only descriptive monitoring.
- Empirical signature: a policy-mention source has too few observed papers or too incomplete a tracked-source list to support field-level impact comparisons.

## Uses in Science of Science

- Specializes [altmetric coverage utility threshold](../measures/altmetric_coverage_utility_threshold.md) for policy-document mentions.
- Provides a concrete guardrail for [policy mention coverage rate](../measures/policy_mention_coverage_rate.md) and [policy attention coverage bias](policy_attention_coverage_bias.md).
- Helps decide when [policy document mentions](../measures/policy_document_mentions.md) can move from exploratory mapping to responsible assessment use.
- Uses [policy-altmetric channel sparsity contrast](policy_altmetric_channel_sparsity_contrast.md) to show why policy mentions cannot inherit readiness from denser online-attention channels.
- Works with [policy-source corpus construction](../methods/policy_source_corpus_construction.md) and [policy source list transparency](policy_source_list_transparency.md) because coverage depends on tracked sources and DOI matching.

## Operationalization

- Define the field, topic, document type, publication years, and provider snapshot.
- Estimate the share of relevant publications covered by the provider and the share with matchable identifiers.
- Apply an explicit coverage-readiness threshold before using policy mentions for field-specific ranking or evaluation.
- If coverage is below the threshold, restrict use to descriptive discovery, case finding, or source-coverage monitoring.
- Recalculate readiness after source-list expansion, DOI recovery, or provider workflow changes.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) finds that less than 0.5% of DOI-bearing Web of Science papers in subject categories had at least one tracked policy-related mention.
- The paper recommends against using policy-related mentions for impact measurement until more policy-related sites are tracked.
- Haunschild and Bornmann invoke an 80/20 scientometric data-quality rule from Strotmann and Zhao, stating that reliable field-specific study requires a database to cover 80% of field-specific publications.
- Their discussion frames the rule as a readiness check for future policy-altmetric indicators rather than an endorsement of current policy-mention coverage.

## Caveats

- The 80 percent threshold is a heuristic, not a universal statistical law.
- High publication coverage does not guarantee semantic validity of individual policy mentions.
- Sparse policy mention data can still be useful for qualitative case discovery, even when not ready for evaluation.

## Links

- [altmetric coverage utility threshold](../measures/altmetric_coverage_utility_threshold.md)
- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [policy-altmetric channel sparsity contrast](policy_altmetric_channel_sparsity_contrast.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [policy source list transparency](policy_source_list_transparency.md)
- [policy mention DOI denominator loss](policy_mention_doi_denominator_loss.md)
- [policy mention context audit](policy_mention_context_audit.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]
- Strotmann, A., & Zhao, D. (2015). An 80/20 data quality law for professional scientometrics? In *Proceedings of ISSI 2015*. [OpenAlex: unknown; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `policy_altmetric_80_20_readiness_rule`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy altmetric coverage threshold; 80/20 policy mention rule; policy mention readiness threshold; field-specific policy coverage rule
