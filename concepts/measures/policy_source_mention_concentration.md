# Policy-Source Mention Concentration

## Summary

Policy-source mention concentration measures whether mentions of research in policy documents are dominated by a small number of tracked policy sources.

## Canonical Form

- Unit of analysis: policy source, policy document corpus, paper set, topic, or country.
- Typical representation: source-level concentration distribution over policy mentions.
- Measurement target: concentration of policy attention within the tracked source universe.
- Empirical signature: a few organizations account for a large share of all policy mentions.

## Uses in Science of Science

- Extends [policy document mentions](policy_document_mentions.md) beyond paper-level counts.
- Complements [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md) and [policy source list transparency](../validations/policy_source_list_transparency.md).
- Helps diagnose [policy attention coverage bias](../validations/policy_attention_coverage_bias.md).
- Connects to [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md).

## Operationalization

- Count mentions by policy source within a topic or field corpus.
- Compute source shares, concentration ratios, Gini coefficients, or Herfindahl indices.
- Compare concentration across topics, countries, and source lists.
- Report whether high policy attention is broad-based or source-dominated.

## Evidence and Validations

- Verified full-text evidence from Bornmann et al. (2016) shows that climate-change policy mentions are concentrated in a small set of sources.
- The paper identifies sources such as FAO, IPCC, World Bank, and Australian Policy Online as major contributors.
- Bornmann et al. argue that source typologies should include counts of papers mentioned to show which policy bodies cooperate closely with researchers.

## Caveats

- Concentration can reflect real policy relevance or source-list coverage bias.
- Source-level counts do not distinguish positive, negative, or routine mentions.
- Untracked policy bodies make concentration estimates source-list dependent.

## Links

- [policy document mentions](policy_document_mentions.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [policy source list transparency](../validations/policy_source_list_transparency.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; SciSciNet: unknown; WoS: unknown]

## Metadata

- Concept ID: `policy_source_mention_concentration`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Bornmann et al. (2016) (2016)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: policy source concentration; policy mention source dominance; source-level policy attention concentration; policy-source Herfindahl
