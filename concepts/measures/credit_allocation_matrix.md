# Credit allocation matrix

## Summary

A credit allocation matrix encodes how much each coauthor of a focal paper is credited by the author lists of papers that are co-cited with that focal paper.

## Canonical Form

- Unit of analysis: focal paper, coauthor, co-cited paper, citation neighborhood, or author-paper credit layer.
- Typical representation: matrix `A` where rows are focal-paper coauthors and columns are co-cited papers.
- Measurement target: local attribution of credit from related papers before aggregation into coauthor credit shares.
- Empirical signature: the matrix assigns larger local credit to coauthors whose related work is repeatedly co-cited with the focal paper.

## Uses in Science of Science

- Provides the intermediate representation behind [collective credit allocation](collective_credit_allocation.md).
- Converts a symmetric [coauthorship network](../representations/coauthorship_networks.md) into an attribution-aware paper-author layer.
- Supports comparisons between equal fractional counting, author-order heuristics, and citation-based community credit.

## Operationalization

- Choose a focal multi-author paper and identify all papers that cite it.
- Collect the papers co-cited with the focal paper by those citing papers.
- For each co-cited paper, assign local fractional credit to focal-paper coauthors who appear on that co-cited paper.
- Weight the matrix columns by co-citation strength and normalize the resulting credit vector.
- Replace the fractional baseline with [credit allocation priors](../methods/credit_allocation_priors.md) when field-specific author-order information is being tested.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) defines a credit allocation matrix whose entries indicate the credit a focal-paper coauthor receives from each co-cited paper.
- The paper uses a fractional matrix that does not depend on author order, making the method discipline-independent in its baseline form.
- Shen and Barabasi compute total author credit as the weighted sum of local credit from co-cited papers, then normalize the vector into fractional credit shares.

## Caveats

- A fractional local matrix can miss field-specific author-order norms, contribution statements, and domain conventions.
- Citation neighborhoods reflect perceived intellectual proximity and reputation, not a direct observation of labor.
- The matrix can over-credit senior or established researchers if their prior work dominates the co-citation neighborhood.

## Links

- [collective credit allocation](collective_credit_allocation.md)
- [co-citation credit attribution](../methods/co_citation_credit_attribution.md)
- [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md)
- [credit allocation priors](../methods/credit_allocation_priors.md)
- [credit-share evolution](credit_share_evolution.md)
- [Nobel-prize credit validation](../validations/nobel_prize_credit_validation.md)
- [coauthorship and collaboration networks](../representations/coauthorship_networks.md)
- [citation networks](../representations/citation_networks.md)
- [responsible metrics](responsible_metrics.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `credit_allocation_matrix`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: credit matrix; author-paper credit matrix; local credit allocation; co-cited-paper credit matrix
