# Statistical-physics network method transfer

## Summary

Statistical-physics network method transfer is the use of tools developed for physical and complex networks to analyze scientific collaboration, authorship, and other social structures of science.

## Canonical Form

- Unit of analysis: collaboration network, author network, affiliation network, citation network, or projected bipartite graph.
- Typical representation: graph statistics such as degree distributions, clustering, path length, components, and random-graph comparisons.
- Method target: import a quantitative network toolkit into empirical science-of-science data.
- Empirical signature: collaboration data are treated as a large-scale network whose global structure can be compared with null models and physical-network regularities.

## Uses in Science of Science

- Provides a methodological bridge into [coauthorship networks](../representations/coauthorship_networks.md).
- Supports comparisons with [random-graph collaboration path benchmark](../validations/random_graph_collaboration_path_benchmark.md).
- Connects collaboration data to [scale-free degree distributions](../measures/scale_free_degree_distributions.md) and clustering diagnostics.
- Helps explain why network science became a core representation layer for science-of-science work.

## Operationalization

- Construct the collaboration graph from bibliographic records.
- Choose node and edge definitions before measuring network structure.
- Compute degree distributions, components, path lengths, and clustering.
- Compare observed structure with analytically or computationally generated null networks.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) frames scientific collaboration as a social network that can be studied with statistical-physics methods.
- The paper analyzes large collaboration networks using component, path-length, clustering, and degree-distribution measures.
- This method transfer turns publication records into a testbed for general network theory and social-structure measurement.

## Caveats

- Physical-network analogies can hide domain-specific authorship, credit, and data-coverage rules.
- Projection from papers to author-author edges changes the meaning of network measures.
- Imported null models must be adapted to collaboration-specific constraints such as team size and field coverage.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [random-graph collaboration path benchmark](../validations/random_graph_collaboration_path_benchmark.md)
- [scale-free degree distributions](../measures/scale_free_degree_distributions.md)
- [team-size preserving clustering null](team_size_preserving_clustering_null.md)
- [collaboration path length](../measures/collaboration_path_length.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; SciSciNet: W2025572017]

## Metadata

- Concept ID: `statistical_physics_network_method_transfer`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2001 PRE) (2001)
- Latest seen paper: Newman (2001 PRE) (2001)
- Primary reference DOI: `10.1103/physreve.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `W2025572017`
- Aliases: physics-to-social-network method transfer; complex-network scientometrics; statistical-physics collaboration analysis; network-physics method import
