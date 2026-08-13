# WOS-USPTO team-production panel

## Summary

The WOS-USPTO team-production panel is a cross-domain dataset design that combines Web of Science publications and U.S. patent records to compare solo and team production over fields, subfields, years, and citation outcomes.

## Canonical Form

- Unit of analysis: publication or patent, with author or inventor counts, field/subfield labels, year, and citation counts.
- Typical representation: broad-domain and subfield panels split into solo outputs, team outputs, mean team size, and citation-impact comparisons.
- Mechanism or measurement target: whether knowledge production shifts from individual to collective work across scientific and technological domains.
- Empirical signature: team-authorship share and mean team size rise across most subfields, while team-authored work shows a citation advantage over solo work.

## Uses in Science of Science

- Provides the source-panel design for [team-authorship share](../measures/team_authorship_share.md), [mean team-size growth](../measures/mean_team_size_growth.md), and [relative team-impact ratio](../measures/relative_team_impact_ratio.md).
- Supports cross-domain tests of [team impact advantage](../mechanisms/team_impact_advantage.md) across papers and patents rather than only journal articles.
- Makes [team-growth subfield universality](../validations/team_growth_subfield_universality.md) observable by keeping ISI and patent subfield strata.
- Creates a natural setting for [fixed-size team impact premium](../measures/fixed_size_team_impact_premium.md), [team-size field-growth control](../validations/team_size_field_growth_control.md), and [patent examiner citation caveat](../validations/patent_examiner_citation_caveat.md).
- Uses [subfield equal-weight trend aggregation](../methods/subfield_equal_weight_trend_aggregation.md) when broad-domain time series are meant to reflect the average subfield rather than pooled output volume.

## Operationalization

- Assemble Web of Science publication records and U.S. registered patent records with author or inventor lists.
- Define teams as outputs with more than one listed author or inventor.
- Assign publications to ISI broad branches and subfields; assign patents to technology subfields.
- Count citations using a documented census date and compare solo and team outputs within the same field/year cells.
- Preserve the distinction between paper citations and patent citations when applying self-citation or impact controls.

## Evidence and Validations

- Verified full-text evidence from Wuchty, Jones, and Uzzi (2007) uses 19.9 million Web of Science research articles and 2.1 million U.S. patent records.
- Their Web of Science panel covers science and engineering since 1955, social sciences since 1956, and arts and humanities since 1975; their patent panel covers U.S. registered patents since 1975.
- The paper divides publications into 171 science and engineering subfields, 54 social-science subfields, and 27 arts and humanities subfields; patents are treated as a separate category with 36 subfields.
- Wuchty et al. define a team as more than one listed author for publications or more than one inventor for patents.
- Their figure captions specify arithmetic averaging over subfields and first/last-period team-size distributions, which now support split pages for equal-weight aggregation and article team-size distribution extensions.

## Caveats

- Web of Science coverage, ISI category boundaries, and patent classification choices shape the observed trend.
- The original Wuchty panel is historical and should not be treated as current coverage for recent papers or patents.
- Patent citation mechanisms differ from publication citation mechanisms because patent examiners assign many citations.
- Citation counts require a clear census date and within-year comparisons to avoid age effects.

## Links

- [team-authorship share](../measures/team_authorship_share.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [fixed-size team impact premium](../measures/fixed_size_team_impact_premium.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [team-growth subfield universality](../validations/team_growth_subfield_universality.md)
- [subfield equal-weight trend aggregation](../methods/subfield_equal_weight_trend_aggregation.md)
- [team-size field-growth control](../validations/team_size_field_growth_control.md)
- [patent examiner citation caveat](../validations/patent_examiner_citation_caveat.md)
- [Web of Science](web_of_science.md)
- [field classifications](../measures/field_classifications.md)
- [citation data census dates](../methods/citation_data_census_dates.md)
- [patent citation source roles](../validations/patent_citation_source_roles.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `wos_uspto_team_production_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: WOS-USPTO team panel; team-production panel; publications-and-patents team dataset; Wuchty team dominance corpus
