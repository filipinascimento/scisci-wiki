# Paper-author-affiliation linkages

## Summary

Paper-author-affiliation linkages connect each publication to its authors, institutional affiliations, and author-order positions.

## Canonical Form

- Unit of analysis: paper, author, affiliation, author position, institution, country, or paper-author-affiliation row.
- Typical representation: tripartite linkage table, authorship table with affiliation IDs, or hyperedge from paper to author and institution.
- Mechanism or measurement target: team composition, institutional participation, mobility traces, collaboration geography, and credit allocation.
- Empirical signature: rows carry paper IDs, author IDs, affiliation IDs, and author-sequence numbers.

## Uses in Science of Science

- Provides the data layer for [coauthorship networks](coauthorship_networks.md), [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md), and institutional analyses.
- Supports team-size, institution-count, author-order, mobility, and collaboration-geography measures.
- Lets analyses distinguish author identity from affiliation identity, which is essential for career and organization-level claims.
- Helps construct [multiplex scholarly graphs](multiplex_scholarly_graphs.md) by linking papers to people and institutions.
- In OpenAlex, this appears as an authorship object that links a work, author, and one or more institutions through [OpenAlex affiliation-ROR linking](../methods/openalex_affiliation_ror_linking.md).
- In Web of Science, historical use should account for [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md), because author-affiliation links are not equivalent across all years.
- Underlies publication-derived mobility panels such as the [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md).

## Operationalization

- Resolve author IDs and affiliation IDs before building longitudinal or institutional measures.
- Preserve author sequence and multiple affiliation cases.
- Decide whether a paper-author-affiliation row is treated as a triplet, as separate paper-author and author-affiliation edges, or as a paper-level hyperedge.
- Validate person and institution assignments with [disambiguation evaluation metrics](../validations/disambiguation_evaluation_metrics.md), ORCID/CV samples, and affiliation-normalization audits.
- Preserve source IDs through a [scholarly identifier spine](scholarly_identifier_spine.md) and record snapshot provenance.
- Preserve table keys explicitly with [scholarly table primary keys](scholarly_table_primary_keys.md) before deriving author, affiliation, or team measures.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes SciSciNet_PaperAuthorAffiliations as a file containing paper-author-affiliation linkages.
- Lin et al. report 413,869,501 paper-author-affiliation records in SciSciNet and define table fields including PaperID, AuthorID, AffiliationID, and AuthorSequenceNumber.
- The same paper notes that author disambiguation remains a major challenge and that SciSciNet adopts MAG's author disambiguation as a baseline for career studies.
- Verified full-text evidence from Deville et al. (2014) shows the same representation in a narrower APS corpus: author names, affiliations, publication dates, and citation IDs are linked to reconstruct institutional career trajectories.
- Verified full-text evidence from Priem et al. (2022) defines an OpenAlex authorship object as a three-way claim connecting an author, one or more institutions, and a work.
- Priem et al. describe parsing affiliation strings from structured and unstructured sources, normalizing institution strings, and linking them to ROR identifiers with rules and machine learning.
- The linkage table is a direct bridge between data infrastructure and motifs such as scientific careers, mobility, team assembly, and institutional stratification.
- Verified full-text evidence from Birkle et al. (2020) adds a WoS-specific caveat: Core Collection indexes all authors and all affiliations, but author-affiliation links are reported from 2008 forward.

## Caveats

- Author and affiliation disambiguation errors propagate into collaboration and career measures.
- Multiple affiliations, missing affiliations, and author-order conventions vary by field.
- Affiliation on a paper is not always equivalent to employment, training, or funding relationship.

## Links

- [coauthorship networks](coauthorship_networks.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [Physical Review mobility panel](../datasets/physical_review_mobility_panel.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [multiplex scholarly graphs](multiplex_scholarly_graphs.md)
- [scholarly entity graphs](scholarly_entity_graphs.md)
- [scholarly identifier spine](scholarly_identifier_spine.md)
- [OpenAlex affiliation-ROR linking](../methods/openalex_affiliation_ror_linking.md)
- [OpenAlex authorship object](openalex_authorship_object.md)
- [WoS author-affiliation linking onset](../validations/wos_author_affiliation_linking_onset.md)
- [OpenAlex entity-type model](openalex_entity_type_model.md)
- [scholarly table primary keys](scholarly_table_primary_keys.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)
- [scholarly data lakes](../datasets/scholarly_data_lakes.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Deville, P., Wang, D., Sinatra, R., Song, C., Blondel, V. D., & Barabasi, A.-L. (2014). Career on the move: Geography, stratification and scientific impact. *Scientific Reports*, 4, 4770. https://doi.org/10.1038/srep04770 [OpenAlex: W2049213211; Dimensions: pub.1032371564; WoS: unknown]
- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]

## Metadata

- Concept ID: `paper_author_affiliation_linkages`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Deville et al. (2014) (2014)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Aliases: paper-author-affiliation table; authorship-affiliation links; paper-author-institution triplets; author affiliation rows
