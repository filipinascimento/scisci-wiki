# Topic-sampler convergence trace

## Summary

Topic-sampler convergence trace validates Markov chain topic-model inference by checking whether log-likelihood or comparable posterior diagnostics stabilize across iterations and runs.

## Canonical Form

- Unit of analysis: Markov chain, topic sampler run, iteration, log-likelihood value, posterior sample, or convergence diagnostic.
- Typical representation: log-likelihood trace, multi-run overlay, burn-in decision, lagged sample protocol, or iteration checkpoint plot.
- Validation target: ensure sampled topic assignments are not being interpreted before the Markov chain reaches a stable posterior region.
- Empirical signature: log-likelihood stabilizes after burn-in and independent runs reach similar values.

## Uses in Science of Science

- Provides an inference-quality check for [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md).
- Complements predictive [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md) with a sampler-level diagnostic.
- Guards downstream uses such as [document-topic mixtures](../representations/document_topic_mixtures.md), [topic trend slope](../measures/topic_trend_slope.md), and [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md).
- Helps separate unstable sampler behavior from substantive claims about fields, documents, or trends.

## Operationalization

- Run one or more topic-sampler chains with fixed preprocessing and topic count.
- Record log-likelihood or posterior score across iterations.
- Compare traces across chains and choose a burn-in period after stabilization.
- Use lagged samples after burn-in when estimating topic-word and document-topic quantities.
- Report convergence diagnostics along with topic count, hyperparameters, and sample schedule.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) shows a Gibbs-sampler log-likelihood trace whose values stabilize after a few hundred iterations.
- The paper overlays traces for four runs and states that the log-likelihood values are consistent across runs.
- In the PNAS analysis, Griffiths and Steyvers use eight samples from the last 1,000 iterations of a 10,000-iteration chain, separated by a lag of 100 iterations.
- The article links these traces to the emergence of recognizable topics as the Markov chain approaches the posterior distribution.

## Caveats

- Log-likelihood stabilization is necessary but not sufficient for full posterior convergence.
- Topic label switching and multimodality can leave content-level comparisons unstable even when likelihood traces look stable.
- Convergence diagnostics depend on topic count, hyperparameters, initialization, corpus size, and preprocessing.

## Links

- [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md)
- [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md)
- [topic-model posterior non-identifiability](topic_model_posterior_nonidentifiability.md)
- [topic models](../methods/topic_models.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md)
- [topic trend slope](../measures/topic_trend_slope.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_sampler_convergence_trace`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: Gibbs sampler trace; topic model convergence trace; topic MCMC convergence diagnostic; LDA log-likelihood trace
