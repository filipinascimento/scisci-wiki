# Target-oriented impact metrics

## Summary

Target-oriented impact metrics define a specific recipient or use domain before counting impact traces, so the metric measures influence on an identifiable target rather than undifferentiated attention.

## Canonical Form

- Unit of analysis: paper, patent, clinical guideline, policy document, public audience, recipient sector, institution, or evaluation portfolio.
- Typical representation: sector-specific citation count, guideline citation, patent-paper link, policy-document mention, or target-specific altmetric source.
- Measurement target: observed influence on a declared audience or use context.
- Empirical signature: the metric is interpretable because the target group is explicit, such as policymakers, clinicians, patenting organizations, or scholarly researchers.

## Uses in Science of Science

- Clarifies what [policy document mentions](policy_document_mentions.md), clinical guideline citations, and [patent-paper links](../datasets/patent_paper_links.md) are intended to measure.
- Provides a validity criterion for [altmetric composite scores](altmetric_composite_scores.md), which can mix heterogeneous audiences.
- Extends [responsible metrics](responsible_metrics.md) by requiring that an indicator's recipient population be named before evaluative use.
- Links [public and policy attention](../mechanisms/public_policy_attention.md) to measurement design rather than treating all non-academic traces as interchangeable.

## Operationalization

- State the target sector or recipient group before choosing the data source.
- Preserve source-specific counts rather than collapsing heterogeneous channels too early.
- Match the evaluation question to the target: policy mentions for policy uptake, patent citations for technological use, guideline citations for clinical practice, and citations for scholarly uptake.
- Require source-list transparency, coverage audits, and context checks for each target-specific source.
- Avoid interpreting composite online-attention scores as impact without a theory of the target audience.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) argues that impact measurement should be target-oriented because otherwise it is unclear what kind of impact is being measured.
- The paper treats policy-document mentions as promising because they focus on a specific societal sector, the policy area, rather than aggregating all online attention.
- Bornmann et al. contrast target-oriented traces such as scholarly citations, clinical guideline citations, policy document mentions, and patent citations with composite altmetric indicators or counts lacking target restrictions.
- They also caution that policy-document mentions remain quantitative mention counts and need source transparency and context analysis before use in evaluation practice.

## Caveats

- A clear target does not guarantee validity; coverage, matching, timing, and context can still be weak.
- The same trace can have different meanings across fields and policy sectors.
- Narrow target metrics may miss diffuse, delayed, negative, or indirect societal impact.

## Links

- [policy document mentions](policy_document_mentions.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [altmetric composite scores](altmetric_composite_scores.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [responsible metrics](responsible_metrics.md)
- [metrics support qualitative assessment](../methods/metrics_support_qualitative_assessment.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [policy source list transparency](../validations/policy_source_list_transparency.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]

## Metadata

- Concept ID: `target_oriented_impact_metrics`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Bornmann et al. (2016) (2016)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: target-specific impact metrics; sector-specific impact indicators; recipient-oriented metrics; target-restricted altmetrics
