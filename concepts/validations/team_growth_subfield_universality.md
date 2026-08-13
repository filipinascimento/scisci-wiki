# Team-growth subfield universality

## Summary

Team-growth subfield universality tests whether the shift toward teamwork appears across most subfields, rather than being driven by a small number of large or highly collaborative disciplines.

## Canonical Form

- Unit of analysis: subfield within a broad scientific, humanities, or patent domain.
- Typical representation: percentage of subfields with increased team-authorship share or mean team size between an initial and final observation window.
- Mechanism or measurement target: breadth of the transition from solo to team production.
- Empirical signature: most subfields show higher teamwork in the later period than in the earlier period.

## Uses in Science of Science

- Provides a robustness layer for [team-authorship share](../measures/team_authorship_share.md) by testing whether aggregate teamwork growth is field-composition driven.
- Complements [mean team-size growth](../measures/mean_team_size_growth.md) by asking whether growth is widespread across subfields.
- Pairs with [low-capital field team-growth check](low_capital_field_team_growth_check.md) when the question is whether big-science resource growth explains the pattern.
- Strengthens [team impact advantage](../mechanisms/team_impact_advantage.md) claims when both prevalence and impact advantages recur across many subfields.
- Depends on the subfield-stratified [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md).

## Operationalization

- Define subfield strata and a first-period and last-period comparison window.
- Compute whether teamwork increased in each subfield using team-authorship share, mean team size, or both.
- Report the count and percentage of subfields with positive growth within each broad domain.
- Pair prevalence universality with impact universality when citation outcomes are part of the claim.
- Report [humanities solo-authorship persistence](humanities_solo_authorship_persistence.md) separately so positive slopes are not confused with team dominance in arts and humanities.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) reports that increased teamwork appears in 99.4% of science and engineering subfields, 100% of social-science subfields, 85.2% of arts and humanities subfields, and 100% of patenting subfields.
- The same paper reports that all areas of patenting show positive changes in both team-authored share and team size, with only small variation across patent areas.
- Wuchty et al. use this subfield table to argue that the team-production shift is broad rather than confined to laboratory-intensive fields.
- This breadth feeds a broader [team-growth driver portfolio](../mechanisms/team_growth_driver_portfolio.md), because subfield universality alone does not identify which driver dominates.
- The same evidence motivates [subfield equal-weight trend aggregation](../methods/subfield_equal_weight_trend_aggregation.md) when showing broad-domain trends and [humanities solo-authorship persistence](humanities_solo_authorship_persistence.md) when interpreting levels.

## Caveats

- Universality statistics depend on the subfield taxonomy and the first/last window definition.
- A high percentage of positive subfields does not imply equal effect sizes across subfields.
- Broad-domain aggregation can hide humanities subfields or small subfields with weaker trends.

## Links

- [team-authorship share](../measures/team_authorship_share.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [subfield equal-weight trend aggregation](../methods/subfield_equal_weight_trend_aggregation.md)
- [humanities solo-authorship persistence](humanities_solo_authorship_persistence.md)
- [team-size field-growth control](team_size_field_growth_control.md)
- [low-capital field team-growth check](low_capital_field_team_growth_check.md)
- [team-growth driver portfolio](../mechanisms/team_growth_driver_portfolio.md)
- [field classifications](../measures/field_classifications.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `team_growth_subfield_universality`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: subfield universality of teamwork; cross-subfield team growth; widespread teamwork shift; field-robust team production growth
