# Large-team h-index inflation

## Summary

Large-team h-index inflation is the validation risk that raw h-index values can overstate individual contribution when many h-core papers come from large collaborations or many-author subfields.

## Canonical Form

- Unit of analysis: author, h-core paper set, field, subfield, collaboration, or evaluation cohort.
- Typical representation: raw h-index compared with coauthor-count distributions, fractional-credit variants, or field-specific team-size benchmarks.
- Validation target: whether an author's h-index reflects broad individual contribution or participation in highly cited collective outputs.
- Empirical signature: authors with many large-team h-core papers have high raw h values that are sensitive to coauthor-size adjustment.

## Uses in Science of Science

- Provides an h-specific counterpart to [mega-paper full-count inflation](mega_paper_full_count_inflation.md).
- Motivates [coauthor-normalized h-index](../measures/coauthor_normalized_h_index.md), [full versus fractional citation counting](../measures/full_fractional_citation_counting.md), and role-aware author metrics.
- Strengthens [h-index field-scale caveat](h_index_field_scale_caveat.md), especially in subfields where large collaborations are routine.
- Connects h-index interpretation to [author contribution statements](../datasets/author_contribution_statements.md), [authorship mode contribution share](../measures/authorship_mode_contribution_share.md), and [collective credit allocation](../measures/collective_credit_allocation.md).

## Operationalization

- Identify the author's h-core papers and compute the author-count distribution within that set.
- Compare raw h to variants that discount or stratify many-author papers.
- Flag portfolios where most h-core papers come from collaboration-size regimes unlike the comparison group.
- Report whether the metric is being used to measure individual achievement, collective participation, or field-level visibility.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) states that an author with a high h-index achieved mostly through papers with many coauthors would be treated too kindly by raw h.
- Hirsch also notes that subfields with typically large collaborations will show larger h values and suggests coauthor-based normalization in cases with large coauthor-count differences.
- Verified full-text evidence from Nielsen and Andersen (2021) supports the broader counting-rule concern: full-count author citation indicators are especially sensitive to large-scale experiments and many-author papers.

## Caveats

- Large teams can represent genuine joint contribution, not just metric inflation.
- Coauthor counts alone do not distinguish leadership, technical work, data production, supervision, or conceptual contribution.
- Inflation checks should not be used to devalue collaboration-heavy fields; they should make comparison groups and counting rules explicit.

## Links

- [h-index](../measures/h_index.md)
- [coauthor-normalized h-index](../measures/coauthor_normalized_h_index.md)
- [h-core publication set](../representations/h_core_publication_set.md)
- [h-index field-scale caveat](h_index_field_scale_caveat.md)
- [mega-paper full-count inflation](mega_paper_full_count_inflation.md)
- [full versus fractional citation counting](../measures/full_fractional_citation_counting.md)
- [team authorship share](../measures/team_authorship_share.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]
- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]

## Metadata

- Concept ID: `large_team_h_index_inflation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: h-index coauthor-count inflation; many-author h-index bias; consortium h-index inflation; large-collaboration h-index caveat
