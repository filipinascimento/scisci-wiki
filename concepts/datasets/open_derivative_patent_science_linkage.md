# Open derivative patent-science linkage

## Summary

Open derivative patent-science linkage is the release strategy of building patent-to-paper citation data on an open publication spine so derived link tables can be redistributed, inspected, and reused.

## Canonical Form

- Unit of analysis: patent-paper link table, publication backbone, data license, derivative work, release schema, or replication package.
- Typical representation: open paper ID spine, redistributable patent-paper edge file, confidence-scored link table, and metadata snapshot note.
- Data target: avoid locking science-technology linkage evidence behind proprietary bibliographic licenses.
- Empirical signature: researchers can download the derived patent-paper links and selected paper metadata without separately licensing the underlying proprietary citation index.

## Uses in Science of Science

- Explains why [Reliance on Science dataset](reliance_on_science_dataset.md) could be publicly released.
- Provides a data-governance layer for [patent-paper links](patent_paper_links.md), [scientific non-patent references](scientific_non_patent_references.md), and [MAG publication backbone](mag_publication_backbone.md).
- Offers a design principle for updating old MAG-based resources with current [OpenAlex](openalex.md) or licensed-but-share-limited [Dimensions](dimensions.md) metadata.
- Helps separate link-generation validity from redistribution rights and reproducibility constraints.

## Operationalization

- Choose a publication backbone whose license permits derivative link-table release.
- Record the backbone snapshot date, source-native paper IDs, redistributable fields, and license obligations.
- Release patent-paper edges with confidence scores, source-role flags, and enough paper metadata for users to evaluate scope.
- Keep non-redistributable proprietary enrichments in separate optional layers rather than in the core public link table.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) states that earlier large PCS efforts using Web of Science generally could not share the resulting linkages because licensing agreements likely prohibited derivative data release.
- The paper contrasts that limitation with Microsoft Academic Graph, which was free to download and licensed to permit creation and distribution of derivative works with acknowledgment.
- Marx and Fuegi use MAG as the target article set and publish the resulting patent citations to science for evaluation and use by other researchers.
- The authors also release selected MAG metadata alongside the patent-paper linkages so users can analyze both cited and uncited papers.

## Caveats

- Open redistributability does not guarantee the publication spine has complete or current coverage.
- MAG is no longer updated, so open derivative linkages based on MAG need current crosswalks or successor backbones.
- Proprietary enrichment can still be useful, but it should be kept distinct from the public reproducibility layer.

## Links

- [Reliance on Science dataset](reliance_on_science_dataset.md)
- [patent-paper links](patent_paper_links.md)
- [patent citation-to-science link table](patent_citation_to_science_link_table.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [OpenAlex](openalex.md)
- [Dimensions](dimensions.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [bibliometric data access modes](../methods/bibliometric_data_access_modes.md)
- [fit-for-purpose bibliometric extracts](../methods/fit_for_purpose_bibliometric_extracts.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `open_derivative_patent_science_linkage`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: redistributable patent-science links; open PCS derivative data; open patent-paper linkage release; open science-technology link table
