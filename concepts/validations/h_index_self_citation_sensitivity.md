# h-index self-citation sensitivity

## Summary

h-index self-citation sensitivity measures whether an author's h-index would change after removing self-citations, especially for papers near the h-index boundary.

## Canonical Form

- Unit of analysis: author, h-core boundary paper, database snapshot, or evaluation portfolio.
- Typical representation: h before and after self-citation removal, number of boundary papers affected, or count of papers dropped from the h-core.
- Mechanism or measurement target: robustness of h-index to author-generated citations and strategic citation near the threshold.
- Empirical signature: h changes only when self-citations are sufficient to move one or more papers below the h threshold.

## Uses in Science of Science

- Provides a metric-robustness check for [h-index](../measures/h_index.md), [m-quotient](../measures/m_quotient.md), and [group h-index](../measures/group_h_index.md).
- Extends broader [self-citation rates](../measures/self_citation_rates.md) to the specific h-index threshold mechanism.
- Gives [responsible metrics](../measures/responsible_metrics.md) an auditable procedure for author-level h-index reporting.
- Helps distinguish routine self-citation from targeted h-index gaming.

## Operationalization

- Compute the original h-index and identify the [h-core publication set](../representations/h_core_publication_set.md), especially papers with citations close to h.
- Remove author self-citations under a declared self-citation definition.
- Recompute h and record which boundary papers leave the h-core.
- Report database, author-disambiguation method, coauthor self-citation rule, and citation census date.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) argues that self-citations can increase h but usually affect h less than total citation count because only papers near the h threshold matter.
- Hirsch gives an explicit correction rule: inspect papers with citations just above h and drop a paper from the h count if self-citations are enough to bring it below the threshold.
- The paper notes that this procedure usually involves very few papers, while scientists intent on raising h through self-citations would naturally target papers just below h.
- This makes h-index self-citation sensitivity a boundary-specific validation rather than a generic self-citation-rate calculation.

## Caveats

- Results depend on the definition of self-citation, especially for coauthored and large-team papers.
- A stable h-index after self-citation removal does not mean self-citation has no effect on broader citation visibility.
- Strategic citation can involve citation farms or reciprocal citations that are not removed by author-overlap rules.

## Links

- [h-index](../measures/h_index.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [m-quotient](../measures/m_quotient.md)
- [group h-index](../measures/group_h_index.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [citation metric gaming](citation_metric_gaming.md)
- [citation source concentration ratio](../measures/citation_source_concentration_ratio.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `h_index_self_citation_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h-index self-citation correction; h-index robustness to self-citation; h-boundary self-citation audit; self-citation-adjusted h-index
