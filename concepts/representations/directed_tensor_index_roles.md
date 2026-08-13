# Directed tensor index roles

## Summary

Covariant and contravariant tensor index positions preserve source-target roles for directed scholarly relations before they are projected or symmetrized.

## Canonical Form

- Unit of analysis: directed edge, tensor index, source node, target node, layer, or relation type.
- Typical representation: source-target index schema for directed multilayer tensors.
- Mechanism, measurement, or validation target: directionality preservation in citation and other directed scholarly networks.
- Empirical signature: in-degree, out-degree, and flow-oriented measures differ because source and target roles remain explicit in the tensor representation.

## Uses in Science of Science

- Connects directed scholarly network representation to [citation networks](citation_networks.md) and [directed citation to co citation symmetrization](../validations/directed_citation_to_co_citation_symmetrization.md).
- Provides a reusable motif for comparing [citation pagerank](../measures/citation_pagerank.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md) in linked scholarly data.

## Operationalization

- Encode citing-to-cited, patent-to-paper, author-to-author, institution-to-institution, and policy-to-paper relations with explicit source and target indices.
- Compute in- and out-oriented quantities before any symmetrization or projection.
- Document whether the analytic direction is citation credit, information flow, attention, or dependency.

## Evidence and Validations

- Verified full-text evidence from De Domenico et al. (2013) shows how monoplex in-degree and out-degree arise from different tensor products and index positions.
- The formalism extends to multilayer scholarly relations where direction is often substantively important.

## Caveats

- Tensor notation preserves direction but does not resolve which substantive interpretation of a citation direction is intended.
- Symmetrized downstream matrices can still erase source-target semantics.

## Links

- [Citation networks](citation_networks.md)
- [Directed-citation to co-citation symmetrization](../validations/directed_citation_to_co_citation_symmetrization.md)
- [Citation PageRank](../measures/citation_pagerank.md)
- [Scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [Multilayer degree centrality](../measures/multilayer_degree_centrality.md)
- [Integrated patent-paper citation networks](integrated_patent_paper_citation_networks.md)

## References

- De Domenico, M., Sole-Ribalta, A., Cozzo, E., Kivela, M., Moreno, Y., Porter, M. A., Gomez, S., & Arenas, A. (2013). Mathematical formulation of multilayer networks. *Physical Review X*, 3, 041022. https://doi.org/10.1103/PhysRevX.3.041022 [OpenAlex: W1647431324; Dimensions: pub.1017821762; WoS: unknown]

## Metadata

- Concept ID: `directed_tensor_index_roles`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: De Domenico et al. (2013) (2013)
- Latest seen paper: De Domenico et al. (2013) (2013)
- Primary reference DOI: `10.1103/physrevx.3.041022`
- OpenAlex ID: `W1647431324`
- Dimensions ID: `pub.1017821762`
- SciSciNet ID: `W3102201777`
- Aliases: covariant direction encoding; source-target tensor roles; directed edge index schema; in-out tensor centrality
