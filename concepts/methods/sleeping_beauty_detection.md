# Sleeping-beauty detection

## Summary

Sleeping-beauty detection is the workflow for identifying papers with long low-citation periods followed by delayed recognition, using either threshold rules or continuous citation-trajectory scores.

## Canonical Form

- Unit of analysis: paper, citation history, field-year cohort, or candidate delayed-recognition set.
- Typical representation: threshold classes, beauty coefficient rankings, awakening time, or candidate lists for case analysis.
- Mechanism or measurement target: delayed-recognition trajectory discovery.
- Empirical signature: candidate papers have low early citation rates and later citation growth that exceeds ordinary aging patterns.

## Uses in Science of Science

- Generates candidate cases for [delayed recognition](../mechanisms/delayed_recognition.md) and scientific prematurity studies.
- Provides a long-window robustness check for [citation impact indicators](../measures/citation_impact_indicators.md).
- Supports trigger analysis by pairing [awakening time](../measures/awakening_time.md) with citing-paper and co-citation changes.
- Should record the [APS-WoS sleeping-beauty panel](../datasets/aps_wos_sleeping_beauty_panel.md), [post-peak citation decay check](../validations/post_peak_citation_decay_check.md), and [sleeping-beauty null-model gap](../validations/sleeping_beauty_null_model_gap.md) when using Ke-style detection.
- Should also record [sleeping-beauty cross-dataset visibility](../validations/sleeping_beauty_cross_dataset_visibility.md) and [awakening co-citation keyword diagnosis](awakening_cocitation_keyword_diagnosis.md) when detection is meant to support mechanism claims.
- For Ke-style residual analysis, track [beauty-coefficient tail scaling](../measures/beauty_coefficient_tail_scaling.md), [time-order-preserving citation reshuffle null](time_order_preserving_citation_reshuffle_null.md), [external-discipline citation fraction](../measures/external_discipline_citation_fraction.md), and [multidisciplinary venue delayed recognition](../mechanisms/multidisciplinary_venue_delayed_recognition.md).
- For van Raan-style detection, separates [sleeping-beauty threshold grid](sleeping_beauty_threshold_grid.md), [citation-volume growth normalization](citation_volume_growth_normalization.md), [sleeping-beauty/classic boundary](../validations/sleeping_beauty_classic_boundary.md), [publication-cohort sleep-window alignment](publication_cohort_sleep_window_alignment.md), [immediate post-sleep awakening window](immediate_post_sleep_awakening_window.md), [full-corpus rare-trajectory scan](full_corpus_rare_trajectory_scan.md), and [self-citation-excluded awakening screen](../validations/self_citation_excluded_awakening_screen.md) decisions.

- Additional Ke residual motifs separate [revived-classic benchmark alignment](../validations/revived_classic_benchmark_alignment.md), [ranked sleeping-beauty case inventory](../representations/ranked_sleeping_beauty_case_inventory.md), [statistical-method delayed recognition](../mechanisms/statistical_method_delayed_recognition.md), and [social-science sleeping-beauty presence audit](../validations/social_science_sleeping_beauty_presence_audit.md).

## Operationalization

- Assemble long annual citation histories with field, year, and database coverage metadata.
- Apply threshold rules using [sleep depth and length](../measures/sleep_depth_length.md) plus [awakening intensity](../measures/awakening_intensity.md), or compute a continuous [beauty coefficient](../measures/beauty_coefficient.md).
- Estimate awakening time and compare citing papers, keywords, fields, or co-citation neighborhoods before and after awakening.
- Validate candidate lists against field-normalized baselines, database coverage, self-citation treatment, and historical case evidence.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) detects sleeping beauties with threshold combinations over sleep duration, depth of sleep, and awake intensity.
- van Raan normalizes candidate counts for growth in both cited and citing publications before estimating an awakening function.
- Additional van Raan residual motifs now split out the [sleeping-beauty count matrix](../representations/sleeping_beauty_count_matrix.md), [awakening-intensity panel plot](../representations/awakening_intensity_panel_plot.md), [sleep-depth duration interaction](../measures/sleep_depth_duration_interaction.md), [awakening-intensity tail invariance](../measures/awakening_intensity_tail_invariance.md), and [expert-comment prematurity validation](../validations/expert_comment_prematurity_validation.md).
- Verified full-text evidence from Ke et al. (2015) argues that fixed thresholds miss the continuous nature of delayed recognition and introduces the beauty coefficient as a threshold-free ranking measure.
- Ke et al. use American Physical Society and Web of Science data and combine beauty-coefficient rankings with awakening-time and co-citation analyses for trigger interpretation.
- The same paper profiles top sleeping beauties by field category and compares empirical delayed-recognition distributions against citation null models.
- The same Ke full text also supports lower-level validation and interpretation motifs: [citation-model first-mover limit](../validations/citation_model_first_mover_limit.md), [sleeping-beauty cross-dataset visibility](../validations/sleeping_beauty_cross_dataset_visibility.md), and [awakening co-citation keyword diagnosis](awakening_cocitation_keyword_diagnosis.md).
- A residual Ke pass separates the upper-tail scaling of B, the time-preserving reshuffle null, external-field citation fraction, and multidisciplinary-venue mechanism from the broader detection workflow.

