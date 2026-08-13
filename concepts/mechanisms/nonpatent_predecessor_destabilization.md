# Nonpatent predecessor destabilization

## Summary

Nonpatent predecessor destabilization is the mechanism that patents drawing on nonpatent prior knowledge, including scientific papers, can be more likely to redirect technological trajectories than patents that mainly build on prior patents.

## Canonical Form

- Unit of analysis: patent, nonpatent reference, scientific predecessor, patent predecessor, or technology stream.
- Typical representation: count of nonpatent predecessors, count of patent predecessors, CD-index model coefficient, or science-linkage contrast.
- Mechanism: knowledge inputs outside the protected patent lineage can expose inventors to different concepts and create more trajectory-breaking inventions.
- Empirical signature: more nonpatent predecessors are associated with more destabilizing patent scores, while more patent predecessors are associated with consolidation.

## Uses in Science of Science

- Links [scientific non-patent references](../datasets/scientific_non_patent_references.md) to technological change rather than only to science-linkage measurement.
- Extends [patent-paper links](../datasets/patent_paper_links.md) from a linkage substrate to a disruption mechanism.
- Complements [predecessor-count opportunity bias](../validations/predecessor_count_opportunity_bias.md), because predecessor volume and predecessor type can push interpretation in different directions.
- Helps interpret [patent importance measure divergence](../validations/patent_importance_measure_divergence.md) when forward citations and disruption disagree.

## Operationalization

- Split predecessor references into patent and nonpatent categories.
- Count scientific or other nonpatent references separately from cited patents.
- Estimate disruption or consolidation outcomes with both counts in the same model.
- Report whether nonpatent references are paper-linked, grant-linked, source-title-only, or broader prior-art references.

## Evidence and Validations

- Verified full-text evidence from Funk and Owen-Smith (2017) distinguishes patents that cite nonpatent predecessors from patents that cite predecessor patents.
- Their models report that nonpatent predecessors are associated with more destabilizing inventions, while larger patent-predecessor counts are associated with more consolidation.
- This motif is distinct from generic science-linkage measurement because it treats nonpatent references as a source of trajectory change.
- It should be interpreted with source-coverage caveats because nonpatent references are not a complete census of scientific input.

## Caveats

- Nonpatent references include more than journal articles, so the scientific-input interpretation should be source-audited.
- Patent citation practices and examiner-added citations can confound inventor knowledge with legal documentation.
- The relationship can vary by technology class, firm strategy, and patenting norms.

## Links

- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [predecessor-count opportunity bias](../validations/predecessor_count_opportunity_bias.md)
- [patent importance measure divergence](../validations/patent_importance_measure_divergence.md)
- [patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md)
- [disruption index](../measures/disruption_index.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; SciSciNet: W2303284028; WoS: unknown]

## Metadata

- Concept ID: `nonpatent_predecessor_destabilization`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Funk and Owen-Smith (2017) (2017)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Dimensions ID: `pub.1064718099`
- SciSciNet ID: `W2303284028`
- Aliases: science-linked predecessor destabilization; nonpatent prior-art disruption; scientific predecessor disruption; nonpatent reference destabilization
