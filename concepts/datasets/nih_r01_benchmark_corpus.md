# NIH R01 benchmark corpus

## Summary

NIH R01 benchmark corpus is the peer-comparison article set used by Hutchins et al. to anchor Relative Citation Ratio expectations for biomedical papers.

## Canonical Form

- Unit of analysis: R01-funded article, publication year, NIH grant, principal investigator, or benchmark cohort.
- Typical representation: article list linked to NIH R01 funding, citation data, field citation rates, and article citation rates.
- Data target: define the comparison group that makes RCR values interpretable relative to peer performance.
- Empirical signature: benchmark articles supply year-specific ACR-FCR regressions that set average or median RCR expectations.

## Uses in Science of Science

- Supplies the benchmark denominator for [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md).
- Makes [expected citation rate](../measures/expected_citation_rate.md) benchmark-specific rather than universal.
- Provides a funder-linked portfolio substrate for [iCite RCR tool](icite_rcr_tool.md), NIH program evaluation, and [citation impact indicators](../measures/citation_impact_indicators.md).
- Connects citation metrics to [grant-publication linkage tables](grant_publication_linkage_tables.md).

## Operationalization

- Link publications to NIH R01 grants and principal investigators.
- Restrict benchmark articles by publication year and citation-data availability.
- Compute article citation rate and field citation rate for each benchmark article.
- Fit year-specific benchmark relationships to transform FCR into expected citation rate.
- Version the grant-publication linkage, citation snapshot, and benchmark inclusion rules.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) uses R01-funded papers as the benchmark set for RCR calculation.
- The paper reports a benchmark set of 311,497 reference articles published from 2002 through 2012 by NIH R01 awardees.
- Hutchins et al. also analyze 88,835 articles published by NIH investigators continuously funded by R01 awards from fiscal year 2003 through fiscal year 2010.
- Grant data come from NIH RePORTER, grant-publication linkages from NIH SPIRES, and PI linkages from NIH IMPAC-II Person Profile IDs.

## Caveats

- An NIH R01 benchmark is appropriate for some biomedical comparisons but is not a universal peer group.
- Grant-publication linkage errors and PI attribution affect the benchmark corpus.
- Evaluation use should state whether the benchmark is mean-centered or median-centered.

## Links

- [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md)
- [expected citation rate](../measures/expected_citation_rate.md)
- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [iCite RCR tool](icite_rcr_tool.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `nih_r01_benchmark_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: R01 benchmark set; NIH R01 peer comparison group; RCR benchmark corpus; NIH-funded article benchmark
