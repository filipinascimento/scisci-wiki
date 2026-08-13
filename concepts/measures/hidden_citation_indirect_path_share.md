# Hidden-citation indirect-path share

## Summary

Hidden-citation indirect-path share measures the fraction of hidden citations that cite an intermediary work within a specified citation-path distance of the foundational paper.

## Canonical Form

- Unit of analysis: hidden-citing paper, alternative cited work, foundational paper, topic, field, or time window.
- Typical representation: share of hidden citations with shortest path length at most `k`, often `k = 2`, from cited alternatives to the foundational paper.
- Measurement target: distinguish pure untracked hidden credit from indirect credit routed through nearby literature.
- Empirical signature: many hidden-citing papers omit the foundational paper but cite work that cites, reviews, applies, or extends it.

## Uses in Science of Science

- Quantifies [citation diversion hierarchy](../mechanisms/citation_diversion_hierarchy.md) as a reusable measure.
- Helps interpret [hidden citations](hidden_citations.md): omitted direct citations can still route credit through citation-network neighbors.
- Provides a network measure for evaluating [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md) and [reference-limit hidden-credit pressure](../mechanisms/reference_limit_hidden_credit_pressure.md).
- Supports sensitivity checks for whether hidden credit is fully invisible or merely displaced to intermediaries.

## Operationalization

- Identify hidden-citing papers that mention a topic catchphrase without citing the foundational papers.
- Extract their reference lists and compute shortest citation paths from cited alternatives to each foundational paper.
- Report the share with path length 1, path length 2, path length at most `k`, and no observed path.
- Compare against random-reference baselines drawn from the same corpus, field, or year.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) separates implicit hidden citations from indirect citations by tracking citation paths to foundational papers.
- The paper reports that, for several exemplar topics, around 60% of hidden citations cite other arXiv papers that cite the foundational papers.
- Meng et al. contrast this with randomly sampled arXiv references, for which comparable short paths are negligible.
- Their temporal analysis shows that including indirect citations can change the apparent trend in direct [mention-conditioned citation probability](mention_conditioned_citation_probability.md).

## Caveats

- Citation-network coverage determines observed path lengths; books, older works, and missing references can appear disconnected.
- Short paths do not prove that the author intended to credit the omitted foundational paper.
- The choice of `k` should be reported before comparing fields or topics.

## Links

- [hidden citations](hidden_citations.md)
- [mention-conditioned citation probability](mention_conditioned_citation_probability.md)
- [citation diversion hierarchy](../mechanisms/citation_diversion_hierarchy.md)
- [reference-limit hidden-credit pressure](../mechanisms/reference_limit_hidden_credit_pressure.md)
- [obliteration by incorporation](../mechanisms/obliteration_by_incorporation.md)
- [citation networks](../representations/citation_networks.md)
- [direct citation relatedness graph](../representations/direct_citation_relatedness_graph.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `hidden_citation_indirect_path_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: indirect hidden-citation share; citation path hidden-credit share; short-path hidden citations; hidden citation path-length share
