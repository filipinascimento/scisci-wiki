# Discourse-saturation hidden-credit burden

## Summary

Discourse-saturation hidden-credit burden is the mechanism by which a discovery becomes less visible to citation metrics as it becomes more widely discussed in article text.

## Canonical Form

- Unit of analysis: topic, discovery, catchphrase, foundational paper, follower paper, field, or time window.
- Typical representation: text-mention volume paired with [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md).
- Mechanism: high familiarity makes authors treat the discovery as common language, lowering the perceived need to cite the original paper.
- Empirical signature: topics with more textual mentions have lower `p(cite | mention)`, even when citation-count differences do not explain the pattern.

## Uses in Science of Science

- Provides a mechanism for [hidden citations](../measures/hidden_citations.md) beyond ordinary citation aging.
- Explains why successful ideas can be undercounted by [citation impact indicators](../measures/citation_impact_indicators.md).
- Links [obliteration by incorporation](obliteration_by_incorporation.md) to full-text discourse rather than only to reference-list trajectories.
- Helps separate topic popularity from credit visibility in responsible evaluation.

## Operationalization

- Count papers that mention topic-specific catchphrases and identify whether they cite the foundational papers.
- Estimate `p(cite | mention)` by topic and relate it to textual mention counts, citation counts, venue, and time since the foundational paper.
- Use full-text corpora with stable phrase-paper matching and report uncertainty intervals for topic-level estimates.
- Treat discourse volume as a mechanism only after checking that citation counts alone do not explain citation visibility.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) reports that the probability of citation conditional on mention is strongly negatively correlated with mentions per topic.
- The paper reports little relationship between `p(cite | mention)` and topic citation counts, arguing that hidden credit is driven by discourse saturation rather than raw popularity alone.
- Meng et al. interpret this as a burden of success: the more widely a concept is used, the more hidden it can become from standard bibliometric analysis.
- The same analysis connects the mechanism to [cross-venue hidden-citation portability](../validations/cross_venue_hidden_citation_portability.md), because the pattern is checked across publication venues.

## Caveats

- Discourse saturation requires a stable catchphrase; diffuse concepts may be hard to measure.
- Some omitted citations reflect [reference-limit hidden-credit pressure](reference_limit_hidden_credit_pressure.md), review citation norms, or legitimate use of later sources rather than common-knowledge assimilation.
- Full-text access, field language, and extraction thresholds can affect mention counts.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md)
- [obliteration by incorporation](obliteration_by_incorporation.md)
- [reference-limit hidden-credit pressure](reference_limit_hidden_credit_pressure.md)
- [citation diversion hierarchy](citation_diversion_hierarchy.md)
- [cross-venue hidden-citation portability](../validations/cross_venue_hidden_citation_portability.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `discourse_saturation_hidden_credit_burden`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: burden of success; discourse saturation hidden citations; common-language credit loss; topic discussion citation visibility
