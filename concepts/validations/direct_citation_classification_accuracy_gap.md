# Direct-citation classification accuracy gap

## Summary

The direct-citation classification accuracy gap is the unresolved validation problem that citation-only publication classifications may be transparent and scalable but still lack rigorous external accuracy benchmarks.

## Canonical Form

- Unit of analysis: publication classification, research area, citation-relatedness graph, expert label, gold standard, or validation sample.
- Typical representation: stated accuracy limitation, expert-feedback comparison, manual audit, gold-standard gap, or classification-error taxonomy.
- Validation target: determine whether direct-citation clusters correspond to substantive research areas rather than only citation-network structure.
- Empirical signature: authors can identify plausible and implausible assignments, but no systematic benchmark proves classification accuracy.

## Uses in Science of Science

- Provides a validation caveat for [publication-level field classification](../methods/publication_level_field_classification.md).
- Connects [direct-citation relatedness graphs](../representations/direct_citation_relatedness_graph.md) to [field-classification sensitivity](field_classification_sensitivity.md).
- Motivates [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md) when direct citations are too sparse or noisy.
- Helps keep field-normalized indicators from treating algorithmic field labels as ground truth.

## Operationalization

- Identify an external comparison source: expert labels, curated specialty lists, journal sections, conference tracks, grants, keywords, or manual audit samples.
- Compare publication assignments to that source across fields, years, document types, and hierarchy levels.
- Report error types, including sparse-link misclassification, overbroad clusters, overly narrow clusters, and interdisciplinary single-assignment loss.
- Use local audits such as [research-area core-periphery assignment audit](research_area_core_periphery_assignment_audit.md) to separate coherent cores from weakly assigned peripheral papers.
- Validate both coverage and accuracy, since including more papers can reduce precision.
- Re-run validation after changes to relatedness measures, source databases, or clustering parameters.

## Evidence and Validations

- Verified full-text evidence from Waltman and van Eck (2012) explicitly states that the paper does not provide a rigorous evaluation of classification accuracy.
- The authors identify the lack of a golden standard as a key difficulty for such validation.
- Their JASIST audit finds both clear misclassifications and sensible non-obvious assignments, showing why simple journal expectations are insufficient.
- Local-map examples motivate [research-area core-periphery assignment audit](research_area_core_periphery_assignment_audit.md).
- They suggest future accuracy evaluation using expert feedback.
- The conclusion also links accuracy problems to sparse direct-citation relations and proposes more sophisticated relatedness measures as a possible remedy.
- A separate caveat concerns included papers that may still be oversimplified by [nonoverlapping field assignment](nonoverlapping_field_assignment_caveat.md).

## Caveats

- Expert labels can disagree, age, or be biased toward established field boundaries.
- A classification can be accurate for broad mapping but weak for evaluation or normalization.
- Gold standards built from journal categories may reintroduce the journal-level problems publication-level systems were meant to avoid.
- Accuracy should be evaluated together with transparency, coverage, granularity, and computational feasibility.

## Links

- [publication-level field classification](../methods/publication_level_field_classification.md)
- [direct-citation relatedness graph](../representations/direct_citation_relatedness_graph.md)
- [sparse direct-citation exclusion](sparse_direct_citation_exclusion.md)
- [single-journal publication-assignment audit](single_journal_publication_assignment_audit.md)
- [research-area core-periphery assignment audit](research_area_core_periphery_assignment_audit.md)
- [high-aggregation label ambiguity](high_aggregation_label_ambiguity.md)
- [nonoverlapping field-assignment caveat](nonoverlapping_field_assignment_caveat.md)
- [hybrid publication-relatedness extension](../methods/hybrid_publication_relatedness_extension.md)
- [field-classification sensitivity](field_classification_sensitivity.md)
- [reference set construction](../methods/reference_set_construction.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `direct_citation_classification_accuracy_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Waltman and van Eck (2012) (2012)
- Latest seen paper: Waltman and van Eck (2012) (2012)
- Primary reference DOI: `10.1002/asi.22748`
- OpenAlex ID: `W2126566678`
- Dimensions ID: `pub.1036746088`
- SciSciNet ID: `W2126566678`
- Aliases: classification gold-standard gap; direct-citation accuracy limitation; publication-classification validation gap; expert-feedback classification validation
