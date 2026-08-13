# Damping rank-stability band

## Summary

A PageRank damping sweep can separate local top-list reshuffling from broad global rank stability.

## Canonical Form

- Unit of analysis: damping parameter, PageRank rank, Spearman correlation, top-k retention, or citation network.
- Typical representation: rank-correlation and top-k retention diagnostic across damping values.
- Mechanism, measurement, or validation target: robustness of PageRank-derived scientific-paper rankings.
- Empirical signature: global rank correlations can stay high even when highly ranked papers locally reorder..

## Uses in Science of Science

- Refines PageRank validation by linking it to [pagerank damping sensitivity](pagerank_damping_sensitivity.md) and [citation following damping calibration](../methods/citation_following_damping_calibration.md).
- Useful as a reusable check when [pagerank citation rank limit](pagerank_citation_rank_limit.md) is interpreted from citation histories.
- Adds cross-links to [ranking correlation diagnostic](ranking_correlation_diagnostic.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Sweep damping parameter d over a plausible interval.
- Compute Spearman rank correlation with a reference setting.
- Track top-k retention and local reorder rates among highly ranked papers.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) reports that switching from d equals 0.5 to d equals 0.15 locally reorders highly ranked papers but keeps the original top 10 within the top 50.
- The paper reports Spearman correlations near 0.98 to 1 for 0.1 less than d less than 0.9.

## Caveats

- Broad rank correlation can hide practically important top-list movement.
- This refines rather than replaces generic PageRank damping-sensitivity checks.

## Links

- [PageRank damping sensitivity](pagerank_damping_sensitivity.md)
- [Citation-following damping calibration](../methods/citation_following_damping_calibration.md)
- [PageRank citation-rank limit](pagerank_citation_rank_limit.md)
- [Ranking correlation diagnostic](ranking_correlation_diagnostic.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `damping_rank_stability_band`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: damping stability window; PageRank rank-correlation sweep; local-global damping robustness; top-k damping retention
