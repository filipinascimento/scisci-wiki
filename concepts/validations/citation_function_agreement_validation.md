# Citation-function agreement validation

## Summary

Citation-function agreement validation tests whether independent annotators can apply a citation-function scheme reliably before the labels are used for models or metrics.

## Canonical Form

- Unit of analysis: annotated citation instance, annotator pair or group, citation-function label, guideline version, or validation corpus.
- Typical representation: inter-annotator agreement score such as kappa, disagreement table, or adjudication log.
- Validation target: whether citation-function labels are reproducible enough to support classifier training and downstream analysis.
- Empirical signature: independent annotators reach above-chance agreement despite skewed labels and nonlocal context dependencies.

## Uses in Science of Science

- Validates [citation function taxonomies](../representations/citation_function_taxonomies.md).
- Establishes training-label quality for [citation function classification](../methods/citation_function_classification.md).
- Audits [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by separating reliable function labels from speculative ones.

## Operationalization

- Have multiple annotators independently label the same citation instances using written guidelines.
- Compute agreement on the full label set and on collapsed top-level labels.
- Inspect disagreements by category, context length, and evidence phrase.
- Revise guidelines or collapse labels when reliable fine-grained distinctions are not achievable.
- Report corpus size, number of annotators, label count, and agreement statistic.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) reports agreement among three annotators on 26 computational-linguistics articles containing 548 citations.
- The paper reports kappa of 0.72 for the 12-category citation-function annotation task.
- Teufel et al. emphasize that this agreement is notable because the task has many categories and difficult nonlocal dependencies.
- The full text also reports higher human agreement when categories are collapsed into broader top-level groupings.

## Caveats

- High agreement in one field does not guarantee transfer to other genres or disciplines.
- Agreement can rise after collapsing labels, but collapsed labels may lose the distinctions needed for search or metrics.
- Annotator agreement validates consistency, not necessarily the truth of author intention.

## Links

- [citation function taxonomies](../representations/citation_function_taxonomies.md)
- [citation function classification](../methods/citation_function_classification.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [nonlocal citation-context dependency](../mechanisms/nonlocal_citation_context_dependency.md)
- [citation-function class imbalance](citation_function_class_imbalance.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_function_agreement_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation-function kappa; citation annotation reliability; citation-role inter-annotator agreement; typed-citation label validation
