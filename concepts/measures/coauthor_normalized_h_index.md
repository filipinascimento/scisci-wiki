# Coauthor-normalized h-index

## Summary

Coauthor-normalized h-index is a proposed adjustment that scales an author's h-index by typical coauthor count or collaboration size so large-team publication practices do not inflate individual author comparisons.

## Canonical Form

- Unit of analysis: author, career cohort, field, subfield, or evaluation portfolio.
- Typical representation: h-index with an explicit coauthor-count adjustment, sensitivity analysis, or field-specific collaboration-size stratum.
- Measurement target: broad citation impact after accounting for the amount of shared authorship behind the h-core.
- Empirical signature: raw h-index rankings change when papers from many-author fields or large collaborations are discounted or separately benchmarked.

## Uses in Science of Science

- Refines [h-index](h_index.md) comparisons when author portfolios differ strongly in collaboration size.
- Provides an h-specific bridge to [full versus fractional citation counting](full_fractional_citation_counting.md) and [collective credit allocation](collective_credit_allocation.md).
- Helps diagnose [large-team h-index inflation](../validations/large_team_h_index_inflation.md) without treating all coauthored papers as equivalent.
- Complements [h-index field-scale caveat](../validations/h_index_field_scale_caveat.md), because collaboration size can vary across fields and subfields.
- Connects metric reporting to [responsible metrics](responsible_metrics.md) and [portfolio-based researcher assessment](../methods/portfolio_based_researcher_assessment.md).

## Operationalization

- Compute an author's h-index and identify the [h-core publication set](../representations/h_core_publication_set.md).
- For h-core papers, record author counts, team-size distribution, field, database, and citation census date.
- Report raw h alongside a coauthor-size sensitivity analysis, such as fractional h-core credit, average-coauthor-stratified comparisons, or separate benchmarks for large-team fields.
- When comparing individuals, state whether the adjustment uses all papers, only h-core papers, or field-specific expected team sizes.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) warns that a high h-index achieved mostly through many-coauthor papers can treat an individual overly generously.
- Hirsch specifically suggests normalizing h by a factor reflecting average number of coauthors when individuals differ strongly in coauthor counts.
- The same passage links this adjustment to large-collaboration subfields, making coauthor-normalized h-index a guardrail for author-level metric use rather than a replacement metric with one fixed formula.
- Later full/fractional citation-counting work gives a broader validation logic: full counting captures participation, while fractional counting approximates contribution.

## Caveats

- Average coauthor count is only a proxy for contribution and can penalize legitimate team science.
- Equal fractional credit may misrepresent author roles, seniority, infrastructure labor, or consortium norms.
- The appropriate adjustment can differ across fields, document types, and contribution taxonomies.
- Coauthor-normalized h-index should be reported as a sensitivity analysis unless a local evaluation policy defines a specific formula.

## Links

- [h-index](h_index.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [large-team h-index inflation](../validations/large_team_h_index_inflation.md)
- [h-index field-scale caveat](../validations/h_index_field_scale_caveat.md)
- [full versus fractional citation counting](full_fractional_citation_counting.md)
- [collective credit allocation](collective_credit_allocation.md)
- [team authorship share](team_authorship_share.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [responsible metrics](responsible_metrics.md)
- [portfolio-based researcher assessment](../methods/portfolio_based_researcher_assessment.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `coauthor_normalized_h_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: coauthor-adjusted h-index; collaboration-size adjusted h-index; fractional h-index sensitivity; average-coauthor h-index normalization
