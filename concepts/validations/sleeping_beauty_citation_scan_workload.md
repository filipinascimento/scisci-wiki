# Sleeping-beauty citation-scan workload

## Summary

An exhaustive delayed-recognition search can be characterized by its corpus size, citation volume, threshold grid, and number of citation analyses.

## Canonical Form

- Unit of analysis: bibliographic corpus, citation relation, sleep-period grid, wake bin, citation-analysis count, or computational workload.
- Typical representation: feasibility trace for large-scale sleeping-beauty scans.
- Mechanism, measurement, or validation target: scale and reproducibility of exhaustive rare-trajectory search.
- Empirical signature: the workload is large enough that the scan design should be documented as an analysis artifact..

## Uses in Science of Science

- Refines sleeping-beauty scan validation by linking it to [cwts isi sleeping beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md) and [full corpus rare trajectory scan](../methods/full_corpus_rare_trajectory_scan.md).
- Useful as a reusable check when [algorithmic scalability feasibility claim](algorithmic_scalability_feasibility_claim.md) is interpreted from citation histories.
- Adds cross-links to [algorithmic scalability feasibility claim](algorithmic_scalability_feasibility_claim.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Report corpus size, citation volume, sleep-period grid size, wake bins, and approximate citation-analysis count.
- Use the workload trace to compare exact scans, sampled scans, and prefiltered scans.
- Separate computational feasibility from classification validity.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) reports about 20 million articles, about 300 million citations, six sleep lengths, and roughly 5 x 10^8 citation analyses.
- The motif turns a feasibility detail into a reusable validation artifact for rare-trajectory scans.

## Caveats

- The workload count does not validate correctness of classifications.
- Modern databases and chunked processing change runtime feasibility but not the need to document denominators.

## Links

- [CWTS-ISI sleeping-beauty corpus](../datasets/cwts_isi_sleeping_beauty_corpus.md)
- [Full-corpus rare-trajectory scan](../methods/full_corpus_rare_trajectory_scan.md)
- [Algorithmic scalability feasibility claim](algorithmic_scalability_feasibility_claim.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_citation_scan_workload`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/b:scie.0000018543.82441.f1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: SB scan compute footprint; large-scale delayed-recognition scan workload; citation-analysis workload trace
