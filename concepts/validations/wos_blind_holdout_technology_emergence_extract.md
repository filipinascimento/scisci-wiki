# WoS blind-holdout technology-emergence extract

## Summary

Custom WoS extracts can support benchmark designs where methods train on known domains and are tested on a withheld emerging-technology domain.

## Canonical Form

- Unit of analysis: custom extract, emerging-technology domain, practice dataset, holdout dataset, or benchmark submission.
- Typical representation: practice-domain plus blind-holdout benchmark corpus.
- Mechanism, measurement, or validation target: out-of-sample validation for emerging-topic detection methods.
- Empirical signature: methods tuned on known domains are evaluated on an unknown-domain extract under fixed rules and time limits..

## Uses in Science of Science

- Turns [fit-for-purpose bibliometric extracts](../methods/fit_for_purpose_bibliometric_extracts.md) into a benchmark design.
- Connects [field emergence](../mechanisms/field_emergence.md) to prediction validation.
- Complements topic-model and recombination-field-birth benchmarks.

## Operationalization

- Provide multiple practice domain extracts and one unknown-domain holdout extract.
- Require repeatable emerging-topic detection procedures before holdout release.
- Evaluate results under a fixed time window and organizer-defined criteria.

## Evidence and Validations

- Verified full-text evidence from Birkle et al. (2020) describes a technology-emergence contest using known practice datasets and a fourth unknown-topic dataset with a short return window.

## Caveats

- The design is contest-specific and needs external evaluation criteria or ground truth.
- Short contest windows can favor methods already tuned to the data provider's schema.

## Links

- [Fit-for-purpose bibliometric extracts](../methods/fit_for_purpose_bibliometric_extracts.md)
- [Field emergence and specialty formation](../mechanisms/field_emergence.md)
- [Recombination field-birth signal](../methods/recombination_field_birth_signal.md)
- [Synthetic topic recovery benchmark](synthetic_topic_recovery_benchmark.md)
- [Topic-model perplexity benchmark](topic_model_perplexity_benchmark.md)
- [Exploration-to-prediction cross-validation](../methods/exploration_to_prediction_cross_validation.md)

## References

- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `wos_blind_holdout_technology_emergence_extract`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Birkle et al. (2020) (2020)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1162/qss_a_00018`
- OpenAlex ID: `W3000895385`
- Dimensions ID: `pub.1124230134`
- SciSciNet ID: `W3000895385`
- Aliases: technology-emergence holdout; WoS contest extract; practice/unknown-domain benchmark; emerging-topic challenge dataset
