# Citation-function class imbalance

## Summary

Citation-function class imbalance is the validation problem that neutral or background citation labels dominate annotated corpora while rare roles such as weakness or modification carry much of the scientific meaning.

## Canonical Form

- Unit of analysis: citation-function corpus, label distribution, classifier output, rare label, or evaluation metric.
- Typical representation: category frequency table, macro-F score, kappa, rare-class precision and recall, or collapsed-label comparison.
- Validation target: whether a classifier or annotation scheme works on rare citation roles rather than only on the majority class.
- Empirical signature: accuracy appears high because neutral labels are common, while rare function labels have lower recall.

## Uses in Science of Science

- Sets evaluation standards for [citation function classification](../methods/citation_function_classification.md).
- Explains why [citation function taxonomies](../representations/citation_function_taxonomies.md) need neutral and insufficient-evidence classes.
- Protects [citation-aware search and summarization](../methods/citation_aware_search_summarization.md) from majority-label retrieval.
- Supports [responsible metrics](../measures/responsible_metrics.md) when citation roles are used to weight impact.

## Operationalization

- Report the full label distribution before model evaluation.
- Use macro-averaged F scores, kappa, and rare-class recall in addition to accuracy.
- Compare full fine-grained labels with collapsed top-level groupings.
- Inspect errors for rare but important labels such as weakness, contrast, modification, support, and basis.
- Preserve uncertainty instead of forcing rare labels when evidence is weak.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) reports a strongly skewed annotation distribution, with more than 60 percent of citations labeled neutral.
- The paper reports that usage categories were more frequent than clearly negative citations, while weakness and negative contrast were rare.
- Teufel et al. evaluate classifiers with macro-F and kappa because accuracy and micro-averaging overemphasize common labels.
- The full text reports separate results for 12 labels, collapsed top-level labels, and sentiment-style groupings.

## Caveats

- Collapsing labels can improve aggregate metrics while hiding distinctions needed for substantive interpretation.
- Rare categories may be rare because authors avoid explicit criticism, because evidence is nonlocal, or because the corpus is field-specific.
- Models optimized for accuracy can erase the very citation functions most useful for science-of-science analysis.
- The social mechanism behind some negative-label sparsity is split out as [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md).

## Links

- [citation function classification](../methods/citation_function_classification.md)
- [citation function taxonomies](../representations/citation_function_taxonomies.md)
- [citation-function agreement validation](citation_function_agreement_validation.md)
- [citation sentiment-role projection](../methods/citation_sentiment_role_projection.md)
- [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_function_class_imbalance`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation-role skew; neutral citation majority; rare citation-function labels; macro-F citation evaluation
