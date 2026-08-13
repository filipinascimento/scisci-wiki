# Policy target-source slice

## Summary

Policy target-source slice is the method of analyzing policy mentions within source subsets that match the policy target, such as a country, sector, agency type, or topic domain.

## Canonical Form

- Unit of analysis: policy source, policy target, paper, mention, country, sector, or topic area.
- Typical representation: source-sliced mention rate, target-specific policy corpus, or policy-source subset comparison.
- Method target: align the observed policy corpus with the policy audience or impact claim.
- Empirical signature: results are reported separately for source slices relevant to the intended target rather than only for all tracked policy sources.

## Uses in Science of Science

- Builds on the [Altmetric policy-source tracker](../datasets/altmetric_policy_source_tracker.md) by turning source metadata into analysis strata.
- Qualifies [provider-defined policy-document boundary](../validations/provider_defined_policy_document_boundary.md) with a target-specific design.
- Helps interpret [policy source regional/language bias](../validations/policy_source_regional_language_bias.md).
- Operationalizes [target-oriented impact metrics](../measures/target_oriented_impact_metrics.md) for policy mentions.

## Operationalization

- Define the policy target before selecting sources.
- Filter or stratify tracked policy sources by country, language, agency, sector, topic, or stakeholder type.
- Report both all-source and target-source mention rates when the broader corpus is still informative.
- Document sources excluded because they do not match the target.
- Avoid interpreting global policy-source rates as target-specific influence.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) suggests analyzing specific policy-source subsets, such as British or health-related policy documents, when those sources match the impact question.
- The paper frames this as a way to make sparse policy-mention data more relevant to specific evaluation contexts.
- This motif is distinct from source-list transparency because it is an analysis design after the source list exists.
- It also avoids treating the provider's entire policy corpus as a single undifferentiated audience.

## Caveats

- Source slices can become too sparse for stable comparisons.
- Provider coverage may be especially incomplete for local or non-English policy targets.
- A target-source slice still requires context audit because a mention is not always evidence of policy influence.

## Links

- [Altmetric policy-source tracker](../datasets/altmetric_policy_source_tracker.md)
- [provider-defined policy-document boundary](../validations/provider_defined_policy_document_boundary.md)
- [policy source regional/language bias](../validations/policy_source_regional_language_bias.md)
- [target-oriented impact metrics](../measures/target_oriented_impact_metrics.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; SciSciNet: W2567946352; WoS: unknown]

## Metadata

- Concept ID: `policy_target_source_slice`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: target-specific policy source slice; policy-source subset analysis; target-aligned policy mentions; policy audience source filter
