# Mean team-size growth

## Summary

Mean team-size growth measures how the average number of authors, inventors, or contributors per output changes across fields and time.

## Canonical Form

- Unit of analysis: output, field, subfield, institution, country, patent class, or year.
- Typical representation: average authors per paper, inventors per patent, team-size distribution, or log team-size trend.
- Mechanism or measurement target: increasing scale, specialization, coordination capacity, and division of labor in knowledge production.
- Empirical signature: average team size rises over time in many scientific and technological domains.

## Uses in Science of Science

- Provides a quantity-side complement to [team-authorship share](team_authorship_share.md).
- Supplies a basic input for [team impact advantage](../mechanisms/team_impact_advantage.md), [team size and disruption](../mechanisms/team_size_disruption.md), and [burden of knowledge](../mechanisms/burden_of_knowledge.md).
- Helps distinguish a broad shift from solo to teams from growth in already-team-authored work.
- Allows sensitivity checks for whether trends are driven by field growth, large-team fields, or consortium authorship.
- Provides an outcome for [low-capital field team-growth check](../validations/low_capital_field_team_growth_check.md) and the broader [team-growth driver portfolio](../mechanisms/team_growth_driver_portfolio.md).

## Operationalization

- Count listed authors, inventors, or contributors on each output after applying database-specific cleaning.
- Average team size by field, year, and document type; also preserve [article team-size distribution](article_team_size_distribution.md), medians, and tail percentiles.
- Compare time trends within fields and with field/year fixed effects when testing drivers.
- Report treatment of group authors, consortium names, missing authors, and very large teams.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) reports that science and engineering team size grew steadily and nearly doubled from 1.9 to 3.5 authors per paper over 45 years.
- The same paper reports that average social-science team size grew each year and that patents rose from 1.7 to 2.3 inventors per patent from 1975 to 2000.
- Wuchty et al. note that mathematics, often treated as a solo domain, showed mean team size rising from 1.22 to 1.84 along with a large increase in team-authored share.
- Their supplementary analysis models log team size against log field size with field and year fixed effects and concludes that manpower growth explains only a limited part of the rise in team size.
- The Wuchty source panel and field-size check are split out in [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md) and [team-size field-growth control](../validations/team_size_field_growth_control.md).
- Wuchty's cross-field discussion also supports [low-capital field team-growth check](../validations/low_capital_field_team_growth_check.md), because mathematics, economics, sociology, and social-science trends limit a pure capital-intensity explanation.
- Verified full-text evidence from Jones (2009) adds a knowledge-depth validation: patent team size rises with backward citation-tree depth, especially for very deep trees.
- Jones's model-layer explanation is split out in [minimum-expertise team assembly](../mechanisms/minimum_expertise_team_assembly.md): narrower individual breadth requires larger teams to cover the knowledge needed for implementation.
- Verified full-text evidence from Milojevic (2014) shows why mean growth should be read distributionally: astronomy's average team size rose from 1.5 to 6.7, while the distribution also changed from a mostly Poisson small-team form to one with a large-team power-law tail.
- Milojevic's [authorship-mode parameter trajectories](authorship_mode_parameter_trajectories.md) show that extended-team mean size grows much faster than core-team mean size, while [extended-team choice propensity](extended_team_choice_propensity.md) can remain stable.
- The narrower [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md) captures this warning as a validation step before interpreting average growth mechanistically.
- Fortunato et al. (2018) add a persistence interpretation through [team core-turnover survival strategy](../mechanisms/team_core_turnover_survival_strategy.md): growing teams can require turnover mechanisms even when small teams rely on stable cores.

## Caveats

- Mean team size can be pulled upward by very large teams; distributions and percentiles should accompany averages.
- Author-count meanings differ across fields, patents, and software or data contributions.
- Increases can reflect authorship norms or reporting practices as well as real collaboration.

## Links

- [team-authorship share](team_authorship_share.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [team-size field-growth control](../validations/team_size_field_growth_control.md)
- [low-capital field team-growth check](../validations/low_capital_field_team_growth_check.md)
- [team-growth driver portfolio](../mechanisms/team_growth_driver_portfolio.md)
- [team-growth subfield universality](../validations/team_growth_subfield_universality.md)
- [article team-size distribution](article_team_size_distribution.md)
- [mean team-size distribution-shift caveat](../validations/mean_team_size_distribution_shift_caveat.md)
- [authorship-mode contribution share](authorship_mode_contribution_share.md)
- [authorship-mode parameter trajectories](authorship_mode_parameter_trajectories.md)
- [extended-team choice propensity](extended_team_choice_propensity.md)
- [team-size distribution decomposition](../methods/team_size_distribution_decomposition.md)
- [team core-turnover survival strategy](../mechanisms/team_core_turnover_survival_strategy.md)
- [astronomy core-journal team panel](../datasets/astronomy_core_journal_team_panel.md)
- [core-team Poisson mode](../mechanisms/core_team_poisson_mode.md)
- [extended-team cumulative-advantage mode](../mechanisms/extended_team_cumulative_advantage_mode.md)
- [relative team-impact ratio](relative_team_impact_ratio.md)
- [team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [minimum-expertise team assembly](../mechanisms/minimum_expertise_team_assembly.md)
- [knowledge-burden scale-effects constraint](../mechanisms/knowledge_burden_scale_effects_constraint.md)
- [knowledge-depth team-size gradient](../validations/knowledge_depth_team_size_gradient.md)
- [education-specialization substitution](../mechanisms/education_specialization_substitution.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [weighted coauthorship edges](../representations/weighted_coauthorship_edges.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]
- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]
- Milojevic, S. (2014). Principles of scientific research team formation and evolution. *Proceedings of the National Academy of Sciences*, 111(11), 3984-3989. https://doi.org/10.1073/pnas.1309723111 [OpenAlex: W2109746829; Dimensions: pub.1018284603; WoS: unknown]
- Fortunato, S., Bergstrom, C. T., Borner, K., Evans, J. A., Helbing, D., Milojevic, S., Petersen, A. M., Radicchi, F., Sinatra, R., Uzzi, B., Vespignani, A., Waltman, L., Wang, D., & Barabasi, A.-L. (2018). Science of science. *Science*, 359(6379), eaao0185. https://doi.org/10.1126/science.aao0185 [OpenAlex: W2793071066; Dimensions: pub.1101303008; WoS: unknown]

## Metadata

- Concept ID: `mean_team_size_growth`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Fortunato et al. (2018) (2018)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: average team size trend; authors-per-paper growth; inventors-per-patent growth; team-size time series
