# Hidden-to-explicit citation ratio

## Summary

The hidden-to-explicit citation ratio compares hidden textual credit to formal reference-list citations for a topic or foundational paper.

## Canonical Form

- Unit of analysis: topic, foundational paper, catchphrase, time window, or field.
- Typical representation: scalar ratio of hidden citation count to explicit citation count.
- Mechanism or measurement target: how much impact is invisible to standard citation indicators.
- Empirical signature: a ratio near or above one indicates that hidden mentions rival or exceed formal citations.

## Uses in Science of Science

- Quantifies the scale of [hidden citations](hidden_citations.md) relative to conventional citation counts.
- Supports robustness checks for [citation impact indicators](citation_impact_indicators.md), [explicit-plus-hidden citation rank shift](explicit_plus_hidden_citation_rank_shift.md), and credit-allocation studies.
- Helps identify discoveries where [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md) has become large enough to alter perceived impact.

## Operationalization

- Inputs: catchphrase mentions without foundational-paper citation, formal citations to foundational papers, topic-to-paper allocation weights, and time windows.
- Measures: hidden citations divided by explicit citations, explicit-plus-hidden citation totals, rank changes, and distribution of ratios across topics or papers.
- Common model forms: topic-level ratios, paper-level allocated ratios, log-ratio summaries, and sensitivity checks over allocation rules.

## Evidence and Validations

- Verified full-text evidence from Meng et al. (2024) shows that influential physics topics can accumulate hidden credit at a scale comparable to formal citation counts.
- The paper reports an average hidden-to-explicit ratio close to parity after assigning topic-level hidden citations to foundational papers, with substantial variation across discoveries.
- Meng et al. also show examples where hidden credit dominates explicit credit and changes citation-based ranks among foundational papers, motivating [explicit-plus-hidden citation rank shift](explicit_plus_hidden_citation_rank_shift.md).
- The paper warns that paper-level ratios depend on [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md), so the ratio is strongest as a topic-level diagnostic.

## Caveats

- Ratios can be unstable for topics or papers with low explicit citation counts.
- Hidden-credit counts depend on catchphrase specificity and corpus coverage.
- Paper-level ratios should not be used for evaluation without clear uncertainty and allocation assumptions.

## Links

- [hidden citations](hidden_citations.md)
- [mention-conditioned citation probability](mention_conditioned_citation_probability.md)
- [explicit-plus-hidden citation rank shift](explicit_plus_hidden_citation_rank_shift.md)
- [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `hidden_to_explicit_citation_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Aliases: hidden citation ratio; hidden explicit ratio; explicit-plus-hidden citation balance; hidden credit ratio
