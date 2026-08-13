# Weak-relatedness hard-negative sampling

## Summary

Weak-relatedness hard-negative sampling chooses nonzero but weakly related papers as hard negatives for triplet training on scholarly relatedness tasks.

## Canonical Form

- Unit of analysis: query paper, positive paper, hard negative paper, relatedness signal, or triplet.
- Typical representation: triplet loss with positives drawn from strongest relatedness and hard negatives drawn from weakest nonzero relatedness.
- Method target: train models to distinguish high relatedness from weak relatedness rather than only from random unrelated items.
- Empirical signature: a co-view, co-read, or co-citation task supplies both high-relatedness positives and low-relatedness hard negatives.

## Uses in Science of Science

- Extends [hard-negative citation sampling](hard_negative_citation_sampling.md) beyond citation neighborhoods.
- Supports [task-specific fine-tuning portability check](../validations/task_specific_finetuning_portability_check.md) and [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md).
- Helps build paper embeddings that distinguish degrees of relatedness for recommendation and discovery.

## Operationalization

- For each query paper, sample positives from the strongest co-viewed, co-read, co-cited, or otherwise related papers.
- Sample hard negatives from papers with nonzero but minimal relatedness to the query.
- Keep easy random negatives separate from weak-relatedness hard negatives.
- Report the relatedness source and threshold used to define weak nonzero relatedness.

## Evidence and Validations

- Verified full-text evidence from Cohan et al. (2020) fine-tunes SciBERT on co-view, co-read, and co-citation task data using triplet ranking loss.
- The paper samples positives from the most co-viewed, co-read, or co-cited papers.
- Cohan et al. choose hard negatives as the least nonzero co-viewed, co-read, or co-cited papers for the corresponding query.

## Caveats

- Weak relatedness is source-dependent: a weak co-view signal may not mean weak topical or methodological relatedness.
- Nonzero behavioral relatedness can encode interface exposure or popularity.
- Hard negatives from noisy weak labels can make training unstable if the label source is not audited.

## Links

- [hard-negative citation sampling](hard_negative_citation_sampling.md)
- [citation-triplet supervision](citation_triplet_supervision.md)
- [task-specific fine-tuning portability check](../validations/task_specific_finetuning_portability_check.md)
- [user-activity paper relatedness labels](../datasets/user_activity_paper_relatedness_labels.md)
- [co-citation embedding ranking task](../validations/co_citation_embedding_ranking_task.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)

## References

- Cohan, A., Feldman, S., Beltagy, I., Downey, D., & Weld, D. S. (2020). SPECTER: Document-level representation learning using citation-informed transformers. *Proceedings of ACL 2020*, 2270-2282. https://doi.org/10.18653/v1/2020.acl-main.207 [OpenAlex: W3016913119; Dimensions: pub.1129756783; WoS: unknown]

## Metadata

- Concept ID: `weak_relatedness_hard_negative_sampling`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Cohan et al. (2020) (2020)
- Latest seen paper: Cohan et al. (2020) (2020)
- Primary reference DOI: `10.18653/v1/2020.acl-main.207`
- OpenAlex ID: `W3016913119`
- Dimensions ID: `pub.1129756783`
- SciSciNet ID: `W3035324702`
- Aliases: weak nonzero hard negatives; graded relatedness hard negatives; task-specific hard negative sampling; behavioral relatedness negatives
