# Beauty-score age/field comparability caveat

## Summary

Raw beauty-coefficient rankings across paper ages and disciplines can be misleading because citation opportunity, tempo, and observation windows vary.

## Canonical Form

- Unit of analysis: delayed-recognition score comparison across fields or cohorts.
- Typical representation: B score with field, cohort, and observation-window metadata.
- Validation target: comparability of delayed-recognition scores across citation environments.
- Empirical signature: high-B prevalence or ranking changes after field, age, or citation-density adjustment.

## Uses in Science of Science

- Adds a comparability check to [sleeping-beauty detection](../methods/sleeping_beauty_detection.md).
- Connects delayed-recognition scoring to [field citation tempo profile](../representations/field_citation_tempo_profile.md) and [citation window selection](../methods/citation_window_selection.md).
- Useful for constructing cross-field top lists or case inventories.

## Operationalization

- Report publication cohort, field classification, observation-window length, and citation-density baseline with each high-B ranking.
- Normalize or stratify B comparisons within field-year cohorts before making cross-field claims.
- Test robustness to alternative field classifications and data-source windows.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) notes that age and field complicate direct comparisons of beauty-coefficient values.
- The paper's broad APS and Web of Science analyses motivate explicit cohort and field metadata for delayed-recognition rankings.

## Caveats

- Over-normalization can erase the historical fact that some fields have different discovery and recognition tempos.
- Field labels can be noisy for interdisciplinary sleeping beauties.

## Links

- [Continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [Field citation tempo profile](../representations/field_citation_tempo_profile.md)
- [Citation window selection](../methods/citation_window_selection.md)
- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `beauty_score_age_field_comparability_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: B-score comparability caveat; delayed-recognition field-age caveat; beauty coefficient normalization caveat
