# Public and policy attention

## Summary

Public and policy attention describes how scholarly outputs circulate outside scholarly citation networks through news, social media, Wikipedia, blogs, patents, policy documents, and public discourse.

## Canonical Form

- Unit of analysis: paper, mention, outlet, policy document, platform event, topic, or institution.
- Typical representation: time-stamped event stream, attention score, or cross-platform mention network.
- Mechanism: public relevance, controversy, communication effort, institutional promotion, policy timing, and media agendas shape attention.
- Empirical signature: non-scholarly mentions with platform-specific temporal and topical patterns.

## Uses in Science of Science

- Used to distinguish scholarly impact from public, policy, or translational reach.
- Connects altmetrics to policy studies and science communication.
- Useful for consequences pages where scientific work affects public debate or policy.

## Operationalization

- Link scholarly identifiers to URLs, DOIs, policy-document references, news stories, and social-media events.
- Measure mention counts, source categories, time lags, topic overlap, and policy-document contexts.
- Validate with source-specific samples because URL/DOI matching can be noisy.
- Keep [social media attention channels](../datasets/social_media_attention_channels.md), [policy document mentions](../measures/policy_document_mentions.md), and other source families separated until their coverage and validity are audited.
- For policy mentions, separate [Altmetric policy source trackers](../datasets/altmetric_policy_source_tracker.md), DOI-linked publication panels, annual coverage curves, and source-region/language audits.
- Use [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md) and [policy mention context audit](../validations/policy_mention_context_audit.md) for timing and context-sensitive interpretations.
- Treat [research-policy interaction barrier](research_policy_interaction_barrier.md) as a possible cause of low observed policy mentions alongside provider coverage and citation-style limits.
- Treat [practical-use policy relevance gradient](practical_use_policy_relevance_gradient.md) and [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md) as competing explanations for field-level policy-attention concentration.

## Evidence and Validations

- Altmetrics studies show online attention correlates only partially with scholarly citations and varies sharply by platform.
- Verified full-text evidence from Thelwall et al. (2013) supports the public-attention side of this motif: social-web mentions can be measured at paper level, but they vary by platform and should not be collapsed into a generic impact score.
- Verified full-text evidence from Costas et al. (2015) strengthens this distinction: altmetric traces are more common in some fields than others, are concentrated in recent publications, and correlate only weakly with scholarly citations.
- Verified full-text evidence from Bornmann et al. (2016) adds a policy-document anchor: in a climate-change publication set, only 1.2% of 191,276 publications had at least one policy mention in Altmetric policy data.
- Verified full-text evidence from Haunschild and Bornmann (2017) broadens the coverage test to Web of Science publications and reports that less than 0.5% of papers in different subject categories were mentioned at least once in policy-related documents.
- Together these papers support treating policy attention as a sparse, source-sensitive signal rather than a generic societal-impact score.
- Haunschild and Bornmann further recommend against impact-measurement use until more policy-related sites are tracked, because observed policy attention is source-list and DOI-denominator limited.
- [Altmetric-citation association](../validations/altmetric_citation_association.md) is a useful negative boundary test: weak citation association does not invalidate public attention, but it prevents treating public attention as a citation substitute.

## Caveats

- Public attention is not a simple quality or impact measure.
- Bots, platform changes, language coverage, and controversy can dominate signal.
- Tracked attention can be sparse even when real-world uptake exists outside the provider's source list.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)
- [altmetric composite scores](../measures/altmetric_composite_scores.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric coverage sparsity](../measures/altmetric_coverage_sparsity.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [altmetric highly cited filtering](../validations/altmetric_highly_cited_filtering.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy source regional/language bias](../validations/policy_source_regional_language_bias.md)
- [policy source tracking-ease bias](../validations/policy_source_tracking_ease_bias.md)
- [practical-use policy relevance gradient](practical_use_policy_relevance_gradient.md)
- [policy citation-style omission](../validations/policy_citation_style_omission.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [research-policy interaction barrier](research_policy_interaction_barrier.md)
- [policy-altmetric channel sparsity contrast](../validations/policy_altmetric_channel_sparsity_contrast.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [patent paper links](../datasets/patent_paper_links.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]
- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]
- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]
- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `public_policy_attention`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Aliases: societal attention; policy uptake; media attention; online attention
