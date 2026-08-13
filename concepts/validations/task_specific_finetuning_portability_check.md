# Task-specific fine-tuning portability check

## Summary

Task-specific fine-tuning portability check compares a portable fixed scholarly embedding against models fine-tuned separately on downstream relatedness tasks.

## Canonical Form

- Unit of analysis: embedding model, downstream task, task-specific triplet set, multitask model, or fixed representation.
- Typical representation: benchmark table comparing fixed embeddings with task-fine-tuned transformer encoders.
- Validation target: test whether a general citation-pretrained representation transfers without task-specific fine-tuning.
- Empirical signature: a fixed embedding model matches or outperforms task-specific fine-tuned models across multiple tasks.

## Uses in Science of Science

- Strengthens [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md) by comparing against stronger fine-tuned baselines.
- Connects [citation-triplet supervision](../methods/citation_triplet_supervision.md) to [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md) and [co-citation embedding ranking task](co_citation_embedding_ranking_task.md).
- Helps decide whether one embedding model can support concept discovery, recommendation, and clustering workflows without retraining.

## Operationalization

- Build task-specific training triplets for each downstream relatedness source.
- Fine-tune the same transformer backbone on each task and on a multitask mixture.
- Compare these models with the fixed portable embedding on a common benchmark.
- Report whether portability is achieved through equal performance, better performance, or lower maintenance cost at acceptable performance.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) compares SPECTER's fixed representations with SciBERT models fine-tuned on co-view, co-read, co-citation, and multitask data.
- The paper constructs ranking triplets for the task-specific fine-tuning experiments.
- Cohan et al. report that SPECTER outperforms the task-specific and multitask fine-tuned SciBERT variants without additional final task-specific fine-tuning.

## Caveats

- A portability check is benchmark-specific; a new domain or task may still require fine-tuning.
- Fine-tuning comparisons depend on training data volume, negative sampling, and hyperparameter budgets.
- Fixed embeddings can be easier to deploy but may lag specialized models on high-resource tasks.

## Links

- [fixed-embedding transfer evaluation](fixed_embedding_transfer_evaluation.md)
- [SCIDOCS embedding benchmark](scidocs_embedding_benchmark.md)
- [citation-triplet supervision](../methods/citation_triplet_supervision.md)
- [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md)
- [co-citation embedding ranking task](co_citation_embedding_ranking_task.md)
- [weak-relatedness hard-negative sampling](../methods/weak_relatedness_hard_negative_sampling.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `task_specific_finetuning_portability_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: embedding portability check; task fine-tuning comparison; fixed representation portability; multitask fine-tuning benchmark
