# Topic-model posterior non-identifiability

## Summary

Topic-model posterior non-identifiability is the validation problem that topic labels can permute across posterior samples or chains, so topic identities must be aligned before content-specific comparisons.

## Canonical Form

- Unit of analysis: topic index, posterior sample, Markov chain, topic-word distribution, document-topic estimate, or topic label.
- Typical representation: label-switching audit, topic alignment table, permutation-invariant statistic, or matched topic cluster.
- Validation target: avoid interpreting topic index numbers as stable identities when the posterior is invariant to topic permutations.
- Empirical signature: topic `j` in one posterior sample may not correspond to topic `j` in another sample.

## Uses in Science of Science

- Audits outputs from [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md).
- Protects [topic-word probability distributions](../representations/topic_word_probability_distributions.md) and [topic assignment tagging](../methods/topic_assignment_tagging.md) from false cross-sample comparisons.
- Supports stable [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md) when topics are compared across chains or time windows.
- Provides a general uncertainty caveat for text-based science maps.

## Operationalization

- Treat topic indices as arbitrary labels unless a topic-alignment procedure has been applied.
- Compute permutation-invariant summary statistics when possible.
- Align topics across posterior samples using similarity of topic-word distributions, anchor words, or optimization over pairwise matches.
- Report whether document-topic estimates come from one posterior sample, aligned samples, or aggregation over permutation-invariant quantities.
- Run stability checks across random seeds, chains, and nearby topic counts before interpreting individual topic histories.

## Evidence and Validations

- Verified full-text evidence from Griffiths and Steyvers (2004) states that estimates relying on the content of individual topics cannot simply be combined across posterior samples.
- The paper explains that mixtures of topics are invariant to permutations of topic indices, so topic index `j` need not refer to similar words in different samples.
- Griffiths and Steyvers note that statistics insensitive to permutation can be aggregated across samples, while topic-content analyses require more care.
- Their displayed PNAS analyses therefore use a single posterior sample for content-specific topic interpretation, while noting the permutation issue.

## Caveats

- Single-sample topic interpretation is simple but can understate posterior uncertainty.
- Alignment procedures can fail when topics are split, merged, or weakly separated.
- Non-identifiability is a statistical property of the model, not an implementation bug.

## Links

- [topic models](../methods/topic_models.md)
- [collapsed Gibbs topic sampler](../methods/collapsed_gibbs_topic_sampler.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-number model selection](../methods/topic_number_model_selection.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [topic assignment tagging](../methods/topic_assignment_tagging.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]

## Metadata

- Concept ID: `topic_model_posterior_nonidentifiability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Griffiths and Steyvers (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Dimensions ID: `pub.1026144033`
- SciSciNet ID: `W2001082470`
- Aliases: topic label switching; topic index nonidentifiability; posterior topic permutation; topic alignment caveat
