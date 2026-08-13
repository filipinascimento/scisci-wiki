# Novelty penalty

## Summary

Novelty penalty describes the evaluation disadvantage faced by highly novel work when evaluators, journals, funders, or short citation windows rely on signals that favor familiar, already legible research.

## Canonical Form

- Unit of analysis: paper, proposal, journal placement, citation window, evaluator decision, or research portfolio.
- Typical representation: novelty score, journal impact factor residual, early-versus-long citation trajectory, proposal score, or delayed-recognition profile.
- Mechanism: novel work is harder to judge, often slower to accumulate citations, and may fit less well with prestigious venues or conventional review criteria.
- Empirical signature: novel work has higher long-run upside but receives weaker short-run bibliometric or venue signals than comparable non-novel work.

## Uses in Science of Science

- Adds an evaluation mechanism to [novelty and conventionality](novelty_conventionality.md).
- Explains why [responsible metrics](../measures/responsible_metrics.md) should treat short citation windows and journal impact factor cautiously.
- Links the broad mechanism to specific validation motifs: [novelty short-window undercount](../validations/novelty_short_window_undercount.md) and [journal impact factor novelty bias](../validations/journal_impact_factor_novelty_bias.md).
- Connects [funding incentives and exploration](funding_incentives_and_exploration.md), [peer review gatekeeping](peer_review_gatekeeping.md), and [research strategy risk-reward](research_strategy_risk_reward.md).
- Residual Wang et al. split-outs add [historical newness lookback window](../validations/historical_newness_lookback_window.md), [direct-indirect novelty impact split](../validations/direct_indirect_novelty_impact_split.md), [novelty-measure eligibility denominator](../validations/novelty_measure_eligibility_denominator.md), and [journal-pair entity proxy boundary](../validations/journal_pair_entity_proxy_boundary.md).

- A residual Wang novelty pass adds [exploratory novelty public-support rationale](exploratory_novelty_public_support_rationale.md), [novelty-sensitive indicator portfolio](../methods/novelty_sensitive_indicator_portfolio.md), [field-readiness novelty delay](field_readiness_novelty_delay.md), [central-journal gatekeeping obstacle](central_journal_gatekeeping_obstacle.md), [journal-age/newness confound check](../validations/journal_age_newness_confound_check.md), [co-cited-journal common-friend distance](../measures/co_cited_journal_common_friend_distance.md), [reference-pair opportunity control](../validations/reference_pair_opportunity_control.md), [generalized negative-binomial dispersion model](../methods/generalized_negative_binomial_dispersion_model.md), [indirect-impact direct-citation control](../validations/indirect_impact_direct_citation_control.md), [citing-big-hit follow-up sufficiency filter](../validations/citing_big_hit_followup_sufficiency_filter.md), and [small-field dispersion reliability filter](../validations/small_field_dispersion_reliability_filter.md).
## Operationalization

- Measure novelty through [new journal-pair novelty](../measures/new_journal_pair_novelty.md), rare cited-field combinations, concept pairs, or semantic entities.
- Compare highly novel, moderately novel, and non-novel papers on long-window citations, short-window citations, indirect impact, and journal placement.
- Test whether novelty effects persist after field, journal age, team size, author count, references, and other confounders.
- For funding or review studies, compare novelty by proposal score, funding outcome, status group, and later output.
- When funding systems are the treatment, test subgroup interactions because average novelty effects can hide status-specific penalties.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) studies 2001 Web of Science article subject-category observations and measures novelty as new combinations of referenced journals.
- The paper reports a high-risk/high-gain profile: highly novel papers receive more long-run citations on average and are more likely to become top 1% cited papers, but their citation performance has higher variance.
- Wang et al. report that highly novel papers have 36% higher odds of being big hits over a 13-year window, while also showing delayed direct citation recognition.
- The full text reports that novel papers are published in journals with lower-than-expected impact factors and can look weaker under short citation windows, creating a metric bias against novelty.
- The same full-text cluster shows that novel papers have greater low-citation-tail risk and that high-JIF placement speeds citations overall but does not remove the delayed-recognition interaction for highly novel papers.
- The residual validation pass separates finite historical lookback windows, direct versus indirect downstream impact, novelty-eligible denominators, and the journal-pair proxy boundary from the broader novelty-penalty mechanism.
- Verified full-text evidence from Boudreau et al. (2016) adds a pre-publication peer-review channel: highly novel proposals receive lower review scores, with the discount concentrated in the right tail of proposal novelty.
- Boudreau et al. further show that this proposal-novelty result survives a [novelty robustness specification sweep](../validations/novelty_robustness_specification_sweep.md) and motivate [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md) as a possible intervention.
- Verified full-text evidence from Wang, Lee, and Walsh (2018) adds a funding-system channel: competitive project funding can be associated with lower novelty for junior and female researchers even when its average association with novelty is positive.

