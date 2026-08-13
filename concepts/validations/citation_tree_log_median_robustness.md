# Citation-tree log-median robustness

## Summary

Citation-tree log-median robustness checks whether knowledge-depth results depend on a skewed citation-tree count by comparing log-transformed depth with median-split specifications.

## Canonical Form

- Unit of analysis: patent, citation tree, node count, knowledge-depth score, transformation, or robustness specification.
- Typical representation: log node-count model and median-above/below indicator model.
- Validation target: ensure tree-depth effects are not artifacts of extreme raw citation-tree sizes.
- Empirical signature: team-size or specialization gradients remain under both log and coarse median definitions.

## Uses in Science of Science

- Validates [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md).
- Supports [knowledge-depth team-size gradient](knowledge_depth_team_size_gradient.md) and [knowledge-depth specialization gradient](knowledge_depth_specialization_gradient.md).
- Provides a general robustness motif for heavy-tailed bibliometric and patent-network measures.

## Operationalization

- Compute raw citation-tree node counts for each patent or paper.
- Use log transformation when raw counts are highly skewed.
- Re-estimate key models with a median-split or other coarse indicator.
- Report whether results depend on the exact transformation.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) notes that raw citation-tree node counts are highly skewed.
- Jones uses a log-transformed citation-tree measure and reports robustness using a median-based indicator for knowledge depth.
- The robustness check supports interpreting citation-tree depth as a knowledge-burden proxy rather than an outlier-driven artifact.

## Caveats

- Median splits discard information and can hide nonlinear relationships.
- Log transformation handles skew but does not solve citation-coverage or field-normalization issues.
- Citation-tree depth may still capture citation practice or patenting style rather than knowledge depth alone.

## Links

- [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md)
- [knowledge-depth team-size gradient](knowledge_depth_team_size_gradient.md)
- [knowledge-depth specialization gradient](knowledge_depth_specialization_gradient.md)
- [direct citation-propensity control](direct_citation_propensity_control.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; SciSciNet: W3124253902; WoS: unknown]

## Metadata

- Concept ID: `citation_tree_log_median_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: citation-tree transform robustness; log node-count robustness; median knowledge-depth check; citation-tree skew audit
