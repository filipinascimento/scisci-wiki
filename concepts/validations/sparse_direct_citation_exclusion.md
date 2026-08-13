# Sparse direct-citation exclusion

## Summary

Sparse direct-citation exclusion is the coverage problem that publications with too few direct or indirect citation links may be omitted or weakly classified in direct-citation-based field systems.

## Canonical Form

- Unit of analysis: publication, connected component, field, document type, publication year, or classification coverage audit.
- Typical representation: excluded-publication share by year, field, document type, or component-size threshold.
- Validation target: determine which outputs a direct-citation classification fails to include or classifies weakly.
- Empirical signature: older records, low-citation-density fields, letters, national journals, trade journals, or popular magazines have higher exclusion rates.

## Uses in Science of Science

- Audits coverage for [publication-level field classification](../methods/publication_level_field_classification.md).
- Identifies when [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md) should be supplemented with bibliographic coupling, text, or venue information.
- Supports [field-classification sensitivity](field_classification_sensitivity.md) and [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Connects coverage loss to [direct-citation classification accuracy gap](direct_citation_classification_accuracy_gap.md) and [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md).
- Helps prevent field-normalized evaluations from silently dropping weakly connected outputs.

## Operationalization

- Before clustering, compute connected components in the relatedness graph.
- Define the minimum component size or minimum-area rule needed for inclusion.
- Report excluded shares by publication year, field/category, document type, language, venue type, and database source.
- Inspect whether excluded items can be reassigned using title/abstract text, journal information, bibliographic coupling, or external field labels.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) reports that 0.8 million of the 10.2 million starting publications could not be included in their classification system.
- The inclusion rule required a publication to have direct or indirect citation relations with at least 49 other publications under their level-3 minimum-size setting.
- The paper reports that 91% of excluded publications had no relations at all with other publications in the constructed citation network.
- Excluded publications were overrepresented in earlier years, low-citation-density fields such as engineering and social sciences, and the Web of Science document type letter.
- The authors propose adding excluded publications through analysis of title and abstract words as one possible remedy.
- The threshold mechanism itself is split out as [minimum research-area size constraint](../methods/minimum_research_area_size_constraint.md).

## Caveats

- Exclusion can reflect real isolation, database-window truncation, citation-density differences, or missing metadata.
- Adding sparse publications with text or venue information can improve coverage but may reduce comparability with citation-only clusters.
- Exclusion audits should be repeated when the citation window, document types, or source database changes.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [normalized publication relatedness](../measures/normalized_publication_relatedness.md)
- [hierarchical resolution-parameter clustering](../methods/hierarchical_resolution_parameter_clustering.md)
- [minimum research-area size constraint](../methods/minimum_research_area_size_constraint.md)
- [WoS 2001-2010 publication classification corpus](../datasets/wos_2001_2010_publication_classification_corpus.md)
- [direct-citation classification accuracy gap](direct_citation_classification_accuracy_gap.md)
- [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [science maps](../representations/science_maps.md)
- [reference set construction](../methods/reference_set_construction.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `sparse_direct_citation_exclusion`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: citation-sparse exclusion; weakly linked publication exclusion; direct-citation coverage gap; sparse citation classification loss
