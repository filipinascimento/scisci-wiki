# Cross-target impact-trace coverage benchmark

## Summary

Policy-document mentions can be benchmarked against other target-oriented traces, such as patent citations or clinical guideline citations, to calibrate sparsity.

## Canonical Form

- Unit of analysis: target channel, field, paper denominator, and nonzero impact trace.
- Typical representation: coverage-rate comparison across policy, patent, guideline, or other target channels.
- Mechanism, measurement, or validation target: relative sparsity and coverage of target-oriented impact traces.
- Empirical signature: channels differ in nonzero mention or citation rates even for comparable paper denominators..

## Uses in Science of Science

- Adds a cross-channel benchmark to [policy mention coverage rate](policy_mention_coverage_rate.md).
- Useful for interpreting policy mentions against [patent-paper links](../datasets/patent_paper_links.md).
- Connects policy mentions to [policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md).

## Operationalization

- Compute comparable nonzero coverage rates by target channel, field, year, and identifier denominator.
- Align source coverage and target populations before making cross-channel comparisons.
- Report uncertainty and denominator loss for each channel.

## Evidence and Validations

- Verified full-text evidence from Bornmann et al. (2016) contrasts 1.2% policy mention coverage with a cited 7-10% patent-citation rate in selected biomedical fields.
- The comparison motivates cross-target calibration of sparsity.

## Caveats

- Cross-target comparisons are descriptive unless source coverage and target populations are aligned.
- Channels measure different kinds of uptake and should not be ranked as one impact scale.

## Links

- [Target-oriented impact metrics](target_oriented_impact_metrics.md)
- [Policy mention coverage rate](policy_mention_coverage_rate.md)
- [Patent-paper links](../datasets/patent_paper_links.md)
- [Policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]

## Metadata

- Concept ID: `cross_target_impact_trace_coverage_benchmark`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Bornmann et al. (2016) (2016)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: impact trace coverage benchmark; cross-target impact coverage; policy patent coverage comparison
