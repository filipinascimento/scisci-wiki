# Word-document cooccurrence matrix

## Summary

Word-document cooccurrence matrix is the pre-model text representation whose cells count how often each word occurs in each document.

## Canonical Form

- Unit of analysis: document, word type, token count, corpus, or vocabulary.
- Typical representation: document-by-word count matrix or sparse term-frequency matrix.
- Representation target: the observed data layer for probabilistic topic models.
- Empirical signature: sparse matrix entries record token frequencies before latent topics are inferred.

## Uses in Science of Science

- Provides the input representation for [topic models](../methods/topic_models.md).
- Precedes [document-topic mixtures](document_topic_mixtures.md) and [topic-word probability distributions](topic_word_probability_distributions.md).
- Supports text-based science mapping, topic trend detection, and wiki concept extraction.
- Makes corpus preprocessing choices visible before modeling.

## Operationalization

- Tokenize text and define a vocabulary.
- Count occurrences of each vocabulary item in each document.
- Store the matrix sparsely when the vocabulary and corpus are large.
- Feed the matrix into LDA or related text models.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) describes the scientific text corpus as a matrix whose rows are documents and columns are words.
- The paper treats the counts in this matrix as the observed data explained by the topic model.
- This representation separates raw corpus evidence from inferred latent topics.

## Caveats

- Word-document matrices discard word order and much syntax.
- Stopword removal, stemming, tokenization, and minimum-frequency filtering shape the matrix.
- Counts can overweight common method words unless preprocessing or priors handle them.

## Links

- [topic models](../methods/topic_models.md)
- [scientific abstract preprocessing protocol](../methods/scientific_abstract_preprocessing_protocol.md)
- [document-topic mixtures](document_topic_mixtures.md)
- [topic-word probability distributions](topic_word_probability_distributions.md)
- [PNAS abstract topic corpus](../datasets/pnas_abstract_topic_corpus.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; SciSciNet: W2001082470; WoS: unknown]

## Metadata

- Concept ID: `word_document_cooccurrence_matrix`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: document-word count matrix; term-document frequency matrix; word document count matrix
