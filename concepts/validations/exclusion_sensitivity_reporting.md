# Exclusion-sensitivity reporting

## Summary

Exclusion-sensitivity reporting is the validation practice of showing whether a result changes when excluded observations, participants, trials, or cases are retained.

## Canonical Form

- Unit of analysis: excluded observation, exclusion rule, participant, trial, case, robustness result, or reported estimate.
- Typical representation: included-versus-excluded robustness table, flow diagram, exclusion audit, or disclosure checklist.
- Validation target: whether a claim hinges on ex post decisions about which data to remove.
- Empirical signature: focal significance disappears when excluded observations are restored, or exclusion rules are vague and result-dependent.

## Uses in Science of Science

- Converts one [researcher degree of freedom](researcher_degrees_of_freedom.md) into a transparent robustness check.
- Links [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md) to data-cleaning and sample-construction choices.
- Gives reviewers and readers a simple diagnostic for hidden exclusion dependence.
- Complements [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md) by asking whether model or sample choices carry the result.

## Operationalization

- State the exclusion rule, who applied it, and whether it was planned before results were known.
- Report counts and reasons for excluded observations at each step.
- Recompute the focal result with excluded observations restored when doing so is meaningful.
- Separate invalid data removal from discretionary trimming or participant dropping.
- Summarize whether the claim is stable, attenuated, reversed, or dependent on exclusions.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) identifies exclusion of participants or trials as a common researcher degree of freedom that their simulations did not even count.
- Their proposed solution requires authors who eliminate observations to also report what happens when those observations are included.
- Simmons et al. frame this requirement as a way to expose whether a finding relies on ex post data-removal decisions and to give reviewers a basis for judging the exclusions.
- This validation motif is therefore a reporting check rather than a separate statistical estimator.

## Caveats

- Some exclusions are necessary for invalid measurements, failed attention checks, impossible values, or corrupted records.
- Restoring excluded observations may not be meaningful when the data are structurally invalid.
- Sensitivity reporting should not reward keeping bad data; it should make the exclusion decision inspectable.

## Links

- [researcher degrees of freedom](researcher_degrees_of_freedom.md)
- [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md)
- [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md)
- [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md)
- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [replication and reproducibility](replication_reproducibility.md)
- [open science interventions](open_science_interventions.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]

## Metadata

- Concept ID: `exclusion_sensitivity_reporting`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: excluded-observation robustness; exclusion sensitivity; data-exclusion disclosure; inclusion robustness
