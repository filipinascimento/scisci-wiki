# Excess collaboration clustering

## Summary

Excess collaboration clustering is the clustering that remains in a coauthorship network after accounting for triangles created mechanically by multi-author papers, making it a validation bridge between projected byline artifacts and social or organizational closure.

## Canonical Form

- Unit of analysis: projected coauthorship graph, connected triple, triangle, source-domain panel, or field.
- Typical representation: observed clustering coefficient minus projection-aware null clustering, residual clustering share, or excess transitivity.
- Validation target: whether high clustering reflects more than simultaneous membership in the same paper team.
- Empirical signature: a team-size-preserving null model explains part of observed clustering, but a nontrivial residual remains.

## Uses in Science of Science

- Extends [large-team triangle inflation](large_team_triangle_inflation.md) from an artifact warning into a residual-clustering interpretation.
- Provides a validation layer for [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md).
- Connects measured clustering to mechanisms such as [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md), shared institutions, laboratory hierarchies, and field subcommunities.
- Uses [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md) as the method-level baseline for same-paper triangle effects.
- Helps compare clustering across [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md) with different team-size distributions.

## Operationalization

- Compute observed clustering in the projected coauthorship graph.
- Generate a projection-aware random model, such as a [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md), that preserves paper-team sizes or author-paper degree constraints.
- Estimate the share of observed clustering explained by same-paper triangles.
- Interpret only the residual as evidence for social closure, institutional proximity, subfield organization, or repeated collaboration.
- Report whether the residual changes after removing mega-collaboration records or using weighted coauthorship edges.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) reports high clustering coefficients in collaboration networks, with values around 0.3 to 0.4 in most studied databases and as high as 0.7 in SPIRES.
- Newman notes that papers with three or more authors automatically contribute triangles and therefore create a trivial source of clustering in projected coauthorship graphs.
- The paper then uses a random graph model that mimics this group-size effect and reports that only about half of observed clustering is explained by same-paper triangles.
- Newman identifies possible explanations for the remaining clustering: collaborator introductions, shared conferences and journals, common institutions, and field-specific laboratory organization.
- These explanations now split into [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md), [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md), and [biomedical lab-hierarchy clustering caveat](biomedical_lab_hierarchy_clustering_caveat.md).

## Caveats

- The residual depends on the null model; preserving only team size may not preserve field, institution, productivity, or career-stage structure.
- Residual clustering is not direct proof of friendship or knowledge flow.
- Biomedical and high-energy physics authorship conventions can produce different residual interpretations.

## Links

- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [large-team triangle inflation](large_team_triangle_inflation.md)
- [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md)
- [biomedical lab-hierarchy clustering caveat](biomedical_lab_hierarchy_clustering_caveat.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `excess_collaboration_clustering`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `unknown`
- Aliases: residual collaboration clustering; nontrivial coauthorship clustering; excess transitivity; projection-adjusted clustering
