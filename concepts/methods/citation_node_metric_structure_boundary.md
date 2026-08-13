# Citation Node-Metric Structure Boundary

## Summary

Citation node-metric structure boundary separates citation studies that score nodes for prominence from studies that analyze explicit network relations and paths.

## Canonical Form

- Unit of analysis: citation-count indicator, journal indicator, citation matrix, network node, or network edge.
- Typical representation: methodological distinction between node measures and structural network analysis.
- Mechanism or measurement target: whether citation data are being used to estimate node prominence or relational structure.
- Empirical signature: the same citation matrix can yield node scores while leaving the network structure implicit.

## Uses in Science of Science

- Clarifies the boundary between [citation impact indicators](../measures/citation_impact_indicators.md) and [link-focused citation connectivity](link_focused_citation_connectivity.md).
- Frames [citation PageRank](../measures/citation_pagerank.md) and [journal impact factor](../measures/journal_impact_factor.md) as node-score families rather than path-structure analysis.
- Helps explain why [main path analysis](main_path_analysis.md) needs edge and path information rather than only citation counts.
- Provides an organizing distinction for citation-network method comparisons.

## Operationalization

- State whether the study target is node prominence, relation patterns, or both.
- If node scores are used, specify how much network structure is collapsed into a scalar.
- If structural analysis is used, preserve edge direction, paths, components, and link sequences.
- Compare conclusions from node-score and structural approaches when both are plausible.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) groups citation studies into prominence measures for publications or journals and studies of citation-network structure.
- They describe immediacy indices, half-lives, impact factors, and eigen-structure citation measures as node-focused measures where structure remains implicit or secondary.
- The paper then positions its own contribution as a link-focused method rather than another node-score approach.

## Caveats

- Node scores and structural analysis can be complementary; the boundary is analytical, not a claim that one family is always preferable.
- Some measures, such as recursive citation metrics, encode structure while still reporting node scores.
- The distinction should be stated before interpretation, because node-prominence conclusions can be mistaken for historical path claims.

## Links

- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [link-focused citation connectivity](link_focused_citation_connectivity.md)
- [main path analysis](main_path_analysis.md)
- [citation networks](../representations/citation_networks.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; SciSciNet: W2155046806; WoS: unknown]

## Metadata

- Concept ID: `citation_node_metric_structure_boundary`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: node-score structure distinction; citation prominence structure boundary; node metric versus network structure; citation-measure structure boundary
