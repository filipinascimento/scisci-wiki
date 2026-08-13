# Citation-Tree Layer Depreciation

## Summary

Citation-tree layer depreciation is the assumption that distant layers of a backward citation tree are less relevant to a focal invention or paper than nearer layers.

## Canonical Form

- Unit of analysis: patent, paper, backward citation tree, or knowledge-depth measure.
- Typical representation: diminishing weight for deeper ancestry layers.
- Method target: transform raw citation-tree size into a usable knowledge-depth proxy.
- Empirical signature: log transforms or layer weights reduce domination by large distant citation-tree layers.

## Uses in Science of Science

- Refines [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md).
- Explains one rationale behind [citation-tree log-median robustness](../validations/citation_tree_log_median_robustness.md).
- Connects [direct citation-propensity control](../validations/direct_citation_propensity_control.md) to deeper ancestry assumptions.
- Supports validations such as [knowledge-depth team-size gradient](../validations/knowledge_depth_team_size_gradient.md).

## Operationalization

- Build backward citation trees from focal patents or papers.
- Assign lower weights to more distant layers or apply a concave transform such as the natural log of node count.
- Compare results with raw counts, median splits, and direct-citation controls.
- Report whether conclusions depend on how distant ancestry is depreciated.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) uses the log of the number of nodes in a patent's backward citation tree.
- Jones argues that distant layers of the tree are less relevant than nearer layers, giving a theoretical rationale for diminishing impact.
- The paper notes that log transformation loosely captures the reduced impact of large distant layers that dominate raw node counts.

## Caveats

- Log transformation is only a coarse approximation to actual knowledge relevance.
- Citation trees reflect patent-citation practices, examiner additions, and truncation as well as knowledge ancestry.
- Different fields may need different layer-depreciation functions.

## Links

- [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md)
- [citation-tree log-median robustness](../validations/citation_tree_log_median_robustness.md)
- [direct citation-propensity control](../validations/direct_citation_propensity_control.md)
- [knowledge-depth team-size gradient](../validations/knowledge_depth_team_size_gradient.md)
- [knowledge-depth specialization gradient](../validations/knowledge_depth_specialization_gradient.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; SciSciNet: W3124253902; WoS: unknown]

## Metadata

- Concept ID: `citation_tree_layer_depreciation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: citation ancestry depreciation; backward citation layer weighting; citation-tree distance discounting; log citation-tree depth
