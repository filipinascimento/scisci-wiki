# Mega-collaboration degree inflation

## Summary

Mega-collaboration degree inflation is the validation concern that very large author lists can make coauthorship degree and collaborator-count measures look socially dense even when many listed authors have weak or no personal connection.

## Canonical Form

- Unit of analysis: mega-authored paper, author node, projected coauthorship edge, collaborator count, field panel, or high-energy physics collaboration.
- Typical representation: collaborator-count distribution, authors-per-paper tail, large-team sensitivity check, or weighted-edge comparison.
- Validation target: prevent large consortium papers from being interpreted as ordinary pairwise social ties.
- Empirical signature: fields with very large teams show inflated average collaborators per author and extreme authors-per-paper tails.

## Uses in Science of Science

- Extends [large-team triangle inflation](large_team_triangle_inflation.md) from clustering to degree and collaborator counts.
- Supports [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md) when large teams should contribute less per pair.
- Adds a field-specific caveat to [collaborator-count distribution](../measures/collaborator_count_distribution.md) and [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md).
- Connects to [mega-paper full-count inflation](mega_paper_full_count_inflation.md) when the same large teams distort both collaboration and citation-credit indicators.
- Connects to [Fermi collaboration tail excess](fermi_collaboration_tail_excess.md), where named mega-collaborations also appear as far-tail residuals in team-size distributions.

## Operationalization

- Identify papers above a large-team threshold or field-specific consortium threshold.
- Compare collaborator counts with and without those papers.
- Recompute network measures with fractional or team-size-discounted edges.
- Report whether interpretation changes when mega-collaboration ties are separated from ordinary coauthorship.

## Evidence and Validations

- Verified full-text evidence from Newman (2001) reports that the SPIRES high-energy physics database had an average of 8.96 authors per paper and 173 collaborators per author over five years.
- The same full text reports a pronounced peak in high-energy physics author counts around 200-500 authors and a largest single-paper author count of 1681.
- Newman explicitly questions whether the high-energy coauthorship network can accurately represent the high-energy physics community, because it seems unlikely that many authors would know 173 colleagues well.
- This validates sensitivity checks before interpreting projected collaborator counts as social reach.

## Caveats

- Mega-collaborations are real production structures, not errors; the issue is how to interpret pairwise projections.
- Thresholds for "mega" differ by field and time.
- Removing large teams can hide important organized scientific infrastructure, while including them without weighting can overstate personal contact.

## Links

- [large-team triangle inflation](large_team_triangle_inflation.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)
- [collaborator-count distribution](../measures/collaborator_count_distribution.md)
- [field collaboration-mode contrast](../measures/field_collaboration_mode_contrast.md)
- [coauthorship affiliation projection](../methods/coauthorship_affiliation_projection.md)
- [mega-paper full-count inflation](mega_paper_full_count_inflation.md)
- [Fermi collaboration tail excess](fermi_collaboration_tail_excess.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Newman, M. E. J. (2001). Scientific collaboration networks. I. Network construction and fundamental results. *Physical Review E*, 64(1), 016131. https://doi.org/10.1103/PhysRevE.64.016131 [OpenAlex: W2025572017; Dimensions: pub.1060727007; WoS: unknown]

## Metadata

- Concept ID: `mega_collaboration_degree_inflation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Newman (2001) (2001)
- Latest seen paper: Newman (2001) (2001)
- Primary reference DOI: `10.1103/PhysRevE.64.016131`
- OpenAlex ID: `W2025572017`
- Dimensions ID: `unknown`
- SciSciNet ID: `unknown`
- Aliases: large-collaboration degree inflation; consortium coauthor inflation; collaborator-count mega-team bias; projected degree inflation
