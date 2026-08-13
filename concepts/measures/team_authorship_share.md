# Team-authorship share

## Summary

Team-authorship share measures the fraction of papers, patents, or other outputs produced by more than one author or inventor.

## Canonical Form

- Unit of analysis: paper, patent, field, subfield, year, institution, country, or dataset.
- Typical representation: share of outputs with team authorship, solo-versus-team time series, or field-level teamwork rate.
- Mechanism or measurement target: transition from individual to collective knowledge production.
- Empirical signature: team-authored output becomes more common over time within most fields and technology categories.

## Uses in Science of Science

- Supplies the prevalence side of [team impact advantage](../mechanisms/team_impact_advantage.md), separate from citation outcomes.
- Complements [mean team-size growth](mean_team_size_growth.md): a field can have more team-authored work without large increases in average team size, or vice versa.
- Provides a simple descriptive input for [coauthorship networks](../representations/coauthorship_networks.md), [team size and disruption](../mechanisms/team_size_disruption.md), and team-science policy portfolios.
- Helps separate changes in collaboration incidence from changes in citation reward.
- Supplies one of the outcome series used in [low-capital field team-growth check](../validations/low_capital_field_team_growth_check.md).
- Uses [humanities solo-authorship persistence](../validations/humanities_solo_authorship_persistence.md) to keep positive teamwork trends separate from absolute team-authorship levels in arts and humanities.

## Operationalization

- Define a team as more than one listed author, inventor, contributor, or credited entity.
- Count solo and team-authored outputs by field, year, dataset, or document type.
- Compute the team-authorship share as team outputs divided by all outputs in the comparison cell.
- Report author/inventor disambiguation, consortium handling, field boundaries, and document-type filters.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) defines teams as publications with more than one listed author or patents with more than one inventor.
- The paper analyzes 19.9 million Web of Science papers and 2.1 million U.S. patents and reports a substantial shift toward collective research across science and engineering, social sciences, patents, and a weaker but positive shift in humanities.
- Wuchty et al. report that 99.4% of science and engineering subfields, 100% of social-science subfields, 85.2% of humanities subfields, and 100% of patenting subfields show increased teamwork.
- Their text gives field examples such as mathematics rising from 19% team-authored work to 57%, showing that team-authorship share is not only a laboratory-scale phenomenon.
- This evidence is split out in [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md) and [team-growth subfield universality](../validations/team_growth_subfield_universality.md).
- Verified full-text evidence from Porter and Rafols (2009) uses coauthor counts and single-authored share as collaboration indicators but cautions that rising teamwork should not be equated with [interdisciplinarity](../mechanisms/interdisciplinarity.md).
- The Wuchty full text also shows that arts and humanities can have positive team-growth trends while remaining overwhelmingly solo-authored.

## Caveats

- Team-authorship share depends on authorship norms, consortium practices, patent inventor rules, and database coverage.
- More team-authored output does not imply higher contribution equality or better science.
- Comparisons across fields should separate team prevalence from mean team size, citation impact, and disruption.

## Links

- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [mean team-size growth](mean_team_size_growth.md)
- [relative team-impact ratio](relative_team_impact_ratio.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [team-growth subfield universality](../validations/team_growth_subfield_universality.md)
- [low-capital field team-growth check](../validations/low_capital_field_team_growth_check.md)
- [humanities solo-authorship persistence](../validations/humanities_solo_authorship_persistence.md)
- [team-growth driver portfolio](../mechanisms/team_growth_driver_portfolio.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [self-citation-adjusted team impact](../validations/self_citation_adjusted_team_impact.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [team-authorship interdisciplinarity non-equivalence](../validations/team_authorship_interdisciplinarity_non_equivalence.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [team assembly mechanisms](../mechanisms/team_assembly_mechanisms.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]

## Metadata

- Concept ID: `team_authorship_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: teamwork share; team-produced output share; fraction team-authored; solo-versus-team authorship share
