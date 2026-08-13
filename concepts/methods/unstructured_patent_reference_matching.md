# Unstructured patent-reference matching

## Summary

Unstructured patent-reference matching resolves noisy non-patent reference strings in patents to structured scientific publication records.

## Canonical Form

- Unit of analysis: non-patent reference string, candidate paper, title token, author name, year, journal, volume, issue, page, or resolved patent-paper citation.
- Typical representation: blocking keys, fuzzy title scores, VIP metadata scores, journal-name matches, and final match confidence.
- Method target: convert patent references to scientific literature into auditable [patent-paper links](../datasets/patent_paper_links.md).
- Empirical signature: candidate matches are generated broadly, then filtered by metadata agreement and confidence scoring.

## Uses in Science of Science

- Builds the direct link layer for [scientific non-patent references](../datasets/scientific_non_patent_references.md), [patent citation-to-science link tables](../datasets/patent_citation_to_science_link_table.md), and [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md).
- Extends [patent reference XML matching](patent_reference_xml_matching.md) from parsed XML fields to less structured front-page reference strings.
- Creates inputs for [patent-science link confidence scores](../measures/patent_science_link_confidence_score.md) and [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md).
- Splits into preprocessing, scaling, candidate, and scoring motifs for [non-patent-reference science filtering](non_patent_reference_science_filtering.md), [patent-reference OCR lexical normalization](patent_reference_ocr_lexical_normalization.md), [patent-reference year-token blocking](patent_reference_year_token_blocking.md), [loose patent-reference candidate generation](loose_patent_reference_candidate_generation.md), and [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md).
- Residual split-outs cover [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md), [quoted-title fallback matching](quoted_title_fallback_matching.md), [common-name patent-reference match penalty](common_name_patent_reference_match_penalty.md), and [publication-spine findability ceiling](../validations/publication_spine_findability_ceiling.md).
- Helps decide when DOI, PubMed, OpenAlex, Dimensions, or MAG identifiers are trustworthy enough for downstream network analysis.

## Operationalization

- Normalize patent reference strings and publication metadata lexically, including OCR cleanups and ASCII/transliteration passes.
- Partition candidate comparisons by year and additional hash/blocking keys so large reference corpora do not require all-pairs comparison.
- Generate loose candidates using author surname, year, title words, page number, volume, or quoted title strings.
- Score candidates with title similarity, author-name plausibility, volume/issue/page evidence, journal-name evidence, and penalties for conflicting metadata.
- Select the highest-confidence paper for a patent-reference pair and preserve the confidence score and source string.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes four matching stages: lexical standardization, hashing source data into searchable blocks, loose candidate matching, and computationally expensive scoring.
- The paper reports that direct comparison of about 36 million non-patent references with about 150 million MAG publications would be computationally infeasible, motivating year segmentation and file-based hash tables.
- Candidate generation uses author/year plus title-word or page/volume evidence, with flexibility for one-year publication offsets and limited Levenshtein matching on author surnames.
- Scoring combines title, first-author, volume/issue/page, and journal-name evidence, then chooses the highest-confidence MAG paper when multiple candidates match the same patent reference.

## Caveats

- Blocking on year and first author can miss references with missing or badly wrong years and author names.
- Common author surnames, generic journal titles, short titles, and noisy page/volume fields can create false positives.
- Matching choices should be recorded as data provenance because they affect downstream counts, networks, and technology-reliance measures.

## Links

- [patent reference XML matching](patent_reference_xml_matching.md)
- [non-patent-reference science filtering](non_patent_reference_science_filtering.md)
- [patent-reference OCR lexical normalization](patent_reference_ocr_lexical_normalization.md)
- [patent-reference year-token blocking](patent_reference_year_token_blocking.md)
- [loose patent-reference candidate generation](loose_patent_reference_candidate_generation.md)
- [patent-reference metadata evidence scoring](patent_reference_metadata_evidence_scoring.md)
- [quoted-title fallback matching](quoted_title_fallback_matching.md)
- [common-name patent-reference match penalty](common_name_patent_reference_match_penalty.md)
- [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md)
- [publication-spine findability ceiling](../validations/publication_spine_findability_ceiling.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [front-page patent-reference scope](../validations/front_page_patent_reference_scope.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `unstructured_patent_reference_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: patent NPL string matching; patent citation to science matching; PCS matching algorithm; patent reference entity resolution
