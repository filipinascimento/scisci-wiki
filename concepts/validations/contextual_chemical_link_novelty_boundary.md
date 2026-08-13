# Contextual chemical-link novelty boundary

## Summary

A chemical pair can be scientifically novel even when the pair was previously linked, if the new claim concerns a different disease, mechanism, or context.

## Canonical Form

- Unit of analysis: chemical pair, relation type, disease context, mechanism, co-mention edge, or novelty claim.
- Typical representation: typed relation-novelty boundary beyond first-ever chemical co-linking.
- Mechanism, measurement, or validation target: semantic limitation of abstract chemical co-mention novelty.
- Empirical signature: first co-link novelty misses new meanings for existing pairs in new contexts or mechanisms..

## Uses in Science of Science

- Refines chemical-network validation by linking it to [chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md) and [biomedical chemical relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md).
- Useful as a reusable distinction when [chemical relationship persistence assumption](chemical_relationship_persistence_assumption.md) is analyzed in science-of-science data.
- Adds cross-links to [topological cognitive distance proxy](../measures/topological_cognitive_distance_proxy.md) so the motif is not read as an isolated result.

## Operationalization

- Distinguish first-ever chemical co-link novelty from context-specific novelty over relation type, disease context, method, or mechanism.
- Use richer relation extraction when the novelty question concerns mechanism or application rather than co-mention.
- Report when repeated pairs are treated as nonnovel despite new contextual claims.

## Evidence and Validations

- Verified full-text evidence from Rzhetsky et al. (2015) cautions that the hidden-network model treats new discoveries as never-linked chemical pairs, missing new meanings for existing pairs.
- The motif adds a semantic boundary to chemical-network novelty measures.

## Caveats

- Requires richer relation typing than abstract co-mention edges.
- Context-specific novelty is harder to validate consistently at scale.

## Links

- [Chemical relationship knowledge network](../representations/chemical_relationship_knowledge_network.md)
- [Biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [Chemical-relationship persistence assumption](chemical_relationship_persistence_assumption.md)
- [Topological cognitive-distance proxy](../measures/topological_cognitive_distance_proxy.md)
- [Work-centered scholarly entity model](../representations/work_centered_scholarly_entity_model.md)
- [Multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)

## References

- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `contextual_chemical_link_novelty_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Rzhetsky et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1509757112`
- OpenAlex ID: `W2130145803`
- Dimensions ID: `pub.1026242168`
- SciSciNet ID: `W2130145803`
- Aliases: context-specific link novelty; relation-type novelty boundary; repeated-pair new-context discovery
