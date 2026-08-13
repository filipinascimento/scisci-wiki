# Optional stopping false positives

## Summary

Optional stopping false positives occur when data collection continues or stops after interim results are inspected, making the actual false-positive rate higher than the nominal test threshold.

## Canonical Form

- Unit of analysis: study, interim test, stopping rule, sample-size increment, or per-condition observation count.
- Typical representation: sequential p-value path, interim-testing schedule, stopping-rule disclosure, or simulation grid.
- Mechanism: repeated looks at the data create multiple chances for a null effect to appear significant.
- Empirical signature: vague sample-size rules, unexplained small samples, data collection ending soon after significance, or missing ex ante stopping rules.

## Uses in Science of Science

- Connects [study power and false-positive risk](../measures/study_power_false_positive_risk.md) to observed manuscript behavior.
- Gives a concrete mechanism for [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md).
- Motivates preregistered sample-size plans and the stopping-rule item in the [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md).
- Helps reviewers distinguish planned sequential designs from informal sampling until significance.

## Operationalization

- Record the planned sample size, stopping rule, and any interim analyses before inspecting outcomes.
- Reconstruct whether data collection occurred in batches and whether testing happened between batches.
- Simulate the same minimum sample size, maximum sample size, and testing frequency under the null.
- Compare the simulated false-positive rate with the nominal alpha level.
- Report both the stopping rule and the actual sample-size path.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) shows that testing after 20 observations per cell and then adding 10 more per cell if nonsignificant raises the p < .05 false-positive rate to 7.7%.
- Their additional simulations show that starting with 10 observations per condition and testing after every new per-condition observation until a cap of 50 produces a 22.1% false-positive rate at p <= .05.
- The same section shows lower but still inflated rates when the minimum sample is 20 per condition or when interim testing is less frequent.
- Simmons et al. propose ex ante stopping-rule disclosure and a minimum per-cell sample-size justification as low-cost controls.

## Caveats

- Sequential and adaptive designs can be valid when the stopping rule and error control are planned in advance.
- Optional stopping is especially difficult to audit after publication if collection dates and interim analyses are not disclosed.
- Larger minimum samples reduce but do not eliminate the risk when researchers repeatedly test and stop on significance.

## Links

- [study power and false-positive risk](../measures/study_power_false_positive_risk.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md)
- [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md)
- [outcome-measure selection flexibility](outcome_measure_selection_flexibility.md)
- [covariate-contingent significance](covariate_contingent_significance.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]

## Metadata

- Concept ID: `optional_stopping_false_positives`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: sampling until significant; undisclosed stopping rule; interim testing flexibility; data-collection stopping flexibility
