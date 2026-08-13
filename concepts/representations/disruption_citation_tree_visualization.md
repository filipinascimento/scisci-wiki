# Disruption citation-tree visualization

## Summary

Disruption citation-tree visualization is a visual grammar for showing how future citations branch from a focal work and its predecessors, making disruptive and developmental citation paths visible over time.

## Canonical Form

- Unit of analysis: focal paper, predecessor, future citing paper, citation branch, time depth, or citation count.
- Typical representation: rooted citation tree with branches ordered by time and styled by citation direction.
- Representation target: make [focal-predecessor-future citation triads](focal_predecessor_future_citation_triads.md) interpretable as temporal trajectories rather than only aggregate counts.
- Empirical signature: disruptive focal works attract future citation paths that bypass predecessors, while developmental works remain embedded with predecessor-citing paths.

## Uses in Science of Science

- Provides a diagnostic figure type for explaining [disruption index](../measures/disruption_index.md) cases.
- Helps compare canonical disruptive and developmental exemplars in teaching, validation, and audit settings.
- Bridges local citation-neighborhood measures with broader [citation networks](citation_networks.md).

## Operationalization

- Choose a focal work and its cited predecessors.
- Extract future works that cite the focal work, the predecessors, or both within a fixed window.
- Encode branch height or depth as time since focal publication.
- Encode branch length or thickness with citation counts when useful.
- Color paths by whether future work cites only the focal work, only predecessors, or both.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) uses Extended Data Fig. 1 to define citation trees for disruptive and developmental works.
- The figure describes roots, branches, temporal height, citation-count length, and color directions for different citation paths.
- The visualization supports the paper's validation strategy by making high- and low-disruption examples visually inspectable.

## Caveats

- Citation-tree examples can be persuasive but selective; they should not replace distributional checks.
- Visual complexity grows quickly for highly cited focal works.
- Citation coverage and window length determine which branches are visible.

## Links

- [focal-predecessor-future citation triads](focal_predecessor_future_citation_triads.md)
- [disruption index](../measures/disruption_index.md)
- [disruption measure validation](../validations/disruption_measure_validation.md)
- [citation networks](citation_networks.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; SciSciNet: W2913773162; WoS: unknown]

## Metadata

- Concept ID: `disruption_citation_tree_visualization`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: disruption citation tree; developmental citation tree; focal-work citation branch visualization; disruptive citation-path display
