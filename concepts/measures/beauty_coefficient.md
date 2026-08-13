# Beauty coefficient

## Summary

The beauty coefficient is a citation-trajectory measure that quantifies delayed recognition by comparing a paper's early citation history with a reference line leading to its maximum annual citation rate.

## Canonical Form

- Unit of analysis: paper, citation history, delayed-recognition case, or topic-specific corpus.
- Typical representation: B score, awakening time, delayed-recognition rank, or sleeping-beauty intensity.
- Mechanism or measurement target: length and depth of the sleep period combined with later citation awakening.
- Empirical signature: high B papers have low early citations followed by later, intense citation growth.

## Uses in Science of Science

- Converts [sleeping beauty](../mechanisms/sleeping_beauty.md) from a threshold story into a continuous measure.
- Tests whether delayed recognition is rare, field-specific, interdisciplinary, or linked to later methodological reuse.
- Provides a robustness check for short-window [citation impact indicators](citation_impact_indicators.md).
- Uses the [citation-history reference line](../representations/citation_history_reference_line.md) as its geometric baseline.
- Supports distributional follow-up through [beauty-coefficient tail scaling](beauty_coefficient_tail_scaling.md) and null comparisons such as [time-order-preserving citation reshuffle null](../methods/time_order_preserving_citation_reshuffle_null.md).

- A later Ke residual pass separates [citation-volume-decoupled awakening capture](../validations/citation_volume_decoupled_awakening_capture.md), [pre-peak beauty-score boundary](../validations/pre_peak_beauty_score_boundary.md), [early-citation penalty denominator](early_citation_penalty_denominator.md), and [beauty-score age/field comparability caveat](../validations/beauty_score_age_field_comparability_caveat.md).

## Operationalization

- For each paper, compute annual citation counts from publication to an observation year.
- Identify the year and value of maximum annual citations.
- Draw the reference line from initial citation count to the maximum annual citation point.
- Sum normalized gaps between that reference line and the observed citation history up to the maximum year; compute awakening time from the maximum distance to the reference line.

## Evidence and Validations

- Verified full-text evidence from Ke, Ferrara, Radicchi, and Flammini (2015) introduces the beauty coefficient B as a continuous index based on the whole citation history before the maximum citation year.
- The paper states that B avoids arbitrary thresholds on sleeping period or awakening intensity and increases with both sleep length and awakening intensity.
- Ke et al. report that beauty coefficients have heterogeneous continuous distributions in APS and Web of Science data, so delayed recognition is not cleanly separated from ordinary papers by a universal threshold.
- The paper also uses awakening-time and cocitation analysis to inspect trigger mechanisms, including cross-field discovery of previously dormant work.
- Ke et al. compare empirical beauty-coefficient distributions with network-randomization and preferential-attachment baselines, finding that simple nulls do not reproduce the observed range.
- A residual Ke pass splits out [beauty-coefficient tail scaling](beauty_coefficient_tail_scaling.md) as the upper-tail distributional form and [time-order-preserving citation reshuffle null](../methods/time_order_preserving_citation_reshuffle_null.md) as the concrete network-randomization benchmark.
- The same full text defines a [negative beauty coefficient trajectory class](negative_beauty_coefficient_trajectory_class.md): nonpositive B captures linear, concave, or early-peaking histories that serve as a contrast to delayed-recognition curves.

## Caveats

- The measure is sensitive to observation-window truncation, especially for recent papers.
- High B identifies a trajectory shape, not the cause of delayed recognition.
- Citation bursts can reflect fashion, methodological reuse, database coverage, or self-reinforcing attention as well as substantive delayed value.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [citation-history reference line](../representations/citation_history_reference_line.md)
- [negative beauty coefficient trajectory class](negative_beauty_coefficient_trajectory_class.md)
- [awakening time](awakening_time.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [beauty-coefficient tail scaling](beauty_coefficient_tail_scaling.md)
- [time-order-preserving citation reshuffle null](../methods/time_order_preserving_citation_reshuffle_null.md)
- [sleeping-beauty null-model gap](../validations/sleeping_beauty_null_model_gap.md)
- [post-peak citation decay check](../validations/post_peak_citation_decay_check.md)
- [sleep depth and length](sleep_depth_length.md)
- [awakening intensity](awakening_intensity.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation impact indicators](citation_impact_indicators.md)
- [research fronts](../mechanisms/research_fronts.md)
- [field emergence](../mechanisms/field_emergence.md)

- [citation-volume-decoupled awakening capture](../validations/citation_volume_decoupled_awakening_capture.md)
- [pre-peak beauty-score boundary](../validations/pre_peak_beauty_score_boundary.md)
- [early-citation penalty denominator](early_citation_penalty_denominator.md)
- [beauty-score age/field comparability caveat](../validations/beauty_score_age_field_comparability_caveat.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `beauty_coefficient`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: sleeping beauty coefficient; B index; delayed recognition score; awakening time
