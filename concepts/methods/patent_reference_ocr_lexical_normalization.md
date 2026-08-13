# Patent-reference OCR lexical normalization

## Summary

Patent-reference OCR lexical normalization standardizes noisy patent reference strings and publication metadata before attempting patent-to-paper matching.

## Canonical Form

- Unit of analysis: patent reference string, OCR error, title token, author name, journal name, publication metadata field, or normalized token stream.
- Typical representation: cleaning rules for OCR substitutions, hyphen splits, ASCII conversion, transliteration, case folding, and punctuation handling.
- Method target: reduce false negatives caused by old patent scans, inconsistent reference styles, and incompatible character encodings.
- Empirical signature: references that fail exact matching become matchable after targeted lexical cleanup without needing manual correction.

## Uses in Science of Science

- Supplies the first stage of [unstructured patent-reference matching](unstructured_patent_reference_matching.md).
- Helps stabilize [patent-science link confidence scores](../measures/patent_science_link_confidence_score.md) by making title, author, and journal comparisons less brittle.
- Supports historical patent-science studies where pre-digital records contain OCR artifacts.
- Connects patent-reference matching to broader [research-ready table curation](research_ready_table_curation.md) and source-provenance practices.

## Operationalization

- Normalize case, punctuation, spacing, and character encodings in patent reference strings and publication records.
- Correct systematic OCR artifacts only when the rule is defensible, such as embedded `@` substitutions or spurious hyphen splits.
- Transliterate special characters in structured publication metadata to the character set available in patent references.
- Preserve the raw reference string alongside the normalized form so matching errors can be audited.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) identifies pre-1976 USPTO non-patent references as especially affected by OCR errors.
- The paper describes replacing embedded `@` with `a` when it appears inside words because OCR substitutions split words that should match.
- Marx and Fuegi also recombine spurious hyphen-split words when neither side of the split appears in a dictionary, while preserving legitimate hyphenated scientific terms.
- The structured MAG data are passed through an ASCII filter, including transliteration of Greek characters common in scientific titles, to match the patent-reference character set.

## Caveats

- Aggressive normalization can create false positives by collapsing legitimately distinct tokens.
- OCR errors are source-specific; rules learned on USPTO front-page references may not transfer to other patent offices or body-text corpora.
- Normalization improves matching but does not solve missing titles, wrong years, or ambiguous author names.

## Links

- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [patent reference XML matching](patent_reference_xml_matching.md)
- [patent reference year-token blocking](patent_reference_year_token_blocking.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [research-ready table curation](research_ready_table_curation.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_reference_ocr_lexical_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: patent NPL OCR cleanup; patent reference lexical standardization; OCR-aware patent citation matching; patent reference transliteration
