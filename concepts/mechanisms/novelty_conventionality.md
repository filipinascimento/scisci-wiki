# Novelty and conventionality

## Summary

Novelty and conventionality describe how scientific work combines prior knowledge: high-impact work often mixes conventional grounding with atypical combinations that bridge otherwise distant literatures.

## Canonical Form

- Unit of analysis: paper, reference list, concept pair, topic mix, or claim.
- Typical representation: co-citation, reference-pair, topic, or semantic-combination distribution.
- Mechanism: unusual recombination creates new opportunities, while conventional anchors make work legible and credible.
- Empirical signature: impact is associated with atypical combinations embedded in mostly conventional combinations.

## Uses in Science of Science

- Measures search strategies and knowledge recombination.
- Links creativity, interdisciplinarity, impact, and team composition.
- Connects to specialization pressure when accumulated knowledge makes broad search harder for individuals.
- Connects to research portfolio design through risky strategy choices and reward variance.
- Provides a bridge between network measures and textual/semantic representations.

## Operationalization

- Compute atypicality of reference pairs or concept pairs relative to field/year baselines.
- Measure conventionality from median or typical pairings in a paper's references.
- In Uzzi et al. (2013), construct cited-journal pairs within each paper, compare observed pair frequencies to randomized citation networks, and summarize each paper with median conventionality and left-tail novelty.
- Use [journal-pair z-score](../measures/journal_pair_z_score.md), [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md), [median conventionality](../measures/median_conventionality.md), [tail novelty](../measures/tail_novelty.md), or [new journal-pair novelty](../measures/new_journal_pair_novelty.md) when the analysis needs explicit paper-level measures.
- Validate against citation impact, expert novelty judgments, or downstream field formation.

## Evidence and Validations

- Uzzi et al. established the conventionality plus atypicality pattern in Science; Foster et al. linked research strategies to tradition and innovation in ASR.
- Verified full-text evidence from Foster et al. (2015) frames novelty as a strategy choice in an evolving knowledge network: scientists can introduce new chemicals or relationships, deepen known ones, consolidate existing clusters, or bridge distant ones. Risky strategies have higher upside and higher probability of being ignored, and their expected reward does not fully compensate for the added risk.
- Verified full-text evidence from Uzzi et al. (2013) analyzes 17.9 million papers across fields and finds the highest-impact papers usually combine exceptionally conventional grounding with a small share of unusual combinations. Papers with both high median conventionality and high tail novelty have a hit rate of 9.11 per 100 papers against a 5% background top-citation rate, while papers low on both dimensions have a 2.05 per 100 hit rate.
- The Uzzi measurement stack is now split into [WoS journal-pair recombination corpus](../datasets/wos_journal_pair_recombination_corpus.md), [journal-pair z-score](../measures/journal_pair_z_score.md), [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md), [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md), [novelty-conventionality quadrant typology](../measures/novelty_conventionality_quadrant_typology.md), [median conventionality impact peak](../validations/median_conventionality_impact_peak.md), and [recombination impact robustness grid](../validations/recombination_impact_robustness_grid.md).
- The same full text links this mechanism to team composition: teams are more likely than solo authors to place novel combinations inside familiar knowledge domains, suggesting division of labor can increase unusual recombination without removing conventional anchors.
- Verified full-text evidence from Fortunato et al. (2018) supports the high-impact pattern of conventional grounding plus atypical combinations and connects novelty to interdisciplinarity and evaluation risk.
- Verified full-text evidence from Wu et al. (2019) adds a team-search mechanism: small teams tend to search older and less popular prior work, while large teams more often develop recent, popular directions.
- Wu et al. further split team search into breadth and depth: team-size growth initially increases combinatorial novelty with diminishing returns, but small teams preserve deeper search into older and less popular predecessors. This is now represented as [team-size breadth-depth search tradeoff](team_size_breadth_depth_search_tradeoff.md).
- Verified full-text evidence from Jones (2009) adds a knowledge-depth mechanism: accumulated frontier knowledge can push innovators toward narrower expertise and teamwork, which can change the feasible space of recombination.
- Verified full-text evidence from Xu et al. (2022) adds a team-organization mechanism: papers from flatter teams are more likely to be novel, suggesting that who gets conceptual leadership inside a team affects recombination outcomes.
- Xu et al. operationalize the developmental side with [developmental index](../measures/developmental_index.md), defined as the inverse of disruption.
- Verified full-text evidence from Rzhetsky et al. (2015) connects novelty to problem choice: observed biomedical experiments increasingly exploit central and nearby chemical relationships, while more efficient mature-field discovery would require more distant and risky combinations.
- Verified full-text evidence from Wang et al. (2017) adds the novelty-penalty side: highly novel papers are more likely to become long-run big hits, but short citation windows and journal impact factors can underrate them.
- Verified full-text evidence from Wang, Lee, and Walsh (2018) shows that funding systems can affect novelty heterogeneously: competitive funding is associated with higher novelty on average in Japan, but not for junior and female researchers.

## Caveats

- Citation-based novelty can miss textual, methodological, or empirical novelty.
- High atypicality can also indicate noise, miscoding, or inappropriate field baselines.

## Links

- [co citation](../representations/co_citation.md)
- [WoS journal-pair recombination corpus](../datasets/wos_journal_pair_recombination_corpus.md)
- [journal-pair z-score](../measures/journal_pair_z_score.md)
- [degree-preserving citation-network null](../methods/degree_preserving_citation_network_null.md)
- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [median conventionality](../measures/median_conventionality.md)
- [tail novelty](../measures/tail_novelty.md)
- [developmental index](../measures/developmental_index.md)
- [novelty-conventionality quadrant typology](../measures/novelty_conventionality_quadrant_typology.md)
- [median conventionality impact peak](../validations/median_conventionality_impact_peak.md)
- [recombination impact robustness grid](../validations/recombination_impact_robustness_grid.md)
- [team tail-novelty advantage](team_tail_novelty_advantage.md)
- [team-size breadth-depth search tradeoff](team_size_breadth_depth_search_tradeoff.md)
- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [research fronts](../mechanisms/research_fronts.md)
- [team size disruption](team_size_disruption.md)
- [disruption consolidation](disruption_consolidation.md)
- [peer review gatekeeping](peer_review_gatekeeping.md)
- [interdisciplinarity](interdisciplinarity.md)
- [topic models](../methods/topic_models.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [research strategy risk-reward](research_strategy_risk_reward.md)
- [scientific problem choice](scientific_problem_choice.md)
- [central-nearby problem-choice bias](central_nearby_problem_choice_bias.md)
- [mature-field exploration gap](mature_field_exploration_gap.md)
- [novelty penalty](novelty_penalty.md)
- [cross-domain search-capacity constraint](cross_domain_search_capacity_constraint.md)
- [novelty absorption and communication barrier](novelty_absorption_communication_barrier.md)
- [conventional display strategy](conventional_display_strategy.md)
- [recombination field-birth signal](../methods/recombination_field_birth_signal.md)
- [journal-pair resolution boundary](../validations/journal_pair_resolution_boundary.md)
- [funding model status contingency](funding_model_status_contingency.md)
- [burden of knowledge](burden_of_knowledge.md)
- [team impact advantage](team_impact_advantage.md)
- [team hierarchy and flatness](team_hierarchy_flatness.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]
- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]
- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; WoS: unknown]
- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]
- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]
- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `novelty_conventionality`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Aliases: atypical combinations; recombinant novelty; tradition and innovation
