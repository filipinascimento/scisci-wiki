# Publication-year matched citation-age control

## Summary

Team and solo citation contrasts can control exposure age by comparing outputs within the same publication year while counting citations to a shared census endpoint.

## Canonical Form

- Unit of analysis: publication year, citation census, paper, patent, team flag, or field-year cell.
- Typical representation: within-year team/solo contrast with fixed citation-census date.
- Mechanism, measurement, or validation target: citation-age control for team versus solo impact comparison.
- Empirical signature: team/solo contrasts are estimated within publication-year cells even though recent cohorts have shorter citation exposure.

## Uses in Science of Science

- Refines team-impact measurement by linking it to [citation data census dates](citation_data_census_dates.md) and [citation window selection](citation_window_selection.md).
- Useful as a reusable check when [relative team impact ratio](../measures/relative_team_impact_ratio.md) is used in science-of-science inference.
- Creates cross-links to [field year mean high citation flag](../measures/field_year_mean_high_citation_flag.md) so the motif is not interpreted in isolation.

## Operationalization

- Count citations from publication year to a fixed census endpoint.
- Compare team and solo outputs within the same field-year or domain-year cell.
- Flag recent cohorts where short exposure can still suppress absolute citation levels.

## Evidence and Validations

- Verified local full text from Wuchty et al. (2007) counts citations from publication year to 2006 and notes smaller counts for recent papers.
- The team/solo comparison is standardized within publication year rather than across different citation ages.

## Caveats

- Within-year matching does not solve delayed-recognition, database-refresh, or right-censoring issues.
- The fixed census endpoint remains historically specific.

## Links

- [Citation data census dates](citation_data_census_dates.md)
- [Citation window selection](citation_window_selection.md)
- [Relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [Field-year mean high-citation flag](../measures/field_year_mean_high_citation_flag.md)
- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `publication_year_matched_citation_age_control`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: within-year citation-age control; publication-year citation matching; citation exposure standardization
