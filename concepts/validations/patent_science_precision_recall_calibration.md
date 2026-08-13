# Patent-science precision-recall calibration

## Summary

Patent-science precision-recall calibration validates patent-to-paper matching by estimating false positives and false negatives at different confidence thresholds.

## Canonical Form

- Unit of analysis: confidence level, manually checked patent-paper match, known-good reference, precision estimate, recall estimate, or ROC point.
- Typical representation: score-specific precision table, known-good recall table, or ROC curve.
- Validation target: let users choose a patent-paper citation threshold appropriate to their study design.
- Empirical signature: higher confidence thresholds improve precision while lower thresholds improve recall.

## Uses in Science of Science

- Validates [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md) and [patent-science link confidence scores](../measures/patent_science_link_confidence_score.md).
- Makes [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) usable for both conservative and recall-sensitive science-technology studies.
- Splits into [score-stratified match precision audit](score_stratified_match_precision_audit.md) for false positives and [known-good PCS recall set construction](known_good_pcs_recall_set_construction.md) for false negatives.
- Provides the empirical basis for [patent-science threshold design tradeoff](patent_science_threshold_design_tradeoff.md).
- Gives downstream users of [patent citation-to-science link tables](../datasets/patent_citation_to_science_link_table.md) a way to propagate matching uncertainty.
- Complements [patent citation source roles](patent_citation_source_roles.md), because source-role validation and match-quality validation answer different questions.

## Operationalization

- Draw a stratified random sample of algorithmic patent-paper matches within each confidence score.
- Manually classify sampled matches as correct or incorrect to estimate precision.
- Build a known-good set of patent references, independently classify which are scientific references, and determine which are findable in the paper corpus.
- Compare algorithmic output to the known-good set to estimate recall at each confidence threshold.
- Plot recall against false-positive rate or report threshold tables.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) checks 100 randomly selected output matches at each confidence level to estimate precision.
- The same paper builds a known-good set from 1,000 randomly sampled non-patent references; 546 were classified as scientific references and 501 were judged findable in MAG.
- Table 2 reports high precision at upper confidence levels, including 100% for score 10 and 99% for score 9 in the sampled matches, while scores 2 and 1 are mostly incorrect.
- Table 3 reports cumulative recall rising from about 84.6% at score 10 to about 93.4% at score 1, making the threshold choice explicit.

## Caveats

- Manual validation samples can still contain adjudication errors and may not transfer to a different patent jurisdiction or paper database.
- Known-good recall is limited to references that validators can classify and locate in the target paper corpus.
- Thresholds should be revalidated after moving from MAG to OpenAlex, Dimensions, PubMed, or other updated publication spines.

## Links

- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [score-stratified match precision audit](score_stratified_match_precision_audit.md)
- [known-good PCS recall set construction](known_good_pcs_recall_set_construction.md)
- [patent-science threshold design tradeoff](patent_science_threshold_design_tradeoff.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent citation source roles](patent_citation_source_roles.md)
- [front-page patent-reference scope](front_page_patent_reference_scope.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_science_precision_recall_calibration`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: PCS ROC calibration; patent-paper matching precision recall; patent-science validation curve; match-threshold validation
