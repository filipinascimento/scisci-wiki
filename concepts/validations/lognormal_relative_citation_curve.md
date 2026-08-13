# Lognormal relative-citation curve

## Summary

Lognormal relative-citation curve is the validation pattern in which field-year normalized citation ratios collapse onto a common curve that is well approximated by a lognormal distribution.

## Canonical Form

- Unit of analysis: field-year citation distribution, normalized citation ratio, fitted distribution, or data-collapse curve.
- Typical representation: rescaled histogram of `c_f = c / c0` with a lognormal fit and field-specific fit diagnostics.
- Validation target: whether mean-based field-year normalization produces a stable distributional form across disciplines and years.
- Empirical signature: fitted lognormal parameters are broadly compatible across field-year cells after rescaling.

## Uses in Science of Science

- Refines [universal citation distribution collapse](universal_citation_distribution_collapse.md) by naming the fitted shape of the collapsed curve.
- Supports [relative citation performance c_f](../measures/relative_citation_performance_cf.md) as a distribution-aware indicator, not only a ratio.
- Provides a diagnostic for [field-normalized citation impact](../measures/field_normalized_citation_impact.md) and [citation distribution scaling](../measures/citation_distribution_scaling.md).

## Operationalization

- Build field-year citation distributions after defining source database, document types, and citation census date.
- Compute `c0` as the field-year mean citation count and `c_f = c / c0` for each paper.
- Plot `c0 P(c, c0)` against `c_f` for multiple fields or years.
- Estimate binned distributions with a reproducible method such as [log-binned citation distribution estimator](../methods/log_binned_citation_distribution_estimator.md).
- Fit a lognormal curve to the collapsed distribution and report parameter estimates and goodness of fit by field-year cell.
- Inspect outlying fields rather than assuming the curve is universal everywhere.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) reports that the distribution of `c_f` appears universal for the categories considered and resembles a lognormal distribution.
- The paper fits each field-specific curve for `c_f >= 0.1` with a one-parameter lognormal form and reports that fitted values are compatible within two standard deviations for all but one category, which is still within three standard deviations.
- Radicchi et al. also report a single-curve fit with a lognormal parameter near 1.3, shown against the rescaled field distributions.
- This supports the idea that normalized citation impact should be validated at the distributional level before being aggregated into portfolio metrics.

## Caveats

- Lognormal fit quality depends on field taxonomy, binning, document-type filtering, and treatment of uncited papers.
- A shared distributional shape does not prove equal scientific value across fields.
- Deviations from the fitted curve can be more informative than the average collapse when auditing individual fields.

## Links

- [universal citation distribution collapse](universal_citation_distribution_collapse.md)
- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [log-binned citation distribution estimator](../methods/log_binned_citation_distribution_estimator.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [multidisciplinary field-mix caveat](multidisciplinary_field_mix_caveat.md)
- [uncited-paper inclusion sensitivity](uncited_paper_inclusion_sensitivity.md)
- [relative citation importance-scope caveat](relative_citation_importance_scope_caveat.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `lognormal_relative_citation_curve`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: lognormal c_f curve; normalized citation lognormal fit; relative-citation scaling curve; field-normalized citation distribution shape
