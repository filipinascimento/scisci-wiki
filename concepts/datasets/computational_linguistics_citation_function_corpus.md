# Computational-linguistics citation-function corpus

## Summary

The computational-linguistics citation-function corpus is a full-text article corpus with parsed citations, XML markup, human citation-function labels, and evaluation splits.

## Canonical Form

- Unit of analysis: full-text article, citation instance, reference-list item, annotated evidence span, or train-test split.
- Typical representation: XML-encoded papers with citation markers, reference links, citation-function labels, and feature tables.
- Dataset target: supervised learning and validation for citation-role classification.
- Empirical signature: labeled citation instances can be used to train and test citation-function classifiers.

## Uses in Science of Science

- Provides training data for [citation function classification](../methods/citation_function_classification.md).
- Supplies labels and split structure for [citation-function corpus split boundaries](../validations/citation_function_corpus_split_boundaries.md).
- Depends on [citation parser reference-list precondition](../validations/citation_parser_reference_list_precondition.md) for linking text citations to cited works.
- Enables evaluation of [citation-function feature vectors](../representations/citation_function_feature_vectors.md) and related feature families.

## Operationalization

- Collect full-text papers from a bounded field or venue set.
- Parse citation markers and reference lists into structured article markup.
- Annotate citation functions with written guidelines and evidence spans.
- Partition papers or citation instances into training and test splits without leakage.
- Release or document corpus size, label distribution, split policy, and parsing limitations.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) uses computational-linguistics articles with manually labeled citation functions.
- The paper describes XML processing, recognized citation strings, and a supervised evaluation setup.
- The corpus supports both reliability validation and automatic citation-function classification.
- Its field-bounded design makes it a reusable benchmark but also a transferability caveat.

## Caveats

- A computational-linguistics corpus may not represent citation practices in other fields.
- Parsing errors and missing reference links can remove difficult citation cases.
- Corpus splits must avoid letting cue phrases or article-specific patterns leak from training into evaluation.

## Links

- [citation function classification](../methods/citation_function_classification.md)
- [citation-function corpus split boundaries](../validations/citation_function_corpus_split_boundaries.md)
- [citation parser reference-list precondition](../validations/citation_parser_reference_list_precondition.md)
- [citation-function feature vectors](../representations/citation_function_feature_vectors.md)
- [explicit citation-evidence annotation](../methods/explicit_citation_evidence_annotation.md)
- [manual citation content-analysis scalability gap](../validations/manual_citation_content_analysis_scalability_gap.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `computational_linguistics_citation_function_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: CL citation-function corpus; citation role annotation corpus; computational linguistics citation benchmark; Teufel citation corpus
