# Team-size preserving clustering null

## Summary

Team-size preserving clustering nulls compare observed coauthorship clustering with random collaboration graphs that preserve the triangle-generating effect of multi-author papers.

## Canonical Form

- Unit of analysis: paper team, projected coauthorship graph, triangle, connected triple, source-domain panel, or field.
- Typical representation: projection-aware random graph, team-size-preserving null ensemble, observed-minus-null clustering, or residual transitivity.
- Method target: separate clustering caused mechanically by same-paper coauthorship from clustering that requires social, institutional, or field-structure explanations.
- Empirical signature: observed clustering remains above a null model that already reproduces triangles produced by papers with three or more authors.

## Uses in Science of Science

- Provides the method layer beneath [excess collaboration clustering](../validations/excess_collaboration_clustering.md).
- Validates [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md) before treating it as evidence of social closure.
- Turns [large-team triangle inflation](../validations/large_team_triangle_inflation.md) into a measurable baseline rather than only a caveat.
- Helps compare [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md) whose authors-per-paper distributions differ.
- Links static clustering results to alternative explanations such as [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md) and [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md).

## Operationalization

- Build an author-paper incidence table for a fixed source-domain panel and time window.
- Preserve the distribution of paper team sizes, or the author-paper degree constraints when available.
- Generate random projected coauthorship graphs that reproduce the same-paper triangle effect.
- Compute clustering in the observed graph and in the null ensemble.
- Interpret the gap between observed and null clustering as residual structure, while reporting author-name resolution, source coverage, and mega-collaboration handling.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) notes that any paper with three or more authors automatically contributes triangles to a projected coauthorship graph.
- Newman then reports using a random graph model that mimics this same-paper group-size effect.
- In the studied collaboration networks, that null effect explains only about half of observed clustering, leaving a residual that requires social or organizational interpretation.
- The method supports splitting raw clustering into projection-induced clustering and excess clustering before making claims about transitivity.

## Caveats

- Preserving team size alone may miss field, institution, productivity, career-stage, and repeated-collaboration structure.
- Null-model results depend on whether group authors, mega-collaborations, and author-disambiguation uncertainty are retained or filtered.
- Residual clustering is not direct proof of friendship, advice, or knowledge flow; it is evidence that same-paper projection is insufficient.

## Links

- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)
- [excess collaboration clustering](../validations/excess_collaboration_clustering.md)
- [large-team triangle inflation](../validations/large_team_triangle_inflation.md)
- [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [coauthorship affiliation projection](coauthorship_affiliation_projection.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthorship source-domain panels](../datasets/coauthorship_source_domain_panels.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]

## Metadata

- Concept ID: `team_size_preserving_clustering_null`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `W2025572017`
- Aliases: projection-aware clustering null; same-paper triangle null; team-size clustering baseline; group-size preserving transitivity null
