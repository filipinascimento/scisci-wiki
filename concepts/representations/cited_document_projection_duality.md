# Cited-document projection duality

## Summary

Contrasts source-document similarity from shared references with cited-document similarity from shared later citers.

## Canonical Form

- Unit of analysis: citing-by-cited incidence matrix.
- Typical representation: source projection `R R^T` and cited projection `R^T R`.
- Representation target: dual ways of turning citation incidence into document similarity.
- Empirical signature: bibliographic coupling and co-citation emphasize different sides of the citation relation.

## Uses in Science of Science

- Clarifies the projection choice behind [co-citation](co_citation.md) and [bibliographic coupling](bibliographic_coupling.md).
- Useful for teaching why older cited documents can be mapped by later citing behavior.
- Connects matrix mechanics to [citation relation triangulation table](../validations/citation_relation_triangulation_table.md).

## Operationalization

- Build a citing-document by cited-reference matrix.
- Compare source-document similarity from shared references with cited-document similarity from shared later citing documents.
- Preserve time direction before projecting into symmetric similarity matrices.

## Evidence and Validations

- Verified full-text evidence from Small (1973) contrasts bibliographic coupling, which links source documents, with co-citation, which links cited documents.
- The contrast implies a dual projection choice that is useful beyond the paper's manual example.

## Caveats

- Projection can obscure original direction and time order.
- Reference disambiguation errors propagate differently in the two projections.

## Links

- [Co-citation](co_citation.md)
- [Bibliographic coupling](bibliographic_coupling.md)
- [Citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [Citation-relation triangulation table](../validations/citation_relation_triangulation_table.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `cited_document_projection_duality`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation bibliographic-coupling projection; cited-source projection duality; citation matrix projection duality
