# Upstream-downstream scholarly linkages

## Summary

Upstream-downstream scholarly linkages connect papers to upstream supports such as grants and funders and downstream uses such as patents, clinical trials, news, policy, and social media.

## Canonical Form

- Unit of analysis: paper, grant, funder, patent, clinical trial, media item, social media post, policy document, or linkage row.
- Typical representation: typed relation tables from papers to external sources.
- Mechanism or measurement target: how scientific work is supported and how it is used beyond publication citations.
- Empirical signature: paper IDs linked to award numbers, patent IDs, clinical-trial IDs, media/news identifiers, tweets, or other public-use records.

## Uses in Science of Science

- Extends citation analysis beyond paper-to-paper networks.
- Supports studies of funding effects, translational science, public attention, policy use, and societal impact.
- Provides typed layers for [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md).
- Supplies edge types for [research-object context graphs](../representations/research_object_context_graphs.md).
- Helps distinguish support relationships from use relationships in causal and evaluative analyses.

## Operationalization

- Keep each external source as a typed linkage table with source-specific IDs.
- Record whether a link means support, acknowledgment, citation, mention, reference, or reuse.
- Deduplicate through [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md) built from intermediate IDs such as DOI, PMID, patent ID, NCT number, award number, or platform-specific identifier.
- Preserve match-route fields such as exact, independent-source, and fuzzy links through [confidence-typed fuzzy linkages](../methods/confidence_typed_fuzzy_linkages.md).
- Analyze upstream and downstream links separately before building combined impact or translation metrics.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) states that SciSciNet tracks links from papers to upstream funding sources such as NIH and NSF and downstream public uses including patents, clinical trials, media, and social media.
- Lin et al. describe specific linkage tables for NIH, NSF, clinical trials, Nobel laureates, Twitter, Newsfeed, and patents.
- The paper reports large linkage tables, including 6,013,187 NIH project-paper records, 1,309,518 NSF award-paper records, 438,220 clinical-trial link records, 55,846,550 Twitter link records, 595,241 newsfeed link records, and 38,740,313 patent link records.
- The full text emphasizes that these external links help researchers study how science interacts with socioeconomic institutions beyond publication datasets.
- Separate link-table motifs are useful because [grant-publication linkage tables](grant_publication_linkage_tables.md) represent upstream support, while [clinical-trial publication linkages](clinical_trial_publication_linkages.md) represent a downstream biomedical-use layer.
- Other split-out downstream link-table motifs include [patent citation-to-science link table](patent_citation_to_science_link_table.md) and [Crossref Event Data mention linkages](crossref_event_data_mention_linkages.md).
- Lin et al. also show that external linkages often depend on intermediary identifiers and match-confidence tiers, especially for NSF, NIH, clinical-trial, news, and social-media records.

## Caveats

- Link semantics differ across sources: an acknowledgment, citation, mention, and trial reference should not be collapsed without justification.
- Coverage varies sharply by source, field, time, and platform.
- Downstream attention or use is not equivalent to positive scientific validity or causal impact.
- Linkage source, bridge key, and match confidence should be retained because coverage and matching imperfections differ across grants, patents, trials, media, and social mentions.

## Links

- [funding acknowledgments and grant links](funding_acknowledgments.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [clinical-trial publication linkages](clinical_trial_publication_linkages.md)
- [patent-paper links](patent_paper_links.md)
- [patent citation-to-science link table](patent_citation_to_science_link_table.md)
- [Crossref Event Data mention linkages](crossref_event_data_mention_linkages.md)
- [identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [confidence-typed fuzzy linkages](../methods/confidence_typed_fuzzy_linkages.md)
- [scientific non-patent references](scientific_non_patent_references.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [social media attention channels](social_media_attention_channels.md)
- [altmetrics](altmetrics.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)
- [research-object context graphs](../representations/research_object_context_graphs.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [sciscinet v2](sciscinet_v2.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]
- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `upstream_downstream_scholarly_linkages`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Aliases: external scholarly linkages; upstream funding downstream use links; science support and use layers; public-use link tables
