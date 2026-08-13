# Topic-granularity hyperparameter sensitivity

## Summary

Topic-granularity hyperparameter sensitivity is the validation problem that topic-model scale depends on smoothing and prior choices, so a discovered topic count is not purely an empirical property of the corpus.

## Canonical Form

- Unit of analysis: topic model, corpus, topic count, Dirichlet hyperparameter, preprocessing run, or model-selection audit.
- Typical representation: sensitivity table over topic counts, alpha/beta settings, stop lists, and held-out or integrated likelihood values.
- Validation target: whether inferred research areas are stable across reasonable topic-model granularity choices.
- Empirical signature: larger or smaller smoothing values shift the model toward coarser disciplines or finer specialties.

## Uses in Science of Science

- Qualifies [topic-number model selection](../methods/topic_number_model_selection.md) before treating topics as scientific fields, specialties, or funding-relevant research areas.
- Provides a statistical counterpart to [manual topic-granularity check](manual_topic_granularity_check.md), which asks whether topics are interpretable at the chosen scale.
- Helps explain why topic-model science maps can disagree even when they use the same document corpus.
- Links text-mined field discovery to [research area term labeling](../methods/research_area_term_labeling.md) and [topic-word probability distributions](../representations/topic_word_probability_distributions.md).

## Operationalization

- Fit or sample topic models over a grid of topic counts, Dirichlet hyperparameters, and preprocessing choices.
- Record how the preferred topic count changes when smoothing, vocabulary filtering, stop lists, and corpus boundaries change.
- Inspect whether downstream topic labels, trend estimates, and class alignments survive nearby settings.
- Report the chosen topic scale as an analyst- and prior-conditioned representation rather than as an intrinsic number of research areas.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) states that increasing the document-topic smoothing parameter can reduce the number of topics used to describe a dataset.
- The paper explains that scientific documents can be sensibly factorized at multiple scales, from broad disciplines to specific research areas.
- Their PNAS analysis uses a small smoothing value to obtain a fine-grained decomposition and then performs Bayesian model selection over candidate topic counts.
- The authors warn that the selected topic count depends on hyperparameters, stop-list construction, corpus inclusion choices, and the prior over the number of topics.

## Caveats

- Sensitivity checks can reveal instability but do not by themselves identify the most substantively useful topic scale.
- Hyperparameter effects interact with document length, vocabulary pruning, and field imbalance.
- A stable likelihood optimum can still produce topics that are too coarse, too fine, or semantically mixed for a downstream science-of-science question.

## Links

- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic models](../methods/topic_models.md)
- [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md)
- [manual topic-granularity check](manual_topic_granularity_check.md)
- [topic semantic artifact caveat](topic_semantic_artifact_caveat.md)
- [diagnostic topic-class alignment](diagnostic_topic_class_alignment.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [research area term labeling](../methods/research_area_term_labeling.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_granularity_hyperparameter_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: topic-scale hyperparameter sensitivity; topic granularity sensitivity; LDA smoothing granularity; topic-count prior sensitivity
