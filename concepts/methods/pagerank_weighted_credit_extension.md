# PageRank-weighted credit extension

## Summary

PageRank-weighted credit extension is a proposed variant of co-citation credit allocation that gives more weight to citing papers with greater citation influence.

## Canonical Form

- Unit of analysis: target paper, citing paper, co-cited paper, citing-paper influence weight, coauthor, or credit-share vector.
- Typical representation: co-citation credit attribution with PageRank-style or citation-count-based weights on citing papers.
- Method target: distinguish credit signals from influential citing papers from signals from low-visibility citing papers.
- Empirical signature: author credit shares can change when co-citation evidence is weighted by the influence of the papers producing that evidence.

## Uses in Science of Science

- Extends [co-citation credit attribution](co_citation_credit_attribution.md) and [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md) with influence-aware citing-paper weights.
- Connects authorship-credit measures to [citation PageRank](../measures/citation_pagerank.md) and recursive prestige weighting.
- Provides a suggested experiment for [collective credit allocation](../measures/collective_credit_allocation.md) when raw co-citation counts may overweight low-impact citing papers.
- Requires the same source-coverage checks as [APS-WoS credit robustness](../validations/aps_wos_credit_robustness.md).

## Operationalization

- Build the usual focal-paper co-citation neighborhood.
- Assign each citing paper an influence weight, such as citation count, PageRank score, or field-normalized influence.
- Recompute co-citation strengths by summing citing-paper weights rather than counting citing papers equally.
- Multiply the credit allocation matrix by the weighted co-citation vector and normalize the author credit shares.
- Compare rankings against the unweighted method and against external validations such as prize-linked cases.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) proposes, as a further improvement, a PageRank-style algorithm where the citing set is weighted by citation count.
- The paper motivates the extension by noting that citations from more influential papers would then receive more weight.
- The proposal appears after the authors present the unweighted co-citation method, Nobel validation, independent-author comparison, and APS-versus-WoS robustness checks.

## Caveats

- Influence weighting can amplify cumulative advantage and make credit estimates more sensitive to review articles or canonical citing papers.
- Citation counts for citing papers require their own census date, field normalization, and age correction.
- A weighted extension should be validated against the unweighted baseline rather than assumed superior.

## Links

- [co-citation credit attribution](co_citation_credit_attribution.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md)
- [citation PageRank](../measures/citation_pagerank.md)
- [APS-WoS credit robustness](../validations/aps_wos_credit_robustness.md)
- [credit allocation maturation lag](../validations/credit_allocation_maturation_lag.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `pagerank_weighted_credit_extension`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: influence-weighted credit allocation; PageRank-style credit weighting; citation-weighted co-citation credit; weighted citing-set credit
