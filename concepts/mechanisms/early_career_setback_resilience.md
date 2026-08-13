# Early-career setback and resilience

## Summary

Early-career setback and resilience is the motif that near-threshold failures can alter later scientific careers, sometimes revealing or producing stronger long-run impact among those who persist.

## Canonical Form

- Unit of analysis: early-career researcher, proposal, funding threshold, career trajectory, or later publication output.
- Typical representation: near-miss versus narrow-win comparison around a funding cutoff, followed by longitudinal outcome tracking.
- Mechanism: setbacks may screen out some researchers, change strategy, intensify effort, or redirect support networks; observed long-run gains are conditional on remaining active.
- Empirical signature: researchers just below a threshold differ from those just above it in future persistence, publication impact, or funding trajectories.

## Uses in Science of Science

- Links [funding incentives and exploration](funding_incentives_and_exploration.md) to career-level consequences.
- Extends [scientific career impact](scientific_career_impact.md) by treating early events as quasi-experimental shocks.
- Provides a concrete validation design for claims about funding, selection, and persistence.

## Operationalization

- Identify a decision threshold with strong discontinuity in treatment probability, such as a grant payline.
- Use [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md) to separate score proximity from treatment status when the cutoff creates a sharp change in funding probability.
- Compare near-miss and narrow-win applicants close to the threshold.
- Track future publications, hit-paper probability, field-normalized citations, funding, and attrition.
- Add translational outcomes such as [clinical-trial publication share](../measures/clinical_trial_publication_share.md), [clinical-trial citation share](../measures/clinical_trial_citation_share.md), and [approximate potential to translate](../measures/approximate_potential_to_translate.md) when the domain is biomedical.
- Use matching or regression discontinuity to test whether outcomes are plausibly caused by the setback.
- Validate threshold designs with [near-threshold pretreatment balance panel](../validations/near_threshold_pretreatment_balance_panel.md) and [funding-threshold running-variable manipulation check](../validations/funding_threshold_running_variable_manipulation_check.md).
- Audit post-treatment mechanisms with [near-miss post-treatment funding noncompensation](../validations/near_miss_post_treatment_funding_noncompensation.md), [active-PI definition robustness](../validations/active_pi_definition_robustness.md), [nonclinical impact-translation confound check](../validations/nonclinical_impact_translation_confound_check.md), and [observable setback-mechanism battery](../validations/observable_setback_mechanism_battery.md).
- Keep the data, grouping, method, and validation layers separate through [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md), [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md), [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md), and [setback screening-effect check](../validations/setback_screening_effect_check.md).

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) studies junior principal investigators whose first NIH R01 application fell close to the funding threshold.
- The paper compares 561 narrow wins and 623 near misses and reports that near misses had more than a 10% higher chance of permanently disappearing from the NIH system.
- Conditional on remaining active, near misses outperformed narrow wins in later impact: the full text reports higher hit-paper probability and higher five-year citation averages in both the first and second five-year windows after treatment.
- The paper reports robustness across hit thresholds, normalized citations, field definitions, publication lags, name disambiguation methods, matching, and fuzzy regression discontinuity; the RD estimates indicate that an early-career near miss increases later hit-paper probability and average citations.
- Wang et al. also report that the near-miss advantage extends beyond citations to clinical-trial publication share, clinical-trial citation share, and approximate potential to translate.
- Their alternative-mechanism audit finds that observable shifts in hot topics, collaboration, research direction, and institutions do not fully explain the performance gap.
- The paper's policy interpretation is split into [setback policy no-roadblocks guardrail](../validations/setback_policy_no_roadblocks_guardrail.md), which preserves the distinction between survivor-conditioned outperformance and elevated attrition.
- The lower-level motifs now split this evidence into [early-career setback attrition](early_career_setback_attrition.md), [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md), [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md), and [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md).

## Caveats

- Results are conditional on survivors; attrition is part of the mechanism, not just a nuisance.
- NIH R01 paylines are a specific biomedical funding context and may not generalize to all fields or countries.
- Near-miss effects can combine treatment, selection, motivation, institutional support, and alternative funding.

## Links

- [scientific career impact](scientific_career_impact.md)
- [funding incentives and exploration](funding_incentives_and_exploration.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md)
- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [clinical-trial publication share](../measures/clinical_trial_publication_share.md)
- [clinical-trial citation share](../measures/clinical_trial_citation_share.md)
- [approximate potential to translate](../measures/approximate_potential_to_translate.md)
- [early-career setback attrition](early_career_setback_attrition.md)
- [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md)
- [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md)
- [near-threshold pretreatment balance panel](../validations/near_threshold_pretreatment_balance_panel.md)
- [funding-threshold running-variable manipulation check](../validations/funding_threshold_running_variable_manipulation_check.md)
- [near-miss post-treatment funding noncompensation](../validations/near_miss_post_treatment_funding_noncompensation.md)
- [active-PI definition robustness](../validations/active_pi_definition_robustness.md)
- [nonclinical impact-translation confound check](../validations/nonclinical_impact_translation_confound_check.md)
- [observable setback-mechanism battery](../validations/observable_setback_mechanism_battery.md)
- [setback policy no-roadblocks guardrail](../validations/setback_policy_no_roadblocks_guardrail.md)
- [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md)
- [setback screening-effect check](../validations/setback_screening_effect_check.md)
- [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md)
- [setback alternative-mechanism audit](../validations/setback_alternative_mechanism_audit.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [reputation effects](reputation_effects.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]
- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]
- Azoulay, P., Graff Zivin, J. S., & Manso, G. (2009). Incentives and Creativity: Evidence from the Academic Life Sciences. *NBER Working Paper*, 15466. https://doi.org/10.3386/w15466 [OpenAlex: W3024332105; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `early_career_setback_resilience`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Aliases: near miss; narrow win; career resilience; early setback; funding threshold shock
