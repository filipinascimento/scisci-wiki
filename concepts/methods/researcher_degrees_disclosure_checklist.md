# Researcher-degrees disclosure checklist

## Summary

The researcher-degrees disclosure checklist is a reporting method that asks authors to disclose core design, analysis, exclusion, and covariate choices so readers can evaluate hidden analytic flexibility.

## Canonical Form

- Unit of analysis: manuscript, study, reporting checklist item, reviewer query, or disclosure statement.
- Typical representation: author checklist, reviewer checklist, transparent methods table, appendix, or registered-report comparison.
- Method target: make researcher degrees of freedom visible without requiring every exploratory decision to be eliminated.
- Empirical signature: stopping rules, sample-size justifications, all variables, all conditions, exclusions, and covariate-free results are visible in the report.

## Uses in Science of Science

- Operationalizes a low-cost intervention for [open science interventions](../validations/open_science_interventions.md).
- Provides the reporting counterpart to [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md).
- Gives [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) a concrete enforcement target.
- Bridges preregistration and post hoc transparency: even when a full registration is absent, disclosure can make important choices auditable.

## Operationalization

- Require the data-collection stopping rule and minimum sample-size rationale.
- Treat the [minimum per-cell sample-size guardrail](minimum_per_cell_sample_size_guardrail.md) as the sample-denominator counterpart to stopping-rule disclosure.
- Require the list of all variables and all experimental conditions.
- Require excluded-observation sensitivity results when observations are removed.
- Require covariate-free results when covariates are included.
- Ask reviewers to check compliance through [reviewer transparency enforcement](reviewer_transparency_enforcement.md), tolerate disclosed imperfections, request robustness checks for arbitrary choices, and require [exact-replication flexibility adjudication](exact_replication_flexibility_adjudication.md) when justifications are weak.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) proposes six author requirements and four reviewer guidelines as a disclosure-based response to false-positive flexibility.
- The author-side requirements cover stopping rules, minimum per-cell sample size, all variables, all conditions, exclusion sensitivity, and covariate-free results.
- The reviewer-side guidelines ask reviewers to enforce disclosure, accept imperfect but transparent results, request robustness to arbitrary choices, and use exact replication when analytic justifications are not compelling.
- Simmons et al. demonstrate the checklist by rewriting a deceptively persuasive false-positive study into a requirement-compliant version that exposes the hidden flexibility.
- The same full text supports a reporting boundary in which exploratory results remain useful when labeled or followed by direct confirmation rather than presented as prospectively specified.
- Simmons et al. also frame disclosure as necessary even when data, materials, or study repositories are public, because readers still need to know the relevant researcher degrees of freedom.

## Caveats

- Disclosure does not eliminate whole-study file-drawer bias or guarantee that reported disclosures are truthful.
- The checklist requires journal and reviewer enforcement to change incentives.
- Some fields need adapted versions because sample-size rules, data costs, and ethical constraints differ.
- Disclosure can reveal uncertainty without resolving how much weight a claim deserves.

## Links

- [open science interventions](../validations/open_science_interventions.md)
- [researcher degrees of freedom](../validations/researcher_degrees_of_freedom.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)
- [known-false hypothesis demonstration](known_false_hypothesis_demonstration.md)
- [open data and materials insufficiency](../validations/open_data_materials_insufficiency.md)
- [public repository file-drawer extension](../validations/public_repository_file_drawer_extension.md)
- [outcome-measure selection flexibility](../mechanisms/outcome_measure_selection_flexibility.md)
- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [sequential p-value path instability](../representations/sequential_p_value_path_instability.md)
- [minimum per-cell sample-size guardrail](minimum_per_cell_sample_size_guardrail.md)
- [covariate-contingent significance](../mechanisms/covariate_contingent_significance.md)
- [condition-subset reporting](../mechanisms/condition_subset_reporting.md)
- [exclusion-sensitivity reporting](../validations/exclusion_sensitivity_reporting.md)
- [preregistration and registered reports](../validations/preregistration_registered_reports.md)
- [registered-report in-principle acceptance](../validations/registered_report_in_principle_acceptance.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [reviewer transparency enforcement](reviewer_transparency_enforcement.md)
- [exact-replication flexibility adjudication](exact_replication_flexibility_adjudication.md)
- [exploratory-confirmatory disclosure boundary](../validations/exploratory_confirmatory_disclosure_boundary.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; WoS: unknown]

## Metadata

- Concept ID: `researcher_degrees_disclosure_checklist`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: false-positive disclosure checklist; Simmons disclosure requirements; all-variables all-conditions checklist; reviewer transparency checklist
