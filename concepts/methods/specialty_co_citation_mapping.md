# Specialty co-citation mapping

## Summary

Specialty co-citation mapping is a method for drawing the intellectual structure of a scientific specialty from the network of co-cited key papers.

## Canonical Form

- Unit of analysis: specialty, research front, bounded citation corpus, or time slice.
- Typical representation: weighted co-citation network, thresholded specialty map, clustered reference graph, or labeled research-front map.
- Mechanism or measurement target: relationships among key ideas, methods, experiments, and papers as perceived by later citing authors.
- Empirical signature: co-cited key papers form a structured map whose clusters and bridges correspond to recognizable specialty subareas.

## Uses in Science of Science

- Converts pairwise [co-citation strength](../measures/co_citation_strength.md) into a map of [field emergence and specialty formation](../mechanisms/field_emergence.md).
- Provides an early document-level precursor to large-scale [science maps](../representations/science_maps.md) and journal-level mapping.
- Supports [research fronts](../mechanisms/research_fronts.md) by identifying which earlier works define an active specialty.
- Gives a reproducible paper-selection method for building literature corpora around a problem area.
- Separates candidate generation through [co-citation cycling seed expansion](co_citation_cycling_seed_expansion.md) from edge construction through [citation-index co-citation intersection](citation_index_co_citation_intersection.md).
- Also supports retrieval and monitoring motifs such as [co-citation secondary indexing](co_citation_secondary_indexing.md) and [co-citation SDI profile](co_citation_sdi_profile.md).

## Operationalization

- Identify candidate key papers, often through high citation counts or citation-index cycling from a known seed.
- Compute co-citation strength among candidate cited papers, usually through [citation-index co-citation intersection](citation_index_co_citation_intersection.md).
- Threshold, normalize, and lay out the co-citation network, documenting whether the display uses a [thresholded co-citation network](../representations/thresholded_co_citation_network.md).
- Interpret clusters and bridges with domain reading, titles, citation contexts, [co-citation edge-context interpretation](co_citation_edge_context_interpretation.md), and changes across time slices.
- Report [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md) details when the recovered map is based on a seed, time slice, or threshold.

## Evidence and Validations

- Verified full-text evidence from Small (1973) proposes using co-citation patterns to map relationships among key ideas and to model the intellectual structure of scientific specialties.
- Small's particle-physics example draws a network of cited papers in a specialty, with links representing co-citation coupling strength and weaker linkages omitted below a threshold.
- The same example uses a cycling procedure from a highly cited Gell-Mann seed to construct the candidate set before estimating pairwise co-citation.
- The paper says that patterns of linkages among key papers establish a structure, or map, for the specialty that can be observed over time.
- Small also compares co-citation patterns with bibliographic-coupling and direct-citation patterns, treating agreement and difference among representations as an empirical validation route.
- Small reads specific cited papers to explain why some strong co-citation edges exist, making textual edge interpretation part of the mapping workflow.
- The same full text supports [key-paper concept proxy](../representations/key_paper_concept_proxy.md), because the map is built from papers treated as observable carriers of key ideas.

## Caveats

- Specialty boundaries are not given by the method; seed choice and thresholding can reshape the map.
- Older, highly cited, or method papers can dominate unless normalized or filtered.
- Map geometry and cluster labels require validation with expert reading or independent data.

## Links

- [co-citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [citation-index co-citation intersection](citation_index_co_citation_intersection.md)
- [co-citation cycling seed expansion](co_citation_cycling_seed_expansion.md)
- [co-citation edge-context interpretation](co_citation_edge_context_interpretation.md)
- [relative co-citation frequency](../measures/relative_co_citation_frequency.md)
- [thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [co-citation core sampling boundary](../validations/co_citation_core_sampling_boundary.md)
- [citing-community perceived association](../mechanisms/citing_community_perceived_association.md)
- [co-cited core literature](../representations/co_cited_core_literature.md)
- [key-paper concept proxy](../representations/key_paper_concept_proxy.md)
- [co-citation secondary indexing](co_citation_secondary_indexing.md)
- [co-citation SDI profile](co_citation_sdi_profile.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [science maps](../representations/science_maps.md)
- [research fronts](../mechanisms/research_fronts.md)
- [field emergence and specialty formation](../mechanisms/field_emergence.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [direct-citation co-citation overlap](../validations/direct_citation_co_citation_overlap.md)
- [co-citation bibliographic-coupling divergence](../validations/co_citation_bibliographic_coupling_divergence.md)
- [science map accuracy validation](../validations/science_map_accuracy_validation.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `specialty_co_citation_mapping`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-citation specialty map; co-citation mapping; cited-paper specialty mapping; co-citation research-front map
