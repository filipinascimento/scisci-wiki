# Citation decay model comparison

## Summary

Citation decay model comparison fits alternative post-peak citation-decay curves to normalized citation trajectories and compares whether exponential or slower power-law forms better describe attention loss.

## Canonical Form

- Unit of analysis: paper-level post-peak annual citation trajectory.
- Typical representation: normalized citations fitted with `beta_e exp(-alpha_e t) + gamma_e` and `beta_p t^-alpha_p + gamma_p`.
- Method target: identify the functional form and rate of post-peak citation decay.
- Empirical signature: model-comparison statistics show which decay form better fits each paper, field, and cohort.

## Uses in Science of Science

- Turns [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) into a testable post-peak curve-fitting problem.
- Provides fitted decay-rate evidence for [paper attention half-life](../measures/paper_attention_half_life.md).
- Splits the fitted exponential rate into the parameter-level measure [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md).
- Supplies a bridge between empirical citation histories and [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md).
- Complements broader [citation trajectory models](citation_trajectory_models.md), which may include attachment, fitness, immediacy, and prediction components.

## Operationalization

- Normalize each annual citation trajectory by the paper's maximum annual citation count using [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md).
- Align the post-peak segment by [peak-year citation alignment](peak_year_citation_alignment.md) rather than only publication year when estimating decay.
- Fit exponential and power-law curves with an additive plateau term to account for nonzero long-run citation rates.
- Estimate [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md) and the [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md) jointly.
- Compare fits using a statistic that accounts for sample size and model degrees of freedom, such as an F-score.
- Track fit preference, decay-rate parameters, and model uncertainty by field and peak-year cohort.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) fits normalized post-peak citation trajectories with both exponential and power-law curves, each including a plateau parameter.
- The paper reports that both forms can fit many papers, but F-statistics favor exponential decay for the majority of papers.
- The reported 1980 peak-year examples show exponential fits outperforming power-law fits for most papers in Medicine, Biology, Chemistry, and Physics.
- The fraction of papers better fit by a power law increases for more recent peak-year cohorts, which the authors link partly to shorter observed time before plateau convergence.
- That recent-cohort qualification is split out as [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md).
- The plateau component and its right-censoring implications are split out as [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md).
- Fitted exponential decay rates increase over peak years, supporting the claim that citation attention decays faster in calendar time.
- The exponential rate parameter is split out as [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md).

## Caveats

- Fit preference is sensitive to observation-window length, especially when recent papers have not reached a long-run plateau.
- Normalizing by peak annual citations removes scale but not all field, topic, and document-type differences.
- Curve fit alone does not prove the mechanism behind decay; it needs comparison with publication-volume rescaling and contextual explanations.

## Links

- [citation trajectory models](citation_trajectory_models.md)
- [peak-year citation alignment](peak_year_citation_alignment.md)
- [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md)
- [citation decay plateau parameter](../measures/citation_decay_plateau_parameter.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)
- [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [citation-percentile decay robustness](../validations/citation_percentile_decay_robustness.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)
- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `citation_decay_model_comparison`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: exponential power-law citation decay comparison; post-peak citation decay fitting; citation decay F-statistics; attention decay curve comparison
