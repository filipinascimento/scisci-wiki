# Focal collaboration distance profile

## Summary

Focal collaboration distance profile measures how far one named scientist is from other scientists in a coauthorship network, turning average path length into a person-centered reachability profile.

## Canonical Form

- Unit of analysis: focal scientist, connected component, coauthorship path, field, or source-domain panel.
- Typical representation: distance distribution from a focal node, mean focal distance, Erdos-number style score, Doe-number comparison, or reachable-author share.
- Measurement target: whether a scientist occupies an unusually central or peripheral position in the collaboration network.
- Empirical signature: a focal scientist has shorter or longer distances to the rest of the connected component than the field average.

## Uses in Science of Science

- Converts [collaboration path length](collaboration_path_length.md) into a focal-author measure.
- Provides an interpretable companion to [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md) and [scientific brokerage centrality](scientific_brokerage_centrality.md).
- Helps explain [small-world collaboration structure](../representations/small_world_collaboration_structure.md) through named examples rather than only aggregate means.
- Can identify central conveners, unusually peripheral researchers, or reference individuals used to calibrate field connectedness.

## Operationalization

- Build an author-disambiguated coauthorship network for a field and time window.
- Select a focal scientist and restrict distance calculations to the component containing that scientist.
- Compute shortest-path distances from the focal scientist to all reachable authors.
- Report the mean, median, tail, maximum finite distance, and unreachable-author share.
- Compare the focal profile with the network-wide distance distribution and with profiles for other focal scientists.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) discusses Erdos numbers as distances from mathematicians to Paul Erdos in the Mathematical Reviews collaboration network.
- Newman reports that the mean distance from Erdos to other mathematicians is lower than the mean distance in the full mathematics network, making the focal profile evidence of unusual network centrality.
- The same paper notes that mean distances from other individuals are sometimes called Doe numbers, providing a general focal-distance comparison rather than only a named historical case.
- Newman uses these focal distances alongside field-level average distance and diameter, showing that person-centered reachability is a separate layer of collaboration-network interpretation.

## Caveats

- Focal profiles depend on source coverage, author disambiguation, component restriction, and whether large-team edges are filtered or weighted.
- A short distance profile does not prove active communication or willingness to make referrals.
- Famous focal scientists can be atypical, so comparisons should include ordinary or randomly sampled focal authors.

## Links

- [collaboration path length](collaboration_path_length.md)
- [referral-chain shortest paths](../methods/referral_chain_shortest_paths.md)
- [scientific brokerage centrality](scientific_brokerage_centrality.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [coauthorship network diameter](coauthorship_network_diameter.md)
- [collaboration giant component](collaboration_giant_component.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `focal_collaboration_distance_profile`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: Erdos-number profile; Doe-number profile; focal coauthor distance; author-centered collaboration distance
