# Policy-altmetric channel sparsity contrast

## Summary

Policy-altmetric channel sparsity contrast is the validation practice of comparing policy-document mention coverage with other altmetric channels, such as reference-manager readership and Twitter, before treating policy mentions as a mature impact indicator.

## Canonical Form

- Unit of analysis: paper, source channel, DOI-bearing denominator, field, publication year, provider snapshot, or source-specific coverage rate.
- Typical representation: channel-by-channel nonzero coverage table, policy-versus-Mendeley rate contrast, policy-versus-Twitter rate contrast, or source-readiness comparison.
- Validation target: whether policy-document mentions have enough coverage to support the intended descriptive or evaluative use.
- Empirical signature: policy mentions are much rarer than researcher-facing readership traces and often rarer than social-media traces in comparable scholarly denominators.

## Uses in Science of Science

- Specializes [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md) for the policy-document channel.
- Prevents [policy document mentions](../measures/policy_document_mentions.md) from being generalized from other, denser [social media attention channels](../datasets/social_media_attention_channels.md).
- Links sparse policy coverage to [policy-altmetric 80/20 readiness rule](policy_altmetric_80_20_readiness_rule.md) and [policy attention coverage bias](policy_attention_coverage_bias.md).
- Provides a channel-level contrast with [reference-manager readership counts](../measures/reference_manager_readership_counts.md) and [Twitter mention counts](../measures/twitter_mention_counts.md).

## Operationalization

- Define a common publication denominator and source snapshot for each channel where possible.
- Compute the share of papers with at least one policy-document mention, at least one reference-manager readership event, and at least one Twitter or social-media event.
- Report whether each source is directly collected, provider-derived, conditionally collected, or positive-only.
- Keep the policy channel separate from composite altmetric scores unless source-specific coverage and meaning have been validated.
- Use the contrast to decide whether policy mentions are appropriate for exploratory mapping, case discovery, field-level monitoring, or evaluation.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) finds that less than 0.5% of DOI-bearing Web of Science papers in subject categories were mentioned at least once in policy-related documents.
- The same paper states that the percentage of mentioned papers is much higher for Mendeley reader counts and also higher for tweets.
- Haunschild and Bornmann connect this sparse policy channel to the same data-quality concern raised for Twitter: too few observed papers can make field-specific assessment unreliable.
- Their recommendation not to use policy-related mentions for impact measurement until more policy-related sites are tracked depends on this cross-channel sparsity contrast.

## Caveats

- Higher channel coverage does not imply higher validity; Mendeley, Twitter, and policy documents measure different audiences and behaviors.
- Channel coverage comparisons require comparable denominators, identifier coverage, and snapshot dates.
- Policy mentions can be rare but still useful for qualitative case finding or target-oriented impact discovery.

## Links

- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [policy-altmetric 80/20 readiness rule](policy_altmetric_80_20_readiness_rule.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [reference-manager readership counts](../measures/reference_manager_readership_counts.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [altmetric field presence profiles](../measures/altmetric_field_presence_profiles.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [target-oriented impact metrics](../measures/target_oriented_impact_metrics.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_altmetric_channel_sparsity_contrast`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy channel sparsity contrast; policy versus Mendeley coverage; policy versus Twitter coverage; policy altmetric source contrast
