# Novelty-conventionality quadrant typology

## Summary

Novelty-conventionality quadrant typology classifies papers by whether they combine high or low median conventionality with high or low tail novelty.

## Canonical Form

- Unit of analysis: paper, reference-combination profile, field-year cohort, or impact outcome.
- Typical representation: 2-by-2 quadrant table crossing median conventionality and tail novelty.
- Measurement target: joint position of a paper on familiar grounding and rare recombination.
- Empirical signature: the high-conventionality plus high-tail-novelty quadrant has elevated hit-paper probability.

## Uses in Science of Science

- Converts [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md) into a compact categorical measure.
- Encodes the core empirical claim of [novelty and conventionality](../mechanisms/novelty_conventionality.md): novelty is most successful when embedded in conventional grounding.
- Can evaluate whether funders, teams, institutions, fields, or review systems favor one recombination quadrant.
- Helps avoid treating novelty and conventionality as opposite ends of a single axis.

## Operationalization

- Compute [median conventionality](median_conventionality.md) and [tail novelty](tail_novelty.md) for each paper.
- Define high median conventionality relative to the cohort median or another documented field/year threshold.
- Define high tail novelty when the lower-tail score crosses the novelty threshold, such as a 10th-percentile z-score below zero.
- Cross the two binary indicators into four paper classes.
- Compare outcomes such as top-citation status, disruption, expert ratings, patent links, or delayed recognition.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) classifies Web of Science papers by high/low median conventionality and high/low tail novelty.
- The paper reports that high median conventionality plus high tail novelty has a hit-paper rate of 9.11 per 100 papers, nearly double the 5% background rate.
- Papers high on only one dimension have lower hit rates, and papers low on both dimensions have a hit-paper rate of 2.05 per 100.
- Uzzi et al. report that the pattern is robust across time periods, alternative hit definitions, and 243 fields of science, now split out in [recombination impact robustness grid](../validations/recombination_impact_robustness_grid.md).

## Caveats

- Binary thresholds simplify a continuous distribution and can hide nonmonotonic effects.
- The high-conventionality optimum can peak and then decline, so quadrant labels should be checked against continuous curves.
- Quadrants depend on the null model, entity granularity, and impact window.

## Links

- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [journal-pair z-score](journal_pair_z_score.md)
- [median conventionality](median_conventionality.md)
- [tail novelty](tail_novelty.md)
- [hit-paper probability](hit_paper_probability.md)
- [recombination impact robustness grid](../validations/recombination_impact_robustness_grid.md)
- [median conventionality impact peak](../validations/median_conventionality_impact_peak.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [team tail-novelty advantage](../mechanisms/team_tail_novelty_advantage.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [responsible metrics](responsible_metrics.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `novelty_conventionality_quadrant_typology`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: novelty conventionality quadrants; high-conventionality high-novelty class; recombination quadrant; conventional novelty quadrant
