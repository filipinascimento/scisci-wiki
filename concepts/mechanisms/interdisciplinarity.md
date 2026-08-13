# Interdisciplinarity

## Summary

Interdisciplinarity describes the integration or combination of knowledge from multiple fields, often measured through variety, balance, disparity, and coherence among referenced or produced domains.

## Canonical Form

- Unit of analysis: paper, author, team, institution, field, or portfolio.
- Typical representation: distribution over fields, journals, topics, or citation-network regions.
- Mechanism: distant knowledge combinations can create new problem framings but may face evaluation and communication barriers.
- Empirical signature: references, concepts, or collaborators span otherwise distant scientific areas.

## Uses in Science of Science

- Used to study novelty, field emergence, team composition, funding policy, and evaluation bias.
- Provides a measurable bridge between science maps and mechanisms of recombination.
- Helps identify boundary-spanning papers and institutions.

## Operationalization

- Assign papers/references to fields, journals, topics, or map regions.
- Measure variety, balance, disparity, Rao-Stirling diversity, or network coherence.
- Validate with expert labels, grant categories, journal scopes, and downstream impact measures.
- Keep [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md) separate when interpreting impact or delay effects.
- Use [interdisciplinarity benchmark field panels](../datasets/interdisciplinarity_benchmark_field_panel.md), [WoS 2001 interdisciplinarity article panels](../datasets/wos_2001_interdisciplinarity_article_panel.md), [within-subject-category citation share](../measures/within_subject_category_citation_share.md), and [science map overlays](../representations/science_map_overlays.md) to distinguish broadening from distant integration.
- Add [knowledge-integration proxy boundary](../validations/knowledge_integration_proxy_boundary.md) when moving from bibliometric diversity or collaboration breadth to claims about cognitive integration.
- For policy applications, use [policy-program metric feedback loops](../methods/policy_program_metric_feedback_loop.md) and [overlay metric explanation pairing](../representations/overlay_metric_explanation_pairing.md) so scalar indicators can be interpreted against benchmark maps and program goals.

## Evidence and Validations

- Porter and Rafols' verified full text measures six research domains from 1975 to 2005 with bibliometric indicators, Rao-Stirling diversity, and science-map visualization. They find large increases in cited disciplines/references and coauthors, but only modest growth in the integration score, suggesting mostly neighboring-field recombination.
- Their evidence supports [neighboring-field integration growth](neighboring_field_integration_growth.md): cited subject-category count increases substantially, but new categories are often nearby and have small citation shares.
- Their full text also supports [reference-list length growth confound](../validations/reference_list_length_growth_confound.md), [team-authorship interdisciplinarity non-equivalence](../validations/team_authorship_interdisciplinarity_non_equivalence.md), [interdisciplinarity diversity saturation effect](../validations/interdisciplinarity_diversity_saturation_effect.md), and [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md) as interpretation checks.
- Verified full-text evidence from Stirling (2007) supplies the measurement foundation for this motif by decomposing diversity into variety, balance, and disparity and warning that these components should not be collapsed uncritically.
- Stirling's full text also motivates [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md), [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md), and [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md) as checks on interdisciplinarity measurement.
- Wang, Thijs, and Glanzel's verified PLOS full text separates variety, balance, and disparity with factor analysis over 646,669 papers. Their results show that these dimensions have different citation associations, including positive long-run effects for variety and disparity and negative effects for balance.
- The motif should therefore be stored as a multidimensional representation of knowledge integration, not a single scalar unless the application requires a compact index.
- Verified full-text evidence from Wang et al. (2015) also supports [interdisciplinary citation delay](interdisciplinary_citation_delay.md): variety and disparity are negatively associated with short-term citations but positively associated with long-term citations.
- The same paper adds [balanced interdisciplinarity penalty](balanced_interdisciplinarity_penalty.md), [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md), and [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md) as separate motifs.
- A later Porter and Rafols split isolates the boundary between measured spread across categories, collaboration growth, and direct evidence that knowledge has been integrated.
- Another Porter and Rafols pass adds match-yield audits, sparse-category backbone caveats, metric-feedback loops, and overlay explanation pairing as reusable pieces of longitudinal interdisciplinarity evaluation.

## Caveats

- Interdisciplinary work can be high-risk, low-fit with evaluation categories, and hard to compare across datasets.
- Field taxonomies and distance metrics strongly shape the result.
- Short citation windows can systematically understate some kinds of interdisciplinary work.

## Links

- [novelty conventionality](novelty_conventionality.md)
- [science maps](../representations/science_maps.md)
- [science map overlays](../representations/science_map_overlays.md)
- [diversity measures](../measures/diversity_measures.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [category variety](../measures/category_variety.md)
- [distributional balance](../measures/distributional_balance.md)
- [category disparity](../measures/category_disparity.md)
- [Rao-Stirling diversity](../measures/rao_stirling_diversity.md)
- [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [diversity aggregation-weight sensitivity](../validations/diversity_aggregation_weight_sensitivity.md)
- [other-discipline reference ratio](../measures/other_discipline_reference_ratio.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [interdisciplinarity benchmark field panel](../datasets/interdisciplinarity_benchmark_field_panel.md)
- [WoS 2001 interdisciplinarity article panel](../datasets/wos_2001_interdisciplinarity_article_panel.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [within-subject-category citation share](../measures/within_subject_category_citation_share.md)
- [neighboring-field integration growth](neighboring_field_integration_growth.md)
- [reference-list length growth confound](../validations/reference_list_length_growth_confound.md)
- [team-authorship interdisciplinarity non-equivalence](../validations/team_authorship_interdisciplinarity_non_equivalence.md)
- [interdisciplinarity diversity saturation effect](../validations/interdisciplinarity_diversity_saturation_effect.md)
- [subject-category similarity matrix sensitivity](../validations/subject_category_similarity_matrix_sensitivity.md)
- [interdisciplinarity metric-map triangulation](../validations/interdisciplinarity_metric_map_triangulation.md)
- [policy-program metric feedback loop](../methods/policy_program_metric_feedback_loop.md)
- [cited subject-category match-yield audit](../validations/cited_subject_category_match_yield_audit.md)
- [low-citation category backbone instability](../validations/low_citation_category_backbone_instability.md)
- [overlay metric explanation pairing](../representations/overlay_metric_explanation_pairing.md)
- [knowledge-integration proxy boundary](../validations/knowledge_integration_proxy_boundary.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)
- [balanced interdisciplinarity penalty](balanced_interdisciplinarity_penalty.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)
- [interdisciplinary citation delay](interdisciplinary_citation_delay.md)
- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [field classifications](../measures/field_classifications.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]
- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- Rafols, I., & Meyer, M. (2010). Diversity and network coherence as indicators of interdisciplinarity. *Scientometrics*, 82, 263-287. https://doi.org/10.1007/s11192-009-0041-y [OpenAlex: W2117269329; Dimensions: pub.1029454254; WoS: unknown]
- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `interdisciplinarity`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Aliases: knowledge integration; diversity; disparity; coherence
