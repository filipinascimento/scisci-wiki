# Subfield Equal-Weight Trend Aggregation

## Summary

Subfield equal-weight trend aggregation averages yearly field trends across subfields with equal weight per subfield, so large fields do not dominate aggregate teamwork or impact curves.

## Canonical Form

- Unit of analysis: subfield-year cell, broad disciplinary branch, patent technology class, or annual trend line.
- Typical representation: arithmetic average over subfields, equal-weight time series, or branch-level mean of field-level indicators.
- Method target: summarize broad changes while preserving the typical subfield experience rather than the output-weighted experience.
- Empirical signature: a plotted broad-domain trend reports the average of subfield values, not the value obtained by pooling all papers or patents.

## Uses in Science of Science

- Makes [team-authorship share](../measures/team_authorship_share.md), [mean team-size growth](../measures/mean_team_size_growth.md), and [relative team-impact ratio](../measures/relative_team_impact_ratio.md) less sensitive to very large subfields.
- Supports [team-growth subfield universality](../validations/team_growth_subfield_universality.md) by aligning aggregate trend lines with subfield-level evidence.
- Provides an aggregation rule for the [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md).
- Helps separate a widespread structural shift from a composition effect caused by output growth in a few large fields.

## Operationalization

- Compute the target indicator separately for every subfield-year cell.
- Group subfields into broad branches such as science and engineering, social sciences, arts and humanities, or patents.
- For each year and branch, take the arithmetic mean across subfields rather than weighting by paper or patent volume.
- Report whether the trend line is equal-weighted, output-weighted, or pooled, and run sensitivity checks when field size is highly skewed.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) presents team-growth and relative team-impact plots where each line is the arithmetic average over all subfields in a broad research category.
- Their supplementary figure description repeats that each point represents a subfield-year and the black line is the arithmetic mean over subfields.
- The same paper uses this aggregation alongside subfield-specific tables, making it possible to distinguish broad-domain trend summaries from individual subfield variation.

## Caveats

- Equal weighting can overrepresent very small subfields relative to their output volume.
- Output-weighted and equal-weighted trends answer different questions and should not be substituted silently.
- The method inherits the source database's subfield taxonomy and any multiple-assignment rules.

## Links

- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [team-authorship share](../measures/team_authorship_share.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [team-growth subfield universality](../validations/team_growth_subfield_universality.md)
- [field classifications](../measures/field_classifications.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown; SciSciNet: W1965631677]

## Metadata

- Concept ID: `subfield_equal_weight_trend_aggregation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: equal-weight subfield average; arithmetic subfield trend; field-balanced aggregation; subfield-year averaging
