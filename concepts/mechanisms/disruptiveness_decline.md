# Disruptiveness decline over time

## Summary

Disruptiveness decline over time is the empirical pattern that recent papers and patents are less likely than earlier ones to redirect downstream attention away from prior work and toward new directions.

## Canonical Form

- Unit of analysis: paper, patent, field, technology category, cohort year, or citation network.
- Typical representation: average CD5 or related disruption score by field and year.
- Mechanism or conclusion: accumulated knowledge and narrower effective knowledge use may reduce the rate at which new work reroutes scientific or technological trajectories.
- Empirical signature: downward time trends in disruption scores across many fields and technology categories.

## Uses in Science of Science

- Provides a high-level empirical conclusion for [disruption and consolidation](disruption_consolidation.md).
- Connects [knowledge-use narrowing](knowledge_use_narrowing.md), [burden of knowledge](burden_of_knowledge.md), [reference-age search depth](../measures/reference_age_search_depth.md), and [reference-popularity search](../measures/reference_popularity_search.md).
- Links citation-network trends to text-based measures such as [title word diversity](../measures/title_word_diversity.md), [title combinatorial novelty](../measures/title_combinatorial_novelty.md), and [disruptive language shift](../validations/disruptive_language_shift.md).
- Raises policy questions about incentives, reading breadth, sabbaticals, exploratory funding, evaluation systems, and [broad-search time policy](broad_search_time_policy.md).

## Operationalization

- Compute CD5 or another fixed-window disruption score for large cohorts of papers and patents.
- Aggregate by field, technology class, year, institution, team size, or funding context.
- Bound cohorts with a [postwar analytic-window guardrail](../methods/postwar_analytic_window_guardrail.md) and gate text-derived trends with an [abstract-availability temporal gate](../validations/abstract_availability_temporal_gate.md).
- Test whether the trend remains under alternative citation windows, normalized indicators, high-quality subsets, and rewired citation-network null models.
- Use [paper-patent measure mirroring](../methods/paper_patent_measure_mirroring.md) when comparing science and technology under matched operational logic.
- Use [cross-corpus disruptiveness replication](../validations/cross_corpus_disruptiveness_replication.md), [high-quality disruption-decline check](../validations/high_quality_disruption_decline_check.md), [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md), and [alternative CD-index derivation robustness](../validations/alternative_cd_index_derivation_robustness.md) as separate robustness layers.
- Use [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md) to compare observed CD5 trends with constrained random citation networks.
- Link trend estimates to knowledge-use breadth, self-citation, reference age, and cited-work concentration.
- Use [disruptiveness fixed-effect decomposition](../methods/disruptiveness_fixed_effect_decomposition.md) to test whether field, year, or author/inventor factors explain trend variation.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) analyzes 45 million papers and 3.9 million patents and finds broad declines in disruptiveness over time.
- The paper reports that average CD5 decreases sharply across WoS research areas for papers between 1945 and 2010 and across NBER technology categories for patents between 1980 and 2010.
- Park et al. report that the decline remains visible in high-quality subsets such as Nature, PNAS, Science, and Nobel-winning papers.
- Their full text reports robustness to alternative CD-index derivations, field-year controls, publication/citation/authorship-practice controls, and Monte Carlo rewiring of citation networks.
- The cross-source and robustness pieces are split into [cross-corpus disruptiveness replication](../validations/cross_corpus_disruptiveness_replication.md), [high-quality disruption-decline check](../validations/high_quality_disruption_decline_check.md), [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md), and [alternative CD-index derivation robustness](../validations/alternative_cd_index_derivation_robustness.md).
- The rewiring null models preserve citation volume and citation-age structure while showing that observed CD5 values fall increasingly below chance expectations.
- The same paper links the decline to narrowing use of previous knowledge rather than simply to the growth of the available knowledge stock.
- Later split-outs add historical windowing, abstract-coverage gates, paper-patent measure mirroring, and [own-work reliance disruption penalty](own_work_reliance_disruption_penalty.md) as reusable mechanisms and guardrails.
- Park et al. also show matching declines in title-word diversity, title-combination novelty, and creation/discovery verb usage, giving text-based support for the citation-network trend.

## Caveats

- Declining average disruption is not the same as declining quality, usefulness, or truth.
- Aggregate trends can coexist with major individual breakthroughs and a stable high-disruption tail.
- CD-index trends depend on database coverage, citation practices, field definitions, and time-window choices.

## Links

- [disruption and consolidation](disruption_consolidation.md)
- [disruption index](../measures/disruption_index.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [cross-corpus disruptiveness replication](../validations/cross_corpus_disruptiveness_replication.md)
- [high-quality disruption-decline check](../validations/high_quality_disruption_decline_check.md)
- [disruptiveness practice-control stack](../validations/disruptiveness_practice_control_stack.md)
- [alternative CD-index derivation robustness](../validations/alternative_cd_index_derivation_robustness.md)
- [postwar analytic-window guardrail](../methods/postwar_analytic_window_guardrail.md)
- [abstract-availability temporal gate](../validations/abstract_availability_temporal_gate.md)
- [paper-patent measure mirroring](../methods/paper_patent_measure_mirroring.md)
- [disruptiveness fixed-effect decomposition](../methods/disruptiveness_fixed_effect_decomposition.md)
- [low-hanging-fruit synchrony test](../validations/low_hanging_fruit_synchrony_test.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [high-disruption tail conservation](high_disruption_tail_conservation.md)
- [knowledge-use narrowing](knowledge_use_narrowing.md)
- [own-work reliance disruption penalty](own_work_reliance_disruption_penalty.md)
- [knowledge-stock disruption asymmetry](knowledge_stock_disruption_asymmetry.md)
- [cited-age dispersion interaction](../measures/cited_age_dispersion_interaction.md)
- [unlinked reference coverage control](../validations/unlinked_reference_coverage_control.md)
- [broad-search time policy](broad_search_time_policy.md)
- [title word diversity](../measures/title_word_diversity.md)
- [title combinatorial novelty](../measures/title_combinatorial_novelty.md)
- [disruptive language shift](../validations/disruptive_language_shift.md)
- [cited work diversity](../measures/cited_work_diversity.md)
- [top-cited predecessor concentration](../measures/top_cited_predecessor_concentration.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]
- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]

## Metadata

- Concept ID: `disruptiveness_decline`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: decline in disruptive science; slowing disruptive innovation; declining CD5; long-run disruption decline
