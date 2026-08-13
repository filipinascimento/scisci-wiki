# Robust archetypal contribution profiles

## Summary

Robust archetypal contribution profiles use archetypal analysis to identify prototypical scientist role profiles from aggregated contribution-role vectors while reducing sensitivity to outliers.

## Canonical Form

- Unit of analysis: scientist, career stage, aggregated contribution vector, archetype, or archetype mixture.
- Typical representation: convex combinations of prototypical contribution profiles with uncertainty intervals.
- Method target: discover interpretable role profiles such as leadership, specialization, and support from multivariate contribution data.
- Empirical signature: a small number of archetypes summarizes contribution-role variation within career stages.

## Uses in Science of Science

- Turns imputed [contribution role vectors](../representations/contribution_role_vectors.md) into interpretable career profiles.
- Supports [task specialization](../mechanisms/task_specialization.md) by identifying role types rather than only individual contribution frequencies.
- Produces [leader-specialized-supporting archetypes](../representations/leader_specialized_supporting_archetypes.md) as a reusable representation of division of labor.
- Feeds [contribution archetype career progression](../mechanisms/contribution_archetype_career_progression.md) analyses of persistence, productivity, and citation impact.

## Operationalization

- Aggregate predicted contribution probabilities for each scientist within each career stage, often using medians to reduce publication-level outlier influence.
- Apply robust archetypal analysis to the multivariate contribution matrix within each stage.
- Select the number of archetypes with residual-sum-of-squares screeplots or related diagnostics.
- Label archetypes by their dominant contribution coefficients and inspect uncertainty intervals for robustness.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) aggregates predicted contributorships at the individual level by career stage using median predicted contributions.
- The paper applies robust archetypal analysis to identify prototypical scientist types based on contribution data.
- Robinson-Garcia et al. use residual-sum-of-squares analysis and elbow criteria, selecting two archetypes for junior and late-career stages and three for early- and mid-career stages.
- The full text reports uncertainty intervals around coefficient values and states that contribution differences and similarities are preserved, supporting archetype robustness.

## Caveats

- Archetype labels are interpretive and can be shaped by the chosen contribution vocabulary.
- Career-stage-specific archetypes may reflect cohort and survivorship effects as well as role specialization.
- Robust archetypal analysis summarizes profiles but does not by itself identify causal career mechanisms.

## Links

- [contribution role vectors](../representations/contribution_role_vectors.md)
- [Bayesian contributorship imputation](bayesian_contributorship_imputation.md)
- [career-stage contributorship panel](../representations/career_stage_contributorship_panel.md)
- [leader-specialized-supporting archetypes](../representations/leader_specialized_supporting_archetypes.md)
- [contribution archetype career progression](../mechanisms/contribution_archetype_career_progression.md)
- [task specialization](../mechanisms/task_specialization.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `robust_archetypal_contribution_profiles`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: robust archetypal analysis; contribution archetype profiling; role archetype analysis; scientist contribution archetypes
