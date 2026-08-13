# Contribution activity modularity clustering

## Summary

Contribution activity modularity clustering discovers team-role classes by clustering a network of activities that co-occur within authors' contribution statements.

## Canonical Form

- Unit of analysis: activity, author-activity edge, co-activity pair, contribution statement, or paper team.
- Typical representation: activity co-occurrence graph, modularity partition, role-labeled activity cluster, or activity-to-role lookup table.
- Method target: convert noisy contribution text into stable team-role categories.
- Empirical signature: frequent activity verbs cluster into interpretable role groups that validate against author positions and career features.

## Uses in Science of Science

- Creates the observed role classes used in [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md).
- Feeds [contribution role vectors](../representations/contribution_role_vectors.md), [lead-role ratio](../measures/lead_role_ratio.md), and [contributorship prediction models](contributorship_prediction_models.md).
- Turns [author contribution statements](../datasets/author_contribution_statements.md) into reusable structured data.

## Operationalization

- Parse author contribution statements into normalized activities.
- Count activity co-occurrence within author-paper observations.
- Build an activity graph with edges weighted by co-contribution.
- Run a modularity-based community detection algorithm and interpret communities as role clusters.
- Validate clusters against byline position, corresponding-author status, prior topics, career age, citation history, and productivity.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) applies a modularity-based algorithm to contribution-statement activities.
- The method identifies three clusters: Lead, Direct Support, and Indirect Support.
- The extracted top 25 activities cover 94.6% of the contribution-statement data, making the clustered vocabulary broad enough for team-level analysis in the paper.
- Xu et al. use the resulting clusters to classify authors and compute team L-ratios.

## Caveats

- Modularity partitions are sensitive to activity normalization, edge weighting, frequency thresholds, and journal templates.
- Activity clusters are descriptive; they do not by themselves establish causal effects of hierarchy.
- Rare but important contributions may be excluded by top-activity filtering.

## Links

- [author contribution statements](../datasets/author_contribution_statements.md)
- [lead/direct/indirect support role taxonomy](../representations/lead_direct_indirect_support_taxonomy.md)
- [contribution role vectors](../representations/contribution_role_vectors.md)
- [contributorship prediction models](contributorship_prediction_models.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [author similarity clustering](author_similarity_clustering.md)
- [coauthorship networks](../representations/coauthorship_networks.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `contribution_activity_modularity_clustering`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: activity co-occurrence clustering; contribution role clustering; modularity role discovery; team activity communities
