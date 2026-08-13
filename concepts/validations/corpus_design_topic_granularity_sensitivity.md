# Corpus-design topic-granularity sensitivity

## Summary

Corpus-design topic-granularity sensitivity is the dependence of inferred topic count and topic meaning on preprocessing, inclusion rules, priors, and corpus construction.

## Canonical Form

- Unit of analysis: corpus, tokenization rule, stop list, prior, topic count, or model run.
- Typical representation: sensitivity table comparing topic counts, topic labels, or fit curves under alternative corpus designs.
- Validation target: whether topic-model conclusions survive reasonable corpus-design choices.
- Empirical signature: model-selected topic granularity shifts when vocabulary, priors, document set, or inclusion rules change.

## Uses in Science of Science

- Adds corpus-construction checks to [topic-granularity hyperparameter sensitivity](topic_granularity_hyperparameter_sensitivity.md).
- Protects [semantic bundle trend detection](../methods/semantic_bundle_trend_detection.md) from preprocessing artifacts.
- Links dataset choices in [PNAS abstract topic corpus](../datasets/pnas_abstract_topic_corpus.md) to downstream model conclusions.
- Extends [scientific abstract preprocessing protocol](../methods/scientific_abstract_preprocessing_protocol.md) into a validation motif.

## Operationalization

- Record document inclusion rules, text fields, tokenization, stemming, stopwords, vocabulary thresholds, and priors.
- Refit models under a small grid of plausible corpus-design alternatives.
- Compare selected topic counts, fit curves, topic labels, and trend conclusions.
- Flag concepts that appear only under one arbitrary design.
- Keep the final corpus design reproducible in scripts or manifests.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) documents preprocessing and model-count choices for the PNAS abstract corpus.
- The paper notes that details such as vocabulary processing, priors, and model selection affect topic granularity.
- Their model-selection results therefore depend on corpus design as well as the formal topic model.
- This motif captures the validation burden created by those design choices.

## Caveats

- Full sensitivity grids can be expensive for large corpora.
- Some preprocessing choices are substantive decisions rather than nuisance parameters.
- Stable fit statistics do not guarantee stable topic interpretations.

## Links

- [PNAS abstract topic corpus](../datasets/pnas_abstract_topic_corpus.md)
- [scientific abstract preprocessing protocol](../methods/scientific_abstract_preprocessing_protocol.md)
- [topic-granularity hyperparameter sensitivity](topic_granularity_hyperparameter_sensitivity.md)
- [topic-dimensionality overfit turnover](topic_dimensionality_overfit_turnover.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic semantic artifact caveat](topic_semantic_artifact_caveat.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `corpus_design_topic_granularity_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: corpus-design topic sensitivity; preprocessing topic granularity; topic corpus sensitivity; topic-count corpus dependence
