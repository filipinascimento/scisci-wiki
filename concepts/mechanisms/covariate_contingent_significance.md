# Covariate-contingent significance

## Summary

Covariate-contingent significance is the mechanism in which a finding is statistically significant only under selected covariate adjustments, making the claim depend on a discretionary model choice.

## Canonical Form

- Unit of analysis: covariate, adjustment set, interaction term, regression specification, ANCOVA model, or reported p-value.
- Typical representation: adjusted-versus-unadjusted results table, covariate specification curve, multiverse grid, or disclosure checklist.
- Mechanism: trying plausible covariates and interactions creates additional paths to a significant result.
- Empirical signature: the main result appears only with a covariate, unadjusted results are omitted, or covariate choice is justified after outcomes are known.

## Uses in Science of Science

- Converts a common [researcher degree of freedom](../validations/researcher_degrees_of_freedom.md) into a model-specification motif.
- Links analytic choice to [selective reporting and publication bias](publication_bias_selective_reporting.md), because only the adjusted model may be shown.
- Supplies a validation check for randomized studies, where covariate adjustment can be useful but should not be the only route to a claim.
- Anchors the covariate-free-result item in the [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md).

## Operationalization

- List all covariates considered, including demographic variables, baseline measures, interactions, and transformations.
- Report the focal estimate with and without each major covariate set.
- Record whether the claim changes sign, magnitude, or significance under covariate removal.
- In randomized designs, distinguish precision-improving planned covariates from post hoc covariates selected because they help the result.
- Use specification curves or multiverse summaries when many covariate choices are plausible.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) simulates flexibility over a gender covariate and a gender-by-treatment interaction.
- That simulation raises the p < .05 false-positive rate to 11.7% when researchers can choose among an unadjusted test, an ANCOVA with a covariate main effect, and an ANCOVA with an interaction.
- Simmons et al.'s demonstration study reports a significant age result with a father's-age covariate, while the covariate-free version is not significant.
- The proposed disclosure solution requires authors to report results without the covariate whenever a covariate-adjusted analysis is used.

## Caveats

- Covariates can improve precision, reduce confounding, or encode planned design information.
- The concern is undisclosed covariate search, not covariate adjustment itself.
- Covariate dependence is not automatically fatal, but it should shift interpretation toward robustness and mechanism checks.

## Links

- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md)
- [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md)
- [outcome-measure selection flexibility](outcome_measure_selection_flexibility.md)
- [optional stopping false positives](optional_stopping_false_positives.md)
- [condition-subset reporting](condition_subset_reporting.md)
- [selective reporting and publication bias](publication_bias_selective_reporting.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]

## Metadata

- Concept ID: `covariate_contingent_significance`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: covariate flexibility; adjusted-only significance; covariate fishing; covariate-free robustness
