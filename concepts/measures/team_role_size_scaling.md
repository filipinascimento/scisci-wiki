# Team role-size scaling

## Summary

Team role-size scaling measures how the mix of lead, direct-support, and indirect-support roles changes as scientific teams grow larger.

## Canonical Form

- Unit of analysis: paper team, author role, contribution-statement panel, team-size bin, field, or year cohort.
- Typical representation: role-share curve by team size, L-ratio distribution by author count, or team-size-by-role heatmap.
- Measurement target: whether larger teams merely add more authors or shift the internal division of labor toward support roles.
- Empirical signature: the share of lead authors falls and support roles become more common as team size increases, with substantial variation among same-sized teams.

## Uses in Science of Science

- Refines [lead-role ratio](lead_role_ratio.md) by showing that team flatness is size-dependent but not determined by size.
- Connects [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md) to [task specialization](../mechanisms/task_specialization.md) and role-aware [coauthorship networks](../representations/coauthorship_networks.md).
- Provides a size-conditioned baseline for [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md).
- Helps interpret [team impact advantage](../mechanisms/team_impact_advantage.md) and [team size and disruption](../mechanisms/team_size_disruption.md), because growing teams can change both scale and role structure.

## Operationalization

- Classify authors into lead, direct-support, or indirect-support roles using contribution statements or predicted role labels.
- Bin papers by team size and estimate the share of each role class within each bin.
- Plot L-ratio distributions by team size and report within-size dispersion.
- Compare role-size curves across fields, journals, countries, and time periods.
- Use same-size comparisons before attributing outcome gradients to hierarchy rather than raw team size.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) reports that team role composition changes with team size.
- The paper states that lead-author share peaks in two-person teams, direct-support-only authors peak around teams of size 11, and indirect-support-only authors peak around teams of size 25.
- Xu et al. also report that smaller teams tend to have higher L-ratio, while same-size teams still display enough L-ratio variance to separate hierarchy from size.
- This measure supplies the descriptive bridge between role taxonomy, L-ratio, and same-size hierarchy validation.

## Caveats

- Role-size curves depend on the role classifier and the contribution-statement training corpus.
- Large-team support roles can include essential infrastructure work, not merely subordinate labor.
- Team-size bins can hide field and project-type differences, especially in consortium-heavy areas.

## Links

- [lead-role ratio](lead_role_ratio.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md)
- [task specialization](../mechanisms/task_specialization.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `team_role_size_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: role composition by team size; L-ratio size scaling; lead share team-size curve; support-role size gradient
