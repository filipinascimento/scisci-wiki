# Hidden citations

## Summary

Hidden citations are textual credits to a discovery, technique, dataset, or concept that appear in the full text without an explicit reference to the foundational paper that introduced it.

## Canonical Form

- Unit of analysis: foundational paper, discovery, catchphrase, topic, citing paper, or full-text mention.
- Typical representation: bipartite topic-paper mapping, [catchphrase-to-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md), citation-context graph, or explicit-plus-hidden citation count.
- Mechanism or measurement target: uncited influence, [citation diversion](../mechanisms/citation_diversion_hierarchy.md), and [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md).
- Empirical signature: a paper or topic is frequently mentioned through distinctive phrases while the original work is not cited.

## Uses in Science of Science

- Extends [citation impact indicators](citation_impact_indicators.md) beyond reference lists into full-text evidence of intellectual use.
- Provides an operational measure for [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md) and uncited foundational influence.
- Supports audits of whether databases, methods, and canonical discoveries receive less explicit credit as they become routine scientific language.
- Depends on [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md), and should be interpreted with the [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md).

## Operationalization

- Inputs: full text, reference lists, citation contexts, catchphrases or eponyms, topic labels, foundational-paper candidates, and citation paths among related works.
- Measures: hidden citation count, explicit-plus-hidden citation count, [hidden-to-explicit citation ratio](hidden_to_explicit_citation_ratio.md), [mention-conditioned citation probability](mention_conditioned_citation_probability.md), and [explicit-plus-hidden citation rank shift](explicit_plus_hidden_citation_rank_shift.md).
- Common model forms: topic models, citation-context mining, catchphrase extraction, [foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md), [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md), citation-path analysis, and conservative false-positive filtering.
- Build hidden-credit topic inputs with [TF-IDF n-gram dictionary pruning](../methods/tfidf_ngram_dictionary_pruning.md) and [citation-context anchor windowing](../methods/citation_context_anchor_windowing.md), then validate matches with a [specialist foundational-paper review protocol](../validations/specialist_foundational_paper_review_protocol.md).

## Evidence and Validations

- Verified full-text evidence from Meng et al. (2024) defines hidden citation as clear textual credit to a discovery without a reference to the corresponding publication.
- Meng et al. use interpretable unsupervised machine learning over full text and citation contexts to identify catchphrases and foundational papers across physics topics.
- Their full text reports that hidden citations can outnumber explicit citations for influential discoveries, that the probability of citing a foundational paper conditional on mentioning the topic declines over time, and that credit can be redirected to reviews, books, applications, or related work that cite the original paper.
- The paper also makes separable motifs explicit: catchphrase-foundational-paper matching, mention-conditioned citation probability, hidden-to-explicit ratios, citation-diversion hierarchies, topic-to-paper hidden-credit allocation, and catchphrase-foundational exclusivity checks.
- The same full text motivates additional lower-level motifs: [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md), [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md), [explicit-plus-hidden citation rank shift](explicit_plus_hidden_citation_rank_shift.md), [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md), and [database and method textual-acknowledgment gap](../validations/database_method_textual_acknowledgment_gap.md).
- A later split-out pass adds [discourse-saturation hidden-credit burden](../mechanisms/discourse_saturation_hidden_credit_burden.md), [reference-limit hidden-credit pressure](../mechanisms/reference_limit_hidden_credit_pressure.md), [hidden-citation indirect-path share](hidden_citation_indirect_path_share.md), and [cross-venue hidden-citation portability](../validations/cross_venue_hidden_citation_portability.md).
- Another Meng et al. pass separates [main-text obliteration concentration](../validations/main_text_obliteration_concentration.md), citation-context anchor windowing, TF-IDF n-gram dictionary pruning, and specialist review as reusable pipeline and validation motifs.
- The paper cautions that paper-level hidden-citation assignment is approximate because the method operates at the topic level, so hidden citations should be used as a validation-aware supplement rather than a replacement for explicit citation measures.

## Caveats

- Hidden-citation detection requires access to full text, which remains uneven across publishers and fields.
- Catchphrase and foundational-paper matching can miss narrow, old, or weakly labeled discoveries.
- Adding hidden citations to impact metrics can change credit allocation, so assumptions about topic-to-paper assignment must be explicit.

## Links

- [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md)
- [citation diversion hierarchy](../mechanisms/citation_diversion_hierarchy.md)
- [discourse-saturation hidden-credit burden](../mechanisms/discourse_saturation_hidden_credit_burden.md)
- [reference-limit hidden-credit pressure](../mechanisms/reference_limit_hidden_credit_pressure.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [citation-context anchor windowing](../methods/citation_context_anchor_windowing.md)
- [TF-IDF n-gram dictionary pruning](../methods/tfidf_ngram_dictionary_pruning.md)
- [topic-credit followership partition](../representations/topic_credit_followership_partition.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md)
- [mention-conditioned citation probability](mention_conditioned_citation_probability.md)
- [Bayesian mention-citation estimation](../methods/bayesian_mention_citation_estimation.md)
- [credit diversion sink typology](../representations/credit_diversion_sink_typology.md)
- [hidden-to-explicit citation ratio](hidden_to_explicit_citation_ratio.md)
- [hidden-citation indirect-path share](hidden_citation_indirect_path_share.md)
- [explicit-plus-hidden citation rank shift](explicit_plus_hidden_citation_rank_shift.md)
- [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md)
- [catchphrase-foundational exclusivity](../validations/catchphrase_foundational_exclusivity.md)
- [specialist foundational-paper review protocol](../validations/specialist_foundational_paper_review_protocol.md)
- [main-text obliteration concentration](../validations/main_text_obliteration_concentration.md)
- [hidden-citation full-text access barrier](../validations/hidden_citation_full_text_access_barrier.md)
- [database and method textual-acknowledgment gap](../validations/database_method_textual_acknowledgment_gap.md)
- [cross-venue hidden-citation portability](../validations/cross_venue_hidden_citation_portability.md)
- [hidden-citation threshold sensitivity tradeoff](../validations/hidden_citation_threshold_sensitivity_tradeoff.md)
- [citation impact indicators](citation_impact_indicators.md)
- [responsible metrics](responsible_metrics.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation networks](../representations/citation_networks.md)
- [citation context windows](../representations/citation_context_windows.md)
- [citation-aware search and summarization](../methods/citation_aware_search_summarization.md)
- [topic models](../methods/topic_models.md)
- [semantic embeddings](../representations/semantic_embeddings.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]
- Merton, R. K. (1965). *On the shoulders of giants: A Shandean postscript*. Free Press. [OpenAlex: unknown; Dimensions: unknown; WoS: unknown]
- Merton, R. K. (1968). The Matthew effect in science. *Science*, 159(3810), 56-63. https://doi.org/10.1126/science.159.3810.56 [OpenAlex: W4292887282; Dimensions: pub.1062493069; WoS: unknown]

## Metadata

- Concept ID: `hidden_citations`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Aliases: implicit citations; indirect citations; uncited influence; hidden credit
