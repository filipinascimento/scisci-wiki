# Reputation effects

## Summary

Reputation effects are mechanisms by which accumulated author or institution visibility changes how new work is received, cited, funded, or evaluated.

## Canonical Form

- Unit of analysis: scientist, publication, institution, citation year, or evaluation decision.
- Typical representation: cumulative citation/reputation trajectory, citation-rate model, status signal, or prestige network.
- Mechanism: accumulated reputation acts as a quality signal under uncertainty, increasing early attention to new work until the work's own reputation dominates.
- Empirical signature: early citation rates or evaluation outcomes depend on author or institution reputation after controlling for paper age and prior paper citations.

## Uses in Science of Science

- Gives a micro-level mechanism for [cumulative advantage](cumulative_advantage.md) and the [Matthew effect](matthew_effect.md).
- Links career-level visibility to [citation impact indicators](../measures/citation_impact_indicators.md), [scientific career impact](scientific_career_impact.md), and [responsible metrics](../measures/responsible_metrics.md).
- Helps separate publication-level impact from author-level status spillovers.
- Uses [reputation signal-flow graphs](../representations/reputation_signal_flow_graph.md) to separate author-to-paper reputation channels from paper-to-author feedback.
- Connects visible author names and platform ranking to [author name visibility signal](author_name_visibility_signal.md) and [search-result reputation reinforcement](search_result_reputation_reinforcement.md).
- Includes post-award dynamics such as [recognition ratchet pressure](recognition_ratchet_pressure.md), where recognition creates durable expectations as well as visibility.
- Splits Petersen et al.'s citation-dynamics pipeline into [peak-normalized citation trajectory aggregation](../methods/peak_normalized_citation_trajectory_aggregation.md), [citation half-life impact scaling](../measures/citation_half_life_impact_scaling.md), and fixed-effect or reputation-measure caveats.

## Operationalization

- Measure reputation using cumulative citations, prior output, institutional prestige, awards, or prior grants.
- Model citation increments as a function of prior paper citations, paper age, and author reputation.
- Estimate whether reputation matters below a citation threshold and whether the paper's own citation history dominates after that threshold.
- Test robustness with author, year, field, and publication fixed effects.
- For collaborator-status studies, represent elite status with [top-cited scientist status](../measures/top_cited_scientist_status.md) and treat [top scientist selection confound](../validations/top_scientist_selection_confound.md) as a causal threat.

## Evidence and Validations

- Verified full-text evidence from Merton (1968) provides the historical recognition-system version of reputation effects: recognized names change attention, credit, and access to scientific resources.
- Merton's full text also supplies the reader-selection cue later formalized as [author name visibility signal](author_name_visibility_signal.md).
- Verified full-text evidence from Petersen et al. (2014) analyzes 450 highly cited scientists and models publication citation rates using prior paper citations, citation life cycle, and author reputation measured by cumulative citations.
- Petersen et al. report a citation crossover threshold: below the threshold, author reputation contributes strongly to annual citation rate; above it, the paper's own citation record dominates.
- Their full text estimates that a tenfold increase in cumulative author citations corresponds to about a 66% increase in citation rate for publications in the reputation regime.
- The same paper reports that the reputation effect is negligible for highly cited publications above the crossover threshold, suggesting that citation impact becomes more paper-specific after enough attention accumulates.
- The paper now supports split-out motifs for [cumulative author reputation](../measures/cumulative_author_reputation.md), [citation crossover threshold](../measures/citation_crossover_threshold.md), [reputation citation premium](reputation_citation_premium.md), and [reputation effect citation model](../methods/reputation_effect_citation_model.md).
- Petersen et al. also motivate lower-level motifs for the graph representation of reputation flow, the author-name visibility signal, the central-scientist approximation, and search-result reinforcement of reputation.
- Additional Petersen et al. split-outs capture the [fixed-effect reputation robustness check](../validations/fixed_effect_reputation_robustness_check.md), [nondecreasing reputation measure caveat](../validations/nondecreasing_reputation_measure_caveat.md), [multi-source reputation confound](../validations/multi_source_reputation_confound.md), and [team credit ambiguity reputation reliance](team_credit_ambiguity_reputation_reliance.md).
- Verified full-text evidence from Li et al. (2019) adds a collaborator-reputation route: top-cited scientist coauthorship in the first career years predicts later impact and later elite collaboration access, while retaining selection by senior scientists as a caveat.

## Caveats

- Cumulative citations mix reputation, productivity, collaboration, field size, and genuine past contribution.
- Reputation effects can be strongest precisely when evidence about a new paper is thinnest, making them important for evaluation bias.
- Not all fields exhibit the same strength of reputation effects; Petersen et al. report weaker effects in mathematics.
- Reputation estimates can mix author, institution, journal, coauthor, and mentor status unless the design explicitly separates [multi-source reputation confounds](../validations/multi_source_reputation_confound.md).

## Links

- [cumulative advantage](cumulative_advantage.md)
- [matthew effect](matthew_effect.md)
- [scientific career impact](scientific_career_impact.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [peak-normalized citation trajectory aggregation](../methods/peak_normalized_citation_trajectory_aggregation.md)
- [citation half-life impact scaling](../measures/citation_half_life_impact_scaling.md)
- [fixed-effect reputation robustness check](../validations/fixed_effect_reputation_robustness_check.md)
- [nondecreasing reputation measure caveat](../validations/nondecreasing_reputation_measure_caveat.md)
- [multi-source reputation confound](../validations/multi_source_reputation_confound.md)
- [team credit ambiguity reputation reliance](team_credit_ambiguity_reputation_reliance.md)
- [citation crossover threshold](../measures/citation_crossover_threshold.md)
- [reputation citation premium](reputation_citation_premium.md)
- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [reputation Monte Carlo career model](../methods/reputation_monte_carlo_career_model.md)
- [reputation signal-flow graph](../representations/reputation_signal_flow_graph.md)
- [author name visibility signal](author_name_visibility_signal.md)
- [recognition ratchet pressure](recognition_ratchet_pressure.md)
- [search-result reputation reinforcement](search_result_reputation_reinforcement.md)
- [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md)
- [highly cited scientist career panel](../datasets/highly_cited_scientist_career_panel.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [institutional prestige hierarchy](institutional_prestige_hierarchy.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [top scientist selection confound](../validations/top_scientist_selection_confound.md)
- [early-career setback and resilience](early_career_setback_resilience.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]
- Merton, R. K. (1968). The Matthew effect in science. *Science*, 159(3810), 56-63. https://doi.org/10.1126/science.159.3810.56 [OpenAlex: W4292887282; Dimensions: pub.1062493069; WoS: unknown]
- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]
- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `reputation_effects`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Merton (1968) (1968)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Aliases: author reputation; status signal; reputation premium; citation crossover; prestige effect
