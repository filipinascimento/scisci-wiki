# Citation function corpus split boundaries

## Summary

Citation function corpus split boundaries keep guideline development, cue acquisition, agreement annotation, and final evaluation documents separate.

## Canonical Form

- Unit of analysis: source article, citation instance, guideline-development corpus, cue-acquisition corpus, agreement corpus, or evaluation corpus.
- Typical representation: corpus manifest with document-level split roles.
- Validation target: reduce leakage in supervised citation-function studies.
- Empirical signature: evaluation articles were not used to develop annotation guidelines or acquire cue features.

## Uses in Science of Science

- Adds split hygiene to [citation function classification](../methods/citation_function_classification.md).
- Supports [citation-function agreement validation](citation_function_agreement_validation.md), [citation training cue harvesting](../methods/citation_training_cue_harvesting.md), and [exploration-to-prediction cross-validation](../methods/exploration_to_prediction_cross_validation.md).
- Helps make full-text NLP pipelines auditable when small manually annotated corpora drive model features.

## Operationalization

- Assign every source document one or more split roles before feature engineering.
- Keep guideline-development documents separate from agreement-measurement documents.
- Keep cue-acquisition documents separate from final evaluation documents.
- Report corpus sizes and citation-instance counts by split role.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) states that written guidelines were developed on a different set of articles from the annotation-agreement set.
- The paper notes that files used for cue phrases were not part of the test corpus.
- Teufel et al. draw the evaluation corpus from articles not used for guideline development or cue acquisition.

## Caveats

- Document-level split boundaries are especially important when multiple citation instances come from the same paper.
- Splitting citation instances but not source documents can leak author, venue, discourse, or cue patterns.
- Small annotated corpora may still have high variance after strict splitting.

## Links

- [citation function classification](../methods/citation_function_classification.md)
- [citation-function agreement validation](citation_function_agreement_validation.md)
- [citation training cue harvesting](../methods/citation_training_cue_harvesting.md)
- [citation-function class imbalance](citation_function_class_imbalance.md)
- [exploration-to-prediction cross-validation](../methods/exploration_to_prediction_cross_validation.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_function_corpus_split_boundaries`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation-function split hygiene; citation cue leakage boundary; annotation corpus split; citation-function evaluation split
