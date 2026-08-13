# Grant application-applicant denominator split

## Summary

Grant application-applicant denominator split is the method motif that grant-equity audits should distinguish application-level denominators from unique-investigator denominators.

## Canonical Form

- Unit of analysis: application, applicant, application opportunity, investigator, resubmission sequence, or clustered observation.
- Typical representation: application count, unique applicant count, clustered standard errors, ever-award outcome, or application-family outcome.
- Method target: avoid conflating repeated grant submissions with independent people.
- Empirical signature: the same audit reports many more applications than unique investigators and accounts for repeated submissions.

## Uses in Science of Science

- Refines [R01 application resubmission sequences](r01_application_resubmission_sequences.md).
- Provides denominator discipline for [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md).
- Supports [parity award-shortfall counterfactual](../measures/parity_award_shortfall_counterfactual.md) calculations.

## Operationalization

- Report application counts, unique applicant counts, and application-opportunity definitions.
- Cluster standard errors by applicant when modeling application outcomes.
- Run applicant-level ever-funded analyses alongside application-level award probabilities when possible.
- Track resubmission families separately from new independent proposals.

## Evidence and Validations

- Verified full-text evidence from Ginther et al. (2011) reports 83,188 applications mapped to 40,069 unique investigators and clusters standard errors by applicant.
- The paper treats repeated applications as analytically important rather than a simple duplicate problem.

## Caveats

- Repeated submissions are behaviorally meaningful and can mediate disparities.
- Applicant-level and application-level estimates answer different policy questions.
- Administrative identifiers must reliably connect applications to investigators.

## Links

- [R01 application resubmission sequences](r01_application_resubmission_sequences.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [parity award-shortfall counterfactual](../measures/parity_award_shortfall_counterfactual.md)
- [grant applicant-pool representation benchmark](../measures/grant_applicant_pool_representation_benchmark.md)

## References

- Ginther, D. K., Schaffer, W. T., Schnell, J., Masimore, B., Liu, F., Haak, L. L., & Kington, R. (2011). Race, ethnicity, and NIH research awards. *Science*, 333(6045), 1015-1019. https://doi.org/10.1126/science.1196783 [OpenAlex: W2096354859; Dimensions: pub.1043590820; WoS: unknown]

## Metadata

- Concept ID: `grant_application_applicant_denominator_split`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ginther et al. (2011) (2011)
- Latest seen paper: Ginther et al. (2011) (2011)
- Primary reference DOI: `10.1126/science.1196783`
- OpenAlex ID: `W2096354859`
- Dimensions ID: `pub.1043590820`
- SciSciNet ID: `W2096354859`
- Aliases: application-person denominator split; grant applicant clustering; application opportunity denominator
