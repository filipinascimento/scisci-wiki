# Field-specific attention-decay gradient

## Summary

Field-specific attention-decay gradient is the validation pattern that citation peak timing, decay rates, and half-life trends differ systematically across broad scientific fields, so attention-decay claims should not be treated as field-invariant by default.

## Canonical Form

- Unit of analysis: field, paper, peak-year cohort, publication cohort, citation-percentile group, or fitted trajectory parameter.
- Typical representation: field-stratified time-to-peak distributions, decay-rate distributions, half-life trends, or publication-volume-rescaled comparisons.
- Validation target: whether attention-decay patterns are stable across disciplines or shaped by field-specific literature dynamics.
- Empirical signature: fields separate in peak timing, `alpha_e`, half-life, or rescaled trends even under the same data and model design.

## Uses in Science of Science

- Validates whether [time-to-peak attention](../measures/time_to_peak_attention.md), [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md), and [paper attention half-life](../measures/paper_attention_half_life.md) generalize across fields.
- Adds a field-stratification layer to the [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md).
- Helps interpret [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md) because field growth and field attention turnover need not move identically.
- Works with [topic-specific attention-pool caveat](topic_specific_attention_pool_caveat.md) to separate broad-field gradients from narrower topic-pool differences.

## Operationalization

- Assign papers to stable fields or disciplines using a documented classification scheme.
- Estimate peak timing, normalized post-peak decay, decay-rate parameters, and half-life by field.
- Compare field distributions and trends across the same peak-year or publication-year cohorts.
- Repeat with citation-percentile strata when possible to avoid treating elite-paper dynamics as field-wide facts.
- Report whether field differences remain after publication-volume rescaling.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) compares Clinical Medicine, Molecular Biology, Chemistry, and Physics in the same Web of Science attention-decay design.
- The paper reports that Biology papers have smaller time-to-peak values than Medicine, Physics, and Chemistry, indicating faster peak timing in that field.
- Parolo et al. report that decay rates and their increase over time are field dependent, with Physics and Chemistry decaying faster than Biology and Medicine.
- The half-life analysis shows a Medicine/Biology versus Chemistry/Physics grouping in calendar-time trends.
- The conclusion reports that publication-volume-rescaled decay appears approximately stable across disciplines, while Medicine and Biology still show slight monotonic trends.

## Caveats

- Broad fields can hide topic-specific literatures with different true attention pools.
- Field assignment through journal subject categories can mix interdisciplinary papers and shift over time.
- Citation norms, reference-list length, document types, and database coverage differ by field.
- A field gradient is descriptive unless paired with a mechanism for why the field-specific trajectory differs.

## Links

- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [citation-percentile decay robustness](citation_percentile_decay_robustness.md)
- [topic-specific attention-pool caveat](topic_specific_attention_pool_caveat.md)
- [field classifications](../measures/field_classifications.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `field_specific_attention_decay_gradient`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: field-specific citation decay; discipline attention-decay gradient; field heterogeneity in attention decay; citation-life-cycle field gradient
