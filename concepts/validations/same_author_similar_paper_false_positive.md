# Same-author similar-paper false positive

## Summary

Same-author similar-paper false positive is a patent-paper matching error where the same author has multiple nearby papers that satisfy similar metadata evidence.

## Canonical Form

- Unit of analysis: patent non-patent reference string, candidate paper, author, confidence score, or precision-audit case.
- Typical representation: false-positive error type in a match audit.
- Validation target: whether high-confidence bibliographic evidence uniquely identifies the cited paper.
- Empirical signature: a match looks plausible on author, year, journal, or title evidence but attaches to the wrong same-author publication.

## Uses in Science of Science

- Refines [score-stratified match precision audit](score_stratified_match_precision_audit.md) with a specific error class.
- Qualifies [patent-reference metadata evidence scoring](../methods/patent_reference_metadata_evidence_scoring.md).
- Shows why [patent-science link confidence score](../measures/patent_science_link_confidence_score.md) should preserve uncertainty.
- Complements [common-name patent-reference match penalty](../methods/common_name_patent_reference_match_penalty.md), which targets surname ambiguity rather than same-author near-duplicates.

## Operationalization

- Inspect false positives from a stratified sample of matched patent-paper links.
- Mark cases where multiple papers by the same author share year, title words, journal, or page-like evidence.
- Add candidate-neighborhood features that count similar same-author publications.
- Downweight matches when the citation string lacks disambiguating title, page, or journal evidence.
- Report the error type separately from common-name and missing-metadata errors.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) reports false-positive assessment using a stratified sample by confidence level.
- The paper notes that even high-confidence matching can fail when metadata points to a similar paper by the same author.
- This error mode matters because it is not solved by simple surname-frequency penalties.
- It motivates preserving raw citation strings and confidence scores for downstream audit.

## Caveats

- The error is easiest to find through manual audits; automatic detection requires candidate-set evidence.
- Same-author ambiguity can be more common in dense publication areas.
- Some near-duplicate papers may represent legitimate related versions rather than strict errors.

## Links

- [score-stratified match precision audit](score_stratified_match_precision_audit.md)
- [patent-reference metadata evidence scoring](../methods/patent_reference_metadata_evidence_scoring.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [common-name patent-reference match penalty](../methods/common_name_patent_reference_match_penalty.md)
- [patent reference raw-string provenance](../representations/patent_reference_raw_string_provenance.md)
- [richer author evidence scoring](../methods/richer_author_evidence_scoring.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `same_author_similar_paper_false_positive`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: same-author PCS false positive; similar-paper patent match error; same-author near-duplicate match; patent-paper candidate ambiguity
