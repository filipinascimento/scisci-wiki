# Lead/direct/indirect support role taxonomy

## Summary

The lead/direct/indirect support taxonomy represents scientific team labor as three broad activity clusters: leadership, direct research support, and indirect support around the research process.

## Canonical Form

- Unit of analysis: author activity, author-paper row, paper team, contribution statement, or role cluster.
- Typical representation: three-class role label, author-role table, activity-to-role map, or team role-composition vector.
- Representation target: internal division of labor inside paper teams.
- Empirical signature: activities that co-occur within authors cluster into leadership, direct support, and indirect support roles.

## Uses in Science of Science

- Gives semantic content to [contribution role vectors](contribution_role_vectors.md).
- Supplies the role labels behind [lead-role ratio](../measures/lead_role_ratio.md) and [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md).
- Links team hierarchy to [task specialization](../mechanisms/task_specialization.md), [scientific career impact](../mechanisms/scientific_career_impact.md), and role-aware [coauthorship networks](coauthorship_networks.md).

## Operationalization

- Extract verbs or activity phrases from author contribution statements.
- Build an activity co-occurrence network over author-paper observations.
- Cluster frequent activities into role classes.
- Assign each author to one or more role labels and aggregate roles to the paper team.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) clusters the 25 most common contribution activities across 89,575 self-reports.
- The leadership cluster contains activities such as conceive, design, lead, supervise, coordinate, interpret, and write.
- Direct support contains help, assist, prepare, develop, collect, generate, purify, carry, do, perform, conduct, and analyze.
- Indirect support contains participate, provide, contribute, comment, discuss, and edit.

## Caveats

- The taxonomy compresses heterogeneous labor into broad classes and may miss informal mentoring, funding, infrastructure, or emotional labor.
- Activity meanings can differ across fields, journals, and author-order cultures.
- Some authors may perform mixed roles, so hard role labels can hide intensity and overlap.

## Links

- [contribution role vectors](contribution_role_vectors.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution activity modularity clustering](../methods/contribution_activity_modularity_clustering.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [task specialization](../mechanisms/task_specialization.md)
- [coauthorship networks](coauthorship_networks.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `lead_direct_indirect_support_taxonomy`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: lead support taxonomy; direct support role; indirect support role; team role taxonomy; contribution activity taxonomy
