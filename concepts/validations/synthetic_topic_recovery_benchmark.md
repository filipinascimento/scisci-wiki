# Synthetic topic recovery benchmark

## Summary

Synthetic topic recovery benchmark validates a topic-model inference procedure by testing whether it recovers known planted topics in simulated documents.

## Canonical Form

- Unit of analysis: synthetic document, planted topic, word distribution, or inference run.
- Typical validation: generate documents from known topic distributions and compare inferred topics with the planted structure.
- Validation target: recovery accuracy under controlled ground truth.
- Empirical signature: inferred topic assignments and word probabilities match the simulation parameters.

## Uses in Science of Science

- Complements [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md).
- Validates [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md) before applying it to scientific text.
- Helps distinguish model failure from corpus ambiguity.
- Provides a controlled check for [topic models](../methods/topic_models.md).

## Operationalization

- Specify known topic-word and document-topic distributions.
- Generate synthetic word-document data from those distributions.
- Run the inference algorithm on the synthetic corpus.
- Compare recovered topics and assignments with the known truth.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) uses a synthetic corpus with known latent topics to demonstrate that their sampling algorithm can recover the original structure.
- The synthetic example precedes application to PNAS abstracts.
- This validation differs from held-out likelihood because the correct latent structure is known by construction.

## Caveats

- Synthetic data may be easier than real scientific text.
- Recovery under a matched model does not guarantee validity under misspecification.
- Results depend on topic separability, corpus size, and priors.

## Links

- [topic models](../methods/topic_models.md)
- [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md)
- [topic-model perplexity benchmark](topic_model_perplexity_benchmark.md)
- [topic-sampler convergence trace](topic_sampler_convergence_trace.md)
- [topic-model posterior non-identifiability](topic_model_posterior_nonidentifiability.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; SciSciNet: W2001082470; WoS: unknown]

## Metadata

- Concept ID: `synthetic_topic_recovery_benchmark`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: planted-topic recovery benchmark; synthetic LDA validation; topic recovery simulation
