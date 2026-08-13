# Disruption measure validation

## Summary

Disruption measure validation checks whether citation-network disruption scores align with independent evidence about disruptive versus developmental work.

## Canonical Form

- Unit of analysis: paper, patent, citation neighborhood, expert-nominated work, article type, title/abstract language, or prize-linked work.
- Typical representation: validation battery, expert agreement, prize enrichment, review-article contrast, eponym/reference-language contrast, or lexical diagnostic.
- Validation target: whether [disruption index](../measures/disruption_index.md) captures redirection versus development rather than only citation volume.
- Empirical signature: works independently regarded as path-breaking score more disruptive, while reviews and explicit extensions score more developmental.

## Uses in Science of Science

- Provides robustness scaffolding for [disruption and consolidation](../mechanisms/disruption_consolidation.md).
- Helps users decide when disruption scores are appropriate for evaluation, historical analysis, or policy design.
- Connects structural citation measures to text, expert judgment, and recognized prizes.
- Gives [responsible metrics](../measures/responsible_metrics.md) a concrete example of validating a metric with multiple external checks.

## Operationalization

- Validate against expert-labeled disruptive and developmental examples.
- Compare prize-linked or canonical breakthrough papers to matched field/year controls.
- Use document types such as review articles as expected developmental cases.
- Test whether titles and abstracts contain language associated with disrupting or developing previous work.
- Check sensitivity to self-citations, citation windows, reference coverage, field, and time.
- Recompute [CD-index time windows](../measures/cd_index_time_windows.md) and [modified CD index](../measures/modified_cd_index.md) variants when the research question mixes direction and citation magnitude.
- Use [alternative CD-index derivation robustness](alternative_cd_index_derivation_robustness.md) when a conclusion depends on a specific CD-index formula or normalization.
- Use [disruption variant robustness grid](disruption_variant_robustness_grid.md) when a team-size or cross-domain conclusion should be checked against Wu-style `D0`-`D4` disruption definitions.
- Use [cross-corpus disruptiveness replication](cross_corpus_disruptiveness_replication.md) to distinguish source-specific artifacts from multi-source disruption trends.
- Use [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md) when the risk is that changing citation practices, degree structure, or citation ages explain the observed disruption pattern.
- Use [high-quality disruption-decline check](high_quality_disruption_decline_check.md) and [disruptiveness practice-control stack](disruptiveness_practice_control_stack.md) to separate disruption trends from quality proxies and publication/citation/authorship-practice confounds.
- Use [disruptive language shift](disruptive_language_shift.md) and title-based measures when citation-network trends need text-based corroboration.
- Use [eponymous prior-work extension signal](eponymous_prior_work_extension_signal.md) when front-matter references to cited predecessors can validate developmental framing.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) reports five independent validation analyses for disruption scores.
- Their validation suite includes Nobel Prize papers, an expert survey, review articles versus original research, informal eponymous references to prior authors or concepts, and title/abstract words distinguishing disruptive from developing work.
- Wu et al. also compare disruption variants that exclude self-citations, restrict to popular predecessors, and use simplified focal-only citing fractions.
- Wu et al. report that Nobel-linked papers rank among the most disruptive and that expert-nominated disruptive/developing papers align strongly with the score.
- The paper also finds that review articles are substantially more developmental and that developing papers are more likely to explicitly reference prior authors or named concepts.
- Follow-on split pages now isolate Wu et al.'s [eponymous prior-work extension signal](eponymous_prior_work_extension_signal.md), [disruption citation-tree visualization](../representations/disruption_citation_tree_visualization.md), [team-size distribution contrast tests](team_size_distribution_contrast_tests.md), and [large-team author-disambiguation bias](large_team_author_disambiguation_bias.md).
- Verified full-text evidence from Park et al. (2023) adds a network-null validation layer: rewired citation networks preserving citation counts and age gaps still produce higher CD5 values than the observed networks.
- Park et al. also add text-based corroboration through title-word diversity, title-combination novelty, and changes in verbs associated with creation, discovery, improvement, application, and assessment.
- Park et al. also report replication across JSTOR, APS, MAG, and PubMed corpora, high-quality subset checks, normalized CD-index variants, and publication/citation/authorship practice controls.
- Verified full-text evidence from Funk and Owen-Smith (2017) adds patent-specific validation layers: [patent disruption face-validity cases](patent_disruption_face_validity_cases.md), [patent importance measure divergence](patent_importance_measure_divergence.md), and [CD-index undefined cases](cd_index_undefined_cases.md).

## Caveats

- Expert and prize labels are selective and status-laden; they validate extremes better than mid-range cases.
- Lexical signals can vary by field, genre, and period.
- Validation against citation behavior does not make disruption equivalent to quality, truth, or social value.

## Links

- [disruption index](../measures/disruption_index.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [modified CD index](../measures/modified_cd_index.md)
- [CD-index undefined cases](cd_index_undefined_cases.md)
- [patent disruption face-validity cases](patent_disruption_face_validity_cases.md)
- [patent importance measure divergence](patent_importance_measure_divergence.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [cross-corpus disruptiveness replication](cross_corpus_disruptiveness_replication.md)
- [high-quality disruption-decline check](high_quality_disruption_decline_check.md)
- [disruptiveness practice-control stack](disruptiveness_practice_control_stack.md)
- [alternative CD-index derivation robustness](alternative_cd_index_derivation_robustness.md)
- [disruption variant robustness grid](disruption_variant_robustness_grid.md)
- [eponymous prior-work extension signal](eponymous_prior_work_extension_signal.md)
- [disruption citation-tree visualization](../representations/disruption_citation_tree_visualization.md)
- [team-size distribution contrast tests](team_size_distribution_contrast_tests.md)
- [large-team author-disambiguation bias](large_team_author_disambiguation_bias.md)
- [disruptive language shift](disruptive_language_shift.md)
- [title word diversity](../measures/title_word_diversity.md)
- [title combinatorial novelty](../measures/title_combinatorial_novelty.md)
- [disruptiveness fixed-effect decomposition](../methods/disruptiveness_fixed_effect_decomposition.md)
- [disruption and consolidation](../mechanisms/disruption_consolidation.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [team-size disruption-impact tail divergence](team_size_disruption_impact_tail_divergence.md)
- [within-author team-size disruption test](within_author_team_size_disruption_test.md)
- [research-design team-size control](research_design_team_size_control.md)
- [funding-award disruption contrast](funding_award_disruption_contrast.md)
- [citation networks](../representations/citation_networks.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation context windows](../representations/citation_context_windows.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `disruption_measure_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: disruption validation; CD index validation; disruptive-developmental validation; disruption robustness checks
