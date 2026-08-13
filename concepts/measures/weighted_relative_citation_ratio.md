# Weighted Relative Citation Ratio

## Summary

Weighted Relative Citation Ratio is a portfolio-level measure that sums article RCR values, equivalent to article count multiplied by average RCR.

## Canonical Form

- Unit of analysis: article set, investigator portfolio, funded program, institution, or research portfolio.
- Typical representation: sum of article RCRs, annual weighted RCR bars, or influence-weighted article count.
- Measurement target: aggregate article-level field-normalized influence while retaining a size component.
- Empirical signature: portfolios with more papers or higher average RCR have larger weighted RCR values.

## Uses in Science of Science

- Aggregates [Relative Citation Ratio](relative_citation_ratio.md) over paper portfolios.
- Appears in the [iCite RCR tool](../datasets/icite_rcr_tool.md) as a downloadable and visualized portfolio output.
- Gives [normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md) a size-sensitive example.
- Needs [citation indicator size dependence](citation_indicator_size_dependence.md) caveats because it intentionally combines productivity and influence.

## Operationalization

- Compute RCR for each article in the portfolio.
- Sum the article-level RCR values.
- Equivalently, multiply the portfolio's article count by its mean RCR.
- Report weighted RCR alongside article count and average RCR so users can separate volume from per-article influence.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) states that iCite reports weighted RCR for an entered set of PubMed IDs.
- The paper defines weighted RCR as the sum of RCRs for the group and also describes multiplying the number of articles by average RCR in investigator mobility analyses.
- Hutchins et al. show that weighted-RCR quintile mobility gives nearly identical results to average-RCR quintile mobility in their NIH R01 investigator case study.

## Caveats

- Weighted RCR is size-dependent and should not be interpreted as pure per-paper influence.
- Portfolio boundaries, publication windows, and author-credit rules can strongly affect the measure.
- It should be reported with article count, mean RCR, and field/portfolio context.

## Links

- [Relative Citation Ratio](relative_citation_ratio.md)
- [iCite RCR tool](../datasets/icite_rcr_tool.md)
- [normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md)
- [citation indicator size dependence](citation_indicator_size_dependence.md)
- [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `weighted_relative_citation_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: weighted RCR; sum of RCRs; influence-weighted article count; portfolio RCR sum
