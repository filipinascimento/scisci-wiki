# Patent-reference completeness noise

## Summary

Patent-reference completeness noise is the validation motif that patent non-patent-reference strings often omit, abbreviate, or distort bibliographic fields before any patent-paper matching model sees them.

## Canonical Form

- Unit of analysis: patent non-patent reference string, bibliographic field, candidate paper, or patent-paper match.
- Typical representation: missing year, abbreviated journal, truncated title, absent volume/issue/page, non-English title, wrong author, or title drift between working-paper and published forms.
- Validation target: separate upstream reference-quality limits from downstream scoring errors.
- Empirical signature: true scientific references cannot be resolved confidently because the reference string lacks enough stable metadata or contains conflicting metadata.

## Uses in Science of Science

- Provides the failure-mode layer for [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md).
- Explains why [patent-reference metadata evidence scoring](../methods/patent_reference_metadata_evidence_scoring.md) needs penalties, missing-field paths, and confidence scores.
- Connects OCR and lexical errors from [patent-reference OCR lexical normalization](../methods/patent_reference_ocr_lexical_normalization.md) to broader bibliographic incompleteness.
- Helps downstream users interpret [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) rows as confidence-scored links rather than direct truth labels.

## Operationalization

- Profile patent reference strings for missing title, author, year, journal, volume, issue, page, and DOI evidence.
- Separate references with no usable four-digit year from those with plausible adjacent-year drift.
- Compare confidence-score strata with hand-coded false positives and false negatives.
- Record whether errors are caused by missing metadata, abbreviated metadata, conflicting metadata, or publication-backbone coverage limits.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes patent NPL strings with abbreviated journals, missing volume/issue/page fields, absent or truncated titles, title changes, non-English references, and incorrect or missing author/year fields.
- Their matching pipeline uses loose candidate generation and scoring because direct exact matching would miss many true patent citations to science under these noisy strings.
- The paper's validation separates match precision at score thresholds from recall losses in the known-good PCS sample, making the completeness problem observable.

## Caveats

- Completeness noise is source-specific: USPTO, EPO, WIPO, and national patent-office records can differ in reference formatting and front-page capture.
- Some incompleteness can be mitigated by better publication backbones, DOI extraction, or full-text patent parsing, but some reference strings remain ambiguous.
- This motif should not be collapsed into OCR normalization, which is only one cause of incomplete or distorted references.

## Links

- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [patent-reference metadata evidence scoring](../methods/patent_reference_metadata_evidence_scoring.md)
- [patent-reference OCR lexical normalization](../methods/patent_reference_ocr_lexical_normalization.md)
- [loose patent-reference candidate generation](../methods/loose_patent_reference_candidate_generation.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](patent_science_precision_recall_calibration.md)
- [publication-spine findability ceiling](publication_spine_findability_ceiling.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_reference_completeness_noise`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: patent NPL incompleteness; noisy patent bibliographic strings; patent-reference missing metadata; patent reference field noise
