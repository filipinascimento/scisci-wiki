# Reputation Monte Carlo career model

## Summary

Reputation Monte Carlo career model simulates synthetic publication careers with preferential attachment, citation aging, and author reputation effects, then compares simulated career patterns to empirical benchmarks.

## Canonical Form

- Unit of analysis: synthetic scientist, synthetic paper, career year, publication portfolio, or simulated citation history.
- Typical representation: Monte Carlo career simulation with PA, PA-life-cycle, and PA-life-cycle-reputation variants.
- Method target: test whether reputation effects are needed to reproduce observed career-level and paper-level citation patterns.
- Empirical signature: models with author reputation reproduce cumulative citation growth, rank-citation profiles, and distinct citation life cycles better than models without author-specific effects.

## Uses in Science of Science

- Validates [reputation effect citation model](reputation_effect_citation_model.md) against career-scale patterns rather than only regression coefficients.
- Provides simulation evidence for [reputation citation premium](../mechanisms/reputation_citation_premium.md).
- Uses [career growth exponents](../measures/career_growth_exponents.md) and rank-citation profiles as benchmark targets.
- Connects career modeling to [cumulative advantage](../mechanisms/cumulative_advantage.md) and [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Uses [author rank-citation profiles](../measures/author_rank_citation_profile.md) and [citation life-cycle half-life](../measures/citation_life_cycle_half_life.md) as interpretable benchmarks for simulated portfolios.

## Operationalization

- Simulate papers over career time with annual citation increments.
- Compare a preferential-attachment-only model, a preferential-attachment plus life-cycle model, and a model adding author reputation.
- Benchmark simulations against empirical citation life-cycle curves, cumulative author citation growth, and rank-citation profiles.
- Check whether simulated cumulative citations grow with realistic exponents and whether rank-citation profiles fit observed distributional shapes.
- Estimate derived quantities such as the fraction of papers exceeding the citation crossover threshold at a given career age.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) compares three Monte Carlo career models: preferential attachment, preferential attachment with life cycle, and a reputation model.
- The paper reports that the preferential-attachment-only model fails to reproduce characteristic real publication trajectories and cumulative citation growth.
- Petersen et al. find that the reputation model satisfies empirical benchmarks across citation life-cycle curves, cumulative citation growth, and rank-citation profiles.
- The reputation model produces cumulative citation growth with zeta between about two and three and rank-citation profiles within empirically observed DGBD parameter ranges.
- The model also reproduces the empirical fraction of papers above the citation crossover threshold for a given career age.

## Caveats

- Simulation agreement does not prove a unique causal mechanism; other unmodeled processes could reproduce similar benchmarks.
- Model behavior depends on assumptions about productivity timing, paper birth, aging, and noise.
- Simulations based on highly cited careers may not generalize to typical careers.

## Links

- [reputation effect citation model](reputation_effect_citation_model.md)
- [reputation citation premium](../mechanisms/reputation_citation_premium.md)
- [career growth exponents](../measures/career_growth_exponents.md)
- [citation crossover threshold](../measures/citation_crossover_threshold.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [author rank-citation profile](../measures/author_rank_citation_profile.md)
- [citation life-cycle half-life](../measures/citation_life_cycle_half_life.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [citation trajectory models](citation_trajectory_models.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `reputation_monte_carlo_career_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: MC reputation career model; simulated reputation career model; PA-LC-reputation model; synthetic citation career model
