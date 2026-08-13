# Solo-to-team impact reversal

## Summary

Solo-to-team impact reversal is the validation pattern in which early citation advantages for solo-authored work disappear or reverse, with team-authored work later dominating average and tail citation impact.

## Canonical Form

- Unit of analysis: paper, patent, authorship group, field, subfield, broad domain, or observation period.
- Typical representation: early-versus-late relative team-impact ratio, solo/team citation-distribution comparison, or right-tail probability ratio.
- Validation target: test whether team impact advantage is a historical transition rather than a time-invariant property of teams.
- Empirical signature: early windows show solo advantage in some fields or tails, while later windows show teams matching or exceeding solo outputs.

## Uses in Science of Science

- Turns [team impact advantage](../mechanisms/team_impact_advantage.md) into a temporal validation rather than only a cross-sectional comparison.
- Bridges average-impact evidence from [relative team-impact ratio](../measures/relative_team_impact_ratio.md) with right-tail evidence from [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md).
- Provides context for [fixed-size team impact premium](../measures/fixed_size_team_impact_premium.md), because fixed-size team premiums also rise over time.
- Helps distinguish a genuine organization-of-science transition from static field composition or persistent authorship norms.

## Operationalization

- Define early and late observation windows using a stable database, field taxonomy, and citation census rule.
- Split outputs into solo-authored and team-authored groups.
- Compute [relative team-impact ratio](../measures/relative_team_impact_ratio.md) by subfield and period.
- Compare citation distributions and right-tail probabilities for solo and team outputs in each period.
- Repeat with self-citations removed and with field/year controls.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) reports that, in early periods, solo authors received substantially more citations on average than teams in many subfields, especially science and engineering and the social sciences.
- The same paper states that by the end of the period there were virtually no science and engineering or social-science subfields where solo-authored work typically received more citations than team-authored work.
- Wuchty et al. also compare citation-distribution tails and report that early solo authors in science and engineering and the social sciences were more likely to produce the most highly cited work.
- In the contemporary period, that advantage reversed: team-authored papers became more likely to occupy the highly cited tail, including the reported 1,000-citation threshold in science and engineering.

## Caveats

- The reversal is historical to the Web of Science and patent windows used by Wuchty et al.; newer Dimensions or OpenAlex panels should re-estimate it.
- Citation advantage is not the same as disruption, originality, or equitable contribution.
- Authorship conventions, consortium reporting, field taxonomy, and database coverage can affect both solo/team labels and impact comparisons.

## Links

- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [fixed-size team impact premium](../measures/fixed_size_team_impact_premium.md)
- [self-citation-adjusted team impact](self_citation_adjusted_team_impact.md)
- [field-year mean high-citation flag](../measures/field_year_mean_high_citation_flag.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [team-authorship share](../measures/team_authorship_share.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `solo_to_team_impact_reversal`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: solo-team citation reversal; team impact transition; solo-to-team high-impact shift; teamwork citation reversal
