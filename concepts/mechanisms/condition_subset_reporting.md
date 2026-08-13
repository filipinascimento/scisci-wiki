# Condition-subset reporting

## Summary

Condition-subset reporting is the mechanism in which researchers run more experimental conditions than the published comparison reveals and then report the subset or contrast that best supports a claim.

## Canonical Form

- Unit of analysis: experimental condition, contrast, subgroup, manipulation arm, or condition-comparison set.
- Typical representation: all-conditions table, contrast matrix, condition-subset multiverse, or reporting checklist.
- Mechanism: multiple possible contrasts among conditions create additional opportunities for significant or narratively clean results.
- Empirical signature: omitted conditions, unexplained pairwise contrasts, failed manipulations hidden from the main report, or inconsistent condition choices across studies.

## Uses in Science of Science

- Makes condition selection a concrete instance of [selective reporting and publication bias](publication_bias_selective_reporting.md).
- Complements [outcome-measure selection flexibility](outcome_measure_selection_flexibility.md) by focusing on the design side rather than the measurement side.
- Provides a reporting target for [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md) and preregistration audits.
- Helps replication teams recover the actual design space behind a published focal contrast.

## Operationalization

- Require a complete list of experimental conditions, including failed or unused manipulations.
- Recompute focal claims across all relevant pairwise comparisons and planned trend tests.
- Compare reported condition sets with preregistrations, materials, trial records, or data files.
- Mark whether omitted conditions change the theoretical interpretation or only add noise.
- Treat unexplained post hoc condition pooling or dropping as a disclosure issue.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) simulates a three-condition design where researchers can report any two-condition comparison or the trend across all three conditions.
- That condition-selection flexibility raises the p < .05 false-positive rate to 12.6% under the null.
- Their requirement-compliant demonstration discloses an additional condition that was omitted from the more persuasive original-style report.
- Simmons et al. argue that conceptual replications are not a solution when different studies can select different condition pairs and different measures.

## Caveats

- Planned contrasts and failed manipulation checks can justify focusing on a subset, but the full condition set still matters for interpretation.
- Some conditions may be exploratory by design; the key is whether the confirmatory claim depends on hidden alternatives.
- Complete condition reporting can be concise when raw materials, appendices, or registries are used well.

## Links

- [selective reporting and publication bias](publication_bias_selective_reporting.md)
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

- Concept ID: `condition_subset_reporting`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: selective condition reporting; hidden conditions; condition comparison flexibility; contrast selection
