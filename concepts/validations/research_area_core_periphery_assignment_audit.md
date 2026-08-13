# Research-area core-periphery assignment audit

## Summary

Research-area core-periphery assignment audit checks whether an algorithmic publication cluster contains a coherent topical core plus weakly related peripheral papers that may signal citation-only misassignment.

## Canonical Form

- Unit of analysis: research area, publication, local citation map, core paper, peripheral paper, or assignment error.
- Typical representation: local cluster map, central-peripheral layout, manual paper audit, or misassignment examples.
- Validation target: identify where a publication-level classification overextends a coherent cluster.
- Empirical signature: most papers in a cluster form a clear topical core, while a small set of peripheral papers have weak topical fit or sparse citation links.

## Uses in Science of Science

- Provides a manual/local audit for [publication-level field classification](../methods/publication_level_field_classification.md).
- Refines [direct-citation classification accuracy gap](direct_citation_classification_accuracy_gap.md) by separating core validity from peripheral errors.
- Connects [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md) and [science maps](../representations/science_maps.md) to concrete assignment checking.
- Motivates [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md) when direct citations alone produce weak peripheral assignments.

## Operationalization

- Select a focal research area or a suspicious cluster from a publication-level classification.
- Build a local map of publications and citation-relatedness links within or near the area.
- Inspect titles, abstracts, terms, and citation neighborhoods for central and peripheral papers.
- Record whether peripheral papers are plausible interdisciplinary bridges, weakly related inclusions, or clear misassignments.
- Use findings to refine relatedness measures, minimum-link rules, or manual labels.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) uses local maps of selected research areas to inspect publication assignments.
- The paper reports that some areas have a clear topical core while also containing publications that appear less well assigned.
- Its JASIST and local-map examples show why publication-level classifications need paper-level audits rather than only aggregate category comparisons.
- The authors connect such issues to the broader need for more rigorous accuracy evaluation and richer relatedness measures.

## Caveats

- Manual core-periphery audits are not a substitute for systematic validation.
- Peripheral papers may be legitimate interdisciplinary connectors rather than errors.
- Local map layout choices can affect perceived centrality and peripherality.
- Auditors need enough domain knowledge to distinguish weak fit from novel bridging work.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [direct-citation classification accuracy gap](direct_citation_classification_accuracy_gap.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [science maps](../representations/science_maps.md)
- [single-journal publication-assignment audit](single_journal_publication_assignment_audit.md)
- [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md)
- [sparse direct-citation exclusion](sparse_direct_citation_exclusion.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `research_area_core_periphery_assignment_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: cluster core-periphery audit; publication assignment periphery check; local research-area audit; peripheral paper misassignment check
