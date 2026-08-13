# RCR denominator aggregation sensitivity

## Summary

RCR should be checked for sensitivity to mean versus median denominator aggregation and benchmark-centering choices.

## Canonical Form

- Unit of analysis: RCR denominator, FCR, ECR, co-cited journal set, calibration model, or article ranking.
- Typical representation: mean/median and OLS/quantile-regression denominator sensitivity grid.
- Mechanism, measurement, or validation target: robustness of RCR values to aggregation choices.
- Empirical signature: RCR correlations, rank positions, or high-influence flags remain stable across plausible denominator aggregation variants.

## Uses in Science of Science

- Refines RCR robustness validation by linking it to [rcr benchmark calibration](../methods/rcr_benchmark_calibration.md) and [expected citation rate](../measures/expected_citation_rate.md).
- Useful as a reusable check when [field citation rate](../measures/field_citation_rate.md) is used in science-of-science inference.
- Creates cross-links to [normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md) so the motif is not interpreted in isolation.

## Operationalization

- Recompute FCR using mean and median co-cited journal citation rates.
- Recompute ECR/RCR using mean-centered OLS and median-centered quantile-regression calibration.
- Compare correlations, rank shifts, and threshold classifications across denominator variants.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) reports supporting comparisons of mean versus median FCR construction, mean versus median denominators, OLS versus quantile-regression coefficients, and correlations among resulting RCRs.
- The sensitivity grid makes denominator construction an auditable validation layer.

## Caveats

- This check overlaps benchmark calibration but focuses on denominator aggregation rather than benchmark corpus choice.
- Results depend on portfolio size, citation skew, and citation snapshot vintage.

## Links

- [RCR benchmark calibration](../methods/rcr_benchmark_calibration.md)
- [Expected citation rate](../measures/expected_citation_rate.md)
- [Field citation rate](../measures/field_citation_rate.md)
- [Normalized citation aggregation choice](../methods/normalized_citation_aggregation_choice.md)
- [Average-normalization skewness check](average_normalization_skewness_check.md)
- [Co-citation journal-rate substrate](../methods/co_citation_journal_rate_substrate.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `rcr_denominator_aggregation_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: RCR mean-median denominator check; FCR aggregation sensitivity; denominator centering audit
