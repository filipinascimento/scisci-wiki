# Science-technology distance

## Summary

Science-technology distance measures how close papers and patents are to the patent-paper boundary in an integrated citation network.

## Canonical Form

- Unit of analysis: scientific paper, patent, field, technology class, institution, or individual.
- Typical representation: directed citation graph linking papers to papers, patents to patents, and patents to cited papers.
- Mechanism or measurement target: proximity of scientific work to technological use, and proximity of inventions to prior science.
- Empirical signature: distance values, connectivity shares, and time lags from papers to patents or patents to papers.

## Uses in Science of Science

- Turns the broad idea of science-to-technology translation into a graph distance measure.
- Separates direct patent-paper citation links from indirect paths through later papers or patents.
- Supports field, institution, and individual comparisons of basic-applied positioning.
- Complements [patent-paper links](../datasets/patent_paper_links.md) by measuring distance from the boundary rather than only direct links.
- Connects to [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md) when distance is linked to citation or market outcomes.
- Supports [distance-based basic-applied typology](../methods/distance_based_basic_applied_typology.md) when distances are aggregated by field, institution, funder, journal, or person.

## Operationalization

- Build a directed integrated citation network across patents and research articles, resolving direct paper-patent edges with [patent reference XML matching](../methods/patent_reference_xml_matching.md) or another documented matching workflow.
- Assign distance 1 to patents that directly cite papers and to papers directly cited by patents.
- Recursively assign higher distances to papers cited by closer papers and patents citing closer patents.
- Report mean, mode, distribution, connectivity share, and temporal lag by field, technology class, institution, or person.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) defines the patent-paper boundary and a recursive minimum-distance metric over 4.8 million U.S. patents and 32 million Web of Science articles.
- Their verified results show that direct links are only part of the system: most connected papers and patents sit two to four degrees from the boundary.
- The same paper validates the measure by comparing fields and technology classes, showing that distance varies sharply between areas such as mathematics, biotechnology, computer hardware, and everyday mechanical technologies.
- Ahmadpoor and Jones also connect distance to impact: work directly on the patent-paper boundary is especially likely to be highly cited within its own domain.
- Additional Ahmadpoor and Jones residual motifs now split out [citation-count pathway confound](../validations/citation_count_pathway_confound.md), [field-distance residual rank check](../validations/field_distance_residual_rank_check.md), [frontier-distance random citation null](../validations/frontier_distance_random_citation_null.md), [institutional frontier-distance decomposition](../methods/institutional_frontier_distance_decomposition.md), [patent-citation timing popularity check](../validations/patent_citation_timing_popularity_check.md), [within-individual boundary impact validation](../validations/within_individual_boundary_impact_validation.md), and the [one-way science-to-technology graph boundary](../validations/one_way_science_to_technology_graph_boundary.md).

## Caveats

- Patent citation behavior varies by jurisdiction, examiner practice, and applicant incentives.
- Distance depends on database coverage, citation extraction, and patent-family handling.
- A short path indicates traceable linkage, not necessarily direct knowledge transfer or causal use.

## Links

- [patent-paper links](../datasets/patent_paper_links.md)
- [patent reference XML matching](../methods/patent_reference_xml_matching.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [science-technology majority connectivity](../mechanisms/science_technology_majority_connectivity.md)
- [indirect patent-paper distance distribution](indirect_patent_paper_distance_distribution.md)
- [distance-based basic-applied typology](../methods/distance_based_basic_applied_typology.md)
- [disconnected knowledge-network impact penalty](../mechanisms/disconnected_knowledge_network_impact_penalty.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [citation-count pathway confound](../validations/citation_count_pathway_confound.md)
- [field-distance residual rank check](../validations/field_distance_residual_rank_check.md)
- [frontier-distance random citation null](../validations/frontier_distance_random_citation_null.md)
- [institutional frontier-distance decomposition](../methods/institutional_frontier_distance_decomposition.md)
- [patent-citation timing popularity check](../validations/patent_citation_timing_popularity_check.md)
- [within-individual boundary impact validation](../validations/within_individual_boundary_impact_validation.md)
- [one-way science-to-technology graph boundary](../validations/one_way_science_to_technology_graph_boundary.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [science-technology lag](science_technology_lag.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [citation networks](../representations/citation_networks.md)
- [science maps](../representations/science_maps.md)
- [field classifications](field_classifications.md)
- [disruption index](disruption_index.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]

## Metadata

- Concept ID: `science_technology_distance`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Aliases: patent-paper boundary distance; science-to-technology distance; paper-patent proximity; dual-frontier distance
