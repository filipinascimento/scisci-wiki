# PageRank-citation rank divergence

## Summary

PageRank-citation rank divergence measures how far a paper's recursive citation-network rank departs from its direct citation-count rank.

## Canonical Form

- Unit of analysis: paper, citation-network node, ranked outlier, field corpus, or evaluation candidate.
- Typical representation: rank ratio, rank difference, log-rank gap, residual from expected PageRank given citations, or top-k overlap.
- Measurement target: the disagreement between recursive influence and raw citation accumulation.
- Empirical signature: papers with modest citation rank but very high PageRank rank become candidates for hidden influence.

## Uses in Science of Science

- Operationalizes the contrast used by [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md).
- Complements [Google number](google_number.md) by turning the scalar score into a diagnostic against citation-count rank.
- Connects recursive citation metrics to [citation impact indicators](citation_impact_indicators.md), [hidden citations](hidden_citations.md), and responsible use of ranked indicators.

## Operationalization

- Compute direct citation counts and recursive PageRank or Google number on the same directed citation network.
- Convert both measures to ranks using a documented tie rule.
- Calculate rank divergence as a difference, ratio, percentile shift, or residual from the average Google-number-citation relation.
- Inspect high-divergence cases with [citing-child PageRank contribution](citing_child_pagerank_contribution.md), reference-list length, field expertise, and coverage checks before interpreting them as substantive discoveries.

## Evidence and Validations

- Verified full-text evidence from Chen et al. (2007) compares Google rank with citation rank in the Physical Review citation network.
- The paper highlights top Google-ranked papers that are not top-cited, including Cabibbo's paper at Google rank 1 and citation rank 54, and Slater's paper at Google rank 10 and citation rank 1853.
- Chen et al. also tabulate top-100 Google-ranked papers where the ratio of citation rank to Google rank is greater than 10, making rank divergence an explicit outlier screen.
- Their examples show that divergence can be decomposed into influential citing children, short reference lists, and the occasional single-famous-child artifact.

## Caveats

- Rank divergence depends on the citation-network boundary, damping parameter, reference-list treatment, and publication-age structure.
- A large divergence is a triage signal rather than proof of quality or historical importance.
- Rank ratios can exaggerate differences near the top of a list; percentile or residual versions are often easier to compare across corpus sizes.

## Links

- [citation PageRank](citation_pagerank.md)
- [Google number](google_number.md)
- [citation PageRank hidden gems](../validations/citation_pagerank_hidden_gems.md)
- [recursive citation weighting](../mechanisms/recursive_citation_weighting.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)
- [citing-child PageRank contribution](citing_child_pagerank_contribution.md)
- [Google-number citation scaling check](../validations/google_number_citation_scaling_check.md)
- [Physical Review citation network](../datasets/physical_review_citation_network.md)
- [responsible metrics](responsible_metrics.md)

## References

- Chen, P., Xie, H., Maslov, S., & Redner, S. (2007). Finding scientific gems with Google's PageRank algorithm. *Journal of Informetrics*, 1(1), 8-15. https://doi.org/10.1016/j.joi.2006.06.001 [OpenAlex: W1539510218; Dimensions: pub.1021188249; WoS: unknown]

## Metadata

- Concept ID: `pagerank_citation_rank_divergence`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chen et al. (2007) (2007)
- Latest seen paper: Chen et al. (2007) (2007)
- Primary reference DOI: `10.1016/j.joi.2006.06.001`
- OpenAlex ID: `W1539510218`
- Dimensions ID: `pub.1021188249`
- SciSciNet ID: `W1539510218`
- Aliases: recursive-rank citation-rank gap; Google-rank citation-rank ratio; PageRank citation residual; citation-rank outlier gap
