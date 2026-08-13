# Integrated patent-paper citation networks

## Summary

Integrated patent-paper citation networks combine patent-to-patent, paper-to-paper, and patent-to-paper citation links in one directed graph.

## Canonical Form

- Unit of analysis: patent, paper, citation edge, field, technology class, institution, inventor, or author.
- Typical representation: heterogeneous directed citation network with paper and patent node types.
- Mechanism or measurement target: traceable knowledge paths between scientific research and technological invention.
- Empirical signature: connected paths that cross from patent references into scientific literature.

## Uses in Science of Science

- Provides the graph substrate for [science-technology distance](../measures/science_technology_distance.md) and the [patent-paper boundary](patent_paper_boundary.md).
- Extends ordinary [citation networks](citation_networks.md) beyond a single document domain.
- Lets researchers compare direct [scientific non-patent references](../datasets/scientific_non_patent_references.md) with indirect science-technology paths.
- Supports typologies of fields, institutions, technology classes, and people by their position in the science-technology system.
- Stores system-level patterns such as [science-technology majority connectivity](../mechanisms/science_technology_majority_connectivity.md) and [indirect patent-paper distance distributions](../measures/indirect_patent_paper_distance_distribution.md).
- Needs source-role validation for patent references through [patent citation source roles](../validations/patent_citation_source_roles.md).
- Can be enriched into [author-inventor overlap networks](author_inventor_overlap_networks.md) when paper-author and patent-inventor attributes are attached.

## Operationalization

- Resolve paper-to-paper citations, patent-to-patent citations, and patent-to-paper references into stable identifiers, using [patent reference XML matching](../methods/patent_reference_xml_matching.md) when scientific non-patent references are recorded as noisy patent-reference strings.
- Preserve edge direction and dates so paths move backward through cited prior art or forward through later citing entities, depending on the analysis.
- Mark node types, fields, technology classes, institutions, assignees, authors, and inventors as attributes.
- Compute connectivity, shortest paths to the patent-paper boundary, path-length distributions, and temporal lags.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) builds an integrated citation network from 4.8 million U.S. patents and 32 million Web of Science articles.
- Their network starts from patents that directly cite journal articles, then recursively assigns minimum citation distance to other papers and patents.
- The paper reports majority cross-domain connectivity: most cited science and engineering papers can be linked forward to a later patent, and a majority of patents can be linked backward to prior scientific research.
- The representation validates itself empirically by producing field, technology-class, institution, and person-level differences that align with basic-applied research positions.
- Attribute-enriched split pages now add [institution-type matching for the dual frontier](../methods/institution_type_matching_for_dual_frontier.md), [institutional pathways to the frontier](institutional_pathways_to_frontier.md), and the [one-way science-to-technology graph boundary](../validations/one_way_science_to_technology_graph_boundary.md).

## Caveats

- Integrated networks inherit coverage limits from every source layer.
- Direction is analytically important: citation edges usually point to prior work, while diffusion narratives often read paths forward in time.
- A path is evidence of a traceable link, not a complete causal account of knowledge transfer.

## Links

- [citation networks](citation_networks.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)
- [patent reference XML matching](../methods/patent_reference_xml_matching.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [author-inventor overlap networks](author_inventor_overlap_networks.md)
- [institution-type matching for the dual frontier](../methods/institution_type_matching_for_dual_frontier.md)
- [institutional pathways to the frontier](institutional_pathways_to_frontier.md)
- [one-way science-to-technology graph boundary](../validations/one_way_science_to_technology_graph_boundary.md)
- [science-technology majority connectivity](../mechanisms/science_technology_majority_connectivity.md)
- [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md)
- [distance-based basic-applied typology](../methods/distance_based_basic_applied_typology.md)
- [patent-paper boundary](patent_paper_boundary.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [science-technology lag](../measures/science_technology_lag.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]
- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `integrated_patent_paper_citation_networks`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Aliases: integrated science-technology citation graph; patent-paper citation network; dual-frontier citation network
