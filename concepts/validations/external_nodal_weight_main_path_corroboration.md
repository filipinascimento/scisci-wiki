# External nodal-weight main-path corroboration

## Summary

External nodal-weight main-path corroboration checks whether independently assigned node importance weights identify the same events that a citation-network main path selects.

## Canonical Form

- Unit of analysis: node, event, paper, external importance score, main-path membership, or historical citation network.
- Typical representation: ranked node-weight list compared with main-path nodes.
- Validation target: whether a path-based structural backbone agrees with an independent assessment of event importance.
- Empirical signature: high external-weight nodes fall on the extracted main path or on substantively explainable branches.

## Uses in Science of Science

- Provides an external validation channel for [main path analysis](../methods/main_path_analysis.md).
- Helps guard against a path that is mathematically central but historically implausible.
- Works with expert ratings, curated historical weights, prizes, review prominence, or other non-identical importance signals.
- Complements [Q-analysis content-core validation](q_analysis_content_core_validation.md) and [main path convergence validation](main_path_convergence_validation.md).

## Operationalization

- Extract a main path from a bounded citation network.
- Obtain external node weights that were not computed from the same traversal-count procedure.
- Rank nodes by the external weights and compare high-weight nodes with main-path membership.
- Investigate high-weight off-path nodes and low-weight on-path nodes with historical reading.
- Report agreement and exceptions rather than treating corroboration as a binary pass/fail result.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) compares their DNA main path with nodal weights assigned in the earlier historiograph work.
- They report that the seven nodes with the highest nodal weighting are all on the main path.
- The paper treats this agreement, together with Q-analysis evidence, as corroborative support for the identified main path.

## Caveats

- External weights can share the same historical or citation biases as the path analysis.
- Agreement with a weighted list does not prove causal dependence or completeness.
- A strong off-path node may indicate a parallel branch rather than an error.
- Off-path high-importance nodes can be handled with an [off-main-path breakthrough caveat](off_main_path_breakthrough_caveat.md) instead of forcing them onto a single backbone.

## Links

- [main path analysis](../methods/main_path_analysis.md)
- [main path convergence validation](main_path_convergence_validation.md)
- [Q-analysis content-core validation](q_analysis_content_core_validation.md)
- [citation historiograph accuracy audit](citation_historiograph_accuracy_audit.md)
- [citation networks](../representations/citation_networks.md)
- [science map accuracy validation](science_map_accuracy_validation.md)
- [off-main-path breakthrough caveat](off_main_path_breakthrough_caveat.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `external_nodal_weight_main_path_corroboration`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: nodal-weight corroboration; external main-path validation; historical weight path check; node-importance path corroboration
