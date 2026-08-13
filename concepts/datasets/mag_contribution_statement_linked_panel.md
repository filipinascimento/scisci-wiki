# MAG contribution-statement linked panel

## Summary

The MAG contribution-statement linked panel joins a large Microsoft Academic Graph publication spine to journal author-contribution statements so team roles can be estimated for papers that do not explicitly report them.

## Canonical Form

- Unit of analysis: multi-author paper, author-paper row, contribution statement, MAG topic keyword, reference list, citation window, or team-size stratum.
- Typical representation: publication table linked to extracted author activities, author role labels, inferred L-ratio, topic embeddings, citation outcomes, and author career variables.
- Data target: scalable role-aware team-science analysis beyond the journals that publish contribution statements.
- Empirical signature: observed contribution statements train or validate role models, which are then extrapolated to a much larger publication corpus.

## Uses in Science of Science

- Extends [author contribution statements](author_contribution_statements.md) into a large historical team-science panel.
- Supplies the data backbone for [lead-role ratio](../measures/lead_role_ratio.md), [developmental index](../measures/developmental_index.md), [citation-window impact split](../measures/citation_window_impact_split.md), and [within-author L-ratio fixed-effect comparison](../validations/within_author_l_ratio_fixed_effect.md).
- Bridges legacy [MAG publication backbone](mag_publication_backbone.md) data to role-aware [coauthorship networks](../representations/coauthorship_networks.md).
- Requires the [contribution-statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md) when observed role statements are extrapolated to the broader MAG corpus.

## Operationalization

- Start with multi-author MAG journal articles and preserve topic keywords, references, citations, team size, and author history.
- Collect contribution statements from journals with role disclosures and parse author-activity mentions.
- Link contribution-statement papers to the publication spine by DOI, title, venue, author, and year checks.
- Train or validate role models on the observed statement set, then estimate roles and L-ratio for papers without explicit statements.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) links Microsoft Academic Graph with author contribution statements from PNAS, Nature, Science, and PLOS ONE.
- The full text reports 16,397,750 multi-author journal articles from 184 countries during 1950-2015, averaging 7.4 MAG topic keywords, 30.5 references, 41.2 citations, and 4.8 authors.
- The contribution-statement layer covers 89,575 self-reports: 18,354 PNAS papers from 2003-2015, 9,364 Nature papers from 2006-2020, 1,176 Science papers from 2018-2020, and 60,681 PLOS ONE papers from 2006-2014.
- Xu et al. report that the top 25 extracted activities cover 94.6% of the statement data and each paper lists 5.2 unique activities on average.

## Caveats

- MAG is no longer updated, so the panel should be treated as a historical linked corpus rather than a current source of recent publications.
- Contribution-statement coverage is concentrated in four journals and specific years.
- Extrapolated role labels inherit errors from author disambiguation, author-order conventions, and NLP extraction.
- Coverage and domain-shift checks should be reported when reusing the role model outside the original journals and years.

## Links

- [author contribution statements](author_contribution_statements.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md)
- [contribution activity modularity clustering](../methods/contribution_activity_modularity_clustering.md)
- [contribution-statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `mag_contribution_statement_linked_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: MAG role panel; contribution-statement linked MAG panel; role-aware team-science panel; MAG L-ratio panel
