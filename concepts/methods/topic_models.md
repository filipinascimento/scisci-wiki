# Topic models

## Summary

Topic models infer latent themes from text and are used to summarize, cluster, and track scientific content over time.

## Canonical Form

- Unit of analysis: document, abstract, paragraph, claim, term, or field.
- Typical representation: document-topic and topic-word distributions.
- Mechanism or measurement target: thematic structure and topic evolution.
- Empirical signature: coherent term clusters and changing topic prevalence.

## Uses in Science of Science

- Used for science maps, field emergence, novelty, literature navigation, and concept extraction.
- Complements citation networks and embeddings by providing interpretable term distributions.
- Useful for expanding this wiki from full-text papers.
- Supports [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md) when latent topics are tied to citation contexts and origin papers.
- The Griffiths and Steyvers workflow is split into reusable pieces: [PNAS abstract topic corpus](../datasets/pnas_abstract_topic_corpus.md), [topic-word probability distributions](../representations/topic_word_probability_distributions.md), [collapsed Gibbs topic sampler](collapsed_gibbs_topic_sampler.md), [topic-sampler convergence trace](../validations/topic_sampler_convergence_trace.md), [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md), [topic-class profile matrix](../representations/topic_class_profile_matrix.md), [topic trend slope](../measures/topic_trend_slope.md), [topic-model perplexity benchmark](../validations/topic_model_perplexity_benchmark.md), and [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md).

## Operationalization

- Inputs: titles, abstracts, full text, cleaned tokens, metadata, time windows.
- Measures: topic prevalence, topic entropy, topic similarity, emergence, decline, document-topic mixtures.
- Common model forms: LDA, dynamic topic models, correlated topic models, BERTopic-style clustered embeddings.

## Evidence and Validations

- Griffiths and Steyvers demonstrated topic modeling for scientific topics in PNAS.
- Verified full-text evidence from Griffiths and Steyvers (2004) uses probabilistic topic models to infer latent scientific topics from text and track how topic prevalence changes over time.
- Their paper also makes the document-topic mixture, topic-number selection, and word-topic tagging steps explicit enough to reuse as separate science-of-science workflow motifs.
- The paper is a direct method anchor for using article text as an evidence layer in this wiki, alongside citation networks and embeddings.
- Verified full-text evidence from Meng et al. (2024) applies interpretable LDA to full-text citation contexts to identify hidden-citation catchphrases and foundational papers.

## Caveats

- Topic labels are analyst-assigned and can be unstable.
- Preprocessing, stopword choices, corpus scope, and model count strongly affect results.

## Links

- [semantic embeddings](../representations/semantic_embeddings.md)
- [expert semantic map proxy](../representations/expert_semantic_map_proxy.md)
- [word-document cooccurrence matrix](../representations/word_document_cooccurrence_matrix.md)
- [scientific abstract preprocessing protocol](scientific_abstract_preprocessing_protocol.md)
- [document-topic mixtures](../representations/document_topic_mixtures.md)
- [topic-word probability distributions](../representations/topic_word_probability_distributions.md)
- [PNAS abstract topic corpus](../datasets/pnas_abstract_topic_corpus.md)
- [collapsed Gibbs topic sampler](collapsed_gibbs_topic_sampler.md)
- [topic-sampler convergence trace](../validations/topic_sampler_convergence_trace.md)
- [career work embedding trajectories](career_work_embedding_trajectories.md)
- [topic prevalence dynamics](topic_prevalence_dynamics.md)
- [topic trend slope](../measures/topic_trend_slope.md)
- [topic-number model selection](topic_number_model_selection.md)
- [manual topic-granularity check](../validations/manual_topic_granularity_check.md)
- [topic assignment tagging](topic_assignment_tagging.md)
- [topic-model posterior non-identifiability](../validations/topic_model_posterior_nonidentifiability.md)
- [topic-model perplexity benchmark](../validations/topic_model_perplexity_benchmark.md)
- [synthetic topic recovery benchmark](../validations/synthetic_topic_recovery_benchmark.md)
- [diagnostic topic-class alignment](../validations/diagnostic_topic_class_alignment.md)
- [diagnostic topic ratio](../measures/diagnostic_topic_ratio.md)
- [topic-class profile matrix](../representations/topic_class_profile_matrix.md)
- [catchphrase-foundational-paper matching](catchphrase_foundational_paper_matching.md)
- [catchphrase-foundational exclusivity](../validations/catchphrase_foundational_exclusivity.md)
- [science maps](../representations/science_maps.md)
- [research fronts](../mechanisms/research_fronts.md)
- [field classifications](../measures/field_classifications.md)
- [novelty conventionality](../mechanisms/novelty_conventionality.md)

## References

- Griffiths, T. L., & Steyvers, M. (2004). Finding scientific topics. *Proceedings of the National Academy of Sciences*, 101(suppl_1), 5228-5235. https://doi.org/10.1073/pnas.0307752101 [OpenAlex: W2001082470; Dimensions: pub.1026144033; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Meng, X., Varol, O., & Barabasi, A.-L. (2024). Hidden citations obscure true impact in science. *PNAS Nexus*, 3(5), pgae155. https://doi.org/10.1093/pnasnexus/pgae155 [OpenAlex: W4396694003; Dimensions: pub.1171389234; WoS: unknown]

## Metadata

- Concept ID: `topic_models`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Griffiths and Steyvers (2004) (2004)
- Latest seen paper: Meng et al. (2024) (2024)
- Primary reference DOI: `10.1073/pnas.0307752101`
- OpenAlex ID: `W2001082470`
- Aliases: LDA; dynamic topic models; text-based field discovery
