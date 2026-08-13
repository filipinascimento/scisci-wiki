# Field-normalization reference-set substrate

## Summary

Publication-level area assignments provide the substrate for constructing field-normalized reference sets for evaluation.

## Canonical Form

- Unit of analysis: publication, research area, comparison set, citation indicator, publication year, or document type.
- Typical representation: paper-to-field assignment layer used to define normalization denominators.
- Mechanism, measurement, or validation target: reference-set construction for field-normalized bibliometrics.
- Empirical signature: normalized citation comparisons change when the underlying paper-level area assignments change.

## Uses in Science of Science

- Connects field-normalized metric construction to [field normalized citation impact](../measures/field_normalized_citation_impact.md) and [field classifications](../measures/field_classifications.md).
- Provides a reusable motif for comparing [paper field linkages](paper_field_linkages.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [publication level field classification](../methods/publication_level_field_classification.md) in linked scholarly data.

## Operationalization

- Attach each paper to versioned hierarchical area codes and year or document-type context.
- Use area assignments to build comparison sets for normalized citation indicators.
- Propagate classification uncertainty into sensitivity analyses of normalized metrics.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) frames classification systems as essential for bibliometric analyses and evaluations.
- Their method assigns publications to hierarchical areas and covers most included WoS records, making it a normalization substrate.

## Caveats

- Reference sets inherit errors and sensitivities from the classification system.
- Single-area assignment can underrepresent interdisciplinary papers in evaluation contexts.

## Links

- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Field classifications](../measures/field_classifications.md)
- [Paper-field linkages](paper_field_linkages.md)
- [Publication-level field classification](../methods/publication_level_field_classification.md)
- [Field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [Reference set construction](../methods/reference_set_construction.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown]

## Metadata

- Concept ID: `field_normalization_reference_set_substrate`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: paper-level reference-set substrate; classification-based normalization denominator; publication-field evaluation layer; field-normalization assignment spine
