# Grant peer-review value-added

## Summary

Grant peer-review value-added measures whether review scores contain predictive information about future research outputs beyond what can be inferred from applicant history, institution, field, and cohort.

## Canonical Form

- Unit of analysis: grant proposal, peer-review score, applicant, funded project, publication output, or downstream patent.
- Typical representation: review-score coefficient, residual outcome prediction, hit-publication prediction, or patent-link prediction.
- Mechanism or validation target: expert panels may add information about proposed ideas beyond observable applicant credentials.
- Empirical signature: better scores predict later publications, citations, high-impact papers, or patents after rich controls.

## Uses in Science of Science

- Validates whether [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md) produces information rather than only reproducing prestige.
- Should be interpreted alongside [NIH R01 award disparities](nih_r01_award_disparities.md), because score predictive validity and demographic fairness are different validation targets.
- Separates proposal-quality signals from funding-treatment effects in [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md).
- Provides a benchmark for alternative allocation designs such as partial lotteries, blinding, portfolio funding, or prediction-assisted review.

## Operationalization

- Link proposal scores to funded-project outputs, including publications, field-normalized citations, hit papers, acknowledgments, and patents.
- Preserve the [PubMed-WoS grant citation crosswalk](../methods/pubmed_wos_grant_citation_crosswalk.md) when citation data are attached to PubMed grant acknowledgments.
- Compare proposals within field, study-section, institute, and review-year strata.
- Add applicant publication history, grant history, career stage, institutional prestige, gender, ethnicity, and prior hit-paper controls.
- Add grant-dollar controls, rare-name matching checks, and low-track-record subgroup tests when the design depends on applicant histories.
- Interpret coefficients separately for average outputs, tail outcomes, and downstream technological traces.

## Evidence and Validations

- Verified full-text evidence from Li and Agha (2015) studies more than 130,000 NIH R01 grants funded from 1980 to 2008 and links review scores to later publication, citation, and patent outcomes.
- The paper defines peer review's value-added as the degree to which score differences predict future research productivity and impact beyond applicant characteristics.
- Li and Agha report that worse NIH percentile scores among funded grants are associated with fewer later publications and citations, even after study-section-by-year and institute controls.
- The full text also reports stronger predictive value for tail outcomes: worse scores predict fewer top-cited publications and less direct or indirect patenting.
- The authors emphasize a boundary condition: because the sample is funded grants, the design cannot directly test whether rejected proposals include high-potential work.
- A residual Li and Agha pass adds [reviewer information-set citation censoring](../methods/reviewer_information_set_citation_censoring.md), [publication-history functional-form stress test](publication_history_functional_form_stress_test.md), [grant-output dispersion screening value](../mechanisms/grant_output_dispersion_screening_value.md), and [NIH institute payline budget allocation rule](../methods/nih_institute_payline_budget_allocation_rule.md) as design and mechanism refinements.
- Additional robustness checks split out here include [PI-authored publication linkage robustness](pi_authored_publication_linkage_robustness.md), [funding amount channel robustness](funding_amount_channel_robustness.md), [rare-name applicant match robustness](rare_name_applicant_match_robustness.md), [identification-at-infinity funded-grant check](identification_at_infinity_funded_grant_check.md), and [low-track-record applicant subgroup validation](low_track_record_applicant_subgroup_validation.md).
- The input score, process, data panel, linkage workflow, fixed-effect identification, tail outcomes, residual diagnostics, and design boundary are split into [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md), [NIH study-section review process](../methods/nih_study_section_review_process.md), [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md), [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md), [study-section-year fixed-effect identification](../methods/study_section_year_fixed_effect_identification.md), [grant hit-publication tail](../measures/grant_hit_publication_tail.md), [peer-review hit-miss asymmetry](peer_review_hit_miss_asymmetry.md), [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md), [grant-patent lag truncation bias](grant_patent_lag_truncation_bias.md), [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md), [residual review-score response curve](residual_review_score_response_curve.md), [out-of-order funded grant exception](out_of_order_funded_grant_exception.md), and [funded-only peer-review validation](funded_only_peer_review_validation.md).

## Caveats

- Funded-proposal samples cannot fully evaluate the counterfactual quality of rejected proposals.
- Scores may encode applicant reputation, reviewer networks, or topic fit unless controls and designs handle those channels.
- Predictive validity is not the same as fairness, risk tolerance, novelty support, or social value.

## Links

- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [NIH R01 award disparities](nih_r01_award_disparities.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [NIH peer-review percentile score](../measures/nih_peer_review_percentile_score.md)
- [NIH study-section review process](../methods/nih_study_section_review_process.md)
- [NIH institute payline budget allocation rule](../methods/nih_institute_payline_budget_allocation_rule.md)
- [study-section-year fixed-effect identification](../methods/study_section_year_fixed_effect_identification.md)
- [NIH IMPAC R01 grant panel](../datasets/nih_impac_r01_grant_panel.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [reviewer information-set citation censoring](../methods/reviewer_information_set_citation_censoring.md)
- [publication-history functional-form stress test](publication_history_functional_form_stress_test.md)
- [PubMed-WoS grant citation crosswalk](../methods/pubmed_wos_grant_citation_crosswalk.md)
- [grant hit-publication tail](../measures/grant_hit_publication_tail.md)
- [grant-output dispersion screening value](../mechanisms/grant_output_dispersion_screening_value.md)
- [peer-review hit-miss asymmetry](peer_review_hit_miss_asymmetry.md)
- [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md)
- [grant-patent lag truncation bias](grant_patent_lag_truncation_bias.md)
- [applicant prestige-residualization stack](applicant_prestige_residualization_stack.md)
- [residual review-score response curve](residual_review_score_response_curve.md)
- [out-of-order funded grant exception](out_of_order_funded_grant_exception.md)
- [funded-only peer-review validation](funded_only_peer_review_validation.md)
- [PI-authored publication linkage robustness](pi_authored_publication_linkage_robustness.md)
- [funding amount channel robustness](funding_amount_channel_robustness.md)
- [rare-name applicant match robustness](rare_name_applicant_match_robustness.md)
- [identification-at-infinity funded-grant check](identification_at_infinity_funded_grant_check.md)
- [low-track-record applicant subgroup validation](low_track_record_applicant_subgroup_validation.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [patent paper links](../datasets/patent_paper_links.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]

## Metadata

- Concept ID: `grant_peer_review_value_added`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Li and Agha (2015) (2015)
- Latest seen paper: Li and Agha (2015) (2015)
- Primary reference DOI: `10.1126/science.aaa0185`
- OpenAlex ID: `W1975626251`
- Dimensions ID: `pub.1030280448`
- SciSciNet ID: `W1975626251`
- Aliases: peer-review predictive validity; grant score value-added; proposal-score validity; review-score signal
