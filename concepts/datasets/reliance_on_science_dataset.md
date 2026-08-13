# Reliance on Science dataset

## Summary

The Reliance on Science dataset is an open patent-citations-to-science resource that links patent non-patent references to scientific papers and exposes confidence-scored patent-paper citation pairs.

## Canonical Form

- Unit of analysis: patent, non-patent reference string, MAG paper, patent-paper citation pair, reference source role, or confidence score.
- Typical representation: tab-separated patent-to-paper link table plus paper metadata files.
- Data target: make patent citations to scientific papers reusable without requiring every researcher to license a proprietary bibliographic database or rebuild the matching pipeline.
- Empirical signature: patent-paper citation links are released with confidence scores and applicant/examiner/other/unknown source-role flags.

## Uses in Science of Science

- Provides a broad evidence layer for [patent-paper links](patent_paper_links.md), [scientific non-patent references](scientific_non_patent_references.md), and [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).
- Supports studies of science-to-technology translation, firm reliance on academic science, open innovation, university commercialization, and cross-community author-inventor networks.
- Enables lower-level motifs for [open derivative patent-science linkage](open_derivative_patent_science_linkage.md), [patent scientific reliance count](../measures/patent_scientific_reliance_count.md), and [author-inventor overlap networks](../representations/author_inventor_overlap_networks.md).
- Recent split-outs make the data-quality layer more explicit: [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md), [quoted-title fallback matching](../methods/quoted_title_fallback_matching.md), [common-name patent-reference match penalty](../methods/common_name_patent_reference_match_penalty.md), and [publication-spine findability ceiling](../validations/publication_spine_findability_ceiling.md).
- Complements [SciSciNet-v2](sciscinet_v2.md) patent link tables, which reuse Marx/Fuegi-style patent-science links but are tied to a stale MAG-derived snapshot.
- Should be crosswalked to current [OpenAlex](openalex.md) or [Dimensions](dimensions.md) identifiers when recent-paper coverage matters.

## Operationalization

- Start from patent non-patent reference strings and structured publication metadata.
- Filter non-scientific non-patent reference types with [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md).
- Resolve references to paper IDs using [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md).
- Keep source-role flags so [patent citation source roles](../validations/patent_citation_source_roles.md) can be audited.
- Expose [patent-science link confidence scores](../measures/patent_science_link_confidence_score.md) so users can choose thresholds.
- Pair the released link table with [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md) and [patent-science threshold design tradeoff](../validations/patent_science_threshold_design_tradeoff.md) rather than treating all links as equally reliable.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes a publicly available set of U.S. patent citations to scientific articles, covering USPTO patents from 1947-2018 and papers from 1800-2018 in Microsoft Academic Graph.
- The full text reports roughly 36.0 million non-patent references before exclusions, 26.0 million candidate references after excluding clearly non-scientific materials, and more than 17.6 million algorithmic patent-citation-to-science links before confidence filtering.
- The released main file contains patent number, MAG paper ID, confidence score, source-role flag, and the lowercased non-patent reference string.
- The documentation recommends using confidence-score thresholds and supplies validation tables for false positives and false negatives.
- Marx and Fuegi also show why these thresholds are needed: patent reference strings can be incomplete, quoted-title fallback evidence can be noisy, common names can overmatch, and recall is bounded by whether the cited work is findable in the publication backbone.

## Caveats

- The original release is MAG-based; MAG is no longer updated.
- USPTO front-page references are not the same as in-text references in patent narratives.
- Patent citation links remain evidence of documented reference relationships, not direct proof of causal knowledge transfer.
- Later Zenodo releases update the data and may use OpenAlex-derived metadata; record the release date and schema before comparing counts.

## Links

- [patent-paper links](patent_paper_links.md)
- [open derivative patent-science linkage](open_derivative_patent_science_linkage.md)
- [scientific non-patent references](scientific_non_patent_references.md)
- [patent citation-to-science link table](patent_citation_to_science_link_table.md)
- [patent scientific reliance count](../measures/patent_scientific_reliance_count.md)
- [author-inventor overlap networks](../representations/author_inventor_overlap_networks.md)
- [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md)
- [patent-reference OCR lexical normalization](../methods/patent_reference_ocr_lexical_normalization.md)
- [patent-reference year-token blocking](../methods/patent_reference_year_token_blocking.md)
- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md)
- [quoted-title fallback matching](../methods/quoted_title_fallback_matching.md)
- [common-name patent-reference match penalty](../methods/common_name_patent_reference_match_penalty.md)
- [publication-spine findability ceiling](../validations/publication_spine_findability_ceiling.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [patent-science threshold design tradeoff](../validations/patent_science_threshold_design_tradeoff.md)
- [front-page patent-reference scope](../validations/front_page_patent_reference_scope.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [OpenAlex](openalex.md)
- [Dimensions](dimensions.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `reliance_on_science_dataset`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: Reliance on Science; patent citations to science dataset; PCS dataset; patent-to-paper citation release
