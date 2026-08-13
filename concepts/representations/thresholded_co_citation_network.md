# Thresholded co-citation network

## Summary

A thresholded co-citation network represents cited works as nodes and retains only co-citation edges strong enough to pass a chosen display or analysis threshold.

## Canonical Form

- Unit of analysis: cited papers, books, references, authors, journals, or concepts.
- Typical representation: weighted undirected graph with low-weight co-citation edges omitted or visually down-weighted.
- Mechanism or measurement target: visible structure of the strongest perceived intellectual associations in a cited corpus.
- Empirical signature: a map of cited items connected by edge weights derived from repeated joint citation by later papers.

## Uses in Science of Science

- Converts pairwise [co-citation strength](../measures/co_citation_strength.md) into an interpretable graph for [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md).
- Provides a representation for [co-cited core literature](co_cited_core_literature.md), research fronts, and science-map subgraphs.
- Helps analysts tune how much weak relational noise is excluded from a visual map.
- Pairs with [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md), which records how node-entry and edge-display thresholds affect the recovered core.
- Supports longitudinal comparisons when thresholding rules are held constant across time slices.
- Makes edge filtering visible as an analytic choice rather than hiding it inside clustering software.

## Operationalization

- Build pairwise co-citation counts or normalized weights among candidate cited items.
- Choose a threshold rule, such as a minimum raw count, percentile, statistical significance cutoff, or field-normalized edge weight.
- Retain edges that pass the threshold and encode stronger relationships with line width, multiplicity, color, or numeric weight.
- Inspect whether the threshold isolates the intended core or fragments the graph.
- Record omitted-edge rules so later readers can reproduce the map.

## Evidence and Validations

- Verified full-text evidence from Small (1973) presents a particle-physics co-citation network in which boxes represent cited papers and undirected lines represent co-citation coupling strength.
- Small states that the network was drawn from tabulated co-citation data while omitting linkages below a threshold of seven.
- The same example first uses a separate candidate-entry threshold before drawing the displayed edge-threshold network.
- The figure legend scales displayed links by co-citation frequency, making the page an early example of a weighted and thresholded co-citation representation.
- Small uses the resulting network as a specialty map and contrasts its structure with bibliographic-coupling and direct-citation patterns.

## Caveats

- Threshold choice can create or erase apparent clusters, bridges, and cores.
- Raw thresholds favor older or larger fields unless normalized for citation volume, time, and source coverage.
- A clean-looking map may omit weak ties that are substantively important for interdisciplinary linkage or specialty emergence.

## Links

- [co-citation](co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [relative co-citation frequency](../measures/relative_co_citation_frequency.md)
- [citation-index co-citation intersection](../methods/citation_index_co_citation_intersection.md)
- [co-cited core literature](co_cited_core_literature.md)
- [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md)
- [co-citation cycling seed expansion](../methods/co_citation_cycling_seed_expansion.md)
- [specialty co-citation mapping](../methods/specialty_co_citation_mapping.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [science maps](science_maps.md)
- [research fronts](../mechanisms/research_fronts.md)
- [science map layout and reduction](../methods/science_map_layout_reduction.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `thresholded_co_citation_network`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: thresholded co-citation graph; weighted co-citation map; co-citation edge-threshold map; co-citation coupling network
