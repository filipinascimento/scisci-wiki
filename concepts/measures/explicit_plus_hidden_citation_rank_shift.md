# Explicit-plus-hidden citation rank shift

## Summary

Explicit-plus-hidden citation rank shift measures how a paper or topic's rank changes when hidden textual credit is added to formal citation counts.

## Canonical Form

- Unit of analysis: foundational paper, topic, field-specific ranking, time window, or citation-count leaderboard.
- Typical representation: original citation rank, explicit-plus-hidden rank, rank-change value, and attribution rule.
- Measurement target: sensitivity of citation-based status to hidden-credit recovery.
- Empirical signature: some foundational papers move substantially after hidden citations are allocated, while others lose rank because competing papers gain more hidden credit.

## Uses in Science of Science

- Converts [hidden citations](hidden_citations.md) into an interpretable robustness check for [citation impact indicators](citation_impact_indicators.md).
- Summarizes the evaluation consequences of [hidden-to-explicit citation ratio](hidden_to_explicit_citation_ratio.md) and [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md).
- Helps identify cases where [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md) changes apparent priority or impact.
- Supports [responsible metrics](responsible_metrics.md) by showing whether rankings depend on reference-list visibility alone.

## Operationalization

- Compute explicit citation counts for a set of candidate foundational papers.
- Allocate hidden citations to papers using a documented topic-to-paper rule.
- Re-rank papers after adding hidden credit, then report rank change, uncertainty, and sensitivity to allocation choices.
- Prefer topic-level summaries unless paper-level allocation assumptions are stable and validated.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) shows that adding hidden citations can change citation-based ranks among top foundational papers.
- The paper reports that a foundational paper for cosmological inflation rises to the top rank after hidden citations are included, while an AdS/CFT foundational paper loses its previous top position.
- Meng et al. caution that paper-level hidden-citation assignment is provisional because the method operates at the topic level.
- The rank-shift analysis therefore functions best as a sensitivity diagnostic for citation rankings, not as a standalone definitive evaluation metric.

## Caveats

- Rank shifts are sensitive to corpus coverage, catchphrase thresholds, and hidden-credit allocation rules.
- Small rank changes near dense parts of a distribution may be less meaningful than large count differences in sparse tails.
- Ranking papers can obscure uncertainty and should be accompanied by topic-level evidence.

## Links

- [hidden citations](hidden_citations.md)
- [hidden-to-explicit citation ratio](hidden_to_explicit_citation_ratio.md)
- [mention-conditioned citation probability](mention_conditioned_citation_probability.md)
- [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `explicit_plus_hidden_citation_rank_shift`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: hidden-credit rank change; explicit-plus-hidden ranking; hidden citation rank sensitivity; credit-adjusted citation rank
