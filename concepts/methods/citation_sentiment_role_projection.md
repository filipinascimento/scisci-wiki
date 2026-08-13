# Citation sentiment-role projection

## Summary

Citation sentiment-role projection collapses fine-grained citation-function labels into broader polarity or top-level role groups for evaluation, retrieval, or interpretable summaries.

## Canonical Form

- Unit of analysis: citation-function label, collapsed role group, sentiment class, citation context, or classifier output.
- Typical representation: mapping from detailed roles to positive, negative, neutral, contrastive, or weakness classes.
- Method target: simplify citation-function labels while preserving the main interpretive distinction needed for a task.
- Empirical signature: fine labels such as use, basis, modification, similarity, support, and motivation are grouped into broader positive or continuative roles.

## Uses in Science of Science

- Provides a bridge between [citation function taxonomies](../representations/citation_function_taxonomies.md) and coarse [citation contexts and functions](../representations/citation_contexts.md).
- Supports classifier evaluation when rare labels make fine-grained prediction unstable.
- Helps [citation-aware search and summarization](citation_aware_search_summarization.md) offer simple relation filters.
- Makes citation-function results easier to compare with sentiment and stance analysis.

## Operationalization

- Define a mapping from detailed citation-function labels to top-level groups.
- Separate weakness, positive use or support, contrast, and neutral categories when relation-aware navigation is the goal.
- Optionally map weakness and negative contrast to negative sentiment, positive use/support categories to positive sentiment, and neutral contrasts to neutral sentiment.
- Report performance under both the fine-grained taxonomy and the collapsed projection.
- Avoid using collapsed polarity as a substitute for detailed citation role when the distinction matters.

## Evidence and Validations

- Verified full-text evidence from Teufel et al. (2006) collapses their 12 citation-function categories into four top-level classes: weakness, positive, contrast, and neutral.
- The paper also tests a sentiment-style grouping that maps weakness and negative contrast to negative, positive role categories to positive, and neutral contrast plus neutral labels to neutral.
- The full text also motivates [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md), which helps explain why explicit negative classes remain rare.
- Teufel et al. report that collapsed groupings increase aggregate performance relative to the fine-grained 12-class task.
- The full text cautions that sentiment is related to citation function but does not capture all differences among usefulness, contrast, similarity, support, and neutral description.

## Caveats

- Polarity projections can erase important distinctions between method use, intellectual ancestry, support, and motivation.
- Neutral contrast is not the same as negative sentiment.
- Improved performance on collapsed labels should not be read as evidence that fine-grained roles are unnecessary.

## Links

- [citation function taxonomies](../representations/citation_function_taxonomies.md)
- [citation function classification](citation_function_classification.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [citation-function class imbalance](../validations/citation_function_class_imbalance.md)
- [negative citation meekness effect](../mechanisms/negative_citation_meekness_effect.md)
- [citation-function agreement validation](../validations/citation_function_agreement_validation.md)
- [citation-aware search and summarization](citation_aware_search_summarization.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Teufel, S., Siddharthan, A., & Tidhar, D. (2006). Automatic classification of citation function. *Proceedings of the 2006 Conference on Empirical Methods in Natural Language Processing*, 103-110. https://doi.org/10.3115/1610075.1610091 [OpenAlex: W2088336913; Dimensions: pub.1099244275; WoS: unknown]

## Metadata

- Concept ID: `citation_sentiment_role_projection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Teufel et al. (2006) (2006)
- Latest seen paper: Teufel et al. (2006) (2006)
- Primary reference DOI: `10.3115/1610075.1610091`
- OpenAlex ID: `W2088336913`
- Dimensions ID: `pub.1099244275`
- SciSciNet ID: `W2088336913`
- Aliases: citation polarity grouping; citation role collapse; citation sentiment mapping; top-level citation roles
