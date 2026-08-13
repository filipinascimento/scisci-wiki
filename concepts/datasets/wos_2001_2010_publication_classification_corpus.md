# WoS 2001-2010 publication classification corpus

## Summary

The WoS 2001-2010 publication classification corpus is the large Web of Science article, letter, and review set Waltman and van Eck used to build and test a publication-level classification system of science.

## Canonical Form

- Unit of analysis: Web of Science publication, document type, citation relation, research area, classification level, or excluded publication.
- Typical representation: publication table plus direct-citation edge list and hierarchical research-area assignments.
- Dataset target: supply a large-scale testbed for [publication-level field classification](../methods/publication_level_field_classification.md).
- Empirical signature: millions of publications, tens of millions of within-corpus citation relations, and explicit excluded-publication accounting.

## Uses in Science of Science

- Provides a historical benchmark for large-scale [field classifications](../measures/field_classifications.md) built from direct citation relations.
- Supports [science maps](../representations/science_maps.md), [paper-field linkages](../representations/paper_field_linkages.md), and [reference set construction](../methods/reference_set_construction.md).
- Gives a concrete denominator for auditing [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md).
- Documents which document types and broad domains are inside or outside a classification experiment.

## Operationalization

- Start from Web of Science publications in a fixed publication-year window.
- Retain sciences and social sciences records with document types article, letter, and review; document any excluded domains.
- Build a direct-citation edge list among publications in the retained corpus.
- Store publication-to-area assignments at each hierarchy level, area labels, and excluded-publication flags.
- Report corpus size, citation-edge count, included-publication count, and excluded-publication count before downstream use.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) constructs the corpus from Web of Science publications in 2001-2010.
- The paper includes sciences and social sciences publications of document types article, letter, and review, excluding arts and humanities.
- Waltman and van Eck report 10.2 million starting publications and 97.6 million citation relations among them.
- Their resulting classification includes the publications that satisfy the connected-component and minimum-size rules, while 0.8 million publications are audited separately as exclusions.

## Caveats

- The corpus is bounded to Web of Science coverage, selected document types, selected domains, and a 2001-2010 publication window.
- Earlier publications have more references pointing outside the window, increasing exclusion risk.
- The corpus is a direct-citation classification benchmark, not a complete all-science data substrate.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [minimum research-area size constraint](../methods/minimum_research_area_size_constraint.md)
- [sparse direct-citation exclusion](../validations/sparse_direct_citation_exclusion.md)
- [science maps](../representations/science_maps.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [Web of Science](web_of_science.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `wos_2001_2010_publication_classification_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: WoS classification corpus; Web of Science publication-level classification corpus; 2001-2010 WoS classification data; Waltman-van Eck classification corpus
