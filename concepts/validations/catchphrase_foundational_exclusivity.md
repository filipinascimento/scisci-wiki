# Catchphrase-foundational exclusivity

## Summary

Catchphrase-foundational exclusivity validates hidden-citation detection by checking whether a phrase and a foundational paper uniquely point to each other.

## Canonical Form

- Unit of analysis: catchphrase, n-gram, foundational paper, latent topic, or phrase-paper pair.
- Typical representation: conditional entropy or conditional probability of paper given phrase and phrase given paper.
- Mechanism or measurement target: whether a textual label is specific enough to carry credit for a discovery.
- Empirical signature: true catchphrase-foundational pairs have lower non-exclusivity than generic phrases or non-foundational papers.

## Uses in Science of Science

- Provides a validation layer for [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md).
- Helps prevent false-positive [hidden citations](../measures/hidden_citations.md) from broad field terms.
- Makes full-text credit reconstruction more compatible with [responsible metrics](../measures/responsible_metrics.md) by surfacing assignment uncertainty.
- Connects specificity checks to [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md), because phrase-paper exclusivity can emerge after publication.

## Operationalization

- Inputs: phrase-topic-paper triples, catchphrase candidates, foundational-paper candidates, citation contexts, and topic labels.
- Measures: `P(topic | phrase)`, `P(paper | topic)`, conditional entropy `S(paper | phrase)`, conditional entropy `S(phrase | paper)`, and threshold-pass rates.
- Common model forms: posterior probability thresholds, entropy comparisons, catchphrase versus non-catchphrase baselines, and expert review of sampled topics.

## Evidence and Validations

- Verified full-text evidence from Meng et al. (2024) argues that hidden citations require mutual exclusivity between a catchphrase and a foundational paper.
- The paper compares specific phrases, such as topic names, against generic phrases and finds lower non-exclusivity for catchphrases tied to well-defined foundational papers.
- Meng et al. report that many catchphrases emerge from community usage rather than being proposed in the foundational paper itself.
- The validation supports conservative hidden-citation detection but also explains why discoveries without stable labels are harder to recover.
- The same evidence motivates treating phrase origin and phrase exclusivity as related but distinct validation questions.

## Caveats

- Entropy validation depends on the corpus, citation-context extraction, and candidate phrase set.
- Community-assigned labels can change over time or differ across subfields.
- Some foundational papers are represented by several phrases, requiring topic-level rather than single-phrase validation.

## Links

- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md)
- [full-text hidden-citation corpora](../datasets/full_text_hidden_citation_corpora.md)
- [hidden citations](../measures/hidden_citations.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md)
- [topic models](../methods/topic_models.md)
- [citation context windows](../representations/citation_context_windows.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `catchphrase_foundational_exclusivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Aliases: catchphrase exclusivity; mutual exclusivity validation; phrase-paper entropy; hidden-citation specificity check
