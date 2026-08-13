# Author-count citation normalization test

## Summary

Author-count citation normalization test asks whether citation counts should be normalized by the number of authors on a paper, and whether that normalization yields a stable distribution across team sizes.

## Canonical Form

- Unit of analysis: paper, author count, citation count, field-year cell, normalized citation ratio, or team-size stratum.
- Typical representation: citations per author, team-size-specific citation distributions, or data-collapse test by author-count bins.
- Method target: separate citation differences due to collaboration size from field-year citation baselines.
- Empirical signature: a proposed author-count normalization produces comparable citation distributions across papers with different numbers of authors.

## Uses in Science of Science

- Extends [field-normalized citation impact](../measures/field_normalized_citation_impact.md) by adding team-size or author-count as a possible normalization dimension.
- Connects citation evaluation to [team impact advantage](../mechanisms/team_impact_advantage.md), [relative team-impact ratio](../measures/relative_team_impact_ratio.md), and [collective credit allocation](../measures/collective_credit_allocation.md).
- Provides a suggested experiment for [responsible metrics](../measures/responsible_metrics.md) when multi-author papers receive more citations partly because of team size.

## Operationalization

- Define field-year reference sets and compute ordinary field-normalized citation scores.
- Stratify papers by number of authors or team-size bins.
- Test candidate normalizations such as citations per author, fractional citation credit, or regression-adjusted author-count residuals.
- Compare distributional collapse, ranking changes, and field balance under each normalization.
- Report whether author-count adjustment improves validity for the evaluation task or merely changes the unit of credit.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) lists the number of authors as another known source of citation bias, noting that author count is correlated with higher citation counts.
- The paper proposes an analogous relative indicator, the number of citations per author, and asks whether this normalization would lead to a universal distribution for any number of authors.
- Radicchi et al. frame this as future work rather than a validated result, making it a suggested experiment for citation-normalization design.

## Caveats

- Dividing citations by author count can penalize legitimate team science and does not measure individual contribution.
- Team size, interdisciplinarity, international collaboration, and field convention are intertwined.
- Author-count normalization should be interpreted alongside contribution-role data when available.

## Links

- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `author_count_citation_normalization_test`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: citations per author normalization; author-count citation adjustment; team-size citation normalization; author-normalized citation distribution
