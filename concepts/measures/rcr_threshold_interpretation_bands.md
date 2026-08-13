# RCR threshold interpretation bands

## Summary

RCR supports coarse influence bands such as zero influence and very high influence, but small score differences should not be overread.

## Canonical Form

- Unit of analysis: article, RCR value, influence band, percentile anchor, or evaluation threshold.
- Typical representation: heuristic interpretation bands over an article-level influence-score distribution.
- Mechanism, measurement, or validation target: coarse interpretation of RCR magnitudes.
- Empirical signature: large differences such as uncited versus very high-RCR papers are interpretable while small differences remain weakly validated.

## Uses in Science of Science

- Refines article-level citation metric interpretation by linking it to [relative citation ratio](relative_citation_ratio.md) and [citation influence quality boundary](../validations/citation_influence_quality_boundary.md).
- Useful as a reusable check when [citation percentile indicators](citation_percentile_indicators.md) is used in science-of-science inference.
- Creates cross-links to [low denominator metric inflation check](../validations/low_denominator_metric_inflation_check.md) so the motif is not interpreted in isolation.

## Operationalization

- Report the full RCR distribution and percentile anchors for the comparison universe.
- Flag zero-RCR and very high-RCR regions separately from fine-grained rank differences.
- Avoid treating small differences as meaningful unless external validation supports that threshold.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) treats uncited papers as having little field influence, describes very high-RCR papers as strongly influential, and warns that modest differences have not been validated as meaningful.
- The paper therefore supports coarse interpretation bands rather than arbitrary fine thresholds.

## Caveats

- Thresholds are heuristic and should not be equated with quality, rigor, or social value.
- Percentile and field context must accompany any threshold use.

## Links

- [Relative Citation Ratio](relative_citation_ratio.md)
- [Citation-influence quality boundary](../validations/citation_influence_quality_boundary.md)
- [Citation percentile indicators](citation_percentile_indicators.md)
- [Low-denominator metric inflation check](../validations/low_denominator_metric_inflation_check.md)
- [RCR venue-dispersion check](../validations/rcr_venue_dispersion_check.md)
- [Responsible metrics](responsible_metrics.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `rcr_threshold_interpretation_bands`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: RCR interpretation thresholds; RCR influence bands; high-RCR heuristic
