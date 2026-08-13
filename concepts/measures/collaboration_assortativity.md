# Collaboration assortativity

## Summary

Collaboration assortativity measures whether scientists with many collaborators tend to collaborate with other highly connected scientists or with less connected scientists.

## Canonical Form

- Unit of analysis: author-author edge, field-level coauthorship graph, institution, or time window.
- Typical representation: degree correlation across adjacent author nodes in a collaboration network.
- Mechanism or measurement target: status mixing, hub-to-hub collaboration, hierarchy, and integration between central and peripheral researchers.
- Empirical signature: positive, zero, or negative correlation between collaborator counts at the two ends of coauthorship edges.

## Uses in Science of Science

- Adds a mixing-pattern diagnostic to [coauthorship networks](../representations/coauthorship_networks.md).
- Helps distinguish fields where highly connected scientists cluster together from fields where hubs bridge to less connected authors.
- Complements [collaboration clustering coefficient](collaboration_clustering_coefficient.md) and [scientific brokerage centrality](scientific_brokerage_centrality.md) by measuring degree-degree mixing rather than local triangles or shortest-path brokerage.
- Should be distinguished from [brokerage assortativity check](../validations/brokerage_assortativity_check.md), which asks whether high-betweenness authors collaborate with other high-betweenness authors.
- Can be extended from degree mixing to prestige mixing through [status-assortative collaboration](../mechanisms/status_assortative_collaboration.md).

## Operationalization

- Build an author-disambiguated coauthorship graph.
- Count each author's number of collaborators or weighted collaboration degree.
- Compute the Pearson degree correlation across connected author pairs.
- Repeat by field, career stage, institution type, and time window.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) defines the assortativity coefficient as the correlation between the numbers of collaborators that coauthors have.
- The same verified text reports positive assortativity across the studied collaboration networks, meaning highly collaborative scientists tend to connect with other highly collaborative scientists.
- Newman (2004) leaves the source of this pattern open, making assortativity a diagnostic that should be linked to field organization, prestige, career stage, and team-size norms rather than treated as a complete mechanism.
- Verified full-text evidence from Jones et al. (2008) supplies a prestige-tier analogue: university collaborations can be compared through observed-to-expected tier-pair frequencies.

## Caveats

- Degree correlation is sensitive to field size, team-size distributions, and author disambiguation.
- Positive assortativity does not tell whether the mechanism is status matching, shared field norms, institutional prestige, or large-team structure.
- Weighted and unweighted graphs can give different interpretations.

## Links

- [coauthorship networks](../representations/coauthorship_networks.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [scientific brokerage centrality](scientific_brokerage_centrality.md)
- [brokerage assortativity check](../validations/brokerage_assortativity_check.md)
- [collaboration clustering coefficient](collaboration_clustering_coefficient.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [status-assortative collaboration](../mechanisms/status_assortative_collaboration.md)
- [university tier mixing matrix](../representations/university_tier_mixing_matrix.md)
- [random tier matching baseline](../validations/random_tier_matching_baseline.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]
- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]

## Metadata

- Concept ID: `collaboration_assortativity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Aliases: degree assortativity; coauthor degree correlation; assortative mixing; hub-to-hub collaboration
