# WoS citation-event definition

## Summary

A Web of Science citation count is an indexed event where a paper appears in the reference list of a later indexed article.

## Canonical Form

- Unit of analysis: cited paper, citing paper, indexed reference, database snapshot, or citation event.
- Typical representation: source-specific event definition for citation-count construction.
- Mechanism, measurement, or validation target: database semantics of counted citations.
- Empirical signature: citation counts change when the source database, indexed document types, or snapshot definition changes.

## Uses in Science of Science

- Refines citation data representation by linking it to [web of science](../datasets/web_of_science.md) and [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).
- Useful as a reusable check when [citation index snapshot dependence](../validations/citation_index_snapshot_dependence.md) is used in science-of-science inference.
- Creates cross-links to [wos core collection source layers](../datasets/wos_core_collection_source_layers.md) so the motif is not interpreted in isolation.

## Operationalization

- State the citation source database and snapshot date.
- Define a counted citation as appearance in a later indexed article reference list.
- Record document-type, source-layer, and cited-reference indexing assumptions.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) defines citations using Thomson Scientific's Web of Science as appearances in references of more recent articles.
- The definition clarifies the event semantics behind field-normalized citation distributions.

## Caveats

- This captures database-indexed references only.
- Coverage, document-type, and snapshot boundaries travel with the event definition.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [Citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [Citation-index snapshot dependence](../validations/citation_index_snapshot_dependence.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [Full-database bibliometric access](../methods/full_database_bibliometric_access.md)
- [Journal category specificity audit](../validations/journal_category_specificity_audit.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `wos_citation_event_definition`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: WoS citation-count definition; indexed-reference citation event; Thomson citation event model
