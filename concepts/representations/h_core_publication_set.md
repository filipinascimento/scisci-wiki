# h-core publication set

## Summary

The h-core publication set is the set of a scholar's h papers that each have at least h citations and therefore jointly determine the scholar's [h-index](../measures/h_index.md).

## Canonical Form

- Unit of analysis: author, group, institution, journal, or other unit with a sorted citation record.
- Typical representation: ranked publication list, boundary paper at citation count h, or set of h highly cited papers.
- Mechanism or measurement target: the durable body of cited work behind an h-index value, not only the scalar value.
- Empirical signature: the set contains h papers with at least h citations, while the remaining papers have no more than h citations under the chosen database and date.

## Uses in Science of Science

- Makes the publication set behind [h-index](../measures/h_index.md) auditable.
- Helps diagnose whether an author-level h-index reflects a broad research program, large-team papers, review articles, or a narrow set of boundary papers.
- Provides the local set to inspect for [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md).
- Provides the boundary object behind [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md), because papers far above or below the threshold do not change h directly.
- Links author evaluation to paper-level concepts such as [citation impact indicators](../measures/citation_impact_indicators.md), [author contribution statements](../datasets/author_contribution_statements.md), and [collective credit allocation](../measures/collective_credit_allocation.md).

## Operationalization

- Sort an author's publications by citation count in descending order at a stated census date.
- Find the largest rank h for which the hth paper has at least h citations.
- Store the h papers at or above that threshold as the h-core publication set.
- Audit boundary papers, coauthorship, document type, and database coverage before interpreting the scalar h-index.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) defines h as the number of papers with citation number at least h and states that the remaining papers have no more than h citations.
- Hirsch uses the example of Edward Witten having 110 papers with at least 110 citations, making the h-index a claim about a concrete set of publications.
- The paper calls the h papers with citations above the threshold "highly cited papers" and contrasts their contribution to total citations with sparsely cited papers.
- Hirsch also notes that papers can enter, leave, and re-enter the h count over a career, so the h-core set is date-specific rather than permanently fixed.
- That dynamic caveat is split out as [h-index monotonicity and h-core turnover](../validations/h_index_monotonicity_turnover.md).

## Caveats

- The h-core depends on database coverage, author disambiguation, citation census date, and treatment of self-citations.
- The h-core hides contribution roles unless combined with authorship or contributorship data.
- A paper near the h boundary can change the set with only a few additional or removed citations.

## Links

- [h-index](../measures/h_index.md)
- [m-quotient](../measures/m_quotient.md)
- [group h-index](../measures/group_h_index.md)
- [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md)
- [h-index monotonicity and h-core turnover](../validations/h_index_monotonicity_turnover.md)
- [h-index total-citation scaling](../measures/h_index_total_citation_scaling.md)
- [h-index tail insensitivity](../validations/h_index_tail_insensitivity.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `h_core_publication_set`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h-core; h papers; h-index core; highly cited h set
