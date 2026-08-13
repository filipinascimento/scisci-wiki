# Large-team triangle inflation

## Summary

Large-team triangle inflation is the validation concern that multi-author papers mechanically create many closed triangles in projected coauthorship networks, inflating clustering coefficients.

## Canonical Form

- Unit of analysis: multi-author paper, projected author-author graph, triangle, clustering coefficient, or team-size distribution.
- Typical representation: observed clustering, team-size-induced triangle share, residual clustering, or temporal closure test.
- Validation target: separating real social closure from triangles that arise automatically when a paper has three or more authors.
- Empirical signature: some clustering is explained by projection from large teams, but remaining clustering requires additional social or organizational explanation.

## Uses in Science of Science

- Provides a projection-caveat layer for [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md).
- Pairs with [excess collaboration clustering](excess_collaboration_clustering.md), which asks how much clustering remains after the projection artifact is accounted for.
- Helps interpret [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md) by distinguishing simultaneous team formation from sequential closure.
- Connects [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md) and team-size discounting to clustering analysis.
- Supports robustness checks for [coauthorship networks](../representations/coauthorship_networks.md) when fields differ in authors per paper.
- Can be operationalized through [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md) models that preserve same-paper triangle effects.
- Complements [mega-collaboration degree inflation](mega_collaboration_degree_inflation.md), which applies the same projection concern to collaborator counts rather than triangle counts.

## Operationalization

- Identify all papers with three or more authors in the source-domain panel.
- Estimate how many projected triangles those papers create directly.
- Compare observed clustering with a projection-aware null model preserving team sizes, such as [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md).
- Use time-resolved tests restricted to pairs without previous collaboration to measure closure beyond simultaneous large-team papers.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) defines clustering as the probability that two coauthors of a scientist have themselves coauthored.
- The paper notes that papers with three or more coauthors automatically introduce triangles among collaborating authors and therefore increase clustering.
- Newman reports that this effect can account for only about half of the clustering seen in coauthorship networks.
- The remaining clustering is attributed to sociological or organizational effects, motivating projection-aware validation rather than raw clustering alone.
- This residual is split out as [excess collaboration clustering](excess_collaboration_clustering.md).
- Verified full-text evidence from Newman (2001) gives the projection logic behind the concern: every paper with three or more authors creates closed author triples when a paper byline is projected to an author-author graph.

## Caveats

- The share of clustering due to team-size projection can vary sharply by field and time period.
- Author disambiguation and consortium authorship can distort triangle counts.
- Temporal closure tests still need controls for shared field, institution, and productivity.

## Links

- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [excess collaboration clustering](excess_collaboration_clustering.md)
- [team-size preserving clustering null](../methods/team_size_preserving_clustering_null.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [mega-collaboration degree inflation](mega_collaboration_degree_inflation.md)
- [time-resolved coauthorship reconstruction](../methods/time_resolved_coauthorship_reconstruction.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]
- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; WoS: unknown]

## Metadata

- Concept ID: `large_team_triangle_inflation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: team-size triangle inflation; projection-induced clustering; large-team clustering artifact; multi-author triangle inflation
