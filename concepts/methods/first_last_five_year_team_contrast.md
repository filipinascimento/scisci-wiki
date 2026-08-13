# First/last five-year team contrast

## Summary

Endpoint five-year windows provide a compact design for comparing team size, team share, relative impact, and citation-tail distributions.

## Canonical Form

- Unit of analysis: domain, field, endpoint window, team size, team share, citation count, RTI, or patent-citation bin.
- Typical representation: first-period and last-period summary tables by domain.
- Mechanism, measurement, or validation target: historical endpoint comparison of team production and impact.
- Empirical signature: team shares, size distributions, and team/solo citation ratios differ between early and late five-year windows.

## Uses in Science of Science

- Refines team-trend comparison method by linking it to [article team size distribution](../measures/article_team_size_distribution.md) and [solo to team impact reversal](../validations/solo_to_team_impact_reversal.md).
- Useful as a reusable check when [team solo citation frequency ratio](../measures/team_solo_citation_frequency_ratio.md) is used in science-of-science inference.
- Creates cross-links to [team high citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md) so the motif is not interpreted in isolation.

## Operationalization

- Define domain-specific first and last five-year windows before computing outcomes.
- Compute team-size distributions, team shares, RTI, and citation-tail ratios inside each window.
- Report exact years used and pair endpoint tables with time-series checks.

## Evidence and Validations

- Verified local full text from Wuchty et al. (2007) repeatedly compares first five years with last five years, including 1955-1959 versus 1996-2000 for science and engineering.
- The design makes the long-term team shift visible across production and impact measures.

## Caveats

- Endpoint windows can be sensitive to database coverage, citation maturity, and unusual historical periods.
- They should not replace slope estimates or cohort-by-year diagnostics.

## Links

- [Article team-size distribution](../measures/article_team_size_distribution.md)
- [Solo-to-team impact reversal](../validations/solo_to_team_impact_reversal.md)
- [Team-solo citation-frequency ratio](../measures/team_solo_citation_frequency_ratio.md)
- [Team high-citation tail dominance](../mechanisms/team_high_citation_tail_dominance.md)
- [Citation window selection](citation_window_selection.md)
- [Domain start-year coverage boundary](../validations/domain_start_year_coverage_boundary.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `first_last_five_year_team_contrast`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: endpoint five-year contrast; first-last period design; Wuchty endpoint window
