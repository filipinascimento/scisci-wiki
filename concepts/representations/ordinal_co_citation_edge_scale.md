# Ordinal co-citation edge scale

## Summary

Ordinal co-citation edge scale represents raw co-citation counts as discrete line-weight levels so co-citation maps remain legible.

## Canonical Form

- Unit of analysis: co-cited paper pair, co-citation edge, map legend, or specialty graph.
- Typical representation: binned co-citation frequency levels encoded as line counts, widths, or edge classes.
- Representation target: preserve relative tie strength without overplotting every raw count value.
- Empirical signature: a co-citation map shows stronger and weaker edges with an ordinal legend rather than a continuous numeric label on every edge.

## Uses in Science of Science

- Provides a display encoding for [co-citation strength](../measures/co_citation_strength.md).
- Complements [thresholded co-citation network](thresholded_co_citation_network.md), which decides which edges appear at all.
- Supports [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md) by turning dense pair counts into readable graph structure.
- Links early co-citation maps to later [science map layout and reduction](../methods/science_map_layout_reduction.md) choices.

## Operationalization

- Compute co-citation counts for all retained paper pairs.
- Choose threshold and bin intervals for visible edge strengths.
- Draw the co-citation graph with an ordinal edge legend.
- Report the bin boundaries so map readers can recover the count ranges represented by each line weight.

## Evidence and Validations

- Verified full-text evidence from Small (1973) describes a co-citation network whose connecting lines reflect co-citation coupling strength.
- Small states that linkages below a threshold were omitted from the map.
- The paper gives a discrete scale that maps co-citation frequency ranges to four displayed line-strength levels.

## Caveats

- Ordinal bins can hide meaningful differences within a bin.
- The choice of thresholds and bin widths can change the perceived map backbone.
- Edge-scale legends should be reported with the raw count threshold and the underlying co-citation matrix.

## Links

- [co-citation strength](../measures/co_citation_strength.md)
- [thresholded co-citation network](thresholded_co_citation_network.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [co-citation](co_citation.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; SciSciNet: W2005207065; WoS: unknown]

## Metadata

- Concept ID: `ordinal_co_citation_edge_scale`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation edge legend; co-citation line-weight scale; ordinal co-citation tie strength; binned co-citation edge weight
