# Expected citation rate

## Summary

Expected citation rate estimates how many citations per year a paper should receive given its field citation rate and benchmark cohort.

## Canonical Form

- Unit of analysis: paper, benchmark cohort, field citation rate, publication year, or portfolio.
- Typical representation: expected citations per year from a regression or benchmark calibration.
- Mechanism or measurement target: peer-calibrated citation expectation for a focal paper.
- Empirical signature: the same observed citation rate can imply different relative influence depending on the expected rate.

## Uses in Science of Science

- Serves as the denominator for [Relative Citation Ratio](relative_citation_ratio.md).
- Makes citation normalization interpretable against a chosen peer comparison group.
- Helps distinguish field normalization from benchmark normalization.

## Operationalization

- Choose a benchmark group, such as papers from NIH R01-funded investigators.
- Regress observed [article citation rate](article_citation_rate.md) on [field citation rate](field_citation_rate.md) within publication year.
- Use the fitted relationship to transform a focal paper's field citation rate into an expected citation rate.
- Divide observed article citation rate by expected citation rate to obtain RCR.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) defines expected citation rate through a benchmark step in the RCR calculation.
- Their main implementation benchmarks to NIH R01-funded papers, generating year-specific expectations from ACR/FCR relationships.
- The paper discusses ordinary least squares benchmarking for large-scale analyses and quantile regression when median-centered interpretation is preferable.
- This makes ECR a reusable motif for peer-calibrated normalization, not just a hidden denominator inside RCR.
- The benchmark step is split into [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md) and [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md) so peer-group choice remains auditable.

## Caveats

- ECR inherits assumptions from the benchmark cohort; a different peer group changes the interpretation.
- Regression choice affects whether the mean or median paper is anchored to 1.0 after normalization.
- Benchmark groups should match the evaluation question rather than be treated as universal defaults.

## Links

- [Relative Citation Ratio](relative_citation_ratio.md)
- [article citation rate](article_citation_rate.md)
- [field citation rate](field_citation_rate.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md)
- [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md)
- [RCR denominator gaming resistance](../validations/rcr_denominator_gaming_resistance.md)
- [reference set construction](../methods/reference_set_construction.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [responsible metrics](responsible_metrics.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `expected_citation_rate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Aliases: ECR; expected CPY; benchmark citation expectation; RCR denominator
