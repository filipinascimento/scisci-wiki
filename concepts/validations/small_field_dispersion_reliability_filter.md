# Small-field dispersion reliability filter

## Summary

Dispersion estimates for novelty effects may be unreliable in subject categories with too few papers.

## Canonical Form

- Unit of analysis: field, subject category, citation-dispersion model, or minimum cell size.
- Typical representation: minimum field-size threshold for estimating novelty-dispersion effects.
- Mechanism, measurement, or validation target: reliability of field-specific dispersion estimates.
- Empirical signature: small fields are excluded or pooled when dispersion estimates would be unstable..

## Uses in Science of Science

- Adds sample-size reliability to [novelty field heterogeneity check](novelty_field_heterogeneity_check.md).
- Useful for generalized negative-binomial models of citation variance.
- Connects dispersion modeling to [field classifications](../measures/field_classifications.md).

## Operationalization

- Set and report minimum cell-size thresholds for dispersion models.
- List excluded fields and compare with pooled or hierarchical alternatives.
- Assess whether excluded fields are small, emerging, or unusually novel.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2017) excludes WoS subject categories with fewer than 1,000 papers from the generalized negative-binomial analysis.
- The exclusion makes small-field reliability an explicit modeling issue.

## Caveats

- The filter may remove small or emerging fields where novelty dynamics are especially important.
- Hierarchical models may be preferable to hard exclusion in some settings.

## Links

- [Novelty field heterogeneity check](novelty_field_heterogeneity_check.md)
- [Novelty impact dispersion](../measures/novelty_impact_dispersion.md)
- [Reference set construction](../methods/reference_set_construction.md)
- [Field classifications](../measures/field_classifications.md)
- [Citation distribution scaling](../measures/citation_distribution_scaling.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `small_field_dispersion_reliability_filter`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: small-field novelty dispersion filter; dispersion cell-size threshold; novelty model field-size reliability
