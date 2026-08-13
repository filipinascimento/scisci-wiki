# Connected-pairs-only distance censoring

## Summary

Connected-pairs-only distance censoring is the validation caveat that coauthorship path-length and diameter statistics are calculated only for author pairs that are connected by some finite path.

## Canonical Form

- Unit of analysis: author pair, connected component, giant component, distance statistic, or coauthorship graph.
- Typical representation: finite-distance-only mean, largest finite path, component-restricted diameter, or excluded disconnected-pair audit.
- Validation target: prevent small-world distance claims from being interpreted as applying to disconnected authors outside the measured component.
- Empirical signature: path statistics are reported with component size and an explicit statement that unreachable pairs are excluded or handled separately.

## Uses in Science of Science

- Qualifies [collaboration path length](../measures/collaboration_path_length.md) and [coauthorship network diameter](../measures/coauthorship_network_diameter.md).
- Connects distance statistics to [collaboration giant component](../measures/collaboration_giant_component.md) and [second-largest component check](second_largest_component_check.md).
- Supports cautious interpretation of [small-world collaboration structure](../representations/small_world_collaboration_structure.md).
- Provides a denominator audit for [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md) and [focal collaboration distance profiles](../measures/focal_collaboration_distance_profile.md).

## Operationalization

- Report the component or author-pair set used for each path-length statistic.
- Compute mean and maximum distances only among finite paths, unless an explicit infinite-distance convention is used.
- Pair distance results with largest-component share and disconnected-component counts.
- State whether isolates, small components, and authors outside the giant component are excluded from communication or referral-chain claims.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) computes minimum distances between pairs of scientists in the databases for whom a connection exists.
- Newman reports typical distances around six steps among connected scientists and connects this to private communication across a large giant component.
- The same paper reports network diameters on the order of 20, while explicitly excluding pairs of scientists who are not connected at all outside the giant component.
- This makes component restriction a required validation detail for path and diameter statistics.

## Caveats

- Component-restricted path lengths can make a fragmented field appear more navigable than it is for all authors.
- Assigning infinity to disconnected pairs changes the statistic and should be reported separately from finite-distance summaries.
- Author-disambiguation errors and large-team edges can both create artificial finite paths.

## Links

- [collaboration path length](../measures/collaboration_path_length.md)
- [coauthorship network diameter](../measures/coauthorship_network_diameter.md)
- [collaboration giant component](../measures/collaboration_giant_component.md)
- [second-largest component check](second_largest_component_check.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md)
- [focal collaboration distance profile](../measures/focal_collaboration_distance_profile.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Newman, M. E. J. (2001). The structure of scientific collaboration networks. *Proceedings of the National Academy of Sciences*, 98(2), 404-409. https://doi.org/10.1073/pnas.98.2.404 [OpenAlex: W2125315567; Dimensions: pub.1018280471; WoS: unknown]

## Metadata

- Concept ID: `connected_pairs_only_distance_censoring`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1073/pnas.98.2.404`
- OpenAlex ID: `W2125315567`
- Dimensions ID: `pub.1018280471`
- SciSciNet ID: `W2125315567`
- Aliases: finite-distance censoring; connected-pair path denominator; disconnected-pair exclusion; component-restricted distance
