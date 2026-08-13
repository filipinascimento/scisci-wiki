# CitNetExplorer review snowballing

## Summary

CitNetExplorer review snowballing is a review-search method that expands a seed literature set through citation-network neighborhoods and repeated manual relevance screening.

## Canonical Form

- Unit of analysis: seed paper, candidate paper, citation edge, topic-specific review set, or iteration.
- Typical representation: citation network query, citing/cited neighborhood, minimum citation-relation threshold, and relevance-screened candidate set.
- Method target: find additional relevant literature without relying only on keyword search.
- Empirical signature: a seed set grows iteratively as candidates cited by, citing, or citation-linked to relevant papers are screened and retained.

## Uses in Science of Science

- Makes review expansion network-based for topics such as [citation impact indicators](../measures/citation_impact_indicators.md).
- Operates on a source corpus such as the [citation-indicator review corpus](../datasets/citation_indicator_review_corpus.md).
- Complements keyword search when terminology is unstable, field-specific, or historically layered.
- Provides an inspectable bridge between [citation networks](../representations/citation_networks.md) and review construction.

## Operationalization

- Start from topic-specific relevant publications selected by domain knowledge and preliminary searches.
- Use CitNetExplorer to retrieve publications cited by or citing known relevant publications.
- Optionally require a minimum number of citation relations to the relevant set.
- Manually screen candidate titles, abstracts, and publication metadata for topic relevance.
- Repeat the retrieval and screening cycle until additional iterations yield few or no relevant candidates.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) describes using CitNetExplorer to identify additional publications through citation relations to an initial relevant set.
- Waltman gives two network-expansion rules: retrieve all publications cited by or citing already relevant publications, or retrieve publications with at least a minimum number of citation relations to already relevant publications.
- The review then manually judged whether each candidate was relevant, often from title and abstract, and repeated the process until the topic literature seemed sufficiently covered.
- Waltman explicitly warns that the review is not exhaustive; the method supports systematic expansion but still depends on topic selection, screening judgment, and inclusion choices.

## Caveats

- Citation snowballing inherits source-database coverage limits.
- Highly cited or densely connected papers are easier to recover than isolated new work.
- Manual relevance screening should be logged if the review needs formal reproducibility.

## Links

- [citation-indicator review corpus](../datasets/citation_indicator_review_corpus.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation networks](../representations/citation_networks.md)
- [Web of Science](../datasets/web_of_science.md)
- [bibliographic database staleness caveat](../validations/bibliographic_database_staleness_caveat.md)
- [reference set construction](reference_set_construction.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `citnetexplorer_review_snowballing`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: citation-network review snowballing; CitNetExplorer literature search; citation relation review expansion; network-assisted review search
