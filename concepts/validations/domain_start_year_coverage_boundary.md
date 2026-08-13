# Domain start-year coverage boundary

## Summary

Cross-domain team trends begin in different source-coverage years across science, social science, humanities, and patents.

## Canonical Form

- Unit of analysis: research branch, source database, start year, end year, trend slope, or aligned observation window.
- Typical representation: branch-by-source coverage-window table.
- Mechanism, measurement, or validation target: historical comparability of team-production trend windows.
- Empirical signature: team-growth slopes or endpoint contrasts change when all domains are forced into a common observation window.

## Uses in Science of Science

- Refines coverage-window validation by linking it to [wos uspto team production panel](../datasets/wos_uspto_team_production_panel.md) and [citation data census dates](../methods/citation_data_census_dates.md).
- Useful as a reusable check when [citation window selection](../methods/citation_window_selection.md) is used in science-of-science inference.
- Creates cross-links to [first last five year team contrast](../methods/first_last_five_year_team_contrast.md) so the motif is not interpreted in isolation.

## Operationalization

- Record start and end years separately for each branch and source.
- Compare slopes after noting unequal observation spans and run aligned-window sensitivity where possible.
- Avoid treating 45-year and 25-year series as equivalent without an explicit window caveat.

## Evidence and Validations

- Verified local full text from Wuchty et al. (2007) reports WoS coverage since 1955 for science and engineering, 1956 for social sciences, 1975 for arts and humanities, and patent coverage from 1975 onward.
- Those unequal start years condition the universality claim for team growth.

## Caveats

- Historical-window choices can create apparent cross-domain differences in trend strength.
- Late-start domains have less opportunity to observe early solo-dominant periods.

## Links

- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [Citation data census dates](../methods/citation_data_census_dates.md)
- [Citation window selection](../methods/citation_window_selection.md)
- [First/last five-year team contrast](../methods/first_last_five_year_team_contrast.md)
- [Team-growth subfield universality](team_growth_subfield_universality.md)
- [U.S. utility-patent issue-scope boundary](../datasets/us_utility_patent_issue_scope_boundary.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `domain_start_year_coverage_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: branch start-year boundary; unequal domain window; coverage-start sensitivity
