# PhD-citizenship stratification

## Summary

PhD-citizenship stratification measures grant applicants or scientists by citizenship status at the time of doctoral receipt, often with degree-location fallback rules, to separate mobility and eligibility channels from race, ethnicity, or institutional effects.

## Canonical Form

- Unit of analysis: applicant, doctoral record, country-of-citizenship field, degree-location fallback, demographic group, or funding outcome.
- Typical representation: citizen/permanent-resident versus noncitizen flag, foreign-born/foreign-educated proxy, missing-citizenship indicator, or stratified funding model.
- Measurement target: distinguish nativity, training-location, and eligibility channels from other demographic or credential variables.
- Empirical signature: award gaps or covariate effects change after restricting to citizen/permanent-resident applicants or adding citizenship categories.

## Uses in Science of Science

- Refines [NIH R01 award disparities](../validations/nih_r01_award_disparities.md) by separating race and ethnicity gaps from citizenship and foreign-training composition.
- Connects administrative grant studies to broader mobility measures such as [foreign-born scientist share](foreign_born_scientist_share.md) and [country-scientific-origin proxies](../methods/country_scientific_origin_proxy.md).
- Complements [administrative demographic record linkage](../methods/administrative_demographic_record_linkage.md), because citizenship fields can come from different administrative sources than race or ethnicity fields.
- Helps evaluate whether training-program eligibility rules shape later funding trajectories.

## Operationalization

- Link applicants to doctoral-record sources that record citizenship or permanent-resident status at PhD receipt.
- For unmatched doctoral records, document fallback rules based on undergraduate and graduate degree locations.
- Code foreign-born, foreign-educated, citizen/permanent-resident, noncitizen, and missing categories separately where data permit.
- Estimate funding, scoring, or resubmission models with and without citizenship restrictions.
- State that citizenship at PhD receipt is not identical to birth country, current citizenship, race, ethnicity, or scientific origin.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) examines applicant nativity because only U.S. citizens and permanent residents are eligible for NIH pre- and postdoctoral training programs.
- The paper uses the NIH Doctoral Record File to identify citizenship at the time of PhD receipt.
- For unmatched PhD applicants, Ginther et al. manually reviewed biosketch information on undergraduate and graduate degree locations and classified applicants with all degrees outside the United States as foreign-born and foreign-educated.
- The verified text reports that restricting the analysis to U.S. citizens at the time of PhD receipt cut the Asian award-probability difference in half and made it statistically insignificant, while the Black-white difference remained about ten percentage points.

## Caveats

- Citizenship at PhD receipt can differ from birth country, later citizenship, permanent residence, or country at age 18.
- Degree-location fallback rules can misclassify mobile students who trained in multiple countries.
- Citizenship variables can be sensitive administrative data and should be handled with disclosure controls.
- A citizenship adjustment can clarify eligibility channels but may also condition on earlier structural selection.

## Links

- [NIH R01 award disparities](../validations/nih_r01_award_disparities.md)
- [administrative demographic record linkage](../methods/administrative_demographic_record_linkage.md)
- [NIH training support indicators](nih_training_support_indicators.md)
- [foreign-born scientist share](foreign_born_scientist_share.md)
- [country scientific origin proxy](../methods/country_scientific_origin_proxy.md)
- [academic origin ambiguity caveat](../validations/academic_origin_ambiguity_caveat.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `phd_citizenship_stratification`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: citizenship at PhD receipt; doctoral citizenship stratification; foreign-born foreign-educated grant proxy; R01 applicant nativity control
