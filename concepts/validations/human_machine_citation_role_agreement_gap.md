# Human-machine citation-role agreement gap

## Summary

Human-machine citation-role agreement gap compares automatic citation-function predictions with human annotation reliability across fine-grained and collapsed label sets.

## Canonical Form

- Unit of analysis: citation instance, label set, human annotator, classifier output, or evaluation fold.
- Typical representation: kappa, macro-F, confusion matrix, collapsed-label score, or human-versus-model performance table.
- Validation target: whether automatic citation-role labels are reliable enough for downstream use.
- Empirical signature: classifier performance approaches, but usually does not fully match, human agreement levels.

## Uses in Science of Science

- Extends [citation-function agreement validation](citation_function_agreement_validation.md) to automatic labels.
- Audits [citation function classification](../methods/citation_function_classification.md) before typed citation labels are reused in metrics.
- Helps decide when to collapse labels through [citation sentiment-role projection](../methods/citation_sentiment_role_projection.md).
- Reveals which rare labels remain limited by [citation-function class imbalance](citation_function_class_imbalance.md).

## Operationalization

- Measure inter-annotator agreement on the same label set used for modeling.
- Train citation-function classifiers on labeled data with leak-free splits.
- Compare model scores with human agreement for fine-grained, top-level, and collapsed labels.
- Inspect confusion matrices for label pairs that humans separate but machines do not.
- Preserve confidence or uncertainty when model labels fall below human reliability.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) reports human agreement and automatic classifier performance for citation-function labels.
- The paper compares results across 12-category labels, top-level groupings, and sentiment-related projections.
- Automatic performance improves for broader groupings but does not erase the gap between model output and human annotation.
- This motif is central when citation-function labels are used for search, summarization, or impact interpretation.

## Caveats

- Human agreement is not ground truth about author intention.
- A model can match aggregate scores while making systematic errors on important rare classes.
- Collapsing labels can hide the distinctions that motivated citation-function annotation.

## Links

- [citation-function agreement validation](citation_function_agreement_validation.md)
- [citation function classification](../methods/citation_function_classification.md)
- [citation sentiment-role projection](../methods/citation_sentiment_role_projection.md)
- [citation-function class imbalance](citation_function_class_imbalance.md)
- [memory-based citation-role baseline](../methods/memory_based_citation_role_baseline.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `human_machine_citation_role_agreement_gap`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation classifier human gap; human-machine citation agreement; automatic citation-role reliability gap; citation-function model agreement gap