## Caveats

- Bibliometric novelty is not the same as conceptual, methodological, data, or theory novelty.
- Some highly novel combinations may be low quality, miscoded, or outside the comparison field.
- Delayed recognition means evaluation windows are part of the mechanism, not a neutral measurement detail.

## Links

- [novelty and conventionality](novelty_conventionality.md)
- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md)
- [highly novel paper class](../measures/highly_novel_paper_class.md)
- [novelty impact dispersion](../measures/novelty_impact_dispersion.md)
- [novel research low-citation tail](../validations/novel_research_low_citation_tail.md)
- [novelty indirect big-hit stimulation](novelty_indirect_big_hit_stimulation.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [journal impact factor novelty bias](../validations/journal_impact_factor_novelty_bias.md)
- [high-JIF novelty delay interaction](../validations/high_jif_novelty_delay_interaction.md)
- [new journal-pair novelty filter robustness](../validations/new_journal_pair_novelty_filter_robustness.md)
- [historical newness lookback window](../validations/historical_newness_lookback_window.md)
- [direct-indirect novelty impact split](../validations/direct_indirect_novelty_impact_split.md)
- [novelty-measure eligibility denominator](../validations/novelty_measure_eligibility_denominator.md)
- [journal-pair entity proxy boundary](../validations/journal_pair_entity_proxy_boundary.md)
- [novelty-atypicality distinction](../validations/novelty_atypicality_distinction.md)
- [funding model status contingency](funding_model_status_contingency.md)
- [funding status-interaction test](../validations/funding_status_interaction_test.md)
- [block-funding novelty buffer](block_funding_novelty_buffer.md)
- [proposal MeSH novelty percentile](../measures/proposal_mesh_novelty_percentile.md)
- [right-tail novelty review discount](right_tail_novelty_review_discount.md)
- [novelty robustness specification sweep](../validations/novelty_robustness_specification_sweep.md)
- [novelty-aware review calibration](../methods/novelty_aware_review_calibration.md)
- [reviewer-proposal intellectual distance](../measures/reviewer_proposal_intellectual_distance.md)
- [tail novelty](../measures/tail_novelty.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [research strategy risk-reward](research_strategy_risk_reward.md)
- [scientific problem choice](scientific_problem_choice.md)
- [funding incentives and exploration](funding_incentives_and_exploration.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [delayed recognition and prematurity](delayed_recognition.md)
- [interdisciplinary citation delay](interdisciplinary_citation_delay.md)
- [citation window selection](../methods/citation_window_selection.md)

- [exploratory novelty public-support rationale](exploratory_novelty_public_support_rationale.md)
- [novelty-sensitive indicator portfolio](../methods/novelty_sensitive_indicator_portfolio.md)
- [field-readiness novelty delay](field_readiness_novelty_delay.md)
- [generalized negative-binomial dispersion model](../methods/generalized_negative_binomial_dispersion_model.md)
## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]
- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]
- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]
- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]
- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `novelty_penalty`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Aliases: bias against novelty; delayed novelty recognition; short-window citation bias; novelty evaluation penalty
