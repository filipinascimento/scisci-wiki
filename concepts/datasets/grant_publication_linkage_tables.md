# Grant-publication linkage tables

## Summary

Grant-publication linkage tables connect papers to grants, awards, funders, and funded projects through source-specific award or project identifiers.

## Canonical Form

- Unit of analysis: paper, grant, award, funded project, funder, DOI, PMID, or paper-grant relation row.
- Typical representation: bipartite paper-grant table with PaperID plus award/project number.
- Mechanism or measurement target: upstream support relationships between funding programs and scientific outputs.
- Empirical signature: publication IDs linked to NIH project numbers, NSF award numbers, Crossref funder links, or Dimensions grant identifiers.

## Uses in Science of Science

- Provides the table-level data layer behind [funding acknowledgments and grant links](funding_acknowledgments.md).
- Supports studies of funding effects, portfolio design, grant-review validity, and funded research trajectories.
- Supplies upstream relation layers for [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md), [research-object context graphs](../representations/research_object_context_graphs.md), and [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- In current work, prefer fresh [Dimensions](dimensions.md) or funder/OpenAlex metadata when available, and use [SciSciNet-v2](sciscinet_v2.md) as a historical linkage layer.
- Uses [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md) when links come from grant numbers, PubMed grant data, publisher acknowledgments, or funder-name recognition.

## Operationalization

- Preserve the funder-specific identifier, such as NIH core project number or NSF award number.
- Record match route: acknowledgment text, funder link table, DOI exact match, PMID crosswalk, title match, search-engine match, or database-provided relation.
- Deduplicate repeated paper-grant pairs and keep confidence flags for fuzzy matches.
- Treat support links separately from downstream use links such as patents, trials, news, and social media.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes SciSciNet_Link_NIH as a table linking PaperID to NIH Project Number and reports 6,013,187 records linking 2,636,061 papers to 379,014 NIH projects.
- Lin et al. construct the NIH links through PMID as an intermediate key from MAG PaperExtendedAttributes.
- The paper describes SciSciNet_Link_NSF as a table linking PaperID to NSF Award Number, combining DOI exact matches, standardized-title matches, Elasticsearch-based fuzzy matches, and Crossref funder links.
- Lin et al. report 1,130,641 high-confidence NSF linkages plus 178,877 possible fuzzy links, connecting 148,148 NSF awards and 929,258 SciSciNet primary papers.
- Verified full-text evidence from Li and Agha (2015) gives a project-specific linkage workflow: NIH R01 grant identifiers are matched to PubMed acknowledgment records and then used to build output windows for publication, citation, and patent outcomes.
- Verified full-text evidence from Wang, Jones, and Wang (2019) adds a near-threshold applicant use case: NIH R01 application records are linked to Web of Science publication and citation histories, PubMed, Dimensions, NSF funding histories, and active-status outcomes for junior PIs.
- Verified full-text evidence from Hook et al. (2018) describes Dimensions linking publications to grants through PubMed data, grant-number and code searches in acknowledgments, publisher-accessible content, and funder-name matching.

## Caveats

- Grant-publication links are support claims, not automatic causal treatment indicators.
- Source coverage varies by funder, time, reporting policy, and identifier quality.
- Fuzzy text matches should carry confidence metadata and should not be merged with exact DOI/PMID matches without flags.

## Links

- [funding acknowledgments and grant links](funding_acknowledgments.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [Dimensions grant-acknowledgment mining](../methods/dimensions_grant_acknowledgment_mining.md)
- [NIH IMPAC R01 grant panel](nih_impac_r01_grant_panel.md)
- [upstream-downstream scholarly linkages](upstream_downstream_scholarly_linkages.md)
- [Dimensions](dimensions.md)
- [SciSciNet-v2](sciscinet_v2.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [scholarly table primary keys](../representations/scholarly_table_primary_keys.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [grant peer-review value-added](../validations/grant_peer_review_value_added.md)
- [grant hit-publication tail](../measures/grant_hit_publication_tail.md)
- [direct and indirect grant-patent outcomes](../measures/direct_indirect_grant_patent_outcomes.md)
- [funding-threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [junior NIH R01 near-threshold panel](junior_nih_r01_near_threshold_panel.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]
- Li, D., & Agha, L. (2015). Big names or big ideas: Do peer-review panels select the best science proposals? *Science*, 348(6233), 434-438. https://doi.org/10.1126/science.aaa0185 [OpenAlex: W1975626251; Dimensions: pub.1030280448; WoS: unknown]
- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `grant_publication_linkage_tables`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: paper-grant tables; award-publication links; NIH publication links; NSF award-paper links
