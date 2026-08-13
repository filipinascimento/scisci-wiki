# Publication-volume-rescaled half-life

## Summary

Publication-volume-rescaled half-life converts a paper's attention half-life from calendar years into the number of field publications that appeared between the paper's citation peak and its fall below the attention threshold.

## Canonical Form

- Unit of analysis: paper-level half-life joined to a field publication-volume time series.
- Typical representation: `t_tilde_i,f^1/2 = sum_{t=t_peak+1}^{t_i^1/2} N_p^f(t)`.
- Measurement target: how many new field papers a focal paper withstands before its citation attention drops below a threshold.
- Empirical signature: stable rescaled half-life despite declining calendar-year half-life suggests that publication growth, not real time alone, drives faster apparent forgetting.

## Uses in Science of Science

- Operationalizes [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md).
- Extends [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md) from delayed-recognition counts to citation-decay time.
- Turns [paper attention half-life](paper_attention_half_life.md) into a competition-adjusted exposure measure.
- Helps compare citation aging across historical periods with different field publication volumes.
- Requires [topic-specific attention-pool caveat](../validations/topic_specific_attention_pool_caveat.md) checks because broad fields may not match the true relevant-literature pool.
- Should be paired with [attention half-life definition sensitivity](../validations/attention_half_life_definition_sensitivity.md) when alternative half-life definitions are tested.
- Helps evaluate [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md) by asking whether field differences flatten under publication-volume time.

## Operationalization

- Compute each paper's [paper attention half-life](paper_attention_half_life.md) and peak year.
- Count the number of publications in the paper's broad field for each calendar year after the peak.
- Sum field publication counts from the year after the peak through the half-life year.
- Aggregate the rescaled half-life by field, peak year, and citation-percentile group.
- Report whether the publication-volume denominator is broad-field, topic-specific, document-type-specific, or database-wide.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) defines the rescaled half-life as the sum of field publication counts between a paper's peak year and its half-life year.
- The paper reports that calendar-year half-life decreases linearly, while the publication-volume-rescaled half-life is relatively stable across the study period.
- The authors interpret the rescaled measure as the amount of competition a paper withstands before dropping to substantially lower attention.
- Stability under rescaling supports the claim that attention decay depends on the number of newly published items rather than calendar time alone.
- The paper reports approximate cross-discipline stability after rescaling, with slight monotonic trends for Medicine and Biology.
- The paper explicitly cautions that broad-field publication counts are a simple denominator and may be inferior to topic-specific relevant-literature counts.
- That denominator caveat is split out as [topic-specific attention-pool caveat](../validations/topic_specific_attention_pool_caveat.md).

## Caveats

- Broad fields are imperfect attention pools because scientists mostly compete with topic-near literature.
- First-drop and last-sub-peak half-life definitions can produce different rescaled trends.
- Publication counts do not fully capture reference-list growth, search engines, digital access, or changes in citation norms.
- The result depends on the half-life definition and threshold used before rescaling.

## Links

- [paper attention half-life](paper_attention_half_life.md)
- [attention half-life definition sensitivity](../validations/attention_half_life_definition_sensitivity.md)
- [time-to-peak attention](time_to_peak_attention.md)
- [topic-specific attention-pool caveat](../validations/topic_specific_attention_pool_caveat.md)
- [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)
- [post-peak right-censoring boundary](../validations/post_peak_right_censoring_boundary.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `publication_volume_rescaled_half_life`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: rescaled citation half-life; publication-count attention time; competition-adjusted half-life; field-publication half-life
