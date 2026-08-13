# Fixed-size team impact premium

## Summary

Fixed-size team impact premium compares citation impact for teams of a specified size against solo-authored work, separating a team-size-specific citation advantage from changes in the composition of team sizes over time.

## Canonical Form

- Unit of analysis: publication or patent grouped by exact team size, field, and year or period.
- Typical representation: citation ratio for two-author, three-author, or larger fixed-size teams relative to solo outputs.
- Mechanism or measurement target: whether a team advantage exists for comparable team-size classes rather than only because larger teams become more common.
- Empirical signature: fixed-size teams receive more citations than solo outputs, and the premium grows over time.

## Uses in Science of Science

- Refines [relative team-impact ratio](relative_team_impact_ratio.md) by holding team size fixed.
- Helps interpret [team impact advantage](../mechanisms/team_impact_advantage.md) when overall team citation advantage might otherwise be attributed to growth in very large teams.
- Complements [mean team-size growth](mean_team_size_growth.md) by asking whether same-size teams become more impactful relative to solo work.
- Can be paired with [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md) and [research-design team-size control](../validations/research_design_team_size_control.md).

## Operationalization

- Split outputs by exact author or inventor count.
- For each field and period, compare mean citations for fixed-size teams with mean citations for solo outputs.
- Track whether the fixed-size team-to-solo ratio changes over time.
- Report whether the comparison uses raw citations, field/year-normalized citations, or a common citation-window design.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) states that the citation advantage of teams increases over time even when fixed-size teams are compared to solo authors.
- In science and engineering, their text reports that two-author papers received 1.30 times more citations than solo-authored papers in the 1950s and 1.74 times more citations in the 1990s.
- Wuchty et al. report that the pattern holds for comparisons between teams of any fixed size and solo authors.

## Caveats

- Fixed-size comparisons still require field, year, and citation-window controls.
- Exact team size does not measure role structure, contribution equality, or coordination quality.
- Citation premiums can coexist with lower disruptiveness or different novelty profiles.

## Links

- [relative team-impact ratio](relative_team_impact_ratio.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [mean team-size growth](mean_team_size_growth.md)
- [team-authorship share](team_authorship_share.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [research-design team-size control](../validations/research_design_team_size_control.md)
- [same-size team hierarchy contrast](../validations/same_size_team_hierarchy_contrast.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `fixed_size_team_impact_premium`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: fixed-team-size citation premium; same-size team citation advantage; team-size-specific impact ratio; fixed-size RTI
