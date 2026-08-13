# SciSciNet entity-relationship join contract

## Summary

SciSciNet's usable architecture depends on shared ID fields across tables, with PaperID-centered joins linking publications to authors, fields, venues, grants, patents, trials, news, and tweets.

## Canonical Form

- Unit of analysis: PaperID, AuthorID, affiliation ID, field ID, grant ID, patent ID, trial ID, event ID, or table relation.
- Typical representation: relational PK/FK contract over a heterogeneous science-of-science data lake.
- Mechanism, measurement, or validation target: join semantics for deriving graph and panel data from SciSciNet tables.
- Empirical signature: tables can be connected when matching ID fields are present, but each join inherits source-specific coverage and match quality.

## Uses in Science of Science

- Refines SciSciNet representation by linking it to [scholarly table primary keys](scholarly_table_primary_keys.md) and [scholarly entity graphs](scholarly_entity_graphs.md).
- Useful as a reusable check when [multiplex scholarly graphs](multiplex_scholarly_graphs.md) is used in science-of-science inference.
- Creates cross-links to [paper author affiliation linkages](paper_author_affiliation_linkages.md) so the motif is not interpreted in isolation.

## Operationalization

- Identify primary keys, foreign keys, and source-native identifiers before deriving graph or panel data.
- Record table-level denominators and missingness before joining.
- Keep source-specific IDs and match confidence fields where available instead of collapsing relations to one edge type.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) presents an entity diagram and Data Records section with PaperID-centered tables and notes that matching ID names can be used to link tables.
- The motif turns the table layout into an explicit join contract for analysis.

## Caveats

- Joinability does not imply complete coverage or correct matches.
- PaperID-centered design can hide relation-specific source windows and identifier biases.

## Links

- [Scholarly table primary keys](scholarly_table_primary_keys.md)
- [Scholarly entity graphs](scholarly_entity_graphs.md)
- [Multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [Paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [Paper-field linkages](paper_field_linkages.md)
- [Upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_entity_relationship_join_contract`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: SciSciNet PK/FK schema; PaperID join contract; data-lake relational spine
