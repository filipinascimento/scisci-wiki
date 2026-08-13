# Patent-reference raw-string provenance

## Summary

Patent-reference raw-string provenance preserves the original non-patent reference string behind each probabilistic patent-paper link.

## Canonical Form

- Unit of analysis: patent-paper edge, non-patent reference string, confidence score, source-role flag, or audit record.
- Typical representation: link table column containing the lowercased or standardized raw patent reference string.
- Representation target: trace each resolved patent-paper citation back to its textual evidence.
- Empirical signature: users can inspect the originating NPL string for a match rather than only seeing patent ID and paper ID.

## Uses in Science of Science

- Adds auditability to the [patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md).
- Complements [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md) by preserving input evidence.
- Helps interpret [patent-science link confidence score](../measures/patent_science_link_confidence_score.md).
- Supports downstream checks on [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) records.

## Operationalization

- Store the raw or minimally normalized non-patent reference string with each candidate or accepted match.
- Preserve patent number, publication ID, confidence score, source role, and raw string together.
- Avoid overwriting raw provenance with cleaned-only fields.
- Include provenance fields in public data releases unless licensing or privacy rules prevent it.
- Use raw strings during false-positive audits and user-side verification.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes the released PCS file as including patent number, MAG paper ID, confidence score, source-role flag, and lowercased NPL string.
- This design lets users inspect the textual evidence behind a probabilistic match.
- Provenance is especially important because the paper documents false positives, missing fields, OCR problems, and multiple candidate matches.
- The motif generalizes to other scholarly-linkage tables where a resolved edge depends on noisy text.

## Caveats

- Raw strings can be standardized, lowercased, or OCR-corrupted; they are provenance, not ground truth.
- Large raw-string columns increase storage and redistribution costs.
- Provenance does not remove the need for confidence scores and validation samples.

## Links

- [patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [same-author similar-paper false positive](../validations/same_author_similar_paper_false_positive.md)
- [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_reference_raw_string_provenance`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: NPL raw-string provenance; patent citation evidence string; patent-paper edge provenance; non-patent reference raw text
