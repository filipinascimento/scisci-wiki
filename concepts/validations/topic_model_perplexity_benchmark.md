# Topic-model perplexity benchmark

## Summary

Topic-model perplexity benchmark evaluates how well a topic model predicts held-out words, using lower perplexity as evidence of better probabilistic fit.

## Canonical Form

- Unit of analysis: trained topic model, held-out document set, vocabulary, inference algorithm, topic count, or model run.
- Typical representation: perplexity curve, held-out likelihood, algorithm comparison, or topic-count fit profile.
- Validation target: compare topic-model inference algorithms or hyperparameter settings using predictive performance.
- Empirical signature: models with lower uncertainty in predicting held-out words have lower perplexity.

## Uses in Science of Science

- Validates [topic models](../methods/topic_models.md) before their outputs are used in science maps or trend analyses.
- Supports [topic-number model selection](../methods/topic_number_model_selection.md) and algorithm comparison.
- Provides a benchmark for [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md).
- Pairs with [topic-sampler convergence trace](topic_sampler_convergence_trace.md) so predictive fit is not interpreted from an unstable sampler.
- Complements interpretability checks such as [diagnostic topic-class alignment](diagnostic_topic_class_alignment.md).

## Operationalization

- Split documents or word tokens into training and held-out test sets.
- Fit candidate topic models or inference algorithms on the training data.
- Estimate held-out word likelihood and transform it into perplexity.
- Compare perplexity across algorithms, topic counts, hyperparameters, and iterations.
- Report vocabulary size, held-out construction, and whether lower perplexity aligns with interpretability.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) uses test-set perplexity to compare Gibbs sampling, variational Bayes, and expectation propagation on a synthetic topic dataset.
- The paper defines perplexity as a standard measure for statistical language models and states that lower values indicate better performance.
- Griffiths and Steyvers use the benchmark to show that all algorithms recover the underlying topics and that Gibbs sampling is competitive in speed on the graphical example.
- The article treats perplexity as predictive fit, while later PNAS interpretation also relies on semantic and class-alignment validation.

## Caveats

- Lower perplexity does not guarantee more interpretable or more useful science-of-science topics.
- Perplexity depends on vocabulary, preprocessing, held-out protocol, and smoothing assumptions.
- Benchmark results from synthetic or small examples may not transfer directly to large scientific corpora.

## Links

- [topic models](../methods/topic_models.md)
- [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [topic-sampler convergence trace](topic_sampler_convergence_trace.md)
- [diagnostic topic-class alignment](diagnostic_topic_class_alignment.md)
- [topic-model posterior non-identifiability](topic_model_posterior_nonidentifiability.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_model_perplexity_benchmark`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: held-out topic perplexity; topic predictive fit; topic model language benchmark; held-out word likelihood
