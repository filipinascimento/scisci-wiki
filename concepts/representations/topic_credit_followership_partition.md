# Topic-credit followership partition

## Summary

Topic-credit followership partition divides a topic's follower papers into citation-only, mention-only, and mention-plus-citation groups.

## Canonical Form

- Unit of analysis: topic, catchphrase, foundational paper, citing paper, mentioning paper, or full-text corpus.
- Typical representation: Venn-like partition over papers that cite foundational work, mention topic catchphrases, or do both.
- Measurement target: visible credit, hidden credit, and overlap between textual use and explicit citation.
- Empirical signature: a sizable mention-only region indicates hidden citations.

## Uses in Science of Science

- Provides the denominator representation for [hidden citations](../measures/hidden_citations.md).
- Supports [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md).
- Feeds [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md) and credit reallocation.
- Connects [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md) to measurable credit partitions.

## Operationalization

- Identify topic catchphrases and foundational papers.
- Collect all papers that cite at least one foundational paper.
- Collect all papers that mention at least one topic catchphrase in full text.
- Partition papers into citation-only, mention-only, and mention-plus-citation groups.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) defines topic followers as papers that cite foundational papers, mention catchphrases, or both.
- The paper visualizes this partition for physics topics and treats the mention-without-citation region as hidden citations.
- The representation makes the hidden-citation denominator explicit rather than only reporting hidden counts.

## Caveats

- The partition depends on catchphrase completeness and full-text availability.
- Citation-only papers may still use the idea without the selected catchphrases.
- Mention-only papers require conservative filtering to avoid false positives.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md)
- [catchphrase-foundational-paper matching](../methods/catchphrase_foundational_paper_matching.md)
- [topic-to-paper hidden-credit allocation](../methods/topic_to_paper_hidden_credit_allocation.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; SciSciNet: W4396694003; WoS: unknown]

## Metadata

- Concept ID: `topic_credit_followership_partition`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: topic follower partition; citation mention partition; hidden-credit denominator partition
