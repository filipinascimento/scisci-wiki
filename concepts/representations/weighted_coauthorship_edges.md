# Weighted coauthorship edges

## Summary

Weighted coauthorship edges assign different strengths to author-author ties, usually discounting large teams so that coauthorship in a two-person paper counts more than coauthorship in a large consortium paper.

## Canonical Form

- Unit of analysis: author pair, paper, team, coauthorship edge, field, or time window.
- Typical representation: weighted author-author edge, collaboration-strength matrix, fractional coauthorship weight, or discounted team-size edge.
- Representation target: avoid treating every coauthorship tie as equally strong regardless of team size or repeated collaboration.
- Empirical signature: the same author pair can have a stronger edge through repeated small-team papers than through a single large-team paper.

## Uses in Science of Science

- Refines [coauthorship networks](coauthorship_networks.md) and collaboration-strength measures.
- Provides weighted inputs for [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md), [collaboration assortativity](../measures/collaboration_assortativity.md), and [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md).
- Connects social-network representation to [collective credit allocation](../measures/collective_credit_allocation.md) and team-size analyses.
- Helps compare fields where author-list lengths differ.

## Operationalization

- Build author-disambiguated paper-author records.
- For each paper with n authors, add an edge between every author pair.
- Weight each pair by a chosen rule, such as Newman's 1 / (n - 1) collaboration-strength contribution per paper.
- Sum weights across papers and time windows.
- Summarize the resulting weighted layer with [collaboration strength distribution](../measures/collaboration_strength_distribution.md) before thresholding or comparing fields.
- Report how consortium authors, alphabetical bylines, contribution roles, and missing disambiguation are handled.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) defines coauthorship networks as networks where two scientists are connected if they have coauthored a paper.
- Verified full-text evidence from Newman (2004) defines coauthorship networks with authors as nodes and coauthorship as lines, distinguishing them from citation networks.
- Newman (2004) argues that simple counts of coauthored papers fail to account for how many other coauthors were on each paper.
- The paper defines collaboration strength by adding 1 / (n - 1) to a pair's edge for a paper with n authors, interpreting this as an author's divided collaboration time across coauthors.

## Caveats

- Fractional edge weights are approximations; they do not measure actual labor, credit, or communication.
- Field norms, alphabetical ordering, consortium authorship, and contribution statements can change what a weighted edge means.
- Author disambiguation errors can create false weighted ties or split repeated collaborations.

## Links

- [coauthorship networks](coauthorship_networks.md)
- [collaboration strength distribution](../measures/collaboration_strength_distribution.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [collaboration assortativity](../measures/collaboration_assortativity.md)
- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [team size disruption](../mechanisms/team_size_disruption.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `weighted_coauthorship_edges`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: collaboration strength; fractional coauthorship edge; discounted coauthorship tie; weighted collaboration edge
