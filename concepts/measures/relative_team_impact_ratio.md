# Relative team-impact ratio

## Summary

Relative team-impact ratio compares mean citations to team-authored work with mean citations to solo-authored work within a field and time period.

## Canonical Form

- Unit of analysis: field-year cell, broad research domain, patent class, or output cohort.
- Typical representation: RTI = mean citations to team-authored outputs divided by mean citations to solo-authored outputs.
- Mechanism or measurement target: citation advantage associated with team production.
- Empirical signature: values above 1 indicate team-authored work receives more citations on average than solo-authored work in the same comparison cell.

## Uses in Science of Science

- Operationalizes the citation side of [team impact advantage](../mechanisms/team_impact_advantage.md).
- Complements [team-authorship share](team_authorship_share.md) and [mean team-size growth](mean_team_size_growth.md), which measure production rather than impact.
- Supplies the average-impact side of [solo-to-team impact reversal](../validations/solo_to_team_impact_reversal.md).
- Provides a baseline for interpreting [team size and disruption](../mechanisms/team_size_disruption.md), where citation impact and disruptive impact can diverge.
- Can be paired with [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md) to test whether the team advantage is driven by larger self-citation opportunities.

## Operationalization

- Define team-authored and solo-authored outputs for each field and time period.
- Count citations over a common census window or compare within publication year to control citation age.
- Divide mean team citations by mean solo citations.
- Repeat with field, year, document type, self-citation, and team-size controls.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) defines relative team impact as mean citations received by team-authored work divided by mean citations received by solo-authored work.
- Wuchty et al. state that RTI above 1 indicates teams produce more highly cited papers than solo authors, while RTI below 1 indicates the reverse.
- Their analysis reports average RTI above 1 across science and engineering, social sciences, humanities, and patents, and shows RTI rising over time.
- In science and engineering, team-authored papers received 1.7 times solo citations in 1955 and 2.1 times solo citations by 2000.
- Wuchty et al. also report that early solo-author advantages in many science and engineering and social-science subfields had largely reversed by the end of the observation period.
- The paper also reports [fixed-size team impact premium](fixed_size_team_impact_premium.md): two-author science and engineering papers rose from 1.30 times solo citation impact in the 1950s to 1.74 times in the 1990s.

## Caveats

- RTI uses mean citations and is therefore sensitive to skewed citation distributions.
- Citation advantage does not imply originality, disruption, or contribution equity.
- The ratio must be normalized by field, year, and citation window; otherwise field composition and age effects can dominate.

## Links

- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team-authorship share](team_authorship_share.md)
- [mean team-size growth](mean_team_size_growth.md)
- [fixed-size team impact premium](fixed_size_team_impact_premium.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [field-year mean high-citation flag](field_year_mean_high_citation_flag.md)
- [solo-to-team impact reversal](../validations/solo_to_team_impact_reversal.md)
- [citation impact indicators](citation_impact_indicators.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [responsible metrics](responsible_metrics.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `relative_team_impact_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: RTI; team citation advantage ratio; relative team impact; team-to-solo citation ratio
