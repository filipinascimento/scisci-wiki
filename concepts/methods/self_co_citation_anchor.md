# Self co-citation anchor

## Summary

Self co-citation anchor treats a focal paper as co-cited with itself at its own citation count, stabilizing credit estimates against peripheral co-cited papers.

## Canonical Form

- Unit of analysis: focal paper, co-citation strength, citation count, credit matrix, or credit-share vector.
- Typical representation: self-anchor row or weight in a focal-paper co-citation computation.
- Method target: prevent weakly related co-cited papers from dominating credit estimates for highly cited focal work.
- Empirical signature: highly cited focal papers have credit shares less sensitive to marginal co-cited-paper additions.

## Uses in Science of Science

- Refines [co-citation credit attribution](co_citation_credit_attribution.md).
- Stabilizes [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md) inputs before multiplying by [credit allocation matrix](../measures/credit_allocation_matrix.md).
- Provides a reusable normalization rule for focal-node-centered citation methods.

## Operationalization

- Build the set of papers that cite the focal paper and papers co-cited with it.
- Assign the focal paper itself a co-citation strength equal to its citation count.
- Include the focal paper in the weighted credit calculation.
- Normalize the resulting author-credit vector after the anchor and co-cited-paper weights are applied.
- Test sensitivity to including or excluding the self anchor for low-citation papers.

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) states that the target paper has a co-citation strength equal to its citation count.
- The paper notes that this makes credit shares for highly cited papers less likely to be affected by other co-cited papers.
- The anchor is part of the method that combines co-citation strength with the credit allocation matrix.

## Caveats

- The anchor can overweight the focal paper when early citation counts are sparse.
- It stabilizes perceived-credit estimates but does not validate actual contribution.
- Different focal-node methods may need alternative self-weight rules.

## Links

- [co-citation credit attribution](co_citation_credit_attribution.md)
- [focal-paper co-citation network](../representations/focal_paper_co_citation_network.md)
- [credit allocation matrix](../measures/credit_allocation_matrix.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [credit allocation maturation lag](../validations/credit_allocation_maturation_lag.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; SciSciNet: W2037997493; WoS: unknown]

## Metadata

- Concept ID: `self_co_citation_anchor`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: focal-paper self anchor; self co-citation weight; target-paper citation anchor; co-citation stabilization anchor
