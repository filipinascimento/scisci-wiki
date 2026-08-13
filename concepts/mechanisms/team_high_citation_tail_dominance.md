# Team high-citation tail dominance

## Summary

Team high-citation tail dominance is the empirical pattern that team-authored outputs have come to occupy the extreme right tail of citation distributions more often than solo-authored outputs.

## Canonical Form

- Unit of analysis: paper, patent, domain, field, cohort, or citation-threshold bin.
- Typical representation: tail-probability ratio, distribution comparison, threshold exceedance count, or solo-versus-team citation histogram.
- Mechanism or measurement target: whether the most visible or exceptionally cited work is disproportionately team-authored.
- Empirical signature: team-authored outputs are more likely than solo-authored outputs to exceed very high citation thresholds in recent cohorts.

## Uses in Science of Science

- Extends [team impact advantage](team_impact_advantage.md) beyond mean citations into the extreme citation tail.
- Helps separate average team citation advantage from changes in the production of exceptionally visible work.
- Provides the right-tail side of [solo-to-team impact reversal](../validations/solo_to_team_impact_reversal.md).
- Provides a contrast for [team size and disruption](team_size_disruption.md), because very high citation counts can coexist with lower disruption.
- Connects team science to [attention inequality](attention_inequality.md) and [citation elite concentration](../measures/citation_elite_concentration.md).

## Operationalization

- Split outputs into solo-authored and team-authored groups.
- Compute citation distributions by field and time period.
- Compare right-tail probabilities at chosen thresholds, such as top percentile, above field-year mean, or fixed high-citation thresholds.
- Repeat with self-citations removed and with field/year normalization.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) compares citation distributions for solo-authored and team-authored work in the first and last five years of their data.
- Wuchty et al. report that teams dominate the top of the citation distribution in science and engineering, social sciences, humanities, and patents in the recent period.
- The paper gives a concrete example: in science and engineering, a team-authored paper was 6.3 times more likely than a solo-authored paper to receive at least 1,000 citations in the recent period.
- The paper reports that these right-tail patterns also hold when self-citations are removed.
- This evidence is split out as [solo-to-team impact reversal](../validations/solo_to_team_impact_reversal.md) when the focus is the early solo advantage passing to teams over time.

## Caveats

- Tail thresholds should be field- and year-aware because citation distributions are highly skewed and age-dependent.
- Extreme citation dominance can reflect review articles, large consortia, infrastructure papers, or database artifacts.
- High-citation tail dominance is not the same as disruptive novelty or social value.

## Links

- [team impact advantage](team_impact_advantage.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [team-authorship share](../measures/team_authorship_share.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [field-year mean high-citation flag](../measures/field_year_mean_high_citation_flag.md)
- [solo-to-team impact reversal](../validations/solo_to_team_impact_reversal.md)
- [team size and disruption](team_size_disruption.md)
- [attention inequality](attention_inequality.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `team_high_citation_tail_dominance`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: team tail citation dominance; team extreme-impact dominance; high-citation team dominance; team right-tail citation advantage
