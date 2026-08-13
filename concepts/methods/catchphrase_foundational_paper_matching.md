# Catchphrase-foundational-paper matching

## Summary

Catchphrase-foundational-paper matching links distinctive textual phrases for a discovery or technique to the paper or papers treated as that topic's origin.

## Canonical Form

- Unit of analysis: n-gram, catchphrase, latent topic, foundational paper, citation context, or full-text mention.
- Typical representation: catchphrase-topic-paper triples, topic-paper bipartite tables, or probabilistic phrase-to-paper assignments.
- Mechanism or measurement target: textual evidence of scientific use that may be missing from reference-list citations.
- Empirical signature: a phrase repeatedly names a topic and is statistically tied to one or a few foundational papers.

## Uses in Science of Science

- Operationalizes [hidden citations](../measures/hidden_citations.md) by connecting full-text mentions to origin papers.
- Adds a text-based layer to [citation impact indicators](../measures/citation_impact_indicators.md) when formal citations miss incorporated knowledge.
- Converts [topic models](topic_models.md) and [citation context windows](../representations/citation_context_windows.md) into a reusable credit-reconstruction workflow.
- Treats [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md) as the observable labels that make hidden-credit recovery possible.

## Operationalization

- Inputs: full-text citation contexts, reference lists, candidate n-grams, paper identifiers, and citation links.
- Measures: phrase-topic probability, topic-paper probability, catchphrase thresholds, foundational-paper thresholds, and hidden-citation counts.
- Common model forms: interpretable topic models, n-gram extraction, citation-context corpora, thresholded phrase-topic matching, and manual expert spot checks.

## Evidence and Validations

- Verified full-text evidence from Meng et al. (2024) uses LDA over full-text citation contexts to infer topics, topic-specific catchphrases, and foundational papers.
- The paper defines followers of a topic as papers that cite the foundational paper, mention the catchphrase, or do both, making [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md) possible.
- Meng et al. use strict catchphrase thresholds and looser foundational-paper inclusion to avoid assigning broad phrases as hidden credit without enough topical specificity.
- Their workflow depends on [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md), because catchphrase evidence comes from citation contexts and full-text mentions.
- The approach is validated by expert checks on sampled topics and by the mutual-exclusivity diagnostics captured in [catchphrase-foundational exclusivity](../validations/catchphrase_foundational_exclusivity.md).

## Caveats

- Catchphrases can be missing for discoveries that never receive stable names.
- General phrases can create false positives unless specificity thresholds are conservative.
- The method is topic-level first; assigning hidden credit to individual papers requires additional assumptions.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md)
- [topic-to-paper hidden-credit allocation](topic_to_paper_hidden_credit_allocation.md)
- [catchphrase-foundational exclusivity](../validations/catchphrase_foundational_exclusivity.md)
- [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md)
- [topic models](topic_models.md)
- [citation context windows](../representations/citation_context_windows.md)
- [semantic embeddings](../representations/semantic_embeddings.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `catchphrase_foundational_paper_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Aliases: catchphrase matching; foundational-paper matching; topic-paper matching; hidden-citation matching
