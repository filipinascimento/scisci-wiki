# iCite RCR tool

## Summary

iCite RCR tool is the NIH web tool and associated implementation pipeline that returns Relative Citation Ratio values and component citation variables for PubMed-indexed articles.

## Canonical Form

- Unit of analysis: PMID, article, publication year, citation snapshot, or article set.
- Typical representation: downloadable table with total citations, citations per year, expected citations per year, field citation rate, RCR, percentile/rank summaries, and article metadata.
- Data target: transparent access to article-level citation metrics and their components.
- Empirical signature: users can enter PMIDs and retrieve RCR-related variables rather than only a final opaque score.

## Uses in Science of Science

- Operationalizes [Relative Citation Ratio](../measures/relative_citation_ratio.md) for biomedical articles.
- Makes [article citation rate](../measures/article_citation_rate.md), [field citation rate](../measures/field_citation_rate.md), and [expected citation rate](../measures/expected_citation_rate.md) inspectable.
- Supports reproducibility claims around [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md) and [co-citation field normalization](../methods/co_citation_field_normalization.md).
- Provides a tool-provenance example for [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Submit one or more PMIDs to the iCite interface or reproduce the pipeline from the released code where available.
- Record the citation data vintage, benchmark definition, and whether values are OLS- or quantile-regression benchmarked.
- Export the returned component variables rather than retaining only the final RCR score.
- Treat unavailable source citation links and proprietary citation inputs as transparency caveats.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) introduces a beta version of iCite for calculating RCR values for articles listed in PubMed.
- The paper reports that iCite returns total citations, citations per year, expected citations per year, field citation rate, RCR, and article metadata in a downloadable format.
- Hutchins et al. state that detailed help files are posted on iCite and that the code for generating the iCite database and tool is available on GitHub.
- The authors note a remaining transparency limit: many source citation data are proprietary, so not all citing papers can be identified.

## Caveats

- iCite is centered on PubMed-indexed biomedical literature and should not be assumed to cover all fields.
- RCR values are citation-snapshot dependent and cannot be calculated meaningfully immediately after publication.
- Public component outputs improve auditability but do not remove all proprietary citation-data dependencies.

## Links

- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [article citation rate](../measures/article_citation_rate.md)
- [field citation rate](../measures/field_citation_rate.md)
- [expected citation rate](../measures/expected_citation_rate.md)
- [NIH R01 benchmark corpus](nih_r01_benchmark_corpus.md)
- [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `icite_rcr_tool`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: iCite; NIH iCite; iCite RCR calculator; PubMed RCR tool
