# Patent-paper links

## Summary

Patent-paper links connect inventions to scientific publications through patent citations, text matching, examiner/applicant references, and database-resolved paper-patent pairs.

## Canonical Form

- Unit of analysis: patent, paper, citation, technology class, institution, inventor, author, or field.
- Typical representation: bipartite patent-paper graph or multiplex science-technology graph.
- Mechanism or measurement target: translation, reliance on science, technological impact of research, and knowledge flows.
- Empirical signature: patent citations or inferred links from patents to scientific papers.

## Uses in Science of Science

- Used to study science-to-technology translation, innovation, APTO/licensing contexts, and dual-frontier work.
- Connects science-of-science to innovation studies and patent datasets.
- Can be linked to SciSciNet, Dimensions, PatentsView, and external PatentPaperPairs data.
- Needs [patent citation source roles](../validations/patent_citation_source_roles.md) when interpreting patent references as inventor-side knowledge flow.
- Supports system-level motifs such as [science-technology majority connectivity](../mechanisms/science_technology_majority_connectivity.md), [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md), and [university-firm patent-paper handoff](../mechanisms/university_firm_patent_paper_handoff.md).
- Supports [patent scientific reliance count](../measures/patent_scientific_reliance_count.md) and [author-inventor overlap networks](../representations/author_inventor_overlap_networks.md) when patent-paper edges are joined to patent inventor and paper author data.

## Operationalization

- Inputs: patent references, paper metadata, DOIs, titles, PubMed IDs, patent classifications, assignees, inventors, [patent application-year time anchors](../methods/patent_application_year_time_anchor.md), and source-role flags.
- Measures: paper-to-patent citation counts, patent impact, technology-field reach, lag from paper to patent.
- Common model forms: bipartite graphs, matching/entity resolution, translational-impact models.
- Validation fields: applicant/examiner source roles, [patent reference XML matching](../methods/patent_reference_xml_matching.md), [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md), [patent-science link confidence scores](../measures/patent_science_link_confidence_score.md), jurisdiction, and patent-family handling.

## Evidence and Validations

- Ahmadpoor and Jones analyze patented inventions and prior science; Marx and Fuegi provide a broad reliance-on-science dataset.
- Verified full-text evidence from Ahmadpoor and Jones (2017) operationalizes patent-paper links as citation-distance paths between 4.8 million U.S. patents and 32 million research articles, showing that most cited papers link forward to a later patent and most patents link backward to prior scientific articles.
- Their distance metric treats direct and indirect patent-paper boundaries as measurable science-to-technology channels, supporting bipartite and multiplex representations rather than only direct citation counts.
- The direct evidence layer is often [scientific non-patent references](scientific_non_patent_references.md), while indirect paths require an [integrated patent-paper citation network](../representations/integrated_patent_paper_citation_networks.md).
- Citation-source validation is important because patent references can be supplied by applicants or patent examiners.
- Verified full-text evidence from Marx and Fuegi (2020) adds a public data-construction layer: patent-paper links can be built by resolving unstructured USPTO non-patent references to MAG papers, releasing each matched edge with a source-role flag and confidence score.
- Marx and Fuegi validate the matching pipeline with random precision samples, known-good recall samples, and confidence-level ROC tradeoffs.
- Marx and Fuegi also motivate [patent-to-patent citation noise](../validations/patent_to_patent_citation_noise.md) as a reason to treat PCS as a complementary knowledge-flow layer and use open publication backbones for redistributable link tables.
- Verified full-text evidence from Li and Agha (2015) adds a grant-review use case: NIH R01 grants are linked to direct patents acknowledging federal support and indirect patents that cite grant-supported publications.
- Verified full-text evidence from Wang and Li (2018) uses patent citations to scientific publications to split patents into science-based and non-science-based groups, then compares their forward citations by organization type, country, and subfield.
- Verified full-text evidence from Lin et al. (2023) adds a data-lake table use case: SciSciNet links primary papers to USPTO and EPO patents through a deduplicated [patent citation-to-science link table](patent_citation_to_science_link_table.md).

## Caveats

- Patent citation practices differ by jurisdiction and examiner/applicant role.
- Entity resolution and duplicate patent families require careful handling.
- Front-page-only patent references can undercount in-text patent citations to science.
- Confidence thresholds trade precision against recall, so downstream estimates should report the chosen cutoff.

## Links

- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [PatentsView utility patent sample](patentsview_utility_patent_sample.md)
- [patent reference XML matching](../methods/patent_reference_xml_matching.md)
- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [patent-paper boundary](../representations/patent_paper_boundary.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [scientist-inventor boundary spanning](../mechanisms/scientist_inventor_boundary_spanning.md)
- [science-technology majority connectivity](../mechanisms/science_technology_majority_connectivity.md)
- [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md)
- [university-firm patent-paper handoff](../mechanisms/university_firm_patent_paper_handoff.md)
- [patent maintenance fee value proxy](../measures/patent_maintenance_fee_value_proxy.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [NIH IMPAC R01 grant panel](nih_impac_r01_grant_panel.md)
- [scientific non-patent references](scientific_non_patent_references.md)
- [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md)
- [patent scientific reliance count](../measures/patent_scientific_reliance_count.md)
- [open derivative patent-science linkage](open_derivative_patent_science_linkage.md)
- [author-inventor overlap networks](../representations/author_inventor_overlap_networks.md)
- [patent citation-to-science link table](patent_citation_to_science_link_table.md)
- [Reliance on Science dataset](reliance_on_science_dataset.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [science-based patent grouping](../methods/science_based_patent_grouping.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [front-page patent-reference scope](../validations/front_page_patent_reference_scope.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [patent-to-patent citation noise](../validations/patent_to_patent_citation_noise.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [science-technology lag](../measures/science_technology_lag.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)
- [dimensions](../datasets/dimensions.md)
- [disruption index](../measures/disruption_index.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; WoS: unknown]
- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]
- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]
- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `patent_paper_links`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Aliases: paper-patent pairs; science-to-technology links; reliance on science
