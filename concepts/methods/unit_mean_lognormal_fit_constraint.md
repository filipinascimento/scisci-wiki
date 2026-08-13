# Unit-mean lognormal fit constraint

## Summary

Normalized citation performance can impose an expected value of one, reducing the fitted lognormal collapse model to one free parameter.

## Canonical Form

- Unit of analysis: normalized citation value, field-year baseline, lognormal density, fit parameter, or lower-tail cutoff.
- Typical representation: constrained lognormal fit over relative citation performance values.
- Mechanism, measurement, or validation target: parsimonious modeling of normalized citation distributions.
- Empirical signature: the fitted distribution uses the unit mean of normalized citation values as a parameter constraint.

## Uses in Science of Science

- Refines citation-distribution modeling by linking it to [lognormal relative citation curve](../validations/lognormal_relative_citation_curve.md) and [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md).
- Useful as a reusable check when [relative citation performance cf](../measures/relative_citation_performance_cf.md) is used in science-of-science inference.
- Creates cross-links to [field year citation baseline c0](../measures/field_year_citation_baseline_c0.md) so the motif is not interpreted in isolation.

## Operationalization

- Normalize citation counts as `c/c0` using the field-year average.
- Fit the relative-citation density above a disclosed lower-tail cutoff.
- Impose the unit-mean constraint and report the remaining free parameter with uncertainty.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) states that the expected value of `cf` is one and uses that fact to constrain the lognormal fit.
- The constraint supports a compact test of distributional collapse across fields.

## Caveats

- The constraint depends on correct construction of `c0`.
- Truncation, missing uncited papers, or field taxonomy errors can distort the fitted parameter.

## Links

- [Lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md)
- [Universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md)
- [Relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [Field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [Fieldwise lognormal-parameter compatibility](../validations/fieldwise_lognormal_parameter_compatibility.md)
- [Log-binned citation distribution estimator](log_binned_citation_distribution_estimator.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `unit_mean_lognormal_fit_constraint`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: one-parameter normalized lognormal; unit-mean citation-collapse fit; constrained cf lognormal
