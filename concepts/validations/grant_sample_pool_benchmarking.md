# Grant sample-pool benchmarking

## Summary

Grant sample-pool benchmarking validates an analytic grant sample by comparing its outcome rates and composition with a broader administrative pool or adjacent funding years.

## Canonical Form

- Unit of analysis: grant application, grant mechanism, analytic sample, broader administrative pool, fiscal-year cohort, or award-rate benchmark.
- Typical representation: side-by-side award rates or composition checks for analytic and population grant pools.
- Validation target: whether the restricted sample used for detailed modeling behaves like the broader funding system it is meant to represent.
- Empirical signature: sample award rates are compared against all relevant applications or nearby years before disparity estimates are interpreted.

## Uses in Science of Science

- Validates the analytic frame behind [NIH R01 award disparities](nih_r01_award_disparities.md).
- Links detailed applicant-level models to the [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md).
- Supports the [R01 cohort comparability window](r01_cohort_comparability_window.md) by checking whether the chosen years are comparable to adjacent cohorts.
- Helps detect sample restriction artifacts before estimating award gaps or resubmission dynamics.

## Operationalization

- Define the detailed analytic sample and the broader administrative pool.
- Compare award rates, scored-application rates, resubmission patterns, and demographic composition.
- Repeat checks by fiscal year, mechanism, institute, or application type when possible.
- Report any exclusions required for publication matching, citizenship, Ph.D. status, or demographic linkage.
- Treat large discrepancies as threats to external validity.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) compares their Type 1 R01 analytic sample with broader NIH research-project grant pools and surrounding years.
- These checks show whether the modeled cohort's award rates are aligned with broader NIH patterns before interpreting race and ethnicity disparities.
- The motif is useful because linked administrative-bibliometric samples can become less representative after matching and eligibility restrictions.

## Caveats

- Benchmark similarity in aggregate award rates does not guarantee equivalence on unobserved applicant or proposal characteristics.
- Broader pools can include mechanisms or applicants outside the modeled design.
- Adjacent-year benchmarks can be affected by policy changes, budget shocks, or review-system changes.
- Sample benchmarking validates scope, not causal identification.

## Links

- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [R01 cohort comparability window](r01_cohort_comparability_window.md)
- [applicant bibliometric control vector](../methods/applicant_bibliometric_control_vector.md)
- [conservative applicant-publication matching bias](conservative_applicant_publication_matching_bias.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `grant_sample_pool_benchmarking`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: grant sample representativeness check; award-pool benchmarking; administrative grant pool validation; funding sample benchmark
