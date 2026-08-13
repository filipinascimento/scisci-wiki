# RCR zero log-transform floor

## Summary

Zero RCR values need an explicit floor when log-scale validation or plotting is used.

## Canonical Form

- Unit of analysis: zero-RCR article, validation dataset, log transform, floor value, or expert-score comparison.
- Typical representation: small positive replacement value below the lowest positive observed RCR.
- Mechanism, measurement, or validation target: log-scale handling of zero citation-metric values.
- Empirical signature: correlations or plotted locations for uncited papers depend on the chosen zero-floor convention.

## Uses in Science of Science

- Refines RCR validation methods by linking it to [rcr expert validation](../validations/rcr_expert_validation.md) and [rcr reviewer reliability ceiling](../validations/rcr_reviewer_reliability_ceiling.md).
- Useful as a reusable check when [citation impact indicators](../measures/citation_impact_indicators.md) is used in science-of-science inference.
- Creates cross-links to [attention inequality](../mechanisms/attention_inequality.md) so the motif is not interpreted in isolation.

## Operationalization

- Identify zero RCR values before log-transforming validation data.
- Find the lowest positive value in the relevant validation set.
- Replace zeros with a floor one order of magnitude lower and report the convention.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) log-transforms skewed citation metrics for review-score comparisons and converts zero RCR values to a small floor around 10^-2.
- This is a practical modeling convention needed for reproducible validation plots.

## Caveats

- The floor is not a substantive RCR value.
- Small validation samples can show correlation sensitivity to zero handling.

## Links

- [RCR expert validation](../validations/rcr_expert_validation.md)
- [RCR reviewer reliability ceiling](../validations/rcr_reviewer_reliability_ceiling.md)
- [Citation impact indicators](../measures/citation_impact_indicators.md)
- [Attention inequality and impact skew](../mechanisms/attention_inequality.md)
- [Lognormal citation survival function](lognormal_citation_survival_function.md)
- [RCR threshold interpretation bands](../measures/rcr_threshold_interpretation_bands.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `rcr_zero_log_transform_floor`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: zero-RCR floor; log-scale zero handling; citation metric log floor
