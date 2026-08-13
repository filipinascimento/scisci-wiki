# Patent-reference metadata evidence scoring

## Summary

Patent-reference metadata evidence scoring assigns confidence to a patent-to-paper candidate by combining author, title, volume, issue, page, journal, and conflict evidence from a noisy reference string.

## Canonical Form

- Unit of analysis: loose patent-paper candidate, first-author match, title-token alignment, volume/issue/page match, journal-name match, metadata conflict, or final candidate tie.
- Typical representation: composite match score, title score, VIP score, journal score, penalty stack, or tie-break ladder.
- Method target: convert overgenerated candidates from loose matching into confidence-ranked patent citations to science.
- Empirical signature: the same patent-reference string can produce multiple candidate papers, but the scoring layer selects the strongest match or assigns a low-confidence result.

## Uses in Science of Science

- Refines [unstructured patent-reference matching](unstructured_patent_reference_matching.md) by separating the final scoring logic from earlier candidate generation.
- Produces the evidence basis for [patent-science link confidence score](../measures/patent_science_link_confidence_score.md).
- Interprets output from [loose patent-reference candidate generation](loose_patent_reference_candidate_generation.md).
- Adds lower-level evidence rules for [quoted-title fallback matching](quoted_title_fallback_matching.md) and [common-name patent-reference match penalty](common_name_patent_reference_match_penalty.md).
- Supports [score-stratified match precision audit](../validations/score_stratified_match_precision_audit.md) because sampled errors can be traced back to metadata evidence patterns.
- Helps downstream users understand why [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) rows should be filtered by confidence rather than used as binary truth.

## Operationalization

- Penalize weak author evidence, including common surnames, generic terms used as names, two-letter surnames, first-initial mismatches, and fuzzy surname matches.
- Score title overlap using exact and near-exact token alignment while discounting common words and short titles.
- Score volume, issue, and page evidence, giving more weight to longer numeric sequences and coherent VIP order.
- Penalize explicit volume, page, or sequence evidence that conflicts with the structured paper record.
- Add journal-title and abbreviation evidence while discounting generic journal names.
- When several papers remain plausible for the same patent reference, choose by overall score, then title score, then volume/issue/page score.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes first-author scoring with penalties for common names, generic terms, fuzzy matches, and first-initial conflicts.
- The paper aligns title words by likely offset between the structured title and the unstructured patent reference, with extra tolerance for one-word insertions or deletions.
- Volume, issue, and page evidence is scored both as individual components and as ordered sequences, while conflicting numeric evidence lowers confidence.
- Journal names are checked using canonical names, abbreviation lists, and additional abbreviations learned from sampled output.
- If multiple MAG papers match a patent reference, the algorithm selects the highest-confidence candidate and uses title and VIP evidence as tie-breakers.

## Caveats

- Composite scores depend on hand-designed heuristics and may need recalibration when the publication backbone changes.
- Common journals, common surnames, short titles, and repeated author-paper series can still fool high-scoring rules.
- Tie-breaking can hide ambiguity if only the selected paper is released without runner-up candidate evidence.

## Links

- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [loose patent-reference candidate generation](loose_patent_reference_candidate_generation.md)
- [quoted-title fallback matching](quoted_title_fallback_matching.md)
- [common-name patent-reference match penalty](common_name_patent_reference_match_penalty.md)
- [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md)
- [publication-spine findability ceiling](../validations/publication_spine_findability_ceiling.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [score-stratified match precision audit](../validations/score_stratified_match_precision_audit.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_reference_metadata_evidence_scoring`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: patent reference match scoring; PCS metadata scoring; patent-paper evidence score; patent reference tie-break scoring
