# Team-size field-growth control

## Summary

Team-size field-growth control tests whether rising average team size is merely a byproduct of fields becoming larger, rather than a separate shift in how knowledge production is organized.

## Canonical Form

- Unit of analysis: subfield-year cell.
- Typical representation: regression of log team size on log field size with subfield and year fixed effects.
- Mechanism or measurement target: whether manpower expansion explains team-size growth.
- Empirical signature: field size has at most a small association with team size, leaving most team-size growth unexplained by field expansion alone.

## Uses in Science of Science

- Provides a validation layer for [mean team-size growth](../measures/mean_team_size_growth.md).
- Helps distinguish [team impact advantage](../mechanisms/team_impact_advantage.md) from a simple scaling artifact of larger fields.
- Complements [team-growth subfield universality](team_growth_subfield_universality.md): one tests breadth across subfields, the other tests whether field growth explains the trend.
- Complements [low-capital field team-growth check](low_capital_field_team_growth_check.md), which probes capital-intensity explanations rather than field-population growth.
- Uses the subfield-year structure of the [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md).

## Operationalization

- Build a subfield-year panel with average team size and field size.
- Regress log team size on log field size while including subfield and year fixed effects.
- Translate the coefficient into the share of observed team-size growth that could be explained by field-size growth.
- Report domains where the association is absent, weak, or stronger.

## Evidence and Validations

- Verified full-text supplementary evidence from Wuchty, Jones, and Uzzi (2007) estimates a regression of log team size on log field size with subfield and year fixed effects.
- Their science and engineering estimate implies that a 100% increase in subfield size is associated with only a 2% increase in average team size.
- Wuchty et al. calculate that field-size expansion explains only about 9% of the increase in science and engineering team size, suggesting a limited role for manpower growth alone.
- The same supplement reports a statistically significant but small association in science and engineering and social sciences, and no effect in arts and humanities.
- Together with the low-capital-field check, this result feeds the broader [team-growth driver portfolio](../mechanisms/team_growth_driver_portfolio.md).

## Caveats

- Field size is only one possible driver of team growth; capital intensity, specialization, methods, infrastructure, and authorship norms also matter.
- Subfield and year fixed effects do not eliminate all time-varying compositional changes.
- The coefficient is historical for the Wuchty panel and should be re-estimated for newer Dimensions or OpenAlex-based panels.

## Links

- [mean team-size growth](../measures/mean_team_size_growth.md)
- [team-authorship share](../measures/team_authorship_share.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team-growth subfield universality](team_growth_subfield_universality.md)
- [low-capital field team-growth check](low_capital_field_team_growth_check.md)
- [team-growth driver portfolio](../mechanisms/team_growth_driver_portfolio.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [field population models](../methods/field_population_models.md)
- [field classifications](../measures/field_classifications.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `team_size_field_growth_control`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: field-size control for team growth; manpower-growth team-size check; subfield-size team regression; team-size scaling control
