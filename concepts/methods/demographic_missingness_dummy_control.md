# Demographic missingness dummy control

## Summary

Demographic missingness dummy control is the method motif that administrative equity audits should explicitly model and report unknown demographic status rather than silently dropping cases.

## Canonical Form

- Unit of analysis: applicant, administrative demographic field, missing-value category, model covariate, or sensitivity analysis.
- Typical representation: unknown race dummy, unidentified ethnicity indicator, missingness share, or demographic-source coverage flag.
- Method target: preserve sample size while making demographic missingness visible.
- Empirical signature: unknown demographic status is coded as a separate model indicator and reported as part of the sample.

## Uses in Science of Science

- Refines [administrative demographic record linkage](administrative_demographic_record_linkage.md).
- Connects to [demographic proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md) when observed demographics are incomplete.
- Supports transparent interpretation of [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).

## Operationalization

- Code unknown or unlinked demographic categories explicitly.
- Report missingness by source, group, field, year, institution, and outcome.
- Run sensitivity checks for missing-not-at-random assumptions.
- Avoid treating a missingness dummy as a complete solution to coverage bias.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) assigns a missing-data dummy to investigators whose race or ethnicity could not be identified.
- The paper also reports a nontrivial other/unknown share in the application sample.

## Caveats

- Missingness indicators do not remove bias when missingness is related to treatment or outcome.
- Unknown categories can be heterogeneous.
- Some administrative releases may suppress small cells, increasing missingness.

## Links

- [administrative demographic record linkage](administrative_demographic_record_linkage.md)
- [demographic proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md)
- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [sparse demographic subgroup-cell limit](../validations/sparse_demographic_subgroup_cell_limit.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `demographic_missingness_dummy_control`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: unknown-demographic control; race missingness indicator; administrative demographic missingness dummy
