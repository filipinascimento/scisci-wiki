# Hit-paper probability

## Summary

Hit-paper probability is the fraction of papers in a portfolio that land in a top citation percentile within a field-year reference set.

## Canonical Form

- Unit of analysis: paper, scientist, applicant group, grant cohort, field-year cell, or follow-up window.
- Typical representation: probability or share of papers above a top-citation threshold such as top 5%.
- Measurement target: likelihood that produced papers enter a high-citation tail, after field and year normalization.
- Empirical signature: two groups can publish similar numbers of papers but differ in the share that become hit papers.

## Uses in Science of Science

- Specializes [top-percentile publication share](top_percentile_publication_share.md) for scientist- or cohort-level outcome studies.
- Provides a top-tail outcome for [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md).
- Supports [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md) and [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md).
- Provides the outcome side for recombination studies such as [novelty-conventionality quadrant typology](novelty_conventionality_quadrant_typology.md) and [recombination impact robustness grid](../validations/recombination_impact_robustness_grid.md).
- Complements average [field-normalized citation impact](field_normalized_citation_impact.md), which can hide tail probabilities.
- Helps [responsible metrics](responsible_metrics.md) users keep publication volume and high-impact probability separate.
- Should be paired with non-citation outcomes such as [clinical-trial publication share](clinical_trial_publication_share.md), [clinical-trial citation share](clinical_trial_citation_share.md), and [approximate potential to translate](approximate_potential_to_translate.md) when evaluating biomedical translation.

## Operationalization

- Assign each paper to a field-year reference set.
- Choose a citation threshold such as the top 5% of papers in the same field and year.
- Mark each paper as a hit if it exceeds the threshold within the chosen citation window.
- Divide the number of hit papers by the total number of papers in the focal portfolio or group.
- Report sensitivity to thresholds, field definitions, citation windows, and publication lags.

## Evidence and Validations

- Verified full-text evidence from Uzzi et al. (2013) operationalizes hit papers as papers in the upper 5th percentile of citations across the full dataset, measured through eight years after publication.
- Uzzi et al. use this hit-paper outcome to show that papers with high median conventionality and high tail novelty have a hit rate of 9.11 per 100 papers, compared with a 5% background rate.
- The paper reports robustness to alternative hit definitions, including top 1% and top 10% citation thresholds.
- Verified full-text evidence from Wang, Jones, and Wang (2019) defines hit papers as papers in the top 5% of citations received in the same year and field, with field indicated by Web of Science subject category.
- In the first five years after treatment, 13.3% of narrow-win papers and 16.1% of near-miss papers are hit papers.
- The paper reports that near misses outperform narrow wins by 21% in that first five-year window and that a similar gap appears in years 6-10.
- Wang et al. vary hit-paper thresholds from top 1% to top 15% and report that the conclusions remain the same.
- The paper also computes hits per capita to separate hit probability among papers from output volume.
- Wang et al. further show that the same near-miss advantage appears on clinical-translational outcomes, reducing dependence on citation-only interpretation.

## Caveats

- Hit-paper thresholds are sensitive to field classification, citation-window length, and tie handling.
- A top-tail probability does not measure all scientific value, replication value, or societal impact.
- The denominator matters: papers by surviving scientists, all initial applicants, or per-capita cohorts answer different questions.
- Small portfolios can make hit probabilities noisy.

## Links

- [top-percentile publication share](top_percentile_publication_share.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [field-normalized citation impact](field_normalized_citation_impact.md)
- [novelty-conventionality quadrant typology](novelty_conventionality_quadrant_typology.md)
- [recombination impact robustness grid](../validations/recombination_impact_robustness_grid.md)
- [median conventionality impact peak](../validations/median_conventionality_impact_peak.md)
- [citation impact indicators](citation_impact_indicators.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [near-miss and narrow-win applicant groups](near_miss_narrow_win_applicant_groups.md)
- [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md)
- [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md)
- [clinical-trial publication share](clinical_trial_publication_share.md)
- [clinical-trial citation share](clinical_trial_citation_share.md)
- [approximate potential to translate](approximate_potential_to_translate.md)
- [responsible metrics](responsible_metrics.md)

## References

- Uzzi, B., Mukherjee, S., Stringer, M., & Jones, B. (2013). Atypical combinations and scientific impact. *Science*, 342(6157), 468-472. https://doi.org/10.1126/science.1240474 [OpenAlex: W2066752129; Dimensions: pub.1028974017; WoS: unknown]
- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `hit_paper_probability`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Uzzi et al. (2013) (2013)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1126/science.1240474`
- OpenAlex ID: `W2066752129`
- Dimensions ID: `pub.1028974017`
- SciSciNet ID: `W2066752129`
- Aliases: hit-paper rate; probability of publishing a hit paper; top 5 percent paper probability; high-impact paper probability
