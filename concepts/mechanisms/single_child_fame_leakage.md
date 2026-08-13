# Single-child fame leakage

## Summary

A paper can inherit high PageRank from one or a few famous citing descendants with short reference lists.

## Canonical Form

- Unit of analysis: cited paper, citing descendant, PageRank contribution, reference list length, citation count, or outlier paper.
- Typical representation: incoming-contribution decomposition of PageRank score.
- Mechanism, measurement, or validation target: edge-level failure mode in recursive citation prestige.
- Empirical signature: one highly ranked citing paper can dominate a low-citation paper's PageRank..

## Uses in Science of Science

- Refines PageRank mechanism by linking it to [citing child pagerank contribution](../measures/citing_child_pagerank_contribution.md) and [reference list dilution](reference_list_dilution.md).
- Useful as a reusable check when [citation pagerank hidden gems](../validations/citation_pagerank_hidden_gems.md) is interpreted from citation histories.
- Adds cross-links to [metric outlier canonicality review](../validations/metric_outlier_canonicality_review.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Decompose each candidate paper's PageRank into incoming child contributions.
- Flag cases where one citing paper contributes a large share of the score.
- Review whether the pattern is a true precursor signal or a metric artifact.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) treats the Rosenstock and Marquardt case as an apparent mistake: it had only three citations but ranked highly because the famous Witten-Sander paper cited it and had only ten references.
- The motif captures fame leakage through a single sparse-reference child.

## Caveats

- The same pattern may indicate a true overlooked precursor rather than an error.
- Domain review is required before labeling a single-child boost as spurious.

## Links

- [Citing-child PageRank contribution](../measures/citing_child_pagerank_contribution.md)
- [Reference-list dilution](reference_list_dilution.md)
- [Citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [Metric outlier canonicality review](../validations/metric_outlier_canonicality_review.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; SciSciNet: W1539510218; WoS: unknown]

## Metadata

- Concept ID: `single_child_fame_leakage`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: single-descendant PageRank boost; famous-child leakage; concentrated child contribution; sparse-reference fame transfer
