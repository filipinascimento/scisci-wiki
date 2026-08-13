# Initial attention-drop stability check

## Summary

An alternative half-life definition uses the first drop below a citation threshold instead of the last sub-peak above it.

## Canonical Form

- Unit of analysis: paper, normalized citation trajectory, half-life threshold, first crossing, field, or publication-volume rescaling.
- Typical representation: first-threshold-crossing robustness variant for attention half-life.
- Mechanism, measurement, or validation target: definition sensitivity of citation half-life trends.
- Empirical signature: the first-drop half-life definition produces different temporal patterns than the main last-sub-peak definition..

## Uses in Science of Science

- Refines half-life validation by linking it to [attention half life definition sensitivity](attention_half_life_definition_sensitivity.md) and [paper attention half life](../measures/paper_attention_half_life.md).
- Useful as a reusable check when [publication volume rescaled half life](../measures/publication_volume_rescaled_half_life.md) is interpreted from citation histories.
- Adds cross-links to [post peak right censoring boundary](post_peak_right_censoring_boundary.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Define half-life as the minimum time when normalized citation rate first falls below a threshold.
- Compare absolute and publication-rescaled versions over years.
- Report whether conclusions reverse under the first-drop definition.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) reports in Appendix C that the first-drop definition loses the decreasing pattern in absolute time and shows field-specific stability, while its rescaled version increases.
- The motif preserves a robustness variant that changes interpretation of attention decay.

## Caveats

- The result is threshold-sensitive.
- It behaves differently from the paper's main last-sub-peak half-life definition.

## Links

- [Attention half-life definition sensitivity](attention_half_life_definition_sensitivity.md)
- [Paper attention half-life](../measures/paper_attention_half_life.md)
- [Publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [Post-peak right-censoring boundary](post_peak_right_censoring_boundary.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `initial_attention_drop_stability_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: first-drop half-life stability; initial citation-drop check; alternative half-life first-threshold crossing
