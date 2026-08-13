# Citation source concentration ratio

## Summary

Citation source concentration ratio compares total citations with the number of distinct citing papers, flagging cases where citations are unusually concentrated in a small citing-paper set.

## Canonical Form

- Unit of analysis: author, paper set, citing paper, citation record, field, or evaluation portfolio.
- Typical representation: citations divided by citing papers, high-ratio flag, self-citation-excluded ratio, or citation-farm audit signal.
- Measurement target: whether citation counts are broadly distributed across citing sources or concentrated in repeated co-citation patterns.
- Empirical signature: high ratios indicate that each citing paper contributes many citations on average to the same author or portfolio.

## Uses in Science of Science

- Adds a concentration diagnostic to [citation impact indicators](citation_impact_indicators.md).
- Supports [citation metric gaming](../validations/citation_metric_gaming.md) audits by flagging possible citation farms or concentrated citation loops.
- Complements [self-citation rates](self_citation_rates.md) because high concentration can persist even after simple self-citation removal.
- Feeds [citation farm case review](../validations/citation_farm_case_review.md) rather than serving as an automatic misconduct label.
- Helps [responsible metrics](responsible_metrics.md) users inspect whether author metrics are broad-based or source-concentrated.

## Operationalization

- Count total citations received by the focal author or portfolio.
- Count distinct citing papers that contribute at least one citation to the focal author or portfolio.
- Divide citations by distinct citing papers and flag unusually high values for review.
- Compare ratios with and without self-citations and within field/career-stage context.
- Inspect high-ratio cases qualitatively before labeling them anomalous.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) provides both the number of citing papers and the ratio of citations divided by citing papers in its author citation database.
- The paper reports 5,709 authors in the career-long dataset and 7,090 in the single-year dataset with citation-to-citing-paper ratios above 2.
- Ioannidis et al. state that high ratios deserve deeper assessment because they may reflect benign patterns where a small number of an author's papers are commonly cited together, or spurious citation farms.
- The same paper pairs this diagnostic with self-citation-excluded metrics, warning that simply removing self-citations may not be enough in extreme cases.

## Caveats

- A high ratio is not automatically suspicious; methods, datasets, software, review papers, or tightly coupled research programs can be cited together legitimately.
- The ratio depends on author disambiguation and citation database coverage.
- Thresholds should be field- and portfolio-size aware.
- High-ratio profiles need qualitative inspection before exclusion or sanction.

## Links

- [citation impact indicators](citation_impact_indicators.md)
- [author citation composite indicator](author_citation_composite_indicator.md)
- [self-citation rates](self_citation_rates.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [citation farm case review](../validations/citation_farm_case_review.md)
- [citation elite concentration](citation_elite_concentration.md)
- [citation networks](../representations/citation_networks.md)
- [responsible metrics](responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `citation_source_concentration_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: citations per citing paper; citation concentration ratio; citing-paper concentration; citation-farm diagnostic ratio
