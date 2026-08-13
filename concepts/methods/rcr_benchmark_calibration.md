# RCR benchmark calibration

## Summary

RCR benchmark calibration transforms a paper's field citation rate into an expected citation rate by fitting article citation rates against field citation rates in a selected peer benchmark set.

## Canonical Form

- Unit of analysis: benchmark article, publication year, article citation rate, field citation rate, expected citation rate, or regression model.
- Typical representation: year-specific OLS or quantile regression from FCR to ACR.
- Method target: anchor normalized article influence to a meaningful peer comparison group.
- Empirical signature: average or median benchmark papers receive RCR values centered near 1.0 under the chosen calibration.

## Uses in Science of Science

- Converts [field citation rate](../measures/field_citation_rate.md) into [expected citation rate](../measures/expected_citation_rate.md).
- Makes [Relative Citation Ratio](../measures/relative_citation_ratio.md) interpretable against the [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md) or another specified peer group.
- Extends [reference set construction](reference_set_construction.md) from field definition to benchmark choice.
- Provides a model-design point for [responsible metrics](../measures/responsible_metrics.md): the benchmark should match the evaluation question.

## Operationalization

- Select a benchmark cohort and citation snapshot.
- For each publication year, compute ACR and FCR for benchmark papers.
- Regress ACR on FCR to estimate the expected citation rate for a focal paper with a given FCR.
- Use OLS when the target is mean-centering for large-scale analyses.
- Use quantile regression when median-centered interpretation is preferable for skewed or small sets.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) fits year-specific relationships between ACR and FCR for R01-funded papers.
- The paper uses the fitted relationship to transform a focal paper's FCR into an expected citation rate, then divides ACR by ECR to obtain RCR.
- Hutchins et al. discuss ordinary least squares benchmarking, where mean RCR equals 1.0, and quantile regression, where the median RCR equals 1.0.
- The paper emphasizes that benchmarking allows apples-to-apples comparison groups rather than aggregating all researchers across regions and institutional types.

## Caveats

- Benchmark calibration is not portable without stating the benchmark cohort.
- OLS and quantile regression answer different centering questions.
- A benchmark chosen for NIH biomedical portfolios may not be appropriate for other fields, institutions, countries, or document types.

## Links

- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [expected citation rate](../measures/expected_citation_rate.md)
- [field citation rate](../measures/field_citation_rate.md)
- [article citation rate](../measures/article_citation_rate.md)
- [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md)
- [iCite RCR tool](../datasets/icite_rcr_tool.md)
- [reference set construction](reference_set_construction.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `rcr_benchmark_calibration`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: RCR benchmark normalization; ACR-FCR benchmark regression; RCR expected citation calibration; peer benchmark calibration
