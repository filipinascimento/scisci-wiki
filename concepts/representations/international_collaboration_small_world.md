# International collaboration small-world structure

## Summary

International collaboration small-world structure is the pattern in which international coauthorship networks combine local clustering with short paths or broad reachability across the collaboration graph.

## Canonical Form

- Unit of analysis: author, country, subfield, collaboration tie, or international coauthorship network.
- Typical representation: clustering coefficient, path-length evidence, high-clustering comparison to random networks, and field-specific network maps.
- Mechanism or measurement target: efficient information exchange through clustered but globally reachable international collaboration communities.
- Empirical signature: observed clustering coefficients are much higher than random-network baselines while networks remain broadly connected.

## Uses in Science of Science

- Extends [small-world collaboration structure](small_world_collaboration_structure.md) to cross-border collaboration.
- Provides a structural interpretation for [subfield international coauthorship networks](subfield_international_coauthorship_networks.md).
- Helps explain why international collaboration can support both local clique-based knowledge exchange and access to distant expertise.

## Operationalization

- Build an international coauthorship graph at author, country, city, or subfield level.
- Compute clustering coefficients and path-length or component measures.
- Compare observed clustering against random networks with similar size or degree structure.
- Repeat by field to identify whether small-world properties are general or field-specific.

## Evidence and Validations

- Verified full-text evidence from Wagner and Leydesdorff (2005) reports clustering coefficients for six subfield international coauthorship networks and compares them to random-network values.
- With the exception of mathematical logic, their table shows mean clustering coefficients orders of magnitude higher than expected in random networks.
- The paper interprets these international collaboration networks as small worlds, enabling localized exchange of information among cliques.

## Caveats

- Wagner and Leydesdorff emphasize clustering more directly than path-length measurement, so small-world claims should be paired with explicit path metrics when possible.
- Subfield sample size and journal-set construction can affect clustering estimates.
- High clustering can arise from multi-author papers, large facilities, or field conventions rather than a single social mechanism.

## Links

- [small-world collaboration structure](small_world_collaboration_structure.md)
- [international collaboration networks](international_collaboration_networks.md)
- [subfield international coauthorship networks](subfield_international_coauthorship_networks.md)
- [international collaboration preferential attachment](../mechanisms/international_collaboration_preferential_attachment.md)
- [continuant collaborators](../mechanisms/continuant_collaborators.md)
- [continuant gatekeeping](../mechanisms/continuant_gatekeeping.md)
- [institutional constraint degree-tail](../validations/institutional_constraint_degree_tail.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [collaboration path length](../measures/collaboration_path_length.md)
- [coauthorship network diameter](../measures/coauthorship_network_diameter.md)

## References

- Wagner, C. S., & Leydesdorff, L. (2005). Network structure, self-organization, and the growth of international collaboration in science. *Research Policy*, 34(10), 1608-1618. https://doi.org/10.1016/j.respol.2005.08.002 [OpenAlex: W1964920419; Dimensions: pub.1029657568; WoS: unknown]

## Metadata

- Concept ID: `international_collaboration_small_world`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wagner and Leydesdorff (2005) (2005)
- Latest seen paper: Wagner and Leydesdorff (2005) (2005)
- Primary reference DOI: `10.1016/j.respol.2005.08.002`
- OpenAlex ID: `W1964920419`
- Dimensions ID: `pub.1029657568`
- SciSciNet ID: `W1964920419`
- Aliases: international coauthorship small world; ICS small-world network; cross-border small-world collaboration; clustered international collaboration
