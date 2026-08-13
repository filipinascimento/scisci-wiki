# Memory-based citation-role baseline

## Summary

Memory-based citation-role baseline is an instance-based supervised baseline that predicts citation functions by comparing new feature vectors with labeled examples.

## Canonical Form

- Unit of analysis: citation-function instance, feature vector, nearest neighbor, training set, or evaluation fold.
- Typical representation: k-nearest-neighbor or memory-based classifier over citation-function features.
- Method target: establish a transparent supervised baseline for citation-role prediction.
- Empirical signature: a new citation context receives the label of similar labeled contexts according to feature-vector distance.

## Uses in Science of Science

- Provides a baseline for [citation function classification](citation_function_classification.md).
- Consumes [citation-function feature vectors](../representations/citation_function_feature_vectors.md).
- Exposes performance limits caused by [citation-function class imbalance](../validations/citation_function_class_imbalance.md).
- Can be compared with human agreement through [human-machine citation-role agreement gap](../validations/human_machine_citation_role_agreement_gap.md).

## Operationalization

- Build feature vectors for labeled citation-function instances.
- Train an instance-based learner such as k-nearest neighbors.
- Tune distance weighting and neighbor count on training data or cross-validation folds.
- Evaluate with macro-F, per-class recall, and top-level collapsed labels.
- Compare against human annotator agreement and simpler majority-class baselines.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) uses Weka's IBk memory-based learner for citation-function classification.
- The paper evaluates the model under cross-validation and reports results for fine-grained, top-level, and sentiment-related groupings.
- Memory-based learning provides a concrete baseline for testing whether engineered citation features contain role information.
- The comparison with human agreement shows that automatic performance is useful but still below reliable annotation in important cases.

## Caveats

- Instance-based methods can be sensitive to feature scaling and irrelevant features.
- Rare citation roles may have too few neighbors for stable prediction.
- Stronger modern models should still be compared against transparent baselines and human agreement.

## Links

- [citation function classification](citation_function_classification.md)
- [citation-function feature vectors](../representations/citation_function_feature_vectors.md)
- [citation-function class imbalance](../validations/citation_function_class_imbalance.md)
- [human-machine citation-role agreement gap](../validations/human_machine_citation_role_agreement_gap.md)
- [citation-function agreement validation](../validations/citation_function_agreement_validation.md)
- [citation sentiment-role projection](citation_sentiment_role_projection.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `memory_based_citation_role_baseline`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: memory-based citation classifier; IBk citation-role baseline; instance-based citation-function model; nearest-neighbor citation role classifier
