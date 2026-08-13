# Direct/indirect citation-tie collapse

## Summary

Direct/indirect citation-tie collapse is the validation problem that a curated citation historiograph may combine direct citations, author-mediated indirect links, and weaker indirect links into one untyped edge relation.

## Canonical Form

- Unit of analysis: milestone event, citation tie, historiograph edge, indirect citation chain, or event-level citation network.
- Typical representation: edge-type audit, direct-versus-indirect tie flag, collapsed-link caveat, or sensitivity to typed edges.
- Validation target: prevent path, component, or main-stream analyses from treating heterogeneous citation evidence as a single kind of dependency.
- Empirical signature: the source network documents several link types, but the downstream analysis collapses them before computing connectivity or main paths.

## Uses in Science of Science

- Adds an edge-coding caveat to [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md).
- Qualifies [main path analysis](../methods/main_path_analysis.md) and [link-focused citation connectivity](../methods/link_focused_citation_connectivity.md), because traversal counts can change if direct and indirect edges are weighted differently.
- Connects event-level histories to broader [citation networks](../representations/citation_networks.md), where citation edges are often treated as homogeneous even when their evidentiary roles differ.
- Complements [citation historiograph accuracy audit](citation_historiograph_accuracy_audit.md) by focusing on edge-type collapse rather than missing or erroneous nodes.

## Operationalization

- Identify whether each event-level link is a direct citation, author-mediated indirect link, non-author-mediated indirect link, narrative dependency, or inferred information flow.
- Run main-path or traversal analyses under both collapsed and typed/weighted edge schemes when possible.
- Report which original edge types were collapsed and why.
- Compare selected paths with external historical weights, prize events, content codes, or expert histories.
- Treat collapsed-edge results as structural summaries, not as proof that all links have equal causal or evidentiary strength.

## Evidence and Validations

- Verified full-text evidence from Hummon and Doreian (1989) states that their DNA historiograph includes direct connections between milestone events, less direct links through works by authors of nodal events, and even less direct links through works by other authors.
- The paper explicitly says that its analysis does not distinguish between direct and less direct citations.
- Hummon and Doreian later describe Garfield et al.'s original nodal weighting as using direct, strong indirect, and weak indirect ties with successive types weighted less.
- This makes collapsed edge typing a documented modeling choice rather than a hidden property of the main-path result.

## Caveats

- Typed edges may be unavailable for large automated citation networks.
- Collapsing edge types can be reasonable for a first structural pass, but the choice should be visible.
- Weighting direct and indirect links differently can introduce its own assumptions about influence, memory, and citation practice.

## Links

- [milestone-event citation historiograph](../representations/milestone_event_citation_historiograph.md)
- [main path analysis](../methods/main_path_analysis.md)
- [link-focused citation connectivity](../methods/link_focused_citation_connectivity.md)
- [citation historiograph accuracy audit](citation_historiograph_accuracy_audit.md)
- [citation networks](../representations/citation_networks.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [external nodal-weight main-path corroboration](external_nodal_weight_main_path_corroboration.md)

## References

- Hummon, N. P., & Doreian, P. (1989). Connectivity in a citation network: The development of DNA theory. *Social Networks*, 11(1), 39-63. https://doi.org/10.1016/0378-8733(89)90017-8 [OpenAlex: W2155046806; Dimensions: pub.1012779197; WoS: unknown]

## Metadata

- Concept ID: `direct_indirect_citation_tie_collapse`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hummon and Doreian (1989) (1989)
- Latest seen paper: Hummon and Doreian (1989) (1989)
- Primary reference DOI: `10.1016/0378-8733(89)90017-8`
- OpenAlex ID: `W2155046806`
- Dimensions ID: `pub.1012779197`
- SciSciNet ID: `W2155046806`
- Aliases: collapsed citation tie types; direct indirect link audit; historiograph edge-type collapse; typed citation-tie caveat
