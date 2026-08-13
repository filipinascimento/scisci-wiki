# Citation historiograph accuracy audit

## Summary

Citation historiograph accuracy audit is the validation step of checking whether a reconstructed historical citation network is accurate enough for structural analysis.

## Canonical Form

- Unit of analysis: citation historiograph, bounded event network, edge-cleaning decision, or historical corpus.
- Typical representation: audited directed citation graph with documented node selection, edge sources, cycle handling, and missing-link assumptions.
- Validation target: whether network structure reflects the intended historical dependencies rather than errors or noisy citation reconstruction.
- Empirical signature: edge provenance and node definitions are explicit enough that path, clustering, or centrality results can be interpreted historically.

## Uses in Science of Science

- Provides a prerequisite for [main path analysis](../methods/main_path_analysis.md), [citation DAG topological sort](../methods/citation_dag_topological_sort.md), and other path-based histories.
- Helps separate substantive field-development claims from artifacts of incomplete bibliography extraction, OCR errors, or ambiguous event grouping.
- Creates a reusable audit layer for historical science maps where the corpus is small enough for expert checking.
- Complements large-scale automated citation-network workflows by making provenance and error sensitivity explicit.

## Operationalization

- Define the historical events, papers, or discoveries represented as nodes.
- Record how each citation or dependency edge was obtained.
- Check edge direction, duplicates, missing references, same-year cycles, and indirect links.
- Document cycle-handling choices and sensitivity to edge additions or removals.
- Interpret downstream paths or clusters only after reporting the audit status.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) states that ensuring historiograph accuracy is a primary objective before structural analysis.
- They warn that too much error or noise in a historiograph, or in any network, compromises analysis of its structure.
- Their DNA example rests on a carefully constructed citation-based historiograph, while still documenting a two-cycle and a modeling decision for transforming the network into a DAG.

## Caveats

- Historical accuracy can require domain expertise that is unavailable for large automated corpora.
- A clean citation graph can still miss tacit influence, unpublished communication, or uncited dependence.
- Audit decisions should be preserved because path results can change when a small historical graph has a few disputed edges.

## Links

- [main path analysis](../methods/main_path_analysis.md)
- [citation DAG topological sort](../methods/citation_dag_topological_sort.md)
- [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md)
- [citation networks](../representations/citation_networks.md)
- [science maps](../representations/science_maps.md)
- [main path convergence validation](main_path_convergence_validation.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `citation_historiograph_accuracy_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: historiograph audit; citation-history accuracy check; citation network provenance audit; historical citation graph audit