## Caveats

- Detection is strongly affected by the observation window; many recent papers cannot yet reveal delayed recognition.
- Candidate detection should not be mistaken for causal explanation.
- Database coverage, field citation density, reference-indexing changes, and self-citations can create or suppress apparent sleeping-beauty behavior.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [awakening time](../measures/awakening_time.md)
- [APS-WoS sleeping-beauty panel](../datasets/aps_wos_sleeping_beauty_panel.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [sleeping-beauty null-model gap](../validations/sleeping_beauty_null_model_gap.md)
- [beauty-coefficient tail scaling](../measures/beauty_coefficient_tail_scaling.md)
- [time-order-preserving citation reshuffle null](time_order_preserving_citation_reshuffle_null.md)
- [external-discipline citation fraction](../measures/external_discipline_citation_fraction.md)
- [multidisciplinary venue delayed recognition](../mechanisms/multidisciplinary_venue_delayed_recognition.md)
- [citation-model first-mover limit](../validations/citation_model_first_mover_limit.md)
- [sleeping-beauty cross-dataset visibility](../validations/sleeping_beauty_cross_dataset_visibility.md)
- [awakening co-citation keyword diagnosis](awakening_cocitation_keyword_diagnosis.md)
- [sleeping-beauty field-origin profile](../measures/sleeping_beauty_field_origin_profile.md)
- [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md)
- [post-peak citation decay check](../validations/post_peak_citation_decay_check.md)
- [sleeping-beauty threshold grid](sleeping_beauty_threshold_grid.md)
- [publication-cohort sleep-window alignment](publication_cohort_sleep_window_alignment.md)
- [immediate post-sleep awakening window](immediate_post_sleep_awakening_window.md)
- [full-corpus rare-trajectory scan](full_corpus_rare_trajectory_scan.md)
- [self-citation-excluded awakening screen](../validations/self_citation_excluded_awakening_screen.md)
- [sleeping-beauty count matrix](../representations/sleeping_beauty_count_matrix.md)
- [awakening-intensity panel plot](../representations/awakening_intensity_panel_plot.md)
- [awakening probability function](../measures/awakening_probability_function.md)
- [sleep-depth duration interaction](../measures/sleep_depth_duration_interaction.md)
- [awakening-intensity tail invariance](../measures/awakening_intensity_tail_invariance.md)
- [citation-volume growth normalization](citation_volume_growth_normalization.md)
- [sleeping-beauty/classic boundary](../validations/sleeping_beauty_classic_boundary.md)
- [Mendel-syndrome prematurity audit](../validations/mendel_syndrome_prematurity_audit.md)
- [expert-comment prematurity validation](../validations/expert_comment_prematurity_validation.md)
- [sleep depth and length](../measures/sleep_depth_length.md)
- [awakening intensity](../measures/awakening_intensity.md)
- [citation trajectory models](citation_trajectory_models.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [citation window selection](citation_window_selection.md)

- [revived-classic benchmark alignment](../validations/revived_classic_benchmark_alignment.md)
- [ranked sleeping-beauty case inventory](../representations/ranked_sleeping_beauty_case_inventory.md)
- [statistical-method delayed recognition](../mechanisms/statistical_method_delayed_recognition.md)
- [social-science sleeping-beauty presence audit](../validations/social_science_sleeping_beauty_presence_audit.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]
- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]
- Wang, D., Song, C., & Barabasi, A.-L. (2013). Quantifying long-term scientific impact. *Science*, 342(6154), 127-132. https://doi.org/10.1126/science.1237825 [OpenAlex: W2124689612; Dimensions: pub.1042700127; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_detection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: delayed-recognition detection; sleeping beauty identification; SB detection; citation sleep screening
