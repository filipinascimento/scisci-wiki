# Score-stratified match precision audit

## Summary

Score-stratified match precision audit estimates patent-paper matching false positives by manually checking random samples within each confidence-score level.

## Canonical Form

- Unit of analysis: algorithmic patent-paper match, confidence score, manual correctness label, score stratum, precision estimate, or cumulative correctness estimate.
- Typical representation: score-by-score precision table, manually checked output sample, false-positive profile, or cutoff quality audit.
- Validation target: quantify how output-match reliability changes as confidence thresholds are raised or lowered.
- Empirical signature: low confidence strata contain many incorrect links, while high confidence strata are dominated by correct links.

## Uses in Science of Science

- Supplies the false-positive side of [patent-science precision-recall calibration](patent_science_precision_recall_calibration.md).
- Validates the score ordering produced by [patent-reference metadata evidence scoring](../methods/patent_reference_metadata_evidence_scoring.md).
- Gives practical support for [patent-science threshold design tradeoff](patent_science_threshold_design_tradeoff.md).
- Helps downstream users of [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) decide whether their study can tolerate lower-score links.
- Complements [known-good PCS recall set construction](known_good_pcs_recall_set_construction.md), which estimates missed true links.

## Operationalization

- Group algorithmic patent-paper matches by confidence score.
- Draw a random sample from each score stratum rather than only sampling the pooled output.
- Manually label whether each sampled patent-reference-to-paper match is correct.
- Estimate precision within each stratum and cumulative precision after applying score cutoffs.
- Inspect high-score errors separately because they often reveal systematic ambiguity rather than random noise.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) checks 100 randomly selected algorithmic matches at each confidence level.
- The audit finds no incorrect matches at score 10, one incorrect match at score 9, and three incorrect matches at score 8 in the sampled rows.
- Lower strata are much noisier: score 3 has 41 incorrect matches in a sample of 100, while scores 2 and 1 are mostly incorrect.
- Marx and Fuegi therefore exclude confidence scores 1 and 2 from the distributed file and warn that many users will prefer score 4 or higher.

## Caveats

- Samples of 100 per score provide useful calibration but still have sampling uncertainty.
- Precision can vary by field, patent era, jurisdiction, publication backbone, and reference style.
- A high cumulative precision estimate can mask a low-quality marginal score stratum if most matches are concentrated in high-score bins.

## Links

- [patent-science precision-recall calibration](patent_science_precision_recall_calibration.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-reference metadata evidence scoring](../methods/patent_reference_metadata_evidence_scoring.md)
- [patent-science threshold design tradeoff](patent_science_threshold_design_tradeoff.md)
- [known-good PCS recall set construction](known_good_pcs_recall_set_construction.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `score_stratified_match_precision_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: score-stratified PCS precision; confidence-level match audit; patent-paper false-positive audit; match precision by confidence score
