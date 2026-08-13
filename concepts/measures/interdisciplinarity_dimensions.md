# Interdisciplinarity dimensions

## Summary

Interdisciplinarity dimensions decompose interdisciplinary knowledge integration into distinct components such as variety, balance, and disparity rather than treating interdisciplinarity as one undifferentiated score.

## Canonical Form

- Unit of analysis: paper, reference list, journal portfolio, institution, funding portfolio, field, or topic set.
- Typical representation: variety count, balance/evenness score, category disparity matrix, Rao-Stirling diversity, or factor scores over interdisciplinarity indicators.
- Measurement target: how many categories are involved, how evenly activity is distributed across them, and how distant those categories are.
- Empirical signature: two papers can have the same composite diversity score but very different mixtures of variety, balance, and disparity.

## Uses in Science of Science

- Refines [diversity measures](diversity_measures.md) for [interdisciplinarity](../mechanisms/interdisciplinarity.md).
- Connects [field classifications](field_classifications.md), [science maps](../representations/science_maps.md), and [science map overlays](../representations/science_map_overlays.md).
- Helps explain why interdisciplinarity has mixed associations with citation impact, novelty, and delayed recognition.

## Operationalization

- Assign cited references or outputs to fields, subject categories, topics, or map regions.
- Compute variety as the number or richness of invoked categories.
- Compute balance as the evenness of the distribution across categories.
- Compute disparity as the distance or dissimilarity among categories, using a citation, co-citation, text, or map-distance matrix.
- Declare [multi-category measure eligibility boundaries](../validations/multi_category_measure_eligibility_boundary.md) when disparity or Rao-Stirling measures require at least two categories.
- Use field benchmarks and within-category concentration measures to check whether increases in variety reflect larger reference lists, neighboring-category growth, or distant integration.
- Run [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md) and [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md) before interpreting one scalar as interdisciplinarity.
- Report a composite only after showing how the components contribute.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) defines variety, balance, and disparity as separable diversity properties and warns against collapsing them uncritically.
- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) uses factor analysis on paper-level interdisciplinarity indicators and recovers components corresponding to variety, balance, and disparity.
- Wang et al. find divergent relationships with citations: long-term citations increase with variety, decrease with balance, and increase with disparity at a decreasing rate.
- Later Wang et al. split-outs add [fixed-effect Poisson QML citation models](../methods/fixed_effect_poisson_qml_citation_model.md), multi-category eligibility checks, [disciplinary-core remote-borrowing strategy](../mechanisms/disciplinary_core_remote_borrowing_strategy.md), and [dimension-targeted interdisciplinarity policy](../methods/dimension_targeted_interdisciplinarity_policy.md).
- Verified full-text evidence from Uzzi et al. (2013) adds a pair-level caveat: interdisciplinary journal pairs have lower conventionality on average than same-discipline pairs, but most interdisciplinary pairs in the 1990s are not novel under the journal-pair z-score threshold.
- This decomposition is stored as separate measure pages for [category variety](category_variety.md), [distributional balance](distributional_balance.md), [category disparity](category_disparity.md), and [Rao-Stirling diversity](rao_stirling_diversity.md), plus a method page for [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md).
- Wang et al.'s source indicators are also split into [Simpson diversity index](simpson_diversity_index.md), [Shannon entropy diversity](shannon_entropy_diversity.md), and [average subject-category dissimilarity](average_subject_category_dissimilarity.md).
- The Wang et al. evidence also creates downstream motifs for [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md), [balanced interdisciplinarity penalty](../mechanisms/balanced_interdisciplinarity_penalty.md), and [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md).
- Verified full-text evidence from Porter and Rafols (2009) shows why decomposed measures matter longitudinally: cited disciplines and references can increase substantially while integration grows more modestly.
- Porter and Rafols also use [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md) to show that scalar indicators should be read with science-map overlays.

## Caveats

- Component values depend on the field taxonomy and distance matrix.
- Balance can be substantively ambiguous: a balanced distribution may mean deep integration, lack of a disciplinary core, or diffusion across weakly connected audiences.
- Composite indices can hide policy-relevant differences among variety, balance, and disparity.

## Links

- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [diversity measures](diversity_measures.md)
- [category variety](category_variety.md)
- [distributional balance](distributional_balance.md)
- [category disparity](category_disparity.md)
- [Simpson diversity index](simpson_diversity_index.md)
- [Shannon entropy diversity](shannon_entropy_diversity.md)
- [average subject-category dissimilarity](average_subject_category_dissimilarity.md)
- [multi-category measure eligibility boundary](../validations/multi_category_measure_eligibility_boundary.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md)
- [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [other-discipline reference ratio](other_discipline_reference_ratio.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [fixed-effect Poisson QML citation model](../methods/fixed_effect_poisson_qml_citation_model.md)
- [dimension-targeted interdisciplinarity policy](../methods/dimension_targeted_interdisciplinarity_policy.md)
- [interdisciplinarity factor-retention diagnostics](../methods/interdisciplinarity_factor_retention_diagnostics.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)
- [WoS 2001 interdisciplinarity article panel](../datasets/wos_2001_interdisciplinarity_article_panel.md)
- [within-subject-category citation share](within_subject_category_citation_share.md)
- [neighboring-field integration growth](../mechanisms/neighboring_field_integration_growth.md)
- [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md)
- [aggregated field-classification robustness](../validations/aggregated_field_classification_robustness.md)
- [multidisciplinary category exclusion robustness](../validations/multidisciplinary_category_exclusion_robustness.md)
- [interdisciplinary pair novelty validation](../validations/interdisciplinary_pair_novelty_validation.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)
- [balanced interdisciplinarity penalty](../mechanisms/balanced_interdisciplinarity_penalty.md)
- [disciplinary-core remote-borrowing strategy](../mechanisms/disciplinary_core_remote_borrowing_strategy.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [science map overlays](../representations/science_map_overlays.md)
- [science maps](../representations/science_maps.md)
- [field classifications](field_classifications.md)
- [longitudinal subject-category locking](../methods/longitudinal_subject_category_locking.md)
- [accessible classification validity tradeoff](../validations/accessible_classification_validity_tradeoff.md)
- [diversity-component map grammar](../representations/diversity_component_map_grammar.md)
- [overlay opportunity scouting](../methods/overlay_opportunity_scouting.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]
- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]
- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `interdisciplinarity_dimensions`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Aliases: variety balance disparity; interdisciplinarity components; diversity dimensions; Rao-Stirling components
