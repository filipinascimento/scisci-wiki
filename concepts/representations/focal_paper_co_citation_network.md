# Focal-paper co-citation network

## Summary

Focal-paper co-citation network represents the citation neighborhood around a target paper by linking it to papers that are cited together with it by later work.

## Canonical Form

- Unit of analysis: target paper, citing paper, co-cited paper, co-citation strength, or target-paper author.
- Typical representation: paper-centered weighted co-citation network with edge weights from the target paper to co-cited papers.
- Representation target: the body of related work that a community associates with a focal contribution.
- Empirical signature: co-cited papers by particular coauthors increase those coauthors' inferred credit for the target paper.

## Uses in Science of Science

- Supplies the network representation behind [co-citation credit attribution](../methods/co_citation_credit_attribution.md).
- Converts [co-citation](co_citation.md) into a focal-paper attribution layer rather than a global science map.
- Feeds [credit allocation matrix](../measures/credit_allocation_matrix.md) and [collective credit allocation](../measures/collective_credit_allocation.md).
- Helps explain why [coauthorship networks](coauthorship_networks.md) need attribution-aware layers for large-team work.

## Operationalization

- Select a target paper `p0`.
- Identify papers that cite `p0`, then collect all papers cited by those citing papers.
- Define the co-citation strength between `p0` and each co-cited paper as the number of citing papers that cite both.
- Preserve `p0` as co-cited with itself, with strength equal to its citation count.
- Attach author lists to co-cited papers before computing credit shares.
- Optionally replace equal citing-paper counts with influence-aware weights in a [PageRank-weighted credit extension](../methods/pagerank_weighted_credit_extension.md).

## Evidence and Validations

- Verified full-text evidence from Shen and Barabasi (2014) constructs a `p0`-centric co-citation network where link weights denote co-citation strength between co-cited papers and the target paper.
- The paper defines co-citation strength as the number of times `p0` and a co-cited paper are cited together by papers that cite `p0`.
- Shen and Barabasi argue that co-cited papers perceived as relevant to `p0` should increase the corresponding author's perceived contribution to `p0`.
- The full text notes that the target paper is also treated as a co-cited paper of itself, making highly cited target papers less sensitive to other co-cited papers.

## Caveats

- The network captures citation-based perception, not actual labor.
- Reviews, canonical references, and reputation effects can dominate a focal paper's co-citation neighborhood.
- Co-citation neighborhoods depend on database coverage and citation-window length.

## Links

- [co-citation credit attribution](../methods/co_citation_credit_attribution.md)
- [co-citation](co_citation.md)
- [credit allocation matrix](../measures/credit_allocation_matrix.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [credit allocation priors](../methods/credit_allocation_priors.md)
- [PageRank-weighted credit extension](../methods/pagerank_weighted_credit_extension.md)
- [coauthorship and collaboration networks](coauthorship_networks.md)
- [citation networks](citation_networks.md)

## References

- Shen, H.-W., & Barabasi, A.-L. (2014). Collective credit allocation in science. *Proceedings of the National Academy of Sciences*, 111(34), 12325-12330. https://doi.org/10.1073/pnas.1401992111 [OpenAlex: W2037997493; Dimensions: pub.1014325139; WoS: unknown]

## Metadata

- Concept ID: `focal_paper_co_citation_network`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Shen and Barabasi (2014) (2014)
- Latest seen paper: Shen and Barabasi (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1401992111`
- OpenAlex ID: `W2037997493`
- Dimensions ID: `pub.1014325139`
- SciSciNet ID: `W2037997493`
- Aliases: p0-centric co-citation network; focal co-citation neighborhood; target-paper co-citation network; paper-centered co-citation graph
