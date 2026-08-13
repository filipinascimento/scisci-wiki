# Triadic closure in collaboration

## Summary

Triadic closure in collaboration is the mechanism where two scientists become more likely to collaborate after they share a mutual collaborator.

## Canonical Form

- Unit of analysis: potential author-author tie, mutual collaborator, field, team, or time window.
- Typical representation: temporal coauthorship graph with open and closed triads.
- Mechanism: mutual collaborators create awareness, trust, referral paths, or coordination opportunities that raise the probability of a new collaboration tie.
- Empirical signature: pairs with shared collaborators form future coauthorship ties at higher rates than comparable pairs without shared collaborators.

## Uses in Science of Science

- Gives a micro-mechanism behind [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md).
- Links static [coauthorship networks](../representations/coauthorship_networks.md) to dynamic team formation.
- Complements [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md), because closure among prior collaborators and closure through mutual collaborators are related but distinct tie-formation patterns.
- Helps explain why collaboration networks can be locally clustered while still globally reachable.
- Should be interpreted alongside [shared-context collaboration clustering](shared_context_collaboration_clustering.md), because closed triads can arise from common institutions, journals, conferences, or fields without direct referral.

## Operationalization

- Construct a temporal coauthorship network with [time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md).
- Identify author pairs that have not previously collaborated.
- Count the number of mutual collaborators at time `t`.
- Estimate future coauthorship probability by mutual-collaborator count, controlling for field, career age, productivity, institution, and team-size effects.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) treats coauthorship networks as unusually useful for studying time evolution because publication dates give approximate tie-formation times.
- Newman reports that previously unconnected scientists with one mutual collaborator are far more likely to coauthor later than scientists with none, and pairs with two mutual collaborators are even more likely.
- Verified full-text evidence from Guimera et al. (2005) provides a complementary team-assembly model: incumbents can repeat prior collaborations or initiate new incumbent ties, and those local choices shape whether a field forms isolated clusters or a large connected component.
- Together the papers position triadic closure as both a measurable tie-formation rule and a mechanism feeding field-level clustering.

## Caveats

- Mutual collaborators may proxy for shared field, institution, advisor lineage, or project membership rather than social closure alone.
- Use [shared-context collaboration clustering](shared_context_collaboration_clustering.md) to separate contextual opportunity from direct collaborator introduction when metadata allow it.
- Large-team papers can create many triads at once.
- The mechanism should be estimated with temporal ordering; cross-sectional clustering is not enough.

## Links

- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md)
- [small-world collaboration structure](../representations/small_world_collaboration_structure.md)
- [shared-context collaboration clustering](shared_context_collaboration_clustering.md)
- [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md)
- [team assembly mechanisms](team_assembly_mechanisms.md)
- [invisible college](invisible_college.md)
- [scientific brokerage centrality](../measures/scientific_brokerage_centrality.md)
- [repeat incumbent collaboration fraction](../measures/repeat_incumbent_collaboration_fraction.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]
- Guimera, R., Uzzi, B., Spiro, J., & Amaral, L. A. N. (2005). Team assembly mechanisms determine collaboration network structure and team performance. *Science*, 308(5722), 697-702. https://doi.org/10.1126/science.1106340 [OpenAlex: W2150443611; Dimensions: pub.1062451305; WoS: unknown]

## Metadata

- Concept ID: `triadic_closure_in_collaboration`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Guimera et al. (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Aliases: coauthorship triadic closure; mutual collaborator effect; collaboration closure; network transitivity mechanism
