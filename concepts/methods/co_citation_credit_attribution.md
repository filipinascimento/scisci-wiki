# Co-citation credit attribution

## Summary

Co-citation credit attribution infers coauthor credit for a focal paper from how later papers co-cite the focal paper with related work by its coauthors.

## Canonical Form

- Unit of analysis: focal paper, citing paper, co-cited paper, coauthor, or citation neighborhood.
- Typical representation: focal-paper-centered co-citation network plus author-paper credit matrix.
- Method target: infer community-perceived contribution from citation behavior around a paper.
- Empirical signature: coauthors whose related papers are repeatedly co-cited with the focal paper receive larger inferred credit shares.

## Uses in Science of Science

- Implements [collective credit allocation](../measures/collective_credit_allocation.md) without relying only on author order or equal fractional counting.
- Provides a method for attribution-aware evaluation in large-team and cross-field collaborations.
- Links [citation networks](../representations/citation_networks.md) and [coauthorship networks](../representations/coauthorship_networks.md) through a paper-author credit layer.

## Operationalization

- For a focal paper, identify its citing papers.
- Within those citing papers, identify the papers co-cited with the focal paper.
- Compute each co-cited paper's co-citation strength with the focal paper.
- Use a [credit allocation matrix](../measures/credit_allocation_matrix.md) to distribute each co-cited paper's local credit among focal-paper coauthors.
- Multiply the matrix by the co-citation strength vector and normalize the resulting credit shares.
- Represent the citation neighborhood explicitly as a [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md), and choose [credit allocation priors](credit_allocation_priors.md) when author-order or corresponding-author metadata should enter the local credit matrix.
- Test [PageRank-weighted credit extension](pagerank_weighted_credit_extension.md) when influential citing papers should count more than low-visibility citing papers.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) constructs a focal-paper-centered co-citation network where link weights measure co-citation strength.
- The paper states that co-citation strength captures the intuition that papers perceived as relevant to the focal paper increase the associated author's perceived contribution.
- Shen and Barabasi validate the method against Nobel-winning papers and use it to inspect temporal changes in credit share.

## Caveats

- Citation practices can be strategic, incomplete, or distorted by reviews and canonical references.
- Co-citation attribution can reproduce reputation advantages because highly visible prior work is more likely to be co-cited.
- The method should be interpreted as community-perceived credit, not a direct measure of actual contribution.
- Citation-based credit shares are vulnerable to [credit allocation maturation lag](../validations/credit_allocation_maturation_lag.md) and should not be used as the sole basis for evaluation.

## Links

- [collective credit allocation](../measures/collective_credit_allocation.md)
- [credit allocation matrix](../measures/credit_allocation_matrix.md)
- [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md)
- [credit allocation priors](credit_allocation_priors.md)
- [PageRank-weighted credit extension](pagerank_weighted_credit_extension.md)
- [independent-author credit comparison](independent_author_credit_comparison.md)
- [credit-share evolution](../measures/credit_share_evolution.md)
- [credit allocation maturation lag](../validations/credit_allocation_maturation_lag.md)
- [credit metric jockeying risk](../validations/credit_metric_jockeying_risk.md)
- [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md)
- [co-citation](../representations/co_citation.md)
- [citation networks](../representations/citation_networks.md)
- [coauthorship and collaboration networks](../representations/coauthorship_networks.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `co_citation_credit_attribution`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: co-citation credit method; citation-based author credit; focal-paper co-citation attribution; community credit inference
