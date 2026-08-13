# NIH institute payline budget allocation rule

## Summary

NIH institute payline budget allocation rule is the method motif in which percentile-ranked proposals are funded within institute-specific budgets until available funds are exhausted, creating a score-to-award boundary.

## Canonical Form

- Unit of analysis: NIH institute, grant application, percentile score, fiscal-year budget, payline, or award decision.
- Typical representation: rank-ordered proposal list, institute-year funding threshold, payline rule, or near-threshold design.
- Mechanism or measurement target: convert peer-review scores into awards under budget constraints.
- Empirical signature: funding probability changes sharply around institute-specific percentile or priority-score cutoffs, with exceptions for programmatic decisions.

## Uses in Science of Science

- Operational substrate for [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md).
- Supports [funding threshold quasi-experiments](funding_threshold_quasi_experiments.md) when paylines create usable near-cutoff variation.
- Clarifies why [out-of-order funded grant exception](../validations/out_of_order_funded_grant_exception.md) must be tracked.
- Helps interpret [grant peer-review value-added](../validations/grant_peer_review_value_added.md), because the observed funded sample is selected through this allocation rule.

## Operationalization

- Identify institute, fiscal year, review round, score, and award decision for each proposal.
- Reconstruct the rank order of proposals within institute-year or institute-review strata.
- Estimate or record the effective payline where funding probability drops.
- Flag out-of-order awards and unfunded applications above the apparent threshold.
- Use institute and year fixed effects when comparing scores across budget regimes.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) describes NIH grants as ranked by percentile score, with institutes funding applications until budgets are exhausted.
- The paper uses this allocation context to interpret percentile scores and funded-grant selection.
- The same setup motivates checks for out-of-order funded grants and institute-specific controls.
- This motif is distinct from the percentile-score measure: the score ranks proposals, while the payline rule maps ranks into awards.

## Caveats

- Programmatic priorities can override pure score order.
- Reconstructing paylines from funded-only samples can be incomplete.
- Institute budgets, resubmissions, and special initiatives can shift thresholds within the same nominal year.

## Links

- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [NIH study-section review process](nih_study_section_review_process.md)
- [funding threshold quasi-experiments](funding_threshold_quasi_experiments.md)
- [study-section-year fixed-effect identification](study_section_year_fixed_effect_identification.md)
- [out-of-order funded grant exception](../validations/out_of_order_funded_grant_exception.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [funded-only peer-review validation](../validations/funded_only_peer_review_validation.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; SciSciNet: W1975626251; WoS: unknown]

## Metadata

- Concept ID: `nih_institute_payline_budget_allocation_rule`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: institute payline rule; NIH budget rank allocation; percentile-score award rule; grant payline allocation
