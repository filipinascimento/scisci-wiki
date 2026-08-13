# Research-flow signal timing

## Summary

Research-flow signal timing is the representation of grants, publications, citations, patents, trials, policy mentions, and attention indicators as lifecycle signals with different timing and field dependence.

## Canonical Form

- Unit of analysis: research object, lifecycle stage, grant, publication, citation, patent, trial, policy document, or attention signal.
- Typical representation: research-process timeline, layered signal map, or temporal context graph.
- Representation target: interpret linked research indicators according to when they appear in the research process.
- Empirical signature: funding signals occur upstream, publications and citations occur later, and patents, trials, policy, or attention indicators have domain-specific timing.

## Uses in Science of Science

- Adds temporal semantics to [research-object context graphs](research_object_context_graphs.md).
- Complements [scholarly entity graphs](scholarly_entity_graphs.md), which emphasize link structure.
- Helps interpret [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md) as an upstream linkage.
- Pairs with [Dimensions citation relation coverage boundary](../validations/dimensions_citation_relation_coverage_boundary.md) because each signal layer has separate timing and coverage.

## Operationalization

- Map each entity and relation type to an expected lifecycle position.
- Record signal dates such as grant start, publication date, citation date, patent filing, trial registration, policy mention, and attention event.
- Compare fields by which signal layers are meaningful and when they typically occur.
- Use timelines or layered graphs to avoid interpreting all links as contemporaneous evidence.
- Report right-censoring and field-dependence for late-arriving signals.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) presents Dimensions as a way to view research in context across grants, publications, citations, patents, clinical trials, policy, and attention.
- The paper emphasizes that research-process timelines are indicative and vary by field.
- This motif is a representation because it encodes the temporal meaning of linked data layers.
- It helps prevent treating every linked signal as equivalent evidence of the same stage of impact.

## Caveats

- Different fields have different funding, publication, patenting, and policy rhythms.
- Some signals can occur out of order or never appear for legitimate research outputs.
- Snapshot right-censoring is severe for late signals such as patents, trials, and policy uptake.

## Links

- [research-object context graphs](research_object_context_graphs.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md)
- [Dimensions citation relation coverage boundary](../validations/dimensions_citation_relation_coverage_boundary.md)
- [Dimensions](../datasets/dimensions.md)
- [research graph layer census](../measures/research_graph_layer_census.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; SciSciNet: W2888592790; WoS: unknown]

## Metadata

- Concept ID: `research_flow_signal_timing`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: research lifecycle signal timing; scholarly signal timeline; grant publication citation patent timing; research-process signal map
