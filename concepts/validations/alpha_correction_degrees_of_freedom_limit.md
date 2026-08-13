# Alpha-correction degrees-of-freedom limit

## Summary

Alpha-correction degrees-of-freedom limit is the validation problem that Bonferroni-style alpha adjustment is difficult to apply to hidden researcher degrees of freedom because the number and dependence of analytic choices are unclear.

## Canonical Form

- Unit of analysis: alpha threshold, analytic path, multiple-testing correction, researcher degree of freedom, or false-positive control rule.
- Typical representation: alpha-correction caveat, uncounted-tests warning, decision-path inventory, or correction-rule insufficiency.
- Validation target: determine whether nominal alpha correction can control error rates when flexible data collection and analysis choices are not fully enumerated.
- Empirical signature: p-value thresholds are adjusted for declared tests but not for hidden choices about outcomes, exclusions, covariates, sample size, or condition subsets.

## Uses in Science of Science

- Qualifies [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md) and [researcher degrees of freedom](researcher_degrees_of_freedom.md).
- Explains why disclosure can be more practical than trying to retroactively adjust alpha for undisclosed flexibility.
- Links to [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md), optional stopping, outcome selection, and condition-subset reporting.
- Supports [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md) as a complementary solution.

## Operationalization

- Inventory every analysis path actually available to the researcher, not only reported tests.
- Determine whether alpha adjustment rules exist for the combined set of choices.
- Check whether dependence among tests and sequential decisions is modeled.
- Treat alpha correction as incomplete when the decision tree cannot be reconstructed.
- Prefer prospective specification or full disclosure before applying correction logic.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) considers alpha-level correction as a possible solution and rejects it as insufficient for researcher degrees of freedom.
- The paper argues that it is unclear which and how many degrees of freedom contribute to a finding and therefore unclear how much each affects the false-positive rate.
- Simmons et al. also warn that without explicit rules for every degree of freedom and their combinations, alpha correction introduces additional ambiguity.
- Their simulations show that combinations of flexible decisions can inflate false-positive rates far beyond the nominal 5% threshold.

## Caveats

- Alpha correction remains appropriate for clearly specified families of tests.
- This limit is strongest when flexibility is hidden, sequential, or partly qualitative.
- Preanalysis plans and multiverse specifications can make correction more feasible.
- Disclosure does not itself set an adjusted alpha; it makes the decision space visible.

## Links

- [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md)
- [researcher degrees of freedom](researcher_degrees_of_freedom.md)
- [analytic flexibility and false-positive risk](analytic_flexibility_false_positives.md)
- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [outcome-measure selection flexibility](../mechanisms/outcome_measure_selection_flexibility.md)
- [condition-subset reporting](../mechanisms/condition_subset_reporting.md)
- [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]

## Metadata

- Concept ID: `alpha_correction_degrees_of_freedom_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: Bonferroni p-hacking limit; alpha adjustment flexibility caveat; hidden degrees alpha correction; multiple-testing correction insufficiency
