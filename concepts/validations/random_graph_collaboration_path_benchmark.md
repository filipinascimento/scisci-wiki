# Random-graph collaboration path benchmark

## Summary

Random-graph collaboration path benchmark compares observed mean coauthorship distances with the expected `log(N) / log(z)` distance of a random graph with similar size and average degree.

## Canonical Form

- Unit of analysis: coauthorship network, field, source-domain panel, connected component, author count, or mean degree.
- Typical representation: observed mean path length versus random-graph expected path length.
- Validation target: show whether short collaboration paths are small-world-like rather than merely a consequence of network size and density.
- Empirical signature: observed distances are comparable to random-graph distances while clustering remains much higher than random.

## Uses in Science of Science

- Provides a null benchmark for [collaboration path length](../measures/collaboration_path_length.md).
- Helps validate [small-world collaboration structure](../representations/small_world_collaboration_structure.md) by pairing short paths with high clustering.
- Separates path-length scaling from field-size differences in [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md).
- Supplies a reusable baseline for current Dimensions or OpenAlex coauthorship networks.

## Operationalization

- Compute the number of author nodes `N` and average collaborator degree `z` for the relevant connected graph or source-domain panel.
- Estimate the random-graph expected path scale as `log(N) / log(z)`.
- Compare observed mean geodesic distances to that benchmark across fields or time windows.
- Interpret the benchmark together with clustering, component size, and source coverage.
- Use degree-preserving nulls when heavy tails or large-team projections make a simple random graph too crude.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) compares average distances in collaboration networks to a random graph with the same number of scientists and mean number of collaborators.
- Newman plots observed distances against `log(N) / log(z)` for multiple source-domain panels and Los Alamos subject divisions.
- The paper reports a strong correlation between observed distances and the expected logarithmic scaling.
- Newman presents this as empirical support that collaboration networks have small-world path-length scaling.
- The same evidence is paired with high clustering, which distinguishes collaboration networks from simple random graphs.

## Caveats

- The simple random-graph benchmark ignores degree heterogeneity, clustering, fields, institutions, geography, and team-size projection.
- The benchmark should be restricted or adapted when disconnected components are large.
- Comparable path length alone is not enough for a small-world claim; clustering and component structure matter.

## Links

- [collaboration path length](../measures/collaboration_path_length.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [small-world scientific communication diffusion](../mechanisms/small_world_scientific_communication_diffusion.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]

## Metadata

- Concept ID: `random_graph_collaboration_path_benchmark`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: random graph path benchmark; logN logz collaboration benchmark; small-world path null; collaboration distance random baseline
