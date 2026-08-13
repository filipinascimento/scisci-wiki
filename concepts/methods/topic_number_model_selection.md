# Topic-number model selection

## Summary

Topic-number model selection chooses the number and granularity of latent topics before interpreting scientific topic models.

## Canonical Form

- Unit of analysis: corpus, topic model, topic count, hyperparameter setting, or validation run.
- Typical representation: model evidence, held-out likelihood, coherence score, stability curve, or sensitivity table.
- Mechanism or measurement target: the scale at which a corpus should be decomposed into topics.
- Empirical signature: model fit improves up to a topic count and then plateaus or declines as the model begins to capture noise.

## Uses in Science of Science

- Prevents topic-based field maps from treating arbitrary model settings as substantive scientific structure.
- Helps make [topic prevalence dynamics](topic_prevalence_dynamics.md) comparable across years, fields, or corpora.
- Supports audit trails for text-based concept extraction and science-map construction.
- Can be run with posterior samples from a [collapsed Gibbs topic sampler](collapsed_gibbs_topic_sampler.md), but the selected count should still be checked against interpretability and class alignment.
- Splits hyperparameter- and preprocessing-driven scale effects into [topic-granularity hyperparameter sensitivity](../validations/topic_granularity_hyperparameter_sensitivity.md).

## Operationalization

- Define candidate topic counts and preprocessing choices before interpretation.
- Fit or sample models over the candidate values.
- Compare integrated likelihood, held-out likelihood, topic coherence, stability, or expert interpretability.
- Record the chosen topic count and sensitivity of downstream conclusions to nearby values.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) treats the number of topics as a Bayesian model-selection problem.
- Their PNAS corpus analysis evaluates topic counts from 50 to 1,000 topics after preprocessing 28,154 abstracts from 1991 to 2001.
- The likelihood profile peaks at 300 topics under their chosen hyperparameters, which they interpret as rich enough to fit the available information but not so complex that it starts fitting noise.
- The paper explicitly notes that topic granularity depends on hyperparameters, stop lists, and corpus construction, making sensitivity reporting part of the motif.

## Caveats

- A statistically preferred topic count need not be the most useful count for interpretation, retrieval, or policy use.
- Topic-number choices are not portable across corpora without checking vocabulary, document length, and field coverage.
- Dynamic corpora may need stable topic anchors or explicit refitting audits before comparing topics over time.

## Links

- [topic models](topic_models.md)
- [collapsed Gibbs topic sampler](collapsed_gibbs_topic_sampler.md)
- [topic prevalence dynamics](topic_prevalence_dynamics.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-model perplexity benchmark](../validations/topic_model_perplexity_benchmark.md)
- [topic-granularity hyperparameter sensitivity](../validations/topic_granularity_hyperparameter_sensitivity.md)
- [manual topic-granularity check](../validations/manual_topic_granularity_check.md)
- [topic semantic artifact caveat](../validations/topic_semantic_artifact_caveat.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [field classifications](../measures/field_classifications.md)
- [science map update workflows](science_map_update_workflows.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_number_model_selection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Aliases: topic count selection; topic granularity selection; Bayesian topic model selection; topic model dimensionality
