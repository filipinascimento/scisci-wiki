# Median conventionality

## Summary

Median conventionality measures the central tendency of a paper's reference-combination scores, capturing whether most prior-knowledge combinations are familiar within the field/year citation system.

## Canonical Form

- Unit of analysis: paper, reference list, cited-journal pair distribution, cited-source pair distribution, or concept-pair distribution.
- Typical representation: median pair z-score, high/low median-conventionality flag, or conventional grounding score.
- Measurement target: legibility and familiarity of the main mass of recombined knowledge.
- Empirical signature: most reference pairs occur more often than expected under a randomized or field/year null model.

## Uses in Science of Science

- Provides the conventional anchor in [novelty and conventionality](../mechanisms/novelty_conventionality.md).
- Complements [tail novelty](tail_novelty.md) by distinguishing conventional grounding from rare combinations.
- Helps explain why novelty can be impactful when it is embedded in recognized knowledge domains.
- Requires [median conventionality impact peak](../validations/median_conventionality_impact_peak.md) checks because the impact relationship can be nonmonotonic.
- Supports [responsible metrics](responsible_metrics.md) by making novelty measures less one-dimensional.
- Connects to residual recombination motifs for [population base rates](../validations/recombination_population_base_rates.md), [within-paper reference-pair enumeration](../methods/within_paper_reference_pair_enumeration.md), [quadrant prevalence profiles](../representations/recombination_quadrant_prevalence_profile.md), and [mainstream-distinctiveness mechanism](../mechanisms/mainstream_distinctiveness_recombination_mechanism.md).

## Operationalization

- Construct pairwise combinations among cited journals, cited papers, concepts, or topics.
- Compare observed pair frequencies with a randomized baseline to produce standardized pair scores.
- Take the median score across all pairs in a focal paper's reference-combination distribution.
- Define high median conventionality relative to the field/year distribution, such as the upper half of paper-level medians.
- Report the measure with tail novelty rather than treating conventionality and novelty as endpoints of one scale.
- The underlying pair score and paper-level distribution are represented in [journal-pair z-score](journal_pair_z_score.md) and [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md).

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) uses the median of cited-journal-pair z-scores to summarize a paper's main mass of combinations.
- The paper finds that scientific papers usually have high median conventionality: half of papers exceed high positive median z-score levels in both the 1980s and 1990s, while negative medians are rare.
- Uzzi et al. show that median conventionality and tail novelty are not opposites; the highest hit-paper rate appears when high conventionality and high tail novelty appear together.
- The same full text reports that impact peaks in the 85th to 95th percentile of median conventionality and then reverses, so conventionality should be analyzed as a curve as well as a high/low label.
- The full text validates the two-dimensional measure across decades, hit definitions, and 243 science fields.
- A residual Uzzi et al. pass separates the cohort base-rate layer, reference-pair enumeration step, quadrant prevalence profile, and mainstream-distinctiveness interpretation from the broader measure.

## Caveats

- A high median score can reflect field maturity, dense citation habits, or journal granularity, not only intellectual conservatism.
- Very high conventionality may eventually have diminishing returns; the measure should be interpreted with outcome curves, not only binary flags.
- Median conventionality is sensitive to how cited entities are grouped and how the null citation network is constructed.

## Links

- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [journal-pair z-score](journal_pair_z_score.md)
- [paper combination-profile distribution](../representations/paper_combination_profile_distribution.md)
- [novelty-conventionality quadrant typology](novelty_conventionality_quadrant_typology.md)
- [median conventionality impact peak](../validations/median_conventionality_impact_peak.md)
- [recombination population base rates](../validations/recombination_population_base_rates.md)
- [within-paper reference-pair enumeration](../methods/within_paper_reference_pair_enumeration.md)
- [recombination quadrant prevalence profile](../representations/recombination_quadrant_prevalence_profile.md)
- [mainstream-distinctiveness recombination mechanism](../mechanisms/mainstream_distinctiveness_recombination_mechanism.md)
- [tail novelty](tail_novelty.md)
- [co-citation](../representations/co_citation.md)
- [citation networks](../representations/citation_networks.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [responsible metrics](responsible_metrics.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]

## Metadata

- Concept ID: `median_conventionality`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Uzzi et al. (2013) (2013)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: conventionality score; median pair z-score; conventional grounding; familiar combination median
