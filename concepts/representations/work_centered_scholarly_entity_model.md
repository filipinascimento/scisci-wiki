# Work-centered scholarly entity model

## Summary

OpenAlex treats works as the central hub because authors, venues, institutions, and concepts become scholarly through their links to works.

## Canonical Form

- Unit of analysis: work, author, venue, institution, concept, citation, authorship, or entity inclusion rule.
- Typical representation: multipartite scholarly graph centered on work entities.
- Mechanism, measurement, or validation target: entity-model role of works in OpenAlex-style scholarly graphs.
- Empirical signature: most graph entities are included and interpreted through their relations to indexed works.

## Uses in Science of Science

- Refines OpenAlex entity representation by linking it to [scholarly entity graphs](scholarly_entity_graphs.md) and [multiplex scholarly graphs](multiplex_scholarly_graphs.md).
- Useful as a reusable check when [paper author affiliation linkages](paper_author_affiliation_linkages.md) is used in science-of-science inference.
- Creates cross-links to [paper field linkages](paper_field_linkages.md) so the motif is not interpreted in isolation.

## Operationalization

- Model works as the hub connecting authors, venues, institutions, concepts, and citations.
- Audit entity inclusion rules by requiring work-linked evidence where appropriate.
- Separate work-centered graph construction from broader first-class research-object models that include grants, patents, and trials.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) says all OpenAlex entities are first-class, but works are especially important because links to works make other entity types scholarly.
- The motif clarifies why work records anchor many OpenAlex-derived joins.

## Caveats

- A work-centered model can underrepresent entities with scholarly relevance not yet attached to indexed works.
- Publication-centered graphs differ from Dimensions-style research-object graphs that also model grants and trials as first-class objects.

## Links

- [Scholarly entity graphs](scholarly_entity_graphs.md)
- [Multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [Paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [Paper-field linkages](paper_field_linkages.md)
- [Citation networks](citation_networks.md)
- [OpenAlex](../datasets/openalex.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `work_centered_scholarly_entity_model`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arxiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: work-anchored graph; scholarly-work hub model; publication-centered entity graph
