# Affiliation-overlay clustering test

## Summary

Affiliation-overlay clustering test is a method for checking whether collaboration-network clustering reflects shared institutional context rather than only direct triadic closure among scientists.

## Canonical Form

- Unit of analysis: author triad, institution, affiliation episode, coauthorship edge, or clustering coefficient.
- Typical representation: coauthorship graph with institutional affiliations overlaid on nodes.
- Method target: distinguish social closure from common-location or common-organization mechanisms.
- Empirical signature: clustering is reinterpreted after checking whether clustered authors share institutions or other contextual affiliations.

## Uses in Science of Science

- Provides a follow-up test for [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md).
- Separates [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md) from institutional colocation.
- Uses [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md) to improve network interpretation.
- Helps make high clustering in [coauthorship networks](../representations/coauthorship_networks.md) mechanistically interpretable.

## Operationalization

- Build a coauthorship network and compute local or global clustering.
- Attach affiliations to authors, author-paper records, or time-stamped affiliation episodes.
- Compare triangles within and across institutions.
- Reestimate clustering or triadic-closure models while controlling for shared affiliation.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) suggests that shared institutions could explain some collaboration clustering.
- The paper points to affiliation data as a way to test whether clustering arises from institutional context rather than only network closure.
- This proposed overlay turns an observed network statistic into a mechanistic validation exercise.

## Caveats

- Affiliation data may be missing, non-time-stamped, or ambiguous for multi-affiliated authors.
- Shared institution can itself result from prior collaboration or hiring networks.
- Institutional context does not exhaust other shared-context sources such as specialty, conference, or funding program.

## Links

- [shared-context collaboration clustering](../mechanisms/shared_context_collaboration_clustering.md)
- [triadic closure in collaboration](../mechanisms/triadic_closure_in_collaboration.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [collaboration clustering coefficient](../measures/collaboration_clustering_coefficient.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; SciSciNet: W2025572017]

## Metadata

- Concept ID: `affiliation_overlay_clustering_test`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Newman (2001 PRE) (2001)
- Latest seen paper: Newman (2001 PRE) (2001)
- Primary reference DOI: `10.1103/physreve.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `pub.1060727007`
- SciSciNet ID: `W2025572017`
- Aliases: institutional overlay clustering check; affiliation-controlled clustering test; shared-institution clustering audit; affiliation triadic-closure test
