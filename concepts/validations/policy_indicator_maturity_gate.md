# Policy indicator maturity gate

## Summary

Policy indicator maturity gate is the validation rule that policy-document mentions should remain descriptive until source coverage, context validity, and normalization are mature enough for evaluative use.

## Canonical Form

- Unit of analysis: policy mention indicator, tracked policy corpus, field, evaluation context, source coverage, or normalization procedure.
- Typical representation: readiness checklist, maturity gate, evaluation-use warning, or staged indicator ladder.
- Validation target: decide whether policy mentions can support evaluation or only exploratory description.
- Empirical signature: sparse coverage, unstable source lists, and weak context validation block evaluative use.

## Uses in Science of Science

- Generalizes the [policy-altmetric 80/20 readiness rule](policy_altmetric_80_20_readiness_rule.md) beyond one numerical threshold.
- Applies [policy attention coverage bias](policy_attention_coverage_bias.md) to evaluation governance.
- Connects sparse policy traces to [responsible metrics](../measures/responsible_metrics.md).
- Provides a guardrail for dashboards using [altmetric complementary-impact frame](../representations/altmetric_complementary_impact_frame.md).

## Operationalization

- Define maturity requirements for source coverage, source transparency, context interpretation, normalization, and field specificity.
- Classify policy mention indicators as descriptive, monitoring-ready, or evaluation-ready.
- Require source-list versioning and context audits before comparative evaluation.
- Reassess maturity after provider source lists expand or matching rules change.
- Report when an indicator fails the maturity gate and why.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) recommends not using policy-related mentions for impact measurement until more policy-related sites are tracked.
- The same paper treats policy altmetrics as promising but early-stage because coverage is sparse and source lists are incomplete.
- This motif separates maturity governance from the specific 80/20 readiness rule.
- It is useful for preventing premature evaluation based on low-coverage policy traces.

## Caveats

- Indicator maturity can differ by field, country, and policy target.
- Waiting for perfect coverage can block useful descriptive monitoring.
- A maturity gate does not solve semantic validity; mentioned papers still need context audit.

## Links

- [policy-altmetric 80/20 readiness rule](policy_altmetric_80_20_readiness_rule.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [altmetric complementary-impact frame](../representations/altmetric_complementary_impact_frame.md)
- [policy mention context audit](policy_mention_context_audit.md)
- [policy target-source slice](../methods/policy_target_source_slice.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; SciSciNet: W2567946352; WoS: unknown]

## Metadata

- Concept ID: `policy_indicator_maturity_gate`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy metric maturity gate; policy altmetric evaluation-readiness gate; policy mention readiness gate; policy indicator evaluative maturity
