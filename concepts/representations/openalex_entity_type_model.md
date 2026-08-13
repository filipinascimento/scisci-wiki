# OpenAlex entity-type model

## Summary

The OpenAlex entity-type model represents scholarship as a heterogeneous graph of works, authors, venues, institutions, and concepts, with works serving as the central scholarly object that connects the other entity classes.

## Canonical Form

- Unit of analysis: OpenAlex entity, entity type, work-centered relation, or heterogeneous graph edge.
- Typical representation: directed entity graph with works, authors, venues, institutions, concepts, and links among them.
- Mechanism or measurement target: reusable open metadata schema for science-of-science graph construction.
- Empirical signature: work records anchor authorship, host venue, institutional affiliation, citation, and concept-classification relations.

## Uses in Science of Science

- Provides a concrete schema for building [scholarly entity graphs](scholarly_entity_graphs.md) from [OpenAlex](../datasets/openalex.md).
- Makes [paper-author-affiliation linkages](paper_author_affiliation_linkages.md) and [paper-field linkages](paper_field_linkages.md) part of a single work-centered graph instead of separate flat tables.
- Makes venue hosting explicit through [OpenAlex venue-host model](openalex_venue_host_model.md), rather than treating venues as only display strings.
- Supplies the entity classes needed for [multiplex scholarly graphs](multiplex_scholarly_graphs.md), entity-resolution audits, field maps, and citation-network enrichment.
- Helps translate legacy [MAG publication backbone](../datasets/mag_publication_backbone.md) records into a current open graph representation.

## Operationalization

- Treat works as the anchor table, then join authorship, venue, institution, concept, citation, and external-ID layers through OpenAlex IDs.
- Preserve entity type explicitly so author, institution, venue, and concept nodes are not mixed in downstream network construction.
- Keep source-native OpenAlex IDs separate from canonical external IDs through an [OpenAlex canonical external IDs](openalex_canonical_external_ids.md) or broader [scholarly identifier spine](scholarly_identifier_spine.md).
- Record snapshot date because OpenAlex entity coverage and relation assignments change over time.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) describes OpenAlex as a heterogeneous directed graph of five scholarly entities: works, authors, venues, institutions, and concepts.
- Priem et al. state that works are particularly important because connections to works make authors, venues, institutions, and concepts scholarly in the OpenAlex model.
- The same full text reports large-scale coverage at launch, including hundreds of millions of works and authors, plus venue, institution, and concept layers.
- Priem et al. define venues as hosts for works, including journals, conferences, preprint repositories, and institutional repositories.
- The model is designed as an open successor to Microsoft Academic Graph, which makes it a current open update layer for MAG-derived science-of-science infrastructure.

## Caveats

- OpenAlex's entity types are a data model, not a theory of science by themselves.
- Coverage, deduplication, and entity-resolution errors can differ by entity type.
- Later OpenAlex releases have evolved terminology and fields, so analyses should cite the exact snapshot and schema version used.

## Links

- [OpenAlex](../datasets/openalex.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [OpenAlex canonical external IDs](openalex_canonical_external_ids.md)
- [OpenAlex authorship object](openalex_authorship_object.md)
- [OpenAlex venue-host model](openalex_venue_host_model.md)
- [OpenAlex source-ingestion mix](../methods/openalex_source_ingestion_mix.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [paper-field linkages](paper_field_linkages.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_entity_type_model`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: works authors venues institutions concepts; OpenAlex five-entity model; OpenAlex graph schema; OpenAlex data model
