# Mention-conditioned citation probability

## Summary

Mention-conditioned citation probability is the probability that a paper citing a topic in prose also formally cites the topic's foundational paper.

## Canonical Form

- Unit of analysis: topic, catchphrase mention, follower paper, foundational paper, or time window.
- Typical representation: conditional probability `p(cite | mention)` estimated from papers that mention a topic-specific catchphrase.
- Mechanism or measurement target: visibility of foundational credit among papers that demonstrably discuss the topic.
- Empirical signature: the probability declines as a topic becomes more familiar, indicating increased hidden credit.

## Uses in Science of Science

- Measures [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md) without relying only on raw citation counts.
- Distinguishes topic popularity from credit visibility by conditioning on text mentions.
- Provides the denominator for [hidden citations](hidden_citations.md), [hidden-to-explicit citation ratio](hidden_to_explicit_citation_ratio.md), and credit-diversion analysis.

## Operationalization

- Inputs: full-text mentions of topic catchphrases, reference lists, foundational-paper identifiers, topic windows, and publication years.
- Measures: `N(cite and mention) / N(mention)`, Bayesian estimates of `p(cite | mention)`, temporal changes in the probability, and uncertainty intervals.
- Common model forms: beta-binomial estimation, yearly topic windows, mention/citation partitions, and regression against topic citations or topic mentions.

## Evidence and Validations

- Verified full-text evidence from Meng et al. (2024) estimates `p(cite | mention)` for topics identified through catchphrase-foundational-paper matching.
- The paper reports that this probability drops over time for trackable topics, consistent with OBI strengthening after a discovery becomes common language.
- Meng et al. find little relationship between `p(cite | mention)` and citation count, but a strong negative relationship with the number of textual mentions, indicating that discourse saturation drives hidden credit.
- This pattern is split out as [discourse-saturation hidden-credit burden](../mechanisms/discourse_saturation_hidden_credit_burden.md), a mechanism connecting discourse volume to declining citation visibility.
- The supplementary methods use Bayesian estimation with a Jeffreys prior rather than a raw frequency alone.

## Caveats

- The measure depends on high-quality full-text access and accurate catchphrase detection.
- It can miss implicit conceptual use where no stable catchphrase appears.
- A low probability does not always indicate neglect; citations may be redirected to reviews, books, applications, or nearby work.

## Links

- [hidden citations](hidden_citations.md)
- [hidden-to-explicit citation ratio](hidden_to_explicit_citation_ratio.md)
- [citation diversion hierarchy](../mechanisms/citation_diversion_hierarchy.md)
- [discourse-saturation hidden-credit burden](../mechanisms/discourse_saturation_hidden_credit_burden.md)
- [hidden-citation indirect-path share](hidden_citation_indirect_path_share.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md)
- [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `mention_conditioned_citation_probability`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Aliases: p cite given mention; citation conditional on mention; mention-citation probability; topic credit visibility
