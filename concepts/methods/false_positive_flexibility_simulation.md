# False-positive flexibility simulation

## Summary

False-positive flexibility simulation is a Monte Carlo method for estimating how discretionary analytic choices inflate the probability that at least one analysis of null data appears significant.

## Canonical Form

- Unit of analysis: simulated study, analytic path, p-value, researcher degree of freedom, or significance threshold.
- Typical representation: simulation grid, false-positive-rate table, sequential p-value path, or multiverse under the null.
- Method target: estimate the realized false-positive rate induced by a set of allowable choices.
- Empirical signature: the simulated probability of any p-value below alpha is higher than the nominal alpha level.

## Uses in Science of Science

- Quantifies [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md) without requiring closed-form derivations for every choice combination.
- Turns [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md) into comparable scenarios.
- Provides a reusable audit method for outcome selection, optional stopping, covariate adjustment, and condition-subset reporting.
- Complements [research bias parameter](../measures/research_bias_parameter.md) by modeling one paper-level route through which bias turns null data into positive findings.

## Operationalization

- Define the baseline design, sample size, data-generating process, and nominal alpha level.
- Enumerate the analytic choices researchers are allowed to try.
- Simulate many null datasets and run every allowed analysis for each dataset.
- Mark a false positive when at least one eligible analysis crosses the threshold.
- Compare single degrees of freedom, combinations of degrees, and sensitivity to correlations, testing frequency, or sample-size caps.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) uses 15,000 simulated samples per scenario to estimate false-positive rates for common researcher degrees of freedom.
- Their simulation table covers two dependent variables, optional sample-size expansion, covariate adjustment, condition-subset reporting, and combinations of these choices.
- Combining all four choices produces a p < .05 false-positive rate of 60.7%, with p < .10 at 81.5% and p < .01 at 21.5%.
- Simmons et al. state that simulation was chosen because deriving closed-form solutions for the combinations would be complex without adding much substantive insight.
- The simulation motivates the [alpha-correction degrees-of-freedom limit](../validations/alpha_correction_degrees_of_freedom_limit.md): error control is hard when the hidden decision tree and dependence among choices are not enumerated.

## Caveats

- Simulations depend on the assumed data-generating process, correlations, sample sizes, and menu of allowed analyses.
- A simulation grid can understate risk if it omits real-world choices such as outcome transformations, exclusions, pilot-study relabeling, or many covariates.
- Simulation estimates error-rate inflation; they do not by themselves identify which published studies used the flexibility.

## Links

- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [alpha-correction degrees-of-freedom limit](../validations/alpha_correction_degrees_of_freedom_limit.md)
- [outcome-measure selection flexibility](../mechanisms/outcome_measure_selection_flexibility.md)
- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md)
- [condition-subset reporting](../mechanisms/condition_subset_reporting.md)
- [study power and false-positive risk](../measures/study_power_false_positive_risk.md)
- [research bias parameter](../measures/research_bias_parameter.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]

## Metadata

- Concept ID: `false_positive_flexibility_simulation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: p-hacking simulation; researcher-degree simulation; null-data flexibility simulation; false-positive-rate simulation
