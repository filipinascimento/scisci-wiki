# Collaboration tie-strength visual encoding

## Summary

Collaboration tie-strength visual encoding represents weighted coauthorship ties visually, often by line thickness, to show heterogeneity in repeated or small-team collaboration strength.

## Canonical Form

- Unit of analysis: author pair, weighted coauthorship edge, ego network, or collaboration graph.
- Typical representation: variable-width edge, weighted ego network, or collaboration-strength map.
- Representation target: make tie strength visible rather than treating all coauthorships as equal binary edges.
- Empirical signature: repeated two-author collaborations appear stronger than one-off ties in large multi-author papers.

## Uses in Science of Science

- Visualizes [weighted coauthorship edges](weighted_coauthorship_edges.md).
- Complements [collaboration strength distribution](../measures/collaboration_strength_distribution.md).
- Adds interpretability to [coauthorship networks](coauthorship_networks.md).
- Provides a visual companion to [coauthorship network summary-stat panel](coauthorship_network_summary_stat_panel.md).

## Operationalization

- Compute a collaboration-strength weight for each author pair.
- Map edge thickness, opacity, or color intensity to the weight.
- Preserve legends and scaling choices so strong ties are interpretable.
- Use separate views or filters for dense ego networks where thick edges obscure structure.

## Evidence and Validations

- Verified full-text evidence from Newman (2004) defines a fractional collaboration-strength measure that accounts for the number of coauthors on each paper.
- The paper gives an example where a pair's tie strength accumulates across several papers with different team sizes.
- It visualizes one author's collaborators with line thickness proportional to estimated collaboration strength.

## Caveats

- Visual thickness can exaggerate differences if scales are not documented.
- Weighted edges still may not reflect actual labor, intellectual contribution, or social closeness.
- Very large teams can produce many weak ties that clutter visualizations.

## Links

- [weighted coauthorship edges](weighted_coauthorship_edges.md)
- [collaboration strength distribution](../measures/collaboration_strength_distribution.md)
- [coauthorship networks](coauthorship_networks.md)
- [coauthorship network summary-stat panel](coauthorship_network_summary_stat_panel.md)
- [topic-labeled coauthorship subcommunities](topic_labeled_coauthorship_subcommunities.md)

## References

- Newman, M. E. J. (2004). Coauthorship networks and patterns of scientific collaboration. *Proceedings of the National Academy of Sciences*, 101(suppl. 1), 5200-5205. https://doi.org/10.1073/pnas.0307545100 [OpenAlex: W2097777089; Dimensions: pub.1049986679; SciSciNet: W2097777089; WoS: unknown]

## Metadata

- Concept ID: `collaboration_tie_strength_visual_encoding`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Newman (2004) (2004)
- Latest seen paper: Newman (2004) (2004)
- Primary reference DOI: `10.1073/pnas.0307545100`
- OpenAlex ID: `W2097777089`
- Dimensions ID: `pub.1049986679`
- SciSciNet ID: `W2097777089`
- Aliases: weighted coauthorship visualization; tie-strength line thickness; collaboration-strength visual map
