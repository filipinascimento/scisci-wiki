# Patent-science threshold design tradeoff

## Summary

Patent-science threshold design tradeoff is the study-design choice of setting patent-paper match confidence cutoffs according to tolerance for false positives versus false negatives.

## Canonical Form

- Unit of analysis: confidence cutoff, patent-paper link table, precision, recall, false-positive cost, false-negative cost, or downstream study design.
- Typical representation: ROC curve, threshold table, conservative lower-bound sample, recall-oriented sample, or sensitivity analysis across cutoffs.
- Validation target: make matching uncertainty an explicit design parameter rather than a hidden data-cleaning choice.
- Empirical signature: different confidence thresholds change patent-science counts, coverage, and reliability in predictable but design-dependent ways.

## Uses in Science of Science

- Connects [patent-science link confidence score](../measures/patent_science_link_confidence_score.md) to downstream empirical design.
- Uses both [score-stratified match precision audit](score_stratified_match_precision_audit.md) and [known-good PCS recall set construction](known_good_pcs_recall_set_construction.md).
- Makes [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) appropriate for conservative lower-bound studies, exploratory firm or field studies, and manually checked subcorpus studies.
- Encourages sensitivity checks when measuring [patent scientific reliance count](../measures/patent_scientific_reliance_count.md), [patent-paper links](../datasets/patent_paper_links.md), or [author-inventor overlap networks](../representations/author_inventor_overlap_networks.md).

## Operationalization

- Define the downstream cost of false positives and false negatives before choosing a cutoff.
- Use precision and recall tables to select one or more candidate thresholds.
- Report the confidence cutoff in every analysis using patent citations to science.
- Run sensitivity analyses over plausible thresholds, especially when conclusions depend on counts or network edges.
- For small or high-stakes subcorpora, use a lower threshold only when manual review is feasible.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) states that researchers may prefer different tradeoffs between false positives and false negatives.
- The paper releases confidence-scored links and supplies precision and recall evidence by confidence level rather than a single mandatory threshold.
- The distributed file includes confidence scores 3 and above, while the appendix notes that scores 1 and 2 are likely to contain few correct matches.
- The appendix warns that score 3 is about half incorrect in the manual audit and says many users will prefer score 4 or higher.

## Caveats

- A threshold chosen for one outcome, field, or patent era may not be appropriate for another.
- Threshold sensitivity can interact with source-role flags, front-page scope, publication-backbone coverage, and field-specific reference styles.
- Confidence thresholds cannot correct for references absent from the patent source or papers absent from the publication backbone.

## Links

- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](patent_science_precision_recall_calibration.md)
- [score-stratified match precision audit](score_stratified_match_precision_audit.md)
- [known-good PCS recall set construction](known_good_pcs_recall_set_construction.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [patent scientific reliance count](../measures/patent_scientific_reliance_count.md)
- [front-page patent-reference scope](front_page_patent_reference_scope.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `patent_science_threshold_design_tradeoff`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: PCS threshold tradeoff; patent-paper confidence cutoff; precision recall threshold choice; patent-science cutoff sensitivity
