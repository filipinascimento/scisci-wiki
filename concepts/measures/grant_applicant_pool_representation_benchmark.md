# Grant applicant-pool representation benchmark

## Summary

Grant applicant-pool representation benchmark measures the demographic composition of applicants against relevant workforce, faculty, training, or eligible-population baselines before interpreting award gaps.

## Canonical Form

- Unit of analysis: grant applicant pool, application pool, demographic group, workforce baseline, or training baseline.
- Typical representation: applicant share, application share, faculty share, PhD matriculant share, or mechanism-specific eligibility baseline.
- Measure target: distinguish representation in the applicant pool from award conversion after application.
- Empirical signature: applicant shares are compared with external workforce or training baselines before funding-rate disparities are interpreted.

## Uses in Science of Science

- Adds a denominator measure to [grant sample-pool benchmarking](../validations/grant_sample_pool_benchmarking.md).
- Relates funding audits to [field demographic representation baseline](field_demographic_representation_baseline.md).
- Complements [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md) by contextualizing who enters the application pool.

## Operationalization

- Compute demographic shares for applications and unique applicants.
- Compare those shares with faculty rosters, doctoral cohorts, eligible PI populations, and mechanism-specific pools.
- Report whether baseline choice changes the substantive interpretation.
- Keep application and person denominators separate.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) compares NIH R01 application opportunities from underrepresented groups with medical-school faculty and biomedical PhD matriculant shares.
- The comparison positions award gaps relative to who applies, not only who exists in the broader workforce.

## Caveats

- Application shares are not unique-person shares.
- Eligible PI populations may differ from broad faculty or doctoral baselines.
- Baseline choice can hide earlier pipeline attrition.

## Links

- [grant sample-pool benchmarking](../validations/grant_sample_pool_benchmarking.md)
- [field demographic representation baseline](field_demographic_representation_baseline.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `grant_applicant_pool_representation_benchmark`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: applicant-pool demographic benchmark; grant applicant representation baseline; funding applicant pool share
