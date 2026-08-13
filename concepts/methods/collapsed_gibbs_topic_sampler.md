# Collapsed Gibbs topic sampler

## Summary

Collapsed Gibbs topic sampler infers latent topic assignments by sampling word-topic labels after integrating out document-topic and topic-word distributions.

## Canonical Form

- Unit of analysis: word token, topic assignment, document, topic, vocabulary term, or posterior sample.
- Typical representation: Markov chain over topic assignments, sparse count tables, posterior samples, or sampled document-topic and topic-word estimates.
- Method target: approximate the posterior distribution of topic assignments in latent Dirichlet allocation.
- Empirical signature: topic assignments are repeatedly resampled using counts of word-topic and document-topic co-occurrence.

## Uses in Science of Science

- Provides an inference method for [topic models](topic_models.md) on scientific text corpora.
- Produces [document-topic mixtures](../representations/document_topic_mixtures.md) and [topic-word probability distributions](../representations/topic_word_probability_distributions.md).
- Supports [topic-number model selection](topic_number_model_selection.md) when model evidence is approximated from posterior samples.
- Generates samples for [topic assignment tagging](topic_assignment_tagging.md) and uncertainty-aware topic summaries.
- Requires [topic-sampler convergence trace](../validations/topic_sampler_convergence_trace.md) checks before interpreting sampled topic assignments as stable corpus structure.

## Operationalization

- Tokenize documents and choose topic count plus Dirichlet hyperparameters.
- Initialize each token with a topic assignment.
- Repeatedly sample each token's topic from the conditional distribution based on word-topic and document-topic counts.
- Cache sparse nonzero counts to scale to large corpora.
- Track log-likelihood or posterior traces across iterations and chains to select burn-in and sampling windows.
- Discard burn-in iterations, use lagged posterior samples, and estimate document-topic and topic-word distributions from sampled assignments.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) presents a Markov chain Monte Carlo algorithm for inference in latent Dirichlet allocation.
- The paper integrates out the topic-word and document-topic distributions, then samples the posterior over word-topic assignments.
- Griffiths and Steyvers state that the full conditional depends only on counts of how often a word is assigned to a topic and how often a topic occurs in a document.
- The article emphasizes that caching sparse nonzero counts allows the algorithm to run with minimal memory requirements.
- The same paper reports log-likelihood traces stabilizing after a few hundred iterations and uses lagged samples from the end of a 10,000-iteration chain for the PNAS analysis.

## Caveats

- Gibbs samples require convergence checks, burn-in choices, and lag choices.
- Posterior samples can be label-permuted, so topic identities across chains require care.
- Results depend on preprocessing, topic count, and hyperparameters.

## Links

- [topic models](topic_models.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [topic-number model selection](topic_number_model_selection.md)
- [topic assignment tagging](topic_assignment_tagging.md)
- [topic-sampler convergence trace](../validations/topic_sampler_convergence_trace.md)
- [topic-model perplexity benchmark](../validations/topic_model_perplexity_benchmark.md)
- [topic-model posterior non-identifiability](../validations/topic_model_posterior_nonidentifiability.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `collapsed_gibbs_topic_sampler`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: Gibbs sampling for LDA; collapsed topic inference; word-topic Gibbs sampler; MCMC topic inference
