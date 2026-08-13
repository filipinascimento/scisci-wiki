# Scientific abstract preprocessing protocol

## Summary

Scientific abstract preprocessing protocol prepares abstracts for topic modeling through tokenization, stopword removal, vocabulary pruning, and document-frequency thresholds.

## Canonical Form

- Unit of analysis: abstract, token, word type, corpus, or vocabulary.
- Typical method: clean tokens, remove high-frequency function words, and drop rare or uninformative terms.
- Method target: stable text input for topic inference and trend analysis.
- Empirical signature: a reduced vocabulary and cleaner word-document matrix.

## Uses in Science of Science

- Prepares the [word-document cooccurrence matrix](../representations/word_document_cooccurrence_matrix.md).
- Supports [topic models](topic_models.md) and [topic prevalence dynamics](topic_prevalence_dynamics.md).
- Documents corpus construction for [PNAS abstract topic corpus](../datasets/pnas_abstract_topic_corpus.md).
- Helps make text-mining workflows reproducible.

## Operationalization

- Tokenize abstracts into word tokens.
- Remove stop words and non-informative tokens.
- Apply minimum document-frequency thresholds.
- Record vocabulary size and excluded-token rules before fitting topic models.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) describes preprocessing PNAS abstracts before topic inference.
- The paper uses tokenization, stop-listing, and frequency-based vocabulary restriction to form the modeling corpus.
- These choices define the observed evidence layer from which topics and trends are inferred.

## Caveats

- Aggressive pruning can remove rare emerging concepts.
- Stopword lists and tokenization rules can encode field or language assumptions.
- Abstract-only corpora miss methods, citations, and claims present only in full text.

## Links

- [topic models](topic_models.md)
- [word-document cooccurrence matrix](../representations/word_document_cooccurrence_matrix.md)
- [PNAS abstract topic corpus](../datasets/pnas_abstract_topic_corpus.md)
- [topic-number model selection](topic_number_model_selection.md)
- [topic semantic artifact caveat](../validations/topic_semantic_artifact_caveat.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; SciSciNet: W2001082470; WoS: unknown]

## Metadata

- Concept ID: `scientific_abstract_preprocessing_protocol`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: abstract preprocessing; topic-model text preprocessing; scientific text cleaning protocol
