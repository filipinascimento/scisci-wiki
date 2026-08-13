# Fieldwise lognormal-parameter compatibility

## Summary

Citation-distribution universality can be checked by testing whether field-level fitted lognormal parameters agree within uncertainty.

## Canonical Form

- Unit of analysis: field, normalized citation distribution, fitted variance parameter, standard error, or goodness-of-fit statistic.
- Typical representation: fieldwise parameter table for relative-citation distribution fits.
- Mechanism, measurement, or validation target: distributional validation of universal citation scaling.
- Empirical signature: field-specific fitted parameters are statistically compatible rather than showing systematic field differences.

## Uses in Science of Science

- Refines citation-distribution validation by linking it to [lognormal relative citation curve](lognormal_relative_citation_curve.md) and [universal citation distribution collapse](universal_citation_distribution_collapse.md).
- Useful as a reusable check when [unit mean lognormal fit constraint](../methods/unit_mean_lognormal_fit_constraint.md) is used in science-of-science inference.
- Creates cross-links to [average normalization skewness check](average_normalization_skewness_check.md) so the motif is not interpreted in isolation.

## Operationalization

- Fit each field's normalized citation density separately.
- Compare fitted parameters, standard errors, and goodness-of-fit statistics.
- Report whether compatibility holds across the body, tail, and lower-citation region.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) compares fitted lognormal parameters across fields and treats most values as compatible within two standard deviations.
- This makes parameter compatibility a concrete diagnostic for universal distribution claims.

## Caveats

- Compatible fitted parameters are weaker than a formal pooled-model test.
- Tail deviations can be hidden by fits dominated by the distribution body.

## Links

- [Lognormal relative-citation curve](lognormal_relative_citation_curve.md)
- [Universal citation distribution collapse](universal_citation_distribution_collapse.md)
- [Unit-mean lognormal fit constraint](../methods/unit_mean_lognormal_fit_constraint.md)
- [Average-normalization skewness check](average_normalization_skewness_check.md)
- [Log-binned citation distribution estimator](../methods/log_binned_citation_distribution_estimator.md)
- [Universal citation-distribution mechanism gap](universal_citation_distribution_mechanism_gap.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `fieldwise_lognormal_parameter_compatibility`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: cross-field fit-parameter agreement; citation-collapse parameter check; lognormal universality diagnostic
