# Topic-to-paper hidden-credit allocation

## Summary

Topic-to-paper hidden-credit allocation redistributes topic-level hidden citations to individual foundational papers using an explicit weighting rule.

## Canonical Form

- Unit of analysis: topic, follower paper, foundational paper, hidden citation, or paper-topic probability.
- Typical representation: topic-level hidden-citation totals assigned across foundational papers by representativeness weights.
- Mechanism or measurement target: paper-level credit reconstruction from topic-level textual evidence.
- Empirical signature: a topic has multiple candidate foundational papers, so hidden mentions must be apportioned before paper rankings can be recalculated.

## Uses in Science of Science

- Turns [hidden citations](../measures/hidden_citations.md) into candidate paper-level impact adjustments.
- Supports [explicit-plus-hidden citation rank shift](../measures/explicit_plus_hidden_citation_rank_shift.md) analyses for [citation impact indicators](../measures/citation_impact_indicators.md) while preserving uncertainty about attribution.
- Makes the assumptions behind [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md) explicit when several origin papers share a topic.

## Operationalization

- Inputs: topic-level hidden-citation counts, topic-to-foundational-paper probabilities, explicit citations, paper publication years, and ranking windows.
- Measures: assigned hidden citations per paper, explicit-plus-hidden counts, rank shifts, and sensitivity to allocation weights.
- Common model forms: proportional allocation by topic-paper probability, equal allocation baselines, bootstrap or posterior uncertainty, and rank sensitivity checks.

## Evidence and Validations

- Verified full-text evidence from Meng et al. (2024) reallocates hidden citations from topics to foundational papers in proportion to each paper's topic representativeness.
- The paper uses the resulting explicit-plus-hidden counts to show that some foundational papers change citation-based ranks substantially once hidden credit is included.
- Meng et al. explicitly caution that their approach operates at the topic level, so paper-specific hidden-credit assignment is provisional rather than definitive.
- This uncertainty is why [explicit-plus-hidden citation rank shift](../measures/explicit_plus_hidden_citation_rank_shift.md) should be treated as a sensitivity diagnostic rather than a final leaderboard.
- This caveat makes the allocation rule a method motif rather than a direct impact indicator.

## Caveats

- Different allocation assumptions can change paper-level rank movements.
- A follower paper may legitimately rely on one foundational paper more than another even when both belong to the topic.
- Paper-level hidden-credit estimates should be reported with the topic-level evidence that generated them.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md)
- [explicit-plus-hidden citation rank shift](../measures/explicit_plus_hidden_citation_rank_shift.md)
- [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [transparent metric construction](transparent_metric_construction.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `topic_to_paper_hidden_credit_allocation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Aliases: hidden-credit allocation; topic-level credit redistribution; explicit-plus-hidden ranking; hidden-citation rank reallocation
