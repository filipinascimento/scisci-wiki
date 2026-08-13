# Within-author L-ratio fixed-effect comparison

## Summary

Within-author L-ratio fixed-effect comparison tests whether the same researcher produces different outcomes when working on teams with different levels of leadership flatness.

## Canonical Form

- Unit of analysis: author-paper observation, paper, scientist career, team-size stratum, or L-ratio bin.
- Typical representation: author fixed-effect regression, within-person coefficient, or same-author outcome contrast.
- Validation target: reduce confounding from stable differences in author ability, field position, and career style.
- Empirical signature: L-ratio remains associated with novelty, development, productivity, and citation-window outcomes within the same author.

## Uses in Science of Science

- Strengthens evidence for [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md) beyond cross-sectional team comparisons.
- Connects [lead-role ratio](../measures/lead_role_ratio.md) to [team hierarchy productivity redistribution](../mechanisms/team_hierarchy_productivity_redistribution.md) and [citation-window impact split](../measures/citation_window_impact_split.md).
- Pairs with [same-size team hierarchy contrast](same_size_team_hierarchy_contrast.md) to separate hierarchy from team size and stable author traits.

## Operationalization

- Build author-paper panels with inferred or observed L-ratio.
- Regress outcomes such as novelty, developmental index, productivity, short-term citations, and long-term citations on L-ratio.
- Include author fixed effects so each author is compared to themselves across teams.
- Control for team size, mean career age, and career-age variance.
- Interpret remaining associations cautiously because team assignment is still not randomized.

## Evidence and Validations

- Verified full-text evidence from Xu, Wu, and Evans (2022) reports author fixed-effect regressions examining the impact of L-ratio for the same person moving between different teams.
- The paper states that L-ratio remains consistent and substantial after controlling for team size and the career-age variance of team members.
- The abstract states that within-person comparisons show the same person on the same-sized team is more likely to disruptively innovate when working on a flat, high-L-ratio team.
- The discussion notes that causal interpretation remains uncertain, but the within-author design reduces some stable-author confounding.

## Caveats

- Author fixed effects do not remove time-varying project selection, funding, institution, or collaborator shocks.
- The method depends on reliable author disambiguation and role prediction.
- Same-author estimates may emphasize mobile or prolific researchers with enough variation across teams.

## Links

- [team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [lead-role ratio](../measures/lead_role_ratio.md)
- [same-size team hierarchy contrast](same_size_team_hierarchy_contrast.md)
- [team hierarchy productivity redistribution](../mechanisms/team_hierarchy_productivity_redistribution.md)
- [developmental index](../measures/developmental_index.md)
- [citation-window impact split](../measures/citation_window_impact_split.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `within_author_l_ratio_fixed_effect`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: author fixed-effect L-ratio model; within-person team flatness comparison; same-author hierarchy contrast; L-ratio fixed effects
