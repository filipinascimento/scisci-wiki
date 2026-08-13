# Administrative demographic record linkage

## Summary

Administrative demographic record linkage combines self-reported demographic fields from restricted administrative systems and related personnel records to study equity outcomes without inferring identity from names alone.

## Canonical Form

- Unit of analysis: applicant, author, faculty member, grant application, personnel record, or linked demographic attribute.
- Typical representation: linked self-reported race, ethnicity, gender, citizenship, or missingness flag across administrative sources.
- Method target: construct sensitive demographic covariates for equity audits while documenting observability, privacy, and missingness.
- Empirical signature: demographic categories come from self-report or official records, not only probabilistic name or surname proxies.

## Uses in Science of Science

- Supplies the demographic measurement layer for [NIH R01 award disparities](../validations/nih_r01_award_disparities.md).
- Complements [name-based demographic inference](name_based_demographic_inference.md) by using restricted self-reported or administrative categories when available.
- Connects [NIH IMPAC R01 grant panels](../datasets/nih_impac_r01_grant_panel.md) to privacy-aware equity analysis.
- Separates race and ethnicity linkage from [PhD-citizenship stratification](../measures/phd_citizenship_stratification.md), because citizenship at PhD receipt is a different construct.
- Helps separate demographic observability during review from demographic observability to researchers after records are linked.

## Operationalization

- Identify the administrative sources that contain demographic attributes and the primary analysis records.
- Link records using stable identifiers where possible, and document fallback linkage rules.
- Report whether demographic variables are self-reported, inferred by administrators, or harmonized across sources.
- Code missing or unresolved demographic information explicitly instead of dropping cases silently.
- Record which demographic information was visible to decision makers at the time of evaluation and which was visible only to analysts.
- Apply privacy, disclosure, and restricted-use rules for sensitive personal data.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) links NIH IMPAC II application records with the NIH Doctoral Record File and the AAMC Faculty Roster to identify applicant race and ethnicity.
- The paper states that applicants self-identify race, ethnicity, and gender during the application process, but that this information is not available to the review committee, NIH staff, or council.
- Ginther et al. use a combination of IMPAC II, DRF, and Faculty Roster responses and include a dummy variable for investigators whose race or ethnicity could not be identified.
- The verified text also notes that application biosketch information, such as undergraduate or doctoral institution and applicant names, may sometimes proxy race or ethnicity to reviewers even when self-reported fields are hidden.
- This makes the method useful for separating analyst-visible sensitive attributes from potential review-visible proxy signals.

## Caveats

- Administrative categories can still be incomplete, historically contingent, and inconsistent across sources.
- Self-reported fields are sensitive data and require governance beyond ordinary bibliographic metadata.
- Record linkage failures can be demographically uneven.
- Hidden fields can still be proxied by names, institutions, geography, research topics, or career histories.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [PhD-citizenship stratification](../measures/phd_citizenship_stratification.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [name-based demographic inference](name_based_demographic_inference.md)
- [probabilistic demographic fractional counting](probabilistic_demographic_fractional_counting.md)
- [demographic-proxy coverage imputation](../validations/demographic_proxy_coverage_imputation.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `administrative_demographic_record_linkage`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: demographic administrative linkage; self-reported demographic linkage; restricted demographic record linkage; applicant race-ethnicity linkage
