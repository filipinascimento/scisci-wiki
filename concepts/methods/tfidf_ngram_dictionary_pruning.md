# TF-IDF n-gram dictionary pruning

## Summary

TF-IDF n-gram dictionary pruning builds a candidate phrase dictionary by filtering n-grams on length and word count, then ranking them by corpus-level TF-IDF importance.

## Canonical Form

- Unit of analysis: n-gram, citation context, phrase dictionary, topic-model vocabulary, or scientific catchphrase.
- Typical representation: filtered n-gram list, TF-IDF-ranked dictionary, top-k phrase vocabulary, or phrase-document matrix.
- Method target: retain distinctive domain phrases while discarding generic, too-short, too-long, or single-word terms.
- Empirical signature: downstream topic models use a compact phrase vocabulary enriched for important technical terminology.

## Uses in Science of Science

- Supplies candidate catchphrases for [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md).
- Provides a vocabulary-construction step for [topic models](topic_models.md) over citation contexts and full text.
- Supports [hidden citations](../measures/hidden_citations.md) by surfacing distinctive discovery phrases.
- Complements [citation-context anchor windowing](citation_context_anchor_windowing.md), which restricts where phrase occurrences are counted.

## Operationalization

- Preprocess citation contexts or full text into candidate n-grams.
- Remove strings outside accepted character-length bounds.
- Remove one-grams when distinctive multi-word phrases or eponyms are the target.
- Compute TF-IDF scores for candidate n-grams across the document corpus.
- Apply a top-k cutoff and store the dictionary version with downstream model outputs.

## Evidence and Validations

- Verified full-text evidence from Meng, Varol, and Barabasi (2024) collects all n-grams from citation contexts and removes strings shorter than 5 characters, longer than 50 characters, and single words.
- The authors rank remaining n-grams by TF-IDF, adjust phrase scores for length, and take the top 100,000 n-grams to build the dictionary.
- This dictionary then feeds their LDA input for hidden-citation topic detection.

## Caveats

- TF-IDF can overemphasize rare artifacts, OCR errors, or field-specific abbreviations.
- Removing one-grams can miss single-word eponyms or named methods.
- Top-k cutoffs should be paired with saturation checks and manual inspection.

## Links

- [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md)
- [citation-context anchor windowing](citation_context_anchor_windowing.md)
- [topic models](topic_models.md)
- [citation contexts](../representations/citation_contexts.md)
- [hidden citations](../measures/hidden_citations.md)
- [topic-catchphrase density saturation check](../validations/hidden_citation_threshold_sensitivity_tradeoff.md)

## References

- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; SciSciNet: W4396694003; WoS: unknown]

## Metadata

- Concept ID: `tfidf_ngram_dictionary_pruning`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Meng et al. (2024) (2024)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1093/pnasnexus/pgae155`
- OpenAlex ID: `W4396694003`
- Dimensions ID: `pub.1171389234`
- SciSciNet ID: `W4396694003`
- Aliases: TF-IDF phrase dictionary; n-gram vocabulary pruning; citation-context dictionary pruning; catchphrase vocabulary construction
