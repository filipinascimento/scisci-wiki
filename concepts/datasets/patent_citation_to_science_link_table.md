# Patent citation-to-science link table

## Summary

Patent citation-to-science link tables store patent-to-publication citation pairs that connect inventions to scientific papers.

## Canonical Form

- Unit of analysis: patent, scientific publication, patent-paper citation pair, jurisdiction, paper family, or primary paper ID.
- Typical representation: bipartite relation table with PaperID and PatentID, often linked to patent metadata and publication metadata.
- Mechanism or measurement target: downstream technological use of science and science-to-technology translation.
- Empirical signature: USPTO or EPO patents cite scientific publications that can be resolved to a paper spine.

## Uses in Science of Science

- Provides the relation-table substrate for [patent-paper links](patent_paper_links.md), [scientific non-patent references](scientific_non_patent_references.md), and [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md).
- Adds a downstream application layer to [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md).
- Supports measures of technological reach, translational lag, patent citation counts, and field-to-technology flows.
- Works best when paired with patent-source-role and jurisdiction caveats.

## Operationalization

- Resolve scientific references in patents to publication IDs, DOIs, or MAG/OpenAlex/Dimensions IDs.
- Aggregate affiliated or family papers to the selected primary paper spine before deduplicating patent-paper pairs.
- Preserve patent jurisdiction, patent family, citation source role, and extraction version when available.
- Keep direct patent citations distinct from indirect science-technology paths through later papers or patents.
- Preserve match-confidence fields and validation tables when links come from probabilistic [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md).

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) documents the core PCS link-table schema: patent number, MAG paper ID, confidence score, source-role flag, and the originating non-patent reference string.
- Their paper reports 17,684,725 algorithmic patent-citation-to-science links before confidence filtering, linking 1,620,494 patents to 3,261,993 papers.
- Verified full-text evidence from Lin et al. (2023) builds on a Marx and Fuegi dataset of more than 40 million citations from USPTO and EPO patents to scientific publications in MAG.
- Lin et al. merge patent citations received by affiliated MAG papers into primary SciSciNet paper IDs and deduplicate repeated primary PaperID-PatentID pairs.
- The resulting SciSciNet patent linkage table contains 38,740,313 paper-patent citation pairs between 2,360,587 patents and 4,627,035 primary papers.

## Caveats

- Patent citations differ by jurisdiction and by whether applicants or examiners supplied references.
- A patent citation is evidence of a documented reference, not automatically evidence of causal knowledge transfer.
- SciSciNet's patent link table is tied to a fixed MAG/PaperID snapshot and should be refreshed or crosswalked for recent papers.
- Confidence thresholds and front-page scope affect observed counts and should be reported with each table release.

## Links

- [patent-paper links](patent_paper_links.md)
- [scientific non-patent references](scientific_non_patent_references.md)
- [integrated patent-paper citation networks](../representations/integrated_patent_paper_citation_networks.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)
- [patent reference XML matching](../methods/patent_reference_xml_matching.md)
- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [Reliance on Science dataset](reliance_on_science_dataset.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [front-page patent-reference scope](../validations/front_page_patent_reference_scope.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [science-technology lag](../measures/science_technology_lag.md)
- [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md)
- [SciSciNet-v2](sciscinet_v2.md)
- [PatentsView utility patent sample](patentsview_utility_patent_sample.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]
- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `patent_citation_to_science_link_table`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: patent-science citation table; paper-patent citation pairs; SciSciNet Link Patents; patent-to-publication link table; PCS link table
