# Citation diversion hierarchy

## Summary

Citation diversion hierarchy is the mechanism by which hidden credit to a foundational paper is redirected to reviews, books, applications, extensions, or nearby papers that cite the foundation.

## Canonical Form

- Unit of analysis: hidden-citing paper, alternative cited work, foundational paper, citation path, or topic.
- Typical representation: shortest citation-path length from the alternative cited work to the foundational paper.
- Mechanism: authors omit the original source but cite an intermediary that packages, applies, extends, or reviews the foundational idea.
- Empirical signature: many hidden-citing papers cite works one or two citation steps away from the foundational paper.

## Uses in Science of Science

- Separates untracked use from redirected credit inside [hidden citations](../measures/hidden_citations.md).
- Explains why [obliteration by incorporation](obliteration_by_incorporation.md) can coexist with continued citation of related literature.
- Provides a network mechanism linking [citation context windows](../representations/citation_context_windows.md), citation paths, and reference-list credit flows.
- Helps distinguish ordinary redirected credit from the [database and method textual-acknowledgment gap](../validations/database_method_textual_acknowledgment_gap.md), where a paper may be cited without prose recognition of the infrastructure contribution.
- Can be measured directly with [hidden-citation indirect-path share](../measures/hidden_citation_indirect_path_share.md).

## Operationalization

- Inputs: hidden-citing papers, their reference lists, foundational-paper identifiers, citation graph edges, and topic labels.
- Measures: alternative-citation frequency, shortest path length to the foundational paper, share of hidden citations with path length at most two, and intermediary type.
- Common model forms: citation hierarchy networks, shortest-path search, co-citation analysis, intermediary classification, and temporal comparison of direct versus indirect citation probability.

## Evidence and Validations

- Verified full-text evidence from Meng et al. (2024) identifies the most frequently cited alternatives accompanying hidden mentions for exemplar topics.
- The paper reports that alternatives often include reviews, books, applications, extensions, or papers close to the foundational paper in the citation graph.
- Meng et al. show that many hidden citations are not citation-free; instead, they cite works that cite the original foundation or are otherwise close in the citation hierarchy.
- The path-length component is split out as [hidden-citation indirect-path share](../measures/hidden_citation_indirect_path_share.md), while venue constraints are split out as [reference-limit hidden-credit pressure](reference_limit_hidden_credit_pressure.md).
- Their temporal analysis shows that adding indirect citations can offset the apparent decline in direct [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md).
- The same discussion separates database and tool examples where citation and textual acknowledgment can diverge.

## Caveats

- Citation paths do not prove author intent.
- Some intermediaries may be the more appropriate source for a method, dataset, or review claim.
- Graph coverage affects measured path lengths, especially for books and older literature.

## Links

- [hidden citations](../measures/hidden_citations.md)
- [mention-conditioned citation probability](../measures/mention_conditioned_citation_probability.md)
- [hidden-citation indirect-path share](../measures/hidden_citation_indirect_path_share.md)
- [reference-limit hidden-credit pressure](reference_limit_hidden_credit_pressure.md)
- [hidden-to-explicit citation ratio](../measures/hidden_to_explicit_citation_ratio.md)
- [database and method textual-acknowledgment gap](../validations/database_method_textual_acknowledgment_gap.md)
- [obliteration by incorporation](obliteration_by_incorporation.md)
- [citation networks](../representations/citation_networks.md)
- [main path analysis](../methods/main_path_analysis.md)
- [co-citation analysis](../representations/co_citation.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]
- Merton, R. K. (1968). The Matthew effect in science. *Science*, 159(3810), 56-63. https://doi.org/10.1126/science.159.3810.56 [OpenAlex: W4292887282; Dimensions: pub.1062493069; WoS: unknown]

## Metadata

- Concept ID: `citation_diversion_hierarchy`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Aliases: indirect hidden citations; redirected credit; alternative citation hierarchy; citation-path diversion
