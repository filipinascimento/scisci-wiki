# First-class research object model

## Summary

Publications, grants, patents, clinical trials, policy documents, and attention records can be modeled as linkable entities rather than as appendages of papers.

## Canonical Form

- Unit of analysis: publication, grant, patent, clinical trial, policy document, altmetric trace, or typed relation.
- Typical representation: heterogeneous entity graph with typed first-class research objects.
- Mechanism, measurement, or validation target: research-object representation in scholarly entity graphs.
- Empirical signature: nonpublication entities receive their own identifiers, attributes, and typed links instead of being reduced to paper metadata fields.

## Uses in Science of Science

- Refines research-object graph representation by linking it to [scholarly entity graphs](scholarly_entity_graphs.md) and [multiplex scholarly graphs](multiplex_scholarly_graphs.md).
- Useful as a reusable check when [upstream downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md) is used in science-of-science inference.
- Creates cross-links to [integrated patent paper citation networks](integrated_patent_paper_citation_networks.md) so the motif is not interpreted in isolation.

## Operationalization

- Define separate entity tables for publications, grants, patents, trials, policy documents, and attention records.
- Preserve entity-specific identifiers and provenance before creating cross-type links.
- Represent link semantics separately for citations, acknowledgments, trials, policy mentions, patents, and attention traces.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) states that all entities in the Dimensions graph may be linked to all others and are treated as first-class objects.
- This supports using Dimensions as a research-object context graph, not only as a publication table.

## Caveats

- Some entity types have smaller or less mature coverage than publications.
- Typed links differ in meaning and should not be collapsed into one generic edge.

## Links

- [Scholarly entity graphs](scholarly_entity_graphs.md)
- [Multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [Upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [Integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md)
- [Clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [Policy document mentions](../measures/policy_document_mentions.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `first_class_research_object_model`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: first-class scholarly entities; research object graph; nonpublication entity model
